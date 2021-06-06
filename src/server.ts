import express from 'express';
import morgan from 'morgan';
import path from 'path';

const PORT = 4000;

const app: express.Express = express();
const logger = morgan('dev');
app.use(logger);
app.use('/static', express.static('assets'));

app.get('/', function (req, res) {
  res.sendFile(path.resolve('./src', 'client', 'index.html'));
});

const handleListening = (): void =>
  console.log(`Server listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
