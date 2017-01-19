var app = angular.module('tttApp', []);

app.factory('boardServ', function($log){
    var boardSize = [3, 3]; //default board size
    var retObj = {}; //Object to be returned

    retObj.buildBoardArr = function(){
        if(boardSize.constructor === Array && boardSize.length == 2){
            var cols = boardSize[1];
            if(cols <= 12 && cols >= 3){
                var boardArr = [];
                var boardObj = {};
                var rows = boardSize[0];
                var bootStrap  = Math.floor(12/cols); //determines the bootstrap column size
                var height = Math.floor(80/rows) + "vh; "; //determines the row height so the total takes up 80% of the view height
                for(var i=1; i<=rows; i++){
                    for(var j=1; j<=cols; j++){
                        boardObj['row' + i + '-' + j] = {};
                        boardObj['row' + i + '-' + j].id = 'r' + i + 'c' + j;
                        boardObj['row' + i + '-' + j].class = 'col-xs-' + bootStrap + ' game-sqr';
                        boardObj['row' + i + '-' + j].style = 'height: ' + height;
                        //Sets the boarders of each square to look like a traditional tic-tac-toe board
                        if(i != rows){
                            boardObj['row' + i + '-' + j].style += 'border-bottom: 2px solid; ';
                            if(j != cols){
                                boardObj['row' + i + '-' + j].style += 'border-right: 2px solid; ';
                            }
                        }else if(j != cols){
                            boardObj['row' + i + '-' + j].style += 'border-right: 2px solid; ';
                        }
                    }
                    boardArr.push(boardObj);
                    boardObj = {};
                }
                return boardArr;
            }else{
                $log.error("Columns must be between 3 - 12");
            }
        }else{
            $log.error("Invalid boardSize data should be [row_count, column_count]");
        }
    };
    return retObj;
});

app.directive('displayBoard', function(){
    return {
        restrict: "E",
        templateUrl: "game-board-template.html",
        controller: function(boardServ){
            var self = this;
            self.board = [];
            self.board = boardServ.buildBoardArr();
        },
        controllerAs : "gc"
    }
});

app.directive('displayBar', function(){
    return {
        restrict: "E",
        templateUrl: "info-bar-template.html",
        controller: function(){

        },
        controllerAs : "bc"
    }
});
