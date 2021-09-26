/** @format */

import { Request, Response, Router } from "express";

class IndexRoute {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  get(req: Request, resp: Response) {
    resp.send("Hola mundo");
  }

  routes() {
    this.router.route("/").get(this.get);
  }
}

const indexRoutes = new IndexRoute();

export default indexRoutes.router;
