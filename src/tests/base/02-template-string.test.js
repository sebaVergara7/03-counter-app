import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.test.js', () => { 
    test('getSaludo debe de retornar Hola Sebastián', () => { 
        const nombre = 'Sebastián';
        const saludo = getSaludo( nombre );
        console.log( saludo );

        expect( saludo ).toBe( `Hola ${nombre}` );
    });

    test('getSaludo debe de retornar Hola Gonzalo si no hay argumento nombre', () => { 
        const nombre = 'Gonzalo';
        const saludo = getSaludo();
        console.log( saludo );

        expect( saludo ).toBe( `Hola ${nombre}` );
    });
});