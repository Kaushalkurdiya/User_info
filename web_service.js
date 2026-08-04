import express from 'express'; 
import connectDB from './database.js';
import path from 'path';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const app = express(); 
connectDB();



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'view', 'index.html'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
}); 
