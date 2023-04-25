function solution(maps) {
  // 시작 (1,1)
  // 끝 (map.length, map[0].length)

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];
  
  let q = [[0, 0]];

  let visited = Array.from(Array(maps.length),()=> Array(maps[0].length).fill(false))
  let dis = Array.from(Array(maps.length),()=> Array(maps[0].length).fill(0))

  dis[0][0] = 1
  visited[0][0] = true
  while(q.length){
    let [currentX, currentY] = q.shift()
    
    for(let i = 0; i < 4; i++){
        let x = currentX+dx[i]
        let y = currentY+dy[i]
        
        if(x >= 0 && y >= 0 && x < maps.length && y < maps[0].length){
            if(maps[x][y] === 1 && visited[x][y] === false){
                q.push([x, y])
                visited[x][y] = true
                dis[x][y] = dis[currentX][currentY] + 1
            }
        }
    }
  }
  return dis[maps.length-1][maps[0].length-1] === 0 ? -1 : dis[maps.length-1][maps[0].length-1]
}
