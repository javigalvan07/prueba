import { describe, expect, it } from "vitest";
import { isApproved } from './isApproved';

describe('Funcion isApproved', () => {
    
    it('Debería devolver TRUE para nota aprobada (6)', () => {
        expect(isApproved(6)).toBe(true);
    });

    it('Debería devolver TRUE para nota aprobada (10)', () => {
        expect(isApproved(10)).toBe(true);
    });

    it('Debería devolver FALSE para nota suspendida (0)', () => {
        expect(isApproved(0)).toBe(false);
    });

    it('Debería devolver TRUE para nota suspendida (5)', () => {
        expect(isApproved(5)).toBe(true);
    });

    it('Debería devolver NULL para nota menor que 0', () => {
        expect(isApproved(-1)).toBe(null);
    });

    it('Debería devolver NULL para nota mayor que 10', () => {
        expect(isApproved(11)).toBe(null);
    });

    // Prueba adicional para cubrir el límite superior del rango de suspenso (caja blanca)
    it('Debería devolver FALSE para nota suspendida (4)', () => {
        expect(isApproved(4)).toBe(false);
    });
});