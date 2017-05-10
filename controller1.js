userapp.controller("cnt", function($scope,genericDataService) {
	genericDataService.hitUrl().then(function(){
		console.log("in fun1");
	},function(){
	console.log("in error")
})
$scope.fun = function(){
	console.log("in fun");
}
});
