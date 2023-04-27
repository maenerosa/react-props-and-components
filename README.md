# React Components and Props

## Lesson Objectives:

1. What are React components?
2. Creating React components
3. Using React components
4. Props in React
5. Passing props to components
6. Destructuring props
7. Default props

### What are React components?

- React components are the building blocks of React applications. A component is a reusable piece of code that can be used to create user interfaces. Components can be simple, like a button or a text input, or complex, like a navigation menu or a form.

There are two types of React components:

- Function components: Function components are the simplest type of component. They are JavaScript functions that take in props as arguments and return JSX.
- Class components: Class components are more complex than function components. They are classes that extend the React.Component class and have a render method that returns JSX.

### Props in React

- Props are a way to pass data from a parent component to a child component. Props are read-only and cannot be modified by the child component. This makes it easier to manage state in a React application.

### Destructuring props

-You can destructure props in a function component to make the code more readable.

### Exercise 1: Building a Comment Component

- The component will take in a name, email, and body prop and display them in a comment box (p)

1. Create a new file called Comment.jsx.
2. Import at the top of the file.
3. Define a function component called Comment.
4. Destructure the name, email, and body props from the props object.
5. Use the props to display the comment in a styled box.

### Exercises

1. Create a new React component called Heading that takes in a text prop and displays it in an <h1> element.
2. Create a new React component called List that takes in a items prop (an array of strings) and displays them in an unordered list (<ul>).
3. Create a new React component called Card that takes in title, subtitle, description, and image props and displays them in a styled card.

### Conclusion

- We covered the basics of React component development, including function components, props, and styles. By following the examples and exercises in this lesson, you should have a solid foundation for building your own React components.

### Exercise: Create a Link Component

In this exercise, we'll create a reusable Link component that can be used to navigate to a different page.

Create a new file called Link.js.

Define a functional component called Link that takes a text and url prop.

In the render method, return an a element with the text prop as its text content and the url prop as its href.

Export the Link component.

In your main component, define a url variable that contains a URL. Pass the text and url variables as props to the Link component.

Use the Link component to display a link that navigates to the URL when clicked.
