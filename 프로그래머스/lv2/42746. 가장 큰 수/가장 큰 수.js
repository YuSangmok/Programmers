function solution(numbers) {
  let answer ='';
  let newArr = numbers.map(function(el){
    return `${el}`
  });
  newArr.sort(function(a,b){return (b+a)-(a+b)})
  answer = newArr.join('')
  return answer[0] === "0" ? "0" : answer;  
}