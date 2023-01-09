import shopify from "./shopify.js";

export async function getProducts(session) {
    let cursor = 0;
    console.log(session)
  
    const client = new shopify.api.clients.Graphql({ session });
  
    console.log("client", client);
  
    let abc = cursor == 0 ? "first : 4" : 'first:4,after:"' + cursor + '"';
  
    console.log("abc", abc);
  
    const data = await client.query({
      data: `query {
  products(${abc}) {
  edges {
    node {
      id
      title
      priceRangeV2{
        minVariantPrice{
          amount
        }
      }
      totalInventory
      featuredImage{
        url
      }
  
    }
    cursor
  }
  pageInfo {
    hasNextPage
  
  }
  }
  }`,
    });
  
    let a = data.body.data.products.edges;
  
    let b = data.body.data.products.pageInfo.hasNextPage;
  
    console.log(b);
  
    console.log(a);
  }