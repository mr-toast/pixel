const nodemailer = require('nodemailer')
import type { NextApiRequest, NextApiResponse } from 'next'

type responseData = {
  message: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<responseData>) {
  const data = req.body

  const sender = {
    name: process.env.EMAIL_NAME,
    address: process.env.EMAIL_SENDER,
  }

  const emailBody = `<body><p>${data.name} wrote,</p><p>${data.message}</p></body>`

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  })

  try {
    let info = await transporter.sendMail({
      from: sender,
      to: [process.env.EMAIL_RECIPIENT],
      replyTo: data.email,
      subject: `Site Message: ${data.subject}`,
      text: `${data.name} @ ${data.email} wrote, - ${data.message}`,
      html: emailBody,
    })

    console.log('Message sent: %s', info.messageId)
    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Error adding document' })
  }
}
