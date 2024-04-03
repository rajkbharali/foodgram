import React from 'react'
import ReactDOM from 'react-dom/client'

const parent = React.createElement("div", {id:"parent"} , 
    React.createElement("div", {id:"child"},
    React.createElement("h1", {id:"heading"}, "This is a h1 Tag")
    )
)

// const heading = React.createElement("h1", {id:"heading", xyz:"abc"}, "Hello from React")

const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
root.render(parent)