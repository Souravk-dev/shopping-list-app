import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ShopList.css";
const ShopList = ({ items,deleteHandler }) => {
  
  return (
    <div className="shop-list-style">
      <div className="list-content">
        <ul className="ls-style">
          {items.map((item, i) => {
            return (
              <>
                <li key={item.id} >
                  {" "}
                  {item.name}{" "}
                </li>
                <div>
                  <button className="delete-btn" onClick={()=>deleteHandler(item.id)}>
                    delete
                  </button>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ShopList;
