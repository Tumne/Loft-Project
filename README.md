# LOFT - Project

## Solution 1:

Clone the repository, run `npm install` to grab the dependencies.
Runs like a typical express app:

    node app.js

## Solution 2:

```javascript
var oldUnload = window.onbeforeunload;
window.onbeforeunload = function() {
    saveCoverage();
    if (oldUnload) {
        return oldUnload.apply(this, arguments);
    }
};
```