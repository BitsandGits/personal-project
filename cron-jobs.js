const cron = require('node-cron');
const nodemailer = require('nodemailer');

// Reminder email template
const reminderTemplate = require("./templates/reminder");

// Person schema
const Person = require("./models/person-model");

// Function to send the email. Takes as parameters the email address it is going to send the email to, and the person.
const sendEmail = async (emailAddress, person) => {
    let transporter = nodemailer.createTransport({
        host: process.env.CONFIG_MAIL_HOST,
        // By default, Environment variables are of type String
        // Parse the PORT value to Integer
        port: parseInt(process.env.CONFIG_MAIL_PORT),
        // Parse the SECURE value to Boolean
        secure: (process.env.CONFIG_MAIL_SECURE === "true"),
        auth: {
            user: process.env.CONFIG_MAIL_USERNAME,
            pass: process.env.CONFIG_MAIL_PASSWORD,
        },
        tls: {
            // Required if the Email is being sent from a Domain that doesn't match CONFIG_MAIL_HOST
            rejectUnauthorized: false
        }
    });

    let info = await transporter.sendMail({
        from: '"InnerCircle" <inner-circle@email.com>',
        to: emailAddress,
        subject: "Contact Reminder - InnerCircle",
        html: reminderTemplate(person),
    });

    console.log("Email sent: %s", info.messageId);

    return true;
}

// Run the function every 5 minutes. See this link for more use cases https://www.npmjs.com/package/node-cron
cron.schedule('*/1 * * * *', async () => {
    // Find all persons with "reminderSent: false"
    const persons = await Person.find({
        reminderSent: false,
    });

    let today = new Date();

    persons.forEach(async (person) => {
        // Set the limit date to be the last contact date + the days in frequency
        let limitDate = new Date(person.date);
        limitDate.setDate(limitDate.getDate() + person.frequency);

        // If today's date is past the limit date
        if (today > limitDate) {
            // Call sendEmail() to send the email, passing the Email Address in .env and the person
            const emailSent  = await sendEmail(process.env.EMAIL_ADDRESS, person).catch(console.error);

            // If the email is successfully sent, update the person to "reminderSent: true" so it is not evaluated again until the last contact date for that person is updated
            if (emailSent) {
                const updatedPerson = await Person.findByIdAndUpdate(
                    person._id,
                    { reminderSent: true },
                    { new: true },
                    (err) => {
                        if (err) console.log(err);
                    }
                );
            }
        }
    });
});