const areaTR = (base, altura) => (base * altura) / 2;
let base;
let altura;
let tipot;
let medida;

function getData() {
  tipot = document.getElementById("tipost").value;
  base = parseInt(document.getElementById("base").value);
  altura = parseInt(document.getElementById("altura").value);
  medida = document.getElementById("medidas").value
}

function validar() {
  getData();
  if (!Number.isNaN(base) && !Number.isNaN(altura)) {
    if(base !== 0 && altura !== 0)
    {
      alert("Datos ingresados con éxito");
      hallar();
    }
    else{
      alert("El valor de 0 no es válido")
      limpiar();
    }
  }else{
    alert("No se admiten caracteres ni espacios vacios");
    limpiar();
  }
}


function hallar() {
  switch (tipot) {
    case "Isosceles":
      //alert(`El área es: ${areaTR(base, altura)} metros al cuadrado`);
      document.getElementById("resultado").value = `${areaTR(base, altura)} ${medida}^2`;
      break;

    case "Escaleno":
      //alert(`El área es: ${areaTR(base, altura)} metros al cuadrado`);
      document.getElementById("resultado").value = `${areaTR(base, altura)} ${medida}^2`;
      break;

    case "Equilatero":
      //alert(`El area es: ${areaTR(base, altura)} metros al cuadrado`);
      document.getElementById("resultado").value = `${areaTR(base, altura)} ${medida}^2`;
      break;

    default:
      alert("No existe cálculos para esa opción");
  }
}

function limpiar() {
  document.getElementById("base").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("resultado").value = "";
}