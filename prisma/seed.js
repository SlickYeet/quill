import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

export const main = async () => {
  const password = await hash("test", 12);
  const user = await prisma.user.upsert({
    where: { email: "test@famlam.ca" },
    update: {},
    create: {
      email: "test@famlam.ca",
      name: "test",
      password,
    },
  });
  console.log({ user });
};
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
