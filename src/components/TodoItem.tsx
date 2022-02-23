// This defines the types for our parameters
// Ensure there's no ambiguous typing
interface todoItemProps {
  done: boolean;
  content: string;
  onCheck: any;
}

export const TodoItem = (props: todoItemProps) => {
  return (
    <div className="todoItem">
      <input
        type={"checkbox"}
        checked={props.done}

        // This passes the function call back up to the parent.
        // We can't manipulate the done variable in here
        onChange={props.onCheck} 
      ></input>
      <p>{props.content}</p>
    </div>
  );
};
