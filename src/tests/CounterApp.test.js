import React from 'react';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Pruebas en <CounterApp />', () => {
    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {
        wrapper = shallow( <CounterApp /> );
    });

    test('debe de mostrar <CounterApp /> correctamente', () => {


        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar el valor por defecto de 100', () => {

        const value = 100;
        const wrapper = shallow( 
            <CounterApp 
                value={ value }
            /> 
        );

        const counterText = wrapper.find('h2').text().trim();
        // console.log(textoParrafo);

        expect( counterText ).toBe( `${value}` );

    });

    test('debe de incrementar con el botón "+1"', () => {

        const btn1 = wrapper.find('button').at(0);
        btn1.simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe( `11` );

    });

    test('debe de decrementar con el botón "-1"', () => {

        const btn3 = wrapper.find('button').at(2);
        btn3.simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe( `9` );

    });

    test('debe de resetear con el botón "reset', () => {
        
        const value = 100;
        const wrapper = shallow( 
            <CounterApp 
                value={ value }
            /> 
        );

        const btn1 = wrapper.find('button').at(0);
        btn1.simulate('click');

        const btn2 = wrapper.find('button').at(1);
        btn2.simulate('click');

        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe( `${value}` );

    });

});