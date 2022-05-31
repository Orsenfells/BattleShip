import gameboard from './gameboard'
// incoming command message
test('calling placeShip() on a gameboard will add an object to board state containing a coordinates property with the coords passed', () => {
    // Arrange
    let board = gameboard()
    
    // Act
    board.placeShip( [ 'A4','B4','C4' ] )
    let coordinatesProp = board.getBoardState().occupied[0].coordinates

    // Assert
    expect(coordinatesProp).toEqual(["A4", "B4", "C4"])
})
// incoming command message
test('Calling placeShip() on a gameboard will add an object to the board state containing a ship property', () => {
    // Arrange
    let board = gameboard()

    // Act 
    board.placeShip( [ 'A4','B4','C4' ] )
    let object = board.getBoardState().occupied[0].ship
    // Assert
    expect(object).toEqual( expect.anything() )
})
//incoming command message
test('receiveAttack sends the hit function to the correct ship if a ship is hit', () => {
    // Arrange 
    let board = gameboard()
    board.placeShip( [ 'A4','B4','C4' ])

    // Act 
    board.receiveAttack('A4')
    let object = board.getBoardState().occupied[0].ship.status().positions
    // Assert
    expect(object).toEqual([
                            {position: 1, isHit: true}, 
                            {position: 2, isHit: false},
                            {position: 3, isHit: false},
                        ])
})
// incoming command message
test('receivedAttack keeps track of missed attacks ', () => {
    // Arrange 
    let board = gameboard()
    board.placeShip( [ 'A4','B4','C4' ])

    // Act 
    board.receiveAttack('D4')
    let missedAttacks = board.getBoardState().missedAttacks

    //Assert
    expect(missedAttacks).toEqual(['D4'])
})
// incoming query message 
test('hasRemainingShips checks state.occupied for any remaining ships that have not been sunk', () => {
    // Arrange 
    let board = gameboard()
    board.placeShip( [ 'A4','B4','C4' ])
    board.placeShip( [ 'A1','B1','C1' ])
    board.placeShip( [ 'F4','G4','H4' ])

    // Act 
    board.receiveAttack( 'A4' )
    board.receiveAttack( 'B4' )
    board.receiveAttack( 'C4' )
    board.receiveAttack( 'A1' )
    board.receiveAttack( 'B1' )
    board.receiveAttack( 'C1' )
    board.receiveAttack( 'F4' )
    board.receiveAttack( 'G4' )
    board.receiveAttack( 'H4' )

    let remainingShips = board.hasRemainingShips()
    // Assert 
    expect(remainingShips).toBe(false)

})