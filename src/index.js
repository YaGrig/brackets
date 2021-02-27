module.exports = function check(xo, y) {
  x = xo.split(''); 
  let sameForSeven = [];
  let sameForEight = [];
  let indexSameSeven = [];
  let indexSameEight = []; 
  let same = [];
  let indexSame = []; 
  let open = [];
  let closed = [];
  let stack = [];
  let closedindex, openindex = 0;
  for (i = 0; i<y.length; i++){
      open.push(y[i][0]);
      }
  for (i = 0; i<y.length; i++){
    closed.push(y[i][1]);
    } 
  for (i =i=0; i < x.length; i++){
    if (open.includes(x[i]) && closed.includes(x[i])){
      indexSame.push(x.indexOf(x[i]))
      same.push(x[i])
      x.splice(x.indexOf(x[i]),1,'a')
    }
  }
  for (i = 0; i<open.length; i++){
      if (open.includes(open[i]) && closed.includes(open[i])){
        open.splice(open.indexOf(open[i]),1)
        closed.splice(closed.indexOf(closed[i]),1)
      }
    }
    for (i = 0; i<open.length; i++){
      if (open.includes(open[i]) && closed.includes(open[i])){
        open.splice(open.indexOf(open[i]),1)
        closed.splice(closed.indexOf(closed[i]),1)
      }
    }
    if(same.includes('7') || same.includes('8')){
    for (i=0; i < same.length; i++){
      if(same[i]==='7'){
        sameForSeven.push(same[i])
        indexSameSeven.push(i)
        same.splice(i,1,'a')
      }
      if(same[i]==='8'){
        sameForEight.push(same[i])
        indexSameEight.push(i)
        same.splice(i,1,'b')
      }
      }
 
      for (i=0; i < sameForSeven.length; i=i+2){
      sameForSeven.splice(i,1,sameForSeven[i]+'!')
  }
  for (i=1; i < sameForSeven.length; i=i+2){
      sameForSeven.splice(i,1,sameForSeven[i]+'!!')
  }
  for (i=0; i < sameForEight.length; i=i+2){
    sameForEight.splice(i,1,sameForEight[i]+'!');
  }
  for (i=1; i < sameForEight.length; i=i+2){
    sameForEight.splice(i,1,sameForEight[i]+'!!');
  }
  for (i = 0; i<same.length;i++){
    same.splice(indexSameSeven[i],1,sameForSeven[i])
  }
  for (i = 0; i<indexSameEight.length;i++){
    same.splice(indexSameEight[i],1,sameForEight[i])
  }
    }
  for (i=0; i < same.length; i=i+2){
    same.splice(i,1,same[i]+'!')
  }
  for (i=1; i < same.length; i=i+2){
    same.splice(i,1,same[i]+'!!');
  }
  
  for (i=0; i< same.length; i++ ){
    x.splice(indexSame[i],1,same[i])
  }
   for (i=0; i< same.length; i= i+2 ){
     if (!open.includes(same[i])){
       open.push(same[i])
     }
     }
     for (i=1; i< same.length; i= i+2 ){
     if (!closed.includes(same[i])){
       closed.push(same[i])
     }
     }
 
    for (i=0; i < x.length; i++){
      openindex = open.indexOf(x[i]);
      if(openindex !== -1){
        stack.push(openindex);
        openindex = 0;
     } 
    closedindex = closed.indexOf(x[i]);
    if (closedindex !== -1){
      openindex = stack.pop();
      if (closedindex !== openindex){
        return false;
      }
    }
  }
  if (stack.length !== 0){
    return false;
  }
  return true;
  }