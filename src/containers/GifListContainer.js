import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
 
  state = {
    gifs: []
  }
 
  render() {
    return (
      <div>
          <GifSearch fetchGIFs = {this.fetchGIFs} />
          <GifList gifs={this.state.gifs} />
      </div>
    )
  }

  fetchGIFs = (query = "dogs") => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=PEFu1eS7IbYPISDxUPmnkOupQtdSM9Ik&limit=3`)
    .then(response => response.json())
    .then(({data}) => {
        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }))})
    })
  }
 
  componentDidMount() {
    this.fetchGIFs()
      }
}
 
export default GifListContainer;