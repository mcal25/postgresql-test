import { pool } from './pool.js';

async function getAllUsernames() {
    const { rows } = await pool.query('SELECT * FROM usernames');
    console.log(rows);
    return rows;
}

async function searchUsernames(name) {
    const { rows } = await pool.query('SELECT * FROM usernames WHERE username ILIKE $1', [`%${name}%`]);
    return rows;
}

async function insertUsername(username) {
    await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username]);
}

export { getAllUsernames, insertUsername, searchUsernames};