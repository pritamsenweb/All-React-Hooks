import Usestate from "./components/usestate/Usestate";
import Usestateobject from "./components/usestate/Usestateobject";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Learning Hook</h1>

      <p>1. UseState Hook with onClick Funtion</p>
      <Usestate />

      <p>2. UseState Hook with Data Fetch</p>

      <Usestateobject />
    </div>
  );
}
