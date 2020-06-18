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

}
