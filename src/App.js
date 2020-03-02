import React from 'react';
import './App.css';
import mytext from './de_nouns.js';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">

            <Choices/>
        
      </header>
    </div>
  );
}

function Score(props) {
        return <div className="score"> {props.score} </div>; 
}

function Choice(props) {
    return (
      <button className="choice" onClick={props.onClick}>
         {props.value}
      </button>
    );
}

function Word(props) {
        return (<div className="word"> {props.word} </div>); 
}

function Statement(props) {
        return (<div className="statement"> {props.statement} </div>); 
}

class Choices extends React.Component {
    constructor(props) {
    super(props);
    
    var text = mytext;

    var lines = text.split("\n")
    var articles = [];
    var nouns = [];
    for (var i = 0; i < 2771; i++) {
                        var comps = lines[i].split(" ");
                        articles[i] = comps[0]
                        nouns[i] = comps[1]
                    }   

    this.state = {score: 0, def: articles, words: nouns, num: Math.floor(Math.random() * 2770), statement:null}
    }

    handleClick(article) {
        console.log(article.toLowerCase());
        console.log(this.state.def[this.state.num])
        if (article.toLowerCase() === this.state.def[this.state.num])
        { this.setState({score: this.state.score + 25, statement: "Richtig: " +  this.state.def[this.state.num]+" "+this.state.words[this.state.num]})}
        else { this.setState({score: 0, statement: "Falsch! : " +  this.state.def[this.state.num]+" "+this.state.words[this.state.num]})}
        this.setState({num: Math.floor(Math.random() * 2770)});
        
    }
    
    renderScore(x) {
        return <Score score={x}/>
    }
    renderWord(x) {
        return <Word word={this.state.words[x]}/>
    }

    renderStatement() {
        return <Statement statement={this.state.statement}/>
    }
    renderChoice(article) {
        return <Choice value={article} onClick={() => this.handleClick(article)}/>
    }

    render() {
        
        return (
        <div className= "choices">
            {this.renderWord(this.state.num)}
            {this.renderScore(this.state.score)}            
            {this.renderChoice("Der")}
            {this.renderChoice("Das")}
            {this.renderChoice("Die")}
            {this.renderStatement()}
        </div>
            )
        }
   }

export default App;
