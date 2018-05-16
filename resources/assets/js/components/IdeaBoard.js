import React, {Component} from 'react';
import BoardList from './BoardList';
import ToggleBoardCreate from './ToggleBoardCreate';

export default class IdeaBoard extends Component {

    constructor() {
        super();
        this.state = {
            formIsOpen: false
        };
    }

    componentDidUpdate(){
        console.log('IdeaBoard' + this.props.boards);
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title text-info text-center">Ideas Board</h1>
                </div>

                <div className="card-body">
                    <div className="container">
                        <BoardList boards={this.props.boards} editBoard={this.props.editBoard} deleteBoard={this.props.deleteBoard}/>
                    </div>
                </div>

                <div className="card-footer">
                    <ToggleBoardCreate isOpen={this.state.formIsOpen} onClickAdd={this.handleAddBoard.bind(this)} onSubmit={this.props.onSubmit}/>
                </div>
            </div>
        );
    }

    handleAddBoard() {
        this.setState({
            formIsOpen: !this.state.formIsOpen
        });
    }
}
