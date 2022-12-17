const app = require('./src/app.js')
const port = process.env.PORT

app.listen(port, () => {
    console.log(`Pelo amor da mãe Gaia, a api está rodando na porta ${port}`)
})