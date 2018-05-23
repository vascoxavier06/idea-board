import React, {Component} from 'react';
import Board from './Board';

export default class BoardList extends Component {

    render(){
        let myBoards = this.props.boards.map(item => <Board board={item} key={item.id} editBoard={this.props.editBoard} deleteBoard={this.props.deleteBoard} showIdeas={this.props.showIdeas}/>);
        return (
            <div className="container-fluid">
                {myBoards}
            </div>
        );
    }
}
