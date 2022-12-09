class IndecisionApp extends React.Component{
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePick = this.handlePick.bind(this)
    this.state = {
      options: ['Thing One' , 'Thing Two' , 'Thing Three']
    }
  }

  handlePick(){
    const randNum = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randNum]
    alert(option)
  }

  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: []
      }
    })
  }
  render(){
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of computer.'
    
    return (
      <div>
      <Header title={title} subtitle={subtitle} />
      <Action pickOption={this.handlePick} hasOption={this.state.options.length > 0} />
      <Options handleDeleteOptions={this.handleDeleteOptions} options={this.state.options}/>
      <AddOptions />
      </div>
    )
  }
}


class Header extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Options extends React.Component {
  
  render(){
    return (
      <div>
      <button onClick={this.props.handleDeleteOptions}>Remove All</button>
      {this.props.options.map((option, index) => <Option key={index} optionText={option} />)}
      
      </div>
    )
  }
}

class AddOptions extends React.Component {
  handleSubmit(e){
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    if(option){
      alert(option)
    }
  }
  render(){
    return  <div>
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='option'/>
        <button>Add Option</button>
      </form>
      </div>
  }
}

class Action extends React.Component {
 
  render(){
    return (
      <button disabled={!this.props.hasOption} onClick={this.props.pickOption}>What should I do?</button>
    )
  }
}

class Option extends React.Component {
  render(){
    return (
      <div>
       Option: {this.props.optionText}
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp /> , document.getElementById('root'))

