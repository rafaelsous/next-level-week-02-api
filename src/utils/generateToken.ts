import jwt from "jsonwebtoken";
import authConfig = require("../config/auth.json");

interface RequestParams {
  id: number;
}

export default function(params: RequestParams) {
  return jwt.sign({ id: params.id }, authConfig.secret, {
    expiresIn: 86400,
  });
}