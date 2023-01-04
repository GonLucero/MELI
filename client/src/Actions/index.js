import axios from 'axios';

  export function SeachProduct(name) {
    return function (dispatch) {
        axios.get(`http://localhost:3001/items?search=${name}`)
            .then(r => r.data)
            .then(d => dispatch(Search(d)))
            .catch(e => console.log(e))
    }
  }
  
  export function Search(payload) {
    return {
        type: 'SEARCH_PRODUCT',
        payload
    }
  }

export function ProductDetail(id) {
return function (dispatch) {
    axios.get(`http://localhost:3001/items/${id}`)
        .then(r => r.data)
        .then(d => dispatch(Detail(d)))
        .catch(e => console.log(e))
}
}

export function Detail(payload) {
    return {
        type: 'DETAIL_PRODUCT',
        payload
    }
}