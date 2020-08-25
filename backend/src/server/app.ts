import * as express from 'express';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { routes } from './routes';

dotenv.config({ path: path.resolve('..', '..', '.env') });

const app = express();
app.use('/public', express.static(path.resolve(__dirname, '..', '..', 'public')));
app.use(routes);

export default app;