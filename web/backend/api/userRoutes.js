import express from "express";
import shopify from "../../shopify.js";
import { getProducts } from "../../getProducts.js";
import  validateWithShopify  from "../auth/auth.js";
const router = express.Router();
const app = express();
// router.use("/", shopify.validateAuthenticatedSession());
app.use(express.urlencoded({ extended: true }));

router.get("/getProduct", (req, res) => {
  console.log("enter hereee in request", res.locals);
//   console.log(res.locals);
//   getProducts(res.locals.shopify.session);
});

export default router;
