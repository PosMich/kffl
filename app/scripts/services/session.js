'use strict';

angular.module('kfflApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
