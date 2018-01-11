# Mario.js
## by Dami Apoeso

Tutorial found [here](https://www.youtube.com/watch?v=g-FpDQ8Eqw8&list=PLS8HfBXv9ZWWe8zXrViYbIM2Hhylx8DZx)

##### Overview
* In this Hack-a-thing assignment, I attempted to recreate the classic videogame, SuperMario in Javascript. This is required implementing various aspects of Javascript's graphics API to draw on the fly, as well as understanding basic game physics.

##### Things I learned
* A seemingly simple game like SuperMario has a lot more complex than it looks on the surface, a ton of small things to pay attention to.
* For basic tile collision (x and y), the program will behave in a strange way if you attempt to simultaneously check x and y for collision. Collision actually works much smoother if x is checked and accounted for first, then y to follow.
* In order to have the game run at the same speed, regarding the frame rate of the machine used, there needs to be a small manipulation of time.
* Layering and Traits, highly important.

##### What didn't work
* Automatic Scrolling
* inability to jump forever
* sprite changing (when moving, jumping, etc)
