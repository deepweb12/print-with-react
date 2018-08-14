import React from 'react';

const style = require("./TodoListPrintView.less");

export default function TodoListPrintView(props) {
    const {items} = props;

    return (
        <div className={style.container}>
            <h1 className={style.header}>Things to do</h1>
            <div>{items.map(renderTodo)}</div>
        </div>
    );
}

function renderTodo(item) {
    return <li key={item.id}>{item.text}</li>;
}