/**
 * checks whether an element is scrolled to the end
 * to understand how it is calculated, check:
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#determine_if_an_element_has_been_totally_scrolled
 * @param element DOMElement
 * @param offset offset value, by default is 1
 * @returns  boolean, True if it's an end
 */
export function isXScrolledToEnd(
  element: HTMLElement,
  offset: number = 1
): boolean {
  if (offset < 1) {
    throw new Error('offset value must be bigger than 1');
  }
  return (
    Math.abs(element.scrollWidth - element.clientWidth - element.scrollLeft) <=
    offset
  );
}
