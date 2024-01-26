let my_array= ['pablo', 'cisera', 32, 'soltero', true]

console.log(typeof my_array);//object

console.log(my_array.length);//5

console.log(my_array[2]);//32

my_array[5] = 32908989;

console.log(my_array);

console.log(typeof my_array[5]);

my_array[5] = my_array[5].toString();//importante: para modificar el tipo de dato
//se lo debe guardar en una variante;

console.log(typeof my_array[5]);

nuevoArrays= my_array.slice(0,2)
console.log(nuevoArrays) //[pablo, cisera]




