import React from 'react';

const CatList = (props) => {
   return  props.catPics.map(catPic => <li key={catPic.id}><img src={catPic.url}>{catPic.id}</img></li>)
}

export default CatList