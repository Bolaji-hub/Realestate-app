import React from "react";

const Header = () => {
  return (
    <div className="menu">
      <div className="container">
        <h2>Contacts Manager</h2>
        <form className="form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="name" placeholder="Email" />
          </div>
          <button className="btn">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Header;
