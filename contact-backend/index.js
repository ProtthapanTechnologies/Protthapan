const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/contact', async (req, res) => {
    const { first_name, last_name, email, phone_number, message } = req.body;

    if (!first_name || !last_name || !email || !phone_number || !message) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `"${first_name} ${last_name}" <${email}>`,
        to: process.env.TO_EMAIL,
        subject: 'New Contact Form Submission',
        html: `
            <h3>Contact Details</h3>
            <p><strong>Name:</strong> ${first_name} ${last_name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone_number}</p>
            <p><strong>Message:</strong><br>${message}</p>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Email send failed:', error);
        res.status(500).json({ message: 'Failed to send email. Please try again later.' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
