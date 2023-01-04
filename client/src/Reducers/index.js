const  initialState = {
    ProductDetail: [],
    SearchProduct: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_PRODUCT':
            return{
                ...state,
                SearchProduct: action.payload,
            };
        case 'DETAIL_PRODUCT':
            return{
                ...state,
                ProductDetail: action.payload,
            };
    }
}