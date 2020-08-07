import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component{
    state = { advice: ''}
    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        
        const id = Math.floor(Math.random() * 250)+1; 
        axios.get('https://api.adviceslip.com/advice/' + id)
             .then((response) =>  {
                var data = JSON.parse(response.data + "}");
                const {advice} = data.slip;
                this.setState({advice})
             })
             .catch((error) => {
                console.log(error);
                const advice = "I'm out of advice ! u clicked me several times";
                this.setState({advice})
             });
    }

    

    render() {
        const advice = this.state.advice
        return(
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>GIVE ME ADVICE</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;