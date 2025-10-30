import express from 'express';
const app = express();
app.use(express.json());
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});
app.post('/api/user', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email)
        return res.status(400).json({ error: 'Missing fields' });
    res.status(201).json({ id: 1, name, email });
});
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
export default app;
