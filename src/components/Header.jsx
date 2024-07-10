import React from "react";

const Header = () => {
  return (
    <header>
      <div>
        <img src="/log.png" alt="logo" />
      </div>
      <nav>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Shop</a>
        <a href="/">Staff</a>
        <a href="/">Blog</a>
        <a href="/">Contact</a>
      </nav>
      <div> 
      <form> 
      <label> search</label>
      </form>
      </div>
    </header>
  );
};

export default Header;
