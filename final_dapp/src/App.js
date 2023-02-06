import { useState, createContext,useEffect } from "react";
import Header from './components/Header'
import Main  from './components/Main'
import Login from './components/Login'
import { ethers } from "ethers";
import paypal from "./paypal/paypal.json"

const AppState = createContext();

function App() {
  const {ethereum}=window;
  const [login, setLogin] =useState(false);
  const [address, setAddress] =useState('');
  const [balance,setBalance] =useState('');
  const [currency,setCurrency]=useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [paypalContractAddress, setPaypalContractAddress] = useState('');
  const [explorer, setExplorer] = useState('');
  const [txLoading, setTxLoading] = useState(false);
  const [showRecentTx, setShowRecentTx] = useState(false)
  const [recentTx, setRecentTx] = useState({
    txhash: '',
    from: '',
    to: '',
    amount: '',
    symbol: ''
  })
  const [saveTxLoad, setSaveTxLoad] = useState(false);

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

  async function getbal(){
    const provider= new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const balance=await signer.getBalance();
    setBalance(ethers.utils.formatEther(balance));
  }
  useEffect (()=>{

    getbal();
  });



  const paypalContract = new ethers.Contract(paypalContractAddress, paypal.output.abi, signer);

  const transferAmount = async () => {
    setTxLoading(true);
    try{
      const tx = await paypalContract._transfer(recipientAddress, "Eth", {
        value: ethers.utils.parseEther(amount)
      });
     
      await tx.wait();
      setRecentTx({
        txhash: tx.hash,
        from: address,
        to: recipientAddress,
        amount: amount,
        symbol: "Eth"
      })

      setShowRecentTx(true);
      //setBalance(ethers.utils.formatEther(balance));
      getbal();
    }
    catch(error){
      alert(error.message);
    }
    setTxLoading(false);
  }

  const saveTx = async () => {
    setSaveTxLoad(true);
    try {
      const tx = await paypalContract.saveTx(recentTx.from, recentTx.to, ethers.utils.parseEther(recentTx.amount), recentTx.symbol);
      await tx.wait();
  
      alert("Transaction Saved Sucessfully!")
    } catch (error) {
      alert(error.message)
    }
    
    setShowRecentTx(false);
    setSaveTxLoad(false);
  }



  useEffect(()=>{
    ethereum.on("accountsChanged", async (accounts)=>{
      setAddress(accounts[0]);
      setPaypalContractAddress('0x59EcE8FF3220034608798C977020c2eBfb179962');
      setExplorer('https://goerli.etherscan.io/');
      //setCurrency("GorelliEth");
    })

  },[]);

  useEffect(()=>{
    ethereum.on("accountsChanged", async (balance)=>{
      setBalance(ethers.utils.formatEther(balance));
      //setCurrency("GorelliEth");
    })

  },[balance]);


  return (
    <AppState.Provider value={{login,setLogin,address,setAddress,balance,setBalance,
      paypalContractAddress, setPaypalContractAddress,currency,setCurrency,recipientAddress, setRecipientAddress, amount, setAmount
      ,explorer, setExplorer,transferAmount,txLoading, setTxLoading,showRecentTx, setShowRecentTx,
      saveTxLoad, setSaveTxLoad,recentTx, setRecentTx,saveTx,paypalContract}}>
    <div className="mid-w-full h-screen">
     { login?
     <div className="min-w-full min-h-full">
      {/*Main app*/}
      
      <Header />
      <Main />
      </div>
      :
      <Login />
    }
    </div></AppState.Provider>
  );
}

export default App;
export {AppState}
