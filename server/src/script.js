const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const newLink = await prisma.user.create({
    data: {
      prefix: "MR",
      firstName: "John",
      surName: "John",
      email: "john@gmail.com",
      mobilePhone: "333222222",
      gender: "Male",
      age: "27",
      nationlity: "SG",
      org: "Google",
      jobTitle: "Software Engineer",
    },
  });
  console.log(newLink);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
