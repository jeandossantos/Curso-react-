import axios from 'axios';

const URL = 'http://localhost:3001/api/todos';

export function changeDescription(e) {
    return {
        type: 'DESCRIPTION_CHANGED',
        payload: e.target.value
    }
}

export function search() {
    return function (dispatch, getState) {
        const description = getState().todo.description;
        const search = description ? `&description__regex=/${description}/` : ''

        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }))

    }
}

export function add(description) {
    return function (dispatch) {
        axios.post(URL, { description })
            .then(resp => dispatch(clear()))
            .then(resp => dispatch(search()))
    }
}

export function markAsDone(todo) {
    return function (dispatch) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

export function markAsPending(todo) {
    return function (dispatch) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}

export function remove(todo) {
    return function (dispatch) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}

export function clear() {
    return [
        { type: 'TODO_CLEAR' },
        search()
    ]
}