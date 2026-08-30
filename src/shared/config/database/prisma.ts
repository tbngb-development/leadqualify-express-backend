import { PrismaClient } from "../../../generated/prisma";

const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["error", "warn"]
      : ["error", "warn"],
});

export default prisma;
