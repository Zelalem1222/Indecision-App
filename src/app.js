class IndecisionApp extends React.Component{
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this) 
    this.handlePick = this.handlePick.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      options: props.options
    }
  }

  componentDidMount(){

   try {
    const json = localStorage.getItem('options')
    const options = JSON.parse(json)
    if(options){
      this.setState(() => ({ options}))
    }
   } catch (e) {
     console.log(e)
   }
  }

  componentDidUpdate(prevProps , prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options' , json)
    }
  }

  handlePick(){
    const randNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randNum]
    alert(option)
  }

  handleDeleteOptions(){
    this.setState(() => ({ options: []}) ) 
  }

  handleDeleteOption(optionToDelete){
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return option !== optionToDelete
      })
    }))
  }

  handleAddOption(option){
   if (!option){
    return 'Enter a valid value'
   } else if(this.state.options.indexOf(option) > -1){
    return 'This option already exisit.'
   }

    this.setState((prevState) =>  ({options: prevState.options.concat([option])  }) )}
  render(){
    const subtitle = 'Put your life in the hands of computer.'
    
    return (
      <div>
      <Header  subtitle={subtitle} />
      <Action pickOption={this.handlePick} hasOption={this.state.options.length > 0} />
      <Options handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} options={this.state.options}/>
      <AddOptions 
       handleAddOption={this.handleAddOption}
      />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}


const Header = (props) => {
  return (
<div>
        <h1>{props.title}</h1>
         {props.subtitle &&<h2>{props.subtitle}</h2> } 
      </div>
  )
}

Header.defaultProps = {
  title: 'Indecision'
}

const Options = (props) => {
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
    {props.options.length === 0 && <p>Please add options to get started!</p>}
    {props.options.map((option, index) => <Option key={index} id={index} optionText={option} handleDeleteOption={props.handleDeleteOption}/>)}
    </div>
  )}


class AddOptions extends React.Component {

  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      error: undefined
    }
  }

  handleSubmit(e){
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)

    this.setState(() =>  ({ error}))
    if(!error){
      e.target.elements.option.value = ''
    }
  }
  render(){
    return  <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='option'/>
        <button>Add Option</button>
      </form>
      </div>
  }
}

const Action = (props) => {
  return (
    <button disabled={!props.hasOption} onClick={props.pickOption}>What should I do?!!!!!</button>
  )
}

const Option = (props) => {
  return (
    <div>
     Option-{props.id + 1} :  {props.optionText}
     <button onClick={() => props.handleDeleteOption(props.optionText)}>remove</button>
    </div>
  )
}



ReactDOM.render(<IndecisionApp /> , document.getElementById('root'))

