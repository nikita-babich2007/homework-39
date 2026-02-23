export default function Input(props) {
  return (
    <input
      value={props.value}
      type="text"
      placeholder={props.placeholder}
      onChange={(e) => props.handleSetNewTodo(e.target.value)}
    />

    
  );
}
