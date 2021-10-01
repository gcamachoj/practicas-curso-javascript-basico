var articulos = [
    {nombre: "Bici", costo: 300000},
    {nombre: "Tv", costo: 1000000},
    {nombre: "libro", costo: 50000},
    {nombre: "Celular", costo: 800000},
    {nombre: "Laptyop", costo: 2000000},
    {nombre: "teclado", costo: 45000},
    {nombre: "Audifonos", costo: 3000}
                ];

var articulosFiltrados = articulos.filter(function(articulo)
{
    return articulo.costo<=200000
});

var nombresArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

