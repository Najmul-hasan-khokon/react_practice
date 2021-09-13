import React from "react";

  class Clock extends React.Component{
  // props dorkar na hole constructor bad diye evabeo dewa jay state= {date: new Date()} . 
   constructor(props){
     // react.component ke inherit korte super use hoy.
     super(props)
     this.state= {date: new Date()}
   }


// its called life cycle methods
   componentDidMount(){
     // one second por por tick function take call korbe.
    this.clockTimer = setInterval(() => this.tick(), 1000);
   }


 // component unmount korte  use hoy
   componentWillUnmount(){
     clearInterval(this.clockTimer)
     // setinterval er property take call korlam this diye.
   }


  tick(){
    // setsate er maddome amara state er value change korte pari.
    this.setState({
      date: new Date()
     })
  }


  
// jokhoni state er value web page e show korbe tokoni componentDidMount call hobe ebong setState er sahajje state er value change hobe.
    render(){
      return <div><h1>{this.state.date.toLocaleTimeString(this.props.local)}</h1></div>
    }
  }


  export default Clock;

