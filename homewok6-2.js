const A = function(s) {
  let spc= "";
  for (let i=0; i<s; i=i+1){
    spc = spc+" ";
  } ;
    return spc;
}

const star = function (n){
  let str = "";
  for (let j=1; j<=n; j=j+1){
      str = str+"*"
  };
     return str;
};
const together = function(m,n){
	console.log(A(m)+star(n));

};


 const star2 = function(k) {
     if(k%2===0) {
	  k=k+1;
     }


     for(let i=0; i<(k+1)/2; i=i+1){
					together((k-1)/2-i, 2*i+1);
				};

             for(let i=0; i<(k-1)/2; i=i+1) {
					together(i+1, k-2-2*i);
				};


};
	      star2(5);