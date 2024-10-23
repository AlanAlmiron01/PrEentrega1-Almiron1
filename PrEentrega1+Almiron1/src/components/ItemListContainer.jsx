import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      <div className="row">
        {/* Aquí irán los productos */}
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Bicicleta 1" />
            <div className="card-body">
              <h5 className="card-title">Bicicleta 1</h5>
              <p className="card-text">$100</p>
              <button className="btn btn-primary">Agregar al carrito</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Bicicleta 2" />
            <div className="card-body">
              <h5 className="card-title">Bicicleta 2</h5>
              <p className="card-text">$100</p>
              <button className="btn btn-primary">Agregar al carrito</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img src="https://via.placeholder.com/150" className="card-img-top" alt="Bicicleta 3" />
            <div className="card-body">
              <h5 className="card-title">Bicicleta 3</h5>
              <p className="card-text">$100</p>
              <button className="btn btn-primary">Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
