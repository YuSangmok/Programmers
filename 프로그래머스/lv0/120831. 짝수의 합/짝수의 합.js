function solution(n) {
    let result = 0;
    
    for(i = 2; i <= n; i++){
        if(i % 2 === 0){
            result = result + i;
        }
    }
    return result;
}