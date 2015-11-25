# angular-res
Make angular more restful.

# Features
* provide a update method
* just one method `save` for create or update data

# Usage
 1. add `ngRes` dependency 
 ```
 angular.module('yourApp',['ngRes'])
 ```
 2. inject `$res` service to your controller or directive.
 3. use `$res` as `$resource` same way.
  ```
  angular.module('yourApp')
    .factory('Post', function($res){
      return $res('/api/posts/:id/:controller');
    })
  ```
 4. save or update(if id is provided) post.
  ```
  angular.module('yourApp')
    .controller('PostCtrl',function($scope, Post){
      $scope.post = new Post();
      $scope.post.$save();//create new post.
      $scope.post.id = '1';
      $scope.post.$save();//update exist post.
    });
  ```
