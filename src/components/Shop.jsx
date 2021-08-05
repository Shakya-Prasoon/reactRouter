import React, { useState, useEffect } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

function Shop() {

  useEffect(() => {
    fetchItems()
  },[])

  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.com/v1/playlists')
    const items = await data.json()
    console.log(items.data);
    setItems(items.data)
  }

  return (
    <div className="Shop">
      {items.map(item => (
        <h1 key={item.id}> 
          <Link to={`shop/${item.id}`}> {item.name} </Link>
        </h1>
      )) }
    </div>
  );
}

export default Shop;