import {sumTest} from './sum'
import {expect, test} from 'vitest'


test('add 1 +2 to equal 3', ()=>{
    expect(sumTest(1,2)).toEqual(3)
})