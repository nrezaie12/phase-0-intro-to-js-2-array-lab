// Write your solution here!
var cats = ['Milo', 'Otis', 'Garfield'];
    beforeEach(function () {
     cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    });
    
    function destructivelyAppendCat(Ralph){
      cats.push(Ralph);
    }

    function destructivelyPrependCat(Bob){
      cats.unshift(Bob)
    }
    function destructivelyRemoveLastCat(){
      cats.pop()
    }
    function destructivelyRemoveFirstCat(){
      cats.shift()
    }
    function appendCat(Broom){
      var newCat = [...cats, Broom];
      return newCat
    }
    function prependCat(Arnold){
    var newCat = [Arnold, ...cats];
      return newCat
    }
    function removeLastCat(){
      var newCat = cats.slice(0, cats.length - 1);
      return newCat   
    }
    function removeFirstCat(){
      var newCat = cats.slice(1)
      return newCat
    }
    
    
