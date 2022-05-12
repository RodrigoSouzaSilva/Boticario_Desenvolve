module.exports = app => {
    app.get('/atendimento',(req, res) => res.send('você está na rota de atendimento, é está realizando um GET'))

    app.post('/atendimento', (req, res) => {
        console.log(req.body)
        res.send('você esta na rota de atendimento e está realizando um POST')
    })
}