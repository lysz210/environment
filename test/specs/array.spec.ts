import {Expect, Test, TestFixture} from "alsatian";
import {asArray} from "../../src/lib/array";


@TestFixture('Array Checks')
export class ArraySpec {

    @Test('Array with comma separator should have length of 5')
    testCommaSeparator() {
        process.env['commaArray'] = 'one,two,three,four,five';
        const numberArray = asArray('commaArray');
        Expect(numberArray.length).toBe(5);
    }

    @Test('Array with pipe separator should have length of 5')
    testPipeSeparator() {
        process.env['commaArray'] = 'one|two|three|four|five';
        const numberArray = asArray('commaArray', '|');
        Expect(numberArray.length).toBe(5);
    }

    @Test('Ensure numberArray is in array format with correct values mapped')
    testNumberArrayValues() {
        process.env['commaArray'] = 'one|two|three|four|five';
        const numberArray = asArray('commaArray', '|');
        Expect(numberArray).toEqual(['one', 'two', 'three', 'four', 'five']);
    }

    @Test(`Shouldn't fail when no environment variable exists`)
    testUndefinedVariable() {
        const nonExistant = asArray('nonExistantKey');
        Expect(nonExistant).not.toBeDefined();
    }

}
