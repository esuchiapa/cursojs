 class animal{
     constructor(especie, edad, color){
        this.especie=especie;
        this.edad=edad;
        this.color=color;
        this.info = `Especie: ${this.especie} <br> Edad: ${this.edad} <br> Color: ${this.color} <br> ------------------ <br>`;
     }
     //método
     verInfo(){
        document.write(this.info)
     }
 }

 //Herencia
 
 class perro extends animal{
    constructor(especie,edad,color, raza){
        super(especie,edad,color);
        this.raza=raza;
    }

    //Setter
    set setRaza(newRaza){
        this.raza=newRaza;
    }

    //Getter
    get getRaza(){
        return this.raza;
    }
 }

 let firus= new perro ("Perro",10,"Gris","Salchicha");
 let Kira= new perro ("Perro",5,"Negro","Schnauzer")
 let minino= new animal ("Gato", 2,"Negro");

 firus.setRaza="Doberman";

console.log (firus)

document.write(firus.getRaza);