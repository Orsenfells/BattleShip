const createShipPositions = (shipLength) => {
    let positions = []
    for ( let i = 1; i <= shipLength; i++ ) {
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
    const getShipPosition = ( position ) => {
        return shipState.positions.find( obj => obj.position === position )
    }
    const hit = ( position ) => {
        let hit = getShipPosition( position )
        hit.isHit = true;
    }
    const isSunk = () => {
        let hits = 0;
        let positions = shipState.positions;
        for ( let position of positions ) {
            if (position.isHit) {
                hits += 1
            } else break;
        }
        return hits === length ? true : false
    }
    const status = () => {
        return shipState
    }
    return { hit, status, isSunk }
}

module.exports = ship