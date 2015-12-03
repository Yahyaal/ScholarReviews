'use strict';

var app = angular
  .module('SRApp', [
    'ngAnimate',    
    'ngResource',
    'ngRoute',    
    'firebase',
    'toaster',
    'angularMoment'
  ])
  .constant('FURL', 'https://scholareview.firebaseio.com/')  
  .config(function ($routeProvider) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/main.html'     
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'ArticleController'
      })
      .when('/viewArticle/:articleId', {
        templateUrl: 'views/viewArticle.html',
        controller: 'ArticleController'
      })
      .when('/edit/:articleId', {
        templateUrl: 'views/edit.html',
        controller: 'ArticleController'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html',
        controller: 'ArticleController'     
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'AuthController'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'AuthController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
