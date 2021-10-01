// definir un objeto (miAuto):
miAuto={
    modelo: "Corola",
    color: "Azul",
    annio: 2020,
    puertas: 4,
}
// acceder a una propiedad (modelo), del objeto (miAuto):
miAuto.modelo

// para crear una propiedad del objeto que tenga una función: 
miAuto={
    modelo: "Corola",
    color: "Azul",
    annio: 2020,
    puertas: 4,
    DefinirAuto:function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
                            }
        }
// acceder a la propuedad DefinirAuto (funcion): Se accede igual que a una propiedad, pero como 
//es una función se incluyen los paréntesis al final. 
miAuto.DefinirAuto()
