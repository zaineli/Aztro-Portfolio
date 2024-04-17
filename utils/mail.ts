var nodemailer = require("nodemailer");

export async function sendMail(message: string) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  console.log({
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PW,
  });

  var mailOptions = {
    // from: "",
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_TO,
    subject: "Mail from Portflio website",
    text: message,
  };

  transporter.sendMail(mailOptions, function (error: string, info: string) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}
