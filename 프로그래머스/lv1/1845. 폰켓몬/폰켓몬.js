function solution(nums) {
    const friend = nums.length/2
    const set = new Set(nums);
    const kind =[...set];
    
    return friend < kind.length ? friend : kind.length;
}