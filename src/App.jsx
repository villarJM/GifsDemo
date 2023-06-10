import { useState } from "react";
import Categories from "../components/categories";
import GifsExpo from "../components/gifsexpo";

function App() {
  const [categories, setCategories] = useState(["Dragon Ball", "One Piece"]);
  return (
    <div className="ms-5 mt-5 me-5">
      <h3>Gif Demo App</h3>
      <hr />
      <Categories categories={categories} setCategories={setCategories} />
      <hr />
      <GifsExpo categories={categories} setCategories={setCategories} />
      {/*<GifsExpo categories={categories} />*/}
    </div>
  );
}

export default App;
