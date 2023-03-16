function solution(n) {
    let factorial = 1;  // 팩토리얼을 담을 변수
    
    for(i = 1; i <= n; i++ ){
        factorial = factorial * i; // n까지 i로 팩토리얼 계산
        
            
        if(factorial === n){    // 만약 facrotial 값이 n이랑 같다면
            return i;           //  i가 정수값이 된다.
        } else if(factorial > n){ // 만약 facrotial 값이 n보다 크다면
            return i -1;        // i -1 이 가장 큰 정수가 된다.
        }        
    }
}