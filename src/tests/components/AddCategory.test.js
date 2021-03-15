import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Tests in <AddCategory />', () => {
    
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}/>);

    });

    test('should act properly', () => {
        
        expect(wrapper).toMatchSnapshot();
    });
    
    
    test('should change the value of input', () => {
        
        const input = wrapper.find('input');
        const value = 'Hello world';

        input.simulate('change', {target: {value}});

        expect(wrapper.find('p').text().trim()).toBe(value);

    });
    
    test('It shouldn\'t show the information on submit', () => {

        wrapper.find('form').simulate('submit', {preventDefault(){}});
        
        expect(setCategories).not.toHaveBeenCalled();

    });
    
    test('should clear the input when setCategories is called', () => {
        
        const input = wrapper.find('input');
        const value = 'Hello world';

        input.simulate('change', {target: {value}});
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value')).toBe('');
        
    });
    
    


})
