import { Routes, Route } from "react-router-dom"
import Booklist from "./components/Booklist"
import AddBook from "./components/AddBook"
import Editbook from "./components/Editbook"

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Booklist />} />
        <Route path="/addnewbook" element={<AddBook />} />
        <Route path="/editbook/:id" element={<Editbook />} />
      </Routes>
    </div>
  );
}

export default (App);
