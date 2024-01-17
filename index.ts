import app from "./app.ts";
import { dbConnection } from "./config/dbConnection.ts";

dbConnection();

app.listen(4000, () => console.log("Listening on port 3000"));
