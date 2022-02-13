import React from "react";
import { connect } from "react-redux";
import Card from "./Card";


const Sorteio = props => {
    const { min, max } = props;

    const aleatorio = parseInt(Math.random() * (max - min)) + min;

    return (
        <Card title='Sorteio de um Número' purple >
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{aleatorio}</strong>
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

export default connect(mapStateToProps)(Sorteio);