import { PrismaClient } from "@prisma/client";
import { v4 } from "uuid";
const prisma = new PrismaClient();

// Seed 20 random users users
async function main() {
  const data = Array.from(Array(20).keys()).map((idx) => ({
    email: `${v4()}@gmail.com`,
    name: v4(),
  }));

  await prisma.user.createMany({
    data,
  });
}

main()
  .catch((e) => {
    // eslint-disable-next-line
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
