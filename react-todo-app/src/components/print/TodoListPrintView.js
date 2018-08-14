import React from 'react';

const styles = require('./TodoListPrintView.print.less');

export default function TodoListPrintView(props) {
    const {items} = props;

    return (
        <div>
            {renderStyles()}
            <div className="container">
                <h1 className="header">Things to do</h1>
                <div>{items.map(renderTodo)}</div>
            </div>
        </div>
    );
}

function renderStyles() {
    return <style>{styles}</style>
}

function renderTodo(item) {
    return <li key={item.id}>{item.text}</li>;
}