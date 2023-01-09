// import { Session } from '@shopify/shopify-api/dist/auth/session'
import { Session } from "@shopify/shopify-api";

import SessionStorage from "./sessionModal.js";

 export async function storeCallback(session) {
  let domain_id = "";
  console.log("*****Inside Store CallBack******");
  try {
    let session_prop = { ...session };
    const filter = { shop: session_prop.shop };

    if (session_prop.id.indexOf(`${session_prop.shop}`) > -1) {
      domain_id = session_prop.id;
    }

    const update = {
      shop: session_prop.shop,
      session_id: session_prop.id,
      domain_id: domain_id,
      accessToken: session_prop.accessToken, //initially undefined
      state: session_prop.state,
      isOnline: session_prop.isOnline,
      scope: session_prop.scope, //initially undefined
      onlineAccessInfo: session_prop.onlineAccessInfo, //initially undefined
      expires: session_prop.expires, //initially undefined
    };

    await SessionStorage.findOneAndUpdate(
      filter,
      update,
      { new: true, upsert: true },
      function (error, docs) {
        if (error) throw error;
      }
    );

    return true;
  } catch (err) {
    // throw errors, and handle them gracefully in your application
    throw new Error(err);
  }
}

export async function loadCallback(id) {
  console.log("*****Inside Load CallBack******");
  try {
    let session = new Session(id);

    let promise_query = new Promise((resolve, reject) => {
      SessionStorage.findOne({ session_id: id }, function (error, docs) {
        if (error) throw error;
        session.shop = docs.shop;
        session.accessToken = docs.accessToken;
        session.state = docs.state;
        session.isOnline = docs.isOnline;
        session.scope = docs.scope;
        session.onlineAccessInfo = docs.onlineAccessInfo;

        const date = new Date();
        date.setDate(date.getDate() + 1);
        session.expires = date;

        if (session.expires && typeof session.expires === "string") {
          session.expires = new Date(session.expires);
        }
        resolve();
      });
    });

    await promise_query;
    return session;
  } catch (err) {
    // throw errors, and handle them gracefully in your application
    throw new Error(err);
  }
}

export async function deleteCallback(id) {
  console.log("*****Inside Delete CallBack******");
  try {
    return false;

    /*** 
                let delete_session = { id: id };
                let deletedShop = await SessionStorage.deleteOne(delete_session)
                .then((result) => 
                {
                    console.log(`Deleted ${result.deletedCount} item.`);
                    return true;
                })
                .catch((err) => {
                    console.error(`Delete failed with error: ${err}`);
                    return false;
                });
            ****/
  } catch (err) {
    // throw errors, and handle them gracefully in your application
    throw new Error(err);
  }
}

