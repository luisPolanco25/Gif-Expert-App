import { getGifs } from "../../helpers/getGifs"


describe('Tests in getGifs fetch', () => {
    
    test('should get 10 elements', async() => {
        
        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);

    });
    
    test('should get 0 elements if there\'s nothing in the input', async() => {
        
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);

    });

})
