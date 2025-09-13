// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, budget, message } = req.body;

    // Email konfiguratsiyasi
    const transporter = nodemailer.createTransporter({
      service: 'gmail', // yoki boshqa provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email kontenti
    const mailOptions = {
      from: email,
      to: process.env.CONTACT_EMAIL, // Sizning email manzilingiz
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>Yangi xabar portfolio saytidan</h2>
        <p><strong>Ism:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mavzu:</strong> ${subject}</p>
        <p><strong>Byudjet:</strong> ${budget || 'Belgilanmagan'}</p>
        <p><strong>Xabar:</strong></p>
        <p>${message}</p>
        <hr>
        <p>Xabar yuborilgan sana: ${new Date().toLocaleString()}</p>
      `,
    };

    // Emailni jo'natish
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ message: 'Xabar muvaffaqiyatli yuborildi!' });
  } catch (error) {
    console.error('Xatolik:', error);
    res.status(500).json({ message: 'Xabar yuborishda xatolik yuz berdi' });
  }
}