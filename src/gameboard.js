import createShip from "./ship.js"
const gameboard = () => {

    let state = {
        occupied: [],
        missedAttacks: [],
        directHits: [],
        board: []
    }
    const placeShip = (coordinates) => {
        let ship = createShip(coordinates.length)
        state.occupied.push({coordinates, ship})
        
    }
    const createBoard = () => {
        let array = ['A','B','C','D','E','F','G','H','I','J']
        
        array.forEach( item => {
            for ( let i = 1; i <= array.length; i++ ) {
                state.board.push(item + i)
            }})
        
    }
    const getBoard = () => {
        let board = state.board
        return board
    }
    const getHitTiles = () => {
        let missedAttacks = state.missedAttacks
        let directHits = state.directHits
        return { missedAttacks, directHits }
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
            state.directHits.push( attackCoordinates )
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
    return { 
                createBoard, 
                placeShip, 
                getBoardState, 
                receiveAttack, 
                hasRemainingShips, 
                getHitTiles, 
                getBoard
            }
}
let board = gameboard()
board.placeShip(['a4','b4','c4'])
board.placeShip(['d4','e4','f4'])
board.receiveAttack('d4')
board.createBoard()
export default gameboard