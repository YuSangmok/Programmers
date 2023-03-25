function solution(angle) {
    let acute = 1;
    let right = 2;
    let obtuse = 3;
    let flat = 4;
    
    if(angle === 0){
        return angle;
    }
    
    if(angle < 90 ){
        return acute;
    } else if(angle === 90){
        return right;
    } else if(angle > 90 && angle < 180){
        return obtuse;
    } else if (angle === 180){
        return flat;
    }
}