/**
 * Fades in DOM elements sequentially with customizable timing
 * 
 * @param {Array<Object>} elements - Array of element configuration objects
 * @param {HTMLElement} elements[].element - DOM element to animate
 * @param {number} elements[].delay - Additional delay in milliseconds before this element appears
 * 
 * @example
 * // Fade in logo immediately, then title after 300ms, then subtitle after 500ms
 * fadeInSequence([
 *   { element: document.querySelector('.logo'), delay: 0 },
 *   { element: document.querySelector('.title'), delay: 300 },
 *   { element: document.querySelector('.subtitle'), delay: 500 }
 * ]);
 */
function fadeInSequence(elements) {
    // Initial setup - set all elements to opacity 0
    elements.forEach(item => {
        item.element.style.opacity = '0';
    });

    // Base delay before starting animations
    const baseDelay = 100;
    
    // Animate each element with its specific delay
    elements.forEach(item => {
        setTimeout(() => {
            item.element.style.transition = 'opacity 1s ease-in-out';
            item.element.style.opacity = '1';
        }, baseDelay + item.delay);
    });
}