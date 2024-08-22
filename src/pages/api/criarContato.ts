// pages/api/criarContato.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import { Contato } from '../../models/contato';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, phone, service, location, message }: Contato = req.body;

        if (!name || !email || !phone || !service || !location || !message) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        try {
            const { db } = await connectToDatabase();
            const result = await db.collection('t_contato').insertOne({ name, email, phone, service, location, message });
            return res.status(201).json({ message: 'Contato salvo com sucesso', id: result.insertedId });
        } catch (error) {
            console.error('Erro ao salvar contato:', error);
            return res.status(500).json({ error: 'Erro ao salvar contato' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
