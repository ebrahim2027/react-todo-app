import "./CSS/TodoItem.css";
import tick from "./assets/tick.png";
import not_tick from "./assets/not_tick.png";
import cross from "./assets/cross.png";

export default function TodoItem({ no, display, text, setTodos }) {
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }
    setTodos(data);
  };

  const deleteTodo = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  };
  return (
    <div className="todoitem">
      <div
        className={`todoitem-container ${display}`}
        onClick={() => {
          toggle(no);
        }}
      >
        {display ? <img src={tick} alt="" /> : <img src={not_tick} alt="" />}

        <div className="todoitem-text">{text}</div>
      </div>
      <img className="todoitem-crossicon" onClick={()=> deleteTodo(no)} src={cross} alt="" />
    </div>
  );
}
