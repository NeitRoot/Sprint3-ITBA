import React from "react";

const PageCuenta = ({ params }) => {
  const { id } = params;
  return (
    <div>
      <h1>Acá va la cuenta seleccionada:</h1>
      <p>Id seleccionado: {id}</p>
    </div>
  );
};

export default PageCuenta;
