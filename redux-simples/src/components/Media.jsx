import React from "react";
import Card from "./Card";

import { connect } from 'react-redux';

const Media = props => {
    const { min, max } = props;

    return (
        <Card title='Média dos Números' green >
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(min + max) / 2}</strong>
                </span>

            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    const { min, max } = state.numeros;
    return {
        min,
        max
    }
}

export default connect(mapStateToProps)(Media);