import {Route,Routes} from "react-router-dom"
import VillaMomtaz from "./components/templates/VillaMomtaz"
import Homepage from "./components/templates/Homepage"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/villa/:id" element={<VillaMomtaz/>}/>
    </Routes>
    </>
  )
}

export default App
