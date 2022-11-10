const app = require("./src/app.js");
const port = 1313

const DB_PORT = process.env.DB_PORT;

app.listen(DB_PORT, () => console.log(`Listening on port: ${DB_PORT}`));