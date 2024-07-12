import { Link } from 'react-router-dom';
// import BorderColorIcon from '@mui/icons-material/BorderColor';

function NavBar() {
  return (
    <nav className="top">
      <a href="/" className="logo">
       {/* <BorderColorIcon /> */}
      {/* <img src ="./assests/logo2.jpg" alt="logo1.jpg"/> */}
        <span >Kissan <span className="k">Silage</span></span>{" "}
      </a>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        
        <li>
          <Link to="/cornsilage">CornSilage</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
