const root = document.getElementById('root') 
let visibility = false

const handleClick = () => {
    visibility = !visibility
    renderer()
}

const renderer = () => {
    const template = (
        <div>
          <h1>Hello</h1>
          <button onClick={handleClick}>
           { visibility ? 'Hide Details':  'Show Details'  }
          </button>
          {visibility && (
            <p>This is some details you must see.</p>
          )}
        </div>
    )
    
ReactDOM.render(template , root)
}
renderer()
