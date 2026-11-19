import { useState } from "react";
import Navbar from "./components/Navbar";
function App() {
  const [mobileView, setMobileView] = useState(false);
  return (
    <>
      <Navbar mobileView={mobileView} setMobileView={setMobileView}/>
    </>
  )
}

export default App
