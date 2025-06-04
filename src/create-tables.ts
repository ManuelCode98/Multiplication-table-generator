import { saveTablesToTheFileSystem } from "./save-tables-to-the-file-system";
import { schema } from "./schema";


let contentTable:string = ``;

const createTables = ( folderName:string, base:number, maxTables:number, multiplyUpTo:number )=>{ 

    const tables = base + ( maxTables - 1 );

    if( base >= 1 && maxTables <= 100 && multiplyUpTo <= 20 ){

        while ( base <= tables ) {

        for (let i = 1; i <= multiplyUpTo; i++) {
        
            const result = base * i;

            const { header, currentTable } = schema( base, i, result )
            contentTable += currentTable;

            if( i === multiplyUpTo ){

                const table:string = header+contentTable;
                // Muestra las tablas en consola
                // console.log( base, table )
                saveTablesToTheFileSystem( folderName, base, table)
                base = base + 1
                i = 1
                contentTable = ``;
            
                break;
            } 
            
        }    

    }

    }

};

  

export {
    createTables
}