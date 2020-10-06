import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Button from './button';

test('works', () => {
    expect(true).toBe(true);
});
let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});
afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});
it('renders with text', () => {
    act(() => {
        render(<Button text={'Hello world!'} />, container);
    });
    expect(container.textContent).toBe('Hello world!');
});
