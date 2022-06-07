
const player = (name, isComputer) => {
    let playerState = {
        name,
        isComputer
    }
    const sendAttack = (coordinate, board) => {
        board.receiveAttack(coordinate)
    }
    
    const sendRandomAttack = (board) => {
        let legalMoves = board.getLegalMoves(); 
        let randomCoordinate =  legalMoves[Math.floor(Math.random() * legalMoves.length)]
        board.receiveAttack(randomCoordinate)
    }
    return { sendAttack, sendRandomAttack}
}

export default player


