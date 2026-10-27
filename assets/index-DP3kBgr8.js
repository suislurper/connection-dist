import{c as L,r as Ie,e as Te,n as b,a as k,i as C,z as f,b as l,h as I,ah as Se,C as T,ai as _e,P as y,l as U,aj as ke,ak as N,O as ce,N as E,al as me,k as g,y as v,E as M,S as O,o as Ce,Q as G,t as $e,u as Re,x as Oe,s as P,R as z,D as h,v as Ue,U as Le,am as Ne,g as qe,ab as ge}from"./index-C2amc2Up.js";const De=L`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${({spacing:t})=>t[1]};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${({tokens:t})=>t.core.iconAccentPrimary};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${({tokens:t})=>t.theme.iconInverse};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${({tokens:t})=>t.theme.iconDefault};
  }

  button[data-type='success'] wui-icon {
    color: ${({tokens:t})=>t.core.iconSuccess};
  }

  button[data-type='error'] wui-icon {
    color: ${({tokens:t})=>t.core.iconError};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${({borderRadius:t})=>t[1]};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:t})=>t[1]};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${({borderRadius:t})=>t[2]};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${({tokens:t})=>t.core.foregroundAccent010};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${({tokens:t})=>t.core.backgroundSuccess};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${({tokens:t})=>t.core.backgroundError};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:t})=>t.core.foregroundAccent020};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var F=function(t,e,n,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(t,e,n,s);else for(var c=t.length-1;c>=0;c--)if(o=t[c])a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a;return i>3&&a&&Object.defineProperty(e,n,a),a};let S=class Tt extends C{constructor(){super(...arguments);this.icon="card";this.variant="primary";this.type="accent";this.size="md";this.iconSize=void 0;this.fullWidth=false;this.disabled=false}render(){return l`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${f(this.iconSize)}></wui-icon>
    </button>`}};S.styles=[Ie,Te,De];F([b()],S.prototype,"icon",void 0);F([b()],S.prototype,"variant",void 0);F([b()],S.prototype,"type",void 0);F([b()],S.prototype,"size",void 0);F([b()],S.prototype,"iconSize",void 0);F([b({type:Boolean})],S.prototype,"fullWidth",void 0);F([b({type:Boolean})],S.prototype,"disabled",void 0);S=F([k("wui-icon-button")],S);const d={INVALID_PAYMENT_CONFIG:"INVALID_PAYMENT_CONFIG",INVALID_RECIPIENT:"INVALID_RECIPIENT",INVALID_ASSET:"INVALID_ASSET",INVALID_AMOUNT:"INVALID_AMOUNT",UNKNOWN_ERROR:"UNKNOWN_ERROR",UNABLE_TO_INITIATE_PAYMENT:"UNABLE_TO_INITIATE_PAYMENT",INVALID_CHAIN_NAMESPACE:"INVALID_CHAIN_NAMESPACE",GENERIC_PAYMENT_ERROR:"GENERIC_PAYMENT_ERROR",UNABLE_TO_GET_EXCHANGES:"UNABLE_TO_GET_EXCHANGES",ASSET_NOT_SUPPORTED:"ASSET_NOT_SUPPORTED",UNABLE_TO_GET_PAY_URL:"UNABLE_TO_GET_PAY_URL",UNABLE_TO_GET_BUY_STATUS:"UNABLE_TO_GET_BUY_STATUS",UNABLE_TO_GET_TOKEN_BALANCES:"UNABLE_TO_GET_TOKEN_BALANCES",UNABLE_TO_GET_QUOTE:"UNABLE_TO_GET_QUOTE",UNABLE_TO_GET_QUOTE_STATUS:"UNABLE_TO_GET_QUOTE_STATUS",INVALID_RECIPIENT_ADDRESS_FOR_ASSET:"INVALID_RECIPIENT_ADDRESS_FOR_ASSET"};const q={[d.INVALID_PAYMENT_CONFIG]:"Invalid payment configuration",[d.INVALID_RECIPIENT]:"Invalid recipient address",[d.INVALID_ASSET]:"Invalid asset specified",[d.INVALID_AMOUNT]:"Invalid payment amount",[d.INVALID_RECIPIENT_ADDRESS_FOR_ASSET]:"Invalid recipient address for the asset selected",[d.UNKNOWN_ERROR]:"Unknown payment error occurred",[d.UNABLE_TO_INITIATE_PAYMENT]:"Unable to initiate payment",[d.INVALID_CHAIN_NAMESPACE]:"Invalid chain namespace",[d.GENERIC_PAYMENT_ERROR]:"Unable to process payment",[d.UNABLE_TO_GET_EXCHANGES]:"Unable to get exchanges",[d.ASSET_NOT_SUPPORTED]:"Asset not supported by the selected exchange",[d.UNABLE_TO_GET_PAY_URL]:"Unable to get payment URL",[d.UNABLE_TO_GET_BUY_STATUS]:"Unable to get buy status",[d.UNABLE_TO_GET_TOKEN_BALANCES]:"Unable to get token balances",[d.UNABLE_TO_GET_QUOTE]:"Unable to get quote. Please choose a different token",[d.UNABLE_TO_GET_QUOTE_STATUS]:"Unable to get quote status"};class p extends Error{get message(){return q[this.code]}constructor(e,n){super(q[e]);this.name="AppKitPayError";this.code=e;this.details=n;if(Error.captureStackTrace){Error.captureStackTrace(this,p)}}}const Fe="https://rpc.walletconnect.org/v1/json-rpc";const fe="reown_test";function Be(){const{chainNamespace:t}=y.parseCaipNetworkId(u.state.paymentAsset.network);const e=U.isAddress(u.state.recipient,t);if(!e){throw new p(d.INVALID_RECIPIENT_ADDRESS_FOR_ASSET,`Provide valid recipient address for namespace "${t}"`)}}async function je(t,e,n){var c;if(e!==I.CHAIN.EVM){throw new p(d.INVALID_CHAIN_NAMESPACE)}if(!n.fromAddress){throw new p(d.INVALID_PAYMENT_CONFIG,"fromAddress is required for native EVM payments.")}const s=typeof n.amount==="string"?parseFloat(n.amount):n.amount;if(isNaN(s)){throw new p(d.INVALID_PAYMENT_CONFIG)}const i=((c=t.metadata)==null?void 0:c.decimals)??18;const a=T.parseUnits(s.toString(),i);if(typeof a!=="bigint"){throw new p(d.GENERIC_PAYMENT_ERROR)}const o=await T.sendTransaction({chainNamespace:e,to:n.recipient,address:n.fromAddress,value:a,data:"0x"});return o??void 0}async function We(t,e){if(!e.fromAddress){throw new p(d.INVALID_PAYMENT_CONFIG,"fromAddress is required for ERC20 EVM payments.")}const n=t.asset;const s=e.recipient;const i=Number(t.metadata.decimals);const a=T.parseUnits(e.amount.toString(),i);if(a===void 0){throw new p(d.GENERIC_PAYMENT_ERROR)}const o=await T.writeContract({fromAddress:e.fromAddress,tokenAddress:n,args:[s,a],method:"transfer",abi:_e.getERC20Abi(n),chainNamespace:I.CHAIN.EVM});return o??void 0}async function Me(t,e){if(t!==I.CHAIN.SOLANA){throw new p(d.INVALID_CHAIN_NAMESPACE)}if(!e.fromAddress){throw new p(d.INVALID_PAYMENT_CONFIG,"fromAddress is required for Solana payments.")}const n=typeof e.amount==="string"?parseFloat(e.amount):e.amount;if(isNaN(n)||n<=0){throw new p(d.INVALID_PAYMENT_CONFIG,"Invalid payment amount.")}try{const s=Se.getProvider(t);if(!s){throw new p(d.GENERIC_PAYMENT_ERROR,"No Solana provider available.")}const i=await T.sendTransaction({chainNamespace:I.CHAIN.SOLANA,to:e.recipient,value:n,tokenMint:e.tokenMint});if(!i){throw new p(d.GENERIC_PAYMENT_ERROR,"Transaction failed.")}return i}catch(s){if(s instanceof p){throw s}throw new p(d.GENERIC_PAYMENT_ERROR,`Solana payment failed: ${s}`)}}async function ze({sourceToken:t,toToken:e,amount:n,recipient:s}){const i=T.parseUnits(n,t.metadata.decimals);const a=T.parseUnits(n,e.metadata.decimals);return Promise.resolve({type:ae,origin:{amount:(i==null?void 0:i.toString())??"0",currency:t},destination:{amount:(a==null?void 0:a.toString())??"0",currency:e},fees:[{id:"service",label:"Service Fee",amount:"0",currency:e}],steps:[{requestId:ae,type:"deposit",deposit:{amount:(i==null?void 0:i.toString())??"0",currency:t.asset,receiver:s}}],timeInSeconds:6})}function ie(t){if(!t){return null}const e=t.steps[0];if(!e||e.type!==it){return null}return e}function te(t,e=0){if(!t){return[]}const n=t.steps.filter(i=>i.type===at);const s=n.filter((i,a)=>{const o=a+1;return o>e});return n.length>0&&n.length<3?s:[]}const ue=new ke({baseUrl:U.getApiUrl(),clientId:null});class Ge extends Error{}function Qe(){const t=ce.getSnapshot().projectId;return`${Fe}?projectId=${t}`}function le(){const{projectId:t,sdkType:e,sdkVersion:n}=ce.state;return{projectId:t,st:e||"appkit",sv:n||"html-wagmi-4.2.2"}}async function de(t,e){const n=Qe();const{sdkType:s,sdkVersion:i,projectId:a}=ce.getSnapshot();const o={jsonrpc:"2.0",id:1,method:t,params:{...e||{},st:s,sv:i,projectId:a}};const c=await fetch(n,{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}});const m=await c.json();if(m.error){throw new Ge(m.error.message)}return m}async function we(t){const e=await de("reown_getExchanges",t);return e.result}async function ye(t){const e=await de("reown_getExchangePayUrl",t);return e.result}async function Ve(t){const e=await de("reown_getExchangeBuyStatus",t);return e.result}async function Ye(t){const e=E.bigNumber(t.amount).times(10**t.toToken.metadata.decimals).toString();const{chainId:n,chainNamespace:s}=y.parseCaipNetworkId(t.sourceToken.network);const{chainId:i,chainNamespace:a}=y.parseCaipNetworkId(t.toToken.network);const o=t.sourceToken.asset==="native"?me(s):t.sourceToken.asset;const c=t.toToken.asset==="native"?me(a):t.toToken.asset;const m=await ue.post({path:"/appkit/v1/transfers/quote",body:{user:t.address,originChainId:n.toString(),originCurrency:o,destinationChainId:i.toString(),destinationCurrency:c,recipient:t.recipient,amount:e},params:le()});return m}async function He(t){const e=N.isLowerCaseMatch(t.sourceToken.network,t.toToken.network);const n=N.isLowerCaseMatch(t.sourceToken.asset,t.toToken.asset);if(e&&n){return ze(t)}return Ye(t)}async function Ke(t){const e=await ue.get({path:"/appkit/v1/transfers/status",params:{requestId:t.requestId,...le()}});return e}async function Xe(t){const e=await ue.get({path:`/appkit/v1/transfers/assets/exchanges/${t}`,params:le()});return e}const Je=["eip155","solana"];const Ze={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};const xe={"56":"714","204":"714"};function ne(t,e){const{chainNamespace:n,chainId:s}=y.parseCaipNetworkId(t);const i=Ze[n];if(!i){throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${n}`)}let a=i.native.assetNamespace;let o=i.native.assetReference;if(e!=="native"){a=i.defaultTokenNamespace;o=e}else if(n==="eip155"&&xe[s]){o=xe[s]}const c=`${n}:${s}`;return`${c}/${a}:${o}`}function et(t){const{chainNamespace:e}=y.parseCaipNetworkId(t);return Je.includes(e)}function tt(t){const e=g.getAllRequestedCaipNetworks();const n=e.find(i=>i.caipNetworkId===t.chainId);let s=t.address;if(!n){throw new Error(`Target network not found for balance chainId "${t.chainId}"`)}if(N.isLowerCaseMatch(t.symbol,n.nativeCurrency.symbol)){s="native"}else if(U.isCaipAddress(s)){const{address:i}=y.parseCaipAddress(s);s=i}else if(!s){throw new Error(`Balance address not found for balance symbol "${t.symbol}"`)}return{network:n.caipNetworkId,asset:s,metadata:{name:t.name,symbol:t.symbol,decimals:Number(t.quantity.decimals),logoURI:t.iconUrl},amount:t.quantity.numeric}}function nt(t){return{chainId:t.network,address:`${t.network}:${t.asset}`,symbol:t.metadata.symbol,name:t.metadata.name,iconUrl:t.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:t.metadata.decimals.toString()}}}function X(t){const e=E.bigNumber(t,{safe:true});if(e.lt(.001)){return"<0.001"}return e.round(4).toString()}function st(t){const e=g.getAllRequestedCaipNetworks();const n=e.find(s=>s.caipNetworkId===t.network);if(!n){return false}return Boolean(n.testnet)}const be=0;const se="unknown";const ae="direct-transfer";const it="deposit";const at="transaction";const r=Oe({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:false,error:null,isPaymentInProgress:false,exchanges:[],isLoading:false,openInNewTab:true,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:false,paymentId:void 0,choice:"pay",tokenBalances:{[I.CHAIN.EVM]:[],[I.CHAIN.SOLANA]:[]},isFetchingTokenBalances:false,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:false,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0});const u={state:r,subscribe(t){return Re(r,()=>t(r))},subscribeKey(t,e){return $e(r,t,e)},async handleOpenPay(t){this.resetState();this.setPaymentConfig(t);this.initializeAnalytics();Be();await this.prepareTokenLogo();r.isConfigured=true;M.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:r.exchanges,configuration:{network:r.paymentAsset.network,asset:r.paymentAsset.asset,recipient:r.recipient,amount:r.amount}}});await G.open({view:"Pay"})},resetState(){r.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}};r.recipient="0x0";r.amount=0;r.isConfigured=false;r.error=null;r.isPaymentInProgress=false;r.isLoading=false;r.currentPayment=void 0;r.selectedExchange=void 0;r.exchangeUrlForQuote=void 0;r.requestId=void 0},resetQuoteState(){r.quote=void 0;r.quoteStatus="waiting";r.quoteError=null;r.isFetchingQuote=false;r.requestId=void 0},setPaymentConfig(t){if(!t.paymentAsset){throw new p(d.INVALID_PAYMENT_CONFIG)}try{r.choice=t.choice??"pay";r.paymentAsset=t.paymentAsset;r.recipient=t.recipient;r.amount=t.amount;r.openInNewTab=t.openInNewTab??true;r.redirectUrl=t.redirectUrl;r.payWithExchange=t.payWithExchange;r.error=null}catch(e){throw new p(d.INVALID_PAYMENT_CONFIG,e.message)}},setSelectedPaymentAsset(t){r.selectedPaymentAsset=t},setSelectedExchange(t){r.selectedExchange=t},setRequestId(t){r.requestId=t},setPaymentInProgress(t){r.isPaymentInProgress=t},getPaymentAsset(){return r.paymentAsset},getExchanges(){return r.exchanges},async fetchExchanges(){try{r.isLoading=true;const t=await we({page:be});r.exchanges=t.exchanges.slice(0,2)}catch(t){O.showError(q.UNABLE_TO_GET_EXCHANGES);throw new p(d.UNABLE_TO_GET_EXCHANGES)}finally{r.isLoading=false}},async getAvailableExchanges(t){var e;try{const n=(t==null?void 0:t.asset)&&(t==null?void 0:t.network)?ne(t.network,t.asset):void 0;const s=await we({page:(t==null?void 0:t.page)??be,asset:n,amount:(e=t==null?void 0:t.amount)==null?void 0:e.toString()});return s}catch(n){throw new p(d.UNABLE_TO_GET_EXCHANGES)}},async getPayUrl(t,e,n=false){try{const s=Number(e.amount);const i=await ye({exchangeId:t,asset:ne(e.network,e.asset),amount:s.toString(),recipient:`${e.network}:${e.recipient}`});M.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:t},configuration:{network:e.network,asset:e.asset,recipient:e.recipient,amount:s},currentPayment:{type:"exchange",exchangeId:t},headless:n}});if(n){this.initiatePayment();M.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:r.paymentId||se,configuration:{network:e.network,asset:e.asset,recipient:e.recipient,amount:s},currentPayment:{type:"exchange",exchangeId:t}}})}return i}catch(s){if(s instanceof Error&&s.message.includes("is not supported")){throw new p(d.ASSET_NOT_SUPPORTED)}throw new Error(s.message)}},async generateExchangeUrlForQuote({exchangeId:t,paymentAsset:e,amount:n,recipient:s}){const i=await ye({exchangeId:t,asset:ne(e.network,e.asset),amount:n.toString(),recipient:s});r.exchangeSessionId=i.sessionId;r.exchangeUrlForQuote=i.url},async openPayUrl(t,e,n=false){try{const s=await this.getPayUrl(t.exchangeId,e,n);if(!s){throw new p(d.UNABLE_TO_GET_PAY_URL)}const i=t.openInNewTab??true;const a=i?"_blank":"_self";U.openHref(s.url,a);return s}catch(s){if(s instanceof p){r.error=s.message}else{r.error=q.GENERIC_PAYMENT_ERROR}throw new p(d.UNABLE_TO_GET_PAY_URL)}},async onTransfer({chainNamespace:t,fromAddress:e,toAddress:n,amount:s,paymentAsset:i}){r.currentPayment={type:"wallet",status:"IN_PROGRESS"};if(r.isPaymentInProgress){return}try{this.initiatePayment();const a=g.getAllRequestedCaipNetworks();const o=a.find(m=>m.caipNetworkId===i.network);if(!o){throw new Error("Target network not found")}const c=g.state.activeCaipNetwork;if(!N.isLowerCaseMatch(c==null?void 0:c.caipNetworkId,o.caipNetworkId)){await g.switchActiveNetwork(o)}switch(t){case I.CHAIN.EVM:if(i.asset==="native"){r.currentPayment.result=await je(i,t,{recipient:n,amount:s,fromAddress:e})}if(i.asset.startsWith("0x")){r.currentPayment.result=await We(i,{recipient:n,amount:s,fromAddress:e})}r.currentPayment.status="SUCCESS";break;case I.CHAIN.SOLANA:r.currentPayment.result=await Me(t,{recipient:n,amount:s,fromAddress:e,tokenMint:i.asset==="native"?void 0:i.asset});r.currentPayment.status="SUCCESS";break;default:throw new p(d.INVALID_CHAIN_NAMESPACE)}}catch(a){if(a instanceof p){r.error=a.message}else{r.error=q.GENERIC_PAYMENT_ERROR}r.currentPayment.status="FAILED";O.showError(r.error);throw a}finally{r.isPaymentInProgress=false}},async onSendTransaction(t){try{const{namespace:e,transactionStep:n}=t;u.initiatePayment();const s=g.getAllRequestedCaipNetworks();const i=s.find(o=>{var c;return o.caipNetworkId===((c=r.paymentAsset)==null?void 0:c.network)});if(!i){throw new Error("Target network not found")}const a=g.state.activeCaipNetwork;if(!N.isLowerCaseMatch(a==null?void 0:a.caipNetworkId,i.caipNetworkId)){await g.switchActiveNetwork(i)}if(e===I.CHAIN.EVM){const{from:o,to:c,data:m,value:R}=n.transaction;await T.sendTransaction({address:o,to:c,data:m,value:BigInt(R),chainNamespace:e})}else if(e===I.CHAIN.SOLANA){const{instructions:o}=n.transaction;await T.writeSolanaTransaction({instructions:o})}}catch(e){if(e instanceof p){r.error=e.message}else{r.error=q.GENERIC_PAYMENT_ERROR}O.showError(r.error);throw e}finally{r.isPaymentInProgress=false}},getExchangeById(t){return r.exchanges.find(e=>e.id===t)},validatePayConfig(t){const{paymentAsset:e,recipient:n,amount:s}=t;if(!e){throw new p(d.INVALID_PAYMENT_CONFIG)}if(!n){throw new p(d.INVALID_RECIPIENT)}if(!e.asset){throw new p(d.INVALID_ASSET)}if(s===void 0||s===null||s<=0){throw new p(d.INVALID_AMOUNT)}},async handlePayWithExchange(t){try{r.currentPayment={type:"exchange",exchangeId:t};const{network:e,asset:n}=r.paymentAsset;const s={network:e,asset:n,amount:r.amount,recipient:r.recipient};const i=await this.getPayUrl(t,s);if(!i){throw new p(d.UNABLE_TO_INITIATE_PAYMENT)}r.currentPayment.sessionId=i.sessionId;r.currentPayment.status="IN_PROGRESS";r.currentPayment.exchangeId=t;this.initiatePayment();return{url:i.url,openInNewTab:r.openInNewTab}}catch(e){if(e instanceof p){r.error=e.message}else{r.error=q.GENERIC_PAYMENT_ERROR}r.isPaymentInProgress=false;O.showError(r.error);return null}},async getBuyStatus(t,e){var n,s;try{const i=await Ve({sessionId:e,exchangeId:t});if(i.status==="SUCCESS"||i.status==="FAILED"){M.sendEvent({type:"track",event:i.status==="SUCCESS"?"PAY_SUCCESS":"PAY_ERROR",properties:{message:i.status==="FAILED"?U.parseError(r.error):void 0,source:"pay",paymentId:r.paymentId||se,configuration:{network:r.paymentAsset.network,asset:r.paymentAsset.asset,recipient:r.recipient,amount:r.amount},currentPayment:{type:"exchange",exchangeId:(n=r.currentPayment)==null?void 0:n.exchangeId,sessionId:(s=r.currentPayment)==null?void 0:s.sessionId,result:i.txHash}}})}return i}catch(i){throw new p(d.UNABLE_TO_GET_BUY_STATUS)}},async fetchTokensFromEOA({caipAddress:t,caipNetwork:e,namespace:n}){if(!t){return[]}const{address:s}=y.parseCaipAddress(t);let i=e;if(n===I.CHAIN.EVM){i=void 0}const a=await Ce.getMyTokensWithBalance({address:s,caipNetwork:i});return a},async fetchTokensFromExchange(){if(!r.selectedExchange){return[]}const t=await Xe(r.selectedExchange.id);const e=Object.values(t.assets).flat();const n=await Promise.all(e.map(async s=>{const i=nt(s);const{chainNamespace:a}=y.parseCaipNetworkId(i.chainId);let o=i.address;if(U.isCaipAddress(o)){const{address:m}=y.parseCaipAddress(o);o=m}const c=await v.getImageByToken(o??"",a).catch(()=>void 0);i.iconUrl=c??"";return i}));return n},async fetchTokens({caipAddress:t,caipNetwork:e,namespace:n}){try{r.isFetchingTokenBalances=true;const s=Boolean(r.selectedExchange);const i=s?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:t,caipNetwork:e,namespace:n});const a=await i;r.tokenBalances={...r.tokenBalances,[n]:a}}catch(s){const i=s instanceof Error?s.message:"Unable to get token balances";O.showError(i)}finally{r.isFetchingTokenBalances=false}},async fetchQuote({amount:t,address:e,sourceToken:n,toToken:s,recipient:i}){try{u.resetQuoteState();r.isFetchingQuote=true;const a=await He({amount:t,address:r.selectedExchange?void 0:e,sourceToken:n,toToken:s,recipient:i});if(r.selectedExchange){const o=ie(a);if(o){const c=`${n.network}:${o.deposit.receiver}`;const m=E.formatNumber(o.deposit.amount,{decimals:n.metadata.decimals??0,round:8});await u.generateExchangeUrlForQuote({exchangeId:r.selectedExchange.id,paymentAsset:n,amount:m.toString(),recipient:c})}}r.quote=a}catch(a){let o=q.UNABLE_TO_GET_QUOTE;if(a instanceof Error&&a.cause&&a.cause instanceof Response){try{const c=await a.cause.json();if(c.error&&typeof c.error==="string"){o=c.error}}catch{}}r.quoteError=o;O.showError(o);throw new p(d.UNABLE_TO_GET_QUOTE)}finally{r.isFetchingQuote=false}},async fetchQuoteStatus({requestId:t}){try{if(t===ae){const n=r.selectedExchange;const s=r.exchangeSessionId;if(n&&s){const i=await this.getBuyStatus(n.id,s);switch(i.status){case"IN_PROGRESS":r.quoteStatus="waiting";break;case"SUCCESS":r.quoteStatus="success";r.isPaymentInProgress=false;break;case"FAILED":r.quoteStatus="failure";r.isPaymentInProgress=false;break;case"UNKNOWN":r.quoteStatus="waiting";break;default:r.quoteStatus="waiting";break}return}r.quoteStatus="success";return}const{status:e}=await Ke({requestId:t});r.quoteStatus=e}catch{r.quoteStatus="failure";throw new p(d.UNABLE_TO_GET_QUOTE_STATUS)}},initiatePayment(){r.isPaymentInProgress=true;r.paymentId=crypto.randomUUID()},initializeAnalytics(){if(r.analyticsSet){return}r.analyticsSet=true;this.subscribeKey("isPaymentInProgress",t=>{var e;if(((e=r.currentPayment)==null?void 0:e.status)&&r.currentPayment.status!=="UNKNOWN"){const n={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[r.currentPayment.status];M.sendEvent({type:"track",event:n,properties:{message:r.currentPayment.status==="FAILED"?U.parseError(r.error):void 0,source:"pay",paymentId:r.paymentId||se,configuration:{network:r.paymentAsset.network,asset:r.paymentAsset.asset,recipient:r.recipient,amount:r.amount},currentPayment:{type:r.currentPayment.type,exchangeId:r.currentPayment.exchangeId,sessionId:r.currentPayment.sessionId,result:r.currentPayment.result}}})}})},async prepareTokenLogo(){if(!r.paymentAsset.metadata.logoURI){try{const{chainNamespace:t}=y.parseCaipNetworkId(r.paymentAsset.network);const e=await v.getImageByToken(r.paymentAsset.asset,t);r.paymentAsset.metadata.logoURI=e}catch{}}}};const rt=L`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:t})=>t.round};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:t})=>t.round};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  .payment-methods-container {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:t})=>t[8]};
    border-top-left-radius: ${({borderRadius:t})=>t[8]};
  }
`;var B=function(t,e,n,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(t,e,n,s);else for(var c=t.length-1;c>=0;c--)if(o=t[c])a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a;return i>3&&a&&Object.defineProperty(e,n,a),a};let _=class St extends C{constructor(){super();this.unsubscribe=[];this.amount=u.state.amount;this.namespace=void 0;this.paymentAsset=u.state.paymentAsset;this.activeConnectorIds=P.state.activeConnectorIds;this.caipAddress=void 0;this.exchanges=u.state.exchanges;this.isLoading=u.state.isLoading;this.initializeNamespace();this.unsubscribe.push(u.subscribeKey("amount",e=>this.amount=e));this.unsubscribe.push(P.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e));this.unsubscribe.push(u.subscribeKey("exchanges",e=>this.exchanges=e));this.unsubscribe.push(u.subscribeKey("isLoading",e=>this.isLoading=e));u.fetchExchanges();u.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return l`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){var n;const e=g.state.activeChain;this.namespace=e;this.caipAddress=(n=g.getAccountData(e))==null?void 0:n.caipAddress;this.unsubscribe.push(g.subscribeChainProp("accountState",s=>{this.caipAddress=s==null?void 0:s.caipAddress},e))}paymentDetailsTemplate(){const e=g.getAllRequestedCaipNetworks();const n=e.find(s=>s.caipNetworkId===this.paymentAsset.network);return l`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${X(this.amount||"0")}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||"Unknown"}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${(n==null?void 0:n.name)||"Unknown"}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${f(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${f(v.getNetworkImage(n))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){if(!et(this.paymentAsset.network)){return l``}return this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate()}connectedWalletTemplate(){const{name:e,image:n}=this.getWalletProperties({namespace:this.namespace});return l`
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${false}
          ?chevron=${true}
          ?fullSize=${false}
          ?rounded=${true}
          data-testid="wallet-payment-option"
          imageSrc=${f(n)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${false}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}disconnectedWalletTemplate(){return l`<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${true}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading){return l`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`}const e=this.exchanges.filter(n=>{if(st(this.paymentAsset)){return n.id===fe}return n.id!==fe});if(e.length===0){return l`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`}return e.map(n=>l`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(n)}
          data-testid="exchange-option-${n.id}"
          ?chevron=${true}
          imageSrc=${f(n.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${n.name}
          </wui-text>
        </wui-list-item>
      `)}templateSeparator(){return l`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace){throw new Error("Namespace not found")}if(this.caipAddress){z.push("PayQuote")}else{await P.connect();await G.open({view:"PayQuote"})}}onExchangePayment(e){u.setSelectedExchange(e);z.push("PayQuote")}async onDisconnect(){try{await T.disconnect();await G.open({view:"Pay"})}catch{console.error("Failed to disconnect");O.showError("Failed to disconnect")}}getWalletProperties({namespace:e}){if(!e){return{name:void 0,image:void 0}}const n=this.activeConnectorIds[e];if(!n){return{name:void 0,image:void 0}}const s=P.getConnector({id:n,namespace:e});if(!s){return{name:void 0,image:void 0}}const i=v.getConnectorImage(s);return{name:s.name,image:i}}};_.styles=rt;B([h()],_.prototype,"amount",void 0);B([h()],_.prototype,"namespace",void 0);B([h()],_.prototype,"paymentAsset",void 0);B([h()],_.prototype,"activeConnectorIds",void 0);B([h()],_.prototype,"caipAddress",void 0);B([h()],_.prototype,"exchanges",void 0);B([h()],_.prototype,"isLoading",void 0);_=B([k("w3m-pay-view")],_);const ot=L`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-container {
    position: relative;
    width: var(--pulse-size);
    height: var(--pulse-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--pulse-color);
    opacity: 0;
    animation: pulse var(--pulse-duration, 2s) ease-out infinite;
  }

  .pulse-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: var(--pulse-opacity, 0.3);
    }
    50% {
      opacity: calc(var(--pulse-opacity, 0.3) * 0.5);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;var W=function(t,e,n,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(t,e,n,s);else for(var c=t.length-1;c>=0;c--)if(o=t[c])a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a;return i>3&&a&&Object.defineProperty(e,n,a),a};const ct=3;const ut=2;const lt=.3;const dt="200px";const pt={"accent-primary":Ue.tokens.core.backgroundAccentPrimary};let D=class _t extends C{constructor(){super(...arguments);this.rings=ct;this.duration=ut;this.opacity=lt;this.size=dt;this.variant="accent-primary"}render(){const e=pt[this.variant];this.style.cssText=`
      --pulse-size: ${this.size};
      --pulse-duration: ${this.duration}s;
      --pulse-color: ${e};
      --pulse-opacity: ${this.opacity};
    `;const n=Array.from({length:this.rings},(s,i)=>this.renderRing(i,this.rings));return l`
      <div class="pulse-container">
        <div class="pulse-rings">${n}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(e,n){const s=e/n*this.duration;const i=`animation-delay: ${s}s;`;return l`<div class="pulse-ring" style=${i}></div>`}};D.styles=[Ie,ot];W([b({type:Number})],D.prototype,"rings",void 0);W([b({type:Number})],D.prototype,"duration",void 0);W([b({type:Number})],D.prototype,"opacity",void 0);W([b()],D.prototype,"size",void 0);W([b()],D.prototype,"variant",void 0);D=W([k("wui-pulse")],D);const Ee=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}];const Ae=["success","submitted","failure","timeout","refund"];const ht=L`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${({borderRadius:t})=>t.round};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${({borderRadius:t})=>t[4]};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    border: 3px solid ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  .token-badge-container.success {
    background-color: ${({tokens:t})=>t.theme.backgroundPrimary};
    border: 3px solid ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${({borderRadius:t})=>t.round};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  .token-image.error {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  .token-image.loading {
    background: ${({colors:t})=>t.accent010};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border: 1px solid ${({tokens:t})=>t.theme.foregroundSecondary};
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:t})=>t[6]};
    border-top-left-radius: ${({borderRadius:t})=>t[6]};
  }

  .payment-step-badge {
    padding: ${({spacing:t})=>t[1]} ${({spacing:t})=>t[2]};
    border-radius: ${({borderRadius:t})=>t[1]};
  }

  .payment-step-badge.loading {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  .payment-step-badge.error {
    background-color: ${({tokens:t})=>t.core.backgroundError};
  }

  .payment-step-badge.success {
    background-color: ${({tokens:t})=>t.core.backgroundSuccess};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:t})=>t.round};
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${({borderRadius:t})=>t.round};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
  }

  .step-icon-box.success {
    background-color: ${({tokens:t})=>t.core.backgroundSuccess};
  }
`;var $=function(t,e,n,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(t,e,n,s);else for(var c=t.length-1;c>=0;c--)if(o=t[c])a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a;return i>3&&a&&Object.defineProperty(e,n,a),a};const mt={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]};const gt=3e3;let A=class kt extends C{constructor(){super();this.unsubscribe=[];this.pollingInterval=null;this.paymentAsset=u.state.paymentAsset;this.quoteStatus=u.state.quoteStatus;this.quote=u.state.quote;this.amount=u.state.amount;this.namespace=void 0;this.caipAddress=void 0;this.profileName=null;this.activeConnectorIds=P.state.activeConnectorIds;this.selectedExchange=u.state.selectedExchange;this.initializeNamespace();this.unsubscribe.push(...[u.subscribeKey("quoteStatus",e=>this.quoteStatus=e),u.subscribeKey("quote",e=>this.quote=e),P.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e),u.subscribeKey("selectedExchange",e=>this.selectedExchange=e)])}connectedCallback(){super.connectedCallback();this.startPolling()}disconnectedCallback(){super.disconnectedCallback();this.stopPolling();this.unsubscribe.forEach(e=>e())}render(){return l`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){const e=X(this.amount||"0");const n=this.paymentAsset.metadata.symbol??"Unknown";const s=g.getAllRequestedCaipNetworks();const i=s.find(c=>c.caipNetworkId===this.paymentAsset.network);const a=this.quoteStatus==="failure"||this.quoteStatus==="timeout"||this.quoteStatus==="refund";const o=this.quoteStatus==="success"||this.quoteStatus==="submitted";if(o){return l`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`}if(a){return l`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`}return l`
      <wui-flex alignItems="center" justifyContent="center">
        <wui-flex class="token-image-container">
          <wui-pulse size="125px" rings="3" duration="4" opacity="0.5" variant="accent-primary">
            <wui-flex justifyContent="center" alignItems="center" class="token-image loading">
              <wui-icon name="paperPlaneTitle" color="accent-primary" size="inherit"></wui-icon>
            </wui-flex>
          </wui-pulse>

          <wui-flex
            justifyContent="center"
            alignItems="center"
            class="token-badge-container loading"
          >
            <wui-flex
              alignItems="center"
              justifyContent="center"
              gap="01"
              padding="1"
              class="token-badge"
            >
              <wui-image
                src=${f(v.getNetworkImage(i))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${e} ${n}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return l`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){const e=this.getStepsWithStatus();return l`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${e.map(n=>this.renderStep(n))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){var i;const e=this.quoteStatus==="failure"||this.quoteStatus==="timeout"||this.quoteStatus==="refund";const n=this.quoteStatus==="success"||this.quoteStatus==="submitted";if(e){return l`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `}if(n){return l`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `}const s=((i=this.quote)==null?void 0:i.timeInSeconds)??0;return l`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${s} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){var o,c,m;const e=g.getAllRequestedCaipNetworks();const n=e.find(R=>{var Y;const Q=(Y=this.quote)==null?void 0:Y.origin.currency.network;if(!Q){return false}const{chainId:V}=y.parseCaipNetworkId(Q);return N.isLowerCaseMatch(R.id.toString(),V.toString())});const s=E.formatNumber(((o=this.quote)==null?void 0:o.origin.amount)||"0",{decimals:((c=this.quote)==null?void 0:c.origin.currency.metadata.decimals)??0}).toString();const i=X(s);const a=((m=this.quote)==null?void 0:m.origin.currency.metadata.symbol)??"Unknown";return l`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${i}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${a}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${f(v.getNetworkImage(n))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${n==null?void 0:n.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return l`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary"
          >${this.selectedExchange?"Exchange":"Wallet"}</wui-text
        >

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){var i;const{image:e}=this.getWalletProperties({namespace:this.namespace});const{address:n}=this.caipAddress?y.parseCaipAddress(this.caipAddress):{};const s=(i=this.selectedExchange)==null?void 0:i.name;if(this.selectedExchange){return l`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${s}</wui-text>
          <wui-image src=${f(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `}return l`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${Le.getTruncateString({string:this.profileName||n||s||"",charsStart:this.profileName?16:4,charsEnd:this.profileName?0:6,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${f(e)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){const e=this.quoteStatus==="failure"||this.quoteStatus==="timeout"||this.quoteStatus==="refund";if(e){return Ee.map(n=>({...n,status:"failed"}))}return Ee.map(n=>{const s=mt[n.id]??[];const i=s.includes(this.quoteStatus)?"completed":"pending";return{...n,status:i}})}renderStep({title:e,icon:n,status:s}){const i={"step-icon-box":true,success:s==="completed"};return l`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${n} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${Ne(i)}>
            ${this.renderStatusIndicator(s)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${e}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(e){if(e==="completed"){return l`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`}if(e==="failed"){return l`<wui-icon size="sm" color="error" name="close"></wui-icon>`}if(e==="pending"){return l`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`}return null}startPolling(){if(!this.pollingInterval){this.fetchQuoteStatus();this.pollingInterval=setInterval(()=>{this.fetchQuoteStatus()},gt)}}stopPolling(){if(this.pollingInterval){clearInterval(this.pollingInterval);this.pollingInterval=null}}async fetchQuoteStatus(){const e=u.state.requestId;if(!e||Ae.includes(this.quoteStatus)){this.stopPolling()}else{try{await u.fetchQuoteStatus({requestId:e});if(Ae.includes(this.quoteStatus)){this.stopPolling()}}catch{this.stopPolling()}}}initializeNamespace(){var n,s;const e=g.state.activeChain;this.namespace=e;this.caipAddress=(n=g.getAccountData(e))==null?void 0:n.caipAddress;this.profileName=((s=g.getAccountData(e))==null?void 0:s.profileName)??null;this.unsubscribe.push(g.subscribeChainProp("accountState",i=>{this.caipAddress=i==null?void 0:i.caipAddress;this.profileName=(i==null?void 0:i.profileName)??null},e))}getWalletProperties({namespace:e}){if(!e){return{name:void 0,image:void 0}}const n=this.activeConnectorIds[e];if(!n){return{name:void 0,image:void 0}}const s=P.getConnector({id:n,namespace:e});if(!s){return{name:void 0,image:void 0}}const i=v.getConnectorImage(s);return{name:s.name,image:i}}};A.styles=ht;$([h()],A.prototype,"paymentAsset",void 0);$([h()],A.prototype,"quoteStatus",void 0);$([h()],A.prototype,"quote",void 0);$([h()],A.prototype,"amount",void 0);$([h()],A.prototype,"namespace",void 0);$([h()],A.prototype,"caipAddress",void 0);$([h()],A.prototype,"profileName",void 0);$([h()],A.prototype,"activeConnectorIds",void 0);$([h()],A.prototype,"selectedExchange",void 0);A=$([k("w3m-pay-loading-view")],A);const ft=qe`
  :host {
    display: block;
  }
`;var wt=function(t,e,n,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(t,e,n,s);else for(var c=t.length-1;c>=0;c--)if(o=t[c])a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a;return i>3&&a&&Object.defineProperty(e,n,a),a};let re=class Ct extends C{render(){return l`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-shimmer width="60px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Network Fee</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-shimmer
              width="75px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>

            <wui-flex alignItems="center" gap="01">
              <wui-shimmer width="14px" height="14px" rounded variant="light"></wui-shimmer>
              <wui-shimmer
                width="49px"
                height="14px"
                borderRadius="4xs"
                variant="light"
              ></wui-shimmer>
            </wui-flex>
          </wui-flex>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Service Fee</wui-text>
          <wui-shimmer width="75px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};re.styles=[ft];re=wt([k("w3m-pay-fees-skeleton")],re);const yt=L`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${({borderRadius:t})=>t.round};
  }
`;var Pe=function(t,e,n,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(t,e,n,s);else for(var c=t.length-1;c>=0;c--)if(o=t[c])a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a;return i>3&&a&&Object.defineProperty(e,n,a),a};let J=class $t extends C{constructor(){super();this.unsubscribe=[];this.quote=u.state.quote;this.unsubscribe.push(u.subscribeKey("quote",e=>this.quote=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var n,s,i;const e=E.formatNumber(((n=this.quote)==null?void 0:n.origin.amount)||"0",{decimals:((s=this.quote)==null?void 0:s.origin.currency.metadata.decimals)??0,round:6}).toString();return l`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${e} ${((i=this.quote)==null?void 0:i.origin.currency.metadata.symbol)||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map(a=>this.renderFee(a)):null}
      </wui-flex>
    `}renderFee(e){const n=e.id==="network";const s=E.formatNumber(e.amount||"0",{decimals:e.currency.metadata.decimals??0,round:6}).toString();if(n){const i=g.getAllRequestedCaipNetworks();const a=i.find(o=>N.isLowerCaseMatch(o.caipNetworkId,e.currency.network));return l`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${s} ${e.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${f(v.getNetworkImage(a))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${(a==null?void 0:a.name)||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return l`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${s} ${e.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};J.styles=[yt];Pe([h()],J.prototype,"quote",void 0);J=Pe([k("w3m-pay-fees")],J);const xt=L`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${({spacing:t})=>t[2]};
    min-height: 168px;
  }

  wui-icon {
    width: ${({spacing:t})=>t[8]};
    height: ${({spacing:t})=>t[8]};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`;var ve=function(t,e,n,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(t,e,n,s);else for(var c=t.length-1;c>=0;c--)if(o=t[c])a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a;return i>3&&a&&Object.defineProperty(e,n,a),a};let Z=class Rt extends C{constructor(){super();this.unsubscribe=[];this.selectedExchange=u.state.selectedExchange;this.unsubscribe.push(u.subscribeKey("selectedExchange",e=>this.selectedExchange=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){const e=Boolean(this.selectedExchange);return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        class="disabled-container"
      >
        <wui-icon name="coins" color="default" size="inherit"></wui-icon>

        <wui-text variant="md-regular" color="primary" align="center">
          You don't have enough funds to complete this transaction
        </wui-text>

        ${e?null:l`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:true,bubbles:true,composed:true}))}};Z.styles=[xt];ve([b({type:Array})],Z.prototype,"selectedExchange",void 0);Z=ve([k("w3m-pay-options-empty")],Z);const bt=L`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    border-radius: ${({borderRadius:t})=>t[4]};
    padding: ${({spacing:t})=>t[3]};
    min-height: 60px;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    bottom: -3px;
    right: -5px;
    border: 2px solid ${({tokens:t})=>t.theme.foregroundSecondary};
  }
`;var Et=function(t,e,n,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(t,e,n,s);else for(var c=t.length-1;c>=0;c--)if(o=t[c])a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a;return i>3&&a&&Object.defineProperty(e,n,a),a};let oe=class Ot extends C{render(){return l`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return l`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-shimmer
              width="32px"
              height="32px"
              rounded
              variant="light"
              class="token-image"
            ></wui-shimmer>
            <wui-shimmer
              width="16px"
              height="16px"
              rounded
              variant="light"
              class="chain-image"
            ></wui-shimmer>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-shimmer
              width="74px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
            <wui-shimmer
              width="46px"
              height="14px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}};oe.styles=[bt];oe=Et([k("w3m-pay-options-skeleton")],oe);const At=L`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    mask-image: var(--options-mask-image);
    -webkit-mask-image: var(--options-mask-image);
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    cursor: pointer;
    border-radius: ${({borderRadius:t})=>t[4]};
    padding: ${({spacing:t})=>t[3]};
    transition: background-color ${({durations:t})=>t["lg"]}
      ${({easings:t})=>t["ease-out-power-1"]};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${({borderRadius:t})=>t.round};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${({borderRadius:t})=>t.round};
    border: 2px solid ${({tokens:t})=>t.theme.backgroundPrimary};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    }
  }
`;var ee=function(t,e,n,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(t,e,n,s);else for(var c=t.length-1;c>=0;c--)if(o=t[c])a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a;return i>3&&a&&Object.defineProperty(e,n,a),a};const It=300;let j=class Ut extends C{constructor(){super();this.unsubscribe=[];this.options=[];this.selectedPaymentAsset=null}disconnectedCallback(){var n,s;this.unsubscribe.forEach(i=>i());(n=this.resizeObserver)==null?void 0:n.disconnect();const e=(s=this.shadowRoot)==null?void 0:s.querySelector(".pay-options-container");e==null?void 0:e.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){var n,s;const e=(n=this.shadowRoot)==null?void 0:n.querySelector(".pay-options-container");if(e){requestAnimationFrame(this.handleOptionsListScroll.bind(this));e==null?void 0:e.addEventListener("scroll",this.handleOptionsListScroll.bind(this));this.resizeObserver=new ResizeObserver(()=>{this.handleOptionsListScroll()});(s=this.resizeObserver)==null?void 0:s.observe(e);this.handleOptionsListScroll()}}render(){return l`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map(e=>this.payOptionTemplate(e))}
      </wui-flex>
    `}payOptionTemplate(e){var pe,he;const{network:n,metadata:s,asset:i,amount:a="0"}=e;const o=g.getAllRequestedCaipNetworks();const c=o.find(H=>H.caipNetworkId===n);const m=`${n}:${i}`;const R=`${(pe=this.selectedPaymentAsset)==null?void 0:pe.network}:${(he=this.selectedPaymentAsset)==null?void 0:he.asset}`;const Q=m===R;const V=E.bigNumber(a,{safe:true});const Y=V.gt(0);return l`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>{var H;return(H=this.onSelect)==null?void 0:H.call(this,e)}}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${f(s.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${f(v.getNetworkImage(c))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${s.symbol}</wui-text>
            ${Y?l`<wui-text variant="sm-regular" color="secondary">
                  ${V.round(6).toString()} ${s.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${Q?l`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){var s;const e=(s=this.shadowRoot)==null?void 0:s.querySelector(".pay-options-container");if(!e){return}const n=e.scrollHeight>It;if(n){e.style.setProperty("--options-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,
          black 50px,
          black calc(100% - 50px),
          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%
        )`);e.style.setProperty("--options-scroll--top-opacity",ge.interpolate([0,50],[0,1],e.scrollTop).toString());e.style.setProperty("--options-scroll--bottom-opacity",ge.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())}else{e.style.setProperty("--options-mask-image","none");e.style.setProperty("--options-scroll--top-opacity","0");e.style.setProperty("--options-scroll--bottom-opacity","0")}}};j.styles=[At];ee([b({type:Array})],j.prototype,"options",void 0);ee([b()],j.prototype,"selectedPaymentAsset",void 0);ee([b()],j.prototype,"onSelect",void 0);j=ee([k("w3m-pay-options")],j);const Nt=L`
  .payment-methods-container {
    background-color: ${({tokens:t})=>t.theme.foregroundPrimary};
    border-top-right-radius: ${({borderRadius:t})=>t[5]};
    border-top-left-radius: ${({borderRadius:t})=>t[5]};
  }

  .pay-options-container {
    background-color: ${({tokens:t})=>t.theme.foregroundSecondary};
    border-radius: ${({borderRadius:t})=>t[5]};
    padding: ${({spacing:t})=>t[1]};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${({borderRadius:t})=>t.round};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;var x=function(t,e,n,s){var i=arguments.length,a=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,n):s,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")a=Reflect.decorate(t,e,n,s);else for(var c=t.length-1;c>=0;c--)if(o=t[c])a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a;return i>3&&a&&Object.defineProperty(e,n,a),a};const K={eip155:"ethereum",solana:"solana",bip122:"bitcoin",ton:"ton"};const Pt={eip155:{icon:K.eip155,label:"EVM"},solana:{icon:K.solana,label:"Solana"},bip122:{icon:K.bip122,label:"Bitcoin"},ton:{icon:K.ton,label:"Ton"}};let w=class Lt extends C{constructor(){super();this.unsubscribe=[];this.profileName=null;this.paymentAsset=u.state.paymentAsset;this.namespace=void 0;this.caipAddress=void 0;this.amount=u.state.amount;this.recipient=u.state.recipient;this.activeConnectorIds=P.state.activeConnectorIds;this.selectedPaymentAsset=u.state.selectedPaymentAsset;this.selectedExchange=u.state.selectedExchange;this.isFetchingQuote=u.state.isFetchingQuote;this.quoteError=u.state.quoteError;this.quote=u.state.quote;this.isFetchingTokenBalances=u.state.isFetchingTokenBalances;this.tokenBalances=u.state.tokenBalances;this.isPaymentInProgress=u.state.isPaymentInProgress;this.exchangeUrlForQuote=u.state.exchangeUrlForQuote;this.completedTransactionsCount=0;this.unsubscribe.push(u.subscribeKey("paymentAsset",e=>this.paymentAsset=e));this.unsubscribe.push(u.subscribeKey("tokenBalances",e=>this.onTokenBalancesChanged(e)));this.unsubscribe.push(u.subscribeKey("isFetchingTokenBalances",e=>this.isFetchingTokenBalances=e));this.unsubscribe.push(P.subscribeKey("activeConnectorIds",e=>this.activeConnectorIds=e));this.unsubscribe.push(u.subscribeKey("selectedPaymentAsset",e=>this.selectedPaymentAsset=e));this.unsubscribe.push(u.subscribeKey("isFetchingQuote",e=>this.isFetchingQuote=e));this.unsubscribe.push(u.subscribeKey("quoteError",e=>this.quoteError=e));this.unsubscribe.push(u.subscribeKey("quote",e=>this.quote=e));this.unsubscribe.push(u.subscribeKey("amount",e=>this.amount=e));this.unsubscribe.push(u.subscribeKey("recipient",e=>this.recipient=e));this.unsubscribe.push(u.subscribeKey("isPaymentInProgress",e=>this.isPaymentInProgress=e));this.unsubscribe.push(u.subscribeKey("selectedExchange",e=>this.selectedExchange=e));this.unsubscribe.push(u.subscribeKey("exchangeUrlForQuote",e=>this.exchangeUrlForQuote=e));this.resetQuoteState();this.initializeNamespace();this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback();this.resetAssetsState();this.unsubscribe.forEach(e=>e())}updated(e){super.updated(e);const n=e.has("selectedPaymentAsset");if(n){this.fetchQuote()}}render(){return l`
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${["4","4","5","4"]}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${["1","0","1","0"]}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `}profileTemplate(){var o,c;if(this.selectedExchange){const m=E.formatNumber((o=this.quote)==null?void 0:o.origin.amount,{decimals:((c=this.quote)==null?void 0:c.origin.currency.metadata.decimals)??0}).toString();return l`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?l`<wui-text variant="lg-regular" color="primary">
                ${E.bigNumber(m,{safe:true}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:l`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}const e=U.getPlainAddress(this.caipAddress)??"";const{name:n,image:s}=this.getWalletProperties({namespace:this.namespace});const{icon:i,label:a}=Pt[this.namespace]??{};return l`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${f(this.profileName)}
          address=${f(e)}
          imageSrc=${f(s)}
          alt=${f(n)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${f(a)}
          address=${f(e)}
          icon=${f(i)}
          iconSize="xs"
          .enableGreenCircle=${false}
          alt=${f(a)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){var n,s;const e=g.state.activeChain;this.namespace=e;this.caipAddress=(n=g.getAccountData(e))==null?void 0:n.caipAddress;this.profileName=((s=g.getAccountData(e))==null?void 0:s.profileName)??null;this.unsubscribe.push(g.subscribeChainProp("accountState",i=>this.onAccountStateChanged(i),e))}async fetchTokens(){if(this.namespace){let e=void 0;if(this.caipAddress){const{chainId:n,chainNamespace:s}=y.parseCaipAddress(this.caipAddress);const i=`${s}:${n}`;const a=g.getAllRequestedCaipNetworks();e=a.find(o=>o.caipNetworkId===i)}await u.fetchTokens({caipAddress:this.caipAddress,caipNetwork:e,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){const{address:e}=this.caipAddress?y.parseCaipAddress(this.caipAddress):{};u.fetchQuote({amount:this.amount.toString(),address:e,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties({namespace:e}){if(!e){return{name:void 0,image:void 0}}const n=this.activeConnectorIds[e];if(!n){return{name:void 0,image:void 0}}const s=P.getConnector({id:n,namespace:e});if(!s){return{name:void 0,image:void 0}}const i=v.getConnectorImage(s);return{name:s.name,image:i}}paymentOptionsViewTemplate(){return l`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){const e=this.getPaymentAssetFromTokenBalances();if(this.isFetchingTokenBalances){return l`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`}if(e.length===0){return l`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`}const n={disabled:this.isFetchingQuote};return l`<w3m-pay-options
      class=${Ne(n)}
      .options=${e}
      .selectedPaymentAsset=${f(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){if(this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError){return l`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`}return l`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){var i,a,o;const e=this.isFetchingQuote||this.isFetchingTokenBalances;const n=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||Boolean(this.quoteError);const s=E.formatNumber(((i=this.quote)==null?void 0:i.origin.amount)??0,{decimals:((a=this.quote)==null?void 0:a.origin.currency.metadata.decimals)??0}).toString();if(this.selectedExchange){if(e||n){return l`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${true}></wui-shimmer>
        `}return l`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`}return l`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${e||n?l`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:l`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${X(s)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${((o=this.quote)==null?void 0:o.origin.currency.metadata.symbol)||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:e,isDisabled:n})}
      </wui-flex>
    `}actionButtonTemplate(e){const n=te(this.quote);const{isLoading:s,isDisabled:i}=e;let a="Pay";const o=n.length>1&&this.completedTransactionsCount===0;if(o){a="Approve"}return l`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${s||this.isPaymentInProgress}
        ?disabled=${i||this.isPaymentInProgress}
        @click=${()=>{if(n.length>0){this.onSendTransactions()}else{this.onTransfer()}}}
      >
        ${a}
        ${s?null:l`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){if(!this.namespace){return[]}const e=this.tokenBalances[this.namespace]??[];const n=e.map(i=>{try{return tt(i)}catch(a){return null}}).filter(i=>Boolean(i));const s=n.filter(i=>{const{chainId:a}=y.parseCaipNetworkId(i.network);const{chainId:o}=y.parseCaipNetworkId(this.paymentAsset.network);if(N.isLowerCaseMatch(i.asset,this.paymentAsset.asset)){return true}if(this.selectedExchange){return!N.isLowerCaseMatch(a.toString(),o.toString())}return true});return s}onTokenBalancesChanged(e){this.tokenBalances=e;const[n]=this.getPaymentAssetFromTokenBalances();if(n){u.setSelectedPaymentAsset(n)}}async onConnectOtherWallet(){await P.connect();await G.open({view:"PayQuote"})}onAccountStateChanged(e){const{address:n}=this.caipAddress?y.parseCaipAddress(this.caipAddress):{};this.caipAddress=e==null?void 0:e.caipAddress;this.profileName=(e==null?void 0:e.profileName)??null;if(n){const{address:s}=this.caipAddress?y.parseCaipAddress(this.caipAddress):{};if(!s){G.close()}else if(!N.isLowerCaseMatch(s,n)){this.resetAssetsState();this.resetQuoteState();this.fetchTokens()}}}onSelectedPaymentAssetChanged(e){if(!this.isFetchingQuote){u.setSelectedPaymentAsset(e)}}async onTransfer(){var n,s,i;const e=ie(this.quote);if(e){const a=N.isLowerCaseMatch((n=this.selectedPaymentAsset)==null?void 0:n.asset,e.deposit.currency);if(!a){throw new Error("Quote asset is not the same as the selected payment asset")}const o=((s=this.selectedPaymentAsset)==null?void 0:s.amount)??"0";const c=E.formatNumber(e.deposit.amount,{decimals:((i=this.selectedPaymentAsset)==null?void 0:i.metadata.decimals)??0}).toString();const m=E.bigNumber(o).gte(c);if(!m){O.showError("Insufficient funds");return}if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){const{address:R}=y.parseCaipAddress(this.caipAddress);await u.onTransfer({chainNamespace:this.namespace,fromAddress:R,toAddress:e.deposit.receiver,amount:c,paymentAsset:this.selectedPaymentAsset});u.setRequestId(e.requestId);z.push("PayLoading")}}}async onSendTransactions(){var o,c,m;const e=((o=this.selectedPaymentAsset)==null?void 0:o.amount)??"0";const n=E.formatNumber(((c=this.quote)==null?void 0:c.origin.amount)??0,{decimals:((m=this.selectedPaymentAsset)==null?void 0:m.metadata.decimals)??0}).toString();const s=E.bigNumber(e).gte(n);if(!s){O.showError("Insufficient funds");return}const i=te(this.quote);const[a]=te(this.quote,this.completedTransactionsCount);if(a&&this.namespace){await u.onSendTransaction({namespace:this.namespace,transactionStep:a});this.completedTransactionsCount+=1;const R=this.completedTransactionsCount===i.length;if(R){u.setRequestId(a.requestId);z.push("PayLoading")}}}onPayWithExchange(){if(this.exchangeUrlForQuote){const e=U.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!e){throw new Error("Could not create popup window")}e.location.href=this.exchangeUrlForQuote;const n=ie(this.quote);if(n){u.setRequestId(n.requestId)}u.initiatePayment();z.push("PayLoading")}}resetAssetsState(){u.setSelectedPaymentAsset(null)}resetQuoteState(){u.resetQuoteState()}};w.styles=Nt;x([h()],w.prototype,"profileName",void 0);x([h()],w.prototype,"paymentAsset",void 0);x([h()],w.prototype,"namespace",void 0);x([h()],w.prototype,"caipAddress",void 0);x([h()],w.prototype,"amount",void 0);x([h()],w.prototype,"recipient",void 0);x([h()],w.prototype,"activeConnectorIds",void 0);x([h()],w.prototype,"selectedPaymentAsset",void 0);x([h()],w.prototype,"selectedExchange",void 0);x([h()],w.prototype,"isFetchingQuote",void 0);x([h()],w.prototype,"quoteError",void 0);x([h()],w.prototype,"quote",void 0);x([h()],w.prototype,"isFetchingTokenBalances",void 0);x([h()],w.prototype,"tokenBalances",void 0);x([h()],w.prototype,"isPaymentInProgress",void 0);x([h()],w.prototype,"exchangeUrlForQuote",void 0);x([h()],w.prototype,"completedTransactionsCount",void 0);w=x([k("w3m-pay-quote-view")],w);export{p as A,u as P,A as W,d as a,w as b,_ as c};
