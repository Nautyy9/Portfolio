// mailService.ts
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.BREVO_SMTP_USER,
    pass: process.env.BREVO_SMTP_PASS,
  },
  // debug: true,
  // logger: true,
});

export async function sendContactMail({
  name,
  email,
  phoneNumber,
  subject,
  message,
}: {
  name: string;
  email: string;
  phoneNumber: number;
  subject: string;
  message: string;
}) {
  const mailOptions = {
    from: `Nitin'sFolio🌟🌟👀👀<contact@${process.env.DOMAIN_NAME}>`, // sender address
    to: process.env.RECEIVER_EMAIL, // you can also CC yourself or team here
    subject: `📬 New Contact: ${subject}`,
    html: `
      <h3>New Message from ${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone Number:</strong> ${phoneNumber}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };
  try {
    transporter.verify(function (error, success) {
      if (error) {
        console.log("SMTP connection error:", error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error; // rethrow to handle it in the calling function
  }
}
