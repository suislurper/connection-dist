import{c as D,D as l,n as m,a as C,i as E,k as S,N as d,b as u,p as V,E as N,R as P,l as F,Q as M,j as K,W as Q,r as W,e as q,ab as _}from"./index-C2amc2Up.js";import{S as r}from"./SwapController-DFoc2bOD.js";import"./index-DMfR3PsY.js";const H={numericInputKeyDown(e,t,o){const i=["Backspace","Meta","Ctrl","a","A","c","C","x","X","v","V","ArrowLeft","ArrowRight","Tab"];const s=e.metaKey||e.ctrlKey;const n=e.key;const a=n.toLocaleLowerCase();const c=a==="a";const g=a==="c";const $=a==="v";const U=a==="x";const A=n===",";const R=n===".";const B=n>="0"&&n<="9";if(!s&&(c||g||$||U)){e.preventDefault()}if(t==="0"&&!A&&!R&&n==="0"){e.preventDefault()}if(t==="0"&&B){o(n);e.preventDefault()}if(A||R){if(!t){o("0.");e.preventDefault()}if((t==null?void 0:t.includes("."))||(t==null?void 0:t.includes(","))){e.preventDefault()}}if(!B&&!i.includes(n)&&!R&&!A){e.preventDefault()}}};const G=D`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e["3"]};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({spacing:e})=>e["3"]};
    border-radius: ${({borderRadius:e})=>e["3"]};
    cursor: pointer;
  }

  .details-content-container {
    padding: ${({spacing:e})=>e["2"]};
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:e})=>e["3"]};
    padding-left: ${({spacing:e})=>e["3"]};
    padding-right: ${({spacing:e})=>e["2"]};
    border-radius: calc(
      ${({borderRadius:e})=>e["1"]} + ${({borderRadius:e})=>e["1"]}
    );
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: ${({spacing:e})=>e["2"]};
  }
`;var T=function(e,t,o,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,o,i);else for(var c=e.length-1;c>=0;c--)if(a=e[c])n=(s<3?a(n):s>3?a(t,o,n):a(t,o))||n;return s>3&&n&&Object.defineProperty(t,o,n),n};const X=V.CONVERT_SLIPPAGE_TOLERANCE;let k=class ce extends E{constructor(){var t;super();this.unsubscribe=[];this.networkName=(t=S.state.activeCaipNetwork)==null?void 0:t.name;this.detailsOpen=false;this.sourceToken=r.state.sourceToken;this.toToken=r.state.toToken;this.toTokenAmount=r.state.toTokenAmount;this.sourceTokenPriceInUSD=r.state.sourceTokenPriceInUSD;this.toTokenPriceInUSD=r.state.toTokenPriceInUSD;this.priceImpact=r.state.priceImpact;this.maxSlippage=r.state.maxSlippage;this.networkTokenSymbol=r.state.networkTokenSymbol;this.inputError=r.state.inputError;this.unsubscribe.push(...[r.subscribe(o=>{this.sourceToken=o.sourceToken;this.toToken=o.toToken;this.toTokenAmount=o.toTokenAmount;this.priceImpact=o.priceImpact;this.maxSlippage=o.maxSlippage;this.sourceTokenPriceInUSD=o.sourceTokenPriceInUSD;this.toTokenPriceInUSD=o.toTokenPriceInUSD;this.inputError=o.inputError})])}render(){const t=this.toTokenAmount&&this.maxSlippage?d.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError){return null}const o=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return u`
      <wui-flex flexDirection="column" alignItems="center" gap="01" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","2","0","2"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="2">
                <wui-text variant="sm-regular" color="primary">
                  1 ${this.sourceToken.symbol} =
                  ${d.formatNumberToLocalString(o,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="sm-regular" color="secondary">
                  $${d.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?u`
                <wui-flex flexDirection="column" gap="2" class="details-content-container">
                  ${this.priceImpact?u` <wui-flex flexDirection="column" gap="2">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="2">
                            <wui-text
                              class="details-row-title"
                              variant="sm-regular"
                              color="secondary"
                            >
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="sm" color="default" name="info"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="sm-regular" color="secondary">
                              ${d.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?u`<wui-flex flexDirection="column" gap="2">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="2">
                            <wui-text
                              class="details-row-title"
                              variant="sm-regular"
                              color="secondary"
                            >
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${t?`Transaction will be reversed if you receive less than ${d.formatNumberToLocalString(t,6)} ${this.toToken.symbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="sm" color="default" name="info"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="sm-regular" color="secondary">
                              ${d.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${X}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="2">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="2">
                        <wui-text class="details-row-title" variant="sm-regular" color="secondary">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="sm-regular" color="secondary">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};k.styles=[G];T([l()],k.prototype,"networkName",void 0);T([m()],k.prototype,"detailsOpen",void 0);T([l()],k.prototype,"sourceToken",void 0);T([l()],k.prototype,"toToken",void 0);T([l()],k.prototype,"toTokenAmount",void 0);T([l()],k.prototype,"sourceTokenPriceInUSD",void 0);T([l()],k.prototype,"toTokenPriceInUSD",void 0);T([l()],k.prototype,"priceImpact",void 0);T([l()],k.prototype,"maxSlippage",void 0);T([l()],k.prototype,"networkTokenSymbol",void 0);T([l()],k.prototype,"inputError",void 0);k=T([C("w3m-swap-details")],k);const Y=D`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${({borderRadius:e})=>e["5"]};
    padding: ${({spacing:e})=>e["5"]};
    padding-right: ${({spacing:e})=>e["3"]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill ${({durations:e})=>e["md"]}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: ${({tokens:e})=>e.core.glass010};
  }

  :host wui-flex .input_mask__background {
    fill: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var z=function(e,t,o,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,o,i);else for(var c=e.length-1;c>=0;c--)if(a=e[c])n=(s<3?a(n):s>3?a(t,o,n):a(t,o))||n;return s>3&&n&&Object.defineProperty(t,o,n),n};let j=class ue extends E{constructor(){super(...arguments);this.target="sourceToken"}render(){return u`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="1"
        >
          <wui-shimmer width="80px" height="40px" rounded variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return u`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="1"
      >
        <wui-shimmer width="80px" height="40px" rounded variant="light"></wui-shimmer>
      </wui-flex>
    `}};j.styles=[Y];z([m()],j.prototype,"target",void 0);j=z([C("w3m-swap-input-skeleton")],j);const Z=D`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${({borderRadius:e})=>e["5"]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e["5"]};
    padding-right: ${({spacing:e})=>e["3"]};
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    position: relative;
    transition: box-shadow ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e["lg"]};
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.core.glass010};
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({tokens:e})=>e.core.glass010};
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var y=function(e,t,o,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,o,i);else for(var c=e.length-1;c>=0;c--)if(a=e[c])n=(s<3?a(n):s>3?a(t,o,n):a(t,o))||n;return s>3&&n&&Object.defineProperty(t,o,n),n};const J=5e-5;let x=class de extends E{constructor(){super(...arguments);this.focused=false;this.price=0;this.target="sourceToken";this.onSetAmount=null;this.onSetMaxValue=null;this.autoFocus=false}firstUpdated(){if(this.autoFocus){requestAnimationFrame(()=>{var o;const t=(o=this.shadowRoot)==null?void 0:o.querySelector("input");t==null?void 0:t.focus()})}}render(){const t=this.marketValue||"0";const o=d.bigNumber(t).gt("0");return u`
      <wui-flex
        class="${this.focused?"focus":""}"
        justifyContent="space-between"
        alignItems="center"
      >
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(true)}
            @focusout=${()=>this.onFocusChange(false)}
            ?disabled=${this.disabled}
            value=${this.value||""}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
            pattern="[0-9,.]*"
          />
          <wui-text class="market-value" variant="sm-regular" color="secondary">
            ${o?`$${d.formatNumberToLocalString(this.marketValue,2)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(t){return H.numericInputKeyDown(t,this.value,o=>{var i;return(i=this.onSetAmount)==null?void 0:i.call(this,this.target,o)})}dispatchInputChangeEvent(t){if(!this.onSetAmount){return}const o=t.target.value.replace(/[^0-9.]/gu,"");if(o===","||o==="."){this.onSetAmount(this.target,"0.")}else if(o.endsWith(",")){this.onSetAmount(this.target,o.replace(",","."))}else{this.onSetAmount(this.target,o)}}setMaxValueToInput(){var t;(t=this.onSetMaxValue)==null?void 0:t.call(this,this.target,this.balance)}templateTokenSelectButton(){if(!this.token){return u` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="neutral-secondary"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}return u`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="1"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="1"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `}tokenBalanceTemplate(){const t=d.multiply(this.balance,this.price);const o=t?t==null?void 0:t.gt(J):false;return u`
      ${o?u`<wui-text variant="sm-regular" color="secondary">
            ${d.formatNumberToLocalString(this.balance,2)}
          </wui-text>`:null}
      ${this.target==="sourceToken"?this.tokenActionButtonTemplate(o):null}
    `}tokenActionButtonTemplate(t){if(t){return u` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-primary" variant="sm-medium">Max</wui-text>
      </button>`}return u` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-primary" variant="sm-medium">Buy</wui-text>
    </button>`}onFocusChange(t){this.focused=t}onSelectToken(){N.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"});P.push("SwapSelectToken",{target:this.target})}onBuyToken(){P.push("OnRampProviders")}};x.styles=[Z];y([m()],x.prototype,"focused",void 0);y([m()],x.prototype,"balance",void 0);y([m()],x.prototype,"value",void 0);y([m()],x.prototype,"price",void 0);y([m()],x.prototype,"marketValue",void 0);y([m()],x.prototype,"disabled",void 0);y([m()],x.prototype,"target",void 0);y([m()],x.prototype,"token",void 0);y([m()],x.prototype,"onSetAmount",void 0);y([m()],x.prototype,"onSetMaxValue",void 0);y([m({type:Boolean})],x.prototype,"autoFocus",void 0);x=y([C("w3m-swap-input")],x);const ee=D`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e["4"]};
  }

  .action-button:disabled {
    border-color: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  .swap-inputs-container {
    position: relative;
  }

  wui-icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e["10"]} !important;
    border: 4px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: ${({spacing:e})=>e["2"]};
    border-radius: ${({borderRadius:e})=>e["4"]};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: ${({spacing:e})=>e["2"]};
  }

  .details-container > wui-flex {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e["3"]};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({spacing:e})=>e["3"]};
    border-radius: ${({borderRadius:e})=>e["3"]};
    transition: background ${({durations:e})=>e["lg"]}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background;
  }

  .details-container > wui-flex > button:hover {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .details-content-container {
    padding: ${({spacing:e})=>e["2"]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:e})=>e["3"]} ${({spacing:e})=>e["5"]};
    border-radius: ${({borderRadius:e})=>e["3"]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var f=function(e,t,o,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,o,i);else for(var c=e.length-1;c>=0;c--)if(a=e[c])n=(s<3?a(n):s>3?a(t,o,n):a(t,o))||n;return s>3&&n&&Object.defineProperty(t,o,n),n};let p=class pe extends E{subscribe({resetSwapState:t,initializeSwapState:o}){return()=>{S.subscribeKey("activeCaipNetwork",i=>this.onCaipNetworkChange({newCaipNetwork:i,resetSwapState:t,initializeSwapState:o}));S.subscribeChainProp("accountState",i=>{this.onCaipAddressChange({newCaipAddress:i==null?void 0:i.caipAddress,resetSwapState:t,initializeSwapState:o})})}}constructor(){var t,o,i;super();this.unsubscribe=[];this.initialParams=(t=P.state.data)==null?void 0:t.swap;this.detailsOpen=false;this.caipAddress=(o=S.getAccountData())==null?void 0:o.caipAddress;this.caipNetworkId=(i=S.state.activeCaipNetwork)==null?void 0:i.caipNetworkId;this.initialized=r.state.initialized;this.loadingQuote=r.state.loadingQuote;this.loadingPrices=r.state.loadingPrices;this.loadingTransaction=r.state.loadingTransaction;this.sourceToken=r.state.sourceToken;this.sourceTokenAmount=r.state.sourceTokenAmount;this.sourceTokenPriceInUSD=r.state.sourceTokenPriceInUSD;this.toToken=r.state.toToken;this.toTokenAmount=r.state.toTokenAmount;this.toTokenPriceInUSD=r.state.toTokenPriceInUSD;this.inputError=r.state.inputError;this.fetchError=r.state.fetchError;this.lastTokenPriceUpdate=0;this.minTokenPriceUpdateInterval=1e4;this.visibilityChangeHandler=()=>{if(document==null?void 0:document.hidden){clearInterval(this.interval);this.interval=void 0}else{this.startTokenPriceInterval()}};this.startTokenPriceInterval=()=>{if(this.interval&&Date.now()-this.lastTokenPriceUpdate<this.minTokenPriceUpdateInterval){return}if(this.lastTokenPriceUpdate&&Date.now()-this.lastTokenPriceUpdate>this.minTokenPriceUpdateInterval){this.fetchTokensAndValues()}clearInterval(this.interval);this.interval=setInterval(()=>{this.fetchTokensAndValues()},this.minTokenPriceUpdateInterval)};this.watchTokensAndValues=()=>{if(!this.sourceToken||!this.toToken){return}this.subscribeToVisibilityChange();this.startTokenPriceInterval()};this.onDebouncedGetSwapCalldata=F.debounce(async()=>{await r.swapTokens()},200);this.subscribe({resetSwapState:true,initializeSwapState:false})();this.unsubscribe.push(...[this.subscribe({resetSwapState:false,initializeSwapState:true}),M.subscribeKey("open",s=>{if(!s){r.resetState()}}),P.subscribeKey("view",s=>{if(!s.includes("Swap")){r.resetValues()}}),r.subscribe(s=>{this.initialized=s.initialized;this.loadingQuote=s.loadingQuote;this.loadingPrices=s.loadingPrices;this.loadingTransaction=s.loadingTransaction;this.sourceToken=s.sourceToken;this.sourceTokenAmount=s.sourceTokenAmount;this.sourceTokenPriceInUSD=s.sourceTokenPriceInUSD;this.toToken=s.toToken;this.toTokenAmount=s.toTokenAmount;this.toTokenPriceInUSD=s.toTokenPriceInUSD;this.inputError=s.inputError;this.fetchError=s.fetchError;if(s.sourceToken&&s.toToken){this.watchTokensAndValues()}})])}async firstUpdated(){r.initializeState();this.watchTokensAndValues();await this.handleSwapParameters()}disconnectedCallback(){this.unsubscribe.forEach(t=>t==null?void 0:t());clearInterval(this.interval);document==null?void 0:document.removeEventListener("visibilitychange",this.visibilityChangeHandler)}render(){return u`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="3">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}subscribeToVisibilityChange(){document==null?void 0:document.removeEventListener("visibilitychange",this.visibilityChangeHandler);document==null?void 0:document.addEventListener("visibilitychange",this.visibilityChangeHandler)}fetchTokensAndValues(){r.getNetworkTokenPrice();r.getMyTokensWithBalance();r.swapTokens();this.lastTokenPriceUpdate=Date.now()}templateSwap(){return u`
      <wui-flex flexDirection="column" gap="3">
        <wui-flex flexDirection="column" alignItems="center" gap="2" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){const t=!this.sourceTokenAmount||this.sourceTokenAmount==="0";if(this.fetchError){return"Swap"}if(!this.sourceToken||!this.toToken){return"Select token"}if(t){return"Enter amount"}if(this.inputError){return this.inputError}return"Review swap"}templateReplaceTokensButton(){return u`
      <wui-flex class="replace-tokens-button-container">
        <wui-icon-box
          @click=${this.onSwitchTokens.bind(this)}
          icon="recycleHorizontal"
          size="md"
          variant="default"
        ></wui-icon-box>
      </wui-flex>
    `}templateLoading(){return u`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" alignItems="center" gap="2" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(t,o){var c,g;const i=(c=r.state.myTokensWithBalance)==null?void 0:c.find($=>($==null?void 0:$.address)===(o==null?void 0:o.address));const s=t==="toToken"?this.toTokenAmount:this.sourceTokenAmount;const n=t==="toToken"?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD;const a=d.parseLocalStringToNumber(s)*n;return u`<w3m-swap-input
      .value=${t==="toToken"?this.toTokenAmount:this.sourceTokenAmount}
      .disabled=${t==="toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${t}
      .token=${o}
      .balance=${(g=i==null?void 0:i.quantity)==null?void 0:g.numeric}
      .price=${i==null?void 0:i.price}
      .marketValue=${a}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
      ?autoFocus=${t==="sourceToken"}
    ></w3m-swap-input>`}onSetMaxValue(t,o){const i=d.bigNumber(o||"0");if(!i.gt(0)){this.handleChangeAmount(t,"0");return}const s=t==="sourceToken"?this.sourceToken:this.toToken;const n=(s==null?void 0:s.decimals)??18;const{networkAddress:a}=r.getParams();const c=r.state.gasFee;if(t==="sourceToken"&&(s==null?void 0:s.address)===a&&c&&c!=="0"){const g=150000n;const $=g*BigInt(c);const U=d.bigNumber($.toString()).div(d.bigNumber(10).pow(n));const A=i.minus(U);this.handleChangeAmount(t,A.gt(0)?A.toFixed(n,0):"0")}else{this.handleChangeAmount(t,i.toFixed(n,0))}}templateDetails(){if(!this.sourceToken||!this.toToken||this.inputError){return null}return u`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}handleChangeAmount(t,o){r.clearError();if(t==="sourceToken"){r.setSourceTokenAmount(o)}else{r.setToTokenAmount(o)}this.onDebouncedGetSwapCalldata()}templateActionButton(){const t=!this.toToken||!this.sourceToken;const o=!this.sourceTokenAmount||this.sourceTokenAmount==="0";const i=this.loadingQuote||this.loadingPrices||this.loadingTransaction;const s=i||t||o||this.inputError;return u` <wui-flex gap="2">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant="accent-primary"
        ?loading=${Boolean(i)}
        ?disabled=${Boolean(s)}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}async onSwitchTokens(){await r.switchTokens()}async onSwapPreview(){var t,o;if(this.fetchError){await r.swapTokens()}N.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:((t=this.sourceToken)==null?void 0:t.symbol)||"",swapToToken:((o=this.toToken)==null?void 0:o.symbol)||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:K(S.state.activeChain)===Q.ACCOUNT_TYPES.SMART_ACCOUNT}});P.push("SwapPreview")}async handleSwapParameters(){if(!this.initialParams){return}if(!r.state.initialized){const t=new Promise(o=>{const i=r.subscribeKey("initialized",s=>{if(s){i==null?void 0:i();o()}})});await t}await this.setSwapParameters(this.initialParams)}async setSwapParameters({amount:t,fromToken:o,toToken:i}){if(!r.state.tokens||!r.state.myTokensWithBalance){const n=new Promise(a=>{const c=r.subscribeKey("myTokensWithBalance",g=>{if(g&&g.length>0){c==null?void 0:c();a()}});setTimeout(()=>{c==null?void 0:c();a()},5e3)});await n}const s=[...r.state.tokens||[],...r.state.myTokensWithBalance||[]];if(o){const n=s.find(a=>a.symbol.toLowerCase()===o.toLowerCase());if(n){r.setSourceToken(n)}}if(i){const n=s.find(a=>a.symbol.toLowerCase()===i.toLowerCase());if(n){r.setToToken(n)}}if(t&&!isNaN(Number(t))){r.setSourceTokenAmount(t)}}onCaipAddressChange({newCaipAddress:t,resetSwapState:o,initializeSwapState:i}){if(this.caipAddress!==t){this.caipAddress=t;if(o){r.resetState()}if(i){r.initializeState()}}}onCaipNetworkChange({newCaipNetwork:t,resetSwapState:o,initializeSwapState:i}){if(this.caipNetworkId!==(t==null?void 0:t.caipNetworkId)){this.caipNetworkId=t==null?void 0:t.caipNetworkId;if(o){r.resetState()}if(i){r.initializeState()}}}};p.styles=ee;f([m({type:Object})],p.prototype,"initialParams",void 0);f([l()],p.prototype,"interval",void 0);f([l()],p.prototype,"detailsOpen",void 0);f([l()],p.prototype,"caipAddress",void 0);f([l()],p.prototype,"caipNetworkId",void 0);f([l()],p.prototype,"initialized",void 0);f([l()],p.prototype,"loadingQuote",void 0);f([l()],p.prototype,"loadingPrices",void 0);f([l()],p.prototype,"loadingTransaction",void 0);f([l()],p.prototype,"sourceToken",void 0);f([l()],p.prototype,"sourceTokenAmount",void 0);f([l()],p.prototype,"sourceTokenPriceInUSD",void 0);f([l()],p.prototype,"toToken",void 0);f([l()],p.prototype,"toTokenAmount",void 0);f([l()],p.prototype,"toTokenPriceInUSD",void 0);f([l()],p.prototype,"inputError",void 0);f([l()],p.prototype,"fetchError",void 0);f([l()],p.prototype,"lastTokenPriceUpdate",void 0);p=f([C("w3m-swap-view")],p);const te=D`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e["2"]};
    padding: ${({spacing:e})=>e["2"]};
    height: 40px;
    border: none;
    border-radius: 80px;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    cursor: pointer;
    transition: background ${({durations:e})=>e["lg"]}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background;
  }

  .token-item:hover {
    background: ${({tokens:e})=>e.core.glass010};
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:e})=>e["3"]} ${({spacing:e})=>e["5"]};
    border-radius: ${({borderRadius:e})=>e["3"]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .action-buttons-container {
    width: 100%;
    gap: ${({spacing:e})=>e["2"]};
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: ${({borderRadius:e})=>e["4"]};
    border: none;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e["3"]};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({spacing:e})=>e["3"]};
    border-radius: ${({borderRadius:e})=>e["3"]};
    transition: background ${({durations:e})=>e["lg"]}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background;
  }

  .details-container > wui-flex > button:hover {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .details-content-container {
    padding: ${({spacing:e})=>e["2"]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:e})=>e["3"]} ${({spacing:e})=>e["5"]};
    border-radius: ${({borderRadius:e})=>e["3"]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var w=function(e,t,o,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,o,i);else for(var c=e.length-1;c>=0;c--)if(a=e[c])n=(s<3?a(n):s>3?a(t,o,n):a(t,o))||n;return s>3&&n&&Object.defineProperty(t,o,n),n};let h=class he extends E{constructor(){var t;super();this.unsubscribe=[];this.detailsOpen=true;this.approvalTransaction=r.state.approvalTransaction;this.swapTransaction=r.state.swapTransaction;this.sourceToken=r.state.sourceToken;this.sourceTokenAmount=r.state.sourceTokenAmount??"";this.sourceTokenPriceInUSD=r.state.sourceTokenPriceInUSD;this.balanceSymbol=(t=S.getAccountData())==null?void 0:t.balanceSymbol;this.toToken=r.state.toToken;this.toTokenAmount=r.state.toTokenAmount??"";this.toTokenPriceInUSD=r.state.toTokenPriceInUSD;this.caipNetwork=S.state.activeCaipNetwork;this.inputError=r.state.inputError;this.loadingQuote=r.state.loadingQuote;this.loadingApprovalTransaction=r.state.loadingApprovalTransaction;this.loadingBuildTransaction=r.state.loadingBuildTransaction;this.loadingTransaction=r.state.loadingTransaction;this.unsubscribe.push(...[S.subscribeChainProp("accountState",o=>{if((o==null?void 0:o.balanceSymbol)!==this.balanceSymbol){P.goBack()}}),S.subscribeKey("activeCaipNetwork",o=>{if(this.caipNetwork!==o){this.caipNetwork=o}}),r.subscribe(o=>{this.approvalTransaction=o.approvalTransaction;this.swapTransaction=o.swapTransaction;this.sourceToken=o.sourceToken;this.toToken=o.toToken;this.toTokenPriceInUSD=o.toTokenPriceInUSD;this.sourceTokenAmount=o.sourceTokenAmount??"";this.toTokenAmount=o.toTokenAmount??"";this.inputError=o.inputError;if(o.inputError){P.goBack()}this.loadingQuote=o.loadingQuote;this.loadingApprovalTransaction=o.loadingApprovalTransaction;this.loadingBuildTransaction=o.loadingBuildTransaction;this.loadingTransaction=o.loadingTransaction})])}firstUpdated(){r.getTransaction();this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(t=>t==null?void 0:t());clearInterval(this.interval)}render(){return u`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="3">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{if(!r.getApprovalLoadingState()){r.getTransaction()}},1e4)}templateSwap(){var g,$,U,A;const t=`${d.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${(g=this.sourceToken)==null?void 0:g.symbol}`;const o=`${d.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${($=this.toToken)==null?void 0:$.symbol}`;const i=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD;const s=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD;const n=d.formatNumberToLocalString(i);const a=d.formatNumberToLocalString(s);const c=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return u`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="4">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="4"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="01">
              <wui-text variant="sm-regular" color="secondary">Send</wui-text>
              <wui-text variant="md-regular" color="primary">$${n}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${(U=this.sourceToken)==null?void 0:U.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="default" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="4"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="01">
              <wui-text variant="sm-regular" color="secondary">Receive</wui-text>
              <wui-text variant="md-regular" color="primary">$${a}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${o}
              imageSrc=${(A=this.toToken)==null?void 0:A.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="2">
          <wui-icon size="sm" color="default" name="info"></wui-icon>
          <wui-text variant="sm-regular" color="secondary">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral-secondary"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="md-medium" color="secondary">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="accent-primary"
            ?loading=${c}
            ?disabled=${c}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="md-medium" color="invert"> ${this.actionButtonLabel()} </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){if(!this.sourceToken||!this.toToken||this.inputError){return null}return u`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}actionButtonLabel(){if(this.loadingApprovalTransaction){return"Approving..."}if(this.approvalTransaction){return"Approve"}return"Swap"}onCancelTransaction(){P.goBack()}onSendTransaction(){if(this.approvalTransaction){r.sendTransactionForApproval(this.approvalTransaction)}else{r.sendTransactionForSwap(this.swapTransaction)}}};h.styles=te;w([l()],h.prototype,"interval",void 0);w([l()],h.prototype,"detailsOpen",void 0);w([l()],h.prototype,"approvalTransaction",void 0);w([l()],h.prototype,"swapTransaction",void 0);w([l()],h.prototype,"sourceToken",void 0);w([l()],h.prototype,"sourceTokenAmount",void 0);w([l()],h.prototype,"sourceTokenPriceInUSD",void 0);w([l()],h.prototype,"balanceSymbol",void 0);w([l()],h.prototype,"toToken",void 0);w([l()],h.prototype,"toTokenAmount",void 0);w([l()],h.prototype,"toTokenPriceInUSD",void 0);w([l()],h.prototype,"caipNetwork",void 0);w([l()],h.prototype,"inputError",void 0);w([l()],h.prototype,"loadingQuote",void 0);w([l()],h.prototype,"loadingApprovalTransaction",void 0);w([l()],h.prototype,"loadingBuildTransaction",void 0);w([l()],h.prototype,"loadingTransaction",void 0);h=w([C("w3m-swap-preview-view")],h);const oe=D`
  :host {
    width: 100%;
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: ${({spacing:e})=>e["3"]};
    padding: ${({spacing:e})=>e["2"]};
    padding-right: ${({spacing:e})=>e["4"]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e["4"]};
    color: ${({tokens:e})=>e.theme.foregroundSecondary};
    transition:
      background-color ${({durations:e})=>e["lg"]}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e["lg"]} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    :host > wui-flex:active {
      background-color: ${({tokens:e})=>e.core.glass010};
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e["20"]};
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    border-radius: ${({borderRadius:e})=>e["8"]};
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: ${({borderRadius:e})=>e["2"]};
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var L=function(e,t,o,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,o,i);else for(var c=e.length-1;c>=0;c--)if(a=e[c])n=(s<3?a(n):s>3?a(t,o,n):a(t,o))||n;return s>3&&n&&Object.defineProperty(t,o,n),n};let I=class me extends E{constructor(){super();this.observer=new IntersectionObserver(()=>void 0);this.imageSrc=void 0;this.name=void 0;this.symbol=void 0;this.price=void 0;this.amount=void 0;this.visible=false;this.imageError=false;this.observer=new IntersectionObserver(t=>{t.forEach(o=>{if(o.isIntersecting){this.visible=true}else{this.visible=false}})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var o;if(!this.visible){return null}const t=this.amount&&this.price?(o=d.multiply(this.price,this.amount))==null?void 0:o.toFixed(3):null;return u`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="1">
          <wui-flex justifyContent="space-between">
            <wui-text variant="md-medium" color="primary" lineClamp="1">${this.name}</wui-text>
            ${t?u`
                  <wui-text variant="md-medium" color="primary">
                    $${d.formatNumberToLocalString(t,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="sm-regular" color="secondary" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?u`<wui-text variant="sm-regular" color="secondary">
                  ${d.formatNumberToLocalString(this.amount,5)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){if(this.imageError){return u`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`}if(this.imageSrc){return u`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`}return null}imageLoadError(){this.imageError=true}};I.styles=[W,q,oe];L([m()],I.prototype,"imageSrc",void 0);L([m()],I.prototype,"name",void 0);L([m()],I.prototype,"symbol",void 0);L([m()],I.prototype,"price",void 0);L([m()],I.prototype,"amount",void 0);L([l()],I.prototype,"visible",void 0);L([l()],I.prototype,"imageError",void 0);I=L([C("wui-token-list-item")],I);const ie=D`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: flex;
    column-gap: ${({spacing:e})=>e["3"]};
    padding: ${({spacing:e})=>e["2"]};
    padding-right: ${({spacing:e})=>e["4"]};
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var ne=function(e,t,o,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,o,i);else for(var c=e.length-1;c>=0;c--)if(a=e[c])n=(s<3?a(n):s>3?a(t,o,n):a(t,o))||n;return s>3&&n&&Object.defineProperty(t,o,n),n};let O=class fe extends E{render(){return u`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-flex flexDirection="column" gap="1" alignItems="flex-end">
          <wui-shimmer width="24px" height="12px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="32px" height="12px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};O.styles=[W,ie];O=ne([C("wui-token-list-item-loader")],O);const se=D`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid ${({tokens:e})=>e.core.glass010};
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e["2"]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e["3"]};
    padding: ${({spacing:e})=>e["2"]};
    align-items: center;
    transition: background-color ${({durations:e})=>e["lg"]}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  .select-network-button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: ${({borderRadius:e})=>e["4"]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }
`;var v=function(e,t,o,i){var s=arguments.length,n=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,o,i);else for(var c=e.length-1;c>=0;c--)if(a=e[c])n=(s<3?a(n):s>3?a(t,o,n):a(t,o))||n;return s>3&&n&&Object.defineProperty(t,o,n),n};let b=class we extends E{constructor(){var t;super();this.unsubscribe=[];this.targetToken=(t=P.state.data)==null?void 0:t.target;this.sourceToken=r.state.sourceToken;this.sourceTokenAmount=r.state.sourceTokenAmount;this.toToken=r.state.toToken;this.myTokensWithBalance=r.state.myTokensWithBalance;this.popularTokens=r.state.popularTokens;this.suggestedTokens=r.state.suggestedTokens;this.tokensLoading=r.state.tokensLoading;this.searchValue="";this.unsubscribe.push(r.subscribe(o=>{this.sourceToken=o.sourceToken;this.toToken=o.toToken;this.myTokensWithBalance=o.myTokensWithBalance;this.popularTokens=o.popularTokens;this.suggestedTokens=o.suggestedTokens;this.tokensLoading=o.tokensLoading}))}async firstUpdated(){await r.getTokenList()}updated(){var i,s;const t=(i=this.renderRoot)==null?void 0:i.querySelector(".suggested-tokens-container");t==null?void 0:t.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));const o=(s=this.renderRoot)==null?void 0:s.querySelector(".tokens");o==null?void 0:o.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){var i,s;super.disconnectedCallback();const t=(i=this.renderRoot)==null?void 0:i.querySelector(".suggested-tokens-container");const o=(s=this.renderRoot)==null?void 0:s.querySelector(".tokens");t==null?void 0:t.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));o==null?void 0:o.removeEventListener("scroll",this.handleTokenListScroll.bind(this));clearInterval(this.interval)}render(){return u`
      <wui-flex flexDirection="column" gap="3">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(t){if(this.targetToken==="sourceToken"){r.setSourceToken(t)}else{r.setToToken(t);if(this.sourceToken&&this.sourceTokenAmount){r.swapTokens()}}P.goBack()}templateSearchInput(){return u`
      <wui-flex .padding=${["1","3","0","3"]} gap="2">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateMyTokens(){const t=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[];const o=this.filterTokensWithText(t,this.searchValue);if((o==null?void 0:o.length)>0){return u`<wui-flex justifyContent="flex-start" padding="2">
          <wui-text variant="md-medium" color="secondary">Your tokens</wui-text>
        </wui-flex>
        ${o.map(i=>{var n,a,c;const s=i.symbol===((n=this.sourceToken)==null?void 0:n.symbol)||i.symbol===((a=this.toToken)==null?void 0:a.symbol);return u`
            <wui-token-list-item
              data-testid="swap-select-token-item-${i.symbol}"
              name=${i.name}
              ?disabled=${s}
              symbol=${i.symbol}
              price=${i==null?void 0:i.price}
              amount=${(c=i==null?void 0:i.quantity)==null?void 0:c.numeric}
              imageSrc=${i.logoUri}
              @click=${()=>{if(!s){this.onSelectToken(i)}}}
            >
            </wui-token-list-item>
          `})}`}return null}templateAllTokens(){const t=this.popularTokens?this.popularTokens:[];const o=this.filterTokensWithText(t,this.searchValue);if(this.tokensLoading){return u`
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
      `}if((o==null?void 0:o.length)>0){return u`
        ${o.map(i=>u`
            <wui-token-list-item
              data-testid="swap-select-token-item-${i.symbol}"
              name=${i.name}
              symbol=${i.symbol}
              imageSrc=${i.logoUri}
              @click=${()=>this.onSelectToken(i)}
            >
            </wui-token-list-item>
          `)}
      `}return null}templateTokens(){return u`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","2","2","2"]} flexDirection="column">
          ${this.templateMyTokens()}
          <wui-flex justifyContent="flex-start" padding="3">
            <wui-text variant="md-medium" color="secondary">Tokens</wui-text>
          </wui-flex>
          ${this.templateAllTokens()}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const t=this.suggestedTokens?this.suggestedTokens.slice(0,8):null;if(this.tokensLoading){return u`
        <wui-flex
          class="suggested-tokens-container"
          .padding=${["0","3","0","3"]}
          gap="2"
        >
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
        </wui-flex>
      `}if(!t){return null}return u`
      <wui-flex
        class="suggested-tokens-container"
        .padding=${["0","3","0","3"]}
        gap="2"
      >
        ${t.map(o=>u`
            <wui-token-button
              text=${o.symbol}
              imageSrc=${o.logoUri}
              @click=${()=>this.onSelectToken(o)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `}onSearchInputChange(t){this.searchValue=t.detail}handleSuggestedTokensScroll(){var o;const t=(o=this.renderRoot)==null?void 0:o.querySelector(".suggested-tokens-container");if(!t){return}t.style.setProperty("--suggested-tokens-scroll--left-opacity",_.interpolate([0,100],[0,1],t.scrollLeft).toString());t.style.setProperty("--suggested-tokens-scroll--right-opacity",_.interpolate([0,100],[0,1],t.scrollWidth-t.scrollLeft-t.offsetWidth).toString())}handleTokenListScroll(){var o;const t=(o=this.renderRoot)==null?void 0:o.querySelector(".tokens");if(!t){return}t.style.setProperty("--tokens-scroll--top-opacity",_.interpolate([0,100],[0,1],t.scrollTop).toString());t.style.setProperty("--tokens-scroll--bottom-opacity",_.interpolate([0,100],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString())}filterTokensWithText(t,o){return t.filter(i=>`${i.symbol} ${i.name} ${i.address}`.toLowerCase().includes(o.toLowerCase())).sort((i,s)=>{const n=`${i.symbol} ${i.name} ${i.address}`.toLowerCase();const a=`${s.symbol} ${s.name} ${s.address}`.toLowerCase();const c=n.indexOf(o.toLowerCase());const g=a.indexOf(o.toLowerCase());return c-g})}};b.styles=se;v([l()],b.prototype,"interval",void 0);v([l()],b.prototype,"targetToken",void 0);v([l()],b.prototype,"sourceToken",void 0);v([l()],b.prototype,"sourceTokenAmount",void 0);v([l()],b.prototype,"toToken",void 0);v([l()],b.prototype,"myTokensWithBalance",void 0);v([l()],b.prototype,"popularTokens",void 0);v([l()],b.prototype,"suggestedTokens",void 0);v([l()],b.prototype,"tokensLoading",void 0);v([l()],b.prototype,"searchValue",void 0);b=v([C("w3m-swap-select-token-view")],b);export{h as W3mSwapPreviewView,b as W3mSwapSelectTokenView,p as W3mSwapView};
