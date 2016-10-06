[![Build Status](https://img.shields.io/travis/npm/npm/master.svg)]

# LOFT - Project

## Solution 1:

Clone the repository
    
    git clone https://github.com/Tumne/Loft-Project.git

Install dependencies

    npm install

Runs and navigate to `http://localhost:3000/`:

    node app.js

## Solution 2:


```javascript

var app = angular.module("app", []);

app.factory("apiService", function($http, $q){

  return {
    getBalance: function(id) {
      return $http.get('/json/' + id).then(function(res) {
        if (res === "something else"){
           return $q.reject("Invalid data");
        }
        return res;
      })
      .catch(function(err){
         return $q.reject("Data not available");
      })
    },
    getRange: function(id) {
      return $http.get('/json/' + id).then(function(res) {
        if (res === "something else"){
           return $q.reject("Invalid data");
        }
        return res;
      })
      .catch(function(err){
         return $q.reject("Data not available");
      })
    },
  }
  
});

app.controller("appCtrl", function($scope, $http, $q, apiService) {

    function parseFeed(id, callback) {
      var promises = [ apiService.getBalance(id), apiService.getRange(id) ];

      $q.all(promises).then(function(res){
        var result = { balance: res[0].data, range: res[1].data };
        callback(result);
      });
    }

    // callback function
    parseFeed(3, function(res){
      // Handle response here
    });

});

```