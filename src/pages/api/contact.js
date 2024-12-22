// /pages/api/contact.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Nodemailer transporter を設定
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: "daiki11252008@gmail.com",
                pass: "wfsc rczk zszp hitw"
            },
        });

        const mailOptions = {
            from: email,
            to: 'daiki11252008@gmail.com' ,
            subject: `お問い合わせ: ${name}`,
            text: `名前: ${name}\nメール: ${email}\nメッセージ: ${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'メールが送信されました' });
        } catch (error) {
            console.error('メール送信失敗:', error);
            return res.status(500).json({ error: 'メール送信に失敗しました' });
        }
    } else {
        return res.status(405).json({ error: 'POST メソッドのみ対応しています' });
    }
}
