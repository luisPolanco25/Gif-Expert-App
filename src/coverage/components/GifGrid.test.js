import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Tests in <GifGrid />', () => {
    
    const category = 'Hello world'
    
    test('should match with its snapshot', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);
        expect(wrapper).toMatchSnapshot();
        
    });
    
    test('should show items when images are loaded with useFetchGifs', () => {
       
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/something.jpg',
            title: 'Something',
        },
        {   id: '123',
            url: 'https://localhost/something.jpg',
            title: 'Something',
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });
        
        const wrapper = shallow(<GifGrid category={category}/>);
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });

})
