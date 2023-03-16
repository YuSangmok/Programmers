function solution(i, j, k) {
    let block = '';
    let result = 0;
    
    for (i = i; i <= j; i++){
        block = block + i;
    }
    for(let i = 0; i <= block.length; i++){
        if(block[i] === String(k)){
            result ++;
        }
       
    }
     return result;
}