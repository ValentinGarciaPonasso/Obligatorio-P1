let sistema = new Sistema();
let usuarioLogeado = null;
inicio()

function inicio() {
    eventosBotones()
    ocultarSecciones()
}


function ocultarSecciones() {
    document.querySelector("#headerLogin").style.display = "none"
    document.querySelector("#sectionRegistro").style.display = "none"
    document.querySelector("#sectionPincipalUser").style.display = "none"
    document.querySelector("#sectionNav").style.display = "none"
    // document.querySelector("#sectionCerrarSesion").style.display = "none"
    document.querySelector("#sectionPostulacionesUsuario").style.display = "none"
    document.querySelector("#sectionOfertasDestacadas").style.display = "none"
    document.querySelector("#sectionPincipalAdmin").style.display = "none"
    document.querySelector("#administrarOfertas").style.display = "none"
    document.querySelector("#editarOfertas").style.display = "none"
    document.querySelector("#administrarPostulaciones").style.display = "none"
    document.querySelector("#estadisticasSistema").style.display = "none"
}

function ocultarLogin(user) {
    // document.querySelector("#sectionLogin").style.display = "none";
    document.querySelector("#headerPrincipal").style.display = "none"
    // document.querySelector("#sectionCerrarSesion").style.display = "flex";
    document.querySelector("#headerLogin").style.display = "flex"
    document.querySelector("#sectionNav").style.display = "block"
    document.querySelector("#resultadoCerrarSesion").innerHTML = `${user.Nombre} (${user.User})`
    if (user.Rol === "admin") {
        document.querySelector("#navAdmin").style.display = "flex";
        document.querySelector("#navUser").style.display = "none";
    } else {
        document.querySelector("#navUser").style.display = "flex";
        document.querySelector("#navAdmin").style.display = "none";
    }
}



function eventosBotones() {
    document.querySelector("#navegarSectionRegistro").addEventListener("click", mostrarSeccionRegistro);
    document.querySelector("#btnRegisterCancelar").addEventListener("click", mostrarLoginPrincipal);
    document.querySelector("#btnRegister").addEventListener("click", registrarUsuario);
    document.querySelector("#btnIngreso").addEventListener("click", loginUsuario);
    document.querySelector("#btnCerrarSesion").addEventListener("click", cerrarSesion);
    document.querySelector("#btnTotalOfertas").addEventListener("click", verMasOfertas);
    document.querySelector("#btnVerOfertas").addEventListener("click", verOfertas);
    document.querySelector("#btnVerOfertasDestacadas").addEventListener("click", verOfertasDestacadas);
    document.querySelector("#btnVerPostulaciones").addEventListener("click", verPostulaciones);
    document.querySelector("#btnPrincipalAdmin").addEventListener("click", mostrarPrincipalAdmin);
    document.querySelector("#btnCrearOferta").addEventListener("click", crearOferta);
    document.querySelector("#btnAdminOfertas").addEventListener("click", adminOfertas);
    document.querySelector("#btnAdminPostulaciones").addEventListener("click", adminPostulaciones);
    document.querySelector("#btnEstadisticas").addEventListener("click", verEstadisticas);
    document.querySelector("#btnBuscarPorTitulo").addEventListener("click", buscarPorTitulo);
}

function pasarMayuscula(palabra) {
    let palabraMayuscula = palabra.charAt(0).toUpperCase();
    palabraMayuscula += palabra.substring(1);
    return palabraMayuscula
}

function mostrarSeccionRegistro() {
    ocultarSecciones()
    document.querySelector("#sectionLogin").style.display = "none"
    document.querySelector("#sectionRegistro").style.display = "block"
}

function mostrarLoginPrincipal(){
    document.querySelector("#sectionLogin").style.display = "flex"
    document.querySelector("#sectionRegistro").style.display = "none"
}

function mostrarSeccionLogin() {
    ocultarSecciones()
    // document.querySelector("#sectionLogin").style.display = "block";
    document.querySelector("#headerPrincipal").style.display = "flex";
}

function cerrarSesion() {
    mostrarSeccionLogin();
    usuarioLogeado = null;
    document.querySelector("#loginUser").value = "";
    document.querySelector("#loginPass").value = "";
    document.querySelector("#resultadoIngreso").innerHTML = "";
    document.querySelector("#resultadoOfertas").innerHTML = "";
    document.querySelector("#resultadoOfertas2").innerHTML = "";
    document.querySelector("#resultadoPostulacionesUsuario").innerHTML = "";
}

function registrarUsuario() {
    let user = document.querySelector("#registroUser").value.toLowerCase();
    let pass = document.querySelector("#registroPass").value;
    let pass2 = document.querySelector("#registroPass2").value;
    let nombre = document.querySelector("#registroName").value;
    let experiencia = document.querySelector("#registroExpe").value;
    let area = document.querySelector("#registroArea").value;
    let rol = "user";
    let resultado = "";
    let usuarioAgregado
    //VALIDAMOS QUE LAS CONTRASEÑAS COINCIDAN
    if (pass !== pass2) {
        resultado = "Las contraseñas no coinciden";
    } else {
        let usuario = new User(user, pass, nombre, experiencia, area, rol);
        usuarioAgregado = sistema.addUser(usuario)
        //MOSTRAMOS MENSAJE DEPENDIENDO DEL CÓDIGO DE ERROR
        switch (usuarioAgregado) {
            case 1:
                resultado = "Favor introduzca un nombre de usuario válido";
                break;
            case 2:
                resultado = "Favor introduzca una contraseña válida";
                break;
            case 3:
                resultado = "Favor ingrese un nombre completo válido";
                break;
            case 4:
                resultado = "Favor seleccione un nivel de experiencia válido";
                break;
            case 5:
                resultado = "Favor seleccione un área de interes válida";
                break;
            case 6:
                resultado = "El nombre de usuario ingresado ya se encuentra en uso";
                break;
            case 0:
                resultado = "El registro de: " + usuario.Nombre + " se realizó correctamente";
                document.querySelector("#resultadoIngreso").innerHTML = resultado;
                document.querySelector("#registroUser").value = "";
                document.querySelector("#registroPass").value = "";
                document.querySelector("#registroPass2").value = "";
                document.querySelector("#registroName").value = "";
                document.querySelector("#registroExpe").value = "";
                document.querySelector("#registroArea").value = "";
                mostrarSeccionLogin()
                break;
            default:
                resultado = "Favor ingrese datos válidos";
        }
    }
    document.querySelector("#resultadoRegister").innerHTML = resultado;
    if(usuarioAgregado===0){
        mostrarLoginPrincipal()
    }

}

function loginUsuario() {
    let user = document.querySelector("#loginUser").value.toLowerCase();
    let pass = document.querySelector("#loginPass").value;
    let usuarioEncontrado = sistema.encontrarUsuario(user, pass);
    let resultado = "";
    if (usuarioEncontrado === null) {
        resultado = "Usuario o contraseña incorrecta";
    } else {
        resultado = "Login Exitos";
        usuarioLogeado = usuarioEncontrado;
        //SI ES USER MOSTRAMOS OFERTAS SI NO PANEL DE ADMIN
        if (usuarioEncontrado.Rol === "user") {
            mostrarOfertas(usuarioEncontrado, true);
        } else {
            adminPostulaciones();
        }
    }
    document.querySelector("#resultadoIngreso").innerHTML = resultado;
}

function mostrarOfertas(usuarioEncontrado, validaInteres) {
    ocultarSecciones()
    ocultarLogin(usuarioEncontrado)
    document.querySelector("#sectionPincipalUser").style.display = "flex";
    document.querySelector("#resultadoOfertas2").innerHTML = "";
    let resultado = "";
    let listadoOfertas = sistema.obtenerOfertas(usuarioEncontrado, validaInteres);
    if (listadoOfertas === null) {
        if (validaInteres) {
            resultado = "No se encontraron ofertas disponibles para su área de interés."
        } else {
            resultado = "No se encontraron ofertas disponibles."
        }
    } else {
        for (let i = 0; i < listadoOfertas.length; i++) {
            let oferta = listadoOfertas[i];
            resultado += `
                <div class="card-oferta">
                    <h3>${oferta.Titulo}</h3>
                    <p><strong>Empresa:</strong> ${oferta.Empresa}</p>
                    <p><strong>Descripción:</strong> ${oferta.Descripcion}</p>
                    <p><strong>Nivel requerido:</strong> ${pasarMayuscula(oferta.NivelRequerido)}</p>
                    <p><strong>Área:</strong> ${pasarMayuscula(oferta.AreaOferta)}</p>
                    <button id="btnPostularse${oferta.Id}" class="btnPostularse">Postularse</button>
                </div>
            `

        }
    }
    document.querySelector("#resultadoOfertas").innerHTML = resultado;
    let botonesPostulacion = document.querySelectorAll(".btnPostularse");
    for (let b of botonesPostulacion) {
        b.addEventListener("click", postularOferta);
    }
}

function verMasOfertas() {
    mostrarOfertas(usuarioLogeado, false);
}

function verOfertasDestacadas() {
    ocultarSecciones()
    ocultarLogin(usuarioLogeado)
    document.querySelector("#sectionOfertasDestacadas").style.display = "block";
    document.querySelector("#resultadoOfertas2").innerHTML = "";
    let resultado = "";
    let listadoOfertasDestacadas = sistema.obtenerOfertasDestacadas(usuarioLogeado);
    if (listadoOfertasDestacadas === null) {
        resultado = "No se encontraron ofertas destacadas."
    } else {
        for (let i = 0; i < listadoOfertasDestacadas.length; i++) {
            let oferta = listadoOfertasDestacadas[i];
            resultado += `
                <div class="card-oferta">
                    <h3>${oferta.Titulo}</h3>
                    <p><strong>Empresa:</strong> ${oferta.Empresa}</p>
                    <p><strong>Descripción:</strong> ${oferta.Descripcion}</p>
                    <p><strong>Nivel requerido:</strong> ${pasarMayuscula(oferta.NivelRequerido)}</p>
                    <p><strong>Área:</strong> ${pasarMayuscula(oferta.AreaOferta)}</p>
                    `;
            if (oferta.valida) {
                resultado += `
                            <button id="btnPostularse${oferta.Id}" class="btnPostularse">Postularse</button>
                            </div>
                        `;
            } else {
                resultado += `
                            <p style="color: rgb(167, 8, 8)"><strong>No cumple las condiciones para postulatrse a esta oferta</strong></p>
                            </div>
                        `;
            }


        }
    }
    document.querySelector("#resultadoOfertasDestacadas1").innerHTML = resultado;
    let botonesPostulacion = document.querySelectorAll(".btnPostularse");
    for (let b of botonesPostulacion) {
        b.addEventListener("click", postularOferta);
    }
}


function verOfertas() {
    mostrarOfertas(usuarioLogeado, true);
}


function postularOferta() {
    let idBoton = this.id;
    let ofertaId = idBoton.substring(13);
    let resultado = "";
    let oferta = sistema.buscarOferta(ofertaId);
    if (oferta === null) {
        resultado = "Error al realizar postulación, oferta no disponible";
    } else {
        let ofertaAgregada = sistema.postularOferta(oferta, usuarioLogeado);
        if (ofertaAgregada === null) {
            resultado = "Error al realizar la postulación";
        } else {
            resultado = "Se aplicó correctamente la postulación a la oferta: " + ofertaAgregada.Titulo;
        }
        alert(resultado);
        mostrarOfertas(usuarioLogeado, true);
        document.querySelector(`#resultadoOfertas2`).innerHTML = resultado;
    }
}

function verPostulaciones() {
    ocultarSecciones()
    ocultarLogin(usuarioLogeado)
    document.querySelector("#sectionPostulacionesUsuario").style.display = "block";
    let postulacionesUsuario = sistema.obtenerPostulacionesUsuario(usuarioLogeado);
    let resultado = "";
    if (postulacionesUsuario === null) {
        resultado = "No se encontraron postulaciones realizadas";
    } else {
        for (let pU of postulacionesUsuario) {
            resultado += `
                <div class="card-oferta">
                    <h3>${pU.Titulo}</h3>
                    <p><strong>Empresa:</strong> ${pU.Empresa}</p>
                    <p><strong>Descripción:</strong> ${pU.Descripcion}</p>
                    <p><strong>Nivel requerido:</strong> ${pasarMayuscula(pU.NivelRequerido)}</p>
                    <p><strong>Área:</strong> ${pasarMayuscula(pU.AreaPostulacion)}</p>
                    <p><strong>Estado:</strong> ${pasarMayuscula(pU.Estado)}</p>
                    <p><strong>Id Postulación:</strong> ${pU.Id}</p>
                </div>
            `
        }
    }
    document.querySelector("#resultadoPostulacionesUsuario").innerHTML = resultado;
}

function mostrarPrincipalAdmin() {
    ocultarSecciones()
    ocultarLogin(usuarioLogeado)
    document.querySelector("#sectionPincipalAdmin").style.display = "block"
    document.querySelector("#resultadoCrearOfertas").innerHTML = "";
}

function crearOferta() {
    let titulo = document.querySelector("#tituloOferta").value;
    let empresa = document.querySelector("#empresaOferta").value;
    let descripcion = document.querySelector("#descripcionOferta").value;
    let nivel = document.querySelector("#nivelOferta").value;
    let area = document.querySelector("#areaOferta").value;
    let limite = Number(document.querySelector("#limiteOferta").value);
    let vacantes = Number(document.querySelector("#vacantesOferta").value);
    let destacada = document.querySelector("#destacadaOferta").checked;
    let resultado = "";
    let oferta = new Oferta(titulo, empresa, descripcion, nivel, area, limite, vacantes, destacada);
    let ofertaCreada = sistema.addOferta(oferta);
    switch (ofertaCreada) {
        case 1:
            resultado = "Favor introduzca un titulo válido";
            break;
        case 2:
            resultado = "Favor introduzca una empresa válida";
            break;
        case 3:
            resultado = "Favor ingrese una descripción válida";
            break;
        case 4:
            resultado = "Favor seleccione un nivel de experiencia válido";
            break;
        case 5:
            resultado = "Favor seleccione un área de interes válida";
            break;
        case 6:
            resultado = "Favor introduzca un límite de postulaciones válido";
            break;
        case 7:
            resultado = "Favor seleccione una cantidad de vacantes válidas";
            break;
        case 0:
            resultado = "Se agregó la oferta: " + oferta.Titulo + " de forma exitosa";
            break;
        default:
            resultado = "Favor ingrese datos válidos";
    }
    document.querySelector("#resultadoCrearOfertas").innerHTML = resultado;
    document.querySelector("#tituloOferta").value = "";
    document.querySelector("#empresaOferta").value = "";
    document.querySelector("#descripcionOferta").value = "";
    document.querySelector("#nivelOferta").value = "-1";
    document.querySelector("#areaOferta").value = "-1";
    document.querySelector("#limiteOferta").value = "";
    document.querySelector("#vacantesOferta").value = "";
    document.querySelector("#destacadaOferta").checked = false;
}

function adminOfertas() {
    ocultarSecciones();
    ocultarLogin(usuarioLogeado);
    document.querySelector("#administrarOfertas").style.display = "block";
    document.querySelector("#resultadoAdministrarOfertas2").innerHTML = "";
    let resultado = "";
    let listadoOfertas = sistema.listarOfertas();
    if (listadoOfertas === null) {
        resultado = "No se encontraron ofertas disponibles";
    } else {
        for (let lo of listadoOfertas) {
            resultado += `
                <div class="card-oferta">
                    <h3>${lo.Titulo}</h3>
                    <p><strong>ID Oferta:</strong> ${lo.Id}</p>
                    <p><strong>Empresa:</strong> ${lo.Empresa}</p>
                    <p><strong>Descripción:</strong> ${lo.Descripcion}</p>
                    <p><strong>Nivel requerido:</strong> ${pasarMayuscula(lo.NivelRequerido)}</p>
                    <p><strong>Área:</strong> ${pasarMayuscula(lo.AreaOferta)}</p>
                    <p><strong>Postulaciones:</strong>${lo.CantPostulaciones} / ${lo.LimitePostulaciones}</p>
                    <p><strong>Vacantes:</strong>${lo.CantVacantes} / ${lo.LimiteVacantes}</p>
                `
            if (lo.OfertaDestacada) {
                resultado += `<p><strong>Oferta Destacada:</strong>Si</p>`
            } else {
                resultado += `<p><strong>Oferta Destacada:</strong>No</p>`
            }
            resultado += `<p><strong>Estado:</strong> ${pasarMayuscula(lo.Estado)}</p>`;
            if (lo.Estado === "inactiva") {
                resultado += `<p><strong>Motivo Inactiva:</strong> ${lo.Motivo}</p>`;
            }
            resultado += `
                    <button id="btnEditarOferta${lo.Id}" class="btnEditarOferta">Editar</button>
                    <button id="btnCerrarOferta${lo.Id}" class="btnCerrarOferta">Cerrar</button>
                </div>
            `
        }
    }
    document.querySelector("#resultadoAdministrarOfertas").innerHTML = resultado;
    for (let lo of listadoOfertas) {
        if (lo.Estado !== "activa") {
            document.querySelector(`#btnCerrarOferta${lo.Id}`).disabled = true;
        }
    }
    let botonesCerrar = document.querySelectorAll(".btnCerrarOferta");
    for (let bC of botonesCerrar) {
        bC.addEventListener("click", cerrarOferta);
    }
    let botonesEditar = document.querySelectorAll(".btnEditarOferta");
    for (let bE of botonesEditar) {
        bE.addEventListener("click", navegarEditarOferta);
    }
}

function cerrarOferta() {
    let idBoton = this.id;
    let ofertaId = idBoton.substring(15);
    let resultado = "";
    let ofertaCerrada = sistema.cerrarOfertas(ofertaId);
    if (ofertaCerrada === null) {
        resultado = `La oferta no pudo ser cerrada`;
    } else {
        resultado = `La oferta ${ofertaCerrada.Titulo} - ${ofertaCerrada.Empresa} se cerró correctamente (id:${ofertaCerrada.Id})`;
    }
    adminOfertas();
    document.querySelector("#resultadoAdministrarOfertas2").innerHTML = resultado;
}

function navegarEditarOferta() {
    ocultarSecciones();
    ocultarLogin(usuarioLogeado);
    document.querySelector("#editarOfertas").style.display = "block";
    document.querySelector("#resultadoEditarOfertas2").innerHTML = "";
    let idBoton = this.id;
    let ofertaId = idBoton.substring(15);
    let resultado = "";
    let ofertaEditar = sistema.obtenerOfertaPorID(ofertaId);
    if (ofertaEditar === null) {
        resultado = "No se encontró la oferta a editar";
    } else {
        resultado = `
            <form id="formEditarOferta">
                <label for="modificarTituloOferta">Titulo</label>
                <input type="text" id="modificarTituloOferta" value="${ofertaEditar.Titulo}">
                <label for="modificarEmpresaOferta">Empresa</label>
                <input type="text" id="modificarEmpresaOferta" value="${ofertaEditar.Empresa}">
                <label for="modificarDescripcionOferta">Descripcion</label>
                <textarea type="text" id="modificarDescripcionOferta" maxlength="100">${ofertaEditar.Descripcion}</textarea>
                <label for="modificarNivelOferta">Nivel requerido</label>
                <input type="text" id="modificarNivelOferta" value="${pasarMayuscula(ofertaEditar.NivelRequerido)}" disabled>
                <label for="modificarAreaOferta">Área</label>
                <input type="text" id="modificarAreaOferta" value="${pasarMayuscula(ofertaEditar.AreaOferta)}" disabled>
                <label for="modificarLimiteOferta">Limite de Postulaciones</label>
                <input type="number" id="modificarLimiteOferta" value="${ofertaEditar.LimitePostulaciones}" disabled>
                <label for="modificarVacantesOferta">Cantidad de vacantes</label>
                <input type="number" id="modificarVacantesOferta" value="${ofertaEditar.CantVacantes}" disabled>
                <label for="modificarDestacadaOferta">Destacar oferta</label>
                <input type="checkbox" id="modificarDestacadaOferta" value="${ofertaEditar.OfertaDestacada}" disabled>
                <button type="button" id="btnModificarOferta${ofertaEditar.Id}">Modificar</button>
                <p><strong id="resultadoEditarOfertas"></strong></p>
            </form>
        `
    }
    let botonModificar = `#btnModificarOferta${ofertaEditar.Id}`
    document.querySelector("#resultadoEditarOfertas").innerHTML = resultado;
    document.querySelector(botonModificar).addEventListener("click", editarOferta)
}

function editarOferta() {
    let idBoton = this.id;
    let ofertaId = idBoton.substring(18);
    let titulo = document.querySelector("#modificarTituloOferta").value;
    let empresa = document.querySelector("#modificarEmpresaOferta").value;
    let descripcion = document.querySelector("#modificarDescripcionOferta").value;
    let resultado = "";
    let ofertaModificada = sistema.modificarOferta(ofertaId, titulo, empresa, descripcion);
    switch (ofertaModificada) {
        case 1:
            resultado = "Favor introduzca un titulo válido";
            break;
        case 2:
            resultado = "Favor introduzca una empresa válida";
            break;
        case 3:
            resultado = "Favor ingrese una descripción válida";
            break;
        case 4:
            resultado = "No se encontró la oferta a modificar";
            break;
        case 0:
            resultado = "Se modifico la oferta: " + titulo + " de forma exitosa";
            break;
        default:
            resultado = "Favor ingrese datos válidos";
    }
    adminOfertas();
    document.querySelector("#resultadoAdministrarOfertas2").innerHTML = resultado;
}

function adminPostulaciones() {
    ocultarSecciones();
    ocultarLogin(usuarioLogeado);
    document.querySelector("#administrarPostulaciones").style.display = "block";
    document.querySelector("#resultadoadministrarPostulaciones2").innerHTML = "";
    let resultado = "";
    let listadoPostulaciones = sistema.listarPostulaciones();
    if (listadoPostulaciones.length === 0) {
        resultado = "No se encontraron postulaciones";
    } else {
        for (let lP of listadoPostulaciones) {
            resultado += `
                <div class="card-oferta">
                    <h3>${lP.Titulo}</h3>
                    <p><strong>Empresa:</strong> ${lP.Empresa}</p>
                    <p><strong>Descripción:</strong> ${lP.Descripcion}</p>
                    <p><strong>Nivel requerido:</strong> ${pasarMayuscula(lP.NivelRequerido)}</p>
                    <p><strong>Área:</strong> ${pasarMayuscula(lP.AreaPostulacion)}</p>
                    <p><strong>Usuario:</strong> ${lP.UserId}</p>
                    <p><strong>Oferta:</strong> ${lP.OfertaId}</p>
                    <p><strong>Id:</strong> ${lP.Id}</p>
                    <p style="color: Red;"><strong>Estado:</strong> ${pasarMayuscula(lP.Estado)}</p>
                    <button id="btnAceptarPostulacion${lP.Id}" class="btnAceptarPostulacion">Aceptar</button>
                    <button id="btnRechazarPostulacion${lP.Id}" class="btnRechazarPostulacion">Rechazar</button>
                </div>
            `
        }
    }
    document.querySelector("#resultadoadministrarPostulaciones").innerHTML = resultado;
    for (let lP of listadoPostulaciones) {
        if (lP.Estado !== "pendiente") {
            document.querySelector(`#btnAceptarPostulacion${lP.Id}`).disabled = true;
            document.querySelector(`#btnRechazarPostulacion${lP.Id}`).disabled = true;
        }
    }
    let botonesAceptar = document.querySelectorAll(".btnAceptarPostulacion");
    for (let bA of botonesAceptar) {
        bA.addEventListener("click", aceptarPostulacion);
    }
    let botonesRechazar = document.querySelectorAll(".btnRechazarPostulacion");
    for (let bR of botonesRechazar) {
        bR.addEventListener("click", rechazarPostulacion);
    }
}

function aceptarPostulacion() {
    let idBoton = this.id;
    let idPostulacion = idBoton.substring(21);
    let resultado = "";
    let postulacionAceptada = sistema.aprobarPostulacion(idPostulacion);
    if (postulacionAceptada === null) {
        resultado = "No se logró aprobar la postulación seleccionada";
    } else {
        resultado = `Postulación ${postulacionAceptada.postulacion.Titulo} (Id: ${postulacionAceptada.postulacion.Id}) aprobada correctamente <br>`;
        if (postulacionAceptada.cambioEstado) {
            resultado += `Se modifico la oferta a estado inactiva, motivo: ${postulacionAceptada.motivo} <br>`;
            if (postulacionAceptada.cantRechazos > 0) {
                resultado += `Se rechazaron un total de ${postulacionAceptada.cantRechazos} postulaciones`;
            }
        }
    }
    adminPostulaciones();
    document.querySelector("#resultadoadministrarPostulaciones2").innerHTML = resultado;
}

function rechazarPostulacion() {
    let idBoton = this.id;
    let idPostulacion = idBoton.substring(22);
    let resultado = "";
    let postulacionRechazada = sistema.rechazarPostulacion(idPostulacion);
    if (postulacionRechazada === null) {
        resultado = "No se logró rechazar la postulación seleccionada";
    } else {
        resultado = `Postulación ${postulacionRechazada.Titulo} (Id: ${postulacionRechazada.Id}) rechazada correctamente `;
    }
    adminPostulaciones();
    document.querySelector("#resultadoadministrarPostulaciones2").innerHTML = resultado;
}

function armarTabla(datosOfertas) {
    let resultado = `
            <table>
                <tr>
                    <th>Titulo</th>
                    <th>Postulaciones Pendientes</th>
                    <th>Postulaciones Aceptadas</th>
                    <th>Postulaciones Rechazadas</th>
                    <th>Total postulaciones</th>
                </tr>
        `;
    for (let dO of datosOfertas) {
        resultado += `
                <tr>
                    <td>${dO.titulo}</td>
                    <td>${dO.cantPend}</td>
                    <td>${dO.cantApro}</td>
                    <td>${dO.cantRech}</td>
                    <td>${dO.cantTotal}</td>
                </tr>
            `
    }
    resultado += `
            </table>
        `;
    return resultado
}

function verEstadisticas() {
    ocultarSecciones();
    ocultarLogin(usuarioLogeado);
    document.querySelector("#estadisticasSistema").style.display = "block";
    let resultado1 = "";
    let datosOferta = sistema.calcularDatosOferta();
    if (datosOferta.length === 0) {
        resultado1 = "No se encontraron ofertas disponibles";
    } else {
        resultado1 = armarTabla(datosOferta);
    }
    document.querySelector("#postulacionesEstadisticas").innerHTML = resultado1;

    let resultado2 = "";
    let estadosOfertas = sistema.calcularEstadosOfertas();
    if (estadosOfertas.length === 0) {
        resultado2 = "No se encontraron ofertas para mostrar";
    } else {
        resultado2 += `
            <table>
                <tr>
                    <th>Estado</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>Activas</td>
                    <td>${estadosOfertas.activas}</td>
                </tr>
                <tr>
                    <td>Inactivas</td>
                    <td>${estadosOfertas.inactivas}</td>
                </tr>
                <tr>
                    <td>Cerradas</td>
                    <td>${estadosOfertas.cerradas}</td>
                </tr>
            </table>
        `
    }
    document.querySelector("#ofertasEstadisticas").innerHTML = resultado2;

    let resultado3 = "";
    let vacantes = sistema.calcularPorcentajeVacantes();
    if (vacantes === null) {
        resultado3 = "Error al calcular el porcentaje de vacantes cubiertas";
    } else {
        resultado3 = `
            <table>
                <tr>
                    <th>Vacantes cubiertas</td>
                    <th>Vacantes totales</td>
                    <th>Porcentaje cubiertas</td>
                </tr>
                <tr>
                    <td>${vacantes.cubiertas}</td>
                    <td>${vacantes.totales}</td>
                    <td>${vacantes.porcentaje}</td>
                </tr>
            </table>
        `
    }
    document.querySelector("#vacantesEstadisticas2").innerHTML = resultado3;

    let resultado4 = "";
    let mayorPostulante = sistema.calcularMayorPostulante();
    if (mayorPostulante.length === 0) {
        resultado4 = "No se encontraron postulantes";
    } else {
        if(mayorPostulante[0].cant === 0){
            resultado4 = "Ningun usuario cuenta con postulaciones";
        } else {
            resultado4 += `
                <table>
                    <tr>
                        <th>Usuario</th>
                        <th>Nombre</th>
                        <th>Cantidad postulaciones</th>
                    </tr>
            `
            for (let mP of mayorPostulante) {
                resultado4 += `
                    <tr>
                        <td>${mP.user.User}</td>
                        <td>${mP.user.Nombre}</td>
                        <td>${mP.cant}</td>
                    </tr>
                `
            }
            resultado4 += "</table>"
        }
    }
    document.querySelector("#postulantesEstadisticas").innerHTML = resultado4;
}

function buscarPorTitulo() {
    document.querySelector("#resultadoBuscarPorTitulo").innerHTML = "";
    let titulo = document.querySelector("#txtBuscarPorTitulo").value;
    let resultado = "";
    let datosOferta = sistema.calcularDatosOferta(titulo);
    if (titulo !== "") {
        if (datosOferta.length === 0) {
            resultado = "No se encontraron ofertas con ese titulo";
            document.querySelector("#resultadoBuscarPorTitulo").innerHTML = resultado;
            datosOferta = sistema.calcularDatosOferta();
            document.querySelector("#postulacionesEstadisticas").innerHTML = armarTabla(datosOferta);

        } else {
            resultado = armarTabla(datosOferta);
            document.querySelector("#postulacionesEstadisticas").innerHTML = resultado;
        }
    } else {
        datosOferta = sistema.calcularDatosOferta();
        document.querySelector("#postulacionesEstadisticas").innerHTML = armarTabla(datosOferta);
    }
}