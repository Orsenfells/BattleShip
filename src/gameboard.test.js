import gameboard from './gameboard'

test('calling placeShip() on a gameboard will add an object to board state containing a coordinates property with the coords passed', () => {
    // Arrange
    let board = gameboard()
    
    // Act
    board.placeShip( [ 'A4','B4','C4' ] )
    let coordinatesProp = board.getBoardState().occupied[0].coordinates

    // Assert
    expect(coordinatesProp).toEqual(["A4", "B4", "C4"])
})

test('Calling placeShip() on a gameboard will add an object to the board state containing a ship property', () => {
    // Arrange
    let board = gameboard()

    // Act 
    board.placeShip( [ 'A4','B4','C4' ] )
    let object = board.getBoardState().occupied[0].ship
    // Assert
    expect(object).toEqual( expect.anything() )
})
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