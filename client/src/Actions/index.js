import axios from 'axios';

  export function SeachProducts(name) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/items?search=${name}`)
            .then(r => r.data)
            .then(d => dispatch(Searching(d)))
            .catch(e => console.log(e))
    }
  }
  
  export function Searching(payload) {
    return {
        type: 'SEARCH_PRODUCT',
        payload
    }
  }

export function GetProductDetail(id) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/items/${id}`)
            .then(r => r.data)
            .then(d => dispatch(Get_Detail(d)))
            .catch(e => console.log(e))
    }
}

export function Get_Detail(payload) {
    console.log("payloadd",payload)
    return {
        type: 'DETAIL_PRODUCT',
        payload
    }
}