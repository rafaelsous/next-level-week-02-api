import express from 'express';

const router = express.Router();

router.post('/classes', (request, response) => {
  const data = request.body;

  console.log(data);

  response.status(201).send();
});

export default router;