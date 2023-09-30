import db from "@/db/db";
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {username, password} = req.body;

        try {
            const [user] = await db.query('SELECT * FROM user WHERE username = ?', [username]);
            if(user.length === 1) {
                const isPasswordValid = await bcrypt.compare(password, user[0].password);
                // console.log(isPasswordValid)
              if (isPasswordValid) {
                res.status(200).json({
                    message: 'Authentication Success'
                });
              } else {
                res.status(401).json({
                    message: 'Authentication Failed'
                })
              }
            } else {
                res.status(401).json({
                    message: 'Authentication Failed'
                })
            }
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