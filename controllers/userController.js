import * as db from '../db/queries.js';

const getUsers = async (req, res) => {
     console.log('Usernames will be logged here - WIP');
     const usernames = await db.getAllUsernames();
     console.log('Usernames: ', usernames);
     res.send('Usernames: ' + usernames.map(user => user.username).join(', '));
};

async function createUsernameGet(req, res) {
    // render the form
}

async function createUsernamePost(req, res) {
    const { username } = req.body;
    await db.insertUsername(username);
    res.redirect('/');
}

export { getUsers, createUsernameGet, createUsernamePost};