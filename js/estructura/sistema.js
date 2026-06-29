class Sistema {
    constructor() {
        this.Users = new Array()
        this.Ofertas = new Array()
        this.Postulaciones = new Array()
        this.preCargaDatos();
    }

    preCargaDatos() {
        //ADMINS
        let a1 = new User("admin1", "Admin123", "Administrador", ".", ".", "admin");
        let a2 = new User("admin2", "Admin123", "Administrador", ".", ".", "admin");
        let a3 = new User("admin3", "Admin123", "Administrador", ".", ".", "admin");

        this.addUser(a1);
        this.addUser(a2);
        this.addUser(a3);

        //USERS
        let c1 = new User("ival1", "valE4495", "Valentin Garcia", "jr", "tec", "user");
        let c2 = new User("ival2", "valE4495", "Valentin Garcia", "semiSr", "disenio", "user");
        let c3 = new User("ival3", "valE4495", "Valentin Garcia", "sr", "administracion", "user");
        this.addUser(c1);
        this.addUser(c2);
        this.addUser(c3);

        let u1 = new User("user1", "User123", "Ana Perez", "jr", "tecnologia", "user");
        let u2 = new User("user2", "User123", "Bruno Silva", "jr", "disenio", "user");
        let u3 = new User("user3", "User123", "Camila Lopez", "jr", "marketing", "user");
        let u4 = new User("user4", "User123", "Diego Torres", "jr", "administracion", "user");
        let u5 = new User("user5", "User123", "Elena Castro", "jr", "otros", "user");

        let u6 = new User("user6", "User123", "Federico Ramos", "semiSr", "tecnologia", "user");
        let u7 = new User("user7", "User123", "Gabriela Diaz", "semiSr", "disenio", "user");
        let u8 = new User("user8", "User123", "Hector Nuñez", "semiSr", "marketing", "user");
        let u9 = new User("user9", "User123", "Isabel Medina", "semiSr", "administracion", "user");
        let u10 = new User("user10", "User123", "Joaquin Sosa", "semiSr", "otros", "user");

        let u11 = new User("user11", "User123", "Karina Acosta", "sr", "tecnologia", "user");
        let u12 = new User("user12", "User123", "Lucas Fernandez", "sr", "disenio", "user");
        let u13 = new User("user13", "User123", "Martina Suarez", "sr", "marketing", "user");
        let u14 = new User("user14", "User123", "Nicolas Pereira", "sr", "administracion", "user");
        let u15 = new User("user15", "User123", "Olivia Rocha", "sr", "otros", "user");

        this.addUser(u1);
        this.addUser(u2);
        this.addUser(u3);
        this.addUser(u4);
        this.addUser(u5);
        this.addUser(u6);
        this.addUser(u7);
        this.addUser(u8);
        this.addUser(u9);
        this.addUser(u10);
        this.addUser(u11);
        this.addUser(u12);
        this.addUser(u13);
        this.addUser(u14);
        this.addUser(u15);

        //OFERTAS
        let o1 = new Oferta("Desarrollador Frontend Jr", "Globant", "Trabajo con HTML, CSS y JS.", "jr", "tecnologia", 10, 2, true);
        let o2 = new Oferta("Diseñador UX/UI Semi Sr", "Mercado Libre", "Diseño de interfaces web y mobile.", "semiSr", "disenio", 8, 2, true);
        let o3 = new Oferta("Analista de Marketing Jr", "PedidosYa", "Campañas digitales y redes sociales.", "jr", "marketing", 6, 1, false);
        let o4 = new Oferta("Administrativo Semi Sr", "Abitab", "Gestión administrativa y reportes.", "semiSr", "administracion", 5, 1, false);
        let o5 = new Oferta("Project Manager Sr", "IBM", "Gestión de proyectos tecnológicos.", "sr", "otros", 2, 1, false);
        let o6 = new Oferta("Backend Developer Sr", "Microsoft", "Desarrollo backend con APIs.", "sr", "tecnologia", 7, 2, true);
        let o7 = new Oferta("Diseñador Gráfico Jr", "Canva", "Diseño de piezas gráficas.", "jr", "disenio", 5, 1, false);
        let o8 = new Oferta("Community Manager Semi Sr", "Coca Cola", "Gestión de comunidades online.", "semiSr", "marketing", 6, 2, false);
        let o9 = new Oferta("Contador Sr", "Deloitte", "Contabilidad y análisis financiero.", "sr", "administracion", 3, 1, false);
        let o10 = new Oferta("Soporte Técnico Jr", "TCS", "Atención y soporte a usuarios.", "jr", "otros", 10, 3, false);


        this.addOferta(o1);
        this.addOferta(o2);
        this.addOferta(o3);
        this.addOferta(o4);
        this.addOferta(o5);
        this.addOferta(o6);
        this.addOferta(o7);
        this.addOferta(o8);
        this.addOferta(o9);
        this.addOferta(o10);

        //POSTULACIONES

        let p1 = this.postularOferta(o1, u1);
        let p2 = this.postularOferta(o1, u6);
        let p3 = this.postularOferta(o1, u11);

        let p4 = this.postularOferta(o2, u7);
        let p5 = this.postularOferta(o2, u12);

        let p6 = this.postularOferta(o3, u3);
        let p7 = this.postularOferta(o3, u8);

        let p8 = this.postularOferta(o4, u9);
        let p9 = this.postularOferta(o4, u14);

        let p10 = this.postularOferta(o5, u15);
        let p11 = this.postularOferta(o5, u10);

        let p12 = this.postularOferta(o6, u11);
        let p13 = this.postularOferta(o6, u6);

        let p14 = this.postularOferta(o7, u2);
        let p15 = this.postularOferta(o7, u12);

        let p16 = this.postularOferta(o8, u8);
        let p17 = this.postularOferta(o8, u13);

        let p18 = this.postularOferta(o8, u14);

        let p19 = this.postularOferta(o10, u5);
        let p20 = this.postularOferta(o10, u10);

        // ESTADOS
        this.aprobarPostulacion(p2.Id);
        this.rechazarPostulacion(p3.Id);

        this.aprobarPostulacion(p5.Id);

        this.rechazarPostulacion(p6.Id);

        this.aprobarPostulacion(p8.Id);
        this.rechazarPostulacion(p9.Id);

        this.rechazarPostulacion(p11.Id);

        this.aprobarPostulacion(p12.Id);

        this.rechazarPostulacion(p14.Id);
        this.aprobarPostulacion(p15.Id);

        this.rechazarPostulacion(p17.Id);

        this.aprobarPostulacion(p18.Id);

        this.rechazarPostulacion(p20.Id);



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
                if (isNaN(Number(usuario.Pass.charAt(i)))) {
                    if (usuario.Pass.charAt(i).toUpperCase() === usuario.Pass.charAt(i)) {
                        cantMayus++
                    } else {
                        cantMinus++
                    }
                } else {
                    cantNumbers++
                }
                // if (!isNaN(Number(usuario.Pass.charAt(i)))) {
                //     cantNumbers++
                // }
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
            if (oferta.Estado === "activa" && (oferta.CantVacantes < oferta.LimiteVacantes) && (oferta.CantPostulaciones < oferta.LimitePostulaciones)) {
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
            if (oferta.Estado === "activa" && (oferta.CantVacantes < oferta.LimiteVacantes) && (oferta.CantPostulaciones < oferta.LimitePostulaciones)) {
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
        } else if (oferta.Empresa.trim() === "" || oferta.Empresa.length < 2) {
            return 2
        } else if (oferta.Descripcion.trim() === "") {
            return 3
        } else if (oferta.NivelRequerido.trim() === "" || oferta.NivelRequerido == "-1") {
            return 4
        } else if (oferta.AreaOferta.trim() === "" || oferta.AreaOferta == "-1") {
            return 5
        } else if (isNaN(oferta.LimitePostulaciones) || oferta.LimitePostulaciones <= 0) {
            return 6
        } else if (isNaN(oferta.LimiteVacantes) || oferta.LimiteVacantes <= 0) {
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
                if (o.CantVacantes >= o.LimiteVacantes || o.CantPostulaciones >= o.LimitePostulaciones) {
                    return null
                }
                o.CantPostulaciones++;
                if (o.CantPostulaciones >= o.LimitePostulaciones) {
                    o.Estado = "inactiva";
                    o.Motivo = "Limite de postulaciones alcanzado";
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

    rechazarPostulaciones(id) {
        let cantRechazos = 0;
        for (let p of this.Postulaciones) {
            if (p.OfertaId === id) {
                if (p.Estado === "pendiente") {
                    p.Estado = "rechazada";
                    cantRechazos++
                }
            }
        }
        return cantRechazos
    }

    aprobarPostulacion(id) {
        let cambioEstado = false;
        let motivo = "";
        let cantRechazos
        for (let p of this.Postulaciones) {
            if (p.Id === id) {
                for (let o of this.Ofertas) {
                    if (o.Id === p.OfertaId) {
                        if (o.CantVacantes >= o.LimiteVacantes) {
                            return null
                        } else {
                            o.CantVacantes++;
                            if (o.CantVacantes >= o.LimiteVacantes) {
                                o.Estado = "inactiva";
                                o.Motivo = "Cantidad de vacantes cubiertas";
                                cambioEstado = true;
                                motivo = o.Motivo;
                                cantRechazos = this.rechazarPostulaciones(o.Id);
                            }
                        }
                    }
                }
                cantRechazos--;
                p.Estado = "aprobada";
                let postulacionAceptada = {
                    postulacion: p,
                    cambioEstado: cambioEstado,
                    motivo: motivo,
                    cantRechazos: cantRechazos
                }
                return postulacionAceptada
            }
        }
        return null
    }

    rechazarPostulacion(id) {
        for (let p of this.Postulaciones) {
            if (p.Id === id) {
                p.Estado = "rechazada";
                return p
            }
        }
        return null
    }


    calcularDatosOferta(tituloBuscar) {
        let ofertas = this.Ofertas;
        let postulaciones = this.Postulaciones;
        let datosOfertas = new Array();
        for (let o of ofertas) {
            let cantPend = 0;
            let cantApro = 0;
            let cantRech = 0;
            let cantTotal = 0;
            for (let p of postulaciones) {
                if (p.OfertaId === o.Id) {
                    if (p.Estado === "pendiente") {
                        cantPend++;
                    } else if (p.Estado === "aprobada") {
                        cantApro++;
                    } else {
                        cantRech++;
                    }
                }
            }
            cantTotal = cantPend + cantApro + cantRech;
            let datosOferta = {
                titulo: o.Titulo,
                cantPend: cantPend,
                cantApro: cantApro,
                cantRech: cantRech,
                cantTotal
            }
            if (tituloBuscar === undefined || tituloBuscar === o.Titulo) {
                datosOfertas.push(datosOferta);
            }
        }
        return datosOfertas
    }

    calcularEstadosOfertas() {
        let cantActivas = 0;
        let cantInactivas = 0;
        let cantCerradas = 0;
        for (let o of this.Ofertas) {
            if (o.Estado === "activa") {
                cantActivas++;
            } else if (o.Estado === "inactiva") {
                cantInactivas++;
            } else {
                cantCerradas++;
            }
        }
        let estadosOfertas = {
            activas: cantActivas,
            inactivas: cantInactivas,
            cerradas: cantCerradas
        }
        return estadosOfertas
    }

    calcularPorcentajeVacantes() {
        let vacantesTotales = 0;
        let vacantesCubiertas = 0;
        let porcentajeVacantes = 0;
        let vacantes
        for (let o of this.Ofertas) {
            vacantesTotales += o.LimiteVacantes;
            vacantesCubiertas += o.CantVacantes;
        }
        if (vacantesTotales === 0) {
            return null
        } else {
            porcentajeVacantes = (vacantesCubiertas / vacantesTotales) * 100;
            vacantes = {
                cubiertas: vacantesCubiertas,
                totales: vacantesTotales,
                porcentaje: porcentajeVacantes
            }
            return vacantes
        }
    }

    calcularMayorPostulante() {
        let cantMaxPostulaciones = 0;
        let postulantes = new Array();
        for (let u of this.Users) {
            let cantPostulaciones = 0
            for (let p of this.Postulaciones) {
                if (p.UserId === u.User) {
                    cantPostulaciones++;
                }
            }
            let objetoPostulante = {
                user: u,
                cant: cantPostulaciones
            }
            if (cantPostulaciones > cantMaxPostulaciones) {
                postulantes = [];
                postulantes.push(objetoPostulante);
                cantMaxPostulaciones = cantPostulaciones;
            } else if (cantPostulaciones === cantMaxPostulaciones) {
                postulantes.push(objetoPostulante);
                cantMaxPostulaciones = cantPostulaciones;
            }
        }
        return postulantes
    }
}