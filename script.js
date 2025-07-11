
const tokenAddress = "0x72b5346e0738060f03289d5a04a67bee82b955ec";
const tokenABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint amount) returns (bool)"
];

let provider, signer, contract;

document.getElementById("connect").onclick = async () => {
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    const address = await signer.getAddress();
    document.getElementById("wallet").textContent = "Wallet: " + address;

    contract = new ethers.Contract(tokenAddress, tokenABI, signer);
    const balance = await contract.balanceOf(address);
    document.getElementById("balance").textContent = "REVCN: " + ethers.utils.formatUnits(balance, 18);
  } else {
    alert("Install MetaMask.");
  }
};

async function swap() {
  const amount = document.getElementById("swapAmount").value;
  alert("Swap feature is simulated. Amount: " + amount + " REVCN");
}

async function sendToken() {
  const to = document.getElementById("recipient").value;
  const amount = document.getElementById("sendAmount").value;
  if (!contract) return alert("Connect wallet first.");
  const tx = await contract.transfer(to, ethers.utils.parseUnits(amount, 18));
  await tx.wait();
  alert("Sent " + amount + " REVCN to " + to);
}
