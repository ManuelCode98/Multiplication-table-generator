import { questionOne } from './inputs/question-one';


const questionBase:string =`Que tabla quieres conocer: `;
const questionMaxTables:string = `
Cual es el numero de tablas que quieres ver, si solo quieres ver una tabla escribe el valor de `;
const questionMultiplyUpTo:string = `
Multiplicar hasta el : `;
const questionBye:string = `
Presiona "y" si quieres mas tablas o "Q" para salir `;

questionOne();


export {
    questionBase,
    questionMaxTables,
    questionMultiplyUpTo,
    questionBye
}
