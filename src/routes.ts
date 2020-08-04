import express from 'express';
import db from './database/connection';

const router = express.Router();

router.post('/classes', async (request, response) => {
  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule,
  } = request.body;

  const { user_id } = await db('users').insert({
    name,
    avatar,
    whatsapp,
    bio,
  });

  await db('classes').insert({
    subject,
    cost,
    user_id,
  });

  response.status(201).send();
});

export default router;