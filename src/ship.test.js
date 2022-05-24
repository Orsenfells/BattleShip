//ships will  be objects that include their length, where they've been hit and whether
// or not they've been sunk

const ship = require('./ship');



test('hit() takes a number and marks that position as hit', () => {
    let newShip = ship(3)

    newShip.hit(1)

    expect(newShip.status().positions).toEqual([
                                       {position: 1, isHit: true}, 
                                       {position: 2, isHit: false},
                                       {position: 3, isHit: false},
                                    ])
})

test('isSunk() reports true, when all positions are hit', () => {
    let testShip = ship(3)
    testShip.hit(1)
    testShip.hit(2)
    testShip.hit(3)

    expect(testShip.isSunk()).toBe(true)
})
