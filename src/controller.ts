import { FastifyReply, FastifyRequest } from "fastify";
import { prismaClient } from "./prisma";

export const getUsers = async (req: FastifyRequest, reply: FastifyReply) => {
  const size = 20;
  const page = 0;

  const [data, total] = await prismaClient.$transaction([
    prismaClient.user.findMany({
      take: size,
      skip: page * size,
      where: {},
      orderBy: {
        id: "asc",
      },
    }),
    prismaClient.user.count(),
  ]);

  reply.status(200).send({
    data,
    total,
  });
};
