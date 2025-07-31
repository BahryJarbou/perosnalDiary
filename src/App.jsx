import { useState } from "react";
import Year from "./year";
import Header from "./header";
import Month from "./month";
import "./index.css";

function App() {
  return (
    <main>
      <Header />
      <Month />
    </main>
  );
}

export default App;
