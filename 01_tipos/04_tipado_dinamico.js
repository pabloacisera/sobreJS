/**en el tipado estatico no se puede cambiar el tipo de dato que se asigno a una variable
 * en el dinmaico si(java es estatico, javascript es dinamico).
 */

console.log("FUNCION typeof");
let varianteRandom= "pablo";
console.log("variante original: "+ varianteRandom);
console.log("el tipo de dato es: " + typeof varianteRandom);
varianteRandom= 50;
console.log("variante con tipo de dato modificado: " + varianteRandom);
console.log("el tipo de dato es: " + typeof varianteRandom);
varianteRandom= false;
console.log("nueva modificacion: " + varianteRandom);
console.log("el tipo de dato es: " + typeof varianteRandom);
varianteRandom= null;
console.log("Aqui sucede algo, el tipo de dato es: " + typeof varianteRandom);/**porque sucede esto?:  */



