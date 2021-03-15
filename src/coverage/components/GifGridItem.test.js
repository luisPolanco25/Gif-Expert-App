import { GifGridItem } from "../../components/GifGridItem";
import {shallow} from 'enzyme';
import React from 'react';

describe('Tests in <GifGridItem />', () => {

    const title = 'A title';
    const url = 'https://localhost/something.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    
    test('should match with the snapshot', () => {    

        expect(wrapper).toMatchSnapshot();

    });

    test('should have a paragraph with the title const', () => {
        
        const p = wrapper.find('p').text().trim();

        expect(p).toBe(title);
        
    });

    test('should have an image with an url and an alt', () => {
        
        const img = wrapper.find('img');

        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    });
    
    test('should have the class animate__jackInTheBox', () => {
        
        const div = wrapper.find('div');

        expect(div.prop('className').includes('animate__jackInTheBox')).toBe(true);

    });
    
})

