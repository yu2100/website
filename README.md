Questions
1. List five significant features of React

Answer
a. performance - ReactJS is a great performer and this feature makes it much better than other frameworks because it manages a virtual DOM.
b. Virtual Document Object Model(VDOM) - a virtual DOM is a representation of the original DOM object. when there is any modifications in the web application, the entire UI is re-rendered in virtual DOM representation. Then it checks the difference between the previous DOM representation and the new DOM. Once its done, the real DOM will update only the things that actually changed.
c. components - React is madeup of multiple, reusable components and each component has its own logic
d. one-way data binding - This makes the application more control and flexibility thereby increasing efficiency
e. Extensions - it supports various extenssions for application architecture.

2. List five major advantages of React

Answer
a. it has reusable components
b. react is easy to learn and used for easy creation of dynamic applications
c. its used in the development of both web and mobile apps
d. it has undirectional data flow
e. it has dedicated and reliable software development tools for easy debugging


3. What is the name of the software Engineer that created React? Also, which company owns React?

Answer- Jordan Walke and the company is facebook

4. What are the notable differences between HTML and JSX? Give at least 3 of them

Answer
a. In JSX, a single parent element needs to be returned or it won't compile eg using <div></div> or commonly used "fragment" <></>, while in HTML, you are free to do whatever as you don't have to return a single parent element.  
b. JS can be implemented/written directly in JSX using curly braces {...} whereas in HTML, you need a script tag or an external JavaScript file to implement JavaScript.
c. Inline styles are written as objects in JSX with the properties in camelCase, the values in quotes and whereas in HTML, you are free to define millions of styles right inside the opening tag without writing them as objects and putting them in quotes.



5. Why can't browsers read JSX?

Answer
Browsers cannot read JSX because JSX is not a valid JavaScript and there is no inherent implementation for the browser to read and understand it so transpiler is needed to translate it to React.







React Assignments

Topics
Introduction to React
JSX In React

Questions
Using create-react-app, set up a react app named ‘website’. 
Inside the src folder, create a file called ‘Header.js’. Inside this file, create a function that returns the JSX version of the HTML code below 
<header>
     <h1>Welcome to my website!</h1>
     <nav>
       <ul>
         <li><a href="#">Home</a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">Services</a></li>
         <li><a href="#">Contact</a></li>
       </ul>
     </nav>
   </header>


Inside the src folder, create a file called Main.js’. Inside this file, create a function that returns the JSX version of the HTML code below:
<main>
     <section>
       <h2>About Us</h2>
       <p>
         We are a small team of web developers based in the United States. We
         specialise in creating modern and responsive websites for businesses
         and individuals.
       </p>
     </section>
     <section>
       <h2>Our Services</h2>
       <ul>
         <li>Web Design</li>
         <li>Web Development</li>
         <li>E-commerce Solutions</li>
         <li>Search Engine Optimization (SEO)</li>
       </ul>
     </section>
   </main>

Go to the App.js file and delete all the current JSX in the return statement. Now instantiate the Header and the Main components inside the return statement.
Run npm start in your terminal to load your browser, where you will see the result of your implementation.  Congratulations! You have just created your first react app.,
To demonstrate JavaScript in JSX, create a variable called country inside the Main function in the Main.js file and assign the name of your country to that variable. Look for the United States in the JSX and replace it with the country variable wrapped in curly braces. Confirm in your browser that you can see the result of that change. 
Push your code to a Github repository and submit the link to that repository in Citrone.

Answer the following questions in the readme.md file inside your project above
List five significant features of React
List five major advantages of React
What is the name of the Software Engineer that created React? Also, which company owns React?
What are the notable differences between HTML & JSX? Give at least 3 of them
Why can’t browsers read JSX?






