import path from "path";
import fs from 'fs';



const findDesktop = ()=>{ 

    const window:boolean = process.platform === 'win32';
    let pathSaveFileDesktop:any = '';

    if( !window ){
        console.log('No hay soporte para este sistema operativo')
        return;   
    } 

    const processEnv:any = process.env.USERPROFILE || process.env.HOME || '';
    const existsOneDrive:boolean = fs.readdirSync( processEnv ).includes('OneDrive');
    const existsDesktop = fs.readdirSync( processEnv ).includes('escritorio');

    if( existsOneDrive ){

        const containsOneDrive:string = `${processEnv}/OneDrive/`;
        pathSaveFileDesktop = path.join( containsOneDrive || '', 'escritorio' )
        
    }
    if( existsDesktop ){

        const containsDesktop:string = `${processEnv}`;
        pathSaveFileDesktop = path.join( containsDesktop || '', 'escritorio' )
        
    }

    return pathSaveFileDesktop;

};

export {
    findDesktop
}