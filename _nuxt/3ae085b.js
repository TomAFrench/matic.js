(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{173:function(t,e){t.exports=[{text:"Get Started",url:"get-started"},{text:"Installation",url:"installation"},{text:"Setup",url:"setup",children:[{text:"Web3.js",url:"web3js"},{text:"Ethers",url:"ethers"}]},{text:"API Architecture",url:"api-architecture"},{text:"POS",url:"pos",children:[{text:"ERC20",url:"erc20",children:[{text:"getBalance",url:"get-balance"},{text:"approve",url:"approve"},{text:"approveMax",url:"approve-max"},{text:"getAllowance",url:"get-allowance"},{text:"deposit",url:"deposit"},{text:"transfer",url:"transfer"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawExit",url:"withdraw-exit"},{text:"withdrawExitFaster",url:"withdraw-exit-faster"},{text:"isWithdrawExited",url:"is-withdraw-exited"}]},{text:"ERC721",url:"erc721",children:[{text:"getTokensCount",url:"get-tokens-count"},{text:"getTokenIdAtIndexForUser",url:"get-token-id-at-index-for-user"},{text:"getAllTokens",url:"get-all-tokens"},{text:"isApproved",url:"is-approved"},{text:"isApprovedAll",url:"is-approved-all"},{text:"approve",url:"approve"},{text:"approveAll",url:"approve-all"},{text:"deposit",url:"deposit"},{text:"depositMany",url:"deposit-many"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawStartMany",url:"withdraw-start-many"},{text:"withdrawExit",url:"withdraw-exit"},{text:"withdrawExitMany",url:"withdraw-exit-many"},{text:"withdrawExitFaster",url:"withdraw-exit-faster"},{text:"withdrawExitFasterMany",url:"withdraw-exit-faster-many"},{text:"isWithdrawExited",url:"is-withdraw-exited"},{text:"isWithdrawExitedMany",url:"is-withdraw-exited-many"},{text:"transfer",url:"transfer"}]},{text:"isCheckPointed",url:"is-check-pointed"},{text:"isDeposited",url:"is-deposited"},{text:"depositEther",url:"deposit-ether"}]},{text:"Plasma",url:"plasma",children:[{text:"ERC20",url:"erc20",children:[{text:"getBalance",url:"get-balance"},{text:"approve",url:"approve"},{text:"approveMax",url:"approve-max"},{text:"getAllowance",url:"get-allowance"},{text:"transfer",url:"transfer"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawChallenge",url:"withdraw-challenge"},{text:"withdrawChallengeFaster",url:"withdraw-challenge-faster"},{text:"withdrawExit",url:"withdraw-exit"}]},{text:"ERC721",url:"erc721",children:[{text:"getTokensCount",url:"get-tokens-count"},{text:"getTokenIdAtIndexForUser",url:"get-token-id-at-index-for-user"},{text:"getAllTokens",url:"get-all-tokens"},{text:"safeDeposit",url:"safe-deposit"},{text:"withdrawStart",url:"withdraw-start"},{text:"withdrawChallenge",url:"withdraw-challenge"},{text:"withdrawChallengeFaster",url:"withdraw-challenge-faster"},{text:"withdrawExit",url:"withdraw-exit"},{text:"transfer",url:"transfer"}]},{text:"isDeposited",url:"is-deposited"},{text:"isCheckPointed",url:"is-check-pointed"},{text:"withdrawExit",url:"withdraw-exit"},{text:"depositEther",url:"deposit-ether"}]},{text:"setProofApi",url:"set-proof-api"},{text:"Advanced",url:"advanced",expand:!0,children:[{text:"ABIManager",url:"abi-manager"},{text:"Plugin",url:"plugin"}]}]},174:function(t,e,r){"use strict";var l={components:{Docs:r(175).a},props:{title:String,description:String,keywords:String},data:function(){return{savedLinks:[]}},fetch:function(){var t=r(173);this.savedLinks=t}},n=r(14),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("Docs",{attrs:{propLinks:t.savedLinks,relativeUrl:"/v3/docs/",title:t.title,description:t.description,keywords:t.keywords}},[t._t("default")],2)}),[],!1,null,null,null);e.a=component.exports},305:function(t,e,r){"use strict";r.r(e);var l={components:{Layout:r(174).a}},n=r(14),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{attrs:{title:"transfer ERC721 POS",description:"Get started with maticjs",keywords:"pos client, erc721, transfer, polygon, sdk",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/v3/docs/pos/erc721/transfer.md"}},[r("h1",{attrs:{id:"transfer"}},[t._v("transfer")]),t._v(" "),r("p",[r("code",[t._v("transfer")]),t._v(" method transfer tokens from one user to another user.")]),t._v(" "),r("pre",[r("code",[t._v("const erc721Token = posClient.erc721(<token address>);\n\nconst result = await erc721Token.transfer(<tokenid>,<from>,<to>);\n")])])])}),[],!1,null,null,null);e.default=component.exports}}]);