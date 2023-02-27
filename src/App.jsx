import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [lists, setLists] = useState([]);
  // const [count, setCount] = useState(1);

  function addList() {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: input,
      status: false,
      quantity: 1,
    };
    setLists((oldLists) => [...oldLists, item]);
    setInput("");
  }

  function checkItem(id) {
    const handleCheckItem = lists.findIndex(list => list.id == id)
  
    const checkList = [...lists]
  
    if(checkList[handleCheckItem].status){
      checkList[handleCheckItem].status = false;
      setLists(checkList)
    }else{
      checkList[handleCheckItem].status = true;
      setLists(checkList)
    }
  }

  // increment & decrement
  function incrementValue(id) { 
    const countQty = lists.findIndex(list => list.id == id)
    const tempCount = [...lists]
    
    tempCount[countQty].quantity += 1
    setLists(tempCount)
  }

  function decrementValue(id) {
    const countQty = lists.findIndex(list => list.id == id)
    const tempCnt = [...lists]

    if(tempCnt[countQty].quantity <= 0) {
      return false
    }else{
      tempCnt[countQty].quantity -= 1
    setLists(tempCnt)
    }
  }

    

  // delete list

  function deleteList(id) {
    const doneList = lists.filter((list) => list.id !== id);
    setLists(doneList);
  }


  let total = 0

  return (
    <div className="card">
      <div className="add-item">
        <input 
          onChange={(e) => setInput(e.target.value)}
          value={input} className="box"
          placeholder="Add an Item"></input>
        <button className="plus" onClick={() => addList()}>➕</button>
      </div>

      
      <ul>
        {lists.map( list => {
          total += list.quantity
          return (
            <li id={list.id} key={list.id} className="list-item">
            <label className='input'>
              <input type="checkbox" onChange={() => checkItem(list.id)} />
              <span style={{textDecoration: list.status ? 'line-through' : ''}}>{list.value}</span>
            </label>

              <span onClick={ () => decrementValue(list.id) }> ◀️ </span>
               <span>{list.quantity}</span>
              <span onClick={ () => incrementValue(list.id) }> ▶️ </span>

              <span onClick={ () => deleteList(list.id) }> ❌ </span>
            
            </li>
          )
        })}
      </ul>
        <hr></hr>
      <div>
        <span>Total: {total}</span>
      </div>
     

        {/* {lists.map((list) => {
          return (
         
            <input type="checkbox" className="added-list"
              key={list.value}>
                {list.value}
               <button onClick={decrementValue}> ◀️ </button>
               <span>{count}</span>
              <button onClick={incrementValue}> ▶️ </button>
              </input>
            
          )
        })} */}

      
    </div>
  );
}

export default App;
