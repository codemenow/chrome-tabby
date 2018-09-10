import React from 'react';
import ReactDOM from 'react-dom';
import {TabbyClock} from '../src/components/clock';

require('./styles/tabby.less');

class TabbyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (
            <div className="tabby-container">
                <TabbyClock clock={this.state.clock} />
            </div>
        );
    }
}

ReactDOM.render(<TabbyApp />, document.getElementById('tabby-app'));