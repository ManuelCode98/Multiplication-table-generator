import { questionBye } from "..";
import { rl } from "../services/readline";
import { regularExpression } from "../services/regular-expression";
import { questionOne } from "./question-one";



const questionFour = ()=>{ 

    rl.question( questionBye, ( answer )=>{

        if( answer !== 'y' && answer !== 'q' ) { 

            console.log(`El valor "${answer}" es invalido solo introducir numeros!!! `);
            questionFour(); 
            return 
        
        }


        if( answer === 'q' ){
            
            console.log(`
                Gracias por tu participacion -.*`);
            return
        }
        
        if( answer === 'y' ){
            questionOne()
        }

        rl.close();
    })

};


export {
    questionFour
}