// Assuming scope is an object that has an add method
const scope = {
    items: [],
    add: function(item) {
        this.items.push(item);
        return item;
    }
};

// Assuming Collect is a function that returns an object
function Collect(params) {
    return { ...params };
}

// Using the above in a context
const v = scope.add(Collect({
    name: 'example',
    value: 42
}));

console.log(v); // Output: { name: 'example', value: 42 }
console.log(scope.items); // Output: [{ name: 'example', value: 42 }]
