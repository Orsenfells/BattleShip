import player from './player';
import gameboard from './gameboard';

jest.mock('./gameboard')
test('players can send a command to attack the enemy board', () => {
    let testPlayer = player( 'George' )
    let mockMethod = jest.fn()

    gameboard.mockImplementation( () => {
        return { receiveAttack: mockMethod}
    })
    const mockboard = gameboard()
    testPlayer.sendAttack('A4',mockboard)
    expect(mockboard.receiveAttack).toHaveBeenCalledWith("A4")

})
test('computers can send a random attack to the enemy board', () => {
    let testPlayer = player( 'George' )
    let mockMethod = jest.fn()
    let mockMoves = jest.fn()
    mockMoves.mockReturnValueOnce(['A1', 'B1'])
    gameboard.mockImplementation( () => {
        return { receiveAttack: mockMethod, getLegalMoves: mockMoves}
    })
    const mockboard = gameboard()

    testPlayer.sendRandomAttack(mockboard)
    expect(mockboard.receiveAttack).toHaveBeenCalled()
})
