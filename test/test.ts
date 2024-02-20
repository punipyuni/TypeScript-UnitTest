import merge from '../src/mergeSort';

describe('merge', () => {
    it('should arrays merge together', () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [2, 4, 6, 8];
        const collection_3 = [13, 12, 11, 10, 9, 7];
        const result = merge(collection_1, collection_2, collection_3);

        // Test Case manually sorted
        const test1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        
        // Checking result
        console.log(result);

        // Testing the result
        expect(result).toEqual(test1);
    });
});