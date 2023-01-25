class DispositivoEntrada{

constructor(tipoEntrada, marca){
    this._tipoEntrada=tipoEntrada;
    this._marca=marca;

}

get tipoEntrada(){
    return this.tipoEntrada;
}

set tipoEntrada(tipoEntrada){
    this._tipoEntrada=tipoEntrada;
}

get marca(){
    return this.marca;
}
set marca(marca){
    this._marca=marca;
}


}