function solution(numbers, target) {
    let result = 0;
    
    function dfs(sum, depth){
        
        if(depth === numbers.length){
            if(sum === target) result += 1;
        } else{
            dfs(sum + numbers[depth], depth + 1)
            dfs(sum - numbers[depth], depth + 1)
        }                
    }
    dfs(0, 0)
    
    return result;
}