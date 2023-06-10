import React, { useState } from "react"
import CategoriesList from "./CategoriesList"

const Categories = ({ categories = [], setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = ({ target }) => {
    setInputValue(target.value);
  };

  const handleAddCategoryButton = () => {
    if (!categories.includes(inputValue)) {
      setCategories([inputValue, ...categories])
      setInputValue("")
    }
  };
  return (
    <>
      <input
        onChange={(e) => handleInput(e)}
        placeholder="Escribe el nombre de la categoria"
        type="text"
        value={inputValue}
      />
      <button
        className="btn btn-primary btn-sm ms-2 mb-1"
        onClick={handleAddCategoryButton}
        type="button"
      >
        Add
      </button>

      <br />
      <CategoriesList categories={categories} setCategories={setCategories}/>
    </>
  )
}

export default Categories;
