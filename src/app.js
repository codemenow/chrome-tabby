import React from 'react';
import ReactDOM from 'react-dom';
import {TabbyClock} from '../src/components/clock';
import {Sidebar} from '../src/components/sidebar';

require('./styles/tabby.less');

class TabbyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toState: 'home'
        };
    }

    render() {
        return (
            <div className={"tabby-container" + " " + this.state.toState}>
                <TabbyClock clock={this.state.clock} />
                <Sidebar parentView={this} />
            </div>
        );
    }
}

ReactDOM.render(<TabbyApp />, document.getElementById('tabby-app'));