const app = require("./src/app");
const DB_PORT = 1313;

app.listen(DB_PORT, () => console.log(`database escutando na porta: ${DB_PORT}`));