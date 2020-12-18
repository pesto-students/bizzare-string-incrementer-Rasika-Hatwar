// Start your implementation here

function bizarreStringIncrementer(str) {
const regex =/\d+$/;
let matchResult = regex.test(str);

const incrementNumber=numStr=>{
  const next =String(parseInt(numStr,10)+1);
  if(next.length < numStr.length){
    const pad = "0".repeat(numStr.length-next.length);
    return pad.concat(next);
  }
  return next;
}

if (!matchResult) return str+=1;
else str = str.replace(regex,incrementNumber);

return str;
}

export default bizarreStringIncrementer


