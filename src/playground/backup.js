console.log("Hello ")

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hand of GOD',
    options: []
}

const handleSubmit = (e) => {
   e.preventDefault()
   const option = e.target.elements.options.value;
   if(option){
    app.options.push(option)
    e.target.elements.options.value = '';
    reRender()
   }
}

const handleClick = () => {
  app.options = []
  reRender()
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length )
  const option = app.options[randomNum]
  alert(option)
}


const root = document.getElementById('root')

const reRender = () => {

  const template2 = (<div>
  <h1>{app.title}</h1>
  {app.subtitle && <p>Subtitle {app.subtitle}</p>}
  <p> { (app.options && app.options.length) > 0 ? 'Here are your options' : 'No Options'} </p>
  <div> 
    <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I DO?</button>
    <button onClick={handleClick}>Remove All</button>
    <ol>
      {app.options.map((option , index) => <li key={index}>{option}</li>
      )}
         
  </ol>
  </div> 

<form onSubmit={handleSubmit}>
  <input type='text' name='options' />
  <button>Add Option</button>
</form>
  
  
</div>
)
ReactDOM.render(template2 , root)
}

reRender();