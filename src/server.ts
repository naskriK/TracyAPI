import dotenv from "dotenv";
import { app } from "./main";

dotenv.config();

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server is listening at port:${PORT}`);
});
