//---------------環境設定-----------------
//remixのボタンを押して取得したコントラクトアドレスを貼り付け
const Address = "0x593cC81f554C67004ff6f92669089608eb17d81e";

//remixのボタンを押して取得したABIを貼り付け
const ABI = [{ "type": "function", "stateMutability": "nonpayable", "payable": false, "outputs": [], "name": "setNumber", "inputs": [{ "type": "uint8", "name": "_answer", "internalType": "uint8" }], "constant": false }, { "type": "function", "stateMutability": "payable", "payable": true, "outputs": [], "name": "setMoney", "inputs": [], "constant": false }, { "type": "function", "stateMutability": "nonpayable", "payable": false, "outputs": [], "name": "TakeMoney", "inputs": [{ "type": "int256", "name": "_myanswer", "internalType": "int256" }], "constant": false }]

//metamask利用許可ダイアログを出す
ethereum.enable();


//--------------ここからメイン処理---------------
//------web3.jsの読み込み待ちのため、window.onloadにメイン処理を入れる--------

window.onload = function () {

  const getStorage = web3.eth.getStorageAt(Address, 0);
  console.log(getStorage);

  //metamaskの準備
  web3js = new Web3(web3.currentProvider);
  //スマートコントラクト読み込み
  mycontract = new web3js.eth.Contract(ABI, Address);

  //1.00-beta.36と表示されるのが正しい
  console.log("reader.js_is_checking_web3.js_version..." + Web3.version);


  mycontract.methods.get3().call().then((fromblockchain1) => {
    //上記はコントラクト上のget3関数を呼び出すための定型句です。呼び出し結果は「fromblockchain1」で利用可
    document.getElementById("id3").innerHTML = fromblockchain1;
  });
  mycontract.methods.getnumber().call().then((fromblockchain2) => {
    //上記はコントラクト上のgetnumber関数を呼び出すための定型句です。呼び出し結果は「fromblockchain2」で利用可
    document.getElementById("idn").innerHTML = fromblockchain2;
  });
  mycontract.methods.getStorageAt().call().then((fromblockchain3) => {
    //上記はコントラクト上のgetnumber関数を呼び出すための定型句です。呼び出し結果は「fromblockchain3」で利用可
    document.getElementById("storageAt").innerHTML = fromblockchain3;
  });
}
