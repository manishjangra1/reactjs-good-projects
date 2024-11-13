const Navigation = () => {
  return (
    <>
      <nav className="container poppins-semibold">
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <ul>
          <li href="#">MENU</li>
          <li href="#">LOCATION</li>
          <li href="#">ABOUT</li>
          <li href="#">CONTACT</li>
        </ul>
        <button className="login-button">Login</button>
      </nav>
    </>
  );
};

export default Navigation;
