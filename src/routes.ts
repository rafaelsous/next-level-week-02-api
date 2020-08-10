import express from 'express';

import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';
import SessionsController from './controllers/SessionsController';
import AuthenticationsController from './controllers/AuthenticationsController';

const router = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
const sessionsController = new SessionsController();
const authenticationsController = new AuthenticationsController();

router.get('/classes', classesController.index);
router.post('/classes', classesController.create);

router.get('/connections', connectionsController.index);
router.post('/connections', connectionsController.create);

router.get('/sessions', sessionsController.index);
router.post('/sessions', sessionsController.create);

router.post('/authentications', authenticationsController.index);

export default router;