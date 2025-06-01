import fs from 'fs';

const folderName = 'Tablas de multiplicar';

const saveTablesToTheFileSystem = ( base:number, table:string )=>{  
   
     if(!fs.existsSync(folderName) ){

        fs.mkdir(folderName, { recursive: true }, (err)=>{ if(err) throw err })
        console.log(`
            Se creo la carpeta "${ folderName }"
            `);

    }if ( fs.existsSync(folderName) ){
        fs.appendFileSync(`./${folderName}/tabla del ${base}.md`, table )
        
    }

};

export {
    saveTablesToTheFileSystem
    
}