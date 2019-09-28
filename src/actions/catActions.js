export const loadingCats = () => {
    return {
        type: 'LOADING_CATS'
    }
}

export const getUrls = images => {
const urls = images.map(image => ({url: image.url}))
    console.log("urls", urls)
    return {
        type: 'FETCH_CATS',
        payload: urls
    }
}

export const fetchCats = () => {
    return (dispatch) => {
        dispatch(loadingCats())
        return fetch('http://localhost:4000/db')
        .then(resp => resp.json())
        .then(json => dispatch(getUrls(json.images)))
        //.then(json => {debugger})
      }
}