'use strict';

app.controller('ArticleController', function($scope, $firebase, FURL, $location, $routeParams, toaster) {

	var ref = new Firebase(FURL);
	var fbArticles = $firebase(ref.child('articles')).$asArray();
	var articleId = $routeParams.articleId;

	$scope.articles = fbArticles;
	
	if(articleId) {
		$scope.selectedArticle = getArticle(articleId);
	}

	function getArticle(articleId) {
		return $firebase(ref.child('articles').child(articleId)).$asObject();
	};

	$scope.postArticle = function(article) {
		$scope.articles.$add(article);
		toaster.pop('success', 'Article created successfully.');
		$location.path('/browse');
	};	

	$scope.updateArticle = function(article) {
		$scope.selectedArticle.$save(article);
		toaster.pop('success', "Article is updated.");
		$location.path('/browse');
	};

});