function getKnightMoves(position) {
    var moves = [];
    var offsets = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
    var x = position[0], y = position[1];
    for (var _i = 0, offsets_1 = offsets; _i < offsets_1.length; _i++) {
        var offset = offsets_1[_i];
        var offsetX = offset[0], offsetY = offset[1];
        var new_x = x + offsetX;
        var new_y = y + offsetY;
        if (0 <= new_x && new_x < 8 && 0 <= new_y && new_y < 8) {
            moves.push([new_x, new_y]);
        }
    }
    return moves;
}
console.log(getKnightMoves([8, 8]));
