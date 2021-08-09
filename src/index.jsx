import React from "react"
import ReactDOM from "react-dom"
import QueryBuilder from "./queryBuilder/builder"

import 'react-awesome-query-builder/lib/css/styles.css'
// import 'react-awesome-query-builder/lib/css/compact_styles.css' //optional, for more compact styles

import "./style.css"

function App() {
  return (
    <div className="App">
      <QueryBuilder />
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

