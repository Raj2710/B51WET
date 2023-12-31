Blog App Reuirements
1. Create Blogs
    1. Inputs for blog data
    2. Preview of blog
2. Manage Blogs
    1. List all blogs
    2. Activate and Deactivate blogs
    3. Edit Blogs
    4. Delete Blogs
3. Display All Blogs
    1. Should look like news feed
    2. Display only allowed or active blogs


Packages used:
1. npm i axios
2. bootstrap
3. react-bootstrap
4. react-router-dom


CDN Used
1. Fontawesome

CSS Used
1. React Bootstrap

Fontawesome using react
1. npm i --save @fortawesome/fontawesome-svg-core -- for icons
2. npm i --save @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
3. npm i --save @fortawesome/react-fontawesome@latest
4. npm install babel-plugin-macros



Redux Steps
1. npm install @reduxjs/toolkit react-redux
2. Create Redux Store
3. Import store and Provider in main.jsx
4. Wrap App component with Provider and pass the store props to Provider
5. Create a Redux State Slice
6. Provide the initial state and reducer functions
7. Export the actions from the reducer functions
8. Export the blog slice reducer
9. Import BlogSlice Reucer in Store and pass it to store-reducers.