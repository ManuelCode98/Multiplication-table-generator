import { rl } from "../services/readline";
import { regularExpression } from "../services/regular-expression";
import { functionQuestionMultiplyUpTo } from "./question-multiply-up-to";

const questionMaxTables:string = `
Cual es el numero de tablas que quieres ver, si solo quieres ver una tabla escribe el "1" : `;

const functionQuestionMaxTables = ( base:string )=>{ 

let maxTables:string = '0';

    rl.question( questionMaxTables, (answer)=>{

        if( !regularExpression().test( answer ) ){

            console.clear();
            console.log(`El valor "${answer}" es invalido solo introducir numeros!!! `);
            functionQuestionMaxTables( base );
            return
        } 
        
        maxTables = answer
        
        if( typeof maxTables === 'string' && maxTables === '0' ){

            console.clear();
            console.log('Datos invalidos, intenta de nuevo...')
            functionQuestionMaxTables( base )
            return;
        }

        console.clear();
        functionQuestionMultiplyUpTo( base, maxTables );

    })

};


export {
    functionQuestionMaxTables
}