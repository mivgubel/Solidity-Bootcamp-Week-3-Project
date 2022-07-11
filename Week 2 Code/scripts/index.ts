import { ethers } from 'ethers';
import 'dotenv/config'

//@dev Just another idea for how we could encapsulate the get wallet logic while still 
//keeping more of the previous functionality

export function getWallet(): ethers.Wallet {

    const EXPOSED_KEY =
    "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f";

    var wallet = process.env.MNEMONIC && process.env.MNEMONIC.length > 0
      ? ethers.Wallet.fromMnemonic(process.env.MNEMONIC)
      : new ethers.Wallet(process.env.PRIVATE_KEY);
    if(!wallet) {
      wallet = new ethers.Wallet(EXPOSED_KEY);
      throw new Error("No MNEMONIC or PRIVATE_KEY provided -- using EXPOSED_KEY");
    }
    return wallet;
  }