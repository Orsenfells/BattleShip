const gameboard = () => {
    const createBoard = () => {
        let array = ['A','B','C','D','E','F','G','H','I','J']
        let emptyArray = []
        array.forEach( item => {
            for ( let i = 1; i <= array.length; i++ ) {
                emptyArray.push(item + i)
            }})
        return console.log(emptyArray)
    }
    return { createBoard }
}
let board = gameboard()
board.createBoard()
module.exports = gameboard