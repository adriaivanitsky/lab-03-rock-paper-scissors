alriglht listen up self 
here's the plan 

we gonna need HTML:
* 3 radio button inputs with type, name, id, and value
* button to submit
* text field for displaying result
* text field for displaying number of wins, losses, and draws

STATE (one day i'll fully grasp what this means)
* user choice
* wins, losses, draws, total plays
* random throw

EVENTS to listen for
* when the button is clicked
  -generate a random throw
  -get users input
  -compare random throw to users choice
  -if they guess correctly, increment wins, else increment losses
  -display results

  use query selector inside event listener instead of writing else if statements
  reference julie's demo code if u forget what that looks like

  