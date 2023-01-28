import './style.css'
import { useState } from 'react';

// import List from './Components/List';
// import ListItem from './Components/ListItem';
// import { keyboard } from '@testing-library/user-event/dist/keyboard';

function App() {
  let title = ''
  // const inpBox = document.querySelector('#addBoxInp')

  const [tasks, setTasks] = useState([
    {title: 'work', checked: 0},
  ])

  const [userName, setUserName] = useState('Your Name')

  const changeName = () => {
    const userName = prompt('Your name')
    localStorage.setItem('user', userName)
    setUserName(userName)
  }

  // const mapping = () => {
  //   tasks.map((task, index) => {
  //     localStorage.setItem(index, [task.title, task.checked])
  //   })
  // }

  window.onload = () => {
    if (localStorage.getItem('user') === null) {
      const userName = prompt('Your name')
      localStorage.setItem('user', userName)
    }
    setUserName(localStorage.getItem('user'))
  }

  const addTask = () => {
    console.log(tasks)
    if (document.getElementById('addBoxInp').value != null && document.getElementById('addBoxInp').value != ''){
      title = document.getElementById('addBoxInp').value
      setTasks([...tasks, {title: title, checked: 0}])
      console.log(tasks)
    }
  }

  document.addEventListener('keydown', (event) => {
    if (event.key == 'Enter')
      addTask()
  })

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  const check = (index) => {

    const id = 'check' + index
    const current = document.getElementById(id).innerHTML

    if (current === 'check_box_outline_blank')
      document.getElementById(id).innerHTML = 'check_box'
    else
      document.getElementById(id).innerHTML = 'check_box_outline_blank'
    document.getElementById('text' + index).classList.toggle('checked')

  }

  // const edit = (index) => {
  //   const id = 'text' + index
  //   document.getElementById(id).disabled = false
  // }

  return (
   <>
      <div className="container">


        <div className="header flex-row sb">

          <div>
            <p className="head1">Hello</p>
            <p className="head2" onClick={changeName}>{userName}</p>
          </div>

          {/* <div>
            <div className="clear grad-2 flex-row" onClick={() => {localStorage.clear()}}>Reset</div>
            <div className="clear grad-2 flex-row" onClick={mapping}>Save</div>
          </div> */}

        </div>



        <div className="innerBox">

          <div className="addBoxContainer">
            <input className='addBox' type="text" name="" id="addBoxInp" placeholder='Add Item' />
            <button className="addBtn" onClick={addTask}>
              <span class="material-symbols-outlined">add</span>
            </button>

          </div>
          

          <div className='list'>
            {tasks.map((task, index) => (

                <div className="listItem" key={index}>

                  <div className='part1'>
                  <span className="material-symbols-outlined"  id={'check' + index} onClick={() => check(index)}>check_box_outline_blank</span>
                  {/* <input disabled id={'text' + index} value={task.title} /> */}
                  <div id={'text' + index}>{task.title}</div>
                  </div>

                  <div className="part2">
                    {/* <div className="edit" onClick={() => edit(index)}><span class="material-symbols-outlined">edit</span></div> */}
                    <div className="delete" onClick={() => removeTask(index)}><span className="material-symbols-outlined">delete</span></div>
                  </div>

                </div>
                
              )
            )}
            {/* {list} */}
            {/* <ListItem title="Meal prep" /> */}
          </div>
        </div>

        <div className="credit">By Prabhat Pankaj</div>
      </div>
   </> 
  )
}

export default App;
