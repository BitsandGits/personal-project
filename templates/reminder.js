const reminderTemplate = (person) => {
    return `<h1>Hi there!</h1>
        <p>
            It is time to contact <strong>${person.name}</strong>! You were last in touch with them on ${person.date}. 
        </p>
        <p>
            <strong>${person.name}</strong> can be reached via email: <a href="mailto:${person.email}">${person.email}</a>
        </p>
        <p>
            If you find yourself getting too many reminders to contact this person, you should consider changing the frequency you want to contact this person, which right now is: <strong>${person.frequency} days</strong>
        </p>`;
}

module.exports = reminderTemplate;