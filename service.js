var URL="piyu/"
userapp.factory('genericDataService', function($http,$q) {

var genericService = {};
genericService.hitUrl = function(){
  
        var hit = $http.get(URL +'');
            return $q.all({
                logout : hit
            })
}
return genericService;
    });
