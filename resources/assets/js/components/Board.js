import React,{Component} from 'react';

export default class Board extends Component {
    constructor(){
        super();
        this.state = {
            openEdit: false
        };
    }

    render (){
        if(this.state.openEdit) {
            return (
                <form className="card">
                    <div className="card-body">
                        <input name="text" className="form-control" defaultValue={this.props.board.name} ref="name" autoFocus={true} required={true}/>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-outline-primary" onClick={this.onSubmit.bind(this)}>
                        Save changes
                        </button>
                        <button className="btn btn-outline-danger" onClick={this.openEdit.bind(this)}>
                        Cancel
                        </button>
                    </div>
                </form>
            );
        }else {
            return (
                <div className="card">
                    <div className="card-header">
                        <button type="button" className="close" aria-label="Close" onClick={this.handleDelete.bind(this)}><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div className="card-body border" onDoubleClick={this.openEdit.bind(this)} onClick={this.handleListTasks.bind(this)}>
                    {this.props.board.name}
                    </div>
                </div>
            );
        }
    }

    openEdit(){
        this.setState({
            openEdit: !this.state.openEdit
        });
    }

    onSubmit(e) {
        this.props.editBoard(this.refs.name.value, this.props.board.id);
        this.openEdit();
        e.preventDefault();
    }

    handleDelete() {
        this.props.deleteBoard(this.props.board.id);
    }

    handleListTasks(){
        this.props.showIdeas(this.props.board.id);

    }
}
