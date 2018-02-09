import React from 'react';
import './search.css';

const Search = (props) => (
  <form 
    onSubmit={props.handleSubmit}
    className ="Search">
    <input 
      className="Search-input" 
      ref={props.setRef}
      placeholder="Busca tu video favorito"
      name="search"
      type="text"
      onChange={props.handleChange}
      value={props.value}
    />
  </form>
)

export default Search