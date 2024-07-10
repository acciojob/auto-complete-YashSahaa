
import React, { useState } from "react";
import './../styles/App.css';

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]
const App = () => {
  const [getText,setGetText] = useState("");
  const [textItems,setTextItems] = useState(fruits);

  const handleChange = (e)=>{
    const inputValue = e.target.value;
    setGetText(inputValue);
    const items = fruits.filter((fruit) => fruit.includes(inputValue))
    setTextItems([...items]);
  }

  return (
    <div>
        <h1>Search Item</h1>
        <input type="text" value={getText} onChange={handleChange} />
        <ul>
          {textItems.map((textItem)=>{
            return(
              <li key={textItem}>{textItem}</li>
            )
          })}
        </ul>
    </div>
  )
}

export default App
