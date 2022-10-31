import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import { SessionController } from '../controllers/SessionsControlle';

const sessionsRouter = Router();
const sessionsController = new SessionController();

// validar envio de email e senha
sessionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),

  sessionsController.create,
);

export { sessionsRouter };
