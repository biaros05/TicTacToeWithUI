!(function() {

document.addEventListener("DOMContentLoaded", function(e) {

    // ...stateOfMyBoard -> spreads array into 9 arguments

    /** @function checkBoard
     * Verifies a Tic Tac Toe board. The board is represented in the 9 arguments as shown:
     * 
     *  0  |  1  |  2
     * ---------------
     *  3  |  4  |  5
     * ---------------
     *  6  |  7  |  8
     * 
     * @param  {...any} squares an array of length === 9 representing a Tic Tac toe board: O or X in each position, or false for no play at a location.
     * @returns O if O has won the game, X if X has won the game, or false if no one has won the game
     */
    function checkBoard( ...squares) {
        if( squares.length !== 9  ) {
            throw("checkBoard requires exactly 9 arguments");
        }

        if( squares.findIndex( s => s !== 'O' && s !== 'X' && s !== false) >= 0) {
            throw("checkBoard received an invalid value, please verify your arguments");
        }
        
        // Make an array of lines to verify on the board passed in
        var lines = [   [0, 1, 2], [3, 4, 5], [6, 7, 8],    // Rows
                        [0, 3, 6], [1, 4, 7], [2, 5, 8],    // Columns
                        [0, 4, 8], [2, 4, 6]            ];  // Diagonals

        // Convert every position on the winning lines to the board's value at that position
        const combos = lines.map( line => line.map( x => squares[x]) );

        // Check every line: it must have the same non-false value at each position
        const lineResults = combos.map( combo => combo[0] === combo [1] && combo[1] === combo[2] && combo[0]);

        // Check if any line contained a winner
        const results = lineResults.reduce( (acc, cur) => { 
            if(acc !== false) return acc;
            else if(cur !== false) return cur;
            else return false }, false);

        return results;
    }

    window.checkBoard = checkBoard;

})

}());