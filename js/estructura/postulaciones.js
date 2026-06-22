class Postulaciones {
    static ultimoIdPostulaciones = 1;
    constructor(titulo, empresa, descripcion, nivelRequerido, areaPostulacion, userId, ofertaId){
        this.Id = "JOB_" + Postulaciones.ultimoIdPostulaciones++;
        this.Titulo = titulo;
        this.Empresa = empresa;
        this.Descripcion = descripcion;
        this.NivelRequerido = nivelRequerido;
        this.AreaPostulacion = areaPostulacion;
        this.UserId = userId;
        this.OfertaId = ofertaId;
        this.Estado = "pendiente";
    }

}