import { questionMultiplyUpTo } from "..";
import { createTables } from "../create-tables";
import { rl } from "../services/readline";
import { regularExpression } from "../services/regular-expression";
import { questionFour } from "./question-bye";



const questionThree = (( base:string, maxTables:string )=>{

    let multiplyUpTo:string = '0';

    rl.question( questionMultiplyUpTo, (answer)=>{
            
        if(!regularExpression().test( answer ) ){ 

            console.log(`El valor "${answer}" es invalido solo introducir numeros!!! `);
            questionThree(base, maxTables); 
            return 
        }
        multiplyUpTo = answer 

        if( typeof multiplyUpTo === 'string' && multiplyUpTo === '0' ){

            questionThree( base, maxTables );
            return
        }
        
        if( parseInt(base) >=1 && parseInt(maxTables) >= 1 && parseInt(multiplyUpTo) >= 1 ){

            createTables( parseInt(base), parseInt(maxTables), parseInt(multiplyUpTo) );

        }

        questionFour();

    })
})

         
        
export {
    questionThree
}