import IndexPage from "./pages/IndexPage"
import DetailPage from "./pages/DetailPage"
import ListPage from "./pages/ListPage"
import SignUp from "./components/SignUp"
import Login from "./components/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/DetailPage' element={<DetailPage />} />
        <Route path='/ListPage' element={<ListPage />} />
      </Routes>
    </Router>
  )
}

export default App
