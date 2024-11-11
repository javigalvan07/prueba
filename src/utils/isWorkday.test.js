import { describe, expect, it } from "vitest";
import { isWorkday } from './isWorkday';

describe("Tests de la función isWorkday", () => {

  describe("Días laborales", () => {
    it("debería retornar true para 'lunes'", () => {
      expect(isWorkday("lunes")).toBe(true);
    });

    it("debería retornar true para 'martes'", () => {
      expect(isWorkday("martes")).toBe(true);
    });

    it("debería retornar true para 'miércoles'", () => {
      expect(isWorkday("miércoles")).toBe(true);
    });

    it("debería retornar true para 'jueves'", () => {
      expect(isWorkday("jueves")).toBe(true);
    });

    it("debería retornar true para 'viernes'", () => {
      expect(isWorkday("viernes")).toBe(true);
    });
  });

  describe("Días no laborales", () => {
    it("debería retornar false para 'sábado'", () => {
      expect(isWorkday("sábado")).toBe(false);
    });

    it("debería retornar false para 'domingo'", () => {
      expect(isWorkday("domingo")).toBe(false);
    });
  });

  describe("Valores no válidos", () => {
    it("debería retornar false para un valor no válido, como 'febrero'", () => {
      expect(isWorkday("febrero")).toBe(false);
    });
  });

});
