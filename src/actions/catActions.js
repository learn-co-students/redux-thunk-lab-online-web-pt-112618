export const loadingCats = () => {
    return {
        type: 'LOADING_CATS'
    }
}

export const fetchCats = images => {
    debugger
const urls = images.map(image => ({url: image.url}))
    console.log("urls", urls)
    return {
        type: 'FETCH_CATS',
        pictures: urls
    }
}

export const getCats = () => {
    return (dispatch) => {
        dispatch(loadingCats())
        return fetch('http://localhost:4000/db')
        .then(resp => resp.json())
        .then(json => dispatch(fetchCats(json.images)))
        //.then(json => {debugger})
      }
}