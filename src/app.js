import React from 'react';
import ReactDOM from 'react-dom';
import Moment from 'moment';
import {TabbyClock} from '../src/components/clock';
import {TabbyTodoList} from '../src/components/todo'

require('./styles/tabby.less');

class TabbyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '', clock:{time: Moment().format('HH:mm:ss'), date: Moment().format('MMMM Do YYYY')}};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="tabby-container">
                <TabbyClock clock={this.state.clock} />
                <div className="tabby-todo">
                    <h3>TODO</h3>
                    <TabbyTodoList items={this.state.items} />
                    <form onSubmit={this.handleSubmit}>
                        <input id="new-todo" onChange={this.handleChange} value={this.state.text}/>
                        <button>Add #{this.state.items.length + 1}</button>
                    </form>
                </div>
            </div>
        );
    }

    tick() {
        this.setState(prevState => ({
            clock: {
                time: Moment().format('HH:mm:ss'),
                date: Moment().format('MMMM Do YYYY')
        }}));
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }
}

ReactDOM.render(<TabbyApp />, document.getElementById('tabby-app'));