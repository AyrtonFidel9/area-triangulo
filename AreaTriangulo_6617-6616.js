const areaTR = (base, altura) => (base * altura) / 2;
let datos = {};
const resulatdo = document.querySelector("#resultado");
const btnCalcular = document.querySelector("#calcular");
resultado.disabled = true;
resultado.style = "background-color: white";


function getData() {
  datos["base"]=parseFloat(document.getElementById("base").value);
  datos["altura"]=parseFloat(document.getElementById("altura").value);
  datos["ladoA"]=parseFloat(document.querySelector('#ladoa').value);
  datos["ladoB"]=parseFloat(document.querySelector('#ladob').value);
  datos["ladoC"]=parseFloat(document.querySelector('#ladoc').value);
  datos["angA"]=parseFloat(document.querySelector('#anguloa').value);
  datos["angB"]=parseFloat(document.querySelector('#angulob').value);
  datos["angC"]=parseFloat(document.querySelector('#anguloc').value);
  datos["medida"]=document.querySelector("#medidas").value;
}

function getValue(input){
  return parseInt(document.getElementById(input).value)
}

function countNotNaN(){
  let count = 0;
  Object.entries(datos).forEach(([key, value])=>{
      count = (!validate(value)) ? count + 1 : count;
  });
  return count;
}

function countNegativesAndZeros(){
  let count = 0;
  Object.entries(datos).forEach(([key, value])=>{
      count = (value <= 0) ? count + 1 : count;
  });
  return count;
}

function validate(value){
  return Number.isNaN(value); // si el valor no es un numero o esta vacio retorna verdadero
}


function foundTriangle(){
  // comprueba si los valores no son vacios o cadenas
  /**+++
   * donde esta el return "Escaleno", "Isoceles", etc hay q devolver un objeto asi
   * {resultado: (con la funcion q calcule los datos), tipo: (con el tipo de triangulo q es), medida:(la medida utilizada)}
   */
  if(!validate(datos.ladoA) && !validate(datos.ladoB)){
    return (datos.ladoA !== datos.ladoB) ? "Rectangulo" : "Isoceles";
  }
  else if(!validate(datos.ladoA) || (!validate(datos.ladoA)&&!validate(datos.ladoB)&&!validate(datos.ladoC))){
    return (datos.ladoA === datos.ladoB && datos.ladoB === datos.ladoC && datos.ladoC == datos.ladoA)
      ? "Equilátero" : "Escaleno";
  }
  else if(!validate(datos.ladoA) && !validate(datos.ladoC) && !validate(datos.angC)){
    return "Isóceles";
  }
  else if (!validate(datos.base) && !validate(datos.altura)){
    return "Escaleno"; // o tirangulo cualquiera
  }
  else if (!validate(datos.ladoA) && !validate(datos.angB) && !validate(datos.angC)){
    return "Escaleno"; // o tirangulo cualquiera 
  }
  else if (!validate(datos.ladoB) && !validate(datos.angA) && !validate(datos.angC)){
    return "Escaleno"; // o tirangulo cualquiera 
  }
  else if (!validate(datos.ladoC) && !validate(datos.angA) && !validate(datos.angB)){
    return "Escaleno"; // o tirangulo cualquiera 
  } 
  else if (!validate(datos.ladoA) && !validate(datos.ladoB) && !validate(datos.angC)){
    return "Escaleno"; // o tirangulo cualquiera 
  }
  else if (!validate(datos.ladoA) && !validate(datos.ladoC) && !validate(datos.angB)){
    return "Escaleno"; // o tirangulo cualquiera 
  }
  else if (!validate(datos.ladoB) && !validate(datos.ladoC) && !validate(datos.angA)){
    return "Escaleno"; // o tirangulo cualquiera 
  } 
}

function calcular() {
  getData();
  if(countNotNaN() - 1 === 0){
    alert("No se admiten campos vacios");
  } else if (countNegativesAndZeros() > 0){
    alert("No se admiten número negativos ni tampoco Ceros");
  }
  else if(countNotNaN() - 1 > 3){
    alert("Error, exceso de datos enviados para calcular el area de un triángulo");
  }
  else{
    //hallar();
    console.log(foundTriangle());
    console.log(datos);

  }
  
  //hallar();
  /*if (!Number.isNaN(base) && !Number.isNaN(altura)) {
    if(base !== 0 && altura !== 0 && base>0 && altura>0)
    {
      alert("Datos ingresados con éxito");
      hallar();
    }
    else{
      alert("Valores no válidos")
      limpiar();
    }
  }else{
    alert("No se admiten caracteres ni espacios vacíos");
    limpiar();
  }*/
}

/*
function hallar() {
  switch (tipot) {
    case "Rectangulo":
      if(getValue('ladoa') && getValue('ladob'))
      {
        if(!validate(getValue('ladoa')) && !validate(getValue('ladob'))){
          document.getElementById("resultado").value = `${areaTR(getValue('ladoa'), getValue('ladob'))} ${medida}^2`;
        }
        else{
          alert("error");
        }
      }
      else{
        alert("ingresar solo los datos para el lado a y b");
      }
      break;
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
*/
function limpiar() {
  document.getElementById("base").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("resultado").value = "";
}


btnCalcular.addEventListener('click',calcular);