/**
 * @license AngularJS v1.4.0-build.3986+sha.8914f8e
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
(function(window, angular, undefined) {
  'use strict';
  return angular.module('ngRes', ['ngResource'])
    .factory('$res', ['$resource', function($resource){
      return function(url, params, methods){
        var defaults = {
          update: {method:'PUT', isArray:false},
          create: {method:'POST'}
        };

        methods = angular.extend(defaults, methods);

        var resource = $resource(url, params, methods);

        resource.prototype.$save = function(){
          if(this.id){
            return this.$update();
          }
          else{
            return this.$create();
          }
        };

        return resource;
      };
    }]);
})(window, window.angular);
