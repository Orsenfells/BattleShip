import createShip from "./ship.js"
const gameboard = () => {

    let state = {
        occupied: [],
        missedAttacks: []
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
        return console.log( emptyArray )
    }
    const getBoardState = () => {
        return state
    }
    const findResidingShip = ( coordinates ) => {
        return state.occupied.find( object => object.coordinates.includes( coordinates ) )
    }
    const receiveAttack = ( attackCoordinates ) => {
        let ship = findResidingShip( attackCoordinates )
        
        if(ship) {
            let position = ship.coordinates.indexOf( attackCoordinates ) + 1
            ship.ship.hit( position )
        } else state.missedAttacks.push( attackCoordinates )
        // if (state.occupied)
    }
    const hasRemainingShips = () => {
        let occupied = state.occupied
        for ( let i = 0; i < occupied.length; i++) {
            if( !occupied[i].ship.isSunk() ) {
                return true
            }
        } return false
    }
    return { createBoard, placeShip, getBoardState, receiveAttack, hasRemainingShips }
}
let board = gameboard()
board.placeShip(['a4','b4','c4'])
board.placeShip(['d4','e4','f4'])
board.receiveAttack('d4')
export default gameboard