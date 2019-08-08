/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "13e8493d6c7629b1dddf8de5bc5ec435"
  },
  {
    "url": "About/index.html",
    "revision": "3f172a968bbc3807c15d2994a0f82e28"
  },
  {
    "url": "archive/index.html",
    "revision": "554a18ee20e27034ce3ab06e4be3846b"
  },
  {
    "url": "assets/css/0.styles.7f440281.css",
    "revision": "2c6a072aa6da1a182a66f2ae7925c014"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.1ba8a24a.woff2",
    "revision": "1ba8a24a34177c2ffb565c9215073d79"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.6e83a9fb.woff",
    "revision": "6e83a9fb848f6ed110947bbea540160e"
  },
  {
    "url": "assets/fonts/KaTeX_AMS-Regular.ca857b15.ttf",
    "revision": "ca857b159d215139f84ec5406486b5dc"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.2c8faa1b.ttf",
    "revision": "2c8faa1b5f83e4062290d6f1f48feeef"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.9e74aa81.woff2",
    "revision": "9e74aa81afcd2a2c51e6fdda41905bbd"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Bold.c0985438.woff",
    "revision": "c09854387bea3260d7c3eae73dc9d01c"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.31f25d65.woff2",
    "revision": "31f25d65c5a444b82edbd416cecf1c24"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.35974d12.woff",
    "revision": "35974d12700c7250a51804f82845dc16"
  },
  {
    "url": "assets/fonts/KaTeX_Caligraphic-Regular.52a6a165.ttf",
    "revision": "52a6a1658f19627bacf35b495b60891c"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.34c03657.woff",
    "revision": "34c0365729037176f5f2a662f5ba0f5c"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.34c1d184.ttf",
    "revision": "34c1d184d4ab02f85c035ed9fc25caa7"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Bold.71620e6a.woff2",
    "revision": "71620e6ae5f7675d278fa891e0653b5b"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.b48160ea.woff",
    "revision": "b48160eab3a0afe79f8102a504f31bb8"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.bae342e8.woff2",
    "revision": "bae342e85347989ffe3407d5d286abc0"
  },
  {
    "url": "assets/fonts/KaTeX_Fraktur-Regular.f6780ff5.ttf",
    "revision": "f6780ff593f7ba72754d7e57dc31f7d9"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.6a754845.woff",
    "revision": "6a754845184d0bbadc833d7938d4df66"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.9e629571.ttf",
    "revision": "9e6295711d9a28d1991bc02b2ba6a8c6"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Bold.b5549071.woff2",
    "revision": "b5549071a4cf728bf88d49f042fc7313"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.2cefb96e.woff2",
    "revision": "2cefb96e245f6175b4ef2f2ca0db06c1"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.3df52c58.ttf",
    "revision": "3df52c586302de43bd5ca95182fb1315"
  },
  {
    "url": "assets/fonts/KaTeX_Main-BoldItalic.ff75463a.woff",
    "revision": "ff75463a7fa586585fd3586e79000d36"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.9485af58.ttf",
    "revision": "9485af58d5ca94fbb6bc0378860a9b72"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.d2f17a9e.woff",
    "revision": "d2f17a9e3f2a368e28042f28f8988a03"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Italic.d9153c94.woff2",
    "revision": "d9153c94a9b598eefe0e4179c9e97205"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.28a2d0a5.woff",
    "revision": "28a2d0a50e53991263c83f5bb3c8205c"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.bce47876.ttf",
    "revision": "bce47876efef2be1f02bfe02a2b2ed29"
  },
  {
    "url": "assets/fonts/KaTeX_Main-Regular.ddb93dd1.woff2",
    "revision": "ddb93dd102489fb45c99d6712fdb5f25"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.8c96bb55.woff2",
    "revision": "8c96bb5502e4d11c51cc9f3eb062f3d7"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.91370c15.ttf",
    "revision": "91370c15e6c8c636f86c01838fa7f654"
  },
  {
    "url": "assets/fonts/KaTeX_Math-BoldItalic.b4a5e15f.woff",
    "revision": "b4a5e15f65b5afbe788cc687aa6af3bc"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.2342417f.woff",
    "revision": "2342417fbf7f6ae5910a34ea90e844c6"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.efef72b8.woff2",
    "revision": "efef72b8e4ff4083ca1e91a6b4ec2363"
  },
  {
    "url": "assets/fonts/KaTeX_Math-Italic.f47a61c8.ttf",
    "revision": "f47a61c859ea90d15547822f4836dafb"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.000b9ed0.ttf",
    "revision": "000b9ed03c3867fd218ec15822564ec4"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.5d4480bd.woff",
    "revision": "5d4480bd287fed8d9f52f15f9e891cf4"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Bold.b2acfbf0.woff2",
    "revision": "b2acfbf0bcb210d7dcacd3a625691c29"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.255f1668.woff2",
    "revision": "255f1668bf91741143ff907abfe87350"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.40d559e3.ttf",
    "revision": "40d559e307d2766ad67e717b07c6bfe8"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Italic.d5333e23.woff",
    "revision": "d5333e23e0fb885dcce91f8d39dcfbe1"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.7ba33ebb.ttf",
    "revision": "7ba33ebb57e020a4948ef3da67a961fe"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.8de2dee1.woff2",
    "revision": "8de2dee189a5cb86d2c63ec286594f63"
  },
  {
    "url": "assets/fonts/KaTeX_SansSerif-Regular.a8506f1b.woff",
    "revision": "a8506f1b1fb95010d2e46a2ce5edc453"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.46b2d8cf.woff",
    "revision": "46b2d8cfe4fd0021561890cf34a99e86"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.4b4feb45.woff2",
    "revision": "4b4feb459569bc556025e27940c5a43c"
  },
  {
    "url": "assets/fonts/KaTeX_Script-Regular.b3881cee.ttf",
    "revision": "b3881ceea63499db39bfebca1edd0df7"
  },
  {
    "url": "assets/fonts/KaTeX_Size1-Regular.686db35f.ttf",
    "revision": "686db35f856dc151987748d946b577f2"
  },
  {
    "url": "assets/fonts/KaTeX_Size2-Regular.3f883bff.ttf",
    "revision": "3f883bff6b52775d6f96de5cc9d50052"
  },
  {
    "url": "assets/fonts/KaTeX_Size4-Regular.4c04d946.ttf",
    "revision": "4c04d946e924fcb72074640737e05f5c"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.a5ed4d0a.ttf",
    "revision": "a5ed4d0a38f0c027bcc49c972e41330b"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.cabbcf15.woff2",
    "revision": "cabbcf159469220758fdde285fdb9a37"
  },
  {
    "url": "assets/fonts/KaTeX_Typewriter-Regular.e52da442.woff",
    "revision": "e52da4424fa372f4ff884569d461369d"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.012cf6a1.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.570eb838.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.a37b0c01.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.e79bfd88.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
  },
  {
    "url": "assets/img/blue_wash_wall_4.ee64ddfc.png",
    "revision": "ee64ddfcb1b52dddaa795ed34bebabfb"
  },
  {
    "url": "assets/img/crossword.b5c5ab66.png",
    "revision": "b5c5ab66d8331513696fe3ec992187a0"
  },
  {
    "url": "assets/img/dust_scratches.608ab5fe.png",
    "revision": "608ab5fe4a45e2ac93febd3416b260f0"
  },
  {
    "url": "assets/img/pika.264710a4.png",
    "revision": "264710a4e7826b35df2e562895c44ee2"
  },
  {
    "url": "assets/img/pika.9f1eafdd.gif",
    "revision": "9f1eafdd20b87ca874da588867df2497"
  },
  {
    "url": "assets/img/whitey.db698606.png",
    "revision": "db698606ff0094844cc0d3b5e99b807a"
  },
  {
    "url": "assets/img/xv_light_blue.9693a7e2.png",
    "revision": "9693a7e2dbef5afa0fe66488e8f51896"
  },
  {
    "url": "assets/img/xv.30148b7c.png",
    "revision": "30148b7c22dc86276789e064c85bec9c"
  },
  {
    "url": "assets/js/1.cac99831.js",
    "revision": "96fcbdfc082062cb6ccf6752755cdf69"
  },
  {
    "url": "assets/js/2.12dfdb54.js",
    "revision": "fe6902b8173112fc672293383f254fe5"
  },
  {
    "url": "assets/js/3.5316eeee.js",
    "revision": "00a07ba5dd7444f3fe06ce0260d8ec3a"
  },
  {
    "url": "assets/js/5.19f70e84.js",
    "revision": "fc6d17044acb74c1debab422112068ff"
  },
  {
    "url": "assets/js/58.3a1a57e8.js",
    "revision": "37e3c55e866973aefed659215237f2a7"
  },
  {
    "url": "assets/js/59.77ae4846.js",
    "revision": "8a8adf99ad4d699ea3cf05c870a64efa"
  },
  {
    "url": "assets/js/6.913d2710.js",
    "revision": "93be20674e969158b88619c333b8db04"
  },
  {
    "url": "assets/js/60.2f6fc978.js",
    "revision": "26c8243cbedcb25116e3412d33c8582c"
  },
  {
    "url": "assets/js/61.39b04e97.js",
    "revision": "289f53a7cbee9d69fed8be96bdbe783a"
  },
  {
    "url": "assets/js/62.cea716f9.js",
    "revision": "ba201ccdb626e92cf895a93534b85f2d"
  },
  {
    "url": "assets/js/63.c3cbbdc3.js",
    "revision": "bc334b0a502cbaee6641787c70aee8b0"
  },
  {
    "url": "assets/js/64.ce877ad1.js",
    "revision": "7c5c0655ebec57591ac9db7a8c619fd8"
  },
  {
    "url": "assets/js/65.804b46e5.js",
    "revision": "051eadebedb859b1b7f7a48f4a9f22de"
  },
  {
    "url": "assets/js/66.d181ad2a.js",
    "revision": "c4a183168942a31d7d6baffc5e93b53e"
  },
  {
    "url": "assets/js/67.6b858cfa.js",
    "revision": "b0b0c27ee7ef3518dd8dcc4e2517817b"
  },
  {
    "url": "assets/js/68.935a321b.js",
    "revision": "94448030bce02300a749c3754c2ab5a4"
  },
  {
    "url": "assets/js/69.00ad0c0b.js",
    "revision": "a43d5a4b0dabcc262d11af981b970fbb"
  },
  {
    "url": "assets/js/70.05b9f69d.js",
    "revision": "6876eb72b8de4dbaa55f2b5dc7f02049"
  },
  {
    "url": "assets/js/71.9d69ffee.js",
    "revision": "3d7738047cf97cd813e026b20f3ccd1a"
  },
  {
    "url": "assets/js/72.d2060006.js",
    "revision": "023ad2966ba0f7aa9c72c347d8f9bd23"
  },
  {
    "url": "assets/js/73.e833c018.js",
    "revision": "2f7f7a835a7fa89ff4fc98d67e81e353"
  },
  {
    "url": "assets/js/74.8478248a.js",
    "revision": "ca6ff6db8ef2c1f8a57063670d5b0b35"
  },
  {
    "url": "assets/js/75.0ad6120b.js",
    "revision": "3431a8cf9dd7a148442ce93ab1908458"
  },
  {
    "url": "assets/js/76.115469a9.js",
    "revision": "af161304c1cb71eb934d428844ac9c25"
  },
  {
    "url": "assets/js/77.187870d5.js",
    "revision": "6513b2d4d430a932745f6863f5cb0444"
  },
  {
    "url": "assets/js/78.e5e768b6.js",
    "revision": "ef32c61569dd36edc2ce3026b8ad0588"
  },
  {
    "url": "assets/js/79.ba49ea72.js",
    "revision": "938a25ad399aa33451ef03b521721d89"
  },
  {
    "url": "assets/js/80.d8d90d33.js",
    "revision": "27c7f21c3a9da274cde2a66606ca8995"
  },
  {
    "url": "assets/js/app.e38999ba.js",
    "revision": "2b96f73f3f48c21f16820dc79b71c7e7"
  },
  {
    "url": "assets/js/layout-BaseLayout.047e5006.js",
    "revision": "1b63c5dfdbcbe52b9a0e7de0e69c6841"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.efb17be2.js",
    "revision": "0586daa3c5a7d252ea5e07fec4c340a3"
  },
  {
    "url": "assets/js/layout-Layout.9cf6a1a6.js",
    "revision": "6ae1be44e0a16ffddad180a00c1c1138"
  },
  {
    "url": "assets/js/layout-NotFound.bf2ff03a.js",
    "revision": "96281a0d262f9931be5db88cf2dcf93e"
  },
  {
    "url": "assets/js/page-01b1365c.fb96d4b0.js",
    "revision": "c9fa477e35dc90b669ff9bbf4b32d4b2"
  },
  {
    "url": "assets/js/page-03ff99e4.8f055a00.js",
    "revision": "f5c6f3920fdf1be79395ed67ecec6da6"
  },
  {
    "url": "assets/js/page-0815fe43.777342ca.js",
    "revision": "0ba0a7c5d21a6fb86c2d08200395ac61"
  },
  {
    "url": "assets/js/page-0994254e.2c11d981.js",
    "revision": "0c940af4084dd43d38ddfe3df9e43ae6"
  },
  {
    "url": "assets/js/page-09cfa20f.77d31497.js",
    "revision": "752553f6554b3e7b3a665345ebf7e11f"
  },
  {
    "url": "assets/js/page-0bd5cd98.17ab6240.js",
    "revision": "b2cc719136ae8f4d5ed8822be6a80510"
  },
  {
    "url": "assets/js/page-0ca8b05c.6af3e85a.js",
    "revision": "06cee90565317b037e21d5ca8fa7174e"
  },
  {
    "url": "assets/js/page-130de14f.d7488ba7.js",
    "revision": "f213e0f136cca0e3e1d97af8c263dc9f"
  },
  {
    "url": "assets/js/page-17119ea4.5275d666.js",
    "revision": "e249b4b318e07415b850868413ffd5a4"
  },
  {
    "url": "assets/js/page-1efb5c62.ad49c17a.js",
    "revision": "fb3e909a6ccfc6ae4275f63c0aeff4b4"
  },
  {
    "url": "assets/js/page-2ba07fce.ef182faf.js",
    "revision": "5322337d4f27b3318875587031e91850"
  },
  {
    "url": "assets/js/page-2da25f49.f17b70bb.js",
    "revision": "1c7089410a881d0902ba2f2a79318374"
  },
  {
    "url": "assets/js/page-2f77601c.6ca61979.js",
    "revision": "ec446bccc01076c209eb9567daf6c160"
  },
  {
    "url": "assets/js/page-36058925.aa245ca3.js",
    "revision": "cf197cf50cb6fbc5a7fe0067539345cc"
  },
  {
    "url": "assets/js/page-3721e5cf.d7b28c84.js",
    "revision": "f86fabcd23c025be6a7cb5808b97006e"
  },
  {
    "url": "assets/js/page-38e94d3e.909c93cb.js",
    "revision": "d3fa40db83c7d30c02c1cd156fec1fd2"
  },
  {
    "url": "assets/js/page-39d006b5.7b8f4a81.js",
    "revision": "e8b58018a050917315ae806fd243cdfa"
  },
  {
    "url": "assets/js/page-4048f79b.e2cd9fa7.js",
    "revision": "9a4463ab507dae5a0792086ae3a5c46c"
  },
  {
    "url": "assets/js/page-409d673b.f5a6d1b2.js",
    "revision": "e7d1597833f8c3d7fccd675d6b4ae7e6"
  },
  {
    "url": "assets/js/page-42a0ea7c.17633c9d.js",
    "revision": "fb27d2de4cc92c8d563c8fdef705ff99"
  },
  {
    "url": "assets/js/page-4773a0fc.e7dac64a.js",
    "revision": "3319607e08995761b896c8cdd432721b"
  },
  {
    "url": "assets/js/page-47ec31ef.5f5ad572.js",
    "revision": "9e7c2abaa49528e21f3ec9d9b9d22705"
  },
  {
    "url": "assets/js/page-494b7749.0e7e62ae.js",
    "revision": "bc652645309ee0456b94148cc8b8ccec"
  },
  {
    "url": "assets/js/page-4e40ef0e.4270f5ff.js",
    "revision": "e266d848040fc1e77c1c64b92030c61d"
  },
  {
    "url": "assets/js/page-52453899.78cb34cb.js",
    "revision": "c2cc0cbe1ac04d6a272239a177ce3f2c"
  },
  {
    "url": "assets/js/page-56c5add8.de4fb4d1.js",
    "revision": "e2b209c8a7a904a3aab8252053449bdc"
  },
  {
    "url": "assets/js/page-5971d062.47289b31.js",
    "revision": "22e5f1828977e0dfaf9285a3f03b7a02"
  },
  {
    "url": "assets/js/page-5c24028f.8342019d.js",
    "revision": "b1a6023462f09c3fed50e025a027c51d"
  },
  {
    "url": "assets/js/page-5dade32f.a89b29d7.js",
    "revision": "9ca000b8936226fc11cf11fe8c9495b5"
  },
  {
    "url": "assets/js/page-62c3f84a.6f0f5e7d.js",
    "revision": "5060264a2a92c7199e46ccb646314511"
  },
  {
    "url": "assets/js/page-631831dc.3c8161a3.js",
    "revision": "90daceb392fa606633e355665a06a305"
  },
  {
    "url": "assets/js/page-64c6c3f9.1c9befb5.js",
    "revision": "c68ef68db155736182f9e18b4bf2084a"
  },
  {
    "url": "assets/js/page-68a3e126.f3e452d7.js",
    "revision": "092c7679261897a47180b8f62138ea82"
  },
  {
    "url": "assets/js/page-718e3f13.b5f7b84c.js",
    "revision": "d65446328ee29545dc0c0ff5bd38e358"
  },
  {
    "url": "assets/js/page-7961fc62.6acd61a2.js",
    "revision": "04dd943f4031d0b2d1b44756391b32a3"
  },
  {
    "url": "assets/js/page-7e22c02f.3a732824.js",
    "revision": "dc7403bd0ddd822788774ef9f8b01e15"
  },
  {
    "url": "assets/js/page-9d704b70.011b1b4d.js",
    "revision": "3370b8f4c30afac6c0636a7d1f5badd4"
  },
  {
    "url": "assets/js/page-a1c83fc6.ec68ffb9.js",
    "revision": "b739bc672a29600fefcdb9507531a0f1"
  },
  {
    "url": "assets/js/page-b6123e24.f0210c83.js",
    "revision": "69da2c0a5870c06fdb3b1a0c4214fe70"
  },
  {
    "url": "assets/js/page-c1e7a5fc.2ad2ad05.js",
    "revision": "56c29eda5143ba64d556fa373ffce83b"
  },
  {
    "url": "assets/js/page-c41b383a.dddc88c2.js",
    "revision": "7fb06ad31f34a94414e7efdd0e73fd41"
  },
  {
    "url": "assets/js/page-cd03364e.36cb1578.js",
    "revision": "381f28746676fdbf654a59f18dc6f680"
  },
  {
    "url": "assets/js/page-deb70f94.67caa46b.js",
    "revision": "472cad63368e030b6fb0c4dca18fde11"
  },
  {
    "url": "assets/js/page-e869018c.1729b790.js",
    "revision": "17bf8c447e2a8ea602d4c542f9c9bfb3"
  },
  {
    "url": "assets/js/page-fa2e9ecc.824eb385.js",
    "revision": "cd552e52a3bb2bc4a62c045382e520af"
  },
  {
    "url": "assets/js/vendors~flowchart.d3bcf440.js",
    "revision": "167905303e8a95c7b76e86bfdd416208"
  },
  {
    "url": "assets/js/vendors~layout-Layout.d57795e7.js",
    "revision": "0249356bb28357619c3dae43a51caff9"
  },
  {
    "url": "category/index.html",
    "revision": "989347ccf7081b660299b79e4d327ed0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "2f0bebe26733a7c68e155fd90893bbc5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "22fe2fbe6381d173ea0169ebb6440715"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "528c5f3a6248324127c7ec14d1ffc639"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "12acb091e0936345235ebaadea51bae4"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "1c3232bf3ecf6e49dcd8769a6fb9bf62"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "3e9d9a6939b391de386703321bf58e96"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/走位.html",
    "revision": "aa235c77f1808efb270425ecf991da1a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "276a3a40fd4033c993474fda6d2bfa6b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "ae9daf52084c4fbafcddefa125d0a2c5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "87239065983fcee10146e98e0f0343cd"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "ca80d816682cb71395c35aa0c225ece1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "3656415dfbc5883f7707ef684194e3f9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "922c954ff68481846c9effa59acff6cc"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "681d15a2498f7bf9f95fe4afd7fc831c"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "f95b61263b3a233c2bccf2dafc2fbf4c"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "fd9f401ebdc7312728f705cca0b5be93"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "d0805a15611c375d022903f701bf8647"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "24b76228385bfac87886bf6012a74cf9"
  },
  {
    "url": "icon.png",
    "revision": "bc278be9745f5fec074429e789a0b788"
  },
  {
    "url": "img/firebase/1.png",
    "revision": "d00d9e42c9fe6dbb66a96fca6d576a4b"
  },
  {
    "url": "img/firebase/2.png",
    "revision": "58100b6accea1cf2ae329108aa1cd24d"
  },
  {
    "url": "img/firebase/3.png",
    "revision": "5ff0dbb7891ca608e94a45c93adc2301"
  },
  {
    "url": "img/firebase/4.png",
    "revision": "ea9bbb03f7281540e7ffe0f57de84c1f"
  },
  {
    "url": "img/firebase/5.png",
    "revision": "baac21751249cb11f399a1cbdb68c444"
  },
  {
    "url": "img/firebase/6.png",
    "revision": "3c0ff0ffdb8502c5b3648bbd6c944aa5"
  },
  {
    "url": "img/firebase/7.png",
    "revision": "6dcd151419be9665e29a023f356a135a"
  },
  {
    "url": "index.html",
    "revision": "4e189a796814e705e02f2bf5861633c6"
  },
  {
    "url": "search/index.html",
    "revision": "6b203464f4607e7952bb8f181c250efa"
  },
  {
    "url": "tag/index.html",
    "revision": "b25acce5d4e7dbe9ae1419234995d54b"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "9afd490baf936a618009ab90bfdf54cc"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "3df21703273825c4221fde3464e8cbd4"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "997cdde689b5824e0ee7cddb105e5d8d"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "b188a14583fb7f53dd696a5fd8ba3507"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "141c7b9d2fd862c478bb34cbc1293c3a"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "b8690087e53b839de4db90c4ed048afd"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "ef551745cf8d80cf4a0be014cccb3bed"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "fb238e6130741998e72e62680c74b101"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "ac785b3d87befa75827775cf205cc01e"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "bdf8be49601950515bba6dfad2625052"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "774427cbee29f17a4dcfde2fc7f51c49"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "0ffe88ed46aff44616584abbc7f8e2b3"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "942faebb2a321318af013c59f777bddd"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "6cb290e759f5c85a71e4b6f63b477784"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "8a1c2040137e4f250c9e6106fa5dfd82"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "68b225dd72667e3d46cbad6db0c4a086"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "c645dab0919423d06c2af8181f87a4e1"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "a70decd8defbfe3adc571f0636100d42"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "83bc4c5915457f217a49d8f3de108eb0"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "58f1c31695665be745f18c3b7e74c44f"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "c6b430df6cd2f8fca955a02f4d24819c"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "f084fe386611e6403e50902c51240c7e"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "c854288ae5a2477d532b1f6845b0fd6d"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "d3abc172db3180a3e18ebcfb93d86b04"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "50c1a1c61a890bfb4048869401591851"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "24f0abb0e82eb464079d7239ac620b59"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
