import axios from "axios"
import { useEffect, useState } from "react"
import { ProductCategory } from "./model";
import { Link } from "react-router-dom";

function Category (){
const [categories, setCategories]= useState<ProductCategory[]>([])

const getCategories = async ()=>{
const response = await axios.get('http://localhost:5289/ProductCategories');
setCategories(response.data);
}
useEffect(()=>{
  getCategories();
 
},[]);
const handleDelete= async (id:any)=> {
  if(window.confirm("Are you sure to Delete")){
      await axios.delete(`http://localhost:5289/ProductCategories/${id}`)
      getCategories();
  }
}

  return (
    <>
    <h1>Product List</h1>

    <Link to="/create-category" className="btn btn-primary">Create New</Link>
    <table className="table table-bordered">
<tr>
  <th>Category Name</th>
  <th>Products</th>
  <th>Actions</th>
</tr>
{
  categories.map(c=>(
    <tr>
      <td>{c.name}</td>
      <td>
        <table className="table table-bordered">
<tr>
  <th>Product Name</th>
  <th>Product Number</th>
  <th>Product Color</th>
  <th>Product StandardCost</th>
  <th>Product listPrice</th>
  <th>Product size</th>
  <th>Product Weight</th>
  
</tr>
{
  c.products.map(p=>(
    <tr>
      <td>{p.name}</td>
      <td>{p.productNumber}</td>
      <td>{p.color}</td>
      <td>{p.standardCost}</td>
      <td>{p.listPrice}</td>
      <td>{p.size}</td>
      <td>{p.weight}</td>
    </tr>
  ))
}
        </table>
      </td>
      <td>
        <Link to={`/category-details/${c.productCategoryID}`} className="btn btn-success">Details</Link>||
        <Link to={`/update-category/${c.productCategoryID}`} >Edit</Link>||
        <button onClick={()=>handleDelete(c.productCategoryID)}>Delete</button>
      </td>
    </tr>
  ))
}
    </table>
    </>
  )
}
export default Category