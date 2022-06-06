//ships will  be objects that include their length, where they've been hit and whether
// or not they've been sunk
import ship from './ship'
// incoming command message
test('hit() takes a number and marks that position as hit', () => {
    let newShip = ship(3)

    newShip.hit(1)

    expect(newShip.status().positions).toEqual([
                                       {position: 1, isHit: true}, 
                                       {position: 2, isHit: false},
                                       {position: 3, isHit: false},
                                    ])
})
// incoming query message
test('isSunk() reports true, when all positions are hit', () => {
    let testShip = ship(3)
    testShip.hit(1)
    testShip.hit(2)
    testShip.hit(3)

    expect(testShip.isSunk()).toBe(true)
})
// incoming query message
test('isSunk() reports false, if one position is not hit', () => {
    let testShip = ship(3)
    testShip.hit(1)
    expect(testShip.isSunk()).toBe(false)
})
