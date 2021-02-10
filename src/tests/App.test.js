import { expect } from 'chai';
import { getStorageItem } from '../../utils';

describe('returnProductBtGivenID', ()=> {
    it('returns to the product that has given id', () => {
        const key = 'totalProducts';

        const expected = 'totalProducts';
        const actual = getStorageItem(key);

        expect(actual).to.equal(expected);
    });
});