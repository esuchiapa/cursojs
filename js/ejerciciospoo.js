class Vehiculo{
    constructor(marca,modelo, color){
        this.marca=marca;
        this.modelo=modelo;
        this.color=color;
    }
    verInfo(){
        document.write(`Marca: ${this.marca} <br> Modelo: ${this.modelo}<br> Color: ${this.color}<br>`);
    }
}

class Automovil extends Vehiculo{
    constructor(marca,modelo,color,tipo, cilindros){
        super(marca,modelo,color);
        this.tipo=tipo;
        this.cilindros=cilindros;
    }
    verInfoAuto(){
        this.verInfo();
        document.write (`Tipo: ${this.tipo} <br> Cilindros: ${this.cilindros} <br>`);
    }
}

const auto1=new Automovil("Hyundai","Creta","Rojo","SUV",4);

auto1.verInfoAuto();
