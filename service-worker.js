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
    "revision": "03163f4439b956accfe1b5586e733d9a"
  },
  {
    "url": "About/index.html",
    "revision": "a12ebe728f8c26c406685a1512daccc3"
  },
  {
    "url": "archive/index.html",
    "revision": "7c42bd2d60dfe5a8e530367804530e4b"
  },
  {
    "url": "assets/css/0.styles.14f1301c.css",
    "revision": "3393411b26a4e108726119c3c6843856"
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
    "url": "assets/js/6.c4dec715.js",
    "revision": "78362cab70e5ce72a89cbe311359c35f"
  },
  {
    "url": "assets/js/60.feade4f5.js",
    "revision": "c9e6ab0153191b622260819996a884cc"
  },
  {
    "url": "assets/js/61.0f6223cf.js",
    "revision": "c6f7c30ce9b9ef5b0714987b5ad12320"
  },
  {
    "url": "assets/js/62.8d0a2dd1.js",
    "revision": "ae5028cf037f0a014a861afe1e41f768"
  },
  {
    "url": "assets/js/63.3f9efc8c.js",
    "revision": "d6a2f84e6cd5cd345b0662b49a64eaf0"
  },
  {
    "url": "assets/js/64.e3d0e2c1.js",
    "revision": "0692065a9caa25486130f0e07f0fe610"
  },
  {
    "url": "assets/js/65.79ddf7c6.js",
    "revision": "2ff42dc7b8f08f2315f621afc3532cc2"
  },
  {
    "url": "assets/js/66.f3ea642d.js",
    "revision": "9cc6363e7d067d35ea7ae74f0f780ded"
  },
  {
    "url": "assets/js/67.6a7c4c01.js",
    "revision": "e74ee5372fc00733857814b46419d185"
  },
  {
    "url": "assets/js/68.ddbf416f.js",
    "revision": "e9e3086074ec56ee424a36dfd1f200bd"
  },
  {
    "url": "assets/js/69.476a99e5.js",
    "revision": "df788e16895d06f3b2a6c25859d669b6"
  },
  {
    "url": "assets/js/70.ac59b800.js",
    "revision": "e7adfcd6e9827a5e4e296e44ec13b7ee"
  },
  {
    "url": "assets/js/71.fe85e94f.js",
    "revision": "500af6687f191a87b2f579118f595bf6"
  },
  {
    "url": "assets/js/72.4a43de99.js",
    "revision": "8faea6d758fa2a521be1c7495e4bce29"
  },
  {
    "url": "assets/js/73.aacb610a.js",
    "revision": "1da1513b2cfef6f1d4c42b566e5b5991"
  },
  {
    "url": "assets/js/74.2e227599.js",
    "revision": "eb6c9e82545f65d1093a8a46ba2cf2e9"
  },
  {
    "url": "assets/js/75.77566125.js",
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
    "url": "assets/js/app.8732d616.js",
    "revision": "c2b3c7f3fd9601c9983986f432f29a2c"
  },
  {
    "url": "assets/js/layout-BaseLayout.047e5006.js",
    "revision": "1b63c5dfdbcbe52b9a0e7de0e69c6841"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.27cadf4e.js",
    "revision": "be05bc7da963e38f1e7fa2d769a53fe4"
  },
  {
    "url": "assets/js/layout-Layout.bb862fde.js",
    "revision": "300e3f2a0e3baf2cadedd402755ac120"
  },
  {
    "url": "assets/js/layout-NotFound.be789d42.js",
    "revision": "ae623e72605d6a202306732f1ea71f39"
  },
  {
    "url": "assets/js/page-01b1365c.3853e9bc.js",
    "revision": "12494c64295e6328c3da9192c4eca7fb"
  },
  {
    "url": "assets/js/page-03ff99e4.301f6bbb.js",
    "revision": "5484dff209d933e115768935c868f2de"
  },
  {
    "url": "assets/js/page-0815fe43.978008e4.js",
    "revision": "c2593d197f6d0ea682b4d231106f1507"
  },
  {
    "url": "assets/js/page-0994254e.6f8de56b.js",
    "revision": "ffd9a29a36ca0d7b977a84ab5e06059f"
  },
  {
    "url": "assets/js/page-09cfa20f.605b1ea2.js",
    "revision": "53a115b13515ff0ad100a05f48631531"
  },
  {
    "url": "assets/js/page-0bd5cd98.3bf92c3a.js",
    "revision": "22e41b404d9b44dba1c12204ec3eeba8"
  },
  {
    "url": "assets/js/page-0ca8b05c.c9a351a5.js",
    "revision": "06cee90565317b037e21d5ca8fa7174e"
  },
  {
    "url": "assets/js/page-130de14f.c5e26def.js",
    "revision": "20fa060e2c7db44db00c363dc1b37d10"
  },
  {
    "url": "assets/js/page-17119ea4.f78351e9.js",
    "revision": "3b63194c626ef3664bfd08482b74e0fd"
  },
  {
    "url": "assets/js/page-1efb5c62.0b5860f3.js",
    "revision": "b03fa637e4fcfbdc9c9645a57d799e47"
  },
  {
    "url": "assets/js/page-2ba07fce.7ef896ef.js",
    "revision": "bc73afc85ed3e08cd62c759b08a4e2c3"
  },
  {
    "url": "assets/js/page-2da25f49.27d7cf4f.js",
    "revision": "9047f3966e9a67552658df165e672fb1"
  },
  {
    "url": "assets/js/page-2f77601c.8ba1b727.js",
    "revision": "153e41a7560dbdd4634c4bb0fe6393f6"
  },
  {
    "url": "assets/js/page-36058925.fe6fd2ad.js",
    "revision": "9c22ecb890f22e0b9be7993c65c975da"
  },
  {
    "url": "assets/js/page-3721e5cf.f49af772.js",
    "revision": "3083b0d1301d2beed447dd808ba9192b"
  },
  {
    "url": "assets/js/page-38e94d3e.8ff79b5b.js",
    "revision": "43e6bdeba3a0ee548595050d18b7d88d"
  },
  {
    "url": "assets/js/page-39d006b5.ca0806cb.js",
    "revision": "e8b58018a050917315ae806fd243cdfa"
  },
  {
    "url": "assets/js/page-3f4ea122.a10457c4.js",
    "revision": "d0297ca39a11412741deba745d4c2944"
  },
  {
    "url": "assets/js/page-4048f79b.36efa0ac.js",
    "revision": "ea311a5e162496a243e76befb47da212"
  },
  {
    "url": "assets/js/page-409d673b.79e821f9.js",
    "revision": "d040ccc57247e90d2af5d91111712365"
  },
  {
    "url": "assets/js/page-42a0ea7c.17c0c502.js",
    "revision": "8038d7733ef799877d0e97551fb0f064"
  },
  {
    "url": "assets/js/page-4773a0fc.800896aa.js",
    "revision": "706df72cf808523990f86a6a82f583a3"
  },
  {
    "url": "assets/js/page-47ec31ef.6d4e32bb.js",
    "revision": "1cdcaa8a2f191fe1b71a6051c43126cd"
  },
  {
    "url": "assets/js/page-494b7749.096262ca.js",
    "revision": "9cbdd81b543cfdba60d89f92063851a2"
  },
  {
    "url": "assets/js/page-4e40ef0e.efcd00a7.js",
    "revision": "9dd7a38604d808eedf5e5c698fca02ae"
  },
  {
    "url": "assets/js/page-52453899.895632fd.js",
    "revision": "95c96d0868906f626a4e76f6ae542e65"
  },
  {
    "url": "assets/js/page-56c5add8.f42c1115.js",
    "revision": "25037f442d89e5a9bb7141f7f57ee26c"
  },
  {
    "url": "assets/js/page-5971d062.f0ff8ca6.js",
    "revision": "9b4a7d291fbf37115411b6d8dbea6377"
  },
  {
    "url": "assets/js/page-5c24028f.a1d1af67.js",
    "revision": "5e87e2347dcde049ff4f153c01948f56"
  },
  {
    "url": "assets/js/page-5dade32f.e0570993.js",
    "revision": "ff32a698ba44698de2abd0465cb43b06"
  },
  {
    "url": "assets/js/page-62c3f84a.fd9c302c.js",
    "revision": "108a06d10d43b535efa75086df4fb6e0"
  },
  {
    "url": "assets/js/page-631831dc.3efad99a.js",
    "revision": "e44ae9f95e6e18d82b880bb951a6cafb"
  },
  {
    "url": "assets/js/page-64c6c3f9.659605fc.js",
    "revision": "962e24ee8b850f38703f7591b69238a7"
  },
  {
    "url": "assets/js/page-68a3e126.7c6fb7ee.js",
    "revision": "844aa050931dfe57c2b55b6a0fb76437"
  },
  {
    "url": "assets/js/page-718e3f13.8567c6ed.js",
    "revision": "febcc51ffa30c3b35afa20dc4f691fd3"
  },
  {
    "url": "assets/js/page-7961fc62.45e845c5.js",
    "revision": "af05d0d59fa3cd44586caf001a72e9e3"
  },
  {
    "url": "assets/js/page-7e22c02f.4a5b3aea.js",
    "revision": "710a68b743803cac36e97f56de67f25a"
  },
  {
    "url": "assets/js/page-9d704b70.7e9ff2cc.js",
    "revision": "e6e7fe7bae9ba1271aeb5f70ec9bd70c"
  },
  {
    "url": "assets/js/page-a1c83fc6.a80e3bd1.js",
    "revision": "136a8379dadff272d6479cfdfe9fa1cc"
  },
  {
    "url": "assets/js/page-b6123e24.592e108a.js",
    "revision": "23d75499de540ec0427771a7233dbd2a"
  },
  {
    "url": "assets/js/page-c1e7a5fc.a9303948.js",
    "revision": "aaf3cd7150074434079534c820493bc5"
  },
  {
    "url": "assets/js/page-c41b383a.41a77eb8.js",
    "revision": "cde84e5c9af97b9f52863dde4c0f7019"
  },
  {
    "url": "assets/js/page-cd03364e.5e6c94ef.js",
    "revision": "8d6f85b09896d16dd9e4710c2d263e3c"
  },
  {
    "url": "assets/js/page-deb70f94.cd3cb5ed.js",
    "revision": "5eceddef1923db2d736fe59ee9f3468f"
  },
  {
    "url": "assets/js/page-e869018c.57431aff.js",
    "revision": "3967ac917dddf62058bf31fcaaae5e1c"
  },
  {
    "url": "assets/js/page-fa2e9ecc.c12f951f.js",
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
    "revision": "50c461c30584479c1ea6406d5577392f"
  },
  {
    "url": "Coding/日常筆記/AutoMapper-class繼承後之對應.html",
    "revision": "58015c81c5e0d56f6118fe9f8b4f0d23"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "51db2f3817a37f1b1a28cab89336fa79"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "fc530afbf68b95fa5ec811c03b0bd479"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "8764f137fb271f6493c9a72cc8071907"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "8a6d4b224f336371b273505e41cbb53b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "36ee4298e3235ccd0200ba76203106ce"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "84e891d73ab195bd5e91188d03f225d0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/走位.html",
    "revision": "bbd01c44a11798f2edf08c33844fbe58"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "2b515d2371f5d0afc15cc27a9d55052a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "1a1367ad863494a1f80c62b5a5289811"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "5cad6cd20d1bd535b0bc4c776a4b509c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "1955fbc15a71938abddcc527a7215dc4"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "e9af9b47ce3257404a2c0567b4dfa723"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "51b04b988b203e2a24b5de87330a839a"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "49483c6f85d5cbfcfd82823631ec35d1"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "db575c7c2baa6084a939bca0a213f91a"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "4940355a3e75cf533b1f5e1783cd53a7"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "7681dd713ba917a16dacca4bded66014"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "aa665591cb230059e9dcca86c3f16aba"
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
    "revision": "0285e37ee53dd66737021ea0d061ce01"
  },
  {
    "url": "search/index.html",
    "revision": "f13f75f6f2e17ffacb4e7fa067f2766f"
  },
  {
    "url": "tag/index.html",
    "revision": "9df77efc505f32ddae9a82604d14e62a"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "7b748a1fd20babc666a818ed68b4378b"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "b1d75e6e81360acacf5509e85f01ffba"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "b40c4e962d48e5e2898541121e4302bb"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "139c49238e0dcfd422642c22a9847a39"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "494b59961661a3dc0bc3e0dffe578083"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "dbae556ef9d21df510a052a692ab6d9a"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "8874f74bd9a96bf4353a93485c0dab03"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "4a3a553486a776e5b2c2f09cd8f065b9"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "8b82925d8e46d94a8a511d9e7837e2e1"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "4bf3fa0a838e31aa475995e2a8b7ca87"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "e991fb6afcc98ef53ddb79277e17bdd5"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "63e1acdfc5cb9285d121c647b1d6c2a8"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "7e1c351fdb1507db7939b19b33616000"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "3ebb94175eebd3b837d6151b7f4b4b74"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "1be3885146510a82e09cd027deaf497b"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "36849cdf567857adf35397612617a38f"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "3d30e85852c60c6b6635bf0070c9d572"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "3d089596d455734f4e62c0b21fdbca28"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "57e7761e33ddbdacba16273159845b9a"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "063bbcc6cb06d1e52565aa418b30ae1a"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "cfdbb8216e36230c3fb81e123891f1f7"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "0bd8a1748fbb21168b2df1e2b890ccd7"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "046b7fbb11a5f962afb8f5fc6f015d10"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "458ad5daf94a9fc3f4dc980559f4397c"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "806ea99c927041f4bc33f7b645df4ae3"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "3692cca30954c1505bca6bab5d0faae7"
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
