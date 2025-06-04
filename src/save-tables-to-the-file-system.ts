import path from "path";
import fs from 'fs';
import { homedir } from 'os';
import { findDesktop } from './find-desktop';


const saveTablesToTheFileSystem = ( folderName:string, base:number, table:string )=>{  

    // Funcion que devuelve el path del escritorio
    const pathFound = findDesktop();
    const pathFolderName = path.join( `${pathFound}`, folderName )

    if ( pathFolderName ){

        fs.mkdirSync( pathFolderName, { recursive: true } )
        const pathEnd = path.join( pathFolderName, `${base}.md` )
        fs.writeFileSync( pathEnd, table )

        console.clear();
        console.log( `Proyecto guardado en el escrito con el nombre de \n"${ folderName }"` );
    }

};

export {
    saveTablesToTheFileSystem
    
}