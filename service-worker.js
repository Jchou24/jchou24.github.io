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
    "revision": "95567b2ea8f00190b6071f3f070e5261"
  },
  {
    "url": "About/index.html",
    "revision": "d4b451e75617629cd8a965549f57749b"
  },
  {
    "url": "archive/index.html",
    "revision": "1ab2f62013948da6447710a914996ee7"
  },
  {
    "url": "assets/css/0.styles.e0c0ff5c.css",
    "revision": "3172834dc7c593a852443c23c8075461"
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
    "url": "assets/img/1.b582708c.jpg",
    "revision": "b582708ca3b3cda9d42bace00daa2f78"
  },
  {
    "url": "assets/img/1.e21543dc.jpg",
    "revision": "e21543dcedd65da2bb46151d501f6ac3"
  },
  {
    "url": "assets/img/2.02d26cc1.jpg",
    "revision": "02d26cc163bed4428ddc2d900dc2797b"
  },
  {
    "url": "assets/img/2.16d67fa8.jpg",
    "revision": "16d67fa819eb9ed1bc9964733ff3229a"
  },
  {
    "url": "assets/img/3.33f073cb.jpg",
    "revision": "33f073cbc11b65b40be87bcd392a8792"
  },
  {
    "url": "assets/img/3.677e9382.jpg",
    "revision": "677e9382e71e6f4a10a362ab4d6a024e"
  },
  {
    "url": "assets/img/4.65320b0d.jpg",
    "revision": "65320b0d59c9b53fe87e0c4b5b966815"
  },
  {
    "url": "assets/img/4.d40d7534.jpg",
    "revision": "d40d75344cb707ae4717d57493fb8bf2"
  },
  {
    "url": "assets/img/5.a09a79ff.jpg",
    "revision": "a09a79ffc9e262124b3e4546de7c0a46"
  },
  {
    "url": "assets/img/6.d1e49b88.jpg",
    "revision": "d1e49b8860fa3f1552bb1b6a63c8cb4c"
  },
  {
    "url": "assets/img/6.fb14f833.jpg",
    "revision": "fb14f83357255da1a9103ba7cde0b5fb"
  },
  {
    "url": "assets/img/7.922e30cd.jpg",
    "revision": "922e30cd5cf9f5a20539b346c75c66ed"
  },
  {
    "url": "assets/img/8.c3eacf32.jpg",
    "revision": "c3eacf32abc5fdd4f444141c3fb65a3d"
  },
  {
    "url": "assets/img/9.f5fc7afc.jpg",
    "revision": "f5fc7afc04ba38fb4f5838fdcd696a96"
  },
  {
    "url": "assets/img/A1.9b7a7a47.png",
    "revision": "9b7a7a47756709d9805304f8720725d3"
  },
  {
    "url": "assets/img/A2.fa4e38e5.png",
    "revision": "fa4e38e571013ddafc93a782df5248dc"
  },
  {
    "url": "assets/img/A3.8b6368de.png",
    "revision": "8b6368de1d91ce27bd4bf36ef736b719"
  },
  {
    "url": "assets/img/B4.aa7020b7.png",
    "revision": "aa7020b7d432d7b066ff73d80d0acd07"
  },
  {
    "url": "assets/img/B6.1d1d93b2.png",
    "revision": "1d1d93b2532bde0c72241f2cb1b44e0f"
  },
  {
    "url": "assets/img/background-sky.6c101208.jpg",
    "revision": "6c101208435648609a57f96b28c4cc4a"
  },
  {
    "url": "assets/img/blue_wash_wall_4.ee64ddfc.png",
    "revision": "ee64ddfcb1b52dddaa795ed34bebabfb"
  },
  {
    "url": "assets/img/blue-block.ea3b5829.jpg",
    "revision": "ea3b5829df8917ecfde66d2527919d59"
  },
  {
    "url": "assets/img/C1.b5c4647c.png",
    "revision": "b5c4647cb2681115d006b4d8de8d2bb3"
  },
  {
    "url": "assets/img/crossword.b5c5ab66.png",
    "revision": "b5c5ab66d8331513696fe3ec992187a0"
  },
  {
    "url": "assets/img/D1.676a2f7a.png",
    "revision": "676a2f7a43eb895cddd0069144031e27"
  },
  {
    "url": "assets/img/D2.fa4c0924.png",
    "revision": "fa4c09248cca522280b99990aaffaabc"
  },
  {
    "url": "assets/img/dark_wood.d35f4a25.png",
    "revision": "d35f4a25085e37219faf015fad06baeb"
  },
  {
    "url": "assets/img/dust_scratches.608ab5fe.png",
    "revision": "608ab5fe4a45e2ac93febd3416b260f0"
  },
  {
    "url": "assets/img/E1.efa1be81.png",
    "revision": "efa1be819032931b5c3ce011d90e39a3"
  },
  {
    "url": "assets/img/E2.abf6a3f4.png",
    "revision": "abf6a3f4a8dcbf6d90cb40bbabd80721"
  },
  {
    "url": "assets/img/E3.30d4565e.png",
    "revision": "30d4565e12308df3bc4b7c861f750eea"
  },
  {
    "url": "assets/img/E4.c17f551b.png",
    "revision": "c17f551bc6ae36b50dae756f59099ea1"
  },
  {
    "url": "assets/img/F1.2cae70dd.png",
    "revision": "2cae70dd781fa0951f47a4a247a8c16d"
  },
  {
    "url": "assets/img/F2.d178947c.png",
    "revision": "d178947cb19840f1c112b0b004ce4260"
  },
  {
    "url": "assets/img/F3.015638c8.png",
    "revision": "015638c8bc3412b7b11a44e5ee2523e7"
  },
  {
    "url": "assets/img/F4.ed1e7123.png",
    "revision": "ed1e7123933740e68fa905445cd43c65"
  },
  {
    "url": "assets/img/F5.90a67292.png",
    "revision": "90a672925f0dde13eb19f6a88a081446"
  },
  {
    "url": "assets/img/grey_wash_wall.88ab8ad9.png",
    "revision": "88ab8ad95a8055d0f3dc4f7dfa075ba0"
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
    "url": "assets/js/1.fa973eaa.js",
    "revision": "13f89af8adef46957afb20ea5d88dd20"
  },
  {
    "url": "assets/js/105.12e3cb82.js",
    "revision": "3b2a01900966a7347b76286b75cab61b"
  },
  {
    "url": "assets/js/106.0fdb3150.js",
    "revision": "24b80df9fba114964088cae08cfb8a9c"
  },
  {
    "url": "assets/js/107.019f5174.js",
    "revision": "bce997bd84ae0fbd36820e7a468a06c9"
  },
  {
    "url": "assets/js/108.0e390abc.js",
    "revision": "979ac0586fe8049ebfec3a5abbf38268"
  },
  {
    "url": "assets/js/109.12ca0cce.js",
    "revision": "c536cdf0d2624b61b749d047545aa6f4"
  },
  {
    "url": "assets/js/110.b109feb6.js",
    "revision": "245c428e91944ad01f3e8d2fd080724c"
  },
  {
    "url": "assets/js/111.2934a1f5.js",
    "revision": "6d13bf11d87b03ea72cfff8c8cd1bbed"
  },
  {
    "url": "assets/js/112.5b7e931e.js",
    "revision": "feedb6c93f0495ff2f18606b2d796436"
  },
  {
    "url": "assets/js/113.ea9e7d86.js",
    "revision": "64a36b2d1b1a574e0978d5630a0e3106"
  },
  {
    "url": "assets/js/114.7f1710a4.js",
    "revision": "44d7587e3979da3849def5daf2c82fb6"
  },
  {
    "url": "assets/js/115.743c2310.js",
    "revision": "e40f635e8e42d01efa1c111e477f7d4b"
  },
  {
    "url": "assets/js/116.3034f7c7.js",
    "revision": "d8ee7abb6e42946649eba9e6eaecb435"
  },
  {
    "url": "assets/js/117.924dbd3f.js",
    "revision": "082616cdc5c0019d493644e9e5c4fa31"
  },
  {
    "url": "assets/js/118.297b4398.js",
    "revision": "cfbec3e2ecf9d499983633758126927f"
  },
  {
    "url": "assets/js/119.b26ddca2.js",
    "revision": "067998bd616c75fb7999e233dd6e1190"
  },
  {
    "url": "assets/js/120.ea876d99.js",
    "revision": "d659b782f0808ae7a3430776f3a3ae7e"
  },
  {
    "url": "assets/js/121.5414288f.js",
    "revision": "d8177ba36782552987bf7ad1bafb28a6"
  },
  {
    "url": "assets/js/122.78bbcc43.js",
    "revision": "cfe31c54f93b11e19d62453fcc96f5e7"
  },
  {
    "url": "assets/js/123.3fee39a9.js",
    "revision": "671d9dca386544f4d69d58b6d7218563"
  },
  {
    "url": "assets/js/124.6ca36d94.js",
    "revision": "6f7bcd0038d174a28bd64a672afee5b3"
  },
  {
    "url": "assets/js/125.fc905b7b.js",
    "revision": "0b370be1854d2f83c63648fadf25dbd3"
  },
  {
    "url": "assets/js/126.97529fe0.js",
    "revision": "2731d9311e4b15fc5c219deaa0a145d2"
  },
  {
    "url": "assets/js/127.34e13c6e.js",
    "revision": "e7d8991a62321cd4cd6474e15883c137"
  },
  {
    "url": "assets/js/128.50477743.js",
    "revision": "0a5917522d4b34a2b13705cc2b5cfa0d"
  },
  {
    "url": "assets/js/129.dcb3fcdc.js",
    "revision": "a0722c99e41f449384d2d12fea8f987c"
  },
  {
    "url": "assets/js/2.7bc5a6da.js",
    "revision": "528e61d3e13302e4c9b401ec02441f6f"
  },
  {
    "url": "assets/js/3.5bbe4e54.js",
    "revision": "19d4f1baf93d9629ab6d19b29951e2b2"
  },
  {
    "url": "assets/js/4.1c86cc24.js",
    "revision": "8882e5ba6c7d231572322fe0a4c9de7d"
  },
  {
    "url": "assets/js/5.a3e0e47e.js",
    "revision": "4d8b17a8438fca21d7c60cdf16217a87"
  },
  {
    "url": "assets/js/6.63935566.js",
    "revision": "cdba513019c40ba0aeacf2b7bd8be468"
  },
  {
    "url": "assets/js/layout-BaseLayout.5884bf13.js",
    "revision": "193de20c230634ba1ecf9036ff4d45df"
  },
  {
    "url": "assets/js/layout-Layout.9b964005.js",
    "revision": "364212cd50c737e1e7d5f31d933d2bcd"
  },
  {
    "url": "assets/js/layout-NotFound.2ec7496c.js",
    "revision": "fdce76f744adba9c20d24f89d3ca544d"
  },
  {
    "url": "assets/js/page-0193e625.c82649f3.js",
    "revision": "e538ec6a1c2d3e197840a87422c1d9f6"
  },
  {
    "url": "assets/js/page-021b3aa4.beb9192e.js",
    "revision": "743461b5057107af7333a575cd3a0cbf"
  },
  {
    "url": "assets/js/page-0a921c99.e0dce39c.js",
    "revision": "08d0ba8e68ac0926fd61c835a29f7401"
  },
  {
    "url": "assets/js/page-0c6c4d65.fd89b806.js",
    "revision": "ad154b962196a0e47302cddc9364f148"
  },
  {
    "url": "assets/js/page-0c7f77bc.9e9142b1.js",
    "revision": "5deb83370bbbd4ac08aedf2529c6b31e"
  },
  {
    "url": "assets/js/page-0d32e5ee.b3b41b7a.js",
    "revision": "e555d2591f33907f9707b096c55579f7"
  },
  {
    "url": "assets/js/page-1080dbe2.81d574d0.js",
    "revision": "9358f77f192851e4ea83e2a1740a54ce"
  },
  {
    "url": "assets/js/page-1486eb54.cbb97ff9.js",
    "revision": "58f71359e6af0ab9dc2712357342d48c"
  },
  {
    "url": "assets/js/page-177d640c.63c989df.js",
    "revision": "dd99718334979def65b845f2062e63cb"
  },
  {
    "url": "assets/js/page-1a34eb5d.72fff3bb.js",
    "revision": "703229d269d809033c95096aeff291fe"
  },
  {
    "url": "assets/js/page-1c4a4e12.d54c0707.js",
    "revision": "fb08ef58369e8e633845ff5427367655"
  },
  {
    "url": "assets/js/page-1ccc22d8.666f7526.js",
    "revision": "3869fca266fa51a8ba8a850252dff353"
  },
  {
    "url": "assets/js/page-1db42de8.bd76afcb.js",
    "revision": "05c88594b6b42c2b6d189172f8a12d2b"
  },
  {
    "url": "assets/js/page-1e536af9.c15f7fee.js",
    "revision": "fcf8d301d2aa43aa35cd56dcfb239b35"
  },
  {
    "url": "assets/js/page-21fcb945.84abb7db.js",
    "revision": "d0cc15c131ebc5c8a8397391c1c4ad26"
  },
  {
    "url": "assets/js/page-25bc4f18.51cb4e0c.js",
    "revision": "9b68311d4c326e3aad79951911af6784"
  },
  {
    "url": "assets/js/page-27f6ecec.e3fe7936.js",
    "revision": "c8e5edd9450615c08190e4c37c802eb3"
  },
  {
    "url": "assets/js/page-29c918e5.a40f113f.js",
    "revision": "1e4ace02e93c8eeff22be7f4e697a22d"
  },
  {
    "url": "assets/js/page-2c6bc4ab.bef56ea8.js",
    "revision": "6a8aed83df13a40d19684fabff04d77e"
  },
  {
    "url": "assets/js/page-2e8c0cd0.fe96c2d1.js",
    "revision": "a34d5390870de2cdc92094810266ee68"
  },
  {
    "url": "assets/js/page-302e6251.dc37ffac.js",
    "revision": "dc10e04d86694d1a8841d05434cc6372"
  },
  {
    "url": "assets/js/page-320aac86.e22a9252.js",
    "revision": "eb0f3dc182a665a91d27dd2c65c8c2e5"
  },
  {
    "url": "assets/js/page-339369e0.a6c5e7a0.js",
    "revision": "d89b7dfb54609dc18bb028193d931243"
  },
  {
    "url": "assets/js/page-36d5d2b3.61c12775.js",
    "revision": "035b01fc585b7b4b03484a2068026360"
  },
  {
    "url": "assets/js/page-39e05f8b.341360d8.js",
    "revision": "6af299aad5f4e2c2f906ddfc49d7a649"
  },
  {
    "url": "assets/js/page-3c8dbd4b.5ce6ec0b.js",
    "revision": "2e5dfebf2c6b9d1cd1966f3f184a5dbd"
  },
  {
    "url": "assets/js/page-3cdc4745.f5a2e45c.js",
    "revision": "19ccd4b8e1d6ae2dacb22ecc832005f8"
  },
  {
    "url": "assets/js/page-3ff73aa5.f70cfe1d.js",
    "revision": "763a2d9f624a411df691ae1bee28ea24"
  },
  {
    "url": "assets/js/page-4107293f.4edc7c0a.js",
    "revision": "47092f349fcd6d119f4f4404dcf16259"
  },
  {
    "url": "assets/js/page-4144513c.b6002424.js",
    "revision": "55c35b5bc58ce3131bbc1e88f187c0cb"
  },
  {
    "url": "assets/js/page-422a7e52.2744544f.js",
    "revision": "ba0fbf68d8b9b19f226576ea958e2a66"
  },
  {
    "url": "assets/js/page-445c88ce.47ac1bca.js",
    "revision": "e93b1f842c2c5ee007918fcc82298a77"
  },
  {
    "url": "assets/js/page-4478a866.3a14bf0b.js",
    "revision": "8866ea95db4acdc15e81a644ac5de72a"
  },
  {
    "url": "assets/js/page-455360d1.4cc9dc0e.js",
    "revision": "e58e0496002e5cacee4cea195dfb94f4"
  },
  {
    "url": "assets/js/page-47f71914.a9440edb.js",
    "revision": "08f3740d1c64ec293bc2408358b4824d"
  },
  {
    "url": "assets/js/page-4829d184.f411a7b2.js",
    "revision": "9adc106bc411b3437422ac7179327be0"
  },
  {
    "url": "assets/js/page-486aacae.cde2fb5a.js",
    "revision": "c94302036f274d22b7b70658525e46cb"
  },
  {
    "url": "assets/js/page-4d521b14.280037e0.js",
    "revision": "bf2d8137e824676f4678b12cc1387bb2"
  },
  {
    "url": "assets/js/page-4d7e2aa5.94384f3e.js",
    "revision": "9be7aae99a4465a19189a2a38fb808ff"
  },
  {
    "url": "assets/js/page-4d9fba32.7b8ae6c3.js",
    "revision": "78a4effe25969bad2b0169552cc8b603"
  },
  {
    "url": "assets/js/page-4dc00f25.c88414b5.js",
    "revision": "7e465e41641ca528e11744783e044048"
  },
  {
    "url": "assets/js/page-4dc54ba5.78b6bea4.js",
    "revision": "1013660bf5d28c9ef0f47e0f17bdfa5d"
  },
  {
    "url": "assets/js/page-4df429d2.6c5de96d.js",
    "revision": "4136be3716ae95b0d9c0dcc62013270a"
  },
  {
    "url": "assets/js/page-518ca8d8.a80bd85d.js",
    "revision": "c20a94e392d4985754127eef399ebe11"
  },
  {
    "url": "assets/js/page-545b8d99.07122d38.js",
    "revision": "5257d1616e01621072c9ad9b714822a3"
  },
  {
    "url": "assets/js/page-55a376be.74b7009d.js",
    "revision": "471181f1b110d5ec73988dec8fb22359"
  },
  {
    "url": "assets/js/page-59cd63bf.f4dec798.js",
    "revision": "428f30d2598a124acdf01a48280f1eb7"
  },
  {
    "url": "assets/js/page-5cdb680e.02bbbc11.js",
    "revision": "f6318e0d6336e6a7aa357c2802cc0c24"
  },
  {
    "url": "assets/js/page-5de41bb6.5e3766d6.js",
    "revision": "5c54c62a8d0e5bea7ff96326c332fc02"
  },
  {
    "url": "assets/js/page-5edad598.21ec5821.js",
    "revision": "0ea963ea0deff462988cd19b39afd8f2"
  },
  {
    "url": "assets/js/page-64a9a694.00aa9ca3.js",
    "revision": "1467a5190fedeaf5658b42e387c13cb8"
  },
  {
    "url": "assets/js/page-66061c06.a054ebd6.js",
    "revision": "43d8d371923835cb05f7769f378381fb"
  },
  {
    "url": "assets/js/page-6890df9a.b886c3ed.js",
    "revision": "ad51a81c7e3000ba55b15e376d4f34fb"
  },
  {
    "url": "assets/js/page-68b44e7f.f1ef024c.js",
    "revision": "a5ce718077f0695d41b7e6139c07d1c2"
  },
  {
    "url": "assets/js/page-6dbff0ea.1bff854e.js",
    "revision": "4ff6cd1dec1ab20207ff08abc04ab7fe"
  },
  {
    "url": "assets/js/page-6f7fa8b4.eabfa86f.js",
    "revision": "04aa0d5f908417adfb797a529bf6df00"
  },
  {
    "url": "assets/js/page-70612fe6.6ae3b234.js",
    "revision": "686aeb3ffae992c1d7a871ad5dc7ae74"
  },
  {
    "url": "assets/js/page-720c8312.0941f8ac.js",
    "revision": "caff4cb9990e24f16813b169b913ca9a"
  },
  {
    "url": "assets/js/page-74a44f51.9e3dcc00.js",
    "revision": "0f626521682575119814716b254dadc1"
  },
  {
    "url": "assets/js/page-7507c3f6.66dbabb6.js",
    "revision": "dc787f23c0726f7b21323f6dfbe7c36a"
  },
  {
    "url": "assets/js/page-761a0ef6.76aa35b7.js",
    "revision": "06f86f3b109f681c65aba43f00da141f"
  },
  {
    "url": "assets/js/page-7690c622.aa8b9db4.js",
    "revision": "cb98fe2020db78442e23b556fb0972ed"
  },
  {
    "url": "assets/js/page-7ba2451f.b8ba376b.js",
    "revision": "9eadcb696496b1117ce611bce0810b51"
  },
  {
    "url": "assets/js/page-7bfb30a6.6a8a1f52.js",
    "revision": "e1b91fedbc2c89d43ee0578ac66a4167"
  },
  {
    "url": "assets/js/page-7d3a6963.edb02a45.js",
    "revision": "2875a74d7754feaf4cf7710ebfb3d952"
  },
  {
    "url": "assets/js/page-7e6b5e12.6ba8e065.js",
    "revision": "435225026fd26efea73d9842113a198e"
  },
  {
    "url": "assets/js/page-82c2c642.7199c51e.js",
    "revision": "870185fa582274811d4f75ce4255db5e"
  },
  {
    "url": "assets/js/page-85f4c948.bbd0210d.js",
    "revision": "0c3cbba5617c001de0a9e6a217c9de52"
  },
  {
    "url": "assets/js/page-8892394c.2a3b2e20.js",
    "revision": "78d63b212a3ec46d156b29ed17e494d4"
  },
  {
    "url": "assets/js/page-89b130dc.ec6c40d1.js",
    "revision": "b16027fdd5d6c812ff6d517e25fc71f6"
  },
  {
    "url": "assets/js/page-8da9df6c.40f26358.js",
    "revision": "f19d612de5b942fdbc9ee3b819856b3c"
  },
  {
    "url": "assets/js/page-916af89c.46327f7c.js",
    "revision": "ad62aff8c7c8f3faafbc8b606461c399"
  },
  {
    "url": "assets/js/page-9a2a43a4.1ad9223a.js",
    "revision": "1bed78a24ac1da91761e6e6fa7f4c60d"
  },
  {
    "url": "assets/js/page-9ec1a766.fa023e0d.js",
    "revision": "e138dca2f3985f9b0f352e50b482867d"
  },
  {
    "url": "assets/js/page-9f0190e0.cc58c297.js",
    "revision": "8b56282ab17b069a6aeaadb7c73ad87c"
  },
  {
    "url": "assets/js/page-a6174872.04af4718.js",
    "revision": "a0e8031b20115159de032cd549a3ae71"
  },
  {
    "url": "assets/js/page-aab392fc.808e7e2a.js",
    "revision": "82bd86765ee456f8f7231179a14565a1"
  },
  {
    "url": "assets/js/page-ace574d0.01e79425.js",
    "revision": "7f14ec7f497f27ddc2c52838b98fea9d"
  },
  {
    "url": "assets/js/page-ad24ce34.13c72641.js",
    "revision": "3e8b70416223127f024cb65e2e8b51e8"
  },
  {
    "url": "assets/js/page-b0521034.8df8a0e4.js",
    "revision": "fe016c266f945bb40a71a611c5c68157"
  },
  {
    "url": "assets/js/page-b0d90ce6.0ec00b90.js",
    "revision": "c0e3140888c361eb0a203d6fddb21f84"
  },
  {
    "url": "assets/js/page-b40de7ce.ad555a85.js",
    "revision": "909264f7c4084a6146ef56bdb4adef6a"
  },
  {
    "url": "assets/js/page-c26b0310.e166c6d2.js",
    "revision": "d0903ef014c5deb63d551b4f30a72e60"
  },
  {
    "url": "assets/js/page-c4bdd70e.b3550397.js",
    "revision": "3241da0be5b5c396b73c01653c1a3cd5"
  },
  {
    "url": "assets/js/page-c5f1a60e.946dc01e.js",
    "revision": "065723340bb432145f345f6e39760647"
  },
  {
    "url": "assets/js/page-c60be50a.7ff25dff.js",
    "revision": "54c1e834ff430c1733ce3dc1f2b0ff57"
  },
  {
    "url": "assets/js/page-d6c4343e.8cc4d270.js",
    "revision": "ca0a02a3bb5c97ccf7e5a2c7d51a4c1d"
  },
  {
    "url": "assets/js/page-e468b710.1108ca8a.js",
    "revision": "6bc91791c5652f27a730f95ebb9e5725"
  },
  {
    "url": "assets/js/page-e72e49e8.017c58c5.js",
    "revision": "26a34008070c4e089d6394f2fc6f2699"
  },
  {
    "url": "assets/js/page-ec44d602.38f66397.js",
    "revision": "d3521f9007d1a4eaecbe9377cccf3017"
  },
  {
    "url": "assets/js/page-ed303fba.a3c7b9b0.js",
    "revision": "3667caf770fadf7dc086ebea028464c9"
  },
  {
    "url": "assets/js/page-f313c186.db3f7133.js",
    "revision": "de085a9d95a09f3c8bd6a0d7e7643fa8"
  },
  {
    "url": "assets/js/vendors~flowchart.75df76e0.js",
    "revision": "1e2171d824cdb997e62b84194e829412"
  },
  {
    "url": "assets/js/vendors~layout-Layout.6443e9ed.js",
    "revision": "b5888cadf56c4d0c4511c095af9a3746"
  },
  {
    "url": "category/index.html",
    "revision": "2cfb8e11a0adff6713ead388bd5585eb"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "a234330efb7c04e923e660d5eab34c86"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "547839dec7035ca551d24315f0c38e94"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "f2a14ba7a002ee5d221e81120459377d"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "3275814d455d0713d7f5467677a065d3"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "d5f2cc16b986359d34e05669163beff3"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "495b7b5757ad866d2c9a13e81adcc660"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "9542bb138f54be2b5023763179eb910c"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "de2070fbc13e2fc33764c5505f8a2160"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "82703f9a10af8233f206130a39691fd1"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "12aa0456d7288dc29b2e6b819182d19b"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "c804b9381d8d143a03435acdf1c1e1ee"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "1a434a2369fc699713af19967b438d30"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "2e21c864acdc52d8535dfc311875af28"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "250e3c96d313e2520aa6d68459889539"
  },
  {
    "url": "Coding/Front-End/CSS/css-quarter-oval.html",
    "revision": "71df54fa7d562feef3fda5062c40af23"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "56edf76186ead4c59afbdc63a35d04f1"
  },
  {
    "url": "Coding/Front-End/Security/開新分頁.html",
    "revision": "ffbf7eea575979109831e9a374b8a5e1"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "a463395498879aa324490cf1828beff3"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "ef2e06706ec8ff83d82c6d9fdbb1c377"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "0ce560c4dbc3e50fa4520aeca14f7488"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "09d324a64cb3d67dc8a12bdf8da43812"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/index.html",
    "revision": "aa6304ded6ef6ccdde108d82136d850d"
  },
  {
    "url": "Coding/JS/Vue/vue-event-binding.html",
    "revision": "2dd477ac26c82a19dfff859b2fa65881"
  },
  {
    "url": "Coding/package-tips.html",
    "revision": "693e3bf75e06576334c637d1495e2f07"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "5364332d8e86e57b26370e35f4aa533a"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "488b52dd34f3da739cb604512c6e1910"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "f63c9e2d95922c9c2c916977d8ea73d9"
  },
  {
    "url": "Coding/SQL/sqlite-to-postgresql.html",
    "revision": "78a510205f8dc1e951977b5ee5170ffd"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "9aa829f386f5d8c1c9109f90e3c812c3"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/back-end.html",
    "revision": "a3fcd2ba855d3ec95f7a0deafb5da0f3"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/front-end.html",
    "revision": "632c0881016f58d395de3e7b971c3137"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/index.html",
    "revision": "8fe595c548b4bf36b770117cecece364"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/authorization.html",
    "revision": "1e29e10b5697e1db77dfb517e2066691"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/basic.html",
    "revision": "32b4b03ce9974498f5d8baf4b4b0bd48"
  },
  {
    "url": "Demos/index.html",
    "revision": "4f023c60a901488432d9ccdbd9d09293"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "9468b2a89580fcb321b3976bb7883127"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "acdf71e566b88e7d4fd19f66305653b9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "8e63854dd06d0940bb4822156ecc0223"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "b6c7115ee98fa7dfe4f0afba18232ce0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "3ecde37238dfe45005f4aabfd24b5e14"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "7a8b1480b74bd7e0644d2fa9d0ffe295"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "d99ec62e4991970037b494c6b9ef12fd"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "9fec356b44feadabf3560f9fd29406be"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "49c6b254593bbe9f69e72491e1ede565"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "43114d6d2e0f8354da4c51a88a46c83c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "cf99957b58421e8c6e61e2be0c3b8e6b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "57f315e6757b7cd0fa2179f4eb372ada"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "065988075ad61606b73abb4f7b8d522e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "310ebeed438a6edece40b5c7a8e77f1a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "4dab592a4f49610c38191d81d8b7d676"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "c838163786b976d40322ab5bc1895aa3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "379d962e1a15640ed5f622019dfc48cc"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "57290effa198900d20f5eee423b159cb"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "1ba067ba3d8f63d2506ef6b386b02e6e"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "1f87bf83f429bd977ef5ecfa8c662551"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "70992cc824fa789a681610386da96bc3"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "7c74ac96ce53bc1e33894c66efd9e431"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "f670e1ab2ea8696d41f3ba961fc6187e"
  },
  {
    "url": "Game/FEZ/5. 3on/3on共通玩法介紹.html",
    "revision": "a4acfad7097d2dce4b35bb9174412483"
  },
  {
    "url": "Game/FEZ/5. 3on/3on刀玩法介紹.html",
    "revision": "a1db212791fe545b18f36d1b1eb54819"
  },
  {
    "url": "Game/FEZ/5. 3on/3on大劍玩法介紹.html",
    "revision": "c9d0bc25f616fc246aa8a0bd14033591"
  },
  {
    "url": "Game/FEZ/5. 3on/3on雙修玩法介紹.html",
    "revision": "f469fbb735ab1e9680647c56ecb55cb0"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "2fff38979dca018ea0ee9c0ed866a87f"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "cccbab0f28b78d373689ef031b121139"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "4c0cd7d6a6254179679ac50402ccc3c3"
  },
  {
    "url": "icon.png",
    "revision": "f1276345da23f2967fa54b08709e0d9b"
  },
  {
    "url": "icon/test0.png",
    "revision": "bc278be9745f5fec074429e789a0b788"
  },
  {
    "url": "icon/test1.png",
    "revision": "1e193111d6caa4795546c38b0bc62e9b"
  },
  {
    "url": "icon/test2.png",
    "revision": "f701ddafc6117ec3d2d39fb25ced312b"
  },
  {
    "url": "icon/test3.png",
    "revision": "3176400944c39ff3572109715063e8d7"
  },
  {
    "url": "icon/test4.png",
    "revision": "939002491ea9c37d3704f8a1d1dec73d"
  },
  {
    "url": "icon/test5.png",
    "revision": "c1d465a8f1bd2bb8837b34b5745a319f"
  },
  {
    "url": "icon/test6.png",
    "revision": "791ab16a38b3bca4726d9f9a4fe6615c"
  },
  {
    "url": "icon/test7.png",
    "revision": "f380be64259870ecfd7237c7d9af037e"
  },
  {
    "url": "icon/test8.png",
    "revision": "f380be64259870ecfd7237c7d9af037e"
  },
  {
    "url": "icon/test9.png",
    "revision": "f1276345da23f2967fa54b08709e0d9b"
  },
  {
    "url": "img/fez/2on/fight_area.png",
    "revision": "8ad40421297c21af2519188e79e10f79"
  },
  {
    "url": "img/fez/2on/map_setting.png",
    "revision": "f42ac980c3e648af05ce10a1639ceb85"
  },
  {
    "url": "img/fez/2on/卡位1.png",
    "revision": "0dc25c30d04a1c7585b5de389916f012"
  },
  {
    "url": "img/fez/2on/卡位2.png",
    "revision": "1a0fe04cb16431d9332f32f1c416a7a4"
  },
  {
    "url": "img/fez/2on/站位.png",
    "revision": "c01bf90c3a6c14c270a05c8dd07fa68e"
  },
  {
    "url": "img/fez/3on/map_setting_GL.png",
    "revision": "c6fbc725be934ce444c4ac781d63cbe4"
  },
  {
    "url": "img/fez/3on/map_setting.png",
    "revision": "9dc22414004f69ca2aaf5bf56ff39a10"
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
    "url": "img/self/002-1.png",
    "revision": "35104fd0d3d8a744fa0f1650e6a01d0c"
  },
  {
    "url": "img/self/analytics.png",
    "revision": "30bf31cdd458116219a7413366f4dbd5"
  },
  {
    "url": "img/self/analytics2.png",
    "revision": "e4db847a281e936b627722816d59c72c"
  },
  {
    "url": "img/self/analytics2.svg",
    "revision": "aedb12f0f9bdbf0ecf56e196961bf3cc"
  },
  {
    "url": "img/self/backend-icon.png",
    "revision": "f94b437cdb2e16c809b8fa374f91f236"
  },
  {
    "url": "img/self/backend-icon2.png",
    "revision": "1f6220fcc478d530a23b2c9f67ff4933"
  },
  {
    "url": "img/self/backend-icon2.svg",
    "revision": "b93821757ef197c8cecb8754f0143d4a"
  },
  {
    "url": "img/self/coding-1.png",
    "revision": "8510124c628ec864c5d2ada0cbee8f60"
  },
  {
    "url": "img/self/coding-2.jpg",
    "revision": "6ee16449bb19a7dbf55e25b6ec2219c8"
  },
  {
    "url": "img/self/coding-3.jpg",
    "revision": "28bd3ae31ada8f30de7c43ca89625852"
  },
  {
    "url": "img/self/coding-4.jpg",
    "revision": "6cec9639a74c432eb34eb2f24884ebf6"
  },
  {
    "url": "img/self/crawler.png",
    "revision": "6819ef6b818f4185fe7679a49cb7cea2"
  },
  {
    "url": "img/self/crawler.svg",
    "revision": "0b4ca74e6241824cc6cf3337464b6d87"
  },
  {
    "url": "img/self/frontend-icon.jpg",
    "revision": "b9718acae5d775025682867a44d19c38"
  },
  {
    "url": "img/self/rwd-icon.svg",
    "revision": "fe01ac37e2b2392297638b054778492b"
  },
  {
    "url": "img/self/s-gundam.jpg",
    "revision": "dbcec052d40245240e803274169ffe9f"
  },
  {
    "url": "img/self/server-icon.png",
    "revision": "687998eab2c377a2518150874fade232"
  },
  {
    "url": "index.html",
    "revision": "a3d4130946ce6fde7a13df59099951df"
  },
  {
    "url": "search/index.html",
    "revision": "a080030f67bba9bef272026a553371a3"
  },
  {
    "url": "tag/index.html",
    "revision": "f4401d040ebf5a7f94a5228dde8ef60d"
  },
  {
    "url": "VueJCBlog/Config.html",
    "revision": "84b18c392a02cce8a996b877a51ca22d"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "7dafc9e01c5988a7b4aada94ebf7d1c6"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "69f6c4f6a2ddafb107243cf29acb411d"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "90d2116946bd3622cd9a0edc60aa3b48"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "7220a4d90878728ea5d612c2c01b156a"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "c211a2b856dabc69e088e4e2d2f130a4"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "36c68e46943eba6a64a06eeb27df96d3"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "487ba8a76308bfd032329157e50daa83"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "c4cf56d87cae83362020c0a93d7c0569"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "086a9b5dcf087d0458b8d499435c8ac7"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "812f9690996f3486968a642afe648402"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "e2c6319062d23025b4c13ab76805dc14"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "1ca69438b5d6fa8cc7b86ad92728dbc4"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "2e9bd56daefaf5f30c59b3a5a3c649d2"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "797602c8f8dace2e2e592a26df789ebc"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "2d9aba235854f15fc1be41f5c9a48b44"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "030e31e13539aa33fe6d67fe97695989"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "64e806c1e04806c2216e119c3f2a454a"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "298aadd1799f1113328394b9d8d395ac"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "250b48d8177f7a03cce13e93f8141342"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "9b16ce8975086a7ad727670fb0e5adb8"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "b298fc64040a08d3fc63ab7cfda3f78a"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "710f50063cf289ba40ad97740ed4ae5f"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "5c32ffddfd986dadb77b6ef9f5fe1f64"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "514dff10c72e2ae99288f36480b294b4"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "0794edbe0ba2ebcaea6a6a2a9ad244f5"
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
