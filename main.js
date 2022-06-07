(this.webpackJsonpbsc_miner = this.webpackJsonpbsc_miner || []).push([
  [0], {
      386: function(e, t) {},
      428: function(e, t) {},
      430: function(e, t) {},
      455: function(e, t) {},
      457: function(e, t) {},
      469: function(e, t) {},
      470: function(e, t) {},
      493: function(e, t) {},
      496: function(e, t) {},
      498: function(e, t) {},
      603: function(e) {
          e.exports = JSON.parse('[{"inputs":[{"internalType":"address payable","name":"maintenance","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"FeeChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rate","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"RateChanged","type":"event"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"beanRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"buyEggs","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"}],"name":"calculateEggBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"calculateEggBuySimple","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eggs","type":"uint256"}],"name":"calculateEggSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getEggsSinceLastHatch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyEggs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyMiners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"hatchEggs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seedMarket","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"sellEggs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fee","type":"uint256"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
      },
      625: function(e) {
          e.exports = JSON.parse('[{"inputs":[{"internalType":"address[]","name":"wallets","type":"address[]"}],"name":"addWallets","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contribute","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token_","type":"address"},{"internalType":"uint256","name":"hardCap_","type":"uint256"},{"internalType":"uint256","name":"allocationCap_","type":"uint256"},{"internalType":"uint256","name":"numerator_","type":"uint256"},{"internalType":"uint256","name":"denominator_","type":"uint256"},{"internalType":"uint256","name":"openingTime_","type":"uint256"},{"internalType":"uint256","name":"closingTime_","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Claimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Contributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"currentClosingTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newClosingTime","type":"uint256"}],"name":"DurationExtended","type":"event"},{"inputs":[{"internalType":"uint256","name":"newClosingTime","type":"uint256"}],"name":"extendTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"openClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"hardCap_","type":"uint256"},{"internalType":"uint256","name":"allocationCap_","type":"uint256"}],"name":"setCap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token_","type":"address"}],"name":"setClaimableToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"numerator_","type":"uint256"},{"internalType":"uint256","name":"denominator_","type":"uint256"}],"name":"setRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawClaimable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawContributable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token_","type":"address"}],"name":"withdrawOther","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"allocationCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"canClaim","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimable","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"closingTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"contributions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"denominator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet_","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getPurchasableAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"getTokenAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hardCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hasClaimed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hasClosed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOpen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"wallet_","type":"address"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"numerator","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openingTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"subjectRaised","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"whitelist","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')
      },
      627: function(e, t, n) {
          "use strict";
          n.r(t);
          var r = n(80),
              a = n.n(r),
              o = n(16),
              i = n(218),
              c = n(31),
              s = n(14),
              l = n(28),
              d = n(149),
              u = n(3),
              b = n.n(u),
              p = n(1),
              j = n.n(p),
              h = n(58),
              x = n(215),
              f = n(330),
              m = n(331),
              g = n.n(m),
              y = n(346),
              O = n(2),
              w = ["https://speedy-nodes-nyc.moralis.io/75d81e57f4b08a8d8ecc85a5/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/de32ebd409a6035e2f623693/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/11fc72010e352493b250dbd4/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/0c099b24ac6d3db8b9583864/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/7332a9762d8d48c95af6976e/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/897faa8611c924d78981f254/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/c6c73da9219d2e9821868070/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/f47cf2ee8abb5c6233719024/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/3df13e45357afa9e4771da97/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/f28ce188e3b74d9dc1f774ec/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/2fcf9ff72b60cea2122e398a/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/cae1948dc728a8fa39d3b2e1/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/fbfd6b4464cbf1f47217a9e8/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/d59ce439df0ba8604403fb96/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/29919367e4008ea560798075/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/48b7257d193746c2abdaaabb/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/28db98fe064ae16a8d8a11ed/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/465a1a54516ca1d63ba4f677/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/8363db264a57e24dfba11585/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/5e6a505e5aee7e1d3136cc17/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/c41057cf78bc03612b870855/bsc/mainnet", "https://speedy-nodes-nyc.moralis.io/79c89be51f5206b9c9bf6da4/bsc/mainnet"],
              v = w[Math.floor(Math.random() * w.length)];
          var C, k, S, B, T, R, z = j.a.createContext(null),
              D = function() {
                  var e = Object(p.useContext)(z);
                  if (!e) throw new Error("useWeb3Context() can only be used inside of <Web3ContextProvider />, please declare it at a higher level.");
                  var t = e.onChainProvider;
                  return Object(p.useMemo)((function() {
                      return Object(d.a)({}, t)
                  }), [e])
              },
              I = function(e) {
                  var t = e.children,
                      n = Object(p.useState)(!1),
                      r = Object(l.a)(n, 2),
                      a = r[0],
                      o = r[1],
                      i = Object(p.useState)(56),
                      c = Object(l.a)(i, 2),
                      d = c[0],
                      u = c[1],
                      j = Object(p.useState)(""),
                      m = Object(l.a)(j, 2),
                      w = m[0],
                      C = m[1],
                      k = Object(p.useState)(v),
                      S = Object(l.a)(k, 2),
                      B = S[0],
                      T = S[1],
                      R = Object(p.useState)(new h.a(B)),
                      D = Object(l.a)(R, 2),
                      I = D[0],
                      F = D[1],
                      M = Object(p.useState)(new g.a({
                          network: "mainnet",
                          cacheProvider: !0,
                          providerOptions: {
                              walletconnect: {
                                  package: y.a,
                                  options: {
                                      network: "binance",
                                      rpc: {
                                          56: v
                                      }
                                  }
                              }
                          }
                      })),
                      P = Object(l.a)(M, 2),
                      N = P[0],
                      A = (P[1], function() {
                          return !!N && !!N.cachedProvider
                      }),
                      E = Object(p.useCallback)((function(e) {
                          e.on && (e.on("accountsChanged", function() {
                              var e = Object(s.a)(b.a.mark((function e(t) {
                                  return b.a.wrap((function(e) {
                                      for (;;) switch (e.prev = e.next) {
                                          case 0:
                                              setTimeout((function() {
                                                  return window.location.reload()
                                              }), 1);
                                          case 1:
                                          case "end":
                                              return e.stop()
                                      }
                                  }), e)
                              })));
                              return function(t) {
                                  return e.apply(this, arguments)
                              }
                          }()), e.on("chainChanged", function() {
                              var e = Object(s.a)(b.a.mark((function e(t) {
                                  return b.a.wrap((function(e) {
                                      for (;;) switch (e.prev = e.next) {
                                          case 0:
                                              W(t), setTimeout((function() {
                                                  return window.location.reload()
                                              }), 1);
                                          case 2:
                                          case "end":
                                              return e.stop()
                                      }
                                  }), e)
                              })));
                              return function(t) {
                                  return e.apply(this, arguments)
                              }
                          }()), e.on("network", (function(e, t) {
                              t && window.location.reload()
                          })))
                      }), [I]),
                      W = function(e) {
                          return d === e || 56 === e && (u(e), T(v), !0)
                      },
                      _ = Object(p.useCallback)(Object(s.a)(b.a.mark((function e() {
                          var t, n, r, a;
                          return b.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      if (window.location === window.parent.location) {
                                          e.next = 4;
                                          break
                                      }
                                      t = new f.IFrameEthereumProvider, e.next = 7;
                                      break;
                                  case 4:
                                      return e.next = 6, N.connect();
                                  case 6:
                                      t = e.sent;
                                  case 7:
                                      return E(t), n = new x.a(t, "any"), e.next = 11, n.getNetwork().then((function(e) {
                                          return e.chainId
                                      }));
                                  case 11:
                                      return r = e.sent, e.next = 14, n.getSigner().getAddress();
                                  case 14:
                                      if (a = e.sent, W(r)) {
                                          e.next = 18;
                                          break
                                      }
                                      return e.abrupt("return");
                                  case 18:
                                      return C(a), F(n), o(!0), e.abrupt("return", n);
                                  case 22:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      }))), [I, N, a]),
                      L = Object(p.useCallback)(Object(s.a)(b.a.mark((function e() {
                          return b.a.wrap((function(e) {
                              for (;;) switch (e.prev = e.next) {
                                  case 0:
                                      N.clearCachedProvider(), o(!1), setTimeout((function() {
                                          window.location.reload()
                                      }), 1);
                                  case 3:
                                  case "end":
                                      return e.stop()
                              }
                          }), e)
                      }))), [I, N, a]),
                      H = Object(p.useMemo)((function() {
                          return {
                              connect: _,
                              disconnect: L,
                              hasCachedProvider: A,
                              provider: I,
                              connected: a,
                              address: w,
                              chainID: d,
                              web3Modal: N,
                              uri: B
                          }
                      }), [_, L, A, I, a, w, d, N, B]);
                  return Object(O.jsx)(z.Provider, {
                      value: {
                          onChainProvider: H
                      },
                      children: t
                  })
              },
              F = n(34),
              M = n(312),
              P = n(313),
              N = n(15),
              A = n(326),
              E = n(33),
              W = n(637),
              _ = n(638),
              L = n(639),
              H = n(640),
              V = n(641),
              Y = n(115),
              q = n(81),
              U = Object(q.b)(C || (C = Object(Y.a)(["\n  0% { background-position: 0 82% }\n  50% { background-position: 100% 19% }\n  100% { background-position: 0 82% }\n"]))),
              Q = Object(q.b)(k || (k = Object(Y.a)(["\n  0% { opacity: 0.75; }\n  50% { opacity: 1; }\n  100%  { opacity: 0.75; }\n"]))),
              G = Object(q.b)(S || (S = Object(Y.a)(["\n  50% { color: white }\n"]))),
              J = Object(q.b)(B || (B = Object(Y.a)(["\n  50% { border-color: white }\n"]))),
              K = Object(q.b)(T || (T = Object(Y.a)(["\n  100% { transform: rotateY(360deg) }\n"]))),
              X = Object(q.b)(R || (R = Object(Y.a)(["\n  0% { background-position: 100% 19% }\n  100% { background-position: 0 82% }\n"]))),
              Z = "".concat(K, " 4s linear infinite"),
              $ = "".concat(Q, " 2s ease-in-out infinite"),
              ee = "".concat(G, " 2s infinite"),
              te = "".concat(J, " 2s infinite"),
              ne = "".concat(X, " 0.75s linear infinite"),
              re = "".concat(X, " 0.4s linear infinite"),
              ae = "".concat(U, " 7s ease-in-out infinite"),
              oe = n.p + "static/media/logo.e7248f38.png",
              ie = ["Landing", "Miner", "Token", "MetaVerse", "Launchpad"],
              ce = [W.a, _.a, _.b, L.a, L.b],
              se = [H.c, H.e, H.a],
              le = ["https://t.me/SolarFarmMinerOfficial", "https://twitter.com/SolarFarmMiner", "https://discord.gg/qZvAgSDp7Y"],
              de = [H.b, H.f, H.d],
              ue = ["https://medium.com/@solarfarmminer", "https://www.youtube.com/channel/UCXiuAeCSIRhMzO8ZqLjDPiA", "https://www.tiktok.com/@solarfarmminer"],
              be = function(e) {
                  var t = e.tab,
                      n = e.setTab,
                      r = Object(F.d)(),
                      a = r.isOpen,
                      o = r.onOpen,
                      i = r.onClose,
                      c = D(),
                      s = c.connect,
                      l = c.disconnect,
                      d = c.connected,
                      u = c.address;
                  return Object(O.jsxs)(O.Fragment, {
                      children: [Object(O.jsxs)(M.a, {
                          animation: ae,
                          top: "0",
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          position: "sticky",
                          zIndex: 1,
                          justifyContent: "space-between",
                          borderBottom: "1px solid",
                          borderColor: "navBorder",
                          bg: "navBackground",
                          bgSize: "1800% 1800%",
                          boxShadow: "0px 0px 45px -15px #000000",
                          backdropFilter: "auto",
                          backdropBlur: "5px",
                          pt: 2,
                          pb: 2,
                          pl: 3,
                          children: [Object(O.jsxs)("div", {
                              style: {
                                  display: "flex",
                                  alignItems: "center"
                              },
                              children: [Object(O.jsx)(P.a, {
                                  animation: ee,
                                  mr: 3,
                                  onClick: o,
                                  color: "icon",
                                  bg: "none",
                                  w: "0",
                                  _hover: {
                                      color: "white"
                                  },
                                  children: Object(O.jsx)(N.a, {
                                      as: V.b,
                                      w: "7",
                                      h: "7"
                                  })
                              }), Object(O.jsx)("img", {
                                  width: "60px",
                                  src: oe,
                                  alt: "Solar Farm Logo"
                              })]
                          }), Object(O.jsx)(P.a, {
                              variant: "solid",
                              size: "md",
                              rightIcon: Object(O.jsx)(E.b, {}),
                              display: "flex",
                              flexDirection: "row",
                              border: "1px",
                              borderRadius: "5px",
                              borderColor: "buttonBorder",
                              bg: "buttonBackground",
                              marginRight: "1rem",
                              padding: "1.2rem",
                              textColor: "buttonText",
                              _hover: {
                                  color: "buttonBackgroundHover"
                              },
                              onClick: d ? l : s,
                              children: d ? u.substring(0, 2) + "..." + u.substring(38) : "Connect"
                          })]
                      }), Object(O.jsxs)(A.a, {
                          placement: "left",
                          onClose: i,
                          isOpen: a,
                          children: [Object(O.jsx)(A.f, {}), Object(O.jsxs)(A.c, {
                              animation: ae,
                              bg: "navBackground",
                              bgSize: "1800% 1800%",
                              boxShadow: "0px 0px 45px -15px #000000",
                              backdropFilter: "auto",
                              backdropBlur: "5px",
                              borderRightWidth: "1px",
                              borderRightColor: "navBorder",
                              maxWidth: "250px",
                              children: [Object(O.jsx)(A.e, {
                                  p: 2,
                                  pl: 3,
                                  children: Object(O.jsxs)("div", {
                                      style: {
                                          display: "flex",
                                          alignItems: "center"
                                      },
                                      children: [Object(O.jsx)(P.a, {
                                          mr: 3,
                                          onClick: i,
                                          color: "icon",
                                          bg: "none",
                                          w: "0",
                                          _hover: {
                                              color: "white"
                                          },
                                          children: Object(O.jsx)(N.a, {
                                              as: V.a,
                                              w: "7",
                                              h: "7"
                                          })
                                      }), Object(O.jsx)("img", {
                                          width: "60px",
                                          src: oe,
                                          alt: "Solar Farm Logo"
                                      })]
                                  })
                              }), Object(O.jsx)(A.b, {
                                  children: ie.map((function(e, r) {
                                      return Object(O.jsx)(O.Fragment, {
                                          children: Object(O.jsxs)(M.d, {
                                              onClick: 3 === r || 4 === r ? null : function() {
                                                  return n(r)
                                              },
                                              fontSize: "lg",
                                              color: t === r ? "buttonColorHover" : 3 === r || 4 === r ? "grey" : "buttonText",
                                              mt: 0 !== r ? 0 : 5,
                                              mb: r !== ie.length - 1 ? 10 : 0,
                                              borderRightWidth: t === r ? "2px" : "0",
                                              borderRightColor: t === r ? "buttonColorHover" : "buttonText",
                                              marginRight: "-1.5rem",
                                              display: "flex",
                                              alignItems: "center",
                                              cursor: "pointer",
                                              children: [Object(O.jsx)(N.a, {
                                                  as: ce[r],
                                                  w: "7",
                                                  h: "7",
                                                  mr: 5,
                                                  mb: 0 !== r && 1 !== r ? 0 : 1
                                              }), e]
                                          })
                                      })
                                  }))
                              }), Object(O.jsxs)(A.d, {
                                  p: 5,
                                  display: "flow",
                                  flexDirection: "column",
                                  children: [Object(O.jsx)(M.a, {
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-around",
                                      mb: 5,
                                      children: le.map((function(e, t) {
                                          return Object(O.jsx)(M.c, {
                                              style: {
                                                  textDecoration: "none"
                                              },
                                              isExternal: !0,
                                              href: e,
                                              children: Object(O.jsx)(N.a, {
                                                  as: se[t],
                                                  w: "5",
                                                  h: "5",
                                                  color: "icon"
                                              })
                                          }, t)
                                      }))
                                  }), Object(O.jsx)(M.a, {
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-around",
                                      children: ue.map((function(e, t) {
                                          return Object(O.jsx)(M.c, {
                                              style: {
                                                  textDecoration: "none"
                                              },
                                              isExternal: !0,
                                              href: e,
                                              children: Object(O.jsx)(N.a, {
                                                  as: de[t],
                                                  w: "5",
                                                  h: "5",
                                                  color: "icon"
                                              })
                                          }, t)
                                      }))
                                  })]
                              })]
                          })]
                      })]
                  })
              },
              pe = n(84),
              je = n.p + "static/media/padlogo.49be24e5.png",
              he = n.p + "static/media/tokenlogo.d729090c.png",
              xe = n.p + "static/media/verselogo.fc01dc68.png",
              fe = [H.c, H.e, H.a, H.b, H.f, H.d],
              me = ["https://t.me/SolarFarmMinerOfficial", "https://twitter.com/SolarFarmMiner", "https://discord.gg/qZvAgSDp7Y", "https://medium.com/@solarfarmminer", "https://www.youtube.com/channel/UCXiuAeCSIRhMzO8ZqLjDPiA", "https://www.tiktok.com/@solarfarmminer"],
              ge = function(e) {
                  var t = e.children,
                      n = e.image;
                  return Object(O.jsxs)(M.a, {
                      m: 2,
                      maxW: "620px",
                      border: "1px",
                      borderRadius: "5px",
                      borderColor: "cardBorder",
                      bg: "cardBackground",
                      bgSize: "1800% 1800%",
                      boxShadow: "dark-lg",
                      backdropFilter: "auto",
                      backdropBlur: "5px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      children: [Object(O.jsx)(M.a, {
                          mt: 5,
                          mb: 5,
                          children: Object(O.jsx)("img", {
                              width: "150px",
                              src: n
                          })
                      }), t]
                  })
              },
              ye = function() {
                  var e = Object(pe.useMediaQuery)({
                          query: "(max-width: 748px)"
                      }),
                      t = Object(pe.useMediaQuery)({
                          query: "(max-width: 1200px)"
                      });
                  return Object(O.jsx)(M.a, {
                      minW: "100%",
                      bg: "rgba(0, 0, 0, 0.9)",
                      children: Object(O.jsxs)(M.a, {
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          children: [Object(O.jsx)(M.a, {
                              mt: 10,
                              mb: 5,
                              position: "relative",
                              minW: "300",
                              maxH: "300",
                              minH: "300",
                              children: Object(O.jsx)("div", {
                                  style: {
                                      position: "absolute",
                                      left: "0",
                                      top: "0",
                                      bottom: "0",
                                      right: "0",
                                      opacity: "0.99",
                                      pointerEvents: "none"
                                  },
                                  children: Object(O.jsx)(M.a, {
                                      animation: Z,
                                      children: Object(O.jsx)("img", {
                                          width: "300px",
                                          src: oe
                                      })
                                  })
                              })
                          }), Object(O.jsx)(M.a, {
                              children: me.map((function(e, t) {
                                  return Object(O.jsx)(M.c, {
                                      style: {
                                          textDecoration: "none"
                                      },
                                      isExternal: !0,
                                      href: e,
                                      children: Object(O.jsx)(N.a, {
                                          as: fe[t],
                                          w: "6",
                                          h: "6",
                                          mr: t !== me.length - 1 ? 5 : 0,
                                          color: "icon"
                                      })
                                  }, t)
                              }))
                          }), Object(O.jsxs)(M.a, {
                              maxW: e ? "95%" : "825px",
                              mb: "125px",
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "5xl",
                                  color: "text",
                                  align: "center",
                                  children: "Welcome to our SolarSystem."
                              }), Object(O.jsx)(M.d, {
                                  fontSize: e ? "md" : "lg",
                                  color: "text",
                                  align: "center",
                                  children: "Comprised of the Solar Farm Miner, Solar Farm Token, SolarPad and SolarVerse; the SolarSystem is building a robust ecosystem of MetaVerse-centric products that feature stress-tested tokenomics."
                              }), Object(O.jsx)(M.d, {
                                  fontSize: e ? "md" : "lg",
                                  color: "text",
                                  align: "center",
                                  children: "Don't wait... Come and join the fastest growing community in decentralised finance!"
                              }), Object(O.jsxs)(M.a, {
                                  display: "flex",
                                  flexDirection: e ? "column" : "row",
                                  justifyContent: "space-evenly",
                                  alignItems: "center",
                                  children: [Object(O.jsx)(M.c, {
                                      style: {
                                          textDecoration: "none"
                                      },
                                      isExternal: !0,
                                      href: "https://github.com/SolarFarmMiner",
                                      children: Object(O.jsx)(P.a, {
                                          mt: 5,
                                          minW: "150px",
                                          bg: "black",
                                          textColor: "white",
                                          borderColor: "white",
                                          borderWidth: "1px",
                                          _hover: {
                                              color: "buttonColorHover"
                                          },
                                          children: "GitHub"
                                      })
                                  }), Object(O.jsx)(M.c, {
                                      style: {
                                          textDecoration: "none"
                                      },
                                      isExternal: !0,
                                      href: "https://solar-farm-1.gitbook.io/solardocs/",
                                      children: Object(O.jsx)(P.a, {
                                          mt: 5,
                                          minW: "150px",
                                          borderColor: "black",
                                          borderWidth: "1px",
                                          _hover: {
                                              color: "buttonColorHover"
                                          },
                                          children: "Whitepaper"
                                      })
                                  }), Object(O.jsx)(M.c, {
                                      style: {
                                          textDecoration: "none"
                                      },
                                      isExternal: !0,
                                      href: "https://drive.google.com/file/d/1CnVFLfZhFWkVVSDvDhfDbRVnyOvfLO47/view?usp=sharing",
                                      children: Object(O.jsx)(P.a, {
                                          mt: 5,
                                          minW: "150px",
                                          bg: "buttonBackground",
                                          textColor: "white",
                                          borderColor: "buttonBorder",
                                          borderWidth: "1px",
                                          _hover: {
                                              color: "buttonColorHover"
                                          },
                                          children: "FAQ"
                                      })
                                  })]
                              })]
                          }), Object(O.jsx)(M.a, {
                              display: "flex",
                              flexDirection: t ? "column" : "row",
                              children: Object(O.jsxs)(ge, {
                                  image: oe,
                                  children: [Object(O.jsx)(M.d, {
                                      fontSize: e ? "sm" : "md",
                                      color: "text",
                                      align: "justify",
                                      p: 5,
                                      maxW: "620px",
                                      children: "Built around three key assets (BNB, Solar Panels and Power). Deposit BNB in exchange for Panels. Your Panels will go to work earning Power, earning you up to 14.3% a day! Follow advanced compounding strategies to further amplify your daily ROI."
                                  }), Object(O.jsx)(M.d, {
                                      fontSize: e ? "xs" : "sm",
                                      color: "data",
                                      align: "left",
                                      p: 5,
                                      maxW: "620px",
                                      children: "Official Contract Address: 0x7fE8bb9D90Cd3e4Cf89B0e539cD0542b3B779c2c"
                                  })]
                              })
                          }), Object(O.jsxs)(M.a, {
                              display: "flex",
                              flexDirection: t ? "column" : "row",
                              children: [Object(O.jsxs)(ge, {
                                  image: he,
                                  children: [Object(O.jsx)(M.d, {
                                      fontSize: e ? "sm" : "md",
                                      color: "text",
                                      align: "justify",
                                      p: 5,
                                      maxW: "620px",
                                      children: "The Solar Farm Token serves as the native token of the SolarSystem. Our token is designed to primarily support the miner through tax deposits into the TVL and additional marketing funds. The Solar Farm Token will also be used to enter into our SolarVerse Casino as well as dictate launchpad allocations. By accepting both BNB and Solar Farm Token as casino entry deposits, we create a soft-peg between the price of BNB and a quantity of Solar Farm Token."
                                  }), Object(O.jsx)(M.d, {
                                      fontSize: e ? "xs" : "sm",
                                      color: "data",
                                      align: "left",
                                      p: 5,
                                      maxW: "620px",
                                      children: "Official Contract Address: 0xcA8DAb735F511E263EFf3D7cc69CC02197ee3D7b"
                                  })]
                              }), Object(O.jsx)(ge, {
                                  image: xe,
                                  children: Object(O.jsx)(M.d, {
                                      fontSize: e ? "sm" : "md",
                                      color: "text",
                                      align: "justify",
                                      p: 5,
                                      maxW: "620px",
                                      children: "The SolarVerse is our highly anticipated Solar Farm MetaVerse! Interact with your Solar Farm Miner in the SolarVerse and test your luck over at the SolarVerse Casino with all of your favourite classic games! Compound, deposit BNB or deposit Solar Farm Token to gain access."
                                  })
                              }), Object(O.jsx)(ge, {
                                  image: je,
                                  children: Object(O.jsx)(M.d, {
                                      fontSize: e ? "sm" : "md",
                                      color: "text",
                                      align: "justify",
                                      p: 5,
                                      maxW: "620px",
                                      children: "Through our Solar Farm Miner and our Solar Farm Token, we're creating the fairest and most exciting launchpad there is! Strike your luck in the casino and be treated to a juicy whitelist. Don't have much capital? Compound your way up the ranks to hold enough panels to earn a whitelist spot. All's fair in the SolarVerse."
                                  })
                              })]
                          }), Object(O.jsx)(M.a, {
                              color: "white",
                              fontWeight: "700",
                              pt: 5,
                              children: "Solar Farm Miner 2022. All Rights Reserved."
                          })]
                      })
                  })
              },
              Oe = n(41),
              we = n(49),
              ve = n(165),
              Ce = 0,
              ke = function(e, t, n, r) {
                  var a = {
                      id: Ce++,
                      status: t,
                      title: n,
                      text: r,
                      created: Date.now(),
                      open: !0
                  };
                  e.items.push(a), e.items = e.items.slice(0)
              },
              Se = Object(we.c)({
                  name: "messages",
                  initialState: {
                      items: []
                  },
                  reducers: {
                      success: function(e, t) {
                          ke(e, "success", "Success", t.payload)
                      },
                      error: function(e, t) {
                          ke(e, "error", "Error", t.payload)
                      },
                      warning: function(e, t) {
                          ke(e, "warning", "Warning", t.payload)
                      },
                      info: function(e, t) {
                          ke(e, "info", "Information", t.payload)
                      },
                      handle_obsolete: function(e) {
                          var t = e.items.filter((function(e) {
                              return Date.now() - e.created < 100
                          }));
                          e.items.length !== t.length && (e.items = t)
                      }
                  }
              }),
              Be = Se.reducer,
              Te = Se.actions,
              Re = Te.success,
              ze = Te.error,
              De = (Te.warning, Te.info),
              Ie = Te.handle_obsolete;
          Object(ve.a)((function(e) {
              return e.messages
          }), (function(e) {
              return e
          })), n(21);

          function Fe() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                  t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                  n = e.toString().split(".");
              if (1 === n.length) return e.toString();
              if (0 === t) return n[0].toString();
              var r = n.pop() || "0";
              return n.push(r.substring(0, t)), n.join(".")
          }

          function Me(e, t) {
              Object.keys(t).forEach((function(n) {
                  e[n] = t[n]
              }))
          }
          var Pe = n(39),
              Ne = "0x7fE8bb9D90Cd3e4Cf89B0e539cD0542b3B779c2c",
              Ae = n(603),
              Ee = Object(we.b)("account/buildPanels", function() {
                  var e = Object(s.a)(b.a.mark((function e(t, n) {
                      var r, a, o, i, c, s, l, d, u;
                      return b.a.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return r = t.address, a = t.networkID, o = t.provider, i = t.action, c = t.value, s = n.dispatch, Ke(o), l = Je(o), "" !== c && null !== c && Pe.a.utils.isAddress(c) || (c = "0x0000000000000000000000000000000000000000"), e.prev = 5, u = {
                                      value: Pe.a.utils.parseEther(i)
                                  }, e.next = 9, l.buyEggs(c, u);
                              case 9:
                                  if (!(d = e.sent)) {
                                      e.next = 13;
                                      break
                                  }
                                  return e.next = 13, d.wait();
                              case 13:
                                  e.next = 18;
                                  break;
                              case 15:
                                  e.prev = 15, e.t0 = e.catch(5), s(ze(e.t0.message));
                              case 18:
                                  return e.prev = 18, d && (s(Re("Solar panels purchased successfully.")), s(Ye({
                                      networkID: a,
                                      provider: o,
                                      address: r
                                  }))), e.finish(18);
                              case 21:
                              case "end":
                                  return e.stop()
                          }
                      }), e, null, [
                          [5, 15, 18, 21]
                      ])
                  })));
                  return function(t, n) {
                      return e.apply(this, arguments)
                  }
              }()),
              We = Object(we.b)("account/compoundPanels", function() {
                  var e = Object(s.a)(b.a.mark((function e(t, n) {
                      var r, a, o, i, c, s, l;
                      return b.a.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return r = t.address, a = t.networkID, o = t.provider, i = t.action, c = n.dispatch, Ke(o), s = Je(o), "" !== i && null !== i && Pe.a.utils.isAddress(i) || (i = "0x0000000000000000000000000000000000000000"), e.prev = 5, e.next = 8, s.hatchEggs(i);
                              case 8:
                                  if (!(l = e.sent)) {
                                      e.next = 12;
                                      break
                                  }
                                  return e.next = 12, l.wait();
                              case 12:
                                  e.next = 17;
                                  break;
                              case 14:
                                  e.prev = 14, e.t0 = e.catch(5), c(ze(e.t0.message));
                              case 17:
                                  return e.prev = 17, l && (c(Re("Solar panels compounded successfully.")), c(Ye({
                                      networkID: a,
                                      provider: o,
                                      address: r
                                  }))), e.finish(17);
                              case 20:
                              case "end":
                                  return e.stop()
                          }
                      }), e, null, [
                          [5, 14, 17, 20]
                      ])
                  })));
                  return function(t, n) {
                      return e.apply(this, arguments)
                  }
              }()),
              _e = Object(we.b)("account/sellPanels", function() {
                  var e = Object(s.a)(b.a.mark((function e(t, n) {
                      var r, a, o, i, c, s;
                      return b.a.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return r = t.networkID, a = t.provider, o = t.address, i = n.dispatch, Ke(a), c = Je(a), e.prev = 4, e.next = 7, c.sellEggs();
                              case 7:
                                  if (!(s = e.sent)) {
                                      e.next = 11;
                                      break
                                  }
                                  return e.next = 11, s.wait();
                              case 11:
                                  e.next = 16;
                                  break;
                              case 13:
                                  e.prev = 13, e.t0 = e.catch(4), i(ze(e.t0.message));
                              case 16:
                                  return e.prev = 16, s && (i(Re("Power sold successfully.")), i(Ye({
                                      networkID: r,
                                      provider: a,
                                      address: o
                                  }))), e.finish(16);
                              case 19:
                              case "end":
                                  return e.stop()
                          }
                      }), e, null, [
                          [4, 13, 16, 19]
                      ])
                  })));
                  return function(t, n) {
                      return e.apply(this, arguments)
                  }
              }()),
              Le = Object(we.b)("account/setReferralAddress", function() {
                  var e = Object(s.a)(b.a.mark((function e(t) {
                      var n;
                      return b.a.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return (n = t.action).replace(/\s/g, ""), e.abrupt("return", {
                                      referralAddress: n
                                  });
                              case 3:
                              case "end":
                                  return e.stop()
                          }
                      }), e)
                  })));
                  return function(t) {
                      return e.apply(this, arguments)
                  }
              }()),
              He = 0,
              Ve = Object(we.b)("account/loadAppStatistics", function() {
                  var e = Object(s.a)(b.a.mark((function e(t, n) {
                      var r, a, o, i, c, s, l, d;
                      return b.a.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return r = t.provider, a = n.dispatch, He <= 0 && a(De("Safety Check: Always verify that you're on app.solarfarm.finance")), He++, o = new Pe.a.Contract(Ne, Ae, r), e.next = 7, qe(r);
                              case 7:
                                  return i = e.sent, c = Ge(i), s = Qe(i), e.next = 12, o.getBalance();
                              case 12:
                                  return l = e.sent, e.next = 15, o.calculateEggBuy(Pe.a.utils.parseUnits("1", "ether"), l);
                              case 15:
                                  return d = e.sent.toString(), e.abrupt("return", {
                                      farmTVL: Pe.a.utils.formatEther(l).toString(),
                                      exchangeRate: d / i * .9,
                                      dailyROI: s,
                                      maintenanceFee: 10,
                                      dataColor: c
                                  });
                              case 17:
                              case "end":
                                  return e.stop()
                          }
                      }), e)
                  })));
                  return function(t, n) {
                      return e.apply(this, arguments)
                  }
              }()),
              Ye = Object(we.b)("account/loadAccountDetails", function() {
                  var e = Object(s.a)(b.a.mark((function e(t, n) {
                      var r, a, o, i, c, s, l, d, u, p;
                      return b.a.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return r = t.provider, a = t.address, n.dispatch, Ke(r), o = Je(r), e.next = 6, qe(r);
                              case 6:
                                  return i = e.sent, c = Ge(i), s = Qe(i), e.next = 11, o.getBalance();
                              case 11:
                                  return l = e.sent, e.next = 14, o.calculateEggBuy(Pe.a.utils.parseUnits("1", "ether"), l);
                              case 14:
                                  return d = e.sent.toString(), e.next = 17, o.getMyMiners(a);
                              case 17:
                                  if (u = e.sent.toString(), p = "0.0", !(u > 0)) {
                                      e.next = 24;
                                      break
                                  }
                                  return e.next = 22, o.beanRewards(a);
                              case 22:
                                  p = e.sent.toString(), p = Pe.a.utils.formatEther(p);
                              case 24:
                                  return e.t0 = Pe.a.utils.formatEther(l).toString(), e.t1 = d / i * .9, e.t2 = Pe.a.utils, e.next = 29, r.getBalance(a);
                              case 29:
                                  return e.t3 = e.sent, e.t4 = e.t2.formatEther.call(e.t2, e.t3).toString(), e.next = 33, o.getMyEggs(a);
                              case 33:
                                  return e.t5 = e.sent.toString(), e.t6 = u, e.t7 = p, e.t8 = s, e.t9 = 10, e.t10 = c, e.abrupt("return", {
                                      loading: !1,
                                      farmTVL: e.t0,
                                      exchangeRate: e.t1,
                                      walletBalance: e.t4,
                                      wattsBalance: e.t5,
                                      panelsBalance: e.t6,
                                      rewardsBalance: e.t7,
                                      dailyROI: e.t8,
                                      maintenanceFee: e.t9,
                                      dataColor: e.t10
                                  });
                              case 40:
                              case "end":
                                  return e.stop()
                          }
                      }), e)
                  })));
                  return function(t, n) {
                      return e.apply(this, arguments)
                  }
              }());

          function qe(e) {
              return Ue.apply(this, arguments)
          }

          function Ue() {
              return (Ue = Object(s.a)(b.a.mark((function e(t) {
                  var n;
                  return b.a.wrap((function(e) {
                      for (;;) switch (e.prev = e.next) {
                          case 0:
                              return e.next = 2, t.getStorageAt(Ne, 1);
                          case 2:
                              return n = e.sent, e.abrupt("return", parseInt(n, 16));
                          case 4:
                          case "end":
                              return e.stop()
                      }
                  }), e)
              })))).apply(this, arguments)
          }

          function Qe(e) {
              return 100 / (e / 60 / 60 / 24)
          }

          function Ge(e) {
              var sXD = e > 604800 ? "cooling" : e < 604800 ? e < 432e3 ? e < 96e3 ? "solarflare" : "hypernova" : "supernova" : "data"
              console.log(sXD)
              return sXD
          }

          function Je(e) {
              var t = e.getSigner();
              return new Pe.a.Contract(Ne, Ae, t)
          }

          function Ke(e) {}
          var Xe = Object(we.c)({
                  name: "account",
                  initialState: {
                      loading: !1,
                      farmTVL: "",
                      exchangeRate: "",
                      walletBalance: "",
                      wattsBalance: "",
                      panelsBalance: "",
                      rewardsBalance: "",
                      referralAddress: "",
                      dailyROI: "",
                      maintenanceFee: "",
                      dataColor: ""
                  },
                  reducers: {
                      fetchAccountSuccess: function(e, t) {
                          Me(e, t.payload)
                      }
                  },
                  extraReducers: function(e) {
                      e.addCase(Ye.pending, (function(e) {
                          e.loading = !0
                      })).addCase(Ye.fulfilled, (function(e, t) {
                          Me(e, t.payload), e.loading = !1
                      })).addCase(Ye.rejected, (function(e, t) {
                          t.error;
                          e.loading = !1
                      })).addCase(Le.fulfilled, (function(e, t) {
                          Me(e, t.payload)
                      })).addCase(Ve.fulfilled, (function(e, t) {
                          Me(e, t.payload)
                      }))
                  }
              }),
              Ze = Xe.reducer,
              $e = (Xe.actions.fetchAccountSuccess, Object(ve.a)((function(e) {
                  return e.account
              }), (function(e) {
                  return e
              })), n(314)),
              et = n(315),
              tt = function(e) {
                  var t = e.minWidth,
                      n = e.minHeight,
                      r = e.maxWidth,
                      a = e.children;
                  return Object(O.jsx)(M.a, {
                      animation: ae,
                      p: 6,
                      m: 2,
                      minWidth: t,
                      minHeight: n,
                      maxWidth: r,
                      border: "1px",
                      borderRadius: "5px",
                      borderColor: "cardBorder",
                      bg: "cardBackground",
                      bgSize: "1800% 1800%",
                      boxShadow: "dark-lg",
                      backdropFilter: "auto",
                      backdropBlur: "5px",
                      position: "relative",
                      children: a
                  })
              },
              nt = function(e) {
                  var t = e.title,
                      n = e.info,
                      r = e.description,
                      a = e.children;
                  return Object(O.jsxs)(tt, {
                      minWidth: 350,
                      minHeight: 500,
                      maxWidth: 350,
                      children: [Object(O.jsx)("div", {
                          style: {
                              position: "absolute",
                              left: "25px",
                              top: "120px",
                              bottom: "0",
                              right: "0",
                              opacity: "0.03",
                              pointerEvents: "none"
                          },
                          children: Object(O.jsx)("img", {
                              width: "300px",
                              src: oe
                          })
                      }), Object(O.jsx)(M.a, {
                          children: Object(O.jsxs)(M.d, {
                              fontSize: "2xl",
                              fontWeight: "bold",
                              color: "title",
                              children: [t, n && Object(O.jsx)($e.a, {
                                  label: n,
                                  bg: "tooltipBackground",
                                  children: Object(O.jsx)(E.a, {
                                      w: "5",
                                      h: "5",
                                      ml: 2,
                                      mb: 1
                                  })
                              })]
                          })
                      }), Object(O.jsxs)(M.a, {
                          mb: 5,
                          children: [Object(O.jsx)(M.d, {
                              fontSize: "md",
                              color: "subheading",
                              children: r
                          }), Object(O.jsx)(M.b, {
                              borderColor: "dividerBackground",
                              mt: 1
                          })]
                      }), a]
                  })
              },
              rt = {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
              },
              at = function(e) {
                  var t = e.children;
                  return Object(O.jsx)("div", {
                      style: rt,
                      children: t
                  })
              },
              ot = function() {
                  var e = Object(o.c)((function(e) {
                          return e.account.farmTVL
                      })),
                      t = Object(o.c)((function(e) {
                          return e.account.exchangeRate
                      })),
                      n = Object(o.c)((function(e) {
                          return e.account.dailyROI
                      })),
                      r = Object(o.c)((function(e) {
                          return e.account.maintenanceFee
                      })),
                      a = Object(o.c)((function(e) {
                          return e.account.dataColor
                      })),
                      i = 365 * n,
                      c = function(e) {
                          var t = n / 100 / 86400 * e;
                          return Math.pow(1 + t, 604800 / e) * n
                      };
                  return Object(O.jsxs)(nt, {
                      title: "Solar Farm Statistics",
                      description: "View Live Solar Farm Statistics",
                      children: [Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: ["Solar Status", Object(O.jsx)($e.a, {
                                      label: "Solar Farm Miner may operate in various modes to output different ROI for it's investors. The current modes selection is as follows: Cooling, Normal, Supernova, Hypernova. Modes are engaged by the team.",
                                      bg: "tooltipBackground",
                                      children: Object(O.jsx)(E.a, {
                                          w: "4",
                                          h: "4",
                                          ml: 2,
                                          mb: 1
                                      })
                                  })]
                              }), "" !== a ? Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  backgroundColor: a ? "data" === a ? "dataBackgroundNeutral" : a : "dataBackgroundNeutral",
                                  paddingLeft: "10px",
                                  paddingRight: "10px",
                                  borderRadius: "10px",
                                  color: "dataBackground",
                                  children: "data" === a ? "Normal" : "solarflare" === a ? "Solar Flare" : a.charAt(0).toUpperCase() + a.slice(1)
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "125px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Total Value Locked"
                              }), "" !== e ? Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: a || "data",
                                  children: [Fe(e, 4), " BNB"]
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "125px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 10,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Estimated Rate"
                              }), "" !== e ? Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: a || "data",
                                  children: [Fe(t, 0), " Panels / BNB"]
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "125px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: ["Daily ROI", Object(O.jsx)($e.a, {
                                      label: "The Daily ROI is the rate up to which you receive interest on your initial investment (without compounding), on the daily timeframe. Our project features a, uniquely, interchangeable interest rate. Hence, you can expect this ROI value to increase.",
                                      bg: "tooltipBackground",
                                      children: Object(O.jsx)(E.a, {
                                          w: "4",
                                          h: "4",
                                          ml: 2,
                                          mb: 1
                                      })
                                  })]
                              }), Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: a || "data",
                                  children: [Fe(n, 2), "%"]
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Yearly ROI"
                              }), Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: a || "data",
                                  children: [Fe(i, 2), "%"]
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 10,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Grid Maintenance Fee"
                              }), Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: a || "data",
                                  children: [Fe(r, 2), "%"]
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsx)(at, {
                              children: Object(O.jsxs)(M.d, {
                                  as: "i",
                                  fontSize: "md",
                                  color: "text",
                                  children: ["Compounding Statistics", Object(O.jsx)($e.a, {
                                      label: "Examples of the new expected ROI you will achieve, depending on the interval you compound at. All figures below assume the duration compounded for to be 7 days (I.E. You stop compounding after 7 days).",
                                      bg: "tooltipBackground",
                                      children: Object(O.jsx)(E.a, {
                                          w: "4",
                                          h: "4",
                                          ml: 2,
                                          mb: 1
                                      })
                                  })]
                              })
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Twice Per Day"
                              }), Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: a || "data",
                                  children: [Fe(c(43200), 2), "% Daily ROI"]
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Once Per Day"
                              }), Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: a || "data",
                                  children: [Fe(c(86400), 2), "% Daily ROI"]
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Twice Per Week"
                              }), Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: a || "data",
                                  children: [Fe(c(302400), 2), "% Daily ROI"]
                              })]
                          })
                      })]
                  })
              },
              it = function(e) {
                  var t = e.stateRationalisers,
                      n = e.action,
                      r = e.children;
                  return Object(O.jsx)(P.a, {
                      variant: "solid",
                      size: "md",
                      minWidth: 300,
                      borderRadius: "5px",
                      border: "1px",
                      borderColor: "buttonBorder",
                      bg: "buttonBackground",
                      textColor: "buttonText",
                      disabled: t,
                      _hover: {
                          color: "buttonColorHover"
                      },
                      onClick: n,
                      children: r
                  })
              },
              ct = function() {
                  return Object(O.jsx)(it, {
                      stateRationalisers: !0,
                      action: null,
                      children: "Please Connect Your Wallet"
                  })
              },
              st = function(e) {
                  var t = e.stateRationalisers,
                      n = e.action,
                      r = e.children;
                  return Object(O.jsx)(P.a, {
                      animation: ne,
                      variant: "solid",
                      size: "md",
                      minWidth: 300,
                      borderRadius: "5px",
                      border: "1px",
                      borderColor: "dataBackgroundPositive",
                      bg: "linear-gradient(135deg, rgba(47, 133, 90, 1), rgba(47, 133, 90, 1), rgba(47, 133, 90, 1), rgba(47, 133, 90, 1), rgba(47, 163, 90, 1), rgba(47, 133, 90, 1), rgba(47, 133, 90, 1), rgba(47, 133, 90, 1), rgba(47, 133, 90, 1), rgba(47, 133, 90, 1))",
                      bgSize: "400%",
                      textColor: "buttonText",
                      boxShadow: "0 0 15px 0 rgba(47, 133, 90, 0.5)",
                      disabled: t,
                      _hover: {
                          animation: re,
                          boxShadow: "0 0 20px 0 rgba(47, 163, 90, 0.9)"
                      },
                      onClick: n,
                      children: r
                  })
              },
              lt = n(316),
              dt = function(e) {
                  var t = e.inputValue,
                      n = e.setInput,
                      r = e.stateRationalisers,
                      a = e.userBalance;
                  return Object(O.jsxs)(lt.b, {
                      size: "md",
                      children: [Object(O.jsx)(lt.a, {
                          variant: "filled",
                          border: "1px",
                          borderRadius: "5px",
                          borderColor: "inputBorder",
                          focusBorderColor: "inputText",
                          color: "inputText",
                          placeholder: "0.0",
                          bg: "inputBackground",
                          value: t,
                          onChange: function(e) {
                              return n(e.target.value)
                          },
                          type: "number",
                          disabled: r,
                          _hover: {
                              background: "inputBackgroundHover"
                          }
                      }), Object(O.jsx)(lt.c, {
                          width: "4.5rem",
                          children: Object(O.jsx)(P.a, {
                              h: "1.75rem",
                              bg: "buttonBackground",
                              borderRadius: "5px",
                              border: "1px",
                              borderColor: "buttonBorder",
                              textColor: "buttonText",
                              size: "sm",
                              onClick: function() {
                                  return n(a)
                              },
                              disabled: r,
                              _hover: {
                                  color: "buttonColorHover"
                              },
                              children: "Max"
                          })
                      })]
                  })
              },
              ut = n(150),
              bt = n.p + "static/media/buy_sound.8e6b4875.mp3",
              pt = function() {
                  var e = Object(o.b)(),
                      t = D(),
                      n = t.connected,
                      r = t.chainID,
                      a = t.address,
                      i = t.provider,
                      c = Object(ut.a)(bt),
                      d = Object(l.a)(c, 1)[0],
                      u = Object(p.useState)(""),
                      j = Object(l.a)(u, 2),
                      h = j[0],
                      x = j[1],
                      f = Object(o.c)((function(e) {
                          return e.account.walletBalance
                      })),
                      m = Object(o.c)((function(e) {
                          return e.account.panelsBalance
                      })),
                      g = Object(o.c)((function(e) {
                          return e.account.wattsBalance
                      })),
                      y = Object(o.c)((function(e) {
                          return e.account.exchangeRate
                      })),
                      w = Object(o.c)((function(e) {
                          return e.account.referralAddress
                      })),
                      v = Object(o.c)((function(e) {
                          return e.account.dailyROI
                      })),
                      C = Object(o.c)((function(e) {
                          return e.account.dataColor
                      })),
                      k = function() {
                          var t = Object(s.a)(b.a.mark((function t() {
                              return b.a.wrap((function(t) {
                                  for (;;) switch (t.prev = t.next) {
                                      case 0:
                                          if (!(isNaN(h) || h <= 0 || "" === h)) {
                                              t.next = 2;
                                              break
                                          }
                                          return t.abrupt("return", e(ze("Please enter a valid amount to lock!")));
                                      case 2:
                                          if (!(parseFloat(f) < parseFloat(h))) {
                                              t.next = 4;
                                              break
                                          }
                                          return t.abrupt("return", e(ze("You cannot create a lock with more than your wallet balance.")));
                                      case 4:
                                          return d(), t.next = 7, e(Ee({
                                              networkID: r,
                                              address: a,
                                              provider: i,
                                              action: h,
                                              value: w
                                          }));
                                      case 7:
                                      case "end":
                                          return t.stop()
                                  }
                              }), t)
                          })));
                          return function() {
                              return t.apply(this, arguments)
                          }
                      }();
                  return Object(O.jsxs)(nt, {
                      title: "Build Solar Farm",
                      info: "A solar farm consists of an array of solar panels. To begin farming solar energy, you must first build some solar panels.",
                      description: "Develop Your Solar Farm",
                      children: [Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: ["Panels Owned", Object(O.jsx)($e.a, {
                                      label: "Your solar panels are responsible for generating you power. Compounding your power causes them to be converted into BNB and re-invested into solar panels. This will then generate you power at a faster rate. Selling power allows you to receive the converted BNB instead of re-investing it.",
                                      bg: "tooltipBackground",
                                      children: Object(O.jsx)(E.a, {
                                          w: "4",
                                          h: "4",
                                          ml: 2,
                                          mb: 1
                                      })
                                  })]
                              }), n && "" !== m ? Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: C || "data",
                                  children: m > 0 ? Fe(m, 0) + " Panels" : "0 Panels"
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "125px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: ["Panels Value", Object(O.jsx)($e.a, {
                                      label: "The approximate total value of your Solar Panels in BNB.",
                                      bg: "tooltipBackground",
                                      children: Object(O.jsx)(E.a, {
                                          w: "4",
                                          h: "4",
                                          ml: 2,
                                          mb: 1
                                      })
                                  })]
                              }), n && "" !== m ? Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: C || "data",
                                  children: m > 0 ? "\u2248 " + Fe(m / y, 4) + " BNB" : "0.0000 BNB"
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "125px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 5,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: ["Daily Rewards", Object(O.jsx)($e.a, {
                                      label: "The approximate amount of rewards your Solar Panels will generate you daily.",
                                      bg: "tooltipBackground",
                                      children: Object(O.jsx)(E.a, {
                                          w: "4",
                                          h: "4",
                                          ml: 2,
                                          mb: 1
                                      })
                                  })]
                              }), n && "" !== m ? Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: C || "data",
                                  children: m > 0 ? "\u2248 " + Fe(m / y * (v / 100), 4) + " BNB" : "0.0000 BNB"
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "125px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 5,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Power Generated"
                              }), n && "" !== g ? Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  backgroundColor: C ? "data" === C ? "dataBackgroundNeutral" : C : "dataBackgroundNeutral",
                                  paddingLeft: "10px",
                                  paddingRight: "10px",
                                  borderRadius: "10px",
                                  color: "dataBackground",
                                  children: g > 0 ? Fe(g / Math.pow(10, 9), 4) + " GW" : "No Power Detected"
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "125px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 5,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Wallet Balance"
                              }), n && "" !== f ? Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "data",
                                  children: [Fe(f, 4), " BNB"]
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "125px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), n ? Object(O.jsxs)(O.Fragment, {
                          children: [Object(O.jsx)(M.a, {
                              mb: 1,
                              children: Object(O.jsx)(dt, {
                                  inputValue: h,
                                  setInput: x,
                                  userBalance: f
                              })
                          }), Object(O.jsx)(M.a, {
                              mb: 5,
                              children: Object(O.jsxs)(at, {
                                  children: [Object(O.jsx)(M.d, {
                                      fontSize: "md",
                                      color: "text",
                                      children: "Estimated Yield"
                                  }), "" !== y ? Object(O.jsxs)(M.d, {
                                      fontSize: "md",
                                      color: "yellow.400",
                                      children: [Fe(y * h, 0), " Panels"]
                                  }) : Object(O.jsx)(et.a, {
                                      height: "15px",
                                      width: "125px",
                                      startColor: "gray.400",
                                      endColor: "gray.600"
                                  })]
                              })
                          }), Object(O.jsx)(M.a, {
                              display: "block",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "stretch",
                              mb: 5,
                              children: Object(O.jsx)(st, {
                                  action: function() {
                                      return k()
                                  },
                                  children: "Build Panels"
                              })
                          })]
                      }) : Object(O.jsx)(ct, {})]
                  })
              },
              jt = function(e) {
                  var t = e.stateRationalisers,
                      n = e.action,
                      r = e.children;
                  return Object(O.jsx)(P.a, {
                      animation: $,
                      variant: "solid",
                      size: "md",
                      minWidth: 300,
                      borderRadius: "5px",
                      border: "1px",
                      borderColor: "dataBackgroundNegative",
                      bg: "rgba(197, 48, 48, 0.45)",
                      bgSize: "200%",
                      textColor: "buttonText",
                      boxShadow: "0 0 15px 0 rgba(197, 48, 48, 0.5)",
                      disabled: t,
                      _hover: {
                          boxShadow: "0 0 20px 0 rgba(197, 48, 48, 0.85)"
                      },
                      onClick: n,
                      children: r
                  })
              },
              ht = n.p + "static/media/compound_sound.a979c254.wav",
              xt = n.p + "static/media/sell_sound.2081df1f.wav",
              ft = function() {
                  var e = Object(o.b)(),
                      t = D(),
                      n = t.connected,
                      r = t.chainID,
                      a = t.address,
                      i = t.provider,
                      c = Object(ut.a)(ht),
                      d = Object(l.a)(c, 1)[0],
                      u = Object(ut.a)(xt),
                      p = Object(l.a)(u, 1)[0],
                      j = Object(o.c)((function(e) {
                          return e.account.rewardsBalance
                      })),
                      h = Object(o.c)((function(e) {
                          return e.account.panelsBalance
                      })),
                      x = Object(o.c)((function(e) {
                          return e.account.exchangeRate
                      })),
                      f = Object(o.c)((function(e) {
                          return e.account.wattsBalance
                      })),
                      m = Object(o.c)((function(e) {
                          return e.account.referralAddress
                      })),
                      g = Object(o.c)((function(e) {
                          return e.account.dailyROI
                      })),
                      y = Object(o.c)((function(e) {
                          return e.account.dataColor
                      })),
                      w = function() {
                          var t = Object(s.a)(b.a.mark((function t() {
                              return b.a.wrap((function(t) {
                                  for (;;) switch (t.prev = t.next) {
                                      case 0:
                                          if (!(j <= 0)) {
                                              t.next = 2;
                                              break
                                          }
                                          return t.abrupt("return", e(ze("You have no rewards to compound!")));
                                      case 2:
                                          return d(), t.next = 5, e(We({
                                              networkID: r,
                                              address: a,
                                              provider: i,
                                              action: m
                                          }));
                                      case 5:
                                      case "end":
                                          return t.stop()
                                  }
                              }), t)
                          })));
                          return function() {
                              return t.apply(this, arguments)
                          }
                      }(),
                      v = function() {
                          var t = Object(s.a)(b.a.mark((function t() {
                              return b.a.wrap((function(t) {
                                  for (;;) switch (t.prev = t.next) {
                                      case 0:
                                          if (!(j <= 0)) {
                                              t.next = 2;
                                              break
                                          }
                                          return t.abrupt("return", e(ze("You have no rewards to withdraw!")));
                                      case 2:
                                          return p(), t.next = 5, e(_e({
                                              networkID: r,
                                              address: a,
                                              provider: i
                                          }));
                                      case 5:
                                      case "end":
                                          return t.stop()
                                  }
                              }), t)
                          })));
                          return function() {
                              return t.apply(this, arguments)
                          }
                      }();
                  return Object(O.jsxs)(nt, {
                      title: "Manage Solar Farm",
                      info: "A solar farm can be made to exponentially grow in size via compounding the rewards generated by the farm. Selling causes you to lose all of your power generated.",
                      description: "Manage Your Solar Farm",
                      children: [Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: ["Panels Owned", Object(O.jsx)($e.a, {
                                      label: "Your solar panels are responsible for generating you power. Compounding your power causes them to be converted into BNB and re-invested into solar panels. This will then generate you power at a faster rate. Selling power allows you to receive the converted BNB instead of re-investing it.",
                                      bg: "tooltipBackground",
                                      children: Object(O.jsx)(E.a, {
                                          w: "4",
                                          h: "4",
                                          ml: 2,
                                          mb: 1
                                      })
                                  })]
                              }), n && "" !== h ? Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: y || "data",
                                  children: h > 0 ? Fe(h, 0) + " Panels" : "0 Panels"
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "125px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: ["Panels Value", Object(O.jsx)($e.a, {
                                      label: "The approximate total value of your Solar Panels in BNB.",
                                      bg: "tooltipBackground",
                                      children: Object(O.jsx)(E.a, {
                                          w: "4",
                                          h: "4",
                                          ml: 2,
                                          mb: 1
                                      })
                                  })]
                              }), n && "" !== h ? Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: y || "data",
                                  children: h > 0 ? "\u2248 " + Fe(h / x, 4) + " BNB" : "0.0000 BNB"
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "125px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 5,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: ["Daily Rewards", Object(O.jsx)($e.a, {
                                      label: "The approximate amount of rewards your Solar Panels will generate you daily.",
                                      bg: "tooltipBackground",
                                      children: Object(O.jsx)(E.a, {
                                          w: "4",
                                          h: "4",
                                          ml: 2,
                                          mb: 1
                                      })
                                  })]
                              }), n && "" !== h ? Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: y || "data",
                                  children: h > 0 ? "\u2248 " + Fe(h / x * (g / 100), 4) + " BNB" : "0.0000 BNB"
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "125px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 5,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Power Generated"
                              }), n && "" !== f ? Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  backgroundColor: y ? "data" === y ? "dataBackgroundNeutral" : y : "dataBackgroundNeutral",
                                  paddingLeft: "10px",
                                  paddingRight: "10px",
                                  borderRadius: "10px",
                                  color: "dataBackground",
                                  children: f > 0 ? Fe(f / Math.pow(10, 9), 4) + " GW" : "No Power Detected"
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "125px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 5,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Reward Balance"
                              }), n && "" !== j ? Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  backgroundColor: j > 0 ? "dataBackgroundPositive" : "dataBackgroundNegative",
                                  paddingLeft: "10px",
                                  paddingRight: "10px",
                                  borderRadius: "10px",
                                  color: "dataBackground",
                                  children: j > 0 ? Fe(j, 4) + " BNB" : "No Rewards Detected"
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "125px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), n ? Object(O.jsxs)(O.Fragment, {
                          children: [Object(O.jsx)(M.a, {
                              display: "block",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "stretch",
                              mb: 5,
                              children: Object(O.jsx)(st, {
                                  action: function() {
                                      return w()
                                  },
                                  children: "Compound Rewards"
                              })
                          }), Object(O.jsx)(M.a, {
                              display: "block",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "stretch",
                              children: Object(O.jsx)(jt, {
                                  action: function() {
                                      return v()
                                  },
                                  children: "Sell Power"
                              })
                          })]
                      }) : Object(O.jsx)(ct, {})]
                  })
              },
              mt = function() {
                  var e = Object(o.b)(),
                      t = D().connected,
                      n = Object(p.useState)(""),
                      r = Object(l.a)(n, 2),
                      a = r[0],
                      i = r[1],
                      c = Object(p.useState)(""),
                      s = Object(l.a)(c, 2),
                      d = s[0],
                      u = s[1],
                      b = Object(p.useState)(""),
                      j = Object(l.a)(b, 2),
                      h = j[0],
                      x = j[1],
                      f = Object(p.useState)("0.0"),
                      m = Object(l.a)(f, 2),
                      g = m[0],
                      y = m[1],
                      w = Object(o.c)((function(e) {
                          return e.account.exchangeRate
                      }));
                  return Object(O.jsx)(nt, {
                      title: "Compound Calculator",
                      info: "An introduction to compound interest and its effects within this protocol. All calculations assume constant TVL and Exchange Rate - the current values at the time of calculation are the values used within the calculation, to represent these.",
                      description: "Visualise The Benefits Of Compounding",
                      children: t ? Object(O.jsxs)(O.Fragment, {
                          children: [Object(O.jsx)(M.a, {
                              mb: 1,
                              children: Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: ["Initial Investment (BNB)", Object(O.jsx)($e.a, {
                                      maxW: "250px",
                                      label: "How much BNB you've deposited to build your solar farm.",
                                      bg: "tooltipBackground",
                                      children: Object(O.jsx)(E.a, {
                                          w: "4",
                                          h: "4",
                                          ml: 2,
                                          mb: 1
                                      })
                                  })]
                              })
                          }), Object(O.jsx)(M.a, {
                              mb: 2,
                              children: Object(O.jsx)(lt.a, {
                                  variant: "filled",
                                  border: "1px",
                                  borderRadius: "5px",
                                  borderColor: "inputBorder",
                                  focusBorderColor: "inputText",
                                  color: "inputText",
                                  placeholder: "0.0",
                                  bg: "inputBackground",
                                  value: a,
                                  type: "number",
                                  onChange: function(e) {
                                      return i(e.target.value)
                                  },
                                  _hover: {
                                      background: "inputBackgroundHover"
                                  }
                              })
                          }), Object(O.jsx)(M.a, {
                              mb: 1,
                              children: Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: ["Compounding Interval (Hours)", Object(O.jsx)($e.a, {
                                      maxW: "250px",
                                      label: "How frequently you intend to compound your rewards for (I.E. Per x Hours).",
                                      bg: "tooltipBackground",
                                      children: Object(O.jsx)(E.a, {
                                          w: "4",
                                          h: "4",
                                          ml: 2,
                                          mb: 1
                                      })
                                  })]
                              })
                          }), Object(O.jsx)(M.a, {
                              mb: 2,
                              children: Object(O.jsx)(lt.a, {
                                  variant: "filled",
                                  border: "1px",
                                  borderRadius: "5px",
                                  borderColor: "inputBorder",
                                  focusBorderColor: "inputText",
                                  color: "inputText",
                                  placeholder: "0",
                                  bg: "inputBackground",
                                  value: d,
                                  type: "number",
                                  onChange: function(e) {
                                      return u(e.target.value)
                                  },
                                  _hover: {
                                      background: "inputBackgroundHover"
                                  }
                              })
                          }), Object(O.jsx)(M.a, {
                              mb: 1,
                              children: Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: ["Compounding Duration (Days)", Object(O.jsx)($e.a, {
                                      maxW: "250px",
                                      label: "How long you intend to compound your rewards for (I.E. For x Days).",
                                      bg: "tooltipBackground",
                                      children: Object(O.jsx)(E.a, {
                                          w: "4",
                                          h: "4",
                                          ml: 2,
                                          mb: 1
                                      })
                                  })]
                              })
                          }), Object(O.jsx)(M.a, {
                              mb: 5,
                              children: Object(O.jsx)(lt.a, {
                                  variant: "filled",
                                  border: "1px",
                                  borderRadius: "5px",
                                  borderColor: "inputBorder",
                                  focusBorderColor: "inputText",
                                  color: "inputText",
                                  placeholder: "0",
                                  bg: "inputBackground",
                                  value: h,
                                  type: "number",
                                  onChange: function(e) {
                                      return x(e.target.value)
                                  },
                                  _hover: {
                                      background: "inputBackgroundHover"
                                  }
                              })
                          }), Object(O.jsx)(M.a, {
                              display: "block",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "stretch",
                              mb: 1,
                              children: Object(O.jsx)(it, {
                                  action: function() {
                                      return function() {
                                          if ("" === a || isNaN(a)) return e(ze("Initial investment field is empty!"));
                                          if ("" === d || isNaN(d)) return e(ze("Compounding interval field is empty!"));
                                          if ("" === h || isNaN(h)) return e(ze("Compounding duration field is empty!"));
                                          var t = 16534391534391537e-22 * d * 60 * 60,
                                              n = Math.pow(1 + t, 24 * h * 60 * 60 / (60 * d * 60));
                                          return y((a * n).toString()), e(Re("Profit calculated successfully."))
                                      }()
                                  },
                                  children: "Calculate"
                              })
                          }), Object(O.jsx)(M.a, {
                              mb: 1,
                              children: Object(O.jsxs)(at, {
                                  children: [Object(O.jsxs)(M.d, {
                                      fontSize: "md",
                                      color: "text",
                                      children: ["New Total", Object(O.jsx)($e.a, {
                                          maxW: "250px",
                                          label: "An estimate of your new solar panels total.",
                                          bg: "tooltipBackground",
                                          children: Object(O.jsx)(E.a, {
                                              w: "4",
                                              h: "4",
                                              ml: 2,
                                              mb: 1
                                          })
                                      })]
                                  }), Object(O.jsxs)(M.d, {
                                      fontSize: "md",
                                      color: "yellow.400",
                                      children: ["0.0" !== g ? Fe(g * w, 0) : "0", " Panels"]
                                  })]
                              })
                          }), Object(O.jsx)(M.a, {
                              mb: 1,
                              children: Object(O.jsxs)(at, {
                                  children: [Object(O.jsxs)(M.d, {
                                      fontSize: "md",
                                      color: "text",
                                      children: ["Profit Amount", Object(O.jsx)($e.a, {
                                          maxW: "250px",
                                          label: "An estimate of the solar panels you've gained by compounding.",
                                          bg: "tooltipBackground",
                                          children: Object(O.jsx)(E.a, {
                                              w: "4",
                                              h: "4",
                                              ml: 2,
                                              mb: 1
                                          })
                                      })]
                                  }), Object(O.jsxs)(M.d, {
                                      fontSize: "md",
                                      color: "yellow.400",
                                      children: ["0.0" !== g ? Fe((g - a) * w, 0) : "0", " Panels"]
                                  })]
                              })
                          }), Object(O.jsx)(M.a, {
                              children: Object(O.jsxs)(at, {
                                  children: [Object(O.jsxs)(M.d, {
                                      fontSize: "md",
                                      color: "text",
                                      children: ["Profit Value", Object(O.jsx)($e.a, {
                                          maxW: "250px",
                                          label: "An estimate of the amount in BNB the solar panels' 'Profit Amount' is worth.",
                                          bg: "tooltipBackground",
                                          children: Object(O.jsx)(E.a, {
                                              w: "4",
                                              h: "4",
                                              ml: 2,
                                              mb: 1
                                          })
                                      })]
                                  }), Object(O.jsxs)(M.d, {
                                      fontSize: "md",
                                      color: "yellow.400",
                                      children: ["0.0" !== g ? Fe(g - a, 4) : "0.0", " BNB"]
                                  })]
                              })
                          })]
                      }) : Object(O.jsx)(ct, {})
                  })
              },
              gt = n(171),
              yt = n(317),
              Ot = function() {
                  var e = Object(o.b)(),
                      t = D(),
                      n = t.connected,
                      r = t.chainID,
                      a = t.address,
                      i = t.provider,
                      c = Object(pe.useMediaQuery)({
                          query: "(max-width: 760px)"
                      }),
                      s = Object(o.c)((function(e) {
                          return e.account.referralAddress
                      })),
                      d = Object(p.useState)(s),
                      u = Object(l.a)(d, 2),
                      b = u[0],
                      j = u[1];
                  return Object(O.jsx)(nt, {
                      title: "Configure Referral",
                      info: "This project uses wallet addresses for referrals. Share your wallet address (or copy your referral link) and earn 12% of the BNB used to build and compound panels from anyone who uses it.",
                      description: "Configure Your Referrer",
                      children: n ? Object(O.jsxs)(O.Fragment, {
                          children: [Object(O.jsx)(M.a, {
                              display: "block",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "stretch",
                              mb: 1,
                              children: Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Your Referrer's Wallet Address"
                              })
                          }), Object(O.jsx)(M.a, {
                              mb: 5,
                              children: Object(O.jsx)(lt.a, {
                                  variant: "filled",
                                  border: "1px",
                                  borderRadius: "5px",
                                  borderColor: "inputBorder",
                                  focusBorderColor: "inputText",
                                  color: "inputText",
                                  placeholder: "0x ...",
                                  bg: "inputBackground",
                                  value: b,
                                  onChange: function(e) {
                                      return j(e.target.value)
                                  },
                                  _hover: {
                                      background: "inputBackgroundHover"
                                  }
                              })
                          }), Object(O.jsx)(M.a, {
                              display: "block",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "stretch",
                              mb: 10,
                              children: Object(O.jsx)(it, {
                                  action: function() {
                                      return "" === b ? e(ze("Referrer address field is empty!")) : (e(Le({
                                          networkID: r,
                                          address: a,
                                          provider: i,
                                          action: b
                                      })), e(Re("Referrer address set successfully.")))
                                  },
                                  children: "Set Referrer's Address"
                              })
                          }), Object(O.jsx)(M.a, {
                              display: "block",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "stretch",
                              mb: 1,
                              children: Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: ["Your Referral Link", Object(O.jsx)($e.a, {
                                      label: "Make it easier for your referee to configure your referral by sharing your referral link with them. The link automatically configures your wallet address in their dApp, so that they don't have to do it themselves. Your unique QR Code also does the same.",
                                      bg: "tooltipBackground",
                                      children: Object(O.jsx)(E.a, {
                                          w: "4",
                                          h: "4",
                                          ml: 2,
                                          mb: 1
                                      })
                                  })]
                              })
                          }), Object(O.jsx)(M.a, {
                              mb: 5,
                              children: Object(O.jsx)(lt.a, {
                                  variant: "filled",
                                  border: "1px",
                                  borderRadius: "5px",
                                  borderColor: "inputBorder",
                                  focusBorderColor: "inputText",
                                  color: "inputText",
                                  bg: "inputBackground",
                                  value: "app.solarfarm.finance/?ref=" + a,
                                  _hover: {
                                      background: "inputBackgroundHover"
                                  }
                              })
                          }), c ? Object(O.jsx)(O.Fragment, {}) : Object(O.jsx)(M.a, {
                              display: "block",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "stretch",
                              mb: 10,
                              children: Object(O.jsx)(it, {
                                  action: function() {
                                      return function() {
                                          var e = {
                                              method: "POST",
                                              url: "https://qrcode-monkey.p.rapidapi.com/qr/custom",
                                              headers: {
                                                  "content-type": "application/json",
                                                  "X-RapidAPI-Host": "qrcode-monkey.p.rapidapi.com",
                                                  "X-RapidAPI-Key": "4bdce86d48msh08da30a477051b8p1537a2jsnfb8304ddfdb6"
                                              },
                                              responseType: "arraybuffer",
                                              data: {
                                                  data: "https://app.solarfarm.finance/?ref=" + a + "/",
                                                  config: {
                                                      body: "rounded-pointed",
                                                      eye: "frame14",
                                                      eyeBall: "ball16",
                                                      erf1: [],
                                                      erf2: ["fh"],
                                                      erf3: ["fv"],
                                                      brf1: [],
                                                      brf2: ["fh"],
                                                      brf3: ["fv"],
                                                      gradientType: "linear",
                                                      gradientColor1: "#FFA200",
                                                      gradientColor2: "#FF0000",
                                                      bgColor: "#FFFFFF",
                                                      gradientOnEyes: "true",
                                                      logo: "https://i.ibb.co/7J0Knc9/QRLogo-New.png"
                                                  },
                                                  size: "500",
                                                  download: "false",
                                                  file: "png"
                                              }
                                          };
                                          yt.request(e).then((function(e) {
                                              var t = new Blob([e.data], {
                                                  type: e.headers["content-type"]
                                              });
                                              Object(gt.saveAs)(URL.createObjectURL(t), "solar_farm_qr.png")
                                          })).catch((function(e) {}))
                                      }()
                                  },
                                  children: "Download Your QR Code"
                              })
                          })]
                      }) : Object(O.jsx)(ct, {})
                  })
              },
              wt = n(317),
              vt = function() {
                  var e = D(),
                      t = e.connected,
                      n = e.address,
                      r = Object(p.useState)(""),
                      a = Object(l.a)(r, 2),
                      o = a[0],
                      i = a[1];
                  return Object(O.jsx)(nt, {
                      title: "Mobile QR Code",
                      description: "View Your QR Code On Mobile",
                      children: t ? Object(O.jsxs)(O.Fragment, {
                          children: [Object(O.jsx)(M.a, {
                              display: "block",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "stretch",
                              mb: 5,
                              children: Object(O.jsx)("img", {
                                  src: o
                              })
                          }), "" === o ? Object(O.jsx)(M.a, {
                              display: "block",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "stretch",
                              mb: 5,
                              children: Object(O.jsx)(it, {
                                  action: function() {
                                      return function() {
                                          var e = {
                                              method: "POST",
                                              url: "https://qrcode-monkey.p.rapidapi.com/qr/custom",
                                              headers: {
                                                  "content-type": "application/json",
                                                  "X-RapidAPI-Host": "qrcode-monkey.p.rapidapi.com",
                                                  "X-RapidAPI-Key": "4bdce86d48msh08da30a477051b8p1537a2jsnfb8304ddfdb6"
                                              },
                                              responseType: "arraybuffer",
                                              data: {
                                                  data: "https://app.solarfarm.finance/?ref=" + n + "/",
                                                  config: {
                                                      body: "rounded-pointed",
                                                      eye: "frame14",
                                                      eyeBall: "ball16",
                                                      erf1: [],
                                                      erf2: ["fh"],
                                                      erf3: ["fv"],
                                                      brf1: [],
                                                      brf2: ["fh"],
                                                      brf3: ["fv"],
                                                      gradientType: "linear",
                                                      gradientColor1: "#FFA200",
                                                      gradientColor2: "#FF0000",
                                                      bgColor: "#FFFFFF",
                                                      gradientOnEyes: "true",
                                                      logo: "https://i.ibb.co/7J0Knc9/QRLogo-New.png"
                                                  },
                                                  size: "500",
                                                  download: "false",
                                                  file: "png"
                                              }
                                          };
                                          wt.request(e).then((function(e) {
                                              var t = new Blob([e.data], {
                                                  type: e.headers["content-type"]
                                              });
                                              i(URL.createObjectURL(t))
                                          })).catch((function(e) {}))
                                      }()
                                  },
                                  children: "Generate Your QR Code"
                              })
                          }) : Object(O.jsx)(M.a, {
                              display: "block",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "stretch",
                              children: Object(O.jsx)(it, {
                                  action: function() {
                                      Object(gt.saveAs)(o, "solar_farm_qr.png")
                                  },
                                  children: "Download (Experimental)"
                              })
                          })]
                      }) : Object(O.jsx)(ct, {})
                  })
              },
              Ct = n(328),
              kt = function(e) {
                  var t = e.tab,
                      n = e.setTab,
                      r = e.tabs;
                  return Object(O.jsx)(M.a, {
                      animation: ae,
                      top: "77px",
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      position: "sticky",
                      zIndex: 1,
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      borderColor: "navBorder",
                      bg: "navBackground",
                      bgSize: "1800% 1800%",
                      boxShadow: "0px 0px 45px -15px #000000",
                      backdropFilter: "auto",
                      backdropBlur: "5px",
                      children: Object(O.jsx)(Ct.c, {
                          variant: "line",
                          borderRadius: "5px",
                          colorScheme: "orange",
                          borderColor: "rgba(0, 0, 0, 0)",
                          textColor: "buttonText",
                          defaultIndex: 0,
                          children: Object(O.jsx)(Ct.b, {
                              children: r.map((function(e, r) {
                                  return Object(O.jsx)(Ct.a, {
                                      fontWeight: t === r ? "700" : "500",
                                      onClick: function() {
                                          return n(r)
                                      },
                                      _hover: {
                                          textColor: "buttonBackgroundHover"
                                      },
                                      children: e
                                  })
                              }))
                          })
                      })
                  })
              },
              St = n(644),
              Bt = {
                  marginTop: "2rem"
              },
              Tt = function(e) {
                  var t = e.links,
                      n = e.icons;
                  return Object(O.jsx)("div", {
                      style: Bt,
                      children: Object(O.jsx)(M.a, {
                          animation: ae,
                          pl: 6,
                          pr: 6,
                          pt: 4,
                          pb: 2.5,
                          mb: 2,
                          border: "1px",
                          borderRadius: "5px",
                          borderColor: "cardBorder",
                          bg: "cardBackground",
                          bgSize: "1800% 1800%",
                          boxShadow: "dark-lg",
                          backdropFilter: "auto",
                          backdropBlur: "5px",
                          minW: "200px",
                          display: "flex",
                          justifyContent: "space-between",
                          children: t.map((function(e, t) {
                              return Object(O.jsx)(M.c, {
                                  style: {
                                      textDecoration: "none"
                                  },
                                  isExternal: !0,
                                  href: e,
                                  children: Object(O.jsx)(N.a, {
                                      as: n[t],
                                      w: "7",
                                      h: "7",
                                      color: "icon"
                                  })
                              }, t)
                          }))
                      })
                  })
              },
              Rt = [V.d, St.a, V.c],
              zt = ["https://github.com/SafuAudit/kyc-certificates/blob/main/SolarFarm_KYC_Certificate.pdf", "https://bscscan.com/address/0x7fE8bb9D90Cd3e4Cf89B0e539cD0542b3B779c2c", "https://github.com/Block-Audit-Report/SolarFarm"],
              Dt = function() {
                  return Object(O.jsx)(Tt, {
                      icons: Rt,
                      links: zt
                  })
              },
              It = [0, 1, 2],
              Ft = [he, je, xe],
              Mt = ["Solar Farm Token", "SolarPad (Upcoming)", "SolarVerse (Upcoming)"],
              Pt = ["Gain exclusive access to our launchpad by purchasing some Solar Farm Tokens! The token will have 8% in-and-out tax (subject to change), 3% will go directly back into Solar Farm Miner, 3% will be used to support marketing of the ecosystem and 2% will be used to fund the treasury which will be independently traded to bring external funds into the ecosystem.", "Launch your project with the lowest fees on BSC! 50% of the funds generated from the launchpad will be put back into the ecosystem, 30% to the miner and 20% to the chart token!", "Join your friends in the SolarVerse! Manage, interact and navigate your farm in your browser or in a Virtual Reality Headset. Visit our Casino and participate in different games to win huge prizes. The SolarVerse awaits you!"],
              Nt = function() {
                  var e = Object(F.d)(),
                      t = e.isOpen,
                      n = e.onOpen,
                      r = e.onClose,
                      a = Object(p.useState)(0),
                      o = Object(l.a)(a, 2),
                      i = o[0],
                      c = o[1],
                      s = Object(p.useState)(0),
                      d = Object(l.a)(s, 2),
                      u = d[0],
                      b = d[1];
                  return Object(O.jsxs)(O.Fragment, {
                      children: [Object(O.jsx)(M.a, {
                          pl: 6,
                          pr: 6,
                          pt: 2,
                          pb: 2,
                          mb: 2,
                          mt: 5,
                          display: "flex",
                          justifyContent: "center",
                          children: It.map((function(e) {
                              return Object(O.jsx)(M.a, {
                                  animation: te,
                                  mr: 2 !== e ? 10 : 0,
                                  border: "2px",
                                  borderRadius: "50%",
                                  borderColor: "cardBorder",
                                  cursor: "pointer",
                                  children: Object(O.jsx)("img", {
                                      onClick: function() {
                                          return function(e) {
                                              c(Mt[e]), b(Pt[e]), n()
                                          }(e)
                                      },
                                      src: Ft[e],
                                      width: "70px"
                                  })
                              }, e)
                          }))
                      }), Object(O.jsxs)(A.g, {
                          onClose: r,
                          size: "sm",
                          isOpen: t,
                          children: [Object(O.jsx)(A.l, {
                              bg: "blackAlpha.300",
                              backdropFilter: "blur(10px)"
                          }), Object(O.jsxs)(A.j, {
                              bgColor: "rgba(0, 0, 0, 0.85)",
                              children: [Object(O.jsx)(A.k, {
                                  color: "title",
                                  children: i
                              }), Object(O.jsx)(A.i, {
                                  color: "red"
                              }), Object(O.jsx)(A.h, {
                                  color: "data",
                                  pb: 5,
                                  children: u
                              })]
                          })]
                      })]
                  })
              },
              At = n.p + "static/media/cooling.6284079c.png",
              Et = n.p + "static/media/normal.88d112f8.png",
              Wt = n.p + "static/media/supernova.70031076.png",
              _t = n.p + "static/media/hypernova.32c2cb39.png",
              Lt = n.p + "static/media/solarflare.00565946.png",
              Ht = {
                  display: "flex",
                  flexFlow: "row wrap",
                  borderRadius: "lg",
                  border: "1px",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "stretch",
                  width: "auto",
                  marginTop: "1rem"
              },
              Vt = {
                  display: "flex",
                  flexFlow: "column wrap",
                  borderRadius: "lg",
                  border: "1px",
                  justifyContent: "center",
                  alignItems: "stretch"
              },
              Yt = {
                  display: "inline-flex",
                  flexFlow: "row wrap",
                  justifyContent: "center"
              },
              qt = ["Dashboard", "Calculator", "Referral"];
          var Ut = function() {
                  var e = new URLSearchParams(Object(Oe.d)().search),
                      t = Object(o.b)(),
                      n = Object(pe.useMediaQuery)({
                          query: "(max-width: 760px)"
                      }),
                      r = D(),
                      a = r.provider,
                      i = r.chainID,
                      c = r.address,
                      s = r.connected,
                      d = Object(p.useState)(0),
                      u = Object(l.a)(d, 2),
                      b = u[0],
                      j = u[1];
                  return Object(p.useEffect)((function() {
                      var e = setInterval(function e() {
                          return s || t(Ve({
                              networkID: i,
                              provider: a
                          })), e
                      }(), 1e3);
                      return function() {
                          return clearInterval(e)
                      }
                  }), [t, a, i, c, s]), Object(p.useEffect)((function() {
                      var e = setInterval((function() {
                          s && t(Ye({
                              networkID: i,
                              address: c,
                              provider: a
                          }))
                      }), 1e3);
                      return function() {
                          return clearInterval(e)
                      }
                  }), [t, a, i, c, s]), Object(p.useEffect)((function() {
                      if (s && i && c && a) {
                          var n = e.get("ref") ? e.get("ref") : "";
                          n && "" !== n && (t(Le({
                              networkID: i,
                              address: c,
                              provider: a,
                              action: n
                          })), t(Re("Referrer address set successfully.")))
                      }
                  }), [s, i, c, a, t]), Object(O.jsxs)(O.Fragment, {
                      children: [Object(O.jsx)("div", {
                          style: function() {
                              var e = Object(o.c)((function(e) {
                                      return e.account.dataColor
                                  })),
                                  t = Et;
                              return "cooling" === e ? t = At : "supernova" === e ? t = Wt : "hypernova" === e ? t = _t : "solarflare" === e && (t = Lt), {
                                  display: "block",
                                  position: "fixed",
                                  left: 0,
                                  top: 0,
                                  width: "100%",
                                  height: "100%",
                                  zIndex: -10,
                                  background: "url(".concat(t, ") no-repeat center center"),
                                  backgroundSize: "cover",
                                  WebkitBackgroundSize: "cover",
                                  MozBackgroundSize: "cover",
                                  OBackgroundSize: "cover"
                              }
                          }()
                      }), Object(O.jsx)(kt, {
                          tab: b,
                          setTab: j,
                          tabs: qt
                      }), Object(O.jsx)(Dt, {}), Object(O.jsx)("div", {
                          style: Ht,
                          children: Object(O.jsx)("div", {
                              style: Vt,
                              children: Object(O.jsxs)("div", {
                                  style: Yt,
                                  children: [0 === b && Object(O.jsxs)(O.Fragment, {
                                      children: [Object(O.jsx)(ot, {}), Object(O.jsx)(pt, {}), Object(O.jsx)(ft, {})]
                                  }), 1 === b && Object(O.jsx)(mt, {}), 2 === b && Object(O.jsx)(Ot, {}), 2 === b && n && Object(O.jsx)(vt, {})]
                              })
                          })
                      }), Object(O.jsx)(Nt, {}), Object(O.jsx)(M.a, {
                          color: "black",
                          fontWeight: "700",
                          pt: 5,
                          children: "Solar Farm Miner 2022. All Rights Reserved."
                      })]
                  })
              },
              Qt = "0x53fE2026fF1F82e4FC5Fb87A36567Ee4aCffFb8c",
              Gt = n(625),
              Jt = Object(we.b)("presale/claim", function() {
                  var e = Object(s.a)(b.a.mark((function e(t, n) {
                      var r, a, o, i, c, s;
                      return b.a.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return r = t.address, a = t.networkID, o = t.provider, i = n.dispatch, en(o), c = $t(o), e.prev = 4, e.next = 7, c.claim();
                              case 7:
                                  if (!(s = e.sent)) {
                                      e.next = 11;
                                      break
                                  }
                                  return e.next = 11, s.wait();
                              case 11:
                                  e.next = 16;
                                  break;
                              case 13:
                                  e.prev = 13, e.t0 = e.catch(4), i(ze(e.t0.message));
                              case 16:
                                  return e.prev = 16, s && (i(Re("Claimed tokens successfully.")), i(Zt({
                                      networkID: a,
                                      provider: o,
                                      address: r
                                  }))), e.finish(16);
                              case 19:
                              case "end":
                                  return e.stop()
                          }
                      }), e, null, [
                          [4, 13, 16, 19]
                      ])
                  })));
                  return function(t, n) {
                      return e.apply(this, arguments)
                  }
              }()),
              Kt = Object(we.b)("presale/contribute", function() {
                  var e = Object(s.a)(b.a.mark((function e(t, n) {
                      var r, a, o, i, c, s, l, d;
                      return b.a.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return r = t.address, a = t.networkID, o = t.provider, i = t.value, c = n.dispatch, en(o), s = $t(o), e.prev = 4, d = {
                                      value: Pe.a.utils.parseEther(i)
                                  }, e.next = 8, s.contribute(d);
                              case 8:
                                  if (!(l = e.sent)) {
                                      e.next = 12;
                                      break
                                  }
                                  return e.next = 12, l.wait();
                              case 12:
                                  e.next = 17;
                                  break;
                              case 14:
                                  e.prev = 14, e.t0 = e.catch(4), c(ze(e.t0.message));
                              case 17:
                                  return e.prev = 17, l && (c(Re("Contributed to presale successfully.")), c(Zt({
                                      networkID: a,
                                      provider: o,
                                      address: r
                                  }))), e.finish(17);
                              case 20:
                              case "end":
                                  return e.stop()
                          }
                      }), e, null, [
                          [4, 14, 17, 20]
                      ])
                  })));
                  return function(t, n) {
                      return e.apply(this, arguments)
                  }
              }()),
              Xt = Object(we.b)("presale/loadPresaleStatistics", function() {
                  var e = Object(s.a)(b.a.mark((function e(t) {
                      var n, r;
                      return b.a.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return n = t.provider, r = new Pe.a.Contract(Qt, Gt, n), e.next = 4, r.isOpen();
                              case 4:
                                  return e.t0 = e.sent, e.t1 = Pe.a.utils, e.next = 8, r.hardCap();
                              case 8:
                                  return e.t2 = e.sent, e.t3 = e.t1.formatEther.call(e.t1, e.t2).toString(), e.t4 = Pe.a.utils, e.next = 13, r.allocationCap();
                              case 13:
                                  return e.t5 = e.sent, e.t6 = e.t4.formatEther.call(e.t4, e.t5).toString(), e.t7 = Pe.a.utils, e.next = 18, r.subjectRaised();
                              case 18:
                                  return e.t8 = e.sent, e.t9 = e.t7.formatEther.call(e.t7, e.t8).toString(), e.next = 22, r.openingTime();
                              case 22:
                                  return e.t10 = e.sent.toString(), e.next = 25, r.closingTime();
                              case 25:
                                  return e.t11 = e.sent.toString(), e.next = 28, r.claimOpen();
                              case 28:
                                  return e.t12 = e.sent, e.abrupt("return", {
                                      status: e.t0,
                                      hardCap: e.t3,
                                      individualAllocation: e.t6,
                                      amountRaised: e.t9,
                                      presaleOpen: e.t10,
                                      presaleClose: e.t11,
                                      claimOpen: e.t12
                                  });
                              case 30:
                              case "end":
                                  return e.stop()
                          }
                      }), e)
                  })));
                  return function(t) {
                      return e.apply(this, arguments)
                  }
              }()),
              Zt = Object(we.b)("presale/loadPresaleDetails", function() {
                  var e = Object(s.a)(b.a.mark((function e(t) {
                      var n, r, a, o;
                      return b.a.wrap((function(e) {
                          for (;;) switch (e.prev = e.next) {
                              case 0:
                                  return n = t.provider, r = t.address, en(n), a = $t(n), e.next = 5, a.allocationCap();
                              case 5:
                                  return o = e.sent, e.next = 8, a.isOpen();
                              case 8:
                                  return e.t0 = e.sent, e.t1 = Pe.a.utils, e.next = 12, a.hardCap();
                              case 12:
                                  return e.t2 = e.sent, e.t3 = e.t1.formatEther.call(e.t1, e.t2).toString(), e.t4 = Pe.a.utils.formatEther(o).toString(), e.t5 = Pe.a.utils, e.next = 18, a.subjectRaised();
                              case 18:
                                  return e.t6 = e.sent, e.t7 = e.t5.formatEther.call(e.t5, e.t6).toString(), e.next = 22, a.openingTime();
                              case 22:
                                  return e.t8 = e.sent.toString(), e.next = 25, a.closingTime();
                              case 25:
                                  return e.t9 = e.sent.toString(), e.next = 28, a.isWhitelisted(r);
                              case 28:
                                  return e.t10 = e.sent, e.t11 = Pe.a.utils, e.next = 32, a.contributions(r);
                              case 32:
                                  return e.t12 = e.sent, e.t13 = e.t11.formatEther.call(e.t11, e.t12).toString(), e.next = 36, a.claimOpen();
                              case 36:
                                  return e.t14 = e.sent, e.next = 39, a.hasClaimed(r);
                              case 39:
                                  return e.t15 = e.sent, e.abrupt("return", {
                                      status: e.t0,
                                      hardCap: e.t3,
                                      individualAllocation: e.t4,
                                      amountRaised: e.t7,
                                      presaleOpen: e.t8,
                                      presaleClose: e.t9,
                                      eligibility: e.t10,
                                      remainingContribution: "0.0",
                                      amountContributed: e.t13,
                                      claimOpen: e.t14,
                                      hasClaimed: e.t15,
                                      loading: !1
                                  });
                              case 41:
                              case "end":
                                  return e.stop()
                          }
                      }), e)
                  })));
                  return function(t) {
                      return e.apply(this, arguments)
                  }
              }());

          function $t(e) {
              var t = e.getSigner();
              return new Pe.a.Contract(Qt, Gt, t)
          }

          function en(e) {}
          var tn = Object(we.c)({
                  name: "presale",
                  initialState: {
                      loading: !1,
                      status: "",
                      hardCap: "",
                      individualAllocation: "",
                      amountRaised: "",
                      presaleOpen: "",
                      presaleClose: "",
                      eligibility: "",
                      remainingContribution: "",
                      amountContributed: "",
                      claimOpen: "",
                      hasClaimed: ""
                  },
                  reducers: {
                      fetchPresaleSuccess: function(e, t) {
                          Me(e, t.payload)
                      }
                  },
                  extraReducers: function(e) {
                      e.addCase(Zt.pending, (function(e) {
                          e.loading = !0
                      })).addCase(Zt.fulfilled, (function(e, t) {
                          Me(e, t.payload), e.loading = !1
                      })).addCase(Zt.rejected, (function(e, t) {
                          t.error;
                          e.loading = !1
                      })).addCase(Xt.fulfilled, (function(e, t) {
                          Me(e, t.payload)
                      }))
                  }
              }),
              nn = tn.reducer,
              rn = (tn.actions.fetchPresaleSuccess, Object(ve.a)((function(e) {
                  return e.presale
              }), (function(e) {
                  return e
              })), function(e) {
                  var t = e.children,
                      n = e.title,
                      r = e.info,
                      a = e.logo;
                  return Object(O.jsxs)(tt, {
                      minWidth: 350,
                      minHeight: 243,
                      maxWidth: 350,
                      children: [a && Object(O.jsx)("div", {
                          style: {
                              position: "absolute",
                              left: "25px",
                              top: "100px",
                              bottom: "0",
                              right: "25px",
                              opacity: "0.03",
                              pointerEvents: "none"
                          },
                          children: Object(O.jsx)(M.a, {
                              animation: Z,
                              children: Object(O.jsx)("img", {
                                  width: "300px",
                                  src: oe
                              })
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 5,
                          children: Object(O.jsxs)(M.d, {
                              fontSize: "2xl",
                              fontWeight: "bold",
                              color: "title",
                              children: [n, r && Object(O.jsx)($e.a, {
                                  label: r,
                                  bg: "tooltipBackground",
                                  children: Object(O.jsx)(E.a, {
                                      w: "5",
                                      h: "5",
                                      ml: 2,
                                      mb: 1
                                  })
                              })]
                          })
                      }), t]
                  })
              }),
              an = function() {
                  var e = D().connected,
                      t = Object(p.useState)(""),
                      n = Object(l.a)(t, 2),
                      r = n[0],
                      a = n[1],
                      i = Object(o.c)((function(e) {
                          return e.presale.status
                      })),
                      c = Object(o.c)((function(e) {
                          return e.presale.hardCap
                      })),
                      s = Object(o.c)((function(e) {
                          return e.presale.individualAllocation
                      })),
                      d = Object(o.c)((function(e) {
                          return e.presale.amountRaised
                      })),
                      u = Object(o.c)((function(e) {
                          return e.presale.presaleOpen
                      })),
                      b = Object(o.c)((function(e) {
                          return e.presale.presaleClose
                      })),
                      j = Object(o.c)((function(e) {
                          return e.presale.eligibility
                      })),
                      h = Object(o.c)((function(e) {
                          return e.presale.remainingContribution
                      })),
                      x = Object(o.c)((function(e) {
                          return e.presale.amountContributed
                      }));
                  Object(p.useEffect)((function() {
                      setTimeout((function() {
                          return a(new Date)
                      }), 1e3)
                  }), [r]);
                  var f = new Date(0);
                  f.setUTCSeconds(u || 0);
                  var m = new Date(0);
                  return m.setUTCSeconds(b || 0), Object(O.jsxs)(rn, {
                      title: "Whitelist Presale",
                      logo: "true",
                      children: [Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Presale Status"
                              }), "" !== i ? Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  paddingLeft: "10px",
                                  paddingRight: "10px",
                                  borderRadius: "10px",
                                  background: i ? d < c ? "dataBackgroundPositive" : "dataBackgroundNegative" : f > new Date ? "dataBackgroundNeutral" : "dataBackgroundNegative",
                                  color: "dataBackground",
                                  children: i ? d < c ? "Open" : "Sold Out" : f > new Date ? "Upcoming" : "Finished"
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "100px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 5,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Time Remaining"
                              }), "" !== b ? Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  paddingLeft: "10px",
                                  paddingRight: "10px",
                                  borderRadius: "10px",
                                  background: i ? "dataBackgroundPositive" : f > new Date ? "dataBackgroundNeutral" : "dataBackgroundNegative",
                                  color: "dataBackground",
                                  children: m - r < 0 ? "Finished" : f > new Date ? "Not Started" : Math.floor((m - r) / 864e5).toLocaleString() + "d " + Math.floor((m - r) / 36e5 % 24).toLocaleString() + "h " + Math.floor((m - r) / 6e4 % 60).toLocaleString() + "m " + Math.floor((m - r) / 1e3 % 60).toLocaleString() + "s"
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "100px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Hard Cap"
                              }), "" !== c ? Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "data",
                                  children: [Fe(c, 3), " BNB"]
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "100px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 5,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Individual Allocation"
                              }), "" !== s ? Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "data",
                                  children: [Fe(s, 3), " BNB"]
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "100px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 5,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Funds Raised"
                              }), "" !== d ? Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "data",
                                  children: [Fe(d, 3), " BNB"]
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "100px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Presale Open"
                              }), "" !== b ? Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "data",
                                  children: f.toLocaleString()
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "100px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 5,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Presale Close"
                              }), "" !== b ? Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "data",
                                  children: m.toLocaleString()
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "100px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 5,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Contribution Status"
                              }), e && "" !== j ? Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  paddingLeft: "10px",
                                  paddingRight: "10px",
                                  borderRadius: "10px",
                                  background: j ? "dataBackgroundPositive" : "dataBackgroundNegative",
                                  color: "dataBackground",
                                  children: j ? "Whitelisted" : "Not Whitelisted"
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "100px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Remaining Contribution"
                              }), e && "" !== h ? Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "data",
                                  children: j ? Fe(h, 3) + " BNB" : "0.0 BNB"
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "100px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Amount Contributed"
                              }), e && "" !== x ? Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "data",
                                  children: [Fe(x, 3), " BNB"]
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "100px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Claimable Amount"
                              }), e && "" !== x ? Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "data",
                                  children: [Fe(416666666666667 * x / 1e8, 3), " SOLAR"]
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "100px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      })]
                  })
              },
              on = function() {
                  var e = Object(o.b)(),
                      t = D(),
                      n = t.connected,
                      r = t.chainID,
                      a = t.address,
                      i = t.provider,
                      c = Object(p.useState)(""),
                      d = Object(l.a)(c, 2),
                      u = d[0],
                      j = d[1],
                      h = Object(o.c)((function(e) {
                          return e.presale.status
                      })),
                      x = Object(o.c)((function(e) {
                          return e.account.walletBalance
                      })),
                      f = Object(o.c)((function(e) {
                          return e.presale.remainingContribution
                      })),
                      m = Object(o.c)((function(e) {
                          return e.presale.presaleOpen
                      })),
                      g = function() {
                          var t = Object(s.a)(b.a.mark((function t() {
                              return b.a.wrap((function(t) {
                                  for (;;) switch (t.prev = t.next) {
                                      case 0:
                                          if (!(isNaN(u) || u <= 0 || "" === u)) {
                                              t.next = 2;
                                              break
                                          }
                                          return t.abrupt("return", e(ze("Please enter a valid amount to contribute!")));
                                      case 2:
                                          if (!(new Date(m) > new Date)) {
                                              t.next = 4;
                                              break
                                          }
                                          return t.abrupt("return", e(ze("Please wait for the presale to open!")));
                                      case 4:
                                          if (!(u > f)) {
                                              t.next = 6;
                                              break
                                          }
                                          return t.abrupt("return", e(ze("You cannot contribute more than your remaining amount!")));
                                      case 6:
                                          return t.next = 8, e(Kt({
                                              networkID: r,
                                              provider: i,
                                              address: a,
                                              value: u
                                          }));
                                      case 8:
                                      case "end":
                                          return t.stop()
                                  }
                              }), t)
                          })));
                          return function() {
                              return t.apply(this, arguments)
                          }
                      }();
                  return Object(O.jsxs)(rn, {
                      title: "Contribute",
                      children: [Object(O.jsx)(M.a, {
                          mb: 5,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Wallet Balance"
                              }), n && "" !== x ? Object(O.jsxs)(M.d, {
                                  fontSize: "md",
                                  color: "data",
                                  children: [Fe(x, 3), " BNB"]
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "100px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), n ? Object(O.jsxs)(O.Fragment, {
                          children: [Object(O.jsx)(M.a, {
                              mb: 5,
                              children: Object(O.jsx)(dt, {
                                  inputValue: u,
                                  setInput: j,
                                  userBalance: x
                              })
                          }), Object(O.jsx)(M.a, {
                              display: "block",
                              flexDirection: "row",
                              justifyContent: "flex-start",
                              alignItems: "stretch",
                              children: Object(O.jsx)(it, {
                                  action: function() {
                                      return g()
                                  },
                                  stateRationalisers: !h,
                                  children: "Contribute"
                              })
                          })]
                      }) : Object(O.jsx)(ct, {})]
                  })
              },
              cn = function() {
                  var e = Object(o.b)(),
                      t = D(),
                      n = t.connected,
                      r = t.chainID,
                      a = t.address,
                      i = t.provider,
                      c = Object(o.c)((function(e) {
                          return e.presale.claimOpen
                      })),
                      l = Object(o.c)((function(e) {
                          return e.presale.hasClaimed
                      })),
                      d = Object(o.c)((function(e) {
                          return e.presale.amountContributed
                      })),
                      u = function() {
                          var t = Object(s.a)(b.a.mark((function t() {
                              return b.a.wrap((function(t) {
                                  for (;;) switch (t.prev = t.next) {
                                      case 0:
                                          if (!(d <= 0)) {
                                              t.next = 2;
                                              break
                                          }
                                          return t.abrupt("return", e(ze("You haven't contributed to the presale!")));
                                      case 2:
                                          if (c) {
                                              t.next = 4;
                                              break
                                          }
                                          return t.abrupt("return", e(ze("You cannot claim whilst the claim is not open!")));
                                      case 4:
                                          if (!l) {
                                              t.next = 6;
                                              break
                                          }
                                          return t.abrupt("return", e(ze("You have already claimed!")));
                                      case 6:
                                          return t.next = 8, e(Jt({
                                              networkID: r,
                                              provider: i,
                                              address: a
                                          }));
                                      case 8:
                                      case "end":
                                          return t.stop()
                                  }
                              }), t)
                          })));
                          return function() {
                              return t.apply(this, arguments)
                          }
                      }();
                  return Object(O.jsxs)(rn, {
                      title: "Claim",
                      children: [Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Claim Status"
                              }), "" !== c ? Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  paddingLeft: "10px",
                                  paddingRight: "10px",
                                  borderRadius: "10px",
                                  background: c ? "dataBackgroundPositive" : "dataBackgroundNegative",
                                  color: "dataBackground",
                                  children: c ? "Open" : "Not Open"
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "100px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 5,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Your Token Status"
                              }), "" !== l ? Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  paddingLeft: "10px",
                                  paddingRight: "10px",
                                  borderRadius: "10px",
                                  background: l || d <= 0 ? "dataBackgroundNegative" : "dataBackgroundPositive",
                                  color: "dataBackground",
                                  children: l ? "Claimed" : d <= 0 ? "No Contribution" : "Not Claimed"
                              }) : Object(O.jsx)(et.a, {
                                  height: "15px",
                                  width: "100px",
                                  startColor: "gray.400",
                                  endColor: "gray.600"
                              })]
                          })
                      }), n ? Object(O.jsx)(M.a, {
                          display: "block",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "stretch",
                          children: Object(O.jsx)(it, {
                              action: function() {
                                  return u()
                              },
                              stateRationalisers: !c,
                              children: "Claim"
                          })
                      }) : Object(O.jsx)(ct, {})]
                  })
              },
              sn = function() {
                  return Object(O.jsxs)(rn, {
                      title: "Solar Farm Token",
                      children: [Object(O.jsx)(M.a, {
                          mt: -6,
                          mb: 5,
                          children: Object(O.jsx)(M.d, {
                              fontSize: "md",
                              color: "subheading",
                              children: "$SOLAR"
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 1,
                          children: Object(O.jsxs)(at, {
                              children: [Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "text",
                                  children: "Liquidity Pairing"
                              }), Object(O.jsx)(M.d, {
                                  fontSize: "md",
                                  color: "data",
                                  children: "SOLAR/BNB"
                              })]
                          })
                      }), Object(O.jsx)(M.a, {
                          mb: 5,
                          children: Object(O.jsx)(M.c, {
                              style: {
                                  textDecoration: "none"
                              },
                              isExternal: !0,
                              href: "https://poocoin.app/tokens/0xca8dab735f511e263eff3d7cc69cc02197ee3d7b",
                              children: Object(O.jsx)(P.a, {
                                  variant: "solid",
                                  size: "md",
                                  bg: "linear-gradient(90deg, rgba(0, 163, 191, 0.65), rgba(150, 100, 170, 0.55))",
                                  borderRadius: "5px",
                                  border: "1px",
                                  borderColor: "blue.300",
                                  textColor: "buttonText",
                                  minWidth: 300,
                                  _hover: {
                                      color: "buttonColorHover"
                                  },
                                  children: "Chart"
                              })
                          })
                      }), Object(O.jsx)(M.a, {
                          children: Object(O.jsx)(M.c, {
                              style: {
                                  textDecoration: "none"
                              },
                              isExternal: !0,
                              href: "https://pancakeswap.finance/swap?outputCurrency=0xcA8DAb735F511E263EFf3D7cc69CC02197ee3D7b",
                              children: Object(O.jsx)(P.a, {
                                  variant: "solid",
                                  size: "md",
                                  bg: "buttonBackground",
                                  borderRadius: "5px",
                                  border: "1px",
                                  borderColor: "buttonBorder",
                                  textColor: "buttonText",
                                  minWidth: 300,
                                  _hover: {
                                      color: "buttonColorHover"
                                  },
                                  children: "Swap"
                              })
                          })
                      })]
                  })
              },
              ln = [V.d, St.a, V.c],
              dn = ["https://github.com/SafuAudit/kyc-certificates/blob/main/SolarFarm_KYC_Certificate.pdf", "https://bscscan.com/address/0xcA8DAb735F511E263EFf3D7cc69CC02197ee3D7b", "https://github.com/Block-Audit-Report/SolarFarmToken"],
              un = function() {
                  return Object(O.jsx)(Tt, {
                      icons: ln,
                      links: dn
                  })
              },
              bn = {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  gap: "20px !important",
                  marginTop: "1rem"
              },
              pn = {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  gap: "20px !important",
                  marginTop: "1rem"
              },
              jn = {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  gap: "20px !important"
              },
              hn = function() {
                  var e = Object(o.b)(),
                      t = D(),
                      n = t.provider,
                      r = t.chainID,
                      a = t.address,
                      i = t.connected,
                      c = Object(pe.useMediaQuery)({
                          query: "(max-width: 748px)"
                      });
                  Object(p.useEffect)((function() {
                      var t = setInterval(function t() {
                          return i || e(Xt({
                              networkID: r,
                              provider: n
                          })), t
                      }(), 1e3);
                      return function() {
                          return clearInterval(t)
                      }
                  }), [e, n, r, a, i]), Object(p.useEffect)((function() {
                      var t = setInterval((function() {
                          i && (e(Ye({
                              networkID: r,
                              address: a,
                              provider: n
                          })), e(Zt({
                              networkID: r,
                              address: a,
                              provider: n
                          })))
                      }), 1e3);
                      return function() {
                          return clearInterval(t)
                      }
                  }), [e, n, r, a, i]);
                  var s = Object(o.c)((function(e) {
                          return e.presale.status
                      })),
                      l = Object(o.c)((function(e) {
                          return e.presale.presaleClose
                      }));
                  return Object(O.jsxs)(O.Fragment, {
                      children: [Object(O.jsx)(un, {}), Object(O.jsxs)("div", {
                          style: c ? pn : bn,
                          children: [Object(O.jsx)(an, {}), Object(O.jsxs)("div", {
                              children: [Object(O.jsx)("div", {
                                  style: jn,
                                  children: !s && new Date >= l ? Object(O.jsx)(sn, {}) : Object(O.jsx)(on, {})
                              }), Object(O.jsx)(cn, {})]
                          })]
                      }), Object(O.jsx)(M.a, {
                          color: "black",
                          fontWeight: "700",
                          pt: 5,
                          children: "Solar Farm Miner 2022. All Rights Reserved."
                      })]
                  })
              },
              xn = {
                  display: "flex",
                  flexFlow: "row wrap",
                  borderRadius: "lg",
                  border: "1px",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "stretch",
                  width: "auto",
                  marginTop: "1rem"
              },
              fn = {
                  display: "flex",
                  flexFlow: "column wrap",
                  borderRadius: "lg",
                  border: "1px",
                  justifyContent: "center",
                  alignItems: "stretch"
              },
              mn = {
                  display: "inline-flex",
                  flexFlow: "row wrap",
                  justifyContent: "center"
              },
              gn = ["View", "Create"],
              yn = function() {
                  var e = Object(o.b)(),
                      t = (Object(pe.useMediaQuery)({
                          query: "(max-width: 760px)"
                      }), D()),
                      n = t.provider,
                      r = t.chainID,
                      a = t.address,
                      i = t.connected,
                      c = Object(p.useState)(0),
                      s = Object(l.a)(c, 2),
                      d = s[0],
                      u = s[1];
                  return Object(p.useEffect)((function() {
                      var t = setInterval(function t() {
                          return i || e(Ve({
                              networkID: r,
                              provider: n
                          })), t
                      }(), 1e3);
                      return function() {
                          return clearInterval(t)
                      }
                  }), [e, n, r, a, i]), Object(p.useEffect)((function() {
                      var t = setInterval((function() {
                          i && e(Ye({
                              networkID: r,
                              address: a,
                              provider: n
                          }))
                      }), 1e3);
                      return function() {
                          return clearInterval(t)
                      }
                  }), [e, n, r, a, i]), Object(O.jsxs)(O.Fragment, {
                      children: [Object(O.jsx)(kt, {
                          tab: d,
                          setTab: u,
                          tabs: gn
                      }), Object(O.jsx)("div", {
                          style: xn,
                          children: Object(O.jsx)("div", {
                              style: fn,
                              children: Object(O.jsx)("div", {
                                  style: mn
                              })
                          })
                      }), Object(O.jsx)(M.a, {
                          color: "black",
                          fontWeight: "700",
                          pt: 5,
                          children: "Solar Farm Miner 2022. All Rights Reserved."
                      })]
                  })
              },
              On = n(327),
              wn = Object(we.a)({
                  reducer: {
                      account: Ze,
                      presale: nn,
                      messages: Be
                  },
                  middleware: function(e) {
                      return e({
                          serializableCheck: !1
                      })
                  }
              }),
              vn = function() {
                  var e = Object(On.a)(),
                      t = Object(o.c)((function(e) {
                          return e.messages
                      }));
                  return window.setInterval((function() {
                      wn.dispatch(Ie())
                  }), 100), t.items.map((function(t) {
                      return e({
                          variant: "left-accent",
                          status: t.status,
                          title: t.title,
                          description: t.text,
                          position: "bottom-right",
                          isClosable: !0
                      })
                  }))
              },
              Cn = {
                  minHeight: "100vh",
                  zIndex: -1,
                  top: "auto",
                  bottom: "0",
                  backgroundAttachment: "fixed",
                  backgroundRepeat: "repeat",
                  backgroundSize: "100%",
                  opacity: 1
              },
              kn = {
                  display: "block",
                  position: "fixed",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: -10,
                  background: "url(".concat(Et, ") no-repeat center center"),
                  backgroundSize: "cover",
                  WebkitBackgroundSize: "cover",
                  MozBackgroundSize: "cover",
                  OBackgroundSize: "cover"
              },
              Sn = {
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center"
              },
              Bn = function() {
                  var e = Object(p.useState)(1),
                      t = Object(l.a)(e, 2),
                      n = t[0],
                      r = t[1];
                  return Object(O.jsxs)(O.Fragment, {
                      children: [Object(O.jsx)("div", {
                          style: kn
                      }), Object(O.jsxs)("div", {
                          style: Cn,
                          children: [Object(O.jsx)(be, {
                              tab: n,
                              setTab: r
                          }), Object(O.jsxs)("div", {
                              style: Sn,
                              children: [0 === n && Object(O.jsx)(ye, {}), 1 === n && Object(O.jsx)(Ut, {}), 2 === n && Object(O.jsx)(hn, {}), 4 === n && Object(O.jsx)(yn, {})]
                          }), Object(O.jsx)(vn, {})]
                      })]
                  })
              },
              Tn = "linear-gradient(90deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55), rgba(0,0,0,0.7), rgba(0,0,0,0.55), rgba(0,0,0,0.55))",
              Rn = "rgb(255,81,65)",
              zn = "rgba(255, 255, 255, 1)",
              Dn = "rgb(151,55,38)",
              In = Object(c.b)({
                  fonts: {
                      heading: "Rubik, sans-serif",
                      body: "Rubik, sans-serif"
                  },
                  colors: {
                      navBackground: Tn,
                      cardBackground: Tn,
                      navBorder: Rn,
                      cardBorder: Rn,
                      inputBackground: "rgba(0, 0, 0, 0.55)",
                      inputBackgroundHover: "rgba(246,81,66,0.45)",
                      inputBorder: Rn,
                      inputText: zn,
                      buttonBackground: "linear-gradient(90deg, rgba(255,50,20,0.75), rgba(253, 136, 53, 0.75))",
                      buttonColorHover: Rn,
                      buttonBorder: "rgb(253,123,94)",
                      buttonText: zn,
                      tooltipBackground: Dn,
                      dividerBackground: Rn,
                      dataBackgroundNegative: "rgba(229, 62, 62, 1)",
                      dataBackgroundNeutral: Dn,
                      dataBackgroundPositive: "rgba(56, 161, 105, 1)",
                      dataBackground: zn,
                      icon: Rn,
                      title: zn,
                      subheading: "rgba(203, 213, 224, 1)",
                      text: zn,
                      data: Rn,
                      supernova: "rgba(66, 153, 225, 1)",
                      cooling: "rgba(56, 161, 105, 1)",
                      hypernova: "rgba(255, 0, 106, 1)",
                      solarflare: "rgba(225, 204, 66, 1)"
                  }
              }),
              Fn = (n(626), function() {
                  return Object(O.jsx)(I, {
                      children: Object(O.jsx)(o.a, {
                          store: wn,
                          children: Object(O.jsx)(i.a, {
                              children: Object(O.jsx)(c.a, {
                                  theme: In,
                                  children: Object(O.jsx)(Bn, {})
                              })
                          })
                      })
                  })
              });
          a.a.render(Object(O.jsx)(Fn, {}), document.getElementById("root"))
      }
  },
  [
      [627, 1, 2]
  ]
]);
