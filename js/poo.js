class persona{
    constructor(nombre, edad, estatura){
        this.nombre=nombre;
        this.edad=edad;
        this.estatura=estatura;
        this.info=`Nombre: ${this.nombre} <br> Edad: ${this.edad} <br> Estatura: ${this.estatura}`;
    }

    verInfo(){
        document.write(this.info);
    }
}

let persona1 = new persona("Juan",24,174);
let persona2= new persona("Jazmín",29,170);

persona2.verInfo();