import React, { useState } from "react";

function Formulario({ addInputData }) {
  const [inputData, setinputData] = useState({
    genero: "hombre",
    altura: "",
    peso: "",
    cintura: "",
    cuello: "",
    cadera: "",
  });

  const handleChange = (event) => {
    if (event.target.value === "-") return;
    setinputData({
      ...inputData,
      [event.target.name]: event.target.value.replace("-", ""),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addInputData(inputData);
  };

  return (
    <div className="form-container text-light">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="col-form-label col-sm-2">Genero</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="genero"
              id="radioHombre"
              value="hombre"
              checked={inputData.genero === "hombre" ? true : false}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="radioHombre">
              Hombre
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="genero"
              id="radioMujer"
              value="mujer"
              checked={inputData.genero === "mujer" ? true : false}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="radioMujer">
              Mujer
            </label>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="inputAltura" className="col-sm-2 col-form-label">
            Altura (cm)
          </label>
          <input
            type="number"
            className="form-control"
            required
            name="altura"
            placeholder="Escribe tu altura"
            value={inputData.altura}
            onChange={handleChange}
          />
        </div>
        <div className="form-group row">
          <label htmlFor="inputPeso" className="col-sm-2 col-form-label">
            Peso (kg)
          </label>
          <input
            type="number"
            className="form-control"
            required
            name="peso"
            placeholder="Escribe tu peso"
            value={inputData.peso}
            onChange={handleChange}
          />
        </div>
        <div className="form-group row">
          <label htmlFor="inputCintura" className="col-sm-2 col-form-label">
            Cintura (cm)
          </label>
          <input
            type="number"
            className="form-control"
            required
            name="cintura"
            placeholder="Medida de tu cintura"
            value={inputData.cintura}
            onChange={handleChange}
          />
        </div>
        {inputData.genero === "mujer" && (
          <div className="form-group row">
            <label htmlFor="inputCadera" className="col-sm-2 col-form-label">
              Cadera (cm)
            </label>
            <input
              type="number"
              className="form-control"
              required
              name="cadera"
              placeholder="Medida de tu cadera"
              value={inputData.cadera}
              onChange={handleChange}
            />
          </div>
        )}
        <div className="form-group row">
          <label htmlFor="inputCuello" className="col-sm-2 col-form-label">
            Cuello (cm)
          </label>
          <input
            type="number"
            className="form-control"
            required
            name="cuello"
            placeholder="Medida de tu cuello"
            value={inputData.cuello}
            onChange={handleChange}
          />
        </div>
        <div className="form-group row mt-3">
          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-link btn-outline-primary text-white text-decoration-none"
            >
              Calcular
            </button>
          </div>
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-link btn-outline-primary text-white text-decoration-none"
            >
              Limpiar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Formulario;
