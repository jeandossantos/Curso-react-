import { NUM_MIM_ALTERADO, NUM_MAX_ALTERADO } from '../constantes';

export function alterarNumeroMinimo(novoNumero) {
    return {
        type: NUM_MIM_ALTERADO,
        payload: novoNumero
    }
}

export function alterarNumeroMaximo(novoNumero) {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}