import {consoleInit} from "services/consoleStyles";

export async function getAllCategories(context, data) {
  //console.log("GetAllCategories 0");

  let requestData = {
    url: "/Categories/GetAllCategoriesAndAccesses"
  };

  if (data?.skipLock)
    requestData.skipLock = true;

  await context.dispatch("request", requestData)
    .then(response => {
      console.info("%cGetAllCategories", consoleInit);
      context.commit('setCategories', response.data);
    }).catch(error => {
      console.log("error", error);
    });
}
