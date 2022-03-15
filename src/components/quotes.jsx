import React, { Component } from 'react';
import { FaTwitter, FaQuoteLeft, FaQuoteRight, FaPenFancy } from 'react-icons/fa'


class Quotes extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        text:'',
        author:'',
        bcol: {backgroundColor: 'rgb(150, 150, 50)'},
        fadeOutIn: {},
        initialQuote: true
      }

    this.changeQuote = this.changeQuote.bind(this)
    this.fadeOut = this.fadeOut.bind(this)
    this.fadeIn = this.fadeIn.bind(this)
    this.bckColor = this.bckColor.bind(this)
  
    }

    changeQuote() {
        
        let file = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
        
        fetch(file)
            .then(res => res.json())
            .then(json => {
                
                const quotesMomma = Object.keys(json);
                
                const arrMomma = json[quotesMomma[0]]
                const index = Math.floor(Math.random() * arrMomma.length);
                const newQuoteObj = arrMomma[index]
                const newQuote = [newQuoteObj['quote'], newQuoteObj['author']]
                
                this.setState({
                    text: newQuote[0],
                    author: newQuote[1]
         
            })
            }
            )
    }

    fadeOut() {
            this.setState({fadeOutIn: {
                opacity: 0,
                transition: 'opacity 2s'
            }
        })
        }

    fadeIn() {
            setTimeout(() => {
                this.setState({fadeOutIn: {opacity: 1,
                    transition: 'opacity 2s'}            
                })}, 2000)
    }

    bckColor() {
        let bcol = {}
        let RandColor = () => {
            function shannon() {
                return Math.floor(Math.random()*250);
            }
            var clr = 'rgb(' + shannon() + ',' + shannon() + ',' + shannon() + ')'
            return clr
        }

       
        bcol =  {backgroundColor: RandColor()}
        
        console.log(bcol, 'bcol')
        return bcol
    }

    
    componentDidMount() {
        this.setState({initialQuote: false})
    }


    render() {
        
        let twitterShare = 
            'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
              encodeURIComponent(
              '"' + this.state.text + '" ' + this.state.author
              )
        
        if (this.state.initialQuote == true) {
            this.changeQuote()
        }

        return (
            
                <div className='flex-container' style={this.state.bcol}>
                    <div className='quote-box' style={this.state.fadeOutIn}>
                        <div className="frame">
                            <div className="text">
                                <p><i className='fa-quote-left'><FaQuoteLeft /></i></p>
                                <h1>
                            <p id="text">{this.state.text}</p></h1>
                                <p><i className="fa-quote-right"><FaQuoteRight /></i></p><br />
                            </div>
                            <div className="author">
                                <p id="author" > - by {this.state.author}</p>
                                <span>
                                    <i className="fa-pen-fancy fa-3x"><FaPenFancy/></i>
                                </span>
                            </div><br />


                        <div id="click">
                            <a href={twitterShare} id="tweet-quote">
                            <i className='fa-twitter'><FaTwitter /></i>  </a>

                            <button id="new-quote" onClick={() => {
                                this.setState({bcol: this.bckColor()})
                                setTimeout(() => {
                                    this.changeQuote();        
                                }, 2000)
                                console.log('rendered')
                                this.fadeOut()
                                this.fadeIn()
                                }
                            }>

                                <strong>New quote</strong></button>
                        </div>
                        </div>

                    </div>
                    <div className="signed">
                    <h4>
                        by <a href="https://github.com/ovilogic" id="ovilogic">ovilogic</a></h4><br />

                    </div>



                </div>
          
  
        );
    }
}
 
export default Quotes;