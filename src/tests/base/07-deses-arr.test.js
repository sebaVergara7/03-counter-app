import { retornaArreglo } from "../../base/07-deses-arr";


describe('Pruebas en 07-deses-arr.test.js', () => { 
    test('debe de retornar un string y un número', () => { 
        const arr = retornaArreglo(); // ['ABC', 123];
        const [ letras, numeros ] = retornaArreglo(); // ['ABC', 123];

        // console.log(typeof letras);

        expect( arr ).toEqual( ['ABC', 123] );
        expect( letras ).toBe( 'ABC' );
        expect( typeof letras ).toBe( 'string' );
        expect( numeros ).toBe( 123 );
        expect( typeof numeros ).toBe( 'number' );
    });
});