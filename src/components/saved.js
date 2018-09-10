import React from 'react';

export class Saved extends React.Component {
    constructor(props){
        super(props);
        this.state = {bookmarks: [], history: []};
        this.getBookmarks = this.getBookmarks.bind(this);
    }
    componentDidMount() {
        this.getBookmarks();
        this.getHistory();
    }
    getBookmarks() {
        chrome.bookmarks.getRecent(5, (bookmarks) => {
            this.setState({
                bookmarks: bookmarks
            })
        })
    }
    getHistory() {
        chrome.history.search({text: ''}, (history) => {
            this.setState({
                history: history
            })
        })
    }
    render() {
        return (
            <div className="tabby-saved">
                Your Booksmarks
                <ul>
                    {this.state.bookmarks.map(item => (
                        <li className={item.id}><a href={item.url}>{item.title}</a></li>
                    ))}
                </ul>
                Your recent history
                <ul>
                    {this.state.history.map(item => (
                        <li className={item.id}><a href={item.url}>{item.title}</a></li>
                    ))}
                </ul>
            </div>
        );
    }
}