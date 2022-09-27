import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Zion", "Kezia", "Max"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  const handleClick = () => {
    console.log("You clicked it");
  }
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  }
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  }
  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {handleNameChange()}!</p>
      <button onClick={handleClick}>Handle Click</button>
      <button onClick={() => handleClick2("Louis")}>Handle Click 2</button>
      <button onClick={(e) => handleClick3(e)}>Handle Click 3</button>
    </main>
  );
};

export default Content;
