import React from "react";
import "./cliente.css";
import { useNavigate } from "react-router-dom";

function Cliente() {
  const navigate = useNavigate();

  const navigateBB = () => {
    navigate("/BB");
  };
  return (
    <div className="cliente">
      <p onClick={navigateBB} className="cliente__title">
        <p>CATALOGO</p>
      </p>

      <div onClick={navigateBB} className="cliente__img">
        <img src="https://i.imgur.com/aSojXsS.png" alt="" />
      </div>

      <div className="cliente__info" onClick={navigateBB}>
        <h3>Tu Gorra Ideal</h3>
      </div>
    </div>
  );
}

export default Cliente;
