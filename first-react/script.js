// ReactDOM.render(
//   <h1>Welcome to my nightmare</h1>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <ul>
//     <li>Watch Movies</li>
//     <li>Listen to tunes</li>
//   </ul>,
//   document.getElementById('root')
// );
// function MainContent() {
//   return <h1>This is the main content </h1>;
// }

// ReactDOM.render(
//   <div>
//     <MainContent />
//   </div>,
//   document.getElementById('root')
// );

/*
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root

*/
// const h1 = document.createElement('h1');
// h1.textContent = 'Hello, React!';
// h1.className = 'header';
// document.getElementById('root').appendChild(h1);

// ReactDOM.render(
//   <h1 className='header'>Hello, React!''</h1>,
//   document.getElementById('root')
// );

// JSX
// const h1 = document.createElement('h1');
// h1.textContent = 'Hello, React!';
// h1.className = 'header';
// console.log(h1);

// const element = <h1 className='header'>Hello, React This is JSX</h1>;
// console.log(element);

// ReactDOM.render(element, document.getElementById('root'));
// const page = (
//   <div>
//     <h1 className='header'>This is JSX</h1>
//     <p>This is a paragraph</p>
//   </div>
// );

// ReactDOM.render(page, document.getElementById('root'));

Challenge:
/*
Create a navbar in JSX:
- Use the semantic `nav` element as the parent wrapper
- Have an h1 element with the brand name of your "website"
- Insert an unordered list for the other nav elements
- Inside the `ul`, have three `li`s for "Pricing",
"About", and "Contact"
- Don't worry about styling yet - it'll just be plain-looking HTML for now

*/
const navbar = (
  <nav>
    <h1>Epiq Websites</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)


ReactDOM.render(navbar, document.getElementById('root'));