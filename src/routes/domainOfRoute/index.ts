import express from "express";
import { responseWrapper } from "../utils";
import { YourTypeRequest } from "./types";
const yourExpressRouter = express.Router();

yourExpressRouter.post(
  "/",
  async (req: YourTypeRequest, res) =>
    await responseWrapper<void>(logicFunction(req), res)
);

const logicFunction = (req: YourTypeRequest) => async () => {};

export { yourExpressRouter };