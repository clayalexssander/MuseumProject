const nome = 'Museu de Arte de São Paulo Assis Chateaubriand - MASP';
export async function home(req, res) {
    console.log('Controller da home...');
    try {
        res.render('home.ejs', { nome : nome });
    } catch (error) {
        console.log('Ocorreu um erro:v', error);
        res.status(500).send('Erro');
    }
}