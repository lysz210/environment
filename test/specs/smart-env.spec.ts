import {
    Expect,
    Test,
    TestFixture,
    SetupFixture,
    Setup
} from "alsatian"
import { createSmart } from '../../src/index'

@TestFixture('Smart env')
export class SmartEnvSpec {
    @SetupFixture
    public beforeAll () {
        process.env.STR = 'Hello World!'
        process.env.ARRAY = '1,2,3,4'
        process.env.JSON = `{"hello": "world"}`
        process.env.BOOLEAN = 'true'
        process.env.NUM = '1'
    }

    private proxy

    @Setup
    public beforeach () {
        this.proxy = createSmart({
            STR: 'string',
            ARRAY: 'array',
            JSON: 'json',
            BOOLEAN: 'boolean',
            NUM: 'number'
        })
    }

    @Test('Should return value of type number')
    public checkNumber () {
        Expect(typeof this.proxy.NUM).toEqual('number')
    }

    @Test('Should return value of type boolean')
    public checkBoolean () {
        Expect(typeof this.proxy.BOOLEAN).toEqual('boolean')
    }

    @Test('Should return value of type string')
    public checkString () {
        Expect(typeof this.proxy.STR).toEqual('string')
    }

    @Test('Should return value to be split as Array with comma')
    public checkArray () {
        Expect(Array.isArray(this.proxy.ARRAY)).toEqual(true)
    }

    @Test('Should return value parsed as Json')
    public checkJson () {
        Expect(typeof this.proxy.JSON).toEqual('object')
    }
}