# Dom-Creation

Dom-Creation is a quick and light package for building DOM

## Setup

```javascript
import element from 'dom-creation';
```
-or-
```javascript
const element = require('dom-creation').default;
```

Use type="module" if using html script tags to import.

### Documentation

If you would like the most in depth idea of how this works, just check the index.js file. Every method is documented on its function which will give you a good idea of what this is capable of. If you would like to see the code in action, check the examples below or the examples directory for an HTML web page.

### Examples

Building a div with a paragraph with red text

```javascript
element('div').add('p').t('Hello World').a('style', 'color:red;').f().ap(document.body);
```
-or-
```javascript
element().add('div').add('p').t('Hello World').a({'style': 'color:red;'}).f().f().ap(document.body);
```

Add an event to a button

```javascript
element('button').e('click', (event) => {alert('Clicked');}).t('Click Me!').ap(document.body);
```

Get DOM of the element

```javascript
const dom = element('div').dom;
```

Get current DOM after appending to live DOM

```javascript
const dom = element('div').ap(document.body).dom;
```

Build from list of data

```javascript
const arr = ['Hello', 'And', 'Welcome'];
element('div').each(arr, (elem, data) => {
    elem.add('p').t(data).f();
}).ap(document.body);
```

Add premade DOM elements
```javascript
const p = document.createElement('p');
p.appendChild(document.createTextNode('Hello World'));
element('div').addDom(p).ap(document.body);
```

There are three ways to append an element that all take a DOM element as an argument

```javascript
const dom = document.body;
element().ap(dom); //appends the element to DOM object
element().preap(dom); //prepends the element to DOM object which adds the child to top of DOM object's children
element().aftap(dom); //appends the element after another DOM object as a sibling of the DOM
```

Instead of:

```javascript
element('div').add('span').add('p').t('Nested').f().f().f().ap(document.body);
```

You can do:

```javascript
element('div').add('span').add('p').t('Nested').close().ap(document.body);
```
The .close() will add all elements to each other all the way up to the top of the tree. You can still add more elements, but they will be built in a new DOM tree.