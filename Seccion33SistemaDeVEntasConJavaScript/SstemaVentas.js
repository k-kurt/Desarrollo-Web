class Producto {
    static contProdcuto = 0;


    constructor(nombre, precio) {
        this._idProducto = ++Producto.contProdcuto;
        this._nombre = nombre;
        this._precio = precio;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get idProducto() {
        return this._idProducto;
    }

    get precio() {
        return this._precio;
    }


    set precio(precio) {
        this._precio = precio;
    }

    toString() {
        return `this.idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio} `;
    }

}

let n1 = new Producto("pantalon", 14000);
let n2 = new Producto("Remera", 6000);

console.log(n1.toString());
console.log(n2.toString());


class Orden {

    static contOrden = 0;

    static get MAX_ORDEN() {
        return 5;
    }
    constructor() {

        this._IdOrden = ++Orden.contOrden;
        this._CantiProductos = [];
        this._ContadorProductosAgregados = 0;


    }

    get IdOrden() {
        return this._IdOrden;
    }

    agregarProducto(Producto) {

        if (this._CantiProductos.length < Orden.MAX_ORDEN) {

           // this._CantiProductos.push(Producto);
            
            //this._CantiProductos[this._ContadorProductosAgregados++]=Producto;    //OPCIONAL
            

                for (var i=0;i<this._CantiProductos.length;i++){
                
                this._CantiProductos=Producto[i];
                
                }

        } else {
            console.log("no se pueden agregar mas producto");
        }

    }
    
    
    CalcularVenta(){
    let Totalventas=0;
    for(let producto of this._CantiProductos){
    Totalventas+= Producto.precio;
    }
    return Totalventas;
    }
    
    MOstrarOrden(){
    let ProductosOrden='';
    for(let producto of this._CantiProductos){
    ProductosOrden+=producto.toString()+ ' ';
    }
    console.log(`Orden: ${this.idOrden} Total: ${this.calcularTotal()}, Productos: ${ProductosOrden}`);
    
    }
    
    


}