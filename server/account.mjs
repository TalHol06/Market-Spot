
import express from 'express';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { accounts } from './db.mjs';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({origin: 'http://localhost:3000'}));
const secretKey = process.env.SECRET_KEY || 'default_secret_key';

// Login
app.post('/api/login', async (req, res) =>{
    const { email, password } = req.body;
    try{
        const user = await accounts.findOne({ where: { email } });

        if (!user){
            return res.status(404).json({ error: 'Incorrect Email' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch){
            const payload = { email, role: 'user' };
            const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

            const safeUser = {
                account_id: user.account_id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
            };

            return res.status(200).json({ success: true, token, user: safeUser });
        } else{
            return res.status(400).json({ error: 'Incorrect Password' });
        }
    } catch (err){
        console.error('Error occured while logging in: ' +err.message);
        res.status(500).json({ error: 'Error logging in'});
    }
});

// Create an Account
app.post('/api/create', async (req, res) =>{
    const { first_name, last_name, email, password } = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await accounts.create({
            first_name,
            last_name,
            email,
            password: hashedPassword
        });

        return res.status(201).json({ success: true, user: newUser });
    } catch (err){
        console.error('Error occured while creating your account: ' +err.message);
        if (err.name === 'SequalizeUniqueConstraintError'){
            return res.status(400).json({ error: 'Email already exists' });
        } else{
            return res.status(500).json({ error: 'Error creating your account' });
        }
    }
});

// Get all accounts
app.get('/api/accounts', async (res, req) =>{
    try{
        const allAccounts = await accounts.findAll();
        return res.status(200).json(allAccounts);
    } catch (err){
        console.error('Error fetching accounts: ' +err.message);
        return res.status(500).json({ error: 'Error fetching accounts' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`);
});