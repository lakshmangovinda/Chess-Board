
function getKnightMoves(position: [number, number]): [number, number][] {

    const moves: [number, number][] = [];
   
    const offsets: [number, number][] = [
      [2, 1], [2, -1], [-2, 1], [-2, -1],
      [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    const [x, y] = position;
    
   
    for (const offset of offsets) {
      const [offsetX, offsetY] = offset;
      const new_x = x + offsetX;
      const new_y = y + offsetY;
    
      if (0 <= new_x && new_x < 8 && 0 <= new_y && new_y < 8) {
      
        moves.push([new_x, new_y]);
      }
    }

    return moves;
  }

console.log(getKnightMoves([8,8]))