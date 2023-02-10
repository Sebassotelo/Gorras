import React from "react";
import "./cliente.css";
import { useNavigate } from "react-router-dom";

function Cliente() {
  const navigate = useNavigate();

  const navigateValha = () => {
    navigate("/Valha");
  };
  return (
    <div className="cliente">
      <p onClick={navigateValha} className="cliente__title">
        <p>CATALOGO</p>
      </p>

      <div onClick={navigateValha} className="cliente__img">
        <img src="https://i.imgur.com/aSojXsS.png" alt="" />
      </div>

      <div className="cliente__info" onClick={() => navigate("gorras")}>
        <h3>Tu Gorra Ideal</h3>
      </div>
    </div>
  );
}

export default Cliente;
