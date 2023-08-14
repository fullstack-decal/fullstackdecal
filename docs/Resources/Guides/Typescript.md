---
sidebar_position: 3
---

# Typescript

## Introduction

[REPL.it](http://repl.it) link:

- [https://repl.it/join/xbrnbjwx-jialinwu02](https://repl.it/join/xbrnbjwx-jialinwu02)

## Basics

Typescript is a static type object-oriented programming language maintained by the Microsoft. It can be seen as a superset of Javascript. With the help of Typescript Compiler(TSC), we can convert typescript code to javascript and then it would be made understandable for the browser / node.

So, why do we need typescript if we can directly write in javascript? There are scenarios where javascript may not function that well.

- Since typescript is a static type language, meaning that all the types can be checked during compile time, it can limit the number of mistakes during the run time. Thus easier to debug.
- The static typing also provides highly productive development tools for JavaScript IDEs and practices, like static type checking.

As a result, typescript is gaining its popularity nowadays.  It's crucial to understand typescript in a deeper level.

## Syntax

### Type

The biggest difference between JS and TS is the addition of static type checking. 

```jsx
function greeter(person) {
    return "Hello, " + person;
}
```

This is a normal javascript function. Let's see how should we rewrite it in typescript.

```tsx
function greeter(person: string) {
    return "Hello, " + person;
}
```

If we try to put a different type as the person parameter, for example `greeter([1,2,3])`, we will get:

> error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
> 

This is an error from the typescript compiler, which means that the error will be caught in compile time, rather than runtime. Thus reducing the number of bugs in runtime and make debug easier.

You can also define any variable with a type:

```tsx
var name : string = "mary";
const score : number = 50;
let scores : number[] = [1, 2, 3, 4];
let kevin : [string, number] = ["Kevin", 3039200001]
```

### Function

An example of a typescript function.

```jsx
let myAdd = function (x: number, y: number): number {
  return x + y;
};
```

### Details for Typed Function

```jsx
// The parameters 'x' and 'y' have the type number
let myAdd = function (x: number, y: number): number {
  return x + y;
};

// myAdd has the full function type
let myAdd2: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};
```

Optional Parameters & Default Parameter.

```jsx
function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

function buildName(firstName: string, lastName = "Alex") {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}
```

### Interface

Typescript also allow you to build type for object, which is called an interface.

```tsx
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

document.body.textContent = greeter(user);
```

This creates an interface called Person and specify the attribute of the object and the type of the attribute. This way, the `greeter` function can use Person as an interface to make sure that the type of parameter passed in is a Person object.

### Classes

Typescript also supports a class based OOP syntax:

```tsx
class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
console.log(howard.name);
```

- private variable cannot be accessed from outside of its containing class.
- The protected modifier acts much like the private modifier with the exception that members declared protected can also be accessed within deriving classes.

## TS in React

```bash
npx create-react-app typescript-demo --template typescript
```

After you created the `typescript-demo` app, you would see all the `.jsx` files become `.tsx` files. 

Let's try to create a TODO app and see how a React App would look like in Typescript.

### Interface

To build a TODO app, we first need to build an interface of a TODO. This interface should describe an TODO object so that every file can use this interface.

Let's create a file called `types.tsx`. 

```tsx
export interface TODO {
  title: string;
  content: string;
}
```

A todo consists of a title and a content. Both of them are of type string.

### Class Components

Once we create the interface for a TODO, let's create the TODO component that renders the TODO object.

To declare a class component using Typescript syntax, we specify the type of the state and the props after the `React.Component`. Since we don't need to keep a state, the second type is an empty bracket, meaning there is no style for the state. 

For the props, we define a `type` called TodoProps. `type` is an alias for interface, it is essentially the same thing. This means that the props that we receive will receive a prop name todo of type TODO.

```tsx
import React from "react";
import { TODO } from "../types";

type TodoProps = {
  todo: TODO;
};

export default class Todo extends React.Component<TodoProps, {}> {
  render() {
    return (
      <div className="todo">
        <h3>{this.props.todo.title}</h3>
        <p>{this.props.todo.content}</p>
      </div>
    );
  }
}
```

If we pass in something other than a TODO, it will display an error in the compile time, and also show in the editor, which makes debugging easier.

Now that we have a TODO, let's create a form to add more TODO. Let's call it TodoForm.

```tsx
import React from "react";
import { TODO } from "../types";

type TodoFormProps = {
  handleSubmit: (todo: TODO, callback: Function) => void;
};

export default class TodoForm extends React.Component<TodoFormProps, TODO> {
  state: TODO = {
    title: "",
    content: "",
  };

  handleSubmit = () => {
    this.props.handleSubmit(this.state, () => {
      this.setState({
        title: "",
        content: "",
      });
    });
  };

  render() {
    return (
      <div className="TodoForm">
        <h3> Create a new TODO</h3>
        <div>
          <input
            placeholder="title"
            value={this.state.title}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              this.setState({ title: e.currentTarget.value })
            }
          />
        </div>
        <div>
          <input
            placeholder="content"
            value={this.state.content}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              this.setState({ content: e.currentTarget.value })
            }
          />
        </div>
        <button onClick={this.handleSubmit}> Submit </button>
      </div>
    );
  }
}
```

Different than the previous TODO component, we have a state defined here, and since it is a form to add a todo, we only need to keep track of the information that can represents a TODO. Thus, the state is of type TODO.

For the props, we need to accept a function as the parameter from the parent APP component. To define the type of a function, we use `(parameter : type) => return type` to represent its type.

```tsx
type TodoFormProps = {
  handleSubmit: (todo: TODO, callback: Function) => void;
};
```

### Functional Components

Now that we have both TodoForm and Todo in place, let's work on the APP component. To demonstrate typescript usage, let's keep the App component as a functional components.

```tsx
import React, { useState } from 'react';
import './App.css';

import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';

import { TODO } from './types';

function App() {
  
  const [todos, setTodos] = useState<TODO[]>([])

  const handleSubmit = (todo : TODO, callback: Function) => {
    console.log(todo); 
    setTodos([...todos, todo])
    callback();
  }

  return (
    <div className="App">
      <TodoForm handleSubmit={handleSubmit} />
      {todos.map((todo) => (<Todo todo={todo}/>))}
    </div>
  );
}

export default App;
```

In the App component, we need to keep track of a list of TODOs that we have created. We can see that to use `useState` with typescript, simply add the type in the bracket.

## Resources

- [Why You Should Use TypeScript for Developing Web Applications - DZone Web Dev](https://dzone.com/articles/what-is-typescript-and-why-use-it)

- [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

- [typescript-cheatsheets/react-typescript-cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets)

---

**Contributors**

- [Alex Wu](https://www.linkedin.com/in/jialin-wu-658929185/)
