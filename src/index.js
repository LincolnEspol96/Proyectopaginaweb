const app = require('./app.js');
const port = app.get('port');
const host = app.get('host');
const data = require('./controllers/database')
app.listen(port, () => {
    console.log(`Iniciar Página web con http://${host}:${port}`);
})
data.init();
