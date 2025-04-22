 const Title = () => (
    <a href = "">
    <img
      className="logo"
      alt="Logo"
      src="https://content.jdmagicbox.com/comp/guna/h2/9999p7542.7542.231213230628.f1h2/catalogue/the-food-villa-cafe-and-restaurant-myana-guna-restaurants-zmtjnoqrmc.jpg"
    ></img>
    </a>
  );
  
  const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact US</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;