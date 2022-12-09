const root = document.getElementById('root') 
// let visibility = false

// const handleClick = () => {
//     visibility = !visibility
//     renderer()
// }

// const renderer = () => {
//     const template = (
//         <div>
//           <h1>Hello</h1>
//           <button onClick={handleClick}>
//            { visibility ? 'Hide Details':  'Show Details'  }
//           </button>
//           {visibility && (
//             <p>This is some details you must see.</p>
//           )}
//         </div>
//     )
    
// ReactDOM.render(template , root)
// }
// renderer()

class Visiblity extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      visiblity: false
    }
  }

  handleClick(){
    this.setState((prevState) => {
      return {
        visiblity: !prevState.visiblity
      }
    })
  }

  render(){
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={this.handleClick}>{this.state.visiblity ? 'Hide Details' : 'Show Details'}</button>
        {this.state.visiblity && <p>This is some details you must see.</p>}
      </div>
    )
  }
}

ReactDOM.render(<Visiblity /> , root)
