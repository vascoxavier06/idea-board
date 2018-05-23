import React,{Component} from 'react';
import IdeaBoard from './IdeaBoard';
import TaskBoard from './TaskBoard';
import Axios from 'axios';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            boards: [],
            ideas: [],
            boardId: 0
        };
    }

    componentDidMount () {

        Axios.get('http://localhost:8000/boards').then(response => this.setState({
            boards: response.data.data
        }));
    }

    componentDidUpdate() {
        Axios.get('http://localhost:8000/boards').then(response => this.setState({
            boards: response.data.data
        }));
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <IdeaBoard
                        boards={this.state.boards}
                        onSubmit={this.addBoard.bind(this)}
                        editBoard={this.editBoard.bind(this)}
                        deleteBoard={this.deleteBoard.bind(this)}
                        showIdeas={this.showIdeas.bind(this)}
                    />
                </div>
                <div className="col-md-8">
                    <TaskBoard boardId={this.state.boardId} ideas={this.state.ideas}/>
                </div>
            </div>
        )
    }

    addBoard(name) {
        Axios.post('http://localhost:8000/boards',{
            name : name,
        }).then(function (response) {
                console.log('Enviada com sucesso');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    editBoard(name,id) {
        Axios.put('http://localhost:8000/boards/'+id, {
            name
        }).then(function (response) {
                console.log('Enviada com sucesso');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    deleteBoard(id) {
        Axios.delete('http://localhost:8000/boards/'+id).then(function (response) {
                console.log('Enviada com sucesso');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    async showIdeas(id) {
        let response = await Axios.get(`http://localhost:8000/board/${id}/ideas`);
        let data = response.data;
        this.setState({
            ideas: data,
            boardId: id
        });
    }
}
