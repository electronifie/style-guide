var x = function(    x  ){ // should add space around parens
  var y = function(        // should add space before parens
    x
  ){}
  if(                      // should add space around parens
    foo
  ) { }
  if(foo){}                // should add space around parens
  debugger;                // should remove debugger
  console.info('');        // should remove console statement
};
