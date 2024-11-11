import { describe, expect, it } from "vitest";
import { javierMaxOfThree } from './javierMaxOfThree';

describe('Función javierMaxOfThree', () => {
    
    it('Debería devolver a cuando a es mayor o igual que b y c', () => {
        expect(javierMaxOfThree(5, 3, 1)).toBe(5); 
        expect(javierMaxOfThree(5, 5, 3)).toBe(5); 
        expect(javierMaxOfThree(5, 5, 5)).toBe(5); 
    });

    it('Debería devolver b cuando b es mayor o igual que a y c', () => {
        expect(javierMaxOfThree(3, 5, 1)).toBe(5); 
        expect(javierMaxOfThree(3, 5, 5)).toBe(5); 
    });

    it('Debería devolver c cuando c es mayor que a y b', () => {
        expect(javierMaxOfThree(3, 1, 5)).toBe(5); 
        expect(javierMaxOfThree(1, 1, 5)).toBe(5); 
    });
});
