module.exports = element;

/**
 * Creates an element
 * @param {string} name Name of the DOM to be created
 * @param {string} ns Namespace, if any, that the element needs to be created
 */
function element(name, ns) {
    return new _element(name, ns, new _element());
}


//used as reference to determine if the pointer is a document fragment
const _fragmentConstructor = document.createDocumentFragment().constructor;

class _element {
    constructor(name, ns = null, pointer) {
        if (name) {
            if (pointer) {
                this.pointer = pointer;
            }

            if (ns) {
                this.dom = document.createElementNS(ns, name);
            } else {
                this.dom = document.createElement(name);
            }
        } else {
            this.dom = document.createDocumentFragment();
        }
    }
    /**
     * Accepts a name/value or a json object to create the dom's attributes
     * @param {*} name-or-json
     * @param {string} value 
     */
    a(name, value = '') {
        if (name.constructor === {}.constructor) {
            for (const a in name) {
                this.dom.setAttribute(a, name[a]);
            }
        } else {
            this.dom.setAttribute(name, value);
        }

        return this;
    }
    /**
     * Adds text to dom element
     * @param {String} text 
     */
    t(text) {
        this.dom.appendChild(document.createTextNode(text));
        return this;
    }
    /**
     * Adds an event listener to the dom element
     * @param {string} trigger Name of the event
     * @param {function} callback The function that is called when the event occurs
     */
    e(trigger, callback) {
        this.dom.addEventListener(trigger, callback);
        return this;
    }
    /**
     * Adds an element to current element
     * @param {string} name The element's name
     * @param {string} ns Namespace if needed for that element
     */
    add(name, ns = null) {
        return element(name, ns, this);
    }
    /**
     * Adds a dom element to current element
     * @param {object} dom DOM object that will be added
     */
    addDom(dom) {
        this.dom.appendChild(dom);
        return this;
    }
    /**
     * Closes current element and returns next element up
     * This will only work if the element is not on the top level
     */
    f() {
        if (this.pointer == null) {
            console.warn('Called .f() on a top level element');
            return this;
        } else {
            this.pointer.append(this);
            return this.pointer;
        }
    }
    /**
     * Runs through a list of data to add dynamically add elements
     * @param {list} data Accepts a list that will be run through
     * @param {function} func Function that will be run
     * The first parameter is the current element
     * The second is an item from the data list
     * If a truthy value is returned by the function, it will break out of the loop
     */
    each(data, func) {
        //avoids running if nothing is given
        if (data) {
            if (data.length === 0) {
                //Avoids running if nothing is given
                return this;
            }
            for (const d of data) {
                if (func(this, d)) {
                    break;
                }
            }
        }

        return this;
    }
}