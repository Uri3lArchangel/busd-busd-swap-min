import { EvmChain } from '@moralisweb3/common-evm-utils'
import Moralis from 'moralis'
let isStarted = false


export async function fetchBalances(addr:string,key:string){
if(key){
   if(!Moralis.Core.isStarted){
await Moralis.start({apiKey:key})
isStarted=true
    }
if(addr != ''){
    const chain = EvmChain.BSC
const response=await Moralis.EvmApi.balance.getNativeBalance({
    address:`${addr}`,
    chain
})


 return (response.toJSON().balance)
}
}
}