import React from "react";

const Content = () => {
  const handleNameChange = () => {
    const names = ["Kofi", "Ama", "Yaa", "Yaw", "Kweku", "Akua", "Kwame"];
    const int = Math.floor(Math.random() * names.length);
    return names[int];
  };

  const handleClick = () => {
    console.log("Clicked");
  };
  const handleClick2 = (name) => {
    console.log(`${name} was clicked`);
  };
  const handleClick3 = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <main>
      <p onDoubleClick={handleClick}>
        Hello {handleNameChange()}!
      </p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClick2("Zee")}>Click name</button>
      <button onClick={(e) => handleClick3(e)}>Event Handler</button>
    </main>
  );
};

export default Content;
