import { describe, it, expect } from 'vitest';
import { fibonacci } from './fibojavier.js';

describe('Función fibonacci', () => {
    it('debe devolver 0 para la posición 0', () => {
        expect(fibonacci(0)).toBe(0);
    });

    it('debe devolver 1 para la posición 1', () => {
        expect(fibonacci(1)).toBe(1);
    });

    it('debe devolver 1 para la posición 2', () => {
        expect(fibonacci(2)).toBe(1);
    });

    it('debe devolver 2 para la posición 3', () => {
        expect(fibonacci(3)).toBe(2);
    });

    it('debe devolver 5 para la posición 5', () => {
        expect(fibonacci(5)).toBe(5);
    });

    it('debe devolver 13 para la posición 7', () => {
        expect(fibonacci(7)).toBe(13);
    });
});