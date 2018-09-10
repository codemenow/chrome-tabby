import React from 'react';

export class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {parentView: this.props.parentView};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(toState) {
        this.state.parentView.setState({
            toState: toState
        });
    }
    render() {
        return (
            <div className="tabby-sidebar">
                <div className="tabby-brand">Tabby</div>
                <ul className="links">
                    <li className="home" onClick={() => this.handleClick('home')}>Home</li>
                    <li className="saved" onClick={() => this.handleClick('saved')}>Saved</li>
                    <li className="notes" onClick={() => this.handleClick('notes')}>Notes</li>
                    <li className="settings" onClick={() => this.handleClick('settings')}>Settings</li>
                </ul>
            </div>
        )
    }
}