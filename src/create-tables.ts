import { saveTablesToTheFileSystem } from "./save-tables-to-the-file-system";
import { schema } from "./schema";


let contentTable:string = ``;

const createTables = ( base:number, maxTables:number, multiplyUpTo:number )=>{ 

    if( base >= 1 && maxTables <= 20 && multiplyUpTo <= 12 ){

        while ( base <= maxTables ) {

        for (let i = 1; i <= multiplyUpTo; i++) {
        
            const result = base * i;

            const { header, currentTable } = schema( base, i, result )
            contentTable += currentTable;

            if( i === multiplyUpTo ){

                const table:string = header+contentTable;
                saveTablesToTheFileSystem(base, table)
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