const app = require('./src/app');
const port = 1313

app.listen(port, () => {

    console.log(`A porta tá batendo: ${port}`)
})

const DB_PORT = process.env.DB_PORT;

app.listen(DB_PORT, () => console.log(`Listening on port: ${DB_PORT}`)); 