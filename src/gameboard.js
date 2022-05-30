import createShip from "./ship.js"
const gameboard = () => {

    let state = {
        occupied: []
    }
    const placeShip = (coordinates) => {
        let ship = createShip(coordinates.length)
        state.occupied.push({coordinates, ship})
        
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
    const getBoardState = () => {
        return state
    }
    const receiveAttack = () => {

    }
    return { createBoard, placeShip, getBoardState, receiveAttack }
}
let board = gameboard()
board.placeShip(['a4','b4','c4'])

export default gameboard