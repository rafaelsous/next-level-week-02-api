import { Request, Response } from "express";

import db from "../database/connection";
import generateToken from "../utils/generateToken";

export default class AuthenticationsController {
  async index(request: Request, response: Response) {
    const { email, password } = request.body;

    const user = await db('sessions').where('email', email).first();

    if (!user) {
      return response.status(400).json({
        error: 'User not found',
      });
    }

    if (user.password !== password) {
      return response.status(400).json({
        error: 'Invalid password',
      });
    }

    user.password = undefined;

    return response.json({
      user,
      token: generateToken({ id: user.id }),
    });
  }
}