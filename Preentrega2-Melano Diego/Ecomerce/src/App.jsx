import TarjContainer from "./components/TarjContainer/TarjContainer"
import Header from "./components/header/header"
import { BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <TarjContainer/>
      <Routes>
        <Route path="/" element={<TarjContainer/>}/>
        <Route path="/Category:categoryId" element={<TarjContainer/>} />
        <Route path="*" element={<h1>404</h1>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
