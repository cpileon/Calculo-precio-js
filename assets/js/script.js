const valorUnidad = document.querySelector('#unidad');
const cantidadInput = document.querySelector('#cantidadInput');
const colorInput = document.querySelector('#colorInput')
const circulo = document.querySelector('#circulo')


function calculoTotal(){
    const color = colorInput.value;
    const cantidad = cantidadInput.value;
    const total = valorUnidad.textContent.split(".").join("") * cantidad;
    const totalFormated = total.toLocaleString("es-CL", {style: "decimal", currency: "CLP", miniumFractionDigits: 0 });
    console.log(totalFormated);
    document.querySelector('#resCantidad').innerHTML = `Cantidad: ${cantidad}`;
    circulo.style.backgroundColor = color;
    document.querySelector('#resTotal').innerHTML =`Total: $${totalFormated}`;
}
