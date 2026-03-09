import app from './.config/server.js';

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.get('/tarsila', (req, res) => {
    res.render('tarsila.ejs');
})

app.get('/portinari', (req, res) => {
    res.render('portinari.ejs');
})

// exemplo para fornecimento de parametro: http://localhost:3000/caculaFatorial?num=7
app.get('/caculaFatorial',(req, res) => {
    const parametro = req.query.num;
    const result = Number(parametro);  

    function caculaFatorial(result){
        let fatorial =1;
        for(let i =1; i<=result;i++){
        fatorial = fatorial*i;
        }
        return fatorial;
    }
    const resultadeoFinal = `O fatorial de ${result} é igual a ${caculaFatorial(result)}`
    res.render('fatPage', {fatorial : resultadeoFinal});
  })

app.use((req, res, next) => {
    res.status(404).render('notFound.ejs');
})


 