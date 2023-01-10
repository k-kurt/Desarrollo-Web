class Producto{
    static contProdcuto=0;
   
   
    constructor(nombre, precio){
        this._idProducto=++Producto.contProdcuto;
        this._nombre=nombre;
        this._precio=precio;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }

    get idProducto(){
        return this._idProducto;
    }

    get precio(){
        return this._precio;
    }


    set precio(precio){
        this._precio=precio;
    }

    toString(){
        return `this.idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio} `; 
    }

}

let n1= new Producto("pantalon",14000);
let n2=new Producto("Remera",6000);

console.log(n1.toString());
console.log(n2.toString());