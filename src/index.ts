import dotenv from "dotenv";
import Fastify from "fastify";
import { router } from "./router";

dotenv.config();

const setup = async () => {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(router, {
    prefix: "/api/v1",
  });

  await fastify.listen(8000, "::");
};

setup();
