import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client.js";

const connectionString = `${process.env.DATABASE_URL}`;

const adapter = new PrismaPg({ connectionString });
export const prisma = new PrismaClient({ adapter });

export async function connection() {
  try {
    await prisma.$connect();
    console.log("💾 Start connection with DB");
  } catch (error) {
    console.log(error);
  }
}
