# BattleShip
Making a battleship app following the guidelines in the odin project, and applying what I've learned about TDD through TOP to reinforce the methodology of test driven development in my mind.

tdd "rules"
 - Test incoming query messages by making assertions about what they send back
 - test the interface (not the implementation)
 - test incoming command messages by making assertions about direct public side effects

# ships

  maybe if i modify the parameter the ship factory function takes, where instead of taking the length
  like it does now, I cause it to take the specific positions it will occupy on the board.
  length will be gathered from the amount of positions given
 # GameBoard

    - Gameboards should be able to place ships at specific coordinates by calling the ship factory function
      -If coordinate is occupied, ship can not be placed there
      - ships can not be placed right next to each other
      placeShip(coordinates) {
        let newShip = ship(3)
      }
    - Gameboard should have a receiveAttack function that takes a pair or coordinates, determines whether or 
    not the attack hit a ship and then sends the hit function to the correct ship. or record the coordinates of the missed shot
      receiveAttack(coordinates) {

      }
    - Gameboards should keep track of missed attacks so they can display them properly
    - Gameboards should be able to report whther or not all of their ships have been sunk

       A B C D E F G H I J 
      1
      2
      3
      4
      5
      6
      7
      8
      9
      10
      [a1,a2,a3,a4,a5,a6,a7,a8,a9,a10]
    [{
        a1, b1,c1,d1,e1,f1,g1,h1,i1,j1
    },
    {
        
    }
    ]