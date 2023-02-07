import React, { useState, useContext, useEffect, useRef } from "react";
import "./perfil.css";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import CarroContext from "../../context/carro/carroContext";

function Perfil() {
  const context = useContext(CarroContext);

  const perfil = context.infoPublica.perfil;

  const foto = context.infoPublica.urlFoto;

  return (
    <>
      {perfil ? (
        <div className="perfil" id="perfil" style={context.style.perfil}>
          <div className="logoUsuario">
            <div className="logo">
              {foto !== "generico" ? (
                <img
                  src="https://i.imgur.com/iK7ZL8i.jpg"
                  alt=""
                  className="logo__img"
                />
              ) : (
                ""
              )}
            </div>
            <h1 className="usuario">@{perfil.usuarioInstagram}</h1>
          </div>
          <p className="direccion">
            {perfil.direccion}. {perfil.ciudad}, {perfil.pais}
          </p>
          <div className="redes">
            <a
              href={`https://wa.me/549${perfil.whatsapp}?text=Pega%20aqui%20tu%20pedido!`}
            >
              <FaWhatsapp
                className="redes__icon"
                style={context.style.perfil}
              />
            </a>
            <a
              href={`https://www.instagram.com/${perfil.usuarioInstagram}/`}
              target={"_blank"}
            >
              <FaInstagram
                className="redes__icon"
                style={context.style.perfil}
              />
            </a>
            {/* <a href="">
              <FaMapMarkerAlt
                className="redes__icon"
                style={context.style.perfil}
              />
            </a> */}
          </div>
        </div>
      ) : (
        <div class="lds-ripple">
          <div></div>
          <div></div>
        </div>
      )}
    </>
  );
}

export default Perfil;
