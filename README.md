# React-course-v1-final-task
Create a simple application with the list of pokemons (pokedex) using the open [pokemon API](http://pokeapi.co)

# Technical Specification for the Pokedex Project in React

## General Information
The Pokedex project is developed using the React library, along with MobX or Redux for state management. The code should follow best practices and be easily readable. The project should be divided into business logic and presentational components to improve maintainability.

## Requirements
* The design of the app is not important, but the overall user experience and usability of the application should be good. Existing UI libraries like material ui or **ant.design** can be used
* The app must be developed with [React](https://legacy.reactjs.org/), [MobX](https://mobx.js.org/README.html) or [Redux](https://redux.js.org/) (pure Redux, RTK, Thunk, Saga - all of this is available) in ES6+.
* Source code should be open for mentor on GitHub
* Application should be responsive (look good both on mobile and desktop)
* Code should be linted. You can use ready-made linter settings from the provided boilerplate or customize your own (stricter)
* The application should be deployed online. Heroku, github pages, netlify or other.

## Application Structure

### Components
1. **Header:**
   - Navigation menu (if applicable)
   - Search panel
   - Filters
   - Present on all pages

2. **Content:**
   
   Note: One of these pages at one time, and not all three at once:
   - OR Main Page:
     - Gallery of cards with information about Pokemon (name, avatar, type, main characteristics)
     - Pagination with the option to choose the number of items per page (10 / 20 / 50)
     - Name filter using a search box
     - Type filter using tags (ability to select multiple types)
   - OR Selected pokemon page
   - OR Page with caught pokemon (with the date of capture)

4. **Footer:**
   - Link to the project repository
   - Link to the technical specification
   - Additional information (if applicable)
   - Present on all pages

### Navigation
 **React Router 6:**
   - Use React Router 6 to organize navigation within the application.
   - Configure routes for the main page, individual Pokemon page, and other necessary pages.

## Functional Requirements

 **Main Page:**
   - Display a gallery of cards with information about Pokemon.
   - Information about each Pokemon should include name, avatar, type, and main characteristics.

 **Page with caught pokemon**
   - similar to the Main Page, but only captured Pokemon are presented

 **Pagination:**
   - Implement pagination with the ability to choose the number of displayed items per page.

 **Filtering:**
   - Ability to filter Pokemon by name using a search box.
   - Ability to filter by type using tags (ability to select multiple types).

 **Responsiveness:**
   - Ensure the application displays properly on different devices (mobile and desktop).

 **Library Integration:**
   - Use MobX or Redux library for state management.

  **BE and BD:**
   - For pseudo-backend and database use [json-server](https://www.npmjs.com/package/json-server)

## Code Requirements

1. **React Hooks:**
    - Use React Hooks for state management and component lifecycle.

2. **Code Readability:**
    - Follow coding standards and best practices for writing readable code.

3. **Maintainability:**
    - Separate business logic and presentational components for ease of future maintenance.

4. **Linting:**
    - Code should be linted. You can use ready-made linter settings from the provided boilerplate or customize your own (stricter)

## Additional Tasks (Bonus)

- [ ] Documentation: provide documentation for the code and its structure (create an informative and visually appealing README file.)
- [ ] **Unit testing**
- [ ] SASS, Less or any other css preprocessor
- [ ] **Webpack (if applicable)**
- [ ] **CSS animations**
- [ ] Custom hooks
- [ ] **Additional Features:** Implement additional functionalities, such as sorting, detailed Pokemon information, and others.
- [ ] **Dark Theme:** Implement the ability to switch between light and dark themes.
- [ ] **Localization:** Implement the ability to localize the application for different languages.


## Evaluation Criteria

- [ ] **Minimal Viable Product:**
    - Deliver a minimal viable product within a short timeframe (by New Year 2024).

- [ ] **Code Convention:**
    - Follow good coding conventions and style guides.

- [ ] **Implementation Prioritization:**
    - Know what is important to implement now and what can be deferred to future iterations.

- [ ] **Library Integration Proficiency:**
    - Demonstrate the ability to properly integrate libraries into the application.




## Notes
Please note that these requirements may be supplemented or modified during development in consultation with the client.

