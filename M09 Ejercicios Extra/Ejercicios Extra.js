/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   return Object.entries(objeto).map(([value, key]) => [value, key]);
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   return string.split("").reduce((acc, char) => {
      if (char in acc) {
         acc[char]++;
      } else {
         acc[char] = 1;
      }
      return acc;
   }, {});
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayusculas = "";
   var minusculas = "";
   for (var i = 0; i <= string.length; i++) {
      if (string.charAt(i).toUpperCase() === string.charAt(i)) {
         mayusculas = mayusculas + string.charAt(i);
      }else {
         minusculas = minusculas + string.charAt(i);
      }
      }
   return mayusculas + minusculas;
   }

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   //frase = "The Henry Challenge is close!";
   var separarFrase = frase.split(' ');
   var unirFrase = ''
   for (i = 0; i < separarFrase.length; i++) {
      unirFrase = unirFrase + separarFrase[i].split('').reverse().join('') + ' ';
   }
   // console.log(unirFrase);
   return unirFrase.slice(0, -1);
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   if (numero == numero.toString().split('').reverse().join('')) {
      return "Es capicua";
      } else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.replace(/a|b|c/g, "");

//    /a|b|c/g: Esta es la expresión regular (regex) que se utiliza como patrón de búsqueda en el método replace(). Una expresión regular es una secuencia de caracteres que define un patrón de búsqueda. En este caso, se utiliza /a|b|c/g.
// /: El primer y último carácter de la expresión regular son barras diagonales, que se utilizan para encerrar el patrón. Sirven como delimitadores para indicar que estamos utilizando una expresión regular.
// a|b|c: Dentro de las barras diagonales, se encuentra la secuencia de caracteres "a|b|c". Esto significa que se buscará cualquier ocurrencia de las letras "a", "b" o "c" en la cadena de texto.
// g: El modificador "g" (global) se coloca después de las barras diagonales para indicar que se deben reemplazar todas las ocurrencias encontradas, en lugar de solo la primera coincidencia.
// "": Este es el texto con el que se reemplazarán las coincidencias encontradas en la cadena de texto original. En este caso, se utiliza una cadena de texto vacía (""), lo que significa que se eliminarán todas las ocurrencias de las letras "a", "b" y "c".
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return arrayOfStrings.sort((a, b) => a.length - b.length); 
   
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
