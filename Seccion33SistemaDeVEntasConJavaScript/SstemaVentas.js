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
        return `Producto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio} `;
    }

}




class Orden {

    static contOrden = 0;

    static get MAX_ORDEN() {
        return 5;
    }
    constructor() {

        this._IdOrden = ++Orden.contOrden;
        this._CantiProductos = [];
       // this._ContadorProductosAgregados = 0;


    }

    get IdOrden() {
        return this._IdOrden;
    }

    agregarProducto(Producto) {

        if (this._CantiProductos.length < Orden.MAX_ORDEN) {

            this._CantiProductos.push(Producto);
            
            //this._CantiProductos[this._ContadorProductosAgregados++]=Producto;    //OPCIONAL
            

                // for (var i=0;i<this._CantiProductos.length;i++){
                
                // this._CantiProductos=Producto[i];
                
                // }

        } else {
            console.log("no se pueden agregar mas producto");
        }

    }
    
    
    CalcularVenta(){
    let Totalventas=0;
    for(let producto of this._CantiProductos){
    Totalventas+= producto.precio;
    }
    return Totalventas;
    }
    
    MostrarOrden(){
    let ProductosOrden='';
    for(let producto of this._CantiProductos){
    ProductosOrden+=`\n{`+ producto.toString()+ '}';
    }
    console.log(`Orden: ${this.IdOrden} Total: $${this.CalcularVenta()}, Productos: ${ProductosOrden}`);
    
    }
    
    

}

let n1 = new Producto("pantalon", 14000);
let n2 = new Producto("Remera", 6000);
console.log(n1);



let orden1 = new Orden();
orden1.agregarProducto(n1);
orden1.agregarProducto(n2);

orden1.MostrarOrden();

let orden2=new Orden();
let n3=new Producto("cinturon", 2500);
let n4=new Producto("campera",16000);
orden2.agregarProducto(n3);
orden2.agregarProducto(n4);
orden2.agregarProducto(n2);
orden2.agregarProducto(n1);
orden2.agregarProducto(n1);
orden2.MostrarOrden();