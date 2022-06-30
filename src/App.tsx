import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import {Todo} from "../model/models"
import TodoList from './components/TodoList';

// let name:string;
// let age: number | string;
// let isStudent: boolean;
// let hobbies:string[];
// let role:[number,string];

// let printName: (name:string) => never;

// type Person = {
//   name: string
//   age?: number
// };

// let person: Person = {
//   name: 'jave'

// };

// let lotsOfPeople: Person[];

// let personNAme: unknown;

// interface Person {
//   name: string;
//   age: number;
// }

// interface Guy extends Person {
//   profession: string;
// }

// type X = {
//   a: string;
//   b: number;
// }

// type Y = X & {
//   c: string;
//   d: number;
// }

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos,{id: Date.now(), todo, isDone:false}]);
      setTodo("");
    }

  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
