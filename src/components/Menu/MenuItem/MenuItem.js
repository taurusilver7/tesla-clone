import React from "react";
import "./MenuItem.css";

const MenuItem = ({ title, onClick, open }) => {
  return (
    <div className="menuItem" onClick={onClick}>
      <h4 className={open && "menuItem__open"}>{title}</h4>
    </div>
  );
};

export default MenuItem;
