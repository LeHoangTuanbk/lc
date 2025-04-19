import { productExceptSelf } from './productSelf';

describe('productExceptSelf', () => {
  // Test case 1: Basic functionality with positive integers
  test('should return correct products for [1, 2, 3, 4]', () => {
    // Expected: [24, 12, 8, 6]
    // For each position, we calculate the product of all other elements:
    // At index 0: 2*3*4 = 24
    // At index 1: 1*3*4 = 12
    // At index 2: 1*2*4 = 8
    // At index 3: 1*2*3 = 6
    const nums = [1, 2, 3, 4];
    const expected = [24, 12, 8, 6];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  // Test case 2: Array with zeros
  test('should handle arrays with zeros correctly', () => {
    // When there's a zero, the product of all other elements at that position is 0,
    // and all other positions will be 0 (since product includes the zero)
    const nums = [1, 0, 3, 4];
    const expected = [0, 12, 0, 0];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  // Test case 3: Array with multiple zeros
  test('should handle arrays with multiple zeros correctly', () => {
    // When there are multiple zeros, all resulting products will be 0
    const nums = [0, 2, 0, 4];
    const expected = [0, 0, 0, 0];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  // Test case 4: Array with negative numbers
  test('should handle arrays with negative numbers', () => {
    const nums = [-1, 2, -3, 4];
    // At index 0: 2*(-3)*4 = -24
    // At index 1: (-1)*(-3)*4 = 12
    // At index 2: (-1)*2*4 = -8
    // At index 3: (-1)*2*(-3) = 6
    const expected = [-24, 12, -8, 6];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  // Test case 5: Minimum length array
  test('should handle arrays of length 2', () => {
    const nums = [5, 10];
    const expected = [10, 5]; // Each position gets the value of the other position
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  // Test case 6: Large numbers - check for overflow
  test('should handle large numbers correctly', () => {
    const nums = [1000, 1000, 1000, 1000];
    // Each position gets the product of 1000^3 = 1000000000
    const expected = [1000000000, 1000000000, 1000000000, 1000000000];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  // Test case 7: Edge case - single element array
  test('should return empty array for single element array', () => {
    // This is an edge case, as we can't have a product except self for a single element
    // The behavior would be to return an empty array or the original element
    // Assuming we return an array of the same length with 1 for this case
    const nums = [42];
    const expected = [1]; // Since there's no other element to multiply
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  // Test case 8: Edge case - empty array
  test('should handle empty arrays', () => {
    const nums: number[] = [];
    const expected: number[] = [];
    expect(productExceptSelf(nums)).toEqual(expected);
  });

  // Test case 9: Performance test for large arrays
  test('should handle large arrays efficiently', () => {
    // Create an array with 10,000 elements
    const largeArray = Array.from({ length: 10000 }, (_, i) => i + 1);

    // We're not checking the exact values here, just making sure it completes quickly
    // and doesn't throw errors
    const startTime = performance.now();
    const result = productExceptSelf(largeArray);
    const endTime = performance.now();

    expect(result.length).toBe(largeArray.length);
    // Check that execution completes in a reasonable time (e.g., under 100ms)
    expect(endTime - startTime).toBeLessThan(100);
  });

  // Test case 10: Property test - verify fundamental property of the function
  test('should satisfy the foundational property of the function', () => {
    const nums = [2, 3, 4, 5];
    const result = productExceptSelf(nums);

    // For each position, the product of the original value and result value
    // should be the same - the product of all elements in the array
    const totalProduct = nums.reduce((acc, val) => acc * val, 1);

    for (let i = 0; i < nums.length; i++) {
      // Check: nums[i] * result[i] = product of all elements
      expect(nums[i] * result[i]).toBe(totalProduct);
    }
  });
});
