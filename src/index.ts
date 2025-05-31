import fs from 'fs'

let maxTables:number = 10;
let base:number = 1;
let header:string = `
===================
    Tabla del ${base}    
===================
`;
let contentTable:string = ``;


while ( base <= maxTables ) {
    
    for (let i = 1; i <= 10; i++) {
    
        const result = base * i;
header = `
===================
    Tabla del ${base}      
===================
`;
        contentTable += `     ${base} x ${i} = ${result}\n`;

        if( i === 10 ){
        
            // console.log(header+contentTable);

    if(!fs.existsSync('ouputs') ){

        fs.mkdir('ouputs', { recursive: true }, (err)=>{ if(err) throw err })
        console.log('Se creo la carpeta ouputs');

    }if ( fs.existsSync('ouputs') ){
        console.log('Ya existe esa carpeta');
        fs.appendFileSync(`./ouputs/table del ${base}.txt`, header+contentTable )
    }

            base = base + 1
            i = 1
            contentTable = ``;
        
        break
    } 
        
    }    

}

// console.log(contentTable);




// for (let i = 1; i <= 10; i++) {
    
//     const result = base * i;

//     contentTable += `     ${base} x ${i} = ${result}\n`
    
// }




// console.log(header+contentTable);


// if(!fs.existsSync('ouputs') ){

    
//     fs.mkdir('ouputs', { recursive: true }, (err)=>{ if(err) throw err })
//     console.log('Se creo la carpeta ouputs');

// }if ( fs.existsSync('ouputs') ){
//     console.log('Ya existe esa carpeta');
//     fs.appendFileSync('./ouputs/table del 5.txt', tableMultiplication )
// }

