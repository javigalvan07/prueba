import { describe, expect, it } from "vitest";
import { isAmountBounded } from './isAmountBounded';

describe('Función isAmountBounded', () => {
    
    it('Debería devolver TRUE para valores dentro del rango (1)', () => {
        expect(isAmountBounded(1)).toBe(true);
    });

    it('Debería devolver TRUE para valores dentro del rango (500)', () => {
        expect(isAmountBounded(500)).toBe(true);
    });

    it('Debería devolver TRUE para valores dentro del rango (1000)', () => {
        expect(isAmountBounded(1000)).toBe(true);
    });

    it('Debería devolver FALSE para valores menores que 1 (0)', () => {
        expect(isAmountBounded(0)).toBe(false);
    });

    it('Debería devolver FALSE para valores menores que 1 (-1)', () => {
        expect(isAmountBounded(-1)).toBe(false);
    });

    it('Debería devolver FALSE para valores menores que 1 (-500)', () => {
        expect(isAmountBounded(-500)).toBe(false);
    });

    it('Debería devolver FALSE para valores mayores que 1000 (1001)', () => {
        expect(isAmountBounded(1001)).toBe(false);
    });

    it('Debería devolver FALSE para valores mayores que 1000 (1500)', () => {
        expect(isAmountBounded(1500)).toBe(false);
    });

    it('Debería devolver FALSE para entradas no numéricas (null)', () => {
        expect(isAmountBounded(null)).toBe(false);
    });

    it('Debería devolver FALSE para entradas no numéricas (undefined)', () => {
        expect(isAmountBounded(undefined)).toBe(false);
    });

    it('Debería devolver FALSE para entradas no numéricas (texto)', () => {
        expect(isAmountBounded('texto')).toBe(false);
    });

    it('Debería devolver FALSE para entradas no numéricas (array vacío)', () => {
        expect(isAmountBounded([])).toBe(false);
    });

    it('Debería devolver FALSE para entradas no numéricas (objeto vacío)', () => {
        expect(isAmountBounded({})).toBe(false);
    });
});
