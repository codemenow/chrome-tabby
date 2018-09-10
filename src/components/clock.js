import React from 'react';

export class TabbyClock extends React.Component {
    render(){
        return (
            <div className="tabby-clock">
                <div className="tabby-clock-time">
                    {this.props.clock.time}
                </div>
                <div className="tabby-clock-date">
                    {this.props.clock.date}
                </div>
            </div>
        )
    }
}