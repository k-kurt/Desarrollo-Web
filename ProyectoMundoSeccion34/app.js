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

class raton {

    static idRaton = 0;

    constructor() {

        this._CantidadRaton += raton.idRaton;

    }

    toString() {
        return `marca: ${DispositivoEntrada._marca}, tipo de entrada: ${DispositivoEntrada._tipoEntrada}`;
    }

}



class teclado {

    static idTeclado = 0;

    constructor() {
        catidadTeclado += teclado.idTeclado;

    }

    toString() {
        return `Marca: ${DispositivoEntrada._marca} tipo de entrada: ${DispositivoEntrada._tipoEntrada}`;
    }

}




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