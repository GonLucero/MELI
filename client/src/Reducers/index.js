const initialState = { 
    ProductDetail: [],
    loadingDetail : true,
    SearchProduct: [],   
    loadingSearch : true
  };
  
  
  export default function rootReducer(state = initialState, action) {
      switch (action.type) {
            case "SEARCH_PRODUCT":
                return {
                    ...state,
                    SearchProduct: action.payload,
                    loadingSearch: false,
                    ProductDetail: [],
                    loadingDetail: true
                }
            case "DETAIL_PRODUCT":
                return {
                    ...state,
                    ProductDetail: action.payload,
                    loadingDetail: false,
                    SearchProduct: [],
                    loadingSearch: true,
                };
            case "RESET":
                return {
                    ...state,
                    ProductDetail: [],
                    loadingDetail: true,
                    SearchProduct: [],
                    loadingSearch: true,
                };
            default:
                return state;
      }
  }
  