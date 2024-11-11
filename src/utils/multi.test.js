import { describe, expect, it } from "vitest";
import {multi} from './multi'

describe('Función Multiplicacion', () => {
    
    it('Multiplicacion debe ser una función', () => {
        expect(typeof multi).toBe('function');
    });

    it('Multi debe multiplicar correctamente dos numeros positivos', () => {
        expect(multi(3,4)).toBe(12);
    });

    it('Multi debe multiplicar correctamente dos numeros negativos', () => {
        expect(multi(-3,-4)).toBe(12);
    });

    it('Multi debe multiplicar correctamente un numero negativo y otro positivo', () => {
        expect(multi(-3,4)).toBe(-12);
    });
});