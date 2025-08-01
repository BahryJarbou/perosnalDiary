import TimeLine from "./timeline";
import Header from "./header";
import Month from "./month";
import "./index.css";
import { useState } from "react";

function App() {
  const [entries, setEntries] = useState([]);
  return (
    <main>
      <Header />
      <Month entries={entries} setEntries={setEntries} />
      <TimeLine />
    </main>
  );
}

export default App;
