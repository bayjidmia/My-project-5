1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

2.How do you create and insert a new element into the DOM?

3.What is Event Bubbling and how does it work?

4.What is Event Delegation in JavaScript? Why is it useful?

5.What is the difference between preventDefault() and stopPropagation() methods?

1.ans:
    getElementById Selects one element with a specific id and getElementsByClassName Selects all elements that have a certain class and querySelector Selects the first element that matches a CSS selector.

2.ans :
I can create and insert a new element by using creatElement.texcontent,apendChild.

3.ans :Event Bubbling is a way events move in the DOM.When an event occurs on an element, it first triggers on that element.it “bubbles up” to its parent elements, all the way up to the <html> element (the document root), unless stopped.


4.ans :Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of attaching listeners to multiple child elements.

5.ans :preventDefault() Prevents the default action of an element from occurring and stopPropagation() Stops the event from bubbling up (or capturing down) the DOM.


       