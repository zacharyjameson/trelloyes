import React from "react";
import './Card.css';

export default function Card(props) {
  return (
    <div class="Card">
      <button type="button">delete</button>
      <h3 className="Card-Title">'{props.title}'</h3>
      <p className="Card-Content">`{props.content}`</p>
    </div>
  );
}
