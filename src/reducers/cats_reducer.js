export default (state={
    pictures: [],
    loading: false
}, action) => {
    console.log(action)
    switch(action.type) {
        case 'LOADING_CATS':
            return {...state, loading: true}
        case 'FETCH_CATS':
            return {...state, pictures: action.pictures}
        default:
            return state
    }
}