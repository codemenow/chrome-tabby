import React from 'react';
import ReactDOM from 'react-dom';
import {Sidebar} from '../src/components/sidebar';
import {TabbyClock} from '../src/components/clock';
import {Saved} from '../src/components/saved';
import {Notes} from '../src/components/notes';
import {Settings} from '../src/components/settings';

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
                <Saved />
                <Notes />
                <Settings />
            </div>
        );
    }
}

ReactDOM.render(<TabbyApp />, document.getElementById('tabby-app'));