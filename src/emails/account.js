const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = process.env.SENDGRID_API_KEY

sgMail.setApiKey(sendgridAPIKey)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'support@taskmanager.com',
        subject: 'Welcome to Task Manager',
        text: `Thanks for joining ${name}. Let us know how you get along with the app`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'support@taskmanager.com',
        subject: 'Account Deactivation',
        text: `We are sorry to see you go ${name}. Please share your feedback so that we might improve our services.`
    })
}

module.exports = {
    sendWelcomeEmail, sendCancellationEmail
}