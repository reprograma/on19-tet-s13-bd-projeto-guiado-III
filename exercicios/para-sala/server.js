const app = require('./src/app')

const port = 1300

app.listen(port, ()=>{
    console.log(`API esta rodando na porta ${port}`);
})