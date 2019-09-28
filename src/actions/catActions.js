export const loadingCats = () => {
    return {
        type: 'LOADING_CATS'
    }
}

export const fetchCats = images => {
// const urls = images.map(image => ({url: image.url}))
//     console.log("urls", urls)
    return {
        type: 'FETCH_CATS',
        payload: images
    }
}

export const getCats = () => {
    return (dispatch) => {
        dispatch(loadingCats())
        return fetch('http://localhost:4000/db')
        .then(resp => resp.json())
        .then(json => { const cats = json.images 
            dispatch(fetchCats(cats))})
        //.then(json => {debugger})
      }
}