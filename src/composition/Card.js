import React from "react";

class CardClass extends React.Component {
  render() {
    console.log("Using a class component!");
    return (
        <div class="Card">
          <button type="button">delete</button>
          <h3 className='Card-Title'>'{this.props.title}'</h3>
          <p className='Card-Content'>`{this.props.content}`</p>
        </div>
    );
  }
}

export default CardClass;
