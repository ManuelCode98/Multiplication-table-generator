import { rl } from "../services/readline";
import { regularExpression } from "../services/regular-expression";
import { functionQuestionMaxTables } from "./question-max-tables";





const questionBase:string =`Que tabla quieres conocer: `;

const functionQuestionBase = ( )=>{ 

    let base = '0';

    rl.question( questionBase, (answer)=>{

        if( !regularExpression().test( answer ) ){ 
            
            console.clear();
            console.log(`El valor "${answer}" es invalido solo introducir numeros!!! `);
            functionQuestionBase();  
            return
        }
        
        base = answer

        if( typeof base === 'string' && base === '0' ){
            console.clear();
            console.log('Datos invalidos, intenta de nuevo...')
            functionQuestionBase( )
            return;
        }
        functionQuestionMaxTables( base );
    })

};


export {
    functionQuestionBase
}