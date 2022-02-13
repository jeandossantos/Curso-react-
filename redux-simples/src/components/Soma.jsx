import React from "react";
import { connect } from "react-redux";
import Card from "./Card";

const Soma = props => {
    const { min, max } = props;

    return (
        <Card title='Soma dos Números' blue >
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{max + min}</strong>
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

export default connect(mapStateToProps)(Soma);