const reminderTemplate = (person) => {
    return `<h1>Hi there!</h1>
        <p>
            We have sent you this email to remind you to contact <strong>${person.name}</strong>!
        </p>
        <p>
            You can directly reach out to <strong>${person.name}</strong> via email: <a href="mailto:${person.email}">${person.email}</a>
        </p>
        <p>
            If you find yourself getting too many reminders to contact this person, you should consider changing the frequency you want to contact this person, which right now is: <strong>${person.frequency} days</strong>
        </p>`;
}

module.exports = reminderTemplate;