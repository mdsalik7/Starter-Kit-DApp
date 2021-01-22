import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';
import Navbar from './Navbar'
import Web3 from 'web3'


class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    //console.log(accounts[0])
    this.setState({account : accounts[0]})
    //console.log(this.state.account)

    const networkId = await web3.eth.net.getId()
    //console.log(networkId)

    //Load SmartContracts


    //after everything is finished above, setting the loading state to false, so main component can render
    this.setState({loading : false})
  }

  async loadWeb3() {
    if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  //SmartContract Functions
  
  
  constructor(props) {
    super(props)
    this.state = {
      account : '',
      loading : true
    }
  }

  render() {
    let content
    if(this.state.loading){
      content = <p id="loader" className="text-center">Loading...</p>
    } else {
      /*content = <Main
      Setting the states and fuctions
      />
      */
    }
    
    return (
      <div>
        <Navbar account = {this.state.account}/> 
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
              <div className="content mr-auto ml-auto">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                </a>
                {content}
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
