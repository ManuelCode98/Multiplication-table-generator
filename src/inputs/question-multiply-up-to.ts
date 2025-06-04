import { createTables } from "../create-tables";
import { rl } from "../services/readline";
import { regularExpression } from "../services/regular-expression";
import { functionCreateFolderName } from "./create-folder-name";
import { functionQuestionBye } from "./question-bye";


const questionMultiplyUpTo:string = `
Multiplicar hasta el : `;

const functionQuestionMultiplyUpTo = (( base:string, maxTables:string )=>{

    let multiplyUpTo:string = '0';

    rl.question( questionMultiplyUpTo, (answer)=>{
            
        if(!regularExpression().test( answer ) ){ 

            console.clear();
            console.log(`El valor "${answer}" es invalido solo introducir numeros!!! `);
            functionQuestionMultiplyUpTo(base, maxTables); 
            return 
        }
        multiplyUpTo = answer 

        if( typeof multiplyUpTo === 'string' && multiplyUpTo === '0' ){

            console.clear();
            console.log('Datos invalidos, intenta de nuevo...')
            functionQuestionMultiplyUpTo( base, maxTables );
            return
        }
        
        console.clear();
        functionCreateFolderName( base, maxTables, multiplyUpTo )

    })
})

         
        
export {
    functionQuestionMultiplyUpTo
}