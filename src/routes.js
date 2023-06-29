import { Router } from 'express';
import UserController from './app/controllers/UserController';
import './database'//since its importing a index named file...

const routes = new Router()

routes.post('/users', UserController.store)

export default routes