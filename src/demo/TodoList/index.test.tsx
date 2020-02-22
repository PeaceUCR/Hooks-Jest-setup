import React from 'react';
import {expect} from 'chai';
import {TodoList, IProps} from './index';
import { mount, render, shallow } from 'enzyme';

describe('TodoList', () => {

    it('should render', () => {
        const wrapper = todoList({title: 'hello'});
        const title = wrapper.find('p.title');
        expect(title).to.have.text('hello');
    });

    const todoList = (props: IProps) => mount(
        <TodoList title={props.title}/>
    );
});

