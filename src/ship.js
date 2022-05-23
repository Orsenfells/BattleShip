const createShipPositions = (shipLength) => {
    let positions = []
    for ( let i = 1; i < shipLength; i++ ) {
        positions.push( { position: i, isHit: false } )
    }
    return positions
}
function ship(length) {
  
    let shipState = {
                        length: length,
                        isSunk: false,
                        positions: createShipPositions(length),
                    }
    const hit = ( index ) => {
         let hit = shipData.find( key => key.position === index )
         hit.isHit = true
    }
    const status = () => {
        return shipData
    }
    return { hit, status }
}

module.exports = ship