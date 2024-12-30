import React, { useState } from 'react';
import products from '../../dataSets/products';
import '../CSS/searchBar.css';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArray,setFilteredArray] = useState([]);
  

  const filteredProducts = ()=>{
    setFilteredArray(products.filter(product => {
        return product.filter(object=>{
            return object.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
    })); 
  }

  return (
    <div className='mainSearchBarContainer'>
      {/* <input
        type="text"
        placeholder="Search for a product..."
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value); filteredProducts()}}
      /> */}
      <button onClick={()=>{console.log(filteredArray)}}>click</button>
      <div id='searchResults'>
        <ul>
            {filteredArray.map(product => (
            <li key={product.id}>{product.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
