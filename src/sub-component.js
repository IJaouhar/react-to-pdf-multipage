import React from 'react';
import './App.css';

const asd = require('./1535610951_523915_1535611384_noticia_grande.jpg');

function Subcomponent() {
    return (
        <div id="tonto" className="tonto">
                <h1>Example page</h1>
                <p>
                    aasdasdasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    asdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    aasdasdasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    asdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    aasdasdasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    asdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    </p>
                <div className="imgtry">
                    <img src={asd} />
                    <img src={asd} />
                </div>
                <h1>Example page2</h1>
                <p>
                    aasdasdasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    asdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    aasdasdasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    asdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    aasdasdasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    asdssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    </p>
        </div>
    );
}

export default Subcomponent;
