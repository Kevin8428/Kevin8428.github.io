BLACKJACK

Technology Used--------
HTML, CSS and Javascript.

Approach--------
At the window.onload event listeners connect the cards, hit, clear and dealer cards functions
to the viewed buttons.

The player functions are contained within a player constructor so that multiple
players will be able to play (not yet completed).

All cards go through a "transformation" function which turns aces into value 11 and
all face cards into a value of 10.

Dealer will hit until beating the player or exceed 21 (bust).

Player and dealer each start with 100 chips.

Unsolved Problems--------

There is no true deck yet, so values can be repeated.
There is no image associated with the card/value.
The player constructor hasn't been built out to functionally allow for multiple players.
