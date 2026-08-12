// get data from client / request in some way; needs to be get or psot request 
//  depending on resp data will be stored in query param or body
//  data is not private so usually fine if is query param
//  if query param usually is get
// since usually a get, 

// get req, query param, give it over to sql after


import { Router } from 'express';
import { getUsers } from '../controllers/usersController.js';
import { createUsernameGet } from '../controllers/usersController.js';
import { createUsernamePost } from '../controllers/usersController.js';
import { usersSearchGet } from '../controllers/usersController.js';
import { deleteUsernames } from '../controllers/usersController.js';
import { Query } from 'pg';

const appRouter = Router();


appRouter.get('/', getUsers);

appRouter.get('/new', (req, res) => {
    // display html form to user with one username input text field
    res.render('form');
    // it will submit to the next route
});

appRouter.post('/new', (req, res) => {
    // save incoming username to the db
    console.log('Username to be saved: ', req.body.username);
});

appRouter.get("/search/:name", usersSearchGet);

appRouter.get('/delete', deleteUsernames);

export { appRouter };