import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones.test.js', () => { 
    test('getUser debe de retornar un objeto', () => { 
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        console.log( user );

        expect( user ).toEqual( userTest );
    });

    test('1° getUsuarioActivo debe de retornar un objeto', () => { 
        const userTest = {
            uid: 'ABC567',
            username: 'El_Papi1502'
        };

        const user = getUsuarioActivo(userTest.username);

        console.log( user );

        expect( user ).toEqual( userTest );
    });

    test('2° getUsuarioActivo debe de retornar un objeto', () => { 
        const nombre = 'Sebastián';

        const user = getUsuarioActivo( nombre );

        console.log( user );

        expect( user ).toEqual({
            uid: 'ABC567',
            username: nombre,
        });
    });
});