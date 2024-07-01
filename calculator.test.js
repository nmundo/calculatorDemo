import { describe, it, expect } from "vitest";
import { add, average, factorial } from './calculator';

describe('add', () => {
    it('should add two numbers', () => {
        expect(add(1, 2)).toBe(3);
    });
});

describe('average', () => {
    it('should work for 1 number', () => {
        expect(average([1])).toBe(1);
    });

    it('should work for multiple numbers', () => {
        expect(average([1, 2])).toBe(1.5);
    })
})

describe('factorial', () => {
    it('should work for 1 number', () => {
        expect(factorial(1)).toBe(1);
    });

    it('should work for all numbers', () => {
        expect(factorial(5)).toBe(120);
    });

    it('should return undefined if number is negative', () => {
        expect(factorial(-1)).toBeUndefined();
    });

    it('should return NaN if value is a decimal', () => {
        expect(factorial(1.5)).toBeNaN();
    })
});