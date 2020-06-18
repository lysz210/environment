import {Expect, Test, TestFixture} from "alsatian";
import {asBoolean} from "../../dist";

@TestFixture('Boolean Checks')
export class BooleanSpec {

    @Test(`should return true for string value [true]'`)
    testStringTrue() {
        process.env['stringTrue'] = 'true';
        const stringTrueEnv = asBoolean('stringTrue');
        Expect(stringTrueEnv).toBeTruthy();
    }

    @Test(`should return true for value [1]`)
    testNumberOne() {
        process.env['numberOne'] = '1';
        const numberOne = asBoolean('numberOne');
        Expect(numberOne).toBeTruthy();
    }

    @Test(`should return true for value [y]`)
    testLetterLowerYTrue() {
        process.env['lowerCaseY'] = 'y';
        const letterLowerY = asBoolean('lowerCaseY');
        Expect(letterLowerY).toBeTruthy();
    }

    @Test(`should return true for value [Y]`)
    testLetterUpperYTrue() {
        process.env['upperCaseN'] = 'Y';
        const letterUpperN = asBoolean('upperCaseN');
        Expect(letterUpperN).toBeTruthy();
    }

    @Test(`should return false for string value [false]'`)
    testStringFalse() {
        process.env['stringFalse'] = 'false';
        const stringFalseEnv = asBoolean('stringFalse');
        Expect(stringFalseEnv).not.toBeTruthy();
    }

    @Test(`should return false for value [0]`)
    testNumberZeroFalse() {
        process.env['numberZero'] = '0';
        const numberZero = asBoolean('numberZero');
        Expect(numberZero).not.toBeTruthy();
    }

    @Test(`should return false for value [n]`)
    testLetterLowerNFalse() {
        process.env['lowerCaseN'] = 'n';
        const letterLowerN = asBoolean('lowerCaseN');
        Expect(letterLowerN).not.toBeTruthy();
    }

    @Test(`should return false for value [N]`)
    testLetterUpperNFalse() {
        process.env['upperCaseN'] = 'N';
        const letterUpperN = asBoolean('upperCaseN');
        Expect(letterUpperN).not.toBeTruthy();
    }

}
