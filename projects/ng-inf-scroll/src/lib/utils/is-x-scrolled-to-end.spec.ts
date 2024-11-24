import { isXScrolledToEnd } from './is-x-scrolled-to-end';

describe('isXScrolledToEnd', () => {
  let element:any;

  beforeEach(() => {
    // Create a mock HTML element
    element = document.createElement('div');
    element.style.width = '100px'; // Set height for the mock element
    Object.defineProperty(element, 'scrollWidth', { value: 200 }); // Total content height
  });

  it('should return true when scrolled to the end', () => {
    Object.defineProperty(element, 'scrollLeft', { value: 100 }); // Scrolled to the end
    Object.defineProperty(element, 'clientWidth', { value: 100 }); // Visible height

    expect(isXScrolledToEnd(element)).toBeTrue();
  });

  it('should return false when not scrolled to the end', () => {
    Object.defineProperty(element, 'scrollLeft', { value: 50 }); // Not scrolled to the end
    Object.defineProperty(element, 'clientWidth', { value: 100 });

    expect(isXScrolledToEnd(element)).toBeFalse();
  });

  it('should consider the offset parameter', () => {
    Object.defineProperty(element, 'scrollLeft', { value: 98 }); // Near the end
    Object.defineProperty(element, 'clientWidth', { value: 100 });

    expect(isXScrolledToEnd(element, 2)).toBeTrue();
  });

  it('should return false if offset is not met', () => {
    Object.defineProperty(element, 'scrollLeft', { value: 97 }); // Slightly before offset
    Object.defineProperty(element, 'clientWidth', { value: 100 });

    expect(isXScrolledToEnd(element, 2)).toBeFalse();
  });

  it('should throw an error if offset is less than 1', () => {
    expect(() => isXScrolledToEnd(element, 0)).toThrowError();
    expect(() => isXScrolledToEnd(element, -1)).toThrowError();
  });

  it('should not throw an error for valid offsets', () => {
    Object.defineProperty(element, 'scrollLeft', { value: 100 });
    Object.defineProperty(element, 'clientWidth', { value: 100 });

    expect(() => isXScrolledToEnd(element, 1)).not.toThrow();
    expect(() => isXScrolledToEnd(element, 2)).not.toThrow();
  });
});
