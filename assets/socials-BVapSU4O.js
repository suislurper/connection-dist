import{c as O,n as W,D as l,a as _,i as I,s as S,O as h,Y as T,R as f,p as F,b as c,Z as D,l as C,_ as N,A as j,$ as A,z as $,k as d,C as P,a0 as M,E as u,a1 as U,S as v,a2 as z,Q as R,T as x}from"./index-C2amc2Up.js";const q=O`
  :host {
    margin-top: ${({spacing:t})=>t["1"]};
  }
  wui-separator {
    margin: ${({spacing:t})=>t["3"]} calc(${({spacing:t})=>t["3"]} * -1)
      ${({spacing:t})=>t["2"]} calc(${({spacing:t})=>t["3"]} * -1);
    width: calc(100% + ${({spacing:t})=>t["3"]} * 2);
  }
`;var g=function(t,e,o,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)if(s=t[a])i=(n<3?s(i):n>3?s(e,o,i):s(e,o))||i;return n>3&&i&&Object.defineProperty(e,o,i),i};let p=class X extends I{constructor(){super();this.unsubscribe=[];this.tabIdx=void 0;this.connectors=S.state.connectors;this.authConnector=this.connectors.find(e=>e.type==="AUTH");this.remoteFeatures=h.state.remoteFeatures;this.isPwaLoading=false;this.hasExceededUsageLimit=T.state.plan.hasExceededUsageLimit;this.unsubscribe.push(S.subscribeKey("connectors",e=>{this.connectors=e;this.authConnector=this.connectors.find(o=>o.type==="AUTH")}),h.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback();this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var i;let e=((i=this.remoteFeatures)==null?void 0:i.socials)||[];const o=Boolean(this.authConnector);const r=e==null?void 0:e.length;const n=f.state.view==="ConnectSocials";if((!o||!r)&&!n){return null}if(n&&!r){e=F.DEFAULT_SOCIALS}return c` <wui-flex flexDirection="column" gap="2">
      ${e.map(s=>c`<wui-list-social
            @click=${()=>{this.onSocialClick(s)}}
            data-testid=${`social-selector-${s}`}
            name=${s}
            logo=${s}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`}async onSocialClick(e){if(this.hasExceededUsageLimit){f.push("UsageExceeded");return}if(e){await D(e)}}async handlePwaFrameLoad(){var e;if(C.isPWA()){this.isPwaLoading=true;try{if(((e=this.authConnector)==null?void 0:e.provider)instanceof N){await this.authConnector.provider.init()}}catch(o){j.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:o.message},"error")}finally{this.isPwaLoading=false}}}};p.styles=q;g([W()],p.prototype,"tabIdx",void 0);g([l()],p.prototype,"connectors",void 0);g([l()],p.prototype,"authConnector",void 0);g([l()],p.prototype,"remoteFeatures",void 0);g([l()],p.prototype,"isPwaLoading",void 0);g([l()],p.prototype,"hasExceededUsageLimit",void 0);p=g([_("w3m-social-login-list")],p);const G=O`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:t})=>t["md"]}
      ${({easings:t})=>t["ease-out-power-1"]};
    will-change: opacity;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var k=function(t,e,o,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)if(s=t[a])i=(n<3?s(i):n>3?s(e,o,i):s(e,o))||i;return n>3&&i&&Object.defineProperty(e,o,i),i};let L=class H extends I{constructor(){super();this.unsubscribe=[];this.checked=A.state.isLegalCheckboxChecked;this.unsubscribe.push(A.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var E;const{termsConditionsUrl:e,privacyPolicyUrl:o}=h.state;const r=(E=h.state.features)==null?void 0:E.legalCheckbox;const n=e||o;const i=Boolean(n)&&Boolean(r);const s=i&&!this.checked;const a=s?-1:void 0;return c`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="01"
        class=${$(s?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${$(a)}></w3m-social-login-list>
      </wui-flex>
    `}};L.styles=G;k([l()],L.prototype,"checked",void 0);L=k([_("w3m-connect-socials-view")],L);const V=O`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:t})=>t["8"]};
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:t})=>t["1"]} * -1);
    bottom: calc(${({spacing:t})=>t["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all ${({easings:t})=>t["ease-out-power-2"]}
      ${({durations:t})=>t["lg"]};
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:t})=>t["4"]};
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:t})=>t["ease-out-power-2"]} both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;var b=function(t,e,o,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)if(s=t[a])i=(n<3?s(i):n>3?s(e,o,i):s(e,o))||i;return n>3&&i&&Object.defineProperty(e,o,i),i};let m=class Q extends I{constructor(){var o,r,n;super();this.unsubscribe=[];this.socialProvider=(o=d.getAccountData())==null?void 0:o.socialProvider;this.socialWindow=(r=d.getAccountData())==null?void 0:r.socialWindow;this.error=false;this.connecting=false;this.message="Connect in the provider window";this.remoteFeatures=h.state.remoteFeatures;this.address=(n=d.getAccountData())==null?void 0:n.address;this.connectionsByNamespace=P.getConnections(d.state.activeChain);this.hasMultipleConnections=this.connectionsByNamespace.length>0;this.authConnector=S.getAuthConnector();this.handleSocialConnection=async i=>{var s;if((s=i.data)==null?void 0:s.resultUri){if(i.origin===M.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,false);try{if(this.authConnector&&!this.connecting){this.connecting=true;const a=this.parseURLError(i.data.resultUri);if(a){this.handleSocialError(a);return}this.closeSocialWindow();this.updateMessage();const E=i.data.resultUri;if(this.socialProvider){u.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})}await P.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:E},this.authConnector.chain);if(this.socialProvider){U.setConnectedSocialProvider(this.socialProvider);u.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}})}}}catch(a){this.error=true;this.updateMessage();if(this.socialProvider){u.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:C.parseError(a)}})}}}else{f.goBack();v.showError("Untrusted Origin");if(this.socialProvider){u.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:"Untrusted Origin"}})}}}};const e=z.EmbeddedWalletAbortController;e.signal.addEventListener("abort",()=>{this.closeSocialWindow()});this.unsubscribe.push(...[d.subscribeChainProp("accountState",i=>{var s;if(i){this.socialProvider=i.socialProvider;if(i.socialWindow){this.socialWindow=i.socialWindow}if(i.address){const a=(s=this.remoteFeatures)==null?void 0:s.multiWallet;if(i.address!==this.address){if(this.hasMultipleConnections&&a){f.replace("ProfileWallets");v.showSuccess("New Wallet Added");this.address=i.address}else if(R.state.open||h.state.enableEmbedded){R.close()}}}}}),h.subscribeKey("remoteFeatures",i=>{this.remoteFeatures=i})]);if(this.authConnector){this.connectSocial()}}disconnectedCallback(){this.unsubscribe.forEach(o=>o());window.removeEventListener("message",this.handleSocialConnection,false);const e=d.state.activeCaipAddress;if(!e&&this.socialProvider&&!this.connecting){u.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}})}this.closeSocialWindow()}render(){return c`
      <wui-flex
        data-error=${$(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${$(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="lg-regular" color=${this.error?"error":"secondary"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=x.state.themeVariables["--w3m-border-radius-master"];const o=e?parseInt(e.replace("px",""),10):4;return c`<wui-loading-thumbnail radius=${o*9}></wui-loading-thumbnail>`}parseURLError(e){try{const o="error=";const r=e.indexOf(o);if(r===-1){return null}const n=e.substring(r+o.length);return n}catch{return null}}connectSocial(){const e=setInterval(()=>{var o;if((o=this.socialWindow)==null?void 0:o.closed){if(!this.connecting&&f.state.view==="ConnectingSocial"){f.goBack()}clearInterval(e)}},1e3);window.addEventListener("message",this.handleSocialConnection,false)}updateMessage(){if(this.error){this.message="Something went wrong"}else if(this.connecting){this.message="Retrieving user data"}else{this.message="Connect in the provider window"}}handleSocialError(e){this.error=true;this.updateMessage();if(this.socialProvider){u.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:e}})}this.closeSocialWindow()}closeSocialWindow(){if(this.socialWindow){this.socialWindow.close();d.setAccountProp("socialWindow",void 0,d.state.activeChain)}}};m.styles=V;b([l()],m.prototype,"socialProvider",void 0);b([l()],m.prototype,"socialWindow",void 0);b([l()],m.prototype,"error",void 0);b([l()],m.prototype,"connecting",void 0);b([l()],m.prototype,"message",void 0);b([l()],m.prototype,"remoteFeatures",void 0);m=b([_("w3m-connecting-social-view")],m);const B=O`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:t})=>t["xl"]};
    animation-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:t})=>t["8"]};
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:t})=>t["1"]} * -1);
    bottom: calc(${({spacing:t})=>t["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:t})=>t["lg"]} ${({easings:t})=>t["ease-out-power-2"]},
      transform ${({durations:t})=>t["lg"]}
        ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var y=function(t,e,o,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)if(s=t[a])i=(n<3?s(i):n>3?s(e,o,i):s(e,o))||i;return n>3&&i&&Object.defineProperty(e,o,i),i};let w=class Y extends I{constructor(){var e,o;super();this.unsubscribe=[];this.timeout=void 0;this.socialProvider=(e=d.getAccountData())==null?void 0:e.socialProvider;this.uri=(o=d.getAccountData())==null?void 0:o.farcasterUrl;this.ready=false;this.loading=false;this.remoteFeatures=h.state.remoteFeatures;this.authConnector=S.getAuthConnector();this.forceUpdate=()=>{this.requestUpdate()};this.unsubscribe.push(...[d.subscribeChainProp("accountState",r=>{this.socialProvider=r==null?void 0:r.socialProvider;this.uri=r==null?void 0:r.farcasterUrl;this.connectFarcaster()}),h.subscribeKey("remoteFeatures",r=>{this.remoteFeatures=r})]);window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback();clearTimeout(this.timeout);window.removeEventListener("resize",this.forceUpdate);const e=d.state.activeCaipAddress;if(!e&&this.socialProvider&&(this.uri||this.loading)){u.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}})}}render(){this.onRenderProxy();return c`${this.platformTemplate()}`}platformTemplate(){if(C.isMobile()){return c`${this.mobileTemplate()}`}return c`${this.desktopTemplate()}`}desktopTemplate(){if(this.loading){return c`${this.loadingTemplate()}`}return c`${this.qrTemplate()}`}qrTemplate(){return c` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","5","5","5"]}
      gap="5"
    >
      <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["5","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="md-medium" color="primary">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return c` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["10","5","5","5"]}
      gap="5"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          color="error"
          icon="close"
          size="sm"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="md-medium" color="primary"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="sm-regular" color="secondary"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const e=x.state.themeVariables["--w3m-border-radius-master"];const o=e?parseInt(e.replace("px",""),10):4;return c`<wui-loading-thumbnail radius=${o*9}></wui-loading-thumbnail>`}async connectFarcaster(){var e,o;if(this.authConnector){try{await((e=this.authConnector)==null?void 0:e.provider.connectFarcaster());if(this.socialProvider){U.setConnectedSocialProvider(this.socialProvider);u.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})}this.loading=true;const r=P.getConnections(this.authConnector.chain);const n=r.length>0;await P.connectExternal(this.authConnector,this.authConnector.chain);const i=(o=this.remoteFeatures)==null?void 0:o.multiWallet;if(this.socialProvider){u.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}})}this.loading=false;if(n&&i){f.replace("ProfileWallets");v.showSuccess("New Wallet Added")}else{R.close()}}catch(r){if(this.socialProvider){u.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:C.parseError(r)}})}f.goBack();v.showError(r)}}}mobileLinkTemplate(){return c`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{if(this.uri){C.openHref(this.uri,"_blank")}}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){if(!this.ready&&this.uri){this.timeout=setTimeout(()=>{this.ready=true},200)}}qrCodeTemplate(){if(!this.uri||!this.ready){return null}const e=this.getBoundingClientRect().width-40;const o=x.state.themeVariables["--apkt-qr-color"]??x.state.themeVariables["--w3m-qr-color"];return c` <wui-qr-code
      size=${e}
      theme=${x.state.themeMode}
      uri=${this.uri}
      ?farcaster=${true}
      data-testid="wui-qr-code"
      color=${$(o)}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return c`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="sm" color="default" slot="iconRight" name="copy"></wui-icon>
      Copy link
    </wui-button>`}onCopyUri(){try{if(this.uri){C.copyToClopboard(this.uri);v.showSuccess("Link copied")}}catch{v.showError("Failed to copy")}}};w.styles=B;y([l()],w.prototype,"socialProvider",void 0);y([l()],w.prototype,"uri",void 0);y([l()],w.prototype,"ready",void 0);y([l()],w.prototype,"loading",void 0);y([l()],w.prototype,"remoteFeatures",void 0);w=y([_("w3m-connecting-farcaster-view")],w);export{L as W3mConnectSocialsView,w as W3mConnectingFarcasterView,m as W3mConnectingSocialView};
