const initialState = { //hago un estado inicial
    ProductDetail: [],
    SearchProduct: [],   
  };
  
  // 13)
  export default function rootReducer(state = initialState, action) {
      switch (action.type) {
            case "SEARCH_PRODUCT":
                return {
                    ...state,
                    SearchProduct: action.payload
                }
            case "DETAIL_PRODUCT":
                return {
                    ...state,
                    ProductDetail: action.payload,
                };
            default:
                return state;
      }
  }
  