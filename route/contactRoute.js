const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  const data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Please Fill All The Fields!" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  let mailOptions = {
    from: `${data.email}`,
    to: process.env.EMAIL,
    subject: `message from ${data.name}`,
    html: `
            <hr />
            <h3>Informations:<h3/>
            <h4>Name: ${data.name}<h4/>
            <h4>Email: ${data.email}<h4/>
            <hr/>
            <h3>Message:</h3>
            <p>${data.message}<p/>
            <hr/>
            `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    try {
      if (error)
      return res.status(400).json({ msg: "Please Fill All The Fields!" });
        res.status(200).json({ msg: "Thank You For Contacting Me." });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});
module.exports = router;
