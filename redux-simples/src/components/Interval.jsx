import './Interval.css';
import Card from "./Card";
import React from "react";

import { connect } from "react-redux";
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros';


const Interval = props => {
    const { min, max, alterarMinimo, alterarMaximo } = props;

    return (
        <Card title='Intervalo de Números' red >
            <div className="interval">
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={min}
                        onChange={e => alterarMinimo(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={max}
                        onChange={e => alterarMaximo(+e.target.value)} />
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

function mapDispatchToProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinimo(novoNumero);
            dispatch(action);
        },
        alterarMaximo(novoNumero) {
            const action = alterarNumeroMaximo(novoNumero);
            dispatch(action);
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Interval);