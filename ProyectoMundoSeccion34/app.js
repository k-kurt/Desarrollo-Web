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

toString() {
    return `tipo de entrada:  ${this._tipoEntrada}, marca: ${this._marca} `; 
    
}
}

class raton{
    
    static idRaton=0;
    
    constructor(){
    
    this._CantidadRaton+=idRaton;
    
    }
    
    toString(){
    return `marca: ${DispositivoEntrada._marca}, tipo de entrada: ${DispositivoEntrada._tipoEntrada}`;
    }
  
    }
    
    
    
    class teclado{
    
        static idTeclado=0;
    
    constructor(){
        catidadTeclado+=idTeclado;
        
    }
    
    toString(){
        return `Marca: ${DispositivoEntrada._marca} tipo de entrada: ${DispositivoEntrada._tipoEntrada}`;
    }
    
    }
    

