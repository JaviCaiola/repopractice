let perro = {
    nombre: "Scott",
    edad: 5,
    macho: true,
    ladrar: function (){
        return(this.nombre + " puede ladrar.");
    } 

}
console.log(perro.ladrar());
