import { useState } from "react"

export default function Taskform(addTask) {
    const[task, setTask] = useState(' ');
    const[priority, setPriority] = useState('medium');
    const[category, setCategory] = useState('general');
    const handlesubmit = (e) => {
        e.preventDefault(); //prevent refreshing
        addTask({text: task , priority, category, completed: false});
        //reset
        setTask('');
        setPriority('medium');
        setCategory('general');
    }   
    return(
        <form onSubmit={handlesubmit}>
            <div>
                <input type="text" placeholder="Enter the task" value={task}
                onChange={(e) => setTask(e.target.value)}/>
                <button type="submit">Add Task</button>
                <h1>{task} {priority} {category}</h1>
                <div>
                    <select onChange={(e) => setPriority(e.target.value)} value={priority}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>

                    <select onChange={(e) => setCategory(e.target.value)} value={category}>
                        <option value="general">General</option>
                        <option value="work">Work</option>
                        <option value="personal">Personal</option>
                    </select>
                </div>
            </div>
        </form>
    )
}

// https://github.com/Gamana/TaskFocusMar

// GIT Commands  
// Steps to push project into Repo 
//  
// Git init 
// Git remote –v 
// Git remote add origin url 
// Git add . 
// Git commit –m “message” 
// Git branch 
// Git branch –M main 
// Git push origin main