import { isYScrolledToEnd } from './is-y-scrolled-to-end';

describe('isYScrolledToEnd', () => {
  let element:any;

  beforeEach(() => {
    // Create a mock HTML element
    element = document.createElement('div');
    element.style.height = '100px'; // Set height for the mock element
    Object.defineProperty(element, 'scrollHeight', { value: 200 }); // Total content height
  });

  it('should return true when scrolled to the end', () => {
    Object.defineProperty(element, 'scrollTop', { value: 100 }); // Scrolled to the end
    Object.defineProperty(element, 'clientHeight', { value: 100 }); // Visible height

    expect(isYScrolledToEnd(element)).toBeTrue();
  });

  it('should return false when not scrolled to the end', () => {
    Object.defineProperty(element, 'scrollTop', { value: 50 }); // Not scrolled to the end
    Object.defineProperty(element, 'clientHeight', { value: 100 });

    expect(isYScrolledToEnd(element)).toBeFalse();
  });

  it('should consider the offset parameter', () => {
    Object.defineProperty(element, 'scrollTop', { value: 98 }); // Near the end
    Object.defineProperty(element, 'clientHeight', { value: 100 });

    expect(isYScrolledToEnd(element, 2)).toBeTrue();
  });

  it('should return false if offset is not met', () => {
    Object.defineProperty(element, 'scrollTop', { value: 97 }); // Slightly before offset
    Object.defineProperty(element, 'clientHeight', { value: 100 });

    expect(isYScrolledToEnd(element, 2)).toBeFalse();
  });

  it('should throw an error if offset is less than 1', () => {
    expect(() => isYScrolledToEnd(element, 0)).toThrowError();
    expect(() => isYScrolledToEnd(element, -1)).toThrowError();
  });

  it('should not throw an error for valid offsets', () => {
    Object.defineProperty(element, 'scrollTop', { value: 100 });
    Object.defineProperty(element, 'clientHeight', { value: 100 });

    expect(() => isYScrolledToEnd(element, 1)).not.toThrow();
    expect(() => isYScrolledToEnd(element, 2)).not.toThrow();
  });
});
