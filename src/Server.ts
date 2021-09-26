import express, {Application} from 'express';
import morgan from 'morgan';
import IndexRoute from './routes/IndexRoute'

export class Server {

  private port: number = 8031;
  private app: Application

  constructor() {
      this.app = express();
      this.middlewares();
      this.routes();
  }

  private middlewares(){
      this.app.use(morgan('dev'))
      this.app.use(express.json());
  }

  private routes(){
      this.app.use(IndexRoute)
  }

  async start(){
      await this.app.listen(this.port);
      console.log('Server on port ', this.port);
  }

}