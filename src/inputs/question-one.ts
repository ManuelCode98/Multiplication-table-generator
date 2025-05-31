
import { questionBase } from "..";
import { rl } from "../services/readline";
import { regularExpression } from "../services/regular-expression";
import { questionTwo } from "./question-two";




const questionOne = ( )=>{ 

    let base = '0';

    rl.question( questionBase, (answer)=>{

        if( !regularExpression().test( answer ) ){ 
            
            console.log(`El valor "${answer}" es invalido solo introducir numeros!!! `);
            questionOne();  
            return
        }
        
        base = answer

        if( typeof base === 'string' && base === '0' ){
            questionOne( )
            return;
        }
        questionTwo( base );
    })

};


export {
    questionOne
}