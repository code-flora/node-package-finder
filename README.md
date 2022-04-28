# npf (node package finder)
🔍 Find packages from npm registry.

## Installation guide
1. **Get git repo link**: Click the green button labelled "Code" on the top right corner, then copy the HTTPS link to this git repo. If you're on small screen and can't find that button, I got you covered - the link is [here](https://github.com/code-flora/node-package-finder.git)

2. **Clone repo**: In the relevant terminal (I'm using git bash), cd to your preferred directory where the cloned files will be copied to. Enter `git clone (url you copied in step 1)`

3. **Install dependencies**: After the download is complete, install node modules by the entering the command `npm install`

4. **Run application**: Make sure you're in the cloned project directory. Enter `npm start` to run the application in development mode
\
Open http://localhost:3000 to view it in the browser.
\
The page will reload if you make edits.\
You will also see any lint errors in the console.
5.**Run test (Optional)**: Launch the test runner in interactive watch mode by entering `npm test` into the terminal.

## Navigation guide
In the src directory:
- **App.tsx** - Routing, Context Provider, global states setup
- **App.css** - Main CSS, for general setup and lifted classes
- **/components** - Global components
- **/context** - Context type declaration and creation
- **/utils** - General utility such as conversions functions, and fetch hooks
- **/views** - Contains directories holding different views. Each directory has the pattern:
1. page layout (componentName.tsx), 
2. its personal co-located styled (componentName.styles.tsx) unless the page layout file is short enough
3. and their local components if there are any.  