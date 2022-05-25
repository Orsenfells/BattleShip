# Gameboard

Game board should be able to place ships at specific coordinates by calling the ship factory function  
    let state = occupied: [
                            {
                                coordinates: ['F5', F6, 'F7],
                                ship: testShip
                            },
                            {
                                coordinates: ['A5', A6, 'A7],
                                ship: testShip
                            }
                           ]
                missedShot: []
    state.ship.hit(1)
    state