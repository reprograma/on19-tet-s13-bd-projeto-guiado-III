const app = require("./src/app.js");
const port = 1313;

app.listen(port, () => {
  console.log(`The api is listening on: ${port}`);
});


// opcao pela professora
// const DB_PORT = process.env.DB_PORT;
// app.listen(DB_PORT, () => console.log(`Listening on port: ${DB_PORT}`));
