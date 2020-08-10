import { Request, Response } from "express";
// TODO: Instalar dependência do bcrypt e fazer a parte da encriptação e desencriptação da senha do usuário 
// import bcrypt from "bcrypt";

import db from "../database/connection";
import generateToken from "../utils/generateToken";

export default class SessionsController {
  async index(request: Request, response: Response) {
    const sessions = await db('sessions').select('*');

    if (!sessions) {
      return response.status(400).json({
        error: 'No session found',
      });
    }

    return response.status(200).json(sessions);
  }
  
  async show(request: Request, response: Response) {
    const { email, password } = request.body;

    const sessions = await db('sessions').select('*');

    if (!sessions) {
      return response.status(400).json({
        error: 'No session found with this email and password',
      });
    }
  }

  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    const user = await db('sessions').where('email', email).first();

    if (user) {
      return response.status(400).json({
        error: 'User already exists'
      });
    }

    try {
      await db('sessions').insert({
        email,
        password,
      });

      return response.status(201).json({
        user,
        token: generateToken({ id: user.id })
      });
    } catch (err) {
      response.status(400).json({
        error: 'Unexpected error while create new session',
      });
    }
  } 
}