import React, { useEffect, useState } from "react";
import BarraResultado from "../BarraResultado/BarraResultado";
import Formulario from "../Fomulario/Formulario";
import "./Container.css";

export default function Container() {
  const [inputData, setInputData] = useState({});
  const [categoria, setCatergoria] = useState("");
  const [porcentaje, setPorcentaje] = useState();

  const categoriasMujer = {
    13: "Essential Fat",
    20: "Athletes",
    24: "Fitness",
    31: "Average",
    100: "Obese",
  };

  const categoriasHombre = {
    5: "Essential Fat",
    13: "Athletes",
    17: "Fitness",
    24: "Average",
    100: "Obese",
  };

  const addInputData = (data) => {
    setInputData({ ...data });
  };
  useEffect(() => {
    if (porcentaje) {
      const categoria = Object.entries(
        inputData.genero === "mujer" ? categoriasMujer : categoriasHombre
      ).find(([key, value]) => porcentaje <= Number(key));
      setCatergoria(categoria === undefined ? "" : categoria[1]);
    }
  }, [porcentaje]);

  useEffect(() => {
    calcularGrasa();
  }, [inputData]);

  const getPulgadas = (cm) => cm / 2.54;

  const calcularGrasa = () => {
    const waist = getPulgadas(inputData.cintura); //243.84 96;
    const neck = getPulgadas(inputData.cuello); //127 50;
    const height = getPulgadas(inputData.altura); //452.12 178;
    const hip = getPulgadas(inputData.cadera); //233.68 92
    let grasaCorporal = 0;
    if (inputData.genero === "hombre") {
      grasaCorporal =
        1.0324 -
        0.19077 * Math.log10(waist - neck) +
        0.15456 * Math.log10(height);
    } else {
      grasaCorporal =
        1.29579 -
        0.35004 * Math.log10(waist + hip - neck) +
        0.221 * Math.log10(height);
    }
    setPorcentaje((495 / grasaCorporal - 450).toFixed(1));
  };

  console.log("inputData", inputData);
  return (
    <div className="d-flex justify-content-start mypadding flex-row mywdbody h-100">
      <div className="w-50">
        <h1 className="tittle text-light mt-3">
          Calculadora de Grasa Corporal
        </h1>
        <span className="text-light w-50">
          El metodo de la Marina de Estados Unidos (US Navy Method) ofrece una
          manera sencilla de calcular el aproximado del porcentaje de tejido
          adiposo en el cuerpo de una persona.
        </span>
        <br /> <br />
        <span className="text-light w-50">
          {" "}
          Los Valores requeridos por la formula son los siguientes:{" "}
        </span>
        <br />
        <Formulario addInputData={addInputData}></Formulario>
      </div>
      <div className="d-flex align-content-center flex-wrap w-50">
        {Object.keys(inputData).length > 0 && (
          <BarraResultado
            categoria={categoria}
            porcentaje={porcentaje}
            genero={inputData.genero}
          ></BarraResultado>
        )}
      </div>
    </div>
  );
}
