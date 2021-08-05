import React, { useState, useEffect } from 'react'
import '../App.css';
import { Link } from 'react-router-dom'

function ItemDetail() {

  useEffect(() => {
  },[])

  const [item, setItem] = useState({})

  return (
    <div className="ItemDetail">
      <h1> Item </h1>
    </div>
  );
}

export default ItemDetail;