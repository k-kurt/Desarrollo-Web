class DispositivoEntrada {

    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;

    }

    get tipoEntrada() {
        return this.tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this.marca;
    }
    set marca(marca) {
        this._marca = marca;
    }

    toString() {
        return `tipo de entrada:  ${this._tipoEntrada}, marca: ${this._marca} `;

    }
}

class raton extends DispositivoEntrada {

    static cantRaton = 0;

    constructor(tipoEntrada,marca) {
        super(tipoEntrada,marca);
        this._idRaton=++raton.cantRaton;
    }
    
    get idRaton(){
    return this._idRaton;}

    toString() {
        return `Producto: ${this._idRaton}, entrada: ${this._tipoEntrada}, marca: ${this._marca}`;
    }

}


let n1=new raton("usb","samsung");
console.log(n1.toString());
let n2=new raton("ficha", "dell");
console.log(n2.toString());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class teclado extends DispositivoEntrada{

    static cantTeclado = 0;

    constructor(tipoEntrada, marca) {
    super(tipoEntrada,marca);
        this._idTeclado =++teclado.cantTeclado;

    }

        get idRaton(){
        return this._idTeclado;}


    toString() {
        return `teclado: ${this._idTeclado} Marca: ${this._marca} tipo de entrada: ${this._tipoEntrada}`;
    }

}

let t1=new teclado("usb", "dell");
let t2=new teclado("ficha", "logitech");
console.log(t1.toString());
console.log(t2.toString());


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////* */



class monitor {
    static idMonitor = 0;

    constructor(marca, tamanio) {

        cantidadMonitor += monitor.idMonitor;
        this._marca = marca;
        this._tamanio = tamanio;
    }


    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }

    get tamanio() {
        return this._marca;
    }
    set tamanio(tamanio) {
        this._tamanio = tamanio;
    }

    toString() {
        return `marca: ${this._marca}, tamanio de pantalla: ${this._tamanio}`;
    }
}

class computadora {

    static idComputadora = 0;

    constructor(nombre) {

        this._cantidadComputadoras += computadora.idComputadora;
        this._nombre = nombre;
        this._monitor = computadora();
        this._raton = raton();
        this._teclado = teclado();

    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get monitor() {
        return this._monitor = monitor();
    }
    set monitor(monitor) {
        this._monitor = monitor();
    }

    get raton() {
        return this._raton = raton();
    }
    set raton(raton) {
        this._raton = raton();
    }

    get teclado() {
        return this._teclado = teclado();
    }
    set teclado(teclado) {
        this._teclado = teclado();
    }

    toString() {
        return `Nombre de PC: ${this._nombre}, Monitor: ${monitor()}, Raton: ${raton()}, Teclado: ${teclado()}`;
    }
}

class orden{
        static idOrden=0;
    constructor(){
        this._cantOrden+=orden.idOrden;
                
    }



}