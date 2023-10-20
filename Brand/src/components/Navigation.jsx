const Navigation = () => {
    return (
      <nav className="container">
        <div className="logo">
          <img src="/Images/logo2.webp" width="100px" height="70px" alt="logo" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <div className="navbutton">
        <button className="registrabuton">New User</button>
        <button>login</button>
        </div>
        
      </nav>
    );
  };
  
  export default Navigation;