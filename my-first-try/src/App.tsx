import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Category from "./category";
import CreateNewCategory from "./createCategoryFY";
import Navbar from "./navbar";

import CategoryDetails from "./category-details";




function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navbar/>}></Route>
    <Route path="/create-category" element={<CreateNewCategory/>}></Route>
    <Route path="/update-category/:id" element={<CreateNewCategory/>}></Route>
    <Route path="/category-list" element={<Category/>}></Route>
   {/*  <Route path="/category-update/:id" element={<CategoryUpdate/>}></Route> */}
    <Route path="/category-details/:id" element={<CategoryDetails/>}></Route>
  </Routes>
  </BrowserRouter>

  </>
   
  );
}

export default App;
