/**
 * Test both the implementation by comparing Heap snapshot before and after
 * in Memory tab of Chrome dev tools and searching for `Detached` keyword
 */

const trigger = document.getElementById('trigger');
const element = document.getElementById('element');

trigger.addEventListener('click', () => {
	/**
	 * This will leak the memory by referencing
	 * to a node which is not present in body.
	 * To fix it, you can bring the `element` inside this callback scope
	 */
	element.remove()
});
