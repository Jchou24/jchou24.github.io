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
    "revision": "0c8ae0d59d9d299e0c4b6905b3b244c3"
  },
  {
    "url": "About/index.html",
    "revision": "95f9c0a82e4297b9b19ade875f94e4c9"
  },
  {
    "url": "archive/index.html",
    "revision": "2afff9274436400510bdb66a6f34484c"
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
    "url": "assets/js/59.667ab5a7.js",
    "revision": "1c2d042075be9198750ddfe09607f446"
  },
  {
    "url": "assets/js/6.70dbf7ec.js",
    "revision": "78362cab70e5ce72a89cbe311359c35f"
  },
  {
    "url": "assets/js/60.db625a81.js",
    "revision": "dad21456be4e799387f7366d4fa4eb44"
  },
  {
    "url": "assets/js/61.0f6223cf.js",
    "revision": "c6f7c30ce9b9ef5b0714987b5ad12320"
  },
  {
    "url": "assets/js/62.75e6684c.js",
    "revision": "ae5028cf037f0a014a861afe1e41f768"
  },
  {
    "url": "assets/js/63.035f8b22.js",
    "revision": "d6a2f84e6cd5cd345b0662b49a64eaf0"
  },
  {
    "url": "assets/js/64.48f21ef5.js",
    "revision": "0692065a9caa25486130f0e07f0fe610"
  },
  {
    "url": "assets/js/65.50ea9e39.js",
    "revision": "2ff42dc7b8f08f2315f621afc3532cc2"
  },
  {
    "url": "assets/js/66.eb456be0.js",
    "revision": "9cc6363e7d067d35ea7ae74f0f780ded"
  },
  {
    "url": "assets/js/67.4d65578f.js",
    "revision": "e74ee5372fc00733857814b46419d185"
  },
  {
    "url": "assets/js/68.ea34669c.js",
    "revision": "44de4a45d8fc45bbfd22024177a4a294"
  },
  {
    "url": "assets/js/69.006b56d0.js",
    "revision": "df788e16895d06f3b2a6c25859d669b6"
  },
  {
    "url": "assets/js/70.e34b288a.js",
    "revision": "e7adfcd6e9827a5e4e296e44ec13b7ee"
  },
  {
    "url": "assets/js/71.5c7bd0ab.js",
    "revision": "500af6687f191a87b2f579118f595bf6"
  },
  {
    "url": "assets/js/72.4a43de99.js",
    "revision": "8faea6d758fa2a521be1c7495e4bce29"
  },
  {
    "url": "assets/js/73.e2b8c66a.js",
    "revision": "1da1513b2cfef6f1d4c42b566e5b5991"
  },
  {
    "url": "assets/js/74.86ab8d47.js",
    "revision": "eb6c9e82545f65d1093a8a46ba2cf2e9"
  },
  {
    "url": "assets/js/75.8a9fcfc3.js",
    "revision": "e54089df564649717c184ae6429abbb2"
  },
  {
    "url": "assets/js/76.ae1b9587.js",
    "revision": "c94d98e8ebf7edbdf35b08273d2d46c0"
  },
  {
    "url": "assets/js/77.77ef553f.js",
    "revision": "5c7003eeded8cd48b30ad084809bf55b"
  },
  {
    "url": "assets/js/78.ffdf021c.js",
    "revision": "18f28f765dfc11d65f637044e1234053"
  },
  {
    "url": "assets/js/79.6ea880c5.js",
    "revision": "4542bf8d6098bda362cee9929fa65ee4"
  },
  {
    "url": "assets/js/80.9caa4350.js",
    "revision": "0ad812c3959735df473d301f679705ed"
  },
  {
    "url": "assets/js/81.548cd297.js",
    "revision": "04cb5ceacee2aa9ac49bab4d94a39f42"
  },
  {
    "url": "assets/js/app.213e62a5.js",
    "revision": "90e026f063ef917dbe3a920fcfb03591"
  },
  {
    "url": "assets/js/layout-BaseLayout.047e5006.js",
    "revision": "1b63c5dfdbcbe52b9a0e7de0e69c6841"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.d9322e3e.js",
    "revision": "be05bc7da963e38f1e7fa2d769a53fe4"
  },
  {
    "url": "assets/js/layout-Layout.74961c5c.js",
    "revision": "47e7ad73c31a4138c2766d1af64a95c1"
  },
  {
    "url": "assets/js/layout-NotFound.08ea7529.js",
    "revision": "ae623e72605d6a202306732f1ea71f39"
  },
  {
    "url": "assets/js/page-01b1365c.4b452508.js",
    "revision": "12494c64295e6328c3da9192c4eca7fb"
  },
  {
    "url": "assets/js/page-03ff99e4.bbf07ad5.js",
    "revision": "5484dff209d933e115768935c868f2de"
  },
  {
    "url": "assets/js/page-0815fe43.7caebbf6.js",
    "revision": "9bf7ad14eb110cad563789803fe5621b"
  },
  {
    "url": "assets/js/page-0994254e.d0be0fd5.js",
    "revision": "ffd9a29a36ca0d7b977a84ab5e06059f"
  },
  {
    "url": "assets/js/page-09cfa20f.b930d015.js",
    "revision": "f3459e8aac200b0a8d9d992217066446"
  },
  {
    "url": "assets/js/page-0bd5cd98.a47055a7.js",
    "revision": "1cf9839b63b1bdeaf9e3f35f8ac146a3"
  },
  {
    "url": "assets/js/page-0ca8b05c.6af3e85a.js",
    "revision": "06cee90565317b037e21d5ca8fa7174e"
  },
  {
    "url": "assets/js/page-130de14f.b440dd59.js",
    "revision": "28997b9605929f442d0cc3cd354c1e1b"
  },
  {
    "url": "assets/js/page-17119ea4.fe0f84bd.js",
    "revision": "3b63194c626ef3664bfd08482b74e0fd"
  },
  {
    "url": "assets/js/page-1efb5c62.e5727fcd.js",
    "revision": "b03fa637e4fcfbdc9c9645a57d799e47"
  },
  {
    "url": "assets/js/page-2ba07fce.50b80314.js",
    "revision": "bc73afc85ed3e08cd62c759b08a4e2c3"
  },
  {
    "url": "assets/js/page-2da25f49.6f6a4825.js",
    "revision": "678bfcfbe789367a3e9ac060e8553a68"
  },
  {
    "url": "assets/js/page-2f77601c.3c4ec7dc.js",
    "revision": "153e41a7560dbdd4634c4bb0fe6393f6"
  },
  {
    "url": "assets/js/page-36058925.26db75fb.js",
    "revision": "7aa0ac7b77f70b59ebbaa0a86e21f3f7"
  },
  {
    "url": "assets/js/page-3721e5cf.e80e4a92.js",
    "revision": "b9116804a40a1de53d7884e5f33fddef"
  },
  {
    "url": "assets/js/page-38e94d3e.327be64c.js",
    "revision": "57468f2556acbcf708532103fd176a9d"
  },
  {
    "url": "assets/js/page-39d006b5.7b8f4a81.js",
    "revision": "e8b58018a050917315ae806fd243cdfa"
  },
  {
    "url": "assets/js/page-3f4ea122.eee994ab.js",
    "revision": "e9cae49706b17a35f67eee0457755963"
  },
  {
    "url": "assets/js/page-4048f79b.e90ca56b.js",
    "revision": "39a2bc58b5cf2e56b699b209d8dbb607"
  },
  {
    "url": "assets/js/page-409d673b.a16ef837.js",
    "revision": "d040ccc57247e90d2af5d91111712365"
  },
  {
    "url": "assets/js/page-42a0ea7c.7d49e934.js",
    "revision": "8038d7733ef799877d0e97551fb0f064"
  },
  {
    "url": "assets/js/page-4773a0fc.80a2c034.js",
    "revision": "d6a96c446494d94b081354b2aa2de904"
  },
  {
    "url": "assets/js/page-47ec31ef.da45d195.js",
    "revision": "1cdcaa8a2f191fe1b71a6051c43126cd"
  },
  {
    "url": "assets/js/page-494b7749.d1b44bd2.js",
    "revision": "9cbdd81b543cfdba60d89f92063851a2"
  },
  {
    "url": "assets/js/page-4e40ef0e.05bb1222.js",
    "revision": "9dd7a38604d808eedf5e5c698fca02ae"
  },
  {
    "url": "assets/js/page-52453899.6818f469.js",
    "revision": "123b0f5b175911fb3dca12bc2bad4fb4"
  },
  {
    "url": "assets/js/page-56c5add8.736489bd.js",
    "revision": "25037f442d89e5a9bb7141f7f57ee26c"
  },
  {
    "url": "assets/js/page-5971d062.b0f5f381.js",
    "revision": "e648e403982af4fe3b58f841fbc7954f"
  },
  {
    "url": "assets/js/page-5c24028f.d20f6a74.js",
    "revision": "0d61d6fe858410899c8dec051f2197a0"
  },
  {
    "url": "assets/js/page-5dade32f.32c202ad.js",
    "revision": "10d691c49e575c93b231095a50d2f772"
  },
  {
    "url": "assets/js/page-62c3f84a.f747a6d0.js",
    "revision": "8a73c8b67ea46cedacf5c33accbf12d6"
  },
  {
    "url": "assets/js/page-631831dc.76daac32.js",
    "revision": "d1567c4cbfaa94c1e8b3d8d4ac7b0a1c"
  },
  {
    "url": "assets/js/page-64c6c3f9.1f3f6509.js",
    "revision": "a51c1600fbc60f4b021fdfbe6e871265"
  },
  {
    "url": "assets/js/page-68a3e126.f11dfefa.js",
    "revision": "ba33a8256d35b7d4fa7484cd4d7c2743"
  },
  {
    "url": "assets/js/page-718e3f13.3bb8cd2a.js",
    "revision": "e0f93ad6254f5a3399071fa64a9458b1"
  },
  {
    "url": "assets/js/page-7961fc62.6a56b727.js",
    "revision": "10d43693dc0505faca7dc046cee7ecb1"
  },
  {
    "url": "assets/js/page-7e22c02f.60bcb8e8.js",
    "revision": "73c266112ebd30aaf904dd5d98598bb6"
  },
  {
    "url": "assets/js/page-9d704b70.e704a9de.js",
    "revision": "814568caf46503d6230f433e341af72e"
  },
  {
    "url": "assets/js/page-a1c83fc6.8ee7f1b3.js",
    "revision": "0f2ecb8191baaf26a334460c71fd7c8f"
  },
  {
    "url": "assets/js/page-b6123e24.2cef958a.js",
    "revision": "329f4ea48fcaacfebe3bdfe604a361b6"
  },
  {
    "url": "assets/js/page-c1e7a5fc.d424eba5.js",
    "revision": "5bf269133361ba94b6242d9352ad5e59"
  },
  {
    "url": "assets/js/page-c41b383a.2df54e97.js",
    "revision": "24dd47f3dd1efd7bd8af07775a1617fa"
  },
  {
    "url": "assets/js/page-cd03364e.76176ddf.js",
    "revision": "8d6f85b09896d16dd9e4710c2d263e3c"
  },
  {
    "url": "assets/js/page-deb70f94.342425d6.js",
    "revision": "baf6291b6b581f66d4bddf68ba39bef7"
  },
  {
    "url": "assets/js/page-e869018c.8a62cfe7.js",
    "revision": "3967ac917dddf62058bf31fcaaae5e1c"
  },
  {
    "url": "assets/js/page-fa2e9ecc.f749f634.js",
    "revision": "80e6c71097e2da4da242de95c3891ed1"
  },
  {
    "url": "assets/js/vendors~flowchart.3068c5ec.js",
    "revision": "9d53c1f98724f326e5c48958136d451e"
  },
  {
    "url": "assets/js/vendors~layout-Layout.f4a3eb28.js",
    "revision": "70e337600473ee62ddad101f2c06b0ba"
  },
  {
    "url": "category/index.html",
    "revision": "62e5285f14d5dcabfcdca3f98ccafe41"
  },
  {
    "url": "Coding/日常筆記/AutoMapper-class繼承後之對應.html",
    "revision": "abbdf2c23c56fe593cd55e7e4df31179"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "bce1e2f720c59ef942bbf4f26f0a492a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "821d9c4d284b3c73a2d0fb723320ad32"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "a863387ad59c42f7dbcebcd10e499966"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "d42f287faa88431ba24ea7d8cbbe14a2"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "1a19c0253ffe19007976756fc828dd5c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "f1136b4e1578208938a7cd634904f55b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/走位.html",
    "revision": "da3e01a3cb87f1c2128ff0e48694c258"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "983b5315bdf5bea8b18488db72107448"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "c70739258ef8fbda21fa10773a0485b0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "c97ba9a9bb4ce8f120732c371a29b659"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "524391b1670eafc00bc4ee46f0d9147f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "20ca69237cb62fc34da6944fb9a5d93b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "8aea4dc0be00ed6d371b1848316fc920"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "afddba1ef94fe3d582e1097debc3b12c"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "9838a777dc0447e52d5264a59f464fd0"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "a339956c1a6e577838ad62e4b9741246"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "2e3bb8a6e7d167878df2a3a67976b6a2"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "d0ea197787b8fd9808e3a235085b8ff1"
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
    "revision": "b742728ffda200f4b21b59f92fb7641e"
  },
  {
    "url": "search/index.html",
    "revision": "5facf45d216c688b6ffad523bb44c0c3"
  },
  {
    "url": "tag/index.html",
    "revision": "626d3023ac40aa93aaebdcfac85ae9d5"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "fff2511d89727e6b5b8f2a1972e2c2f7"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "40c076ecab026d58ffabb18cda203fd4"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "b4876b7764085f97f4458335dd0b7ce7"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "4fbf3b3f1ce0f77ad679561847a0d7b0"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "ddf62a4daffc5e56b192d894c168a1a7"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "1fde82666df2f307bcb2fc43136f0a18"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "67404651462649565e7467fd54a834d8"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "10db7052533e3f01414d28618f811ffa"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "cde449425a352fb91438e9740463e12b"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "e5cf9dfc80fd641915ce1a5828849324"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "3e2c1135f6fa775606a9768545839693"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "1bb022cae2276faf169c3615e124c8ab"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "01970c55f58039e67a0a3a2399bdbe22"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "c736f19dca7fab9a2d75f45cc5f3bda4"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "8d7075a66612a527639ee55ace78d353"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "86203975f3eb2635a5b76f09314a9491"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "d17d69a4b607647f24777dbda074f920"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "1fb0580eee46653026c7af8151526cef"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "47e948658cefcfd90f7401c3c82fdf43"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "f338c20e06b652fe55ddccc50e0c0585"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "f28d6ff7dc9c853415330b4570b9808f"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "d442bd02bf83d9277edde4246d1339fd"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "144596a16e09520efd32c21e3651db1d"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "449103967404e892ca1b8377b9a6f7f0"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "42a8f5a761ee31dcfd1617e24c67c877"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "4889eafa982cdfb1250737a53a987313"
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
