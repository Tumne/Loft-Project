# LOFT - Project

## Solution 1:

Clone the repository, run `npm install` to grab the dependencies.
Runs like a typical express app:

    node app.js

## Solution 2:

```javascript
angular.module(app, []) .controller('appCtrl', function ($http, $q) {
  function parseFeed(id) {
    var deferred = $q.defer(); 
    $http.get('/json/' + id) 
    .success(function (balance) {
      $http.get('/json/' + id)
      .success(function (range) {
        var response = { balance: balance, range: range };
        deferred.resolve(response); 
      });
    });
    return deferred.promise; 
  }
  parseFeed(3); 
});
```