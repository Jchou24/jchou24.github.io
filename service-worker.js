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
    "revision": "ba14cc099fca7ac1225ab286077e2d1c"
  },
  {
    "url": "About/index.html",
    "revision": "f8252e7aea7587dab697001616a2b56c"
  },
  {
    "url": "archive/index.html",
    "revision": "85ff14a425b2afaef3bdbebee23b0811"
  },
  {
    "url": "assets/css/0.styles.a0a3f756.css",
    "revision": "faecf4d313b1d27ea767fe7e19bb36e4"
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
    "url": "assets/fonts/MaterialIcons-Regular.012cf6a1.012cf6a1.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.012cf6a1.woff",
    "revision": "012cf6a10129e2275d79d6adac7f3b02"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.570eb838.570eb838.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.570eb838.woff2",
    "revision": "570eb83859dc23dd0eec423a49e147fe"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.a37b0c01.a37b0c01.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.a37b0c01.ttf",
    "revision": "a37b0c01c0baf1888ca812cc0508f6e2"
  },
  {
    "url": "assets/fonts/MaterialIcons-Regular.e79bfd88.e79bfd88.eot",
    "revision": "e79bfd88537def476913f3ed52f4f4b3"
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
    "url": "assets/js/1.666c7553.js",
    "revision": "a11c74953f863d4a25158873eae3ebc8"
  },
  {
    "url": "assets/js/123.241549d2.js",
    "revision": "a661d2507698a57d5bc693a2159654f6"
  },
  {
    "url": "assets/js/124.6d5a7caa.js",
    "revision": "f8fd8529a48cbb3945868d32db2acb6e"
  },
  {
    "url": "assets/js/125.838acb82.js",
    "revision": "8ca96fdf9026a108955ab03cdb283b4f"
  },
  {
    "url": "assets/js/126.ebbac058.js",
    "revision": "3d6ebeb15b4ff70bcf0ffdf55b9399c1"
  },
  {
    "url": "assets/js/127.dcfd7efa.js",
    "revision": "021f574c45ca8375f1778185d7b24f87"
  },
  {
    "url": "assets/js/128.66a8d8a0.js",
    "revision": "dd4ff325b154dcfc0e0038f3cce84cf2"
  },
  {
    "url": "assets/js/129.8adcbe9c.js",
    "revision": "66e79ea7c4b89b196abbb9e0da6ca165"
  },
  {
    "url": "assets/js/130.af3388e6.js",
    "revision": "53c0cd52d85224f1a4a5aec702857274"
  },
  {
    "url": "assets/js/131.cd704a1f.js",
    "revision": "e70a023521d2106fcc7105054adae219"
  },
  {
    "url": "assets/js/132.0cdcf21d.js",
    "revision": "73c402c6e859de94ca9e166fabeafa05"
  },
  {
    "url": "assets/js/133.12983055.js",
    "revision": "0b7e478c8871b60c218b01cee707e432"
  },
  {
    "url": "assets/js/134.4c7a9909.js",
    "revision": "8adada52fb3cda323aa98cd068603313"
  },
  {
    "url": "assets/js/135.e1faadfa.js",
    "revision": "1da8bae54c05bf45b9605039ed5183e9"
  },
  {
    "url": "assets/js/136.3011f2de.js",
    "revision": "5a466a0b141c75feb6998cf07975cdea"
  },
  {
    "url": "assets/js/137.257a4ce5.js",
    "revision": "147ccb0c73afaebe395659fd81bd8b1f"
  },
  {
    "url": "assets/js/138.33bc358f.js",
    "revision": "bd32e2372b28a4e40dce3f3eccbf0065"
  },
  {
    "url": "assets/js/139.a00e3d30.js",
    "revision": "e3c717847500ca68d51a8706e153b68e"
  },
  {
    "url": "assets/js/140.90b1b98e.js",
    "revision": "c6edda460282daeb6bc50d1c68fa0d9b"
  },
  {
    "url": "assets/js/141.0363c304.js",
    "revision": "cc7e08b0c8fa3569d3fb24bc80d61893"
  },
  {
    "url": "assets/js/142.f85dd07c.js",
    "revision": "9ff5d2a2a9e17131eb099d7bdb012c65"
  },
  {
    "url": "assets/js/143.02220b9b.js",
    "revision": "22f5bf35014077589a257cd8bc78d684"
  },
  {
    "url": "assets/js/144.fe6450ad.js",
    "revision": "32071ab64a2c22290e6a19f2c705e4ac"
  },
  {
    "url": "assets/js/145.8c76f289.js",
    "revision": "2db1b50af5811647016bdcd44a48e28e"
  },
  {
    "url": "assets/js/146.3fe3d7b1.js",
    "revision": "1c8810a44e17752be73150638780e035"
  },
  {
    "url": "assets/js/147.a2b38c96.js",
    "revision": "a0288f57e0068909a10ff7aeeaf2d19f"
  },
  {
    "url": "assets/js/2.b335b60d.js",
    "revision": "fe027feb1145cdcaa7117ae55139df90"
  },
  {
    "url": "assets/js/3.f5362870.js",
    "revision": "e7d6e3e3b381ab0a60b7af61956c7434"
  },
  {
    "url": "assets/js/4.92687a32.js",
    "revision": "21a87abffdf3f02f58c116ffeec791ea"
  },
  {
    "url": "assets/js/5.f132b447.js",
    "revision": "f678de5e5628d2cf4a0b335c511e51ec"
  },
  {
    "url": "assets/js/6.234d5839.js",
    "revision": "239a0574910870549bb4b0c4cb8a1ea8"
  },
  {
    "url": "assets/js/layout-BaseLayout.37ed891a.js",
    "revision": "6c80a0908d21ecc3a0da9f5e03917d30"
  },
  {
    "url": "assets/js/layout-Layout.d9015768.js",
    "revision": "e9a27f1402bb49c5627c27cd999e60a4"
  },
  {
    "url": "assets/js/layout-NotFound.351563b2.js",
    "revision": "83fdd7a8cca57f3ee456d8563027b514"
  },
  {
    "url": "assets/js/page-0193e625.fbd8b951.js",
    "revision": "7e5cf1391b1f622cef3b4eb8f53da7ad"
  },
  {
    "url": "assets/js/page-021b3aa4.5ccc0b27.js",
    "revision": "868c164992f35f13179595cc9a760bec"
  },
  {
    "url": "assets/js/page-0326a646.9ee5d6e7.js",
    "revision": "4fa9cccdc0fbfd647c22d962501a4781"
  },
  {
    "url": "assets/js/page-0a921c99.da6cf249.js",
    "revision": "946431e7fdd0ae30262af4649e7abc15"
  },
  {
    "url": "assets/js/page-0c6c4d65.84c9df2c.js",
    "revision": "825c410311025e7e774f0efdf60639a7"
  },
  {
    "url": "assets/js/page-0c7f77bc.b0ff226b.js",
    "revision": "70ee5267fa5a1cd7cca60800eca61879"
  },
  {
    "url": "assets/js/page-0d32e5ee.34823164.js",
    "revision": "d036142fdb5aaaa31c7d4892fbb03308"
  },
  {
    "url": "assets/js/page-0e69d9d2.6edc47b7.js",
    "revision": "4aa968ab421d6ba03da9009eee07d636"
  },
  {
    "url": "assets/js/page-1080dbe2.86626e3d.js",
    "revision": "37cd830c57921eaf98ddf591afd23d8e"
  },
  {
    "url": "assets/js/page-11a8df82.933af379.js",
    "revision": "5d1b9b26beaca5c98318b0e59e9322e7"
  },
  {
    "url": "assets/js/page-129b7428.e01f8fa5.js",
    "revision": "b1b28f13b0979de8967bb013dffeb8e9"
  },
  {
    "url": "assets/js/page-1486eb54.ad00c249.js",
    "revision": "50a460e534efad5b6bbf67009f8d96b5"
  },
  {
    "url": "assets/js/page-177d640c.d664e326.js",
    "revision": "c5ab20e924c2804edf284c2db71fc7e5"
  },
  {
    "url": "assets/js/page-1a34eb5d.2dfe4a93.js",
    "revision": "68a1552d14d35b83afe79fc464412f3f"
  },
  {
    "url": "assets/js/page-1c4a4e12.42dcab45.js",
    "revision": "683c7fd16b5f5f610c3daac06e5304ba"
  },
  {
    "url": "assets/js/page-1ccc22d8.6d34540f.js",
    "revision": "58b32c85385607210f169f3884933c4e"
  },
  {
    "url": "assets/js/page-1db42de8.2bb69a07.js",
    "revision": "163fbfc4d3b59b86378c90a082ba2f30"
  },
  {
    "url": "assets/js/page-1e536af9.2141dc88.js",
    "revision": "9db8cb62554dc639901fee032a58371b"
  },
  {
    "url": "assets/js/page-21fcb945.cec06c68.js",
    "revision": "43ea2456e7f66ad3c35706de6aa52126"
  },
  {
    "url": "assets/js/page-25bc4f18.073dcc4d.js",
    "revision": "89480215236859a7ef9358c68201ccf8"
  },
  {
    "url": "assets/js/page-27f6ecec.1ae66ec1.js",
    "revision": "ff34b68e2c29d4bc6ad75c9420961fa6"
  },
  {
    "url": "assets/js/page-29c918e5.8e39fe35.js",
    "revision": "2be1f1d9d711e35d01701bd51e514534"
  },
  {
    "url": "assets/js/page-2b10966c.e6e52994.js",
    "revision": "cb65d7da0b00083823f42a2f24e47d98"
  },
  {
    "url": "assets/js/page-2c6bc4ab.6d6799c0.js",
    "revision": "f80d4c4c3920d428e429f62bc7243d9c"
  },
  {
    "url": "assets/js/page-2e8c0cd0.fd316e1c.js",
    "revision": "1893df248a446179534521ab365e73f8"
  },
  {
    "url": "assets/js/page-302e6251.20e6aa66.js",
    "revision": "d4c176edc365b4372e21bf4e0128ae77"
  },
  {
    "url": "assets/js/page-320aac86.2b4d20ad.js",
    "revision": "d87b44580dd20abf3d396cac44c26017"
  },
  {
    "url": "assets/js/page-3229196c.be03fcab.js",
    "revision": "bbf97c9df24b960cdcd100a0f2d5e918"
  },
  {
    "url": "assets/js/page-339369e0.564298a8.js",
    "revision": "10004ba8b23901a269ff30a4db15f907"
  },
  {
    "url": "assets/js/page-36d5d2b3.f1f3cded.js",
    "revision": "c5cc123e2d5d2fd293173a259c3cfebf"
  },
  {
    "url": "assets/js/page-39e05f8b.eae09315.js",
    "revision": "d1340fffa605074e1996b36e46f31635"
  },
  {
    "url": "assets/js/page-3ab0cb1c.255061bf.js",
    "revision": "54fb7b2c600eb8e676176052d58ec58f"
  },
  {
    "url": "assets/js/page-3c8dbd4b.f5181d1e.js",
    "revision": "e241e0b3d98e23cd6c0cf730941974a3"
  },
  {
    "url": "assets/js/page-3cdc4745.d6eb44a3.js",
    "revision": "e2db9bbfdcd49e893a493725df1722ed"
  },
  {
    "url": "assets/js/page-3cfa4e13.ba870c65.js",
    "revision": "f236a4b0e22621f31e4c42af7d6056fb"
  },
  {
    "url": "assets/js/page-3edf90d5.0112b0f5.js",
    "revision": "4f9c11d6a3cf516fa8a51feecad3c425"
  },
  {
    "url": "assets/js/page-3ff73aa5.98b1e649.js",
    "revision": "4c47f38b3a3945ae8c3a5cdb19d0b14d"
  },
  {
    "url": "assets/js/page-4107293f.d6250141.js",
    "revision": "fd4c68508299c617c0eae214c09df0f7"
  },
  {
    "url": "assets/js/page-4144513c.f37a6f5e.js",
    "revision": "cf908a819522e7856b4e7960c252c2e2"
  },
  {
    "url": "assets/js/page-422a7e52.b9ca94cd.js",
    "revision": "8e3a515c947cb90c20c8811e7bf8a54f"
  },
  {
    "url": "assets/js/page-445c88ce.b784af6e.js",
    "revision": "0cc0d5a6e6a9003abd9a5c22f46bff03"
  },
  {
    "url": "assets/js/page-4478a866.0c324591.js",
    "revision": "177e4c24138256fbac4b35ab42fa3973"
  },
  {
    "url": "assets/js/page-455360d1.4624c81e.js",
    "revision": "e59c88d3707b6057307f1059b28dab58"
  },
  {
    "url": "assets/js/page-47f71914.d420a748.js",
    "revision": "c83ae4f164bf3f7339b8694681cd0b89"
  },
  {
    "url": "assets/js/page-4829d184.0d62aaa6.js",
    "revision": "7b645fa144b36dfb574c8584068e225c"
  },
  {
    "url": "assets/js/page-486aacae.feb490f4.js",
    "revision": "37c8cdfa77aa9d9490922af9b1cf287f"
  },
  {
    "url": "assets/js/page-4d521b14.22f4d970.js",
    "revision": "c1872525df86b11e960adc0ebb7225a6"
  },
  {
    "url": "assets/js/page-4d7e2aa5.68e04555.js",
    "revision": "fba72e30dc9f7c6816ac00146c89111c"
  },
  {
    "url": "assets/js/page-4d9fba32.58fcbd0f.js",
    "revision": "969cfd94d6036e7513b3c6925b606d15"
  },
  {
    "url": "assets/js/page-4dc00f25.3e5bd5a9.js",
    "revision": "7cb385c5ce6019aa0503b55a525fe877"
  },
  {
    "url": "assets/js/page-4dc54ba5.41e9a45c.js",
    "revision": "d471fcb8aa8194172b17a3181ef3208b"
  },
  {
    "url": "assets/js/page-4df429d2.84ee102d.js",
    "revision": "b15ffa8380f18bf8d2a90de034329735"
  },
  {
    "url": "assets/js/page-518ca8d8.8f93b9b7.js",
    "revision": "19bf5174b521f5d4e7d8aa6114ce8003"
  },
  {
    "url": "assets/js/page-545b8d99.98c601a0.js",
    "revision": "42e26e53da53908e379abc721c6edf39"
  },
  {
    "url": "assets/js/page-55a376be.57d95334.js",
    "revision": "f882a5331fe19a627619729a3a18f1a6"
  },
  {
    "url": "assets/js/page-59cd63bf.49a754b5.js",
    "revision": "8112dad91d5bfe21a62dbe2ea1ab1490"
  },
  {
    "url": "assets/js/page-5cdb680e.82f9c84e.js",
    "revision": "6c65b5bcd20e7a9aeea44b8df0e4be63"
  },
  {
    "url": "assets/js/page-5de41bb6.418a9359.js",
    "revision": "0d0eb21dadfee2c7c6b5021d38b8f8a8"
  },
  {
    "url": "assets/js/page-5edad598.ef06d61d.js",
    "revision": "52f1bd96b38d3fec6d614da1b147ee55"
  },
  {
    "url": "assets/js/page-63d82e5a.29120479.js",
    "revision": "b4e244470882a0a6d218f29b979f22e5"
  },
  {
    "url": "assets/js/page-64a9a694.ee359dbc.js",
    "revision": "6a05a7f4ed0a54f2b5a36ec5a9651758"
  },
  {
    "url": "assets/js/page-66061c06.c83c601a.js",
    "revision": "7cc12b0aec671ec4186e7ffbadf1a694"
  },
  {
    "url": "assets/js/page-6890df9a.5dcf4451.js",
    "revision": "0e23a144b0c1f28709c2df55d491554a"
  },
  {
    "url": "assets/js/page-68b44e7f.da220126.js",
    "revision": "723be4c82f5d506d292035721089760f"
  },
  {
    "url": "assets/js/page-6dbff0ea.a2384183.js",
    "revision": "015763e20d8b26e98cb3d137141e3963"
  },
  {
    "url": "assets/js/page-6f7fa8b4.611f28bb.js",
    "revision": "948338d8283c3a7e58cbc655493b1f75"
  },
  {
    "url": "assets/js/page-70612fe6.dd9d749c.js",
    "revision": "3ebd7628d92f7e623940ec435376eed4"
  },
  {
    "url": "assets/js/page-720c8312.90ada6bc.js",
    "revision": "35718afaa802949da70de9bc71aaba3e"
  },
  {
    "url": "assets/js/page-74a44f51.323849e0.js",
    "revision": "2fb0481e28f16d10290868d4b20273c5"
  },
  {
    "url": "assets/js/page-7507c3f6.bb3af665.js",
    "revision": "36fd499656ceeb6bf37f26777aa6e9a7"
  },
  {
    "url": "assets/js/page-761a0ef6.b67d2c46.js",
    "revision": "fae7d444068b173fee2dce9267560347"
  },
  {
    "url": "assets/js/page-7690c622.07d4ccce.js",
    "revision": "871a277400826223e5bde79365f776dc"
  },
  {
    "url": "assets/js/page-777196ab.675f4177.js",
    "revision": "816e7cfd7990a06464295de8a396d9d8"
  },
  {
    "url": "assets/js/page-793331a0.3e386412.js",
    "revision": "4c843b13830e0213d609de86876bb25d"
  },
  {
    "url": "assets/js/page-79e60960.c73f7708.js",
    "revision": "52b01798a88921df2e356be6d0739af0"
  },
  {
    "url": "assets/js/page-7ba2451f.54a4389c.js",
    "revision": "0ab62439b013857ea45e8f3745eab3ee"
  },
  {
    "url": "assets/js/page-7bfb30a6.fcd8abee.js",
    "revision": "49c0aa51bd4f3e87c29f2b32c8479f4f"
  },
  {
    "url": "assets/js/page-7d3a6963.e2252593.js",
    "revision": "f8081bb31b954555b237478b4417eedd"
  },
  {
    "url": "assets/js/page-7e6b5e12.bc1efc1e.js",
    "revision": "8f99aea510cd3f2a29d132699aa9ce61"
  },
  {
    "url": "assets/js/page-7f3fbf36.0d89054c.js",
    "revision": "afff5a16c144c69948340cf85a8bb766"
  },
  {
    "url": "assets/js/page-82c2c642.d4199341.js",
    "revision": "3c512191ddb466b51723a058b84cde55"
  },
  {
    "url": "assets/js/page-85f4c948.840aa0fc.js",
    "revision": "dd0c4ec39f1fedd85e8effbedd86df58"
  },
  {
    "url": "assets/js/page-8892394c.e5b7dc7e.js",
    "revision": "66e1b8870a38f07f5e967b84df38acde"
  },
  {
    "url": "assets/js/page-89b130dc.ad3aea18.js",
    "revision": "eef029c66e5c49f6a0082ff033e0cd6a"
  },
  {
    "url": "assets/js/page-8da9df6c.0325ae37.js",
    "revision": "5aceb3adf4b2da5a26ff6b94fa36b2d1"
  },
  {
    "url": "assets/js/page-916af89c.7b88c76b.js",
    "revision": "12a46d420fb606904c9026452d0e20c5"
  },
  {
    "url": "assets/js/page-9a2a43a4.d32d29bd.js",
    "revision": "8bb3e8ee003237e44822f3930fc48f3b"
  },
  {
    "url": "assets/js/page-9ec1a766.59f19eba.js",
    "revision": "54107327733d1aa4596a6ce4a8f8c4e4"
  },
  {
    "url": "assets/js/page-9f0190e0.5900ea57.js",
    "revision": "6966038a4a0fbe711345a95c7fa6d595"
  },
  {
    "url": "assets/js/page-a6174872.a782573b.js",
    "revision": "56b5cf1938bb1bef2f627352034a1e23"
  },
  {
    "url": "assets/js/page-aab392fc.4750434b.js",
    "revision": "8d1dfe496188ab23d55bdc3e22860fbd"
  },
  {
    "url": "assets/js/page-ace574d0.b5e7fcf3.js",
    "revision": "23b627c53a59897c7aabe103315dfc14"
  },
  {
    "url": "assets/js/page-ad24ce34.7be86d5e.js",
    "revision": "7c05de85634a43f28915ce38dbd42add"
  },
  {
    "url": "assets/js/page-b0521034.d36d3225.js",
    "revision": "42d4f67530f9a43a5ea1b25cfe7bfe46"
  },
  {
    "url": "assets/js/page-b0d90ce6.c28d18e4.js",
    "revision": "057d4079b0cfb354cd962528c49f8b45"
  },
  {
    "url": "assets/js/page-b40de7ce.4cfe78dd.js",
    "revision": "0c79877647717d54253070f458a105b8"
  },
  {
    "url": "assets/js/page-c26b0310.eccb8c99.js",
    "revision": "56706296e780510723e82e52901246ac"
  },
  {
    "url": "assets/js/page-c405dd3e.064252d4.js",
    "revision": "e9fa8710eedbc4202f11e95c46dc1213"
  },
  {
    "url": "assets/js/page-c4bdd70e.ebb3cf00.js",
    "revision": "89adc489e7ac605b47a551faa9a60359"
  },
  {
    "url": "assets/js/page-c5f1a60e.55716d6e.js",
    "revision": "5cce9ff08486c79ee69cdbf45ae7425f"
  },
  {
    "url": "assets/js/page-c60be50a.1c1038d7.js",
    "revision": "e8ad3aaa16315c2c51167e811c5e847d"
  },
  {
    "url": "assets/js/page-d3e58f16.80e82e72.js",
    "revision": "da01b1ef0a39e8e9877fa3d7f5914b5b"
  },
  {
    "url": "assets/js/page-d6c4343e.ba4ed77c.js",
    "revision": "7779c4e69197cd95ff02784248e807db"
  },
  {
    "url": "assets/js/page-e468b710.f1b7f8bd.js",
    "revision": "1402b74709b8a64cf2ac41d73ca6fd88"
  },
  {
    "url": "assets/js/page-e72e49e8.e6f5d0b5.js",
    "revision": "dacf97017d5266febfff6e2cb0114df3"
  },
  {
    "url": "assets/js/page-ec44d602.32087b73.js",
    "revision": "7c0fad00d5e007d711f3f03c2ce3df26"
  },
  {
    "url": "assets/js/page-ed303fba.25c16601.js",
    "revision": "986707cb18663c9640ce04caaab03233"
  },
  {
    "url": "assets/js/page-f313c186.4baa915e.js",
    "revision": "2ab795cda76fffbc50ec051f6db7df5a"
  },
  {
    "url": "assets/js/page-f6776002.cdced481.js",
    "revision": "8c2189e72baa2d8132492cef0a4a9318"
  },
  {
    "url": "assets/js/page-fe61e53c.4a041943.js",
    "revision": "a5d9a23d1baa8a750342327160692ed3"
  },
  {
    "url": "assets/js/vendors~flowchart.4d224f2c.js",
    "revision": "5ee53106a7f4ded344556ff07acd9ce9"
  },
  {
    "url": "assets/js/vendors~layout-Layout.7d21b7f1.js",
    "revision": "4d43f8c02c5625ba53379c3dcbcf0039"
  },
  {
    "url": "category/index.html",
    "revision": "5376f5c24a6de46346254dfa78446806"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "cf6f685de6b9065b214042e868bd00f0"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "9b8b7462a8bddd1864e4ed6de4fcde10"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "ac12604cb60b54b00ec74b5cf3b3a7f8"
  },
  {
    "url": "Coding/CSharp/avoid-control-workflow-by-exception.html",
    "revision": "fe0b1f090099c89acf906a694961b1dd"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "7a94aba728a130ef6f49787b5fe4c217"
  },
  {
    "url": "Coding/CSharp/safe-access-dictionary.html",
    "revision": "80c0135af40cb4ef1f983e23879b5311"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "72c39a34c0fb875cf1d00d7038bdf072"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "1139d33ea2e29236442a09302781b46d"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "7df4f835bf5ba5b62466b8dac15dd157"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "32cb2b7d855e600b6bc2ec1140566acc"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "f5e603d73e91d1d11b007d825bcac7dd"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "2d0a898464832953350c237a09283f59"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "39fa07cfb056c0b473a82c0a7b8cdbd4"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "58f568410593c85a632df7234112a1c9"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "ad2f3d803a86992aa05d429812f60fcb"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "2f57d925f6def417ae49a7d32d158300"
  },
  {
    "url": "Coding/Front-End/CSS/css-quarter-oval.html",
    "revision": "eca38dd98f7882b5d5658f14f8f0fb7b"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "a0935d0d53960011e2091f4b18fd314a"
  },
  {
    "url": "Coding/Front-End/Security/開新分頁.html",
    "revision": "7dce8ae96d1e316ef8b9578cc0bbb5a5"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "55563c3c9143f1b99eee350cda7238ad"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "0aeedf4b5cdea7798fb32acccbcd5797"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "71ab6c712b4d378d0e51b3f3e361d767"
  },
  {
    "url": "Coding/JS/publish-package-to-npm.html",
    "revision": "f6509dab1d9a422c1ab38b0f34cd07cf"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "7c42bce3c1ff5249391f3af582440ebd"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/index.html",
    "revision": "c1ce03736d6b2c123453798308282cf6"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/Syntax.html",
    "revision": "abdd6e96ebec08ef45134e8705971e08"
  },
  {
    "url": "Coding/JS/Vue/vue-event-binding.html",
    "revision": "82d3d647ff3093cdd3692754f6fc6d3a"
  },
  {
    "url": "Coding/JS/Vue/vue3-experience.html",
    "revision": "26b61377e40f2e75a8e2feabe87c0f3f"
  },
  {
    "url": "Coding/JS/Vue/vuetify-experience.html",
    "revision": "e690a341eefcd26eaafeafb42fa9e37f"
  },
  {
    "url": "Coding/package-tips.html",
    "revision": "43b976edf32b99cc9045ce652dff538a"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "323c8ee2ed0288e6f92b39559d836a9d"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "1a0e4b86065edac0f3c277ed2fb0274e"
  },
  {
    "url": "Coding/Server/linux/simple-monitor-command.html",
    "revision": "f05110f6f01886a3442256eb4c3839b7"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "0043b7514347f72177a12c47f314da1a"
  },
  {
    "url": "Coding/SQL/sqlite-to-postgresql.html",
    "revision": "a18403f52ab6b3398b8979a69dcdf3dd"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "65e11ca6fffa50fae5fb9509d2653cc3"
  },
  {
    "url": "Coding/Website/heroku/coding-tips.html",
    "revision": "341f67c4b01ddf611bcab6de77b2b272"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/back-end.html",
    "revision": "f1871200bbc80ac01f3faadeeabc2fc3"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/front-end.html",
    "revision": "50581323241ae9c30577a3b1eae45ee8"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/index.html",
    "revision": "05c45983be85aacaed6dbab25db9bb66"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/authentication.html",
    "revision": "a65918e73d584b4166536b2bdca70cd6"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/authorization.html",
    "revision": "fb3828cdb027f105e887f12a91f19b71"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/basic.html",
    "revision": "4d762a1747d7eff1b1d6b1ab2733a4fc"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/page-idle.html",
    "revision": "a7e9e6b69f8dad0c3290cc3a6d90a69b"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/user-setting.html",
    "revision": "5ea77f2295418872e3da617f4c5a9910"
  },
  {
    "url": "Demos/index.html",
    "revision": "0df8c695c3ad52e0f2c513eec7edd0b7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "12ff437e9ed974121d7d6dc7f8bb4319"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "d21f20924b84092ee45bed7c5c3a103d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "e1f5291d403e635ae590d5bed5592107"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "0364f6490b38d9ff8f64078fe18c13ac"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "615cb4221ecafd178c5c14d6b89520c3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "44c6f9c4d7409729062057785e790148"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "140d9715c122dba62ad60ef8ad319abe"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "0be936409f75ef6a29f1642a6e5a296b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "a3df898ec1282e34b9c4d3d85459faed"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "6807a50a1aaf44447a11241d2134a2e2"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "3eea9b6125422a03b69f95a59d893f99"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "a78ecb6d0f1fc95535149475903ef477"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "991a0431ca5b73f582e1628d8cea2ab7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "3b0683fa6f13e59693cffd65a3f0d29b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "66e1eb24d8a0bd03e4601114fc8f4978"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "6124f5c019693407764e5fc47395953c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "5fcf761535f99f56c04bee879e5af339"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "db30747bcdea6828830a0479db205315"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "b83c47fa627d6e59e94cdd1eab6909d3"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "42afa8f2cd0971df3e01e22ae234d458"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "30103f99bfddfa7663415f864f63ab5d"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "6b640ff4bf2daac95409c123e716ecde"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "ae4a8a5650746527c72fb5185d3c1ce0"
  },
  {
    "url": "Game/FEZ/5. 3on/3on共通玩法介紹.html",
    "revision": "30be9af239e841c9bba0294c9fa19b69"
  },
  {
    "url": "Game/FEZ/5. 3on/3on刀玩法介紹.html",
    "revision": "625d993648e1d2dd7d9605edd2035d80"
  },
  {
    "url": "Game/FEZ/5. 3on/3on大劍玩法介紹.html",
    "revision": "437dfb095d2f4c9fa79df9ba81698df2"
  },
  {
    "url": "Game/FEZ/5. 3on/3on雙修玩法介紹.html",
    "revision": "fc71b84c1a1792cfb48b573437e24e3c"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "3986ccbbd6e02cf7b73e9ec254407fca"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "8b35722bbda1e5a27834e29b7b8674e3"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "f23a6b6c549c27f342f920e23a03623f"
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
    "revision": "07d89352ae2b0b34629ef128edfad17a"
  },
  {
    "url": "Psychology/index.html",
    "revision": "40538aa80cf4fa52e9b56639ccf7a32b"
  },
  {
    "url": "Psychology/人群現象.html",
    "revision": "aff870686791e0b8bb4a151088806745"
  },
  {
    "url": "Psychology/價值判斷.html",
    "revision": "c12950439fc03bb3fe4d7fa27ac6fffb"
  },
  {
    "url": "Psychology/決策.html",
    "revision": "3c829507383024f922ce401ada967018"
  },
  {
    "url": "Psychology/溝通.html",
    "revision": "813271a2efe80d194a344e830f13ddf7"
  },
  {
    "url": "Psychology/組織合作.html",
    "revision": "10422c26a835d0c0f615c4c617eddc3d"
  },
  {
    "url": "Psychology/認知.html",
    "revision": "2d1b2241911616ffe25118bd0cfcf8be"
  },
  {
    "url": "search/index.html",
    "revision": "37adae2d084107795419dccdfeff47b8"
  },
  {
    "url": "tag/index.html",
    "revision": "5e2be7452b8dbad6c509e0aa139223b5"
  },
  {
    "url": "VueJCBlog/Config.html",
    "revision": "a92d277ee03a72c2f5b725efbbed7ae1"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "86e35cd286cf608595619366317ff8b4"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "2184003fca95da6bc885a52f91c334f3"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "a688411eeac96571591af3e4b0be3834"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "846628abf5248a03c701718d70dc3b14"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "29046b9b41ebea170461062b67bd5ec6"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "9fff75110bcf4430bf92ec3976337a35"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "9b2cd59cc1c81587c40c01ae3d90c532"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "c75c25562648a1943e235ab42f9f1629"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "ac11cbdddf9096475ffe8678215f4514"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "48ce6f1131f1f48da8c282d6cab1e793"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "15baa64cbb632c7012fcab8f242cb815"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "4ce784a3c7144872f11a16ef4f01b5f8"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "92faba437e00174198175a7e7977e19d"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "9216988fdbeb848a49b7f1a561dd08e4"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "dc79b4baf6475c7b0bfd6f9cb7d74173"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "c1659c85fa9a2c1323eda0957d565fc2"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "4abd8d7d702d64d7604ccff3e8d46133"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "5f2bd59c86b31fbfa62b1e89b4081eff"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "8e391900364ec19901c04c17ee3cdc31"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "84e995ffc9083317695a2510c0212f59"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "e00cf88ca55be8c1fa407dc0a206eb0c"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "59f5a3deb5d0e25ed2db0f0a545c52f4"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "a37b59274aee4757d72a520872dab336"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "424f396f48c6c466987276fbcdb694d6"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "487a1acd71dfb8e59828ce39dc5644e7"
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
