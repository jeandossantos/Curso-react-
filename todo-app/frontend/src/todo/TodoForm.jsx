import React, { Component } from 'react'
import Grid from '../template/Grid'
import IconButton from '../template/IconButton'

import { changeDescription, search, add, clear } from '../main/todoActions';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.keyHandler = this.keyHandler.bind(this);

    }

    componentDidMount() {
        this.props.search();
    }

    keyHandler(e) {
        const { add, search, description, clear } = this.props;

        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear();
        }
    }

    render() {
        const { add, search, description, changeDescription, clear } = this.props;
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa' onChange={changeDescription}
                        onKeyUp={this.keyHandler} value={description}></input>
                </Grid>

                <Grid cols='12 3 2'>
                    {/* Mudamos o nome da propriedade style para btnStyle, pois o Lint reclamava e essa é a melhor maneira de contornar esse problema */}
                    <IconButton btnStyle='primary' icon='plus'
                        onClick={e => add(description)}></IconButton>
                    <IconButton btnStyle='info' icon='search'
                        onClick={search} />
                    <IconButton btnStyle='default' icon='close'
                        onClick={clear} />
                </Grid>
            </div>
        )

    }
}

function mapStateToProps(state) {
    const { description } = state.todo;
    return {
        description
    }
}

function mapDispatchToProps(dispath) {
    return bindActionCreators({ changeDescription, search, add, clear }, dispath);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);