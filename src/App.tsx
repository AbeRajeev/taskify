import React from 'react';
import './App.css';

let name: string
let age: number
let isAdult: boolean
let hobbies: string[]
let role: [number, string]

type Person = {
  name: string
  age: number | string // | means union type (either number or string)
  hobbies: string[]
  role?: [number, string] // ? means optional
}

let people: Person[]
let person: Person = {
  name: 'John',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
}

function App() {
  return (
    <div className="App">
      Hello!
    </div>
  );
}

export default App;
