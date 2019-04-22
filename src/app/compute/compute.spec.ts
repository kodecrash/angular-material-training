import { Compute } from './compute';


describe('compute', () => {

    it ('Should return 0 when for negative input', () => {
      const result = Compute(-2);
      expect(result).toBe(0);
    });

    it ('should return positive number for positive input', () => {
        const result = Compute(0);
        expect(result).toBeGreaterThan(0);
    });

});
