import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "avikaushik076@gmail.com",
      pass: "ktwx ibiz orbs ntmz",
    },
  });
  
  export const sendMail = async (to, subject, text, html) => {
    const mailOptions = {
      from: "avikaushik076@gmail.com",
      to,
      subject,
      text,
      html,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Failed to send email");
    }
  };