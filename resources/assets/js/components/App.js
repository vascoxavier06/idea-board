import React,{Component} from 'react';
import IdeaBoard from './IdeaBoard';
import TaskBoard from './TaskBoard';
import Axios from 'axios';

export default class App extends Component {

    constructor() {
        super();
        this.state = {
            boards: [],
            ideas: []
        };

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
                    />
                </div>
                <div className="col-md-8">
                    <TaskBoard />
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
        Axios.get('http://localhost:8000/boards').then(response => this.setState({
            boards: response.data.data
        }));
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
        Axios.get('http://localhost:8000/boards').then(response => this.setState({
            boards: response.data.data
        }));
    }

    deleteBoard(id) {
        Axios.delete('http://localhost:8000/boards/'+id).then(function (response) {
                console.log('Enviada com sucesso');
            })
            .catch(function (error) {
                console.log(error);
            });
        Axios.get('http://localhost:8000/boards').then(response => this.setState({
            boards: response.data.data
        }));
    }
}
