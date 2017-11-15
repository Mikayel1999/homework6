const dim = function (num,str) {
  const string = function(n) {
     let arg = "";
      for(let i = 0; i < n; i++){
       arg=arg+str;
      }
      return arg;
      }
  const space = function(n) {
     let arg = "";
      for(let i = 0; i < n; i++){
       arg=arg+" ";
      }
      return arg;
      }
  const ands = function(a,number){
    for(let i = 1, j = number; i <= a; i+=2, j--){
    console.log(space(j)+string(i));
    }
   }
  const flipped = function(a,n){
    for(let i=a, j=n; i > 0; i-=2, j++){
    console.log(space(j)+string(i));
    }
   }
  ands(num,num/2-1);
  if (num%2 === 0){
  return flipped(num-1,0);
  } else {
  return flipped(num-2,1);
  }
}

dim(5,"&");