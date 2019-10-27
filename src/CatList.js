// write your CatList component here


import React from 'react'

const CatList = (props) => {
  function list() {
    return props.catPics.map(catPic => {
      return (
        <div className="col-lg-12">
          <div className="col-lg-6 col-lg-offset-3 well">
            <img src={catPic.url} className="thumbnail responsive" alt=" " style={{height: '220px', width: '221px', margin: 'auto'}}/>
          </div>
        </div>
      )
    })
  }
  return (
    <div>
      {list()}
    </div>
  )
}

export default CatList