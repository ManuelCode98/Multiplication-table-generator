import { rl } from "../services/readline";
import { regularExpression } from "../services/regular-expression";
import { questionMaxTables } from '../index' 
import { questionThree } from "./question-three";


const questionTwo = ( base:string )=>{ 

let maxTables:string = '0';

    rl.question( questionMaxTables+`"1" `, (answer)=>{

        if( !regularExpression().test( answer ) ){

            console.log(`El valor "${answer}" es invalido solo introducir numeros!!! `);
            questionTwo( base );
            return
        } 
        
        maxTables = answer
        
        if( typeof maxTables === 'string' && maxTables === '0' ){
            questionTwo( base )
            return;
        }

        questionThree( base, maxTables );

    })

};


export {
    questionTwo
}