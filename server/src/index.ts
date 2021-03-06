import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from "dotenv";
import routes from './routes/index';

// initialize configuration
dotenv.config();

const app = express();
const router = express.Router()
const isDevelop = !!process.argv.find(arg => arg === 'develop');

const corsOptions = {
  origin: 'http://localhost:8081',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// app.use(cors(corsOptions));
app.options('/api/*', cors(corsOptions))
app.use(router);
app.use(bodyParser.json());

// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use((req, res, next) => {
  if (isDevelop) {
    console.log('%s %s %s', req.method, req.url, req.path);
  }
  next();
})

app.get('/', (req, res) => {
  res.send('Application started...');
});

routes(router);

const PORT = process.env.PORT || 3000;
app.listen(PORT);