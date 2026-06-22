class Sistema {
    constructor() {
        this.Users = new Array()
        this.Ofertas = new Array()
        this.Postulaciones = new Array()
        this.preCargaDatos();
    }

    preCargaDatos() {
        let a1 = new User("admin1", "Admin123", "Administrador", ".", ".", "admin");
        let a2 = new User("admin2", "Admin123", "Administrador", ".", ".", "admin");
        let a3 = new User("admin3", "Admin123", "Administrador", ".", ".", "admin");
        let c1 = new User("ival1", "valE4495", "Valentin Garcia", "jr", "tec", "user");
        let c2 = new User("ival2", "valE4495", "Valentin Garcia", "semiSr", "disenio", "user");
        let c3 = new User("ival3", "valE4495", "Valentin Garcia", "sr", "administracion", "user");
        let o1 = new Oferta("Desarrollador", "Microsoft", "Desarrollador back-end", "semiSr", "tecnologia", "20", "10", true);
        let o2 = new Oferta("Desarrollador", "Microsoft", "Desarrollador back-end", "sr", "tecnologia", "20", "10", false);
        let o3 = new Oferta("Auxiliar Administrativo", "Microsoft", "Desarrollador back-end", "jr", "administracion", "1", "10", true);
        this.addUser(a1);
        this.addUser(a2);
        this.addUser(a3);
        this.addUser(c1);
        this.addUser(c2);
        this.addUser(c3);
        this.addOferta(o1);
        this.addOferta(o2);
        this.addOferta(o3);
    }

    //REGISTRAR USUARIO
    addUser(usuario) {
        //VALIDACIONES BÁSICAS
        if (usuario.User.trim() === "" || usuario.User.length < 5) {
            return 1
        } else if (usuario.Pass.trim() === "" || usuario.Pass.length < 5) {
            return 2
        } else if (usuario.Nombre.trim() === "") {
            return 3
        } else if (usuario.Expe.trim() === "" || usuario.Expe == "-1") {
            return 4
        } else if (usuario.Area.trim() === "" || usuario.Area == "-1") {
            return 5
        } else {
            //VALIDAMOS QUE EL USUARIO NO SE ENCUENTRE REGISTRADO
            for (let i = 0; i < this.Users.length; i++) {
                if (this.Users[i].User === usuario.User) {
                    return 6
                }
            }
            //VALIDAMOS QUE EL NOMBRE NO CONTENGA LETRAS
            for (let i = 0; i < usuario.Nombre.length; i++) {
                if (usuario.Nombre.charAt(i) !== " ") {
                    if (!isNaN(usuario.Nombre.charAt(i))) {
                        return 3
                    }
                }
            }
            //VALIDAMOS QUE LA CONTRASEÑA CUMPLA LAS CONDICIONES NECESARIAS
            let cantMayus = 0;
            let cantMinus = 0;
            let cantNumbers = 0;
            for (let i = 0; i < usuario.Pass.length; i++) {
                if (usuario.Pass.charAt(i).toUpperCase() === usuario.Pass.charAt(i)) {
                    cantMayus++
                } else {
                    cantMinus++
                }
                if (!isNaN(Number(usuario.Pass.charAt(i)))) {
                    cantNumbers++
                }
            }
            if (cantMayus === 0 || cantMinus === 0 || cantNumbers == 0) {
                return 2
            } else {
                this.Users.push(usuario);
                return 0
            }
        }
    }


    //LOGIN USUARIO
    encontrarUsuario(user, pass) {
        let valida = false;
        let userEncontrado
        for (let i = 0; i < this.Users.length; i++) {
            if (this.Users[i].User === user) {
                if (this.Users[i].Pass === pass) {
                    userEncontrado = this.Users[i];
                    valida = true;
                }
            }
        }
        if (valida) {
            return userEncontrado
        } else {
            return null
        }
    }

    //SE TRAEN TODAS LAS OFERTAS VÁLIDAS PARA EL CLIENTE
    obtenerOfertas(usuario, validaInteres) {
        let ofertasDisponibles = new Array();
        for (let i = 0; i < this.Ofertas.length; i++) {
            let validaExpe = false;
            let validaOferta = true;
            let oferta = this.Ofertas[i];
            if (oferta.Estado === "activa" && Number(oferta.CantVacantes) !== 0 && Number(oferta.LimitePostulaciones) !== 0) {
                if (oferta.NivelRequerido === "sr") {
                    if (usuario.Expe === "sr") {
                        validaExpe = true;
                    }
                } else if (oferta.NivelRequerido === "semiSr") {
                    if (usuario.Expe === "sr" || usuario.Expe === "semiSr") {
                        validaExpe = true;
                    }
                } else {
                    validaExpe = true;
                }
                if (validaExpe) {
                    for (let k = 0; k < this.Postulaciones.length; k++) {
                        if (this.Postulaciones[k].OfertaId === this.Ofertas[i].Id) {
                            if (this.Postulaciones[k].UserId === usuario.User) {
                                validaOferta = false;
                            }
                        }
                    }
                    if (validaInteres) {
                        if (usuario.Area !== oferta.AreaOferta) {
                            validaOferta = false;
                        }
                    }
                    if (validaOferta) {
                        ofertasDisponibles.push(oferta);
                    }
                }
            }
        }
        if (ofertasDisponibles.length === 0) {
            return null
        } else {
            return ofertasDisponibles
        }
    }

    obtenerOfertasDestacadas(usuario) {
        let ofertasDisponibles = new Array();
        let newOferta = {};
        for (let i = 0; i < this.Ofertas.length; i++) {
            let validaExpe = false;
            let validaOferta = true;
            let oferta = this.Ofertas[i];
            if (oferta.Estado === "activa" && Number(oferta.CantVacantes) !== 0 && Number(oferta.LimitePostulaciones) !== 0) {
                if (oferta.NivelRequerido === "sr") {
                    if (usuario.Expe === "sr") {
                        validaExpe = true;
                    }
                } else if (oferta.NivelRequerido === "semiSr") {
                    if (usuario.Expe === "sr" || usuario.Expe === "semiSr") {
                        validaExpe = true;
                    }
                } else {
                    validaExpe = true;
                }
                if (validaExpe) {
                    for (let k = 0; k < this.Postulaciones.length; k++) {
                        if (this.Postulaciones[k].OfertaId === this.Ofertas[i].Id) {
                            if (this.Postulaciones[k].UserId === usuario.User) {
                                validaOferta = false;
                            }
                        }
                    }
                } else {
                    validaOferta = false;
                }
                newOferta = oferta;
                if (validaOferta) {
                    newOferta.valida = true;
                } else {
                    newOferta.valida = false;
                }
                if (newOferta.OfertaDestacada) {
                    ofertasDisponibles.push(newOferta);
                }
            }
        }
        if (ofertasDisponibles.length === 0) {
            return null
        } else {
            return ofertasDisponibles
        }
    }

    addOferta(oferta) {
        if (oferta.Titulo.trim() === "" || oferta.Titulo.length < 5) {
            return 1
        } else if (oferta.Empresa.trim() === "" || oferta.Empresa.length < 5) {
            return 2
        } else if (oferta.Descripcion.trim() === "") {
            return 3
        } else if (oferta.NivelRequerido.trim() === "" || oferta.NivelRequerido == "-1") {
            return 4
        } else if (oferta.AreaOferta.trim() === "" || oferta.AreaOferta == "-1") {
            return 5
        } else if (isNaN(oferta.LimitePostulaciones) || oferta.LimitePostulaciones < 0) {
            return 6
        } else if (isNaN(oferta.CantVacantes) || oferta.CantVacantes < 0) {
            return 7
        } else if (oferta.OfertaDestacada === "") {
            return 8
        } else {
            let ofertaAgregada = this.Ofertas.push(oferta);
            return 0
        }
    }

    buscarOferta(id) {
        if (id === "") {
            return null
        } else {
            for (let o of this.Ofertas) {
                if (o.Id === id) {
                    return o
                }
            }
            return null
        }
    }

    postularOferta(oferta, user) {
        for (let o of this.Ofertas) {
            if (o.Id === oferta.Id) {
                if (o.CantVacantes === 0 || o.LimitePostulaciones === 0) {
                    return null
                }
                o.LimitePostulaciones--;
                if (o.LimitePostulaciones === 0) {
                    o.Estado = "inactiva";
                }
                let postulacion = new Postulaciones(oferta.Titulo, oferta.Empresa, oferta.Descripcion, oferta.NivelRequerido, oferta.AreaOferta, user.User, oferta.Id);
                let postulacionAgregada = this.Postulaciones.push(postulacion);
                return postulacion;
            }
        }
    }

    obtenerPostulacionesUsuario(usuario) {
        if (usuario === null) {
            return null
        }
        let postulacionesUsuario = new Array();
        for (let p of this.Postulaciones) {
            if (p.UserId === usuario.User) {
                postulacionesUsuario.push(p);
            }
        }
        if (postulacionesUsuario.length === 0) {
            return null
        } else {
            return postulacionesUsuario
        }
    }


    listarOfertas() {
        return this.Ofertas;
    }

    cerrarOfertas(id) {
        for (let o of this.Ofertas) {
            if (o.Id === id) {
                o.Estado = "cerrada";
                return o
            }
        }
        return null
    }

    obtenerOfertaPorID(id) {
        for (let o of this.Ofertas) {
            if (o.Id === id) {
                return o
            }
        }
        return null
    }

    modificarOferta(id, titulo, empresa, descripcion) {
        if (titulo.trim() === "" || titulo.length < 5) {
            return 1
        } else if (empresa.trim() === "" || empresa.length < 5) {
            return 2
        } else if (descripcion.trim() === "") {
            return 3
        } else {
            for (let o of this.Ofertas) {
                if (o.Id === id) {
                    o.Titulo = titulo;
                    o.Empresa = empresa;
                    o.Descripcion = descripcion;
                    return 0
                }
            }
            return 4
        }
    }

    listarPostulaciones() {
        return this.Postulaciones
    }
}