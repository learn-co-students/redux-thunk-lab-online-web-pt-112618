import React, { Component } from 'react';
import { connect } from 'react-redux';
import CatList from './CatList.js'
import { fetchCats } from './actions/catActions'

class App extends Component {
 

  componentDidMount() {
    if (this.props.catPics.length === 0) {

      this.props.fetchCats()
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.catsReducer.pictures
    
  }
}
 
export default connect(mapStateToProps, {fetchCats}
  )(App)