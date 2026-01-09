//la idea es que me llegue un array con subarrays anidados y devolver un array unidimensional

const steamrollArray = (nestedArr) => {
    const result = []

    //ciclo para recorrer el array
    for (const element of nestedArr){

        //si el elemento es un array, clavo recursion
        if (Array.isArray(element)){

            //como funciona esto...
            //llamo a la funcion de nuevo con el elemento (que es un array) y el resultado va a ser un array unidimensional (seria el return result que esta abajo de todo) y lo guardo en una variable
            const notNestedArr = steamrollArray(element)
            // notNestedArr es un ARRAY (unidimensional) entonces para pushear los elementos de este array y no el array entero uso el spread(...)
            result.push(...notNestedArr)

        //si no es un array, lo meto de una al result
        } else {
            result.push(element)
        }
    }
    return result
}


console.log(steamrollArray([1, [], [3, [[4]]]]))