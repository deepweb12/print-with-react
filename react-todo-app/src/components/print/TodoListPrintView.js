import React from 'react';

const styles = require('./TodoListPrintView.print.less');

export default function TodoListPrintView(props) {
    const {items} = props;

    return (
        <div>
            <style>{styles}</style>
            <div className="container">
                <h1 className="header">Things to do</h1>
                <div className="wrapper">
                    {items.map(todo =>
                        <div key={todo.id} className="row">
                            <div className={"column__check"}>{/**/}</div>
                            <div className={"column"}>{todo.text}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}