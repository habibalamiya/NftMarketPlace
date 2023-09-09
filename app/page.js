"use client"
import { useEffect, useState } from 'react';
import Header from './components/Header'
import { ethers } from 'ethers';
import { ContractAbi } from "./abi/abi.json";

export default function page(){
   
  const[address,setAddress]=useState(null);
  const[balance,setBalance]=useState(0);
  const[contract,setContract]=useState(null);

   useEffect(()=>{

     async function initialize(){

      if (typeof window.ethereum !=="undefined"){
         const provider =new ethers.providers.Web3Provider(window.ethereum);
         const signer =provider.getSigner();
         const address=await signer.getAddress();
         const balance=await provider.getBalance(address);
        setAddress(address)
        setBalance(ethers.utils.parseEther(balance))
        mycontractaddress="0x8c0f149d6965f510910d10d3ab5790fDbCFFC997"
        const contract =new ethers.Contract( mycontractaddress,abi,signer);
        setContract(contract)
      }
    }
    initialize();
  },[])
      return (
        <div>
        <Header/>
        <div className="py-80 bg-[url('https://www.womenindigital.net/assets/frontend/img/logo/logo_top.png')] bg-no-repeat bg-center"></div>
        <div className="text-center">
        
        <p className="text-md text-blue-600 lg:text-3xl">hi{address?.slice(0,10)}...{address?.slice(-10)}</p>



        </div>
        
        
        
        
        
        
        
        </div>
      )


    }