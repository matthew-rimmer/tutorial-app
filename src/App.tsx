import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TodoItem } from "./components/TodoItem";

// An interface to define our todo items
interface Item {
  id: number;
  done: boolean;
  content: string;
}

// This is our main place to render stuff
function App() {
  // In order to have persistant and mutable data we use useState
  // This is similar to a get/set property
  // You can either define the type in the useState value or the function
  const [count, setCount] = useState(0);
  const [todoItems, setTodoItems] = useState<Array<Item>>([
    { id: 1, done: false, content: "good" },
    { id: 2, done: false, content: "bad" },
  ]);

  // You can also just declare regular variables
  const text = "Todo list";

  // This is where we but our main HTML
  return (
    // You will always need a single parent
    // This can be a div or just a fragment (like <></>)
    <div className="App">
      {/* A regular button with a callback */}
      <button onClick={() => setCount(count + 1)}>Button time!!</button>
      {/* We can define variables using curly brackets. They will always return their current value! */}
      <p>{count}</p>
      <h1>{text}</h1>

      {/* We can also just write function right in here! */}
      {todoItems.map((item) => (
        <TodoItem
          content={item.content}
          done={item.done}
          // This is needed as we can't just set the items directly. 
          // We must create a new array and then return it
          onCheck={(event: any) =>
            setTodoItems(
              todoItems.map((x) => {
                if (x.id === item.id) x.done = !x.done;
                return x;
              })
            )
          }
        />
      ))}
    </div>
  );
}

export default App;
