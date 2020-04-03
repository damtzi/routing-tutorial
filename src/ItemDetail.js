import React, { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Item({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState([]);

  const fetchItem = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${match.params.id}`
    );
    const item = await data.json();
    console.log(item);
    setItem(item);
  };

  return (
    <div>
      <h1>{item.title}</h1>
    </div>
  );
}

export default Item;
