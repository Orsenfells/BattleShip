
const gameboard = () => {

    let state = {
        occupied: []
    }
    const placeShip = (coordinates) => {

    }
    const createBoard = () => {
        let array = ['A','B','C','D','E','F','G','H','I','J']
        let emptyArray = []
        array.forEach( item => {
            for ( let i = 1; i <= array.length; i++ ) {
                emptyArray.push(item + i)
            }})
        return console.log(emptyArray)
    }


    return { createBoard, placeShip }
}
let board = gameboard()
board.createBoard()
board.placeShip()
module.exports = gameboard