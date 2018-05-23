import React, {Component} from 'react';

export default class Tasks extends Component {

    render () {
        return (
            <div className='card'>
                <div className='card-header'>
                    <h3 className='card-title'>{this.props.tasks.title}</h3>
                </div>
                <div className='card-body'>
                    <p>{this.props.tasks.description}</p>
                </div>
            </div>
        )
    }
}
