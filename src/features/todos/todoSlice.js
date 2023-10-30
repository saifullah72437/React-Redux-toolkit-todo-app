import { createSlice, nanoid } from "@reduxjs/toolkit";

// here we have to define the initial state 
const initialState = {
    todos:[{
        id:1,
        text:"Hello World"
    }]
}

// creating slice for our todo
export const todoSlice = createSlice({
    // this name is mandatory it will also show on our react extenstion that we install
    name: 'todo',
    // second we give this initial state to our slice
    initialState,
    // and we define aur reducer in reducer most of the time there is properties and methods like objects.
    reducers:{
        // here in every method we can access state and action
            // state is the current state of the initial state
            // action is some data like todo id todo text etc
        addTodo:(state, action)=>{
            const todo={
                // nano id is use to give unique id i can also use Date.now() here
                id: nanoid(),
                text: action.payload
            }
            console.log(action.payload);
           
        },
    
        removeTodo:(state, action)=>{
           
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo(state, action){
            state.todos.map((todo)=>{
                if(todo.id === action.payload){
                    todo.text = action.payload.text
                }
            })
        }
    }

})


// exporting the properties and methods of reducer
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

// exporting reducer
export default todoSlice.reducer