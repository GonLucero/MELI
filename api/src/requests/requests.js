const axios = require("axios");

const URL = "https://api.mercadolibre.com";

const ENDPOINTS = {
  SEARCH: `${URL}/sites/MLA/search?limit=4&q=:query`,
  ITEM: `${URL}/items/:id`,
  ITEM_DESCRIPTION: `${URL}/items/:id/description`,
  CURRENCY: `${URL}/currencies/:id`,
  CATEGORIES: `${URL}/categories/:id`
};

const getAuthor = function(){
    return {
      name: "Gonzalo",
      lastname: "Lucero"
    };
  }

const getItemDetailEndpoint = function(itemId){
  return new Promise(function(resolve, reject){
    const urlApiItem = ENDPOINTS.ITEM.replace(":id", itemId);
    axios.get(urlApiItem)
    .then(function(response){
      return getItemDetail(response.data);
    })
    .then(function(result){
      resolve(result);
    }).catch(function(error){
      console.log(error);
    });
  });
}

const getItemDetail = function(data){
  return new Promise(function(resolve, reject){
    Promise.all([getItem(data, true), getAuthor(), getCategoriesID(data.category_id)]).then(function(values){
      resolve({
        "author": values[1],
        "item": values[0],
        "categories": values[2]
      });
    }).catch(function(error){
      reject(error);
    });
  });
};

const getItemsEndpoint = function(searchQuery){
  var promise = new Promise(function(resolve, reject){
    const urlSearchItems = ENDPOINTS.SEARCH.replace(":query", searchQuery);
    axios.get(urlSearchItems)
    .then(function(response){
      return getItems(response.data);
    })
    .then(function(result){
      resolve(result);
    })
  });
  return promise;
}

const getItems = function(data){
  return new Promise(function(resolve, reject){
    var result = {};
    result.author = {};
    result.categories = [];
    result.items = [];
    Promise.all([getCategories(data.filters), getAuthor()])
    .then(function(values){
      result.categories = values[0];
      result.author = values[1];
      var promises = data.results.splice(0,4).map(function(item){
        return getItem(item);
      });
      Promise.all(promises)
      .then(function(items){
        result.items = items;
        resolve(result);
      }).catch(function(error){
        reject(error);
      });
    }).catch(function(error){
      reject(error);
    });
  });
};

const getCategories = function(filters){
  return new Promise(function(resolve, reject){
    let categories = [];
    // Obtengo las categorías recorriendo los filtros y buscando sus valores "category".
    for(var i=0;i<filters.length;i++){
      var filter = filters[i];
      if(filter.id === "category" && filter.values.length > 0){
        categories = filter.values[0].path_from_root.map(function (value) {
          return value.name
        })
      }
    }
    resolve(categories);
  });
}


const getDescription = function(itemId){
  return new Promise(function(resolve, reject){
    const urlApiItemDescription = ENDPOINTS.ITEM_DESCRIPTION.replace(":id", itemId);
    axios.get(urlApiItemDescription)
    .then(function(response){
      resolve(response.data.plain_text);
    });
  });
}

const getCurrency = function(currencyId){
  return new Promise(function(resolve, reject){
    const urlApiCurrency = ENDPOINTS.CURRENCY.replace(":id", currencyId);
    axios.get(urlApiCurrency)
    .then(function(currencyResponse){
      resolve({
        "id": currencyResponse.data.id,
        "symbol": currencyResponse.data.symbol,
        "decimals": currencyResponse.data.decimal_places
      });
    })
  });
};

const getCategoriesID = function(categorieId){
  return new Promise(function(resolve, reject){
    const urlApiCategorieID = ENDPOINTS.CATEGORIES.replace(":id", categorieId);
    axios.get(urlApiCategorieID)
    .then(function(categorieResponse){
      const AllCategories = []
      var categories = categorieResponse.data.path_from_root.map((c)=>{
        AllCategories.push(c.name)
      })
      resolve({
        AllCategories,
      });
    })
  });
};

const getItem = function(data, detailed = false){
  var promise = new Promise(function(resolve, reject){
    var result = {
      id: data.id,
      title: data.title,
      price: {
        amount: data.price,
      },
      picture: "",
      condition: data.condition,
      free_shipping:  data.shipping.free_shipping,
      adress: data.seller_address.state.name
    };
    let neededPromises = [];
    neededPromises.push(getCurrency(data.currency_id).then(function(currencyData){
      result.price.currency = currencyData.symbol;
      result.price.decimals = currencyData.decimals;
    }));
    // neededPromises.push(getCategoriesID(data.category_id).then(function(categoryData){
    //   result.category = categoryData;
    // }));
    if(!detailed){
      if(data.thumbnail){
        result.picture = data.thumbnail.replace(/-I\./, "-X.");
      }
    }else{
            if(data.pictures && data.pictures.length>0){
                result.picture = data.pictures[0].url;
            }
            result.sold_quantity = data.sold_quantity;
            neededPromises.push(getDescription(data.id).then(function(description){
                result.description = description;
            }));
    }
    Promise.all(neededPromises).then(function(...values){
      resolve(result);
    }).catch(function(error){
      reject(error);
    });
  });
  return promise;
}


const Requests = {
    getItemDetailEndpoint: getItemDetailEndpoint,
    getItemsEndpoint: getItemsEndpoint
  };
  
  module.exports = Requests;