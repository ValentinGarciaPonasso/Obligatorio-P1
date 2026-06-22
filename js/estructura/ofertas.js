class Oferta {
    static ultimoIdOferta = 1;
    constructor(titulo, empresa, descripcion, nivelRequerido, areaOferta, limitePostulaciones, limiteVacantes, ofertaDestacada) {
        this.Id = "JOB_OFFER_" + Oferta.ultimoIdOferta++;
        this.Titulo = titulo;
        this.Empresa = empresa;
        this.Descripcion = descripcion;
        this.NivelRequerido = nivelRequerido;
        this.AreaOferta = areaOferta;
        this.LimitePostulaciones = limitePostulaciones;
        this.CantPostulaciones = 0;
        this.LimiteVacantes = limiteVacantes;
        this.CantVacantes = 0;
        this.OfertaDestacada = ofertaDestacada;
        this.Estado = "activa";
        this.Motivo = "";
    }

}