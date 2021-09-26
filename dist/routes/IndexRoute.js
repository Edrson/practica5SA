"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoute {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    get(req, resp) {
        resp.send("Hola mundo!!!");
    }
    routes() {
        this.router.route("/").get(this.get);
    }
}
const indexRoutes = new IndexRoute();
exports.default = indexRoutes.router;
//# sourceMappingURL=IndexRoute.js.map