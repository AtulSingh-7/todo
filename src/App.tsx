import React from 'react';
import { TodoRow } from './TodoRow';
import { useState } from 'react';

interface Todo {
  id: number;
  label: string;
}

function App() {

  const [todos, setTodos] = useState<Todo[]>([

  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleDelete = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleNewTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };


  const handleNewTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), label: newTodo }]);
      setNewTodo('');
    }
  };






  return (
    <div className="App">
      <header className="App-header" style={{paddingTop:'100px'}}>
        <div className='Conatiner' style={containerstyle}>
          <div className='header' style={headerstyle}>
            Todo
          </div>
          <div className='Checkboxcontainer' style={Checkboxstyle}>
            {todos.map((todo) => (
              <div style={todostyle}>
                <TodoRow key={todo.id} label={todo.label} onDelete={() => handleDelete(todo.id)} />

              </div>

            ))}



          </div>
          <form onSubmit={handleNewTodo}>
            <div className='addtask' style={addtaskstyle}>
              <input type='text' placeholder='Add task here ..' value={newTodo} onChange={handleNewTodoChange} style={inputstyle} />
              <button type="submit" style={buttonstyle}>Add  </button>
            </div>
          </form>

        </div>


      </header>
    </div>
  );
}


const containerstyle = {
  backgroundColor: 'white',
  color: 'black',
  width: '30%',
  height: 'auto',
  border: '1px solid #E7E0DF',
  margin: 'auto',
  marginbottom: '10px',
  borderRadius: '10px',
  boxShadow: '0 0 10px #E7E0DF',
};

const headerstyle = {
  padding: '10px',
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '10px',
  textalign: 'left',
  marginLeft: '10px',
};

const Checkboxstyle = {
  padding: '10px',
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '10px',
  textalign: 'left',
};

const addtaskstyle = {
  padding: '10px',
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '10px',
  textalign: 'left',
  display: 'flex',
  justifyContent: 'space-between',
};

const inputstyle = {
  width: '70%',
  marginright: '10px',
  borderRadious:'50px',
  border:'none',
  backgroundColor:'#F9F6F6',
  
};

const buttonstyle = {
  width: '27%',
  backgroundColor: 'green',
  color: 'white',
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
  borderRadius: '5px',
};

const todostyle = {
  margin: '10px',
};


export default App;
