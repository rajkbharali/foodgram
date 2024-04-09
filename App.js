import React from 'react'
import ReactDOM from 'react-dom/client'

//React Element
const parent = React.createElement("div", {id:"parent"} , 
    React.createElement("div", {id:"child"},
    React.createElement("h1", {id:"heading"}, "This is a h1 Tag")
    )
)

//React Element
// const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello from React")

// React Element (PS : JSX coverted to React element using Babel. Babel is a JS compiler)
//Babel converts JSX to React.createElement
const heading = <h1>Hello JSX Element</h1>

//React Component (It is a JS function that return JSX Elements)
const HeadingComponent = () => {
    return <h1>Hello React Component</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(parent)
// root.render(heading)
root.render(<HeadingComponent/>)
