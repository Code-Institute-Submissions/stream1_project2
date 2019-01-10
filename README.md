# Escape Rooms
## Interactive Development Milestone Project for the Code Institute

The ask for this brief was to build a front-end only website using the technologies learned throughout the Interactive Front-end Development module. I chose to build a project of my own design with scope similar to that of the briefed memory game. I chose a logic based game as I was interested in employing some of the logic based approaches taught during this module. I was also inspired by a recent trip to an escape room in Dublin, which included many logic based challenges, one in particular, a button sequence game with riddles providing the correct sequence. Some of the people I was with wanted to quit this game, but I was determined to figure it out and eventually did so. I left wondering how they had built the logic and hence my choice of project.

My goal for this project was to demonstrate my understanding of a logic based approach incorporating javascript programming with HTML and CSS, providing dynamic behaviour, storing information and handling requests. I also wanted to make a exciting game that the user would immediately be drawn to. Aside from providing simple intuitive user centric design, I also borrowed language and visuals from a well known horror franchise to create an appealing game format.

A live version of the site can be viewed [here](https://al3xk3nny.github.io/stream1_project2/), hosted on GitHub Pages.

## UX

The site is a single page application (SPA), using links and buttons to navigate the site and reset/control the site functionality. The main fields of view are the landing page, which includes game selection, and the three game pages.

The landing page includes an introduction, instructions on how to play the game and call-to-action to select a game area, cabin, factory or house. The "Clown Face" has a vibration hover effect for added value. The page is fully responsive and content size and layout has been appropriately accommodated for mobile, tablet and desktop. The text reveal hover affect has been accommodated for on mobile and tablet with the appearance of a title. Also, the "Clown Face" disappears on smaller devices to reduce clutter.

The three game pages are identical in layout and differ only in content and logic. The clues on the right hand side (on desktop, below on mobile and tablet) provide the correct sequence if the user can figure it out. **Important to note,** these clues are not sequential, the user needs to read all clues before they decide on the correct sequence. Once the user starts to click the buttons, the "Clown" will provide narration on whether or not they have keyed in the correct sequence. If the user makes a mistake, they lose a life and have to start the sequence again. If the user loses all 3 lives, they are informed via a modal that they have failed and offered the opportunity to try again, or choose another game area. If they are key in the correct sequence, they are congratulated, again via a modal, and offered the opportunity to play the remaining game areas. Once the user has successfully completed all game areas they are informed as such and offered the opportunity to reset the game.

***For convenience, I have included the correct sequences at the bottom of this READEME document.***

Again, the game pages are fully responsive and content and layout has been appropriately accommodated  for mobile, tablet and desktop.

**No template was used in the building of this site.**

Wireframes for this project can be viewed in the "wireframe" folder above. Wireframes were created using [Balsamiq](https://balsamiq.com/).

User requirements/stories were met in the following way;
- As a player of the game, I want to select a game, so I can play that game.

A player selects a game on the landing page. There are three to choose from. Simply click on the game you wish to play and you will be taken to the appropriate game area.

- As a player of the game, I want to quit one game and try another, so I can try a different game.

There is no navigation back to the landing page, nor to another game area whilst in another game. I considered including this, but it only increased clutter on an already busy page. The game sequence is short, if you lose three lives you are offered an opportunity to try another game. Losing three live is just three wrong clicks away.

## Technologies used

- HTML
    - This project uses HTML for site structure.
- CSS
    - This project uses CSS for styling.
- JavaScript
    - This project uses JavaScript for interactivity.
- [Bootstrap 4](https://getbootstrap.com/)
    - This project uses Bootstrap 4 for additional site structure, styling, but also for interaction and most importantly responsiveness. 
- [Hover CSS](http://ianlunn.github.io/Hover/)
    - This project uses Hover CSS for minor hover effects. 
- [Google Fonts](https://fonts.google.com/)
    - This project uses Google Fonts for styling.

## Features

### Existing features
- Links and buttons allowing the user to navigate the site and reset/control the site functionality.

### Features left to implement
- I'd like to include music to add value to the gaming experience.
- I'd like to include a timer on the games to increase the stakes of the gaming experience.

## Testing

Cross browser and multi-device testing was employed to test site responsiveness using [BrowserStack](https://www.browserstack.com).

User testing was carried out to ensure;
- All links and buttons worked as desired.
- All hover effects worked as desired.

## Deployment

This site is hosted on GitHub pages and is deployed from the master branch.

In order to run this site locally, in your terminal, type or paste; git clone https://github.com/al3xk3nny/stream1_project2

## Credits

### Content

- Language and visuals were inspired by the ["Saw"](https://en.wikipedia.org/wiki/Saw_(franchise) horror movie franchise.

### Media

- Images used were sourced from [Pexels](https://www.pexels.com/).
- Some images used were sourced from Google Images, appropriately filtered and labelled for re-use.
- Fonts used were sourced from Google Fonts.

### Acknowledgements

I would like to acknowledge the following resources who inspired my project concept.
- As stated above, language and visuals were inspired by the ["Saw"](https://en.wikipedia.org/wiki/Saw_(franchise) horror movie franchise.
- Also stated above, my visit to [Go Quest](https://goquest.ie/) inspired my idea to create an escape room game.

I would also like to thank my lecturer, Matt Rudge for his dedicated and competent direction throughout the duration of stream 1 and my TA, Michael Park for his advice and encouragement during this project.


## Correct Button Sequences

### Game 1, Abandoned Cabin
- 3, Couch
- 2, Lamp
- 4, Radio
- 1, Door
- 6, Chair
- 5, Window

### Game 2, Abandoned Factory
- 4, Radio
- 1, Door
- 3, Couch
- 5, Window
- 2, Lamp
- 6, Chair

### Game 3, Abandoned House
- 2, Lamp
- 6, Chair
- 1, Door
- 4, Radio
- 3, Couch
- 5, Window