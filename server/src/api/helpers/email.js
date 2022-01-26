import Mailgen from "mailgen";
import nodemailer from "nodemailer";

const mailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "MarocShip",
    link: "https://i.ibb.co/QmDs6JV/16303757.jpg",
    logo: "https://i.ibb.co/QmDs6JV/16303757.jpg",
  },
});

const CreateUserMail = async (email, password, username) => {
  const template = {
    body: {
      name: username,
      intro: "Welcome to MarocShip! We're very excited to have you on board.",
      instructions: "To get started using your account  :",
      dictionary: {
        email: email,
        password: password,
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const info = await transporter.sendMail({
    from: '"MarocShip" <no-reply@gmail.com>',
    to: email,
    subject: "MarocShip Authentication",
    text: "MarocShip",
    html: mailGenerator.generate(template),
  });
  //   return info;
};

export { CreateUserMail };
