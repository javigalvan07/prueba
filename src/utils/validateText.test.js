import { describe, expect, it } from "vitest";
import { validateText } from './validateText';

describe('Funcion validateText', () => {
    
    it('Debería validar texto alfabético de 6 caracteres', () => {
        expect(validateText('abcdef')).toBe(true);
    });

    it('Debería validar texto alfabético de 10 caracteres', () => {
        expect(validateText('abcdefghij')).toBe(true);
    });

    it('No debería validar texto corto (menos de 6 caracteres)', () => {
        expect(validateText('abc')).toBe(false);
    });

    it('No debería validar texto largo (más de 10 caracteres)', () => {
        expect(validateText('abcdefghijk')).toBe(false);
    });

    it('No debería validar texto no alfabético', () => {
        expect(validateText('abc123')).toBe(false);
    });

    it('No debería validar texto con caracteres especiales', () => {
        expect(validateText('abc!')).toBe(false);
    });

    it('No debería validar texto vacío', () => {
        expect(validateText('')).toBe(false);
    });
});