import shopify from "../../shopify.js";

async function validateWithShopify (req, res ,next) {
    // console.log("---------------", await shopify.validateAuthenticatedSession());
    shopify.validateAuthenticatedSession().then(result=>{
        console.log("kkkkkkkkkkkkkk",result);
    }).catch(err=>{
        console.log("err->",err)
    })
    next();
}

export default validateWithShopify;