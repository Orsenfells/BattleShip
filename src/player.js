
const player = (name, isComputer) => {
    let playerState = {
        name,
        isComputer
    }
    const sendAttack = (coordinate, board) => {
        board.receiveAttack(coordinate)
    }
    const sendRandomAttack = () => {
        
    }
    return { sendAttack }
}

export default player


