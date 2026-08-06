import { Router } from 'express';
import { getUsers } from '../controllers/userController.js';

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









export { appRouter };