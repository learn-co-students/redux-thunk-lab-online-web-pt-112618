import React from 'react';

const CatList = (props) => {
     const list = props.catPics.map(catPic => <img src={catPic.url} key={catPic.id} alt={catPic.url}></img>)
     return list
}

export default CatList