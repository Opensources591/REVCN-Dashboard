
document.getElementById('connectButton').addEventListener('click', async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const walletAddress = accounts[0];
      document.getElementById('walletAddress').innerText = 'Wallet: ' + walletAddress;
    } catch (err) {
      console.error('Wallet connection rejected:', err);
    }
  } else {
    alert('Please install MetaMask to use this feature.');
  }
});

document.getElementById('swapButton').addEventListener('click', () => {
  alert('Swap function placeholder');
});

document.getElementById('sendButton').addEventListener('click', () => {
  alert('Send function placeholder');
});
