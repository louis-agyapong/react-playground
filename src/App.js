import "./App.css";
import Header from "./Header";

function App() {
  const handleNameChange = () => {
    const names = ["Kofi", "Ama", "Yaa", "Yaw", "Kweku", "Akua", "Kwame"];
    const int = Math.floor(Math.random() * names.length);
    return names[int];
  };
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
