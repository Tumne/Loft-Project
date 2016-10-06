# LOFT - Project

## Question 1:

Clone the repository, run `npm install` to grab the dependencies.

### Running the app

Runs like a typical express app:

    node app.js

## Question 2:

```javascript
var oldUnload = window.onbeforeunload;
window.onbeforeunload = function() {
    saveCoverage();
    if (oldUnload) {
        return oldUnload.apply(this, arguments);
    }
};
```