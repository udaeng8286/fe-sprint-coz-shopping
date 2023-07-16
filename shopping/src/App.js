import BookmarkList from "./page/BookmarkList.js";
import ProductList from "./page/ProductList.js";
import Main from "./page/Main.js";
import "./base.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 경로는 path로 컴포넌트는 element로 연결해 줍니다. */}
          <Route path="/" element={<Main />} /> 
          <Route path="/ProductList" element={<ProductList />} /> 
          <Route path="/BookmarkList" element={<BookmarkList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
