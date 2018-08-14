import React from 'react';
import {render} from 'react-dom'

/**
 * Returns a new object with only few attributes of the original object.
 * Note: the attributes/properties will still be bound to the old object.
 *
 * @param  {Object} object     The object.
 * @param  {Array}             Array of selected attributes.
 * @return {Object}            New object with only the selected attributes.
 */
export function objectWithOnly(object, attrs) {
    let newObject = {};

    attrs.forEach(attr => {
        newObject[attr] = object[attr].bind(object);
    });

    return newObject;
}

/**
 * Wraps react children elements with props.
 */
export function wrapChildrenWith(children, props) {
    return React.Children.map(children, child => React.cloneElement(child, props));
}

/**
 * Checks if the string includes the substring.
 *
 * @param  {String} str
 * @param  {String} substr
 * @return {Boolean}
 */
export function stringInclues(str, substr) {
    return str.indexOf(substr) !== -1;
}

/**
 * Print react component in new frame
 * @param {ReactComponent} reactComponent
 */
export function print(reactComponent) {
    const frame = document.createElement('iframe');
    frame.style.display = 'none';
    window.document.body.appendChild(frame);
    const _window = frame.contentWindow;
    _window.document.body.appendChild(_window.document.createElement('div'));
    render(reactComponent, _window.document.body.children[0]);
    _window.print();
    window.document.body.removeChild(frame);
}
