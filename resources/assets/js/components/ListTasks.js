import React, {Component} from 'react';
import Tasks from './Tasks';

export default class ListTasks extends Component {

    render () {
        const myTasks = this.props.ideas.map(item => <Tasks tasks={item} key={item.id}/>);
        return (
            <div className='container-fluid'>
                {myTasks}
            </div>
        )
    }
}
