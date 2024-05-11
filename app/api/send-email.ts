import nodemailer from "nodemailer"
import fetch from "isomorphic-unfetch"

async function sendMail(data) {
  const email = data?.email
  const name = data?.name
  const phone = data?.phone
  const message = data?.message
  const link = data?.link

  const formattedBody = `
    <html>
      <body>
        <p>${message}</p>
        <p>---</p>
        <p>${name}</p>
        <p>${email}</p>
        <p>${phone}</p>
        <p>---</p>
        <p>${link}</p>
      </body>
    </html>
  `

  const transporter = nodemailer.createTransport({
    service: "hotmail", // С помощью этой настройки можно менять тип почты, например gmail
    auth: {
      user: process.env.HOTMAIL_USER,
      pass: process.env.HOTMAIL_PASS,
    },
  })

  return await transporter.sendMail({
    from: process.env.HOTMAIL_FROM,
    to: process.env.HOTMAIL_TO,
    subject: "Заявка с сайта",
    html: formattedBody,
  })
}

export default async function lead(req, res) {
  if (req.method !== "POST") {
    return res.status(200).json({ message: "Разрешены только POST-запросы" })
  }

  const r2 = await sendMail({ ...req.body })
  if (r2?.messageId) {
    res.json({ ok: true })
  } else {
    res.json({ ok: false, message: "Сообщение не отправлено" })
  }
}