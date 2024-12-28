import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <NavLink to={'/'} style={{}}>Category List</NavLink>
        <NavLink to={'/create-form'} style={{}}>Category Add</NavLink>
        <NavLink to={'/category-list'} style={{}}>Category List</NavLink>
       
      </nav>

      <nav className="navbar navbar-dark bg-primary"></nav>

      <nav className="navbar navbar-light"></nav>
    </>
  );
}

export default Navbar;
