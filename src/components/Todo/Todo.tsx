

const Todo = ({id, text, completed, category}) => {
 
  return (
    <div>
      <label htmlFor="">
          <input type="checkbox" checked={completed} />
          <input value={text} />
        </label>
    </div>
 
   

    
  )
  
}

export default Todo