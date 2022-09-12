import React, { useState, useEffect } from "react";
import "./BarraResultado.css";

function BarraResultado(props) {
  const [indicador, setIndicador] = useState("10");
  const categorias = {
    EssentialFat: 5,
    Athletes: 30,
    Fitness: 50,
    Average: 70,
    Obese: 90,
  };
  const categoriasMujer = ["10-13", "14-20", "21-24", "25-31", "32+"];

  const categoriasHombre = ["2-5", "6-13", "14-17", "18-24", "25+"];

  const renderListOfCategorias = (categorias) => {
    return categorias.map((categoria, index) => (
      <div key={index} style={{ width: "20%" }} className="text-center ">
        {" "}
        {categoria}%{" "}
      </div>
    ));
  };
  const renderNombreCategorias = () => {
    return Object.entries(categorias).map((categoria, index) => (
      <div key={index} style={{ width: "20%" }} className="text-center ">
        {" "}
        {categoria[0]}
      </div>
    ));
  };

  const renderColorCategorias = () => {
    return Object.entries(categorias).map((categoria, index) => (
      <div className="d-flex justify-content-center" style={{ width: "20%" }}>
        <div
          id={`circle-${index}`}
          className="{`circle-${index}`}"
          key={index}
        />
      </div>
    ));
  };

  useEffect(() => {
    console.log("props BarraResultado", props);
    const cat = Object.entries(categorias).find(
      ([key, value]) => key === props.categoria
    );
    setIndicador(cat === undefined ? 0 : cat[1]);
  }, [props]);

  return (
    <div className="container text-light">
      <h1 className="m-5">Tu resultado es: {props.porcentaje}</h1>

      <div className="text-ligth ms-5 d-flex">
        <div style={{ width: `${indicador}%` }}></div>
        <div className="d-flex icon">
          <div style={{ width: `${indicador}%` }}>{props.porcentaje}%</div>
        </div>
      </div>
      <div className="text-ligth ms-5 d-flex">
        <div style={{ width: `${indicador}%` }}></div>
        <div className="d-flex icon">
          <i className="mdi mdi-arrow-down-bold" />
        </div>
      </div>
      <div
        className="d-flex ms-5  bgDegradado"
        style={{ height: "8rem", width: "95%," }}
      />
      <div
        className="d-flex ms-5 pt-2 justify-content-center"
        style={{ width: "95%" }}
      >
        {renderColorCategorias()}
      </div>
      <div className="d-flex ms-5 pt-2" style={{ width: "95%" }}>
        {renderListOfCategorias(
          props.genero === "mujer" ? categoriasMujer : categoriasHombre
        )}
      </div>
      <div className="d-flex mx-5 pt-0" style={{ width: "95%" }}>
        {renderNombreCategorias()}
      </div>
    </div>
  );
}

export default BarraResultado;
