var estudiantes = ["Jose", "Guillermo", "Juan David"];

function saludarEstudiantes(estudiantes){
    console.log(`Hola, ${estudiantes}`)
}

for(var i = 0; i < estudiantes.length; i++){
saludarEstudiantes(estudiantes[i]);
}

for(estudiante of estudiantes){
    saludarEstudiantes(estudiante)
}