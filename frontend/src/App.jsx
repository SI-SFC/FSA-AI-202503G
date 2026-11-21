
import {Route, BrowserRouter, Routes} from "react-router-dom"
import GetStudents from "./components/GetStudents"
import CreateStudent from "./components/CreateStudent"
import UpdateStudent from "./components/UpdateStudent"
import CreateProduct from "./components/CreateProduct"
import GetProduct from "./components/GetProduct"

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GetStudents />} />
            <Route path="/create" element={<CreateStudent />} />
            <Route path="/update/:id" element={<UpdateStudent />} />
            <Route path="/addProduct" element={<CreateProduct />} />
            <Route path="/GetProduct" element={<GetProduct />} />
          </Routes>
        </BrowserRouter> 
    </>
  )
}

export default App