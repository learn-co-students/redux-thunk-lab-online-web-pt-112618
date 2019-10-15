export default (state={
  pictures: [],
  loading: false
}, action) => {
  console.log(action)
  switch(action.type) {
      case 'LOADING_CATS':
          return {...state, loading: true}
      case 'FETCH_CATS':
          return {loading: false, pictures: action.payload}
      default:
          return state
  }
}