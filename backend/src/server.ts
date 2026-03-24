import "dotenv/config";
import { app } from "./app.js";
import { connection } from "./lib/prisma.js";

const PORT = 3000;

connection();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}/api`);
});
