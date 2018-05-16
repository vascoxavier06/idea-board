import React, {Component} from 'react';

export default class ToggleBoardCreate extends Component {

    render() {
        if(this.props.isOpen) {
            return (
                <div className="container">
                    <form method="post" action="/boards" className="form-group" onSubmit={this.addBoard.bind(this)}>
                        <label>Board Name</label>
                        <input type="text" className="form-control" ref="name" name="name" required={true}/>
                        <div className="row justify-content-center">
                            <button className="btn btn-primary" type="submit">
                            Add Board
                            </button>
                            <button className="btn btn-danger" onClick={this.props.onClickAdd}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )
        }else {
            return (
                <div className="container">
                    <button className="btn btn-outline-primary" onClick={this.props.onClickAdd}>
                    Create Boarder
                    </button>
                </div>
            )
        }
    }

    addBoard(e) {
        this.props.onSubmit(this.refs.name.value);
        this.props.onClickAdd();
        e.preventDefault();
    }
}
