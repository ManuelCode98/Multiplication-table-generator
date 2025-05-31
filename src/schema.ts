


const schema = ( base:number, multiplicador:number, result:number )=>{ 

let header:string = `
===================
    Tabla del ${base}    
===================
`;

let currentTable = `     ${base} x ${multiplicador} = ${result}\n`;

    return {header, currentTable}

};

export {
    schema    
}