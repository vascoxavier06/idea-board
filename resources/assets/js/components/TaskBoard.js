import React, {Component} from 'react';
import ListTasks from './ListTasks';
import Axios from 'axios';

export default class TaskBoard extends Component {
    render() {
        if(this.props.boardId) {
            return (
            <div className="card">
                <div className="card-header bg-primary">
                    <h1 className="card-title text-info text-center">
                        TaskBoard
                    </h1>
                </div>

                <div className="card-body">
                    <ListTasks ideas={this.props.ideas}/>
                </div>
            </div>
        );
        }else {
            return (
            <div className="card">
                <div className="card-header bg-primary">
                    <h1 className="card-title text-info text-center">
                        TaskBoard
                    </h1>
                </div>

                <div className="card-body">
                    <h2 className='text-info'>Click e um dos boards para ver as tarefas</h2>
                </div>
            </div>
        );
        }
    }
}
