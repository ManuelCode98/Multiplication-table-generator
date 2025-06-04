import { createTables } from "../create-tables";
import { rl } from "../services/readline"
import { functionQuestionBye } from "./question-bye";


const createFolderName = `
Escribe el nombre que le quieres poner a la carpeta donde sera guaradado el proyecto: `

const functionCreateFolderName = ( base:string, maxTables:string, multiplyUpTo:string )=>{ 

    rl.question( createFolderName, ( folderName )=>{

        if( folderName.length <= 1  ){
            
            console.clear();
            console.log('El nombre de la carpeta es obligatorio... '); 
            functionCreateFolderName( base, maxTables, multiplyUpTo );
            return 
        }
        
          if( parseInt(base) >=1 && parseInt(maxTables) >= 1 && parseInt(multiplyUpTo) >= 1 ){

            createTables( folderName, parseInt(base), parseInt(maxTables), parseInt(multiplyUpTo) );

        }
        
        // console.clear();
        functionQuestionBye();   

    })


};


export {
    functionCreateFolderName
}