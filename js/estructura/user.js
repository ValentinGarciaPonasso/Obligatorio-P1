class User {
    static ultimoIdUser = 1;
    constructor(user, pass, nombre, expe, area, rol){
        this.Id = "USER_ID_" + User.ultimoIdUser++;
        this.User = user
        this.Pass = pass
        this.Nombre = nombre
        this.Expe = expe
        this.Area = area
        this.Rol = rol
        this.Postulaciones = []
    }

}