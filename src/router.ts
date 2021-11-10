import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { getUsers } from "./controller";

export const router = async (
  childInstance: FastifyInstance,
  opts: FastifyPluginOptions
) => {
  childInstance.get("/endpoint", getUsers);
};
