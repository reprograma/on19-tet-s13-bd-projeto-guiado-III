const app = require('./src/app')

const DB_PORT = process.env.DB_PORT;

app.listen(DB_PORT, ()=>{
    console.log(`API is running at port ${DB_PORT}`);
})