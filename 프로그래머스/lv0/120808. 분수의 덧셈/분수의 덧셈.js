function solution(numer1, denom1, numer2, denom2) {
    let addNumer  = (numer1 * denom2) + (numer2 * denom1)
    let addDenom  = denom1 * denom2
    let maximum = 1;
    
    for(i = 0; i <= addNumer; i++){
        if(addNumer % i === 0 && addDenom % i === 0){
            maximum = i;   
        }
    }
    
    
    return [addNumer/maximum, addDenom/maximum]
}