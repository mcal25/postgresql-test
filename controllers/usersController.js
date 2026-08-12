import * as db from '../db/queries.js';

export const getUsers = async (req, res) => {
     console.log('Usernames will be logged here - WIP');
     const usernames = await db.getAllUsernames();
     console.log('Usernames: ', usernames);
     res.send('Usernames: ' + usernames.map(user => user.username).join(', '));
};

export async function createUsernameGet(req, res) {
    // render the form
}

export async function createUsernamePost(req, res) {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect('/');
}

export async function usersSearchGet(req, res) {
    const { name } = req.params;
    const usernames = await db.searchUsernames(name);
    res.send(`The name you searched: ${usernames.map(user => user.username).join(', ')}`);
}

export async function deleteUsernames(req, res) {
    await db.deleteUsernames();
    res.send('All your burgers were eaten');
}

