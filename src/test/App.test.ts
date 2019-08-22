import { sum } from '../main/App';

describe('Sum Tests:', () => {
    test('should return 0 for empty entry', () => {
        expect(sum()).toBe(0);
    });

    test('should return 3 for sum of 1 + 2', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('should return 24 for sum of 1 + 20 + 3', () => {
        expect(sum(1, 20, 3)).toBe(24);
    });

    test('should return 39 for sum of 11 + 20 + 3 + 5', () => {
        expect(sum(11, 20, 3, 5)).toBe(39);
    });
});