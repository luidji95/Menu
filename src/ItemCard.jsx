import React from "react";

function ItemCard(props) {
  const { img, title, price, desc } = props;

  return (
    <div className="item-body">
      <div className="item-picture">
        <img src={img} alt={title} className="item-image" />
      </div>
      <div className="nameprice">
        <div className="item-name">{title}</div>
        <div className="item-price">${price}</div>
      </div>
      <div className="item-description">{desc}</div>
    </div>
  );
}

export default ItemCard;
