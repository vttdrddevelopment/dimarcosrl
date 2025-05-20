import {NextApiRequest, NextApiResponse} from "next";
import {Message, SMTPClient} from "emailjs";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const client = new SMTPClient({
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PSW,
        ssl: true,
        host: process.env.EMAIL_HOST,
    })

    try {

        const message = new Message({
            text: req.body.text + " | Inviato Da: " + req.body.nome + " " + req.body.cognome,
            from: req.body.mail,
            to: process.env.EMAIL_USER,
            subject: `Messaggio Da ${req.body.nome} ${req.body.cognome}. Numero telefonico: ${req.body.telefono}`,
        });

        await client.sendAsync(message)

        res.status(200).json({messaggio: "Email Inviata"})

    } catch (e) {
        console.log(e)
        res.status(500).json({errore: "Email Non Inviata"})
    }
}