//ships will  be objects that include their length, where they've been hit and whether
// or not they've been sunk

const ship = require('./ship');

xtest('hit() takes a number and marks that position as hit', () => {
    let newShip = ship(3)

    newShip.hit(1)

    expect(newShip.status()).toEqual([
                                       {position: 1, isHit: true}, 
                                       {position: 2, isHit: false},
                                       {position: 3, isHit: false},
                                    ])
})

// test.todo('calculates whether ship is sunk', () => {

// })
