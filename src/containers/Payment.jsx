import React from 'react';
import '../styles/components/Payment.css';


const Payment = () => {
  return (
    <div className="Payment">
        <div className="Payment-content">
           <h3>Resumen del Pedido:</h3>
          <div className="Payment-button">
            <div>
             Boton de Paypal
            </div>
          </div>
          </div>
        </div>
  );
}

export default Payment;