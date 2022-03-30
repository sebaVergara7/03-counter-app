// FC
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ( { saludo, subtitulo } ) => {

    // const saludo = 'Hola Mundo';

    // console.log(props);

    // const saludo = {
    //     nombre : 'Sebastián',
    //     edad   : 27,
    // };

    return (
        <>
            <h1>{ saludo }!!!</h1>
            {/* <pre> { JSON.stringify( saludo, null, 3) } </pre> */}
            <p>{ subtitulo }</p>
        </>
    );
};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtítulo",
};

export default PrimeraApp;