# countries-application
React Single Page Web Application that interacts with the REST Countries API
## Background
This is my first React project, I have some experience with Javascript, HTML and CSS. I have built Windows user interfaces that handle events and state
## Approach
- I'll be using ChatGPT and other online resources to work on the application and learn React
- I'm time boxing it to spend a maxmimum of 6 hours
- I'll see how far I get and if necessary after about 5.5 hours write a **Further Work** section
- Priorities are learning and functionality. Quality and polish will come later if time allows
- I will ask ChatGPT for help with specific tasks like ¨create a button¨, "add specific behaviour to button" as opposed to feeding it the assignment, getting it to create a solution and then spending hours trying to fix it. Here's my [ChatGPT transcript](ChatGPT_transcript.pdf)
## Plan
1. Environment set up (done)
2. Add ag-grid control that does nothing (done)
3. Populate grid from API (done)
4. Add country detail details control that does nothing (done)
5. Populate country details when country clicked (done)
6. Add search functionality (in progress)
7. Add favourites functionality (not started)
## Further Work
1. Complete the prototype
2. Write comments, user documentation, developer documentation
3. Write automated tests: unit tests of components, end to end tests of application
4. Establish React coding standards and update code to comply with them
5. Seek code review from React expert and incorporate their advice
## Wireframe
My first thought after reading the requirements is that it will look like this. Created in Paint for the sake of speed
![wireframe](wireframe.png)
## Diary
### 1 hour complete
- countries-application.html created
- Repo and initial development environment set up with fresh VS code install
- file:// rendering of app
### 2 hours complete
- Dev env wasn´t complete, needed npm
- Installed that and with ChatGPT's help I have a working ag-grid with hard coded data
### 3 hours complete
- Grid loading all countries from API
- Name, population, language, currency done
- Flag in progress, rending <img as text not image
### 4 hours complete
- Flag rendering is working, ChatGPT wasn't very helpful. Finally got it to work by changing cellRendererFramework to cellRenderer which was a total guess
### 5 hours complete
- Coded grid selection change to update common name in details component
### 6 hours complete
- Begun work on search box, there are errors and it doesn't work
- Created Further Work section
- Tidied up CountriesGrid.js

