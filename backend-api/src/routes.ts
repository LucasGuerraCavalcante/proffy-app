import express from 'express';

import ClassesControler from './controllers/ClassesControler';

const routes = express.Router();
const classesControler = new ClassesControler();

routes.get('/classes', classesControler.index);
routes.post('/classes', classesControler.create);

export default routes;