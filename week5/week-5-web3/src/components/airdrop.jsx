import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export default function Airdrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  const sendAirdrop = async () => {
    const amount = document.getElementById("requested-amount").value
    await connection.requestAirdrop(wallet.publicKey, amount * 1000000000);
    alert("Airdroped sol");
  };

  return (
    <div>
      <input id="requested-amount" type="text" placeholder="Amount" />
      <button onClick={sendAirdrop}>Send Airdrop</button>
    </div>
  );
}
