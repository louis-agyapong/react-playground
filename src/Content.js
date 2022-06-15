import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("Zion");
  const [count, setCount] = useState(0);
  const handleNameChange = () => {
    const names = ["Kofi", "Ama", "Yaa", "Yaw", "Kweku", "Akua", "Kwame"];
    const int = Math.floor(Math.random() * names.length);
    setName(names[int]);
  };

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  };
  const handleClick2 = (name) => {
    console.log(count);
  };
  return (
    <main>
      <p onDoubleClick={handleClick}>Hello {name}!</p>
      <button onClick={handleNameChange}>Change Name</button>
      <button onClick={handleClick}>Click name</button>
      <button onClick={handleClick2}>Event Handler</button>
    </main>
  );
};

export default Content;
