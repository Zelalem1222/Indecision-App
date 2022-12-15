// let count = 0;
// const addOne = () => {
//     count += 1
//     renderCounterApp()
//  }

// const minusOne = () => {
//   count -=1 
//   renderCounterApp()
// } 

// const reset = () => {
//   count = 0
//   renderCounterApp()
// }
 

// const root = document.getElementById('root')



// const renderCounterApp = () => {
//   const counter = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>Reset</button>
//     </div>
// )
// ReactDOM.render(counter , root)
// }

// renderCounterApp()

class Counter extends React.Component {
  constructor(props){
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleMinus = this.handleMinus.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count : 0
    }
  }

  componentDidMount(){
    const num = localStorage.getItem('count')
    const count = parseInt(num)

    if(count !== NaN){
      this.setState(() => ({ count }))
    }
  }

  componentDidUpdate(prevProps , prevState) {
    if(prevState.count !== this.state.count){
      localStorage.setItem('count' , this.state.count)
    }
  }
  

  handleAdd(){
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  handleMinus(){
    this.setState((prevState) => { 
      return {
        count: prevState.count - 1
      }
     })
  }
  handleReset(){
    this.setState(()=> {
      return {
        count: 0
      }
    })
  }
  render(){
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAdd}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}


ReactDOM.render(<Counter /> , document.getElementById('root'))