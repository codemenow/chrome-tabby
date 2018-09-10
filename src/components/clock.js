import React from 'react';
import Moment from 'moment';

export class TabbyClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clock: {
                time: Moment().format('HH:mm:ss'),
                date: Moment().format('MMMM Do YYYY')
            }};
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

    render(){
        return (
            <div className="tabby-clock">
                <div className="tabby-clock-time">
                    {this.state.clock.time}
                </div>
                <div className="tabby-clock-date">
                    {this.state.clock.date}
                </div>
            </div>
        )
    }
}