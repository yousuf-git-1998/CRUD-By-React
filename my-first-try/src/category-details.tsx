import { useEffect, useState } from "react";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";
import { ProductCategory } from "./model";
import axios from "axios";

function CategoryDetails() {
    const {id}= useParams();
    const [category, setCategory] = useState<ProductCategory>();
    const navigate= useNavigate();
   

const getCategory= async (id:any)=>{
const response = await axios.get(`http://localhost:5289/ProductCategories/${id}`)
setCategory(response.data)
}

useEffect(()=>{
    getCategory(id);
  
},[id])

const handleDelete= async (id:any)=> {
    if(window.confirm("Are you sure to Delete")){
        await axios.delete(`http://localhost:5289/ProductCategories/${id}`)
        navigate('/category-list');
    }
}

    return(
        <>
        <h1>Details Of Category</h1>
        <table className="table table-bordered">
<tr>
  <th>Category Name</th>
  <th>Products</th>
  
</tr>
{
  
    <tr>
      <td>{category?.name}</td>
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
  category?.products.map(p=>(
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
        <Link to={`/category-update/${category?.productCategoryID}`} className="btn btn-success">Edit</Link>||
        <Link to={`/category-list`} className="btn btn-success">Back to List</Link>||
        <button type="submit" className="btn btn-danger" onClick={()=> handleDelete(category?.productCategoryID)}>Delete</button>||
      </td>
    </tr>
  
}
    </table>
        </>
    )
}
export default CategoryDetails;
