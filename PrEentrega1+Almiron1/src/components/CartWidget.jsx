import React from 'react';

const CartWidget = () => {
  return (
    <div className="nav-item">
      <a href="#" className="nav-link">
        <i className="fas fa-shopping-cart"></i>
        <span className="badge bg-danger">0</span>
      </a>
    </div>
  );
};

export default CartWidget;
