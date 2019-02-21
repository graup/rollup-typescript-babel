import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
const assert = chai.assert;

import { Counter } from '../src/counter/counter';
import { Value } from '../src';

describe('Value', () => {
    it('should work', () => {
        new Value().setValue(1000);
        new Value().setProps({ x: 1000, y: 1000 });
    });
});

describe('Counter', () => {
    it('should work', () => {
        const counter = new Counter();
        counter.add();
        counter.add();
        counter.add();

        assert.equal(counter.getValue(), 3);

        counter.subtract();
        counter.subtract();
        
        assert.equal(counter.getValue(), 1);
    });
});
