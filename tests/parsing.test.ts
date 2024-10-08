import { describe, it, expect } from 'vitest';
import { Runtime } from '../src/Runtime';

describe('CEL Parsing Tests', () => {
  
  it('should parse a simple arithmetic expression', () => {
    const expression = "1 + 1";
    const result = Runtime.parseString(expression);
    expect(result.success).toBe(true);
  });

  it('should fail to parse an invalid expression', () => {
    const expression = "1 +";
    const result = Runtime.parseString(expression);
    expect(result.success).toBe(false);
  });

  it('should return error message for invalid expression', () => {
    const expression = "1 + ";
      const result = Runtime.parseString(expression);
    expect(result.success).toBe(false);
    expect(result.error).toBeDefined();
  });

  it('should parse a comparison expression', () => {
    const expression = "a == b";
    const result = Runtime.parseString(expression);
    expect(result.success).toBe(true);
  });   
});
