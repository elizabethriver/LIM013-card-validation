// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it('debería retornar true para "4716621483139473"', () => {
      expect(validator.isValid("4716621483139473")).toBe("verdadera");
    });
    it('debería retornar false para "4586453673894444"', () => {
      expect(validator.isValid("4586453673894444")).toBe("errónea");
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "############9473" para "4716621483139473"', () => {
      expect(validator.maskify("4716621483139473")).toBe("############9473");
    });
    });
  });
