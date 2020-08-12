# Dom-Creation

Dom-Creation is a quick and light package for building DOM

## Setup

```
import element from 'dom-creation';
```

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



