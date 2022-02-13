import React from 'react'
import IconButton from '../template/IconButton'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { markAsDone, markAsPending, remove } from '../main/todoActions';

const TodoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton btnStyle='success' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)} />
                    <IconButton btnStyle='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.markAsPending(todo)} />
                    <IconButton btnStyle='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.remove(todo)} />
                </td>
            </tr>
        ))
    }
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

function mapStateToProps(state) {
    const { list } = state.todo;
    return {
        list
    }
}

function mapDispatchToprops(dispatch) {
    return bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToprops)(TodoList);