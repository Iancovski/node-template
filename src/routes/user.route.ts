import express from 'express';
import UserController from '../controllers/user.controller';

const router = express.Router();

router.post('/', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const response = UserController.create(req.body);
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
});

router.get('/', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const response = UserController.get(req.query);
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const response = UserController.getById(req.params.id);
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
});

router.put('/:id', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const response = UserController.update(req.params.id, req.body);
        res.status(200).json(response);
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', function (req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        UserController.delete(req.params.id);
        res.status(200).send(`User ${req.params.id} deleted successfully.`);
    } catch (error) {
        next(error);
    }
});

export default router;