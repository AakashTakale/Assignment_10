var app = angular.module("liveComment",[]);

app.controller("chat",function($scope){

    $scope.commentList=["This is the first commnet",
    					"Here's the second comment",
    					"And this is one More",
    					"Here is another one"]; 

    $scope.addComment = function(){
        if($scope.enterComment==null){
            window.alert("Please enter the comment..!! ");
        }else{
            $scope.commentList.push($scope.enterComment);
        }
    };
});