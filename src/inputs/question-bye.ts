import { rl } from "../services/readline";
import { regularExpression } from "../services/regular-expression";
import { functionQuestionBase } from "./question-base";


const questionBye:string = `
Presiona "y" si quieres mas tablas o "Q" para salir `;

const functionQuestionBye = ()=>{ 

    rl.question( questionBye, ( answer )=>{

        if( answer !== 'y' && answer !== 'q' ) { 

            console.clear();
            console.log(`El valor "${answer}" es invalido, introduce solo "Q" ó "Y" !!! `);
            functionQuestionBye(); 
            return 
        
        }


        if( answer === 'q' ){
            
            console.clear();
            console.log(`
            Gracias por tu participacion -.*`);
                        
            return
        }
        
        if( answer === 'y' ){
            console.clear();
            functionQuestionBase()

            return
        }

        rl.close();
    })

};


export {
    functionQuestionBye
}