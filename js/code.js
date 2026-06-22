document.querySelector("#btnAgregar").addEventListener("click", crearTelefono);

let telefonos = [];

function crearTelefono() {
    let marca = document.querySelector("#txtMarca").value;
    let modelo = document.querySelector("#txtModelo").value;
    let color = document.querySelector("#txtColor").value;
    let pulgadas = Number(document.querySelector("#txtPulgadas").value);
    let pais = document.querySelector("#txtPais").value;
    let mensaje = "";

    let telefono = altaTelefono(marca, modelo, color, pulgadas, pais);
    if(telefono === null) {
        mensaje="Error al crear el teléfono. Verifique los datos ingresados.";
    } else {
        mensaje="Teléfono creado exitosamente:\n" +
              "Marca: " + telefono.Marca + "\n" +
              "Modelo: " + telefono.Modelo + "\n" +
              "Color: " + telefono.Color + "\n" +
              "Pulgadas: " + telefono.Pulgadas + "\n" +
              "País: " + telefono.Pais;
    }
    document.querySelector("#pResultado").innerHTML = mensaje;
}

function altaTelefono(marca, modelo, color, pulgadas, pais) {
    if (marca === "" || modelo === "" || color === "" || isNaN(pulgadas) || pais === "") {
        return null;
    } else {
        if (pulgadas <= 0) {
            return null;
        }
    }
    let telefono = new Telefono(marca, modelo, color, pulgadas, pais);
    telefonos.push(telefono);
    return telefono;
}