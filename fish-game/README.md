# Menagerie Project

Ben Potter, IGME 102, Section 1

**Description:**  

- A beach environment with randomly spawned flamingos and fish that you can interact with

**User Responsibilities:**

- Hover over a creature to tickle it
  - A fish will change directions when you hover over any part of its body
  - A flamingo will duck down when you hover over its neck
- Click a creature to replace it with another (smaller) creature
  - There is a 66% possibility a different type of fish will spawn in its place when clicked
- Clicking and holding will show a circle around the mouse

**Caveats or Known Issues:**

- Redundant code when generating land and water
- Land and water calculations are poorly optimized and should be refactored into its own function that runs during setup() and windowResize()
- Creature locations are not adjusted based when the window is resized
- Flamingo images could be optimized to be 50% smaller without any visual difference
- There is no callback function when the creature images are loaded, but it ended up working with no errors

**Notes:** 

- This project was really fun and I will definitely fix these caveats in my free time
- Flamingo Sprite: https://www.gamedeveloperstudio.com/graphics/viewgraphic.php?item=1c5w418c4p2t4o3u0n