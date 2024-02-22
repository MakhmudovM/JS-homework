//error tipes : 
// import , export :
//try ... catch ... finally

/*
try {
    
} catch (error) {
    console.log("error404: " + error.message);
} finally {
    console.log("HELLO");
}
*/

/*
try {
    
} catch (error) {
    console.log("error404" + error.message);
} finally {
    console.log("error404");
}
*/
/*
try {
    throw new Error("my bad");
} catch (error) {
    console.log("error404: " + error.message);
} finally {
    console.log("");
}
*/

//ошибка в цикле 

/*
try {
    for (let i = 0; i < 5; i++) {
        if (i === 3) {
            throw new Error("Ошибка в цикле");
        }
        console.log(i);
    }
} catch (error) {
    console.log("Ошибка: " + error.message);
} finally {
    console.log("Выполнение блока finally");
}
*/


import { add, subtract } from './math';

console.log(add(5, 3)); 
console.log(subtract(5, 3)); 




