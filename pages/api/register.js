import db from "@/db/db";
import bcrypt from 'bcrypt';

const saltRound = 10;

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {username, password} = req.body;

        try {
            const [existingUser] = await db.query('SELECT * FROM user WHERE username = ?', [username]);

            if (existingUser.length > 0) {
                res.status(400).json({
                    message: 'Username already exists'
                });
                return;
            }
            const hashedPassword = await bcrypt.hash(password, saltRound);

            await db.query('INSERT INTO user (username, password) VALUES (?, ?)',[username, hashedPassword]);
            res.status(201).json({
                message: 'User registered successfull!'
            });

        } catch(err) {
            console.error(err);
            res.status(500).json({
                message: 'Internal server error'
            })
        }
    } else {
        res.status(405).end(); // method not allowed
    }
}