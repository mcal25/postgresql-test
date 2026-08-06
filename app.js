import express from 'express';
import ejs from 'ejs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetsPath = path.join(__dirname, 'public');

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));



const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Express app listening on port ${PORT}`);
});