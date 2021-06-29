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
    "revision": "a392929986fd0cc678701a700ea3879f"
  },
  {
    "url": "About/index.html",
    "revision": "14df2e75e921097f83998550c92ba9d8"
  },
  {
    "url": "archive/index.html",
    "revision": "ae7dc43017e410b0d575422deee30844"
  },
  {
    "url": "assets/css/0.styles.9984fa41.css",
    "revision": "c7f88921b66a3303ed124a503a00b7c5"
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
    "url": "assets/js/116.04edb76b.js",
    "revision": "581cac607a5bc38115730708be960dcc"
  },
  {
    "url": "assets/js/117.ac275b69.js",
    "revision": "b00ab4ddadf420147b3fb05a2747d24f"
  },
  {
    "url": "assets/js/118.ff18e79b.js",
    "revision": "5b36abb37d4ab1c291d04fcd2913e73a"
  },
  {
    "url": "assets/js/119.c856bbc7.js",
    "revision": "7055fe29c99b0d5b82c14eb1db0d5829"
  },
  {
    "url": "assets/js/120.9c35d03e.js",
    "revision": "b9ae22b975fda9f014b76335336f41dd"
  },
  {
    "url": "assets/js/121.4c5a24a0.js",
    "revision": "1b2143d2c416a09fbcd5ea4e6690f39b"
  },
  {
    "url": "assets/js/122.6f26c9b4.js",
    "revision": "6fabd5b7ad647fc2b3184ad24c8090a5"
  },
  {
    "url": "assets/js/123.31b79da2.js",
    "revision": "342b96facf84361fd2e26969a7660b1d"
  },
  {
    "url": "assets/js/124.cf0261c9.js",
    "revision": "8546e57a13070c1703f0ca25c5a0ab27"
  },
  {
    "url": "assets/js/125.69c7d910.js",
    "revision": "ef00ce04d02fddf10c906ca054ef282e"
  },
  {
    "url": "assets/js/126.32d079e6.js",
    "revision": "b81d59cfe62eed5ffd06acd15b016bed"
  },
  {
    "url": "assets/js/127.837a3a82.js",
    "revision": "75449edec0b54cae01d2c2904ca3ab3f"
  },
  {
    "url": "assets/js/128.b1694b54.js",
    "revision": "c631f587faa541eb605452d502932e26"
  },
  {
    "url": "assets/js/129.8465e37c.js",
    "revision": "8feaec35a7b9c7ce1988109264da37e0"
  },
  {
    "url": "assets/js/130.9ac035fa.js",
    "revision": "e81aa527813e9898fb7322415e97e606"
  },
  {
    "url": "assets/js/131.fd3bd900.js",
    "revision": "458b1b22e70ce833db7588e567c01afa"
  },
  {
    "url": "assets/js/132.6f6776e8.js",
    "revision": "d492401b2a5d5b2c46336e6a13839271"
  },
  {
    "url": "assets/js/133.9716d0e0.js",
    "revision": "0c551f130a74eba357d599f826b67e9a"
  },
  {
    "url": "assets/js/134.6d4c14ab.js",
    "revision": "4673dcc0b526867ec5e43e25db05c8d1"
  },
  {
    "url": "assets/js/135.ee7b8cd2.js",
    "revision": "26d4ec30bdd0ed7897bfb472234fa248"
  },
  {
    "url": "assets/js/136.cd9a8afb.js",
    "revision": "96dff697435b0aa0e63792891695cc26"
  },
  {
    "url": "assets/js/137.b4e66c79.js",
    "revision": "e54eadb431541eeb3df353478522a307"
  },
  {
    "url": "assets/js/138.f82ac177.js",
    "revision": "60000d9be7e6fbd1a74c9b708b5eb15a"
  },
  {
    "url": "assets/js/139.9ad3847d.js",
    "revision": "3b91e4ed347035defeac0380338257fd"
  },
  {
    "url": "assets/js/140.664c056a.js",
    "revision": "431e54bbc3b145f54b7e9e0f1f9105c8"
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
    "url": "assets/js/layout-Layout.29445450.js",
    "revision": "0c41761fa6ef764f33b3157f6f941024"
  },
  {
    "url": "assets/js/layout-NotFound.351563b2.js",
    "revision": "83fdd7a8cca57f3ee456d8563027b514"
  },
  {
    "url": "assets/js/page-0193e625.cbe0c876.js",
    "revision": "ec14e06de6b29011a896843a163a239c"
  },
  {
    "url": "assets/js/page-021b3aa4.9b00c44b.js",
    "revision": "f11228dbb3c4883c62ff9c1c1ecd9474"
  },
  {
    "url": "assets/js/page-0a921c99.cccbfc74.js",
    "revision": "b61db3ca718a3213c8c4385bcf38bc88"
  },
  {
    "url": "assets/js/page-0c6c4d65.5c8e3650.js",
    "revision": "62ba41edf5d2fc441924a1655626fede"
  },
  {
    "url": "assets/js/page-0c7f77bc.69a91bf3.js",
    "revision": "adf49d4e3c36152264a4fb5a7ca8257c"
  },
  {
    "url": "assets/js/page-0d32e5ee.4073d4ab.js",
    "revision": "34e48a1c768f36621bdf413ad5e89cf2"
  },
  {
    "url": "assets/js/page-0e69d9d2.17047452.js",
    "revision": "7099004c535c567e3d68af775641e74f"
  },
  {
    "url": "assets/js/page-1080dbe2.3c97bc00.js",
    "revision": "190f75ce668b66df0e66eda1b785a30e"
  },
  {
    "url": "assets/js/page-11a8df82.4cea3682.js",
    "revision": "2670a6c07ce9184501a87f1fc92ddb94"
  },
  {
    "url": "assets/js/page-1486eb54.958c3954.js",
    "revision": "a85a93b19343840058d45064980882cf"
  },
  {
    "url": "assets/js/page-177d640c.72680242.js",
    "revision": "03ea9d6a35c5cbcf2e806b86b4465798"
  },
  {
    "url": "assets/js/page-1a34eb5d.fc52abac.js",
    "revision": "6345b3eff8be12067fb01edda49be8cc"
  },
  {
    "url": "assets/js/page-1c4a4e12.385c1707.js",
    "revision": "8da66cda9439b02743dba180defd89c0"
  },
  {
    "url": "assets/js/page-1ccc22d8.f18fb3c5.js",
    "revision": "39a0b87cac2e69d36e7c5f01ef5bc601"
  },
  {
    "url": "assets/js/page-1db42de8.1b9883d3.js",
    "revision": "7a7a072a7204ae48003180ea06b0794c"
  },
  {
    "url": "assets/js/page-1e536af9.bf024de0.js",
    "revision": "e18d9e08fad14c5b6fda7515255d2797"
  },
  {
    "url": "assets/js/page-21fcb945.ec0399d3.js",
    "revision": "b9d026dbaa753b6d688683caf9ee338b"
  },
  {
    "url": "assets/js/page-25bc4f18.b58fbbb8.js",
    "revision": "a46d32a01f3ccb357473b665c0ba614c"
  },
  {
    "url": "assets/js/page-27f6ecec.04d3fd50.js",
    "revision": "e2df9a4efc77c297a0ff9e1959019ef3"
  },
  {
    "url": "assets/js/page-29c918e5.b244c75e.js",
    "revision": "d170b844de9246bff3b819fdf40cd87a"
  },
  {
    "url": "assets/js/page-2c6bc4ab.7a9acfdd.js",
    "revision": "097304a064eae261c181e99486f8e5be"
  },
  {
    "url": "assets/js/page-2e8c0cd0.5980fb01.js",
    "revision": "0668282fc4c8dc8233f147d5c69f0583"
  },
  {
    "url": "assets/js/page-302e6251.28c13f5d.js",
    "revision": "7cb7ada5440028a42e79d372785aa2d0"
  },
  {
    "url": "assets/js/page-320aac86.bf2cf2b8.js",
    "revision": "7a305e5d2b8d980054f8b02ceba39663"
  },
  {
    "url": "assets/js/page-339369e0.497f9705.js",
    "revision": "290d979cc9448b83c266ac069cedfdd2"
  },
  {
    "url": "assets/js/page-36d5d2b3.7bba3fcf.js",
    "revision": "de975457496753653aeee073f9c720ca"
  },
  {
    "url": "assets/js/page-39e05f8b.0875809c.js",
    "revision": "bd9ff473d4ce004ec48cb63119ac66f4"
  },
  {
    "url": "assets/js/page-3ab0cb1c.d138b225.js",
    "revision": "e1f1a1379e9d87fa81ce151fb6840b3e"
  },
  {
    "url": "assets/js/page-3c8dbd4b.c82e45b6.js",
    "revision": "dad8c2f4f01e93b4bc6d97241f90f246"
  },
  {
    "url": "assets/js/page-3cdc4745.64111097.js",
    "revision": "2a5c8044f047512905f947210fbb3511"
  },
  {
    "url": "assets/js/page-3cfa4e13.17b20dee.js",
    "revision": "274d135ec889654f031d3f28e163a779"
  },
  {
    "url": "assets/js/page-3ff73aa5.5ba7ac73.js",
    "revision": "af6e48d0d036464e0c14e2a0b668853d"
  },
  {
    "url": "assets/js/page-4107293f.a843750e.js",
    "revision": "c6a116dc78303931f7a236aab5f7d683"
  },
  {
    "url": "assets/js/page-4144513c.1cdd4195.js",
    "revision": "dd4766ee617f5f4dceb8ac15fdca2537"
  },
  {
    "url": "assets/js/page-422a7e52.85359ce8.js",
    "revision": "d2b6fcca315ab9806eded3f34638c9cc"
  },
  {
    "url": "assets/js/page-445c88ce.92dabe6e.js",
    "revision": "a0361ff678fa2fe680da4aa38de44a0e"
  },
  {
    "url": "assets/js/page-4478a866.97464351.js",
    "revision": "e6175521b29644f51c7b73ed3fdc0cf7"
  },
  {
    "url": "assets/js/page-455360d1.409239c9.js",
    "revision": "11da815e22e522531ef6ef37e0be772f"
  },
  {
    "url": "assets/js/page-47f71914.4afab433.js",
    "revision": "53d78e238d62c88f97b359c216f78bbf"
  },
  {
    "url": "assets/js/page-4829d184.186db358.js",
    "revision": "73d04d2a58ac92e3c11b4a42968eeff9"
  },
  {
    "url": "assets/js/page-486aacae.1b9cbb90.js",
    "revision": "9c0827926316e7358f6f05c668138e5f"
  },
  {
    "url": "assets/js/page-4d521b14.8c8801aa.js",
    "revision": "0b3b723f6be67d6c328191fc56dfaf8a"
  },
  {
    "url": "assets/js/page-4d7e2aa5.86be9444.js",
    "revision": "1eb8b2fb58e2ca1565623cfe8f418efd"
  },
  {
    "url": "assets/js/page-4d9fba32.a732da2a.js",
    "revision": "465dda9e71044fc3a0b286d3bf119e01"
  },
  {
    "url": "assets/js/page-4dc00f25.b04f5f2a.js",
    "revision": "a217e44e3b6667be79e36015d124bd9a"
  },
  {
    "url": "assets/js/page-4dc54ba5.f01971f8.js",
    "revision": "22f43b9e179c0ed04c36c43de5e3f3f0"
  },
  {
    "url": "assets/js/page-4df429d2.277acbee.js",
    "revision": "42ce93a0d0ad95ced88e435d296cc626"
  },
  {
    "url": "assets/js/page-518ca8d8.5aa8f541.js",
    "revision": "ffc2fb96ed1f2195368c70286d428df4"
  },
  {
    "url": "assets/js/page-545b8d99.3f33c018.js",
    "revision": "796f9c17ec75ccd83c72db8e08c2fe8d"
  },
  {
    "url": "assets/js/page-55a376be.327c1be1.js",
    "revision": "8d9600aaf77672e88ccd61befced7b59"
  },
  {
    "url": "assets/js/page-59cd63bf.2d68c60f.js",
    "revision": "6bf67b3e49b55336ee02d67876315d02"
  },
  {
    "url": "assets/js/page-5cdb680e.a85dc101.js",
    "revision": "bdc14ad2dc78b635bd6d207426961d90"
  },
  {
    "url": "assets/js/page-5de41bb6.ace3166b.js",
    "revision": "5928a29161c3fd22ea53049340a82e5c"
  },
  {
    "url": "assets/js/page-5edad598.1b989a83.js",
    "revision": "71ac94ca05cca6adcd5a2997f7def4c7"
  },
  {
    "url": "assets/js/page-63d82e5a.dc3d864f.js",
    "revision": "3f4fad0ff6ce8b96a236213a4ed8a655"
  },
  {
    "url": "assets/js/page-64a9a694.95c3a694.js",
    "revision": "6661e8ff130626646360537a2f098140"
  },
  {
    "url": "assets/js/page-66061c06.ebbb2650.js",
    "revision": "ab2ecdc980cf72f1098d4cdd6d6f8cda"
  },
  {
    "url": "assets/js/page-6890df9a.ff970e97.js",
    "revision": "a298f72ab7fd0a864d1d621727279eed"
  },
  {
    "url": "assets/js/page-68b44e7f.e22b7cf6.js",
    "revision": "0e4a7ce76f946c9e762ad27dc596590e"
  },
  {
    "url": "assets/js/page-6dbff0ea.b2f17958.js",
    "revision": "8c4843a9b7e69c031f6115475e6fb8f3"
  },
  {
    "url": "assets/js/page-6f7fa8b4.36df2ef0.js",
    "revision": "2321dc6ab82714c29105a4c116d3c023"
  },
  {
    "url": "assets/js/page-70612fe6.59a14a9f.js",
    "revision": "34feb3a1e716ccc29cca703873430a2c"
  },
  {
    "url": "assets/js/page-720c8312.8e3348eb.js",
    "revision": "23b988eb65c6d4b91054847d96ff6209"
  },
  {
    "url": "assets/js/page-74a44f51.0db1d555.js",
    "revision": "8105515c4b845292504a5c894f0873c8"
  },
  {
    "url": "assets/js/page-7507c3f6.d76cabb4.js",
    "revision": "8ed093a22ed61beb1f46546020de6ccc"
  },
  {
    "url": "assets/js/page-761a0ef6.5af0ec47.js",
    "revision": "68f0aaa54b6c266ef2b421750fbbaa04"
  },
  {
    "url": "assets/js/page-7690c622.3dc4499b.js",
    "revision": "cd23a902709d5d5ba8ff82a35d2037d6"
  },
  {
    "url": "assets/js/page-777196ab.d9ad236b.js",
    "revision": "e1591de445c7b1c1d0e845177b9dec70"
  },
  {
    "url": "assets/js/page-793331a0.e07e1c2d.js",
    "revision": "72b9ccd5025f55d0ed58ef87f3c68dbe"
  },
  {
    "url": "assets/js/page-7ba2451f.179b57eb.js",
    "revision": "6bd7df30376edd0da75fb92752cc7453"
  },
  {
    "url": "assets/js/page-7bfb30a6.5d6e04d1.js",
    "revision": "d78af28a92e0e5358bcf035d73df064c"
  },
  {
    "url": "assets/js/page-7d3a6963.c78fa884.js",
    "revision": "1e9dfc9cbe297ce276da9ceddec795eb"
  },
  {
    "url": "assets/js/page-7e6b5e12.b552635b.js",
    "revision": "d2a11d4672cc79373121897d84f79b7a"
  },
  {
    "url": "assets/js/page-7f3fbf36.a8f2b6c8.js",
    "revision": "4d09126b694f5048f89ca7bc48f35402"
  },
  {
    "url": "assets/js/page-82c2c642.e3854d1c.js",
    "revision": "779fc5a61a868a42675d02d7c8a04cc4"
  },
  {
    "url": "assets/js/page-85f4c948.69ae9102.js",
    "revision": "1c81da49a795cd77870809b559d3965c"
  },
  {
    "url": "assets/js/page-8892394c.ddd8d18c.js",
    "revision": "46e04ca88bc5849d7bdd3e8c3df685b7"
  },
  {
    "url": "assets/js/page-89b130dc.b8d4e330.js",
    "revision": "e6a83c4d1cdc4b76f415a501b12f9ae7"
  },
  {
    "url": "assets/js/page-8da9df6c.548e81c5.js",
    "revision": "523093f50b11f40c8f37a32cdaca9e6d"
  },
  {
    "url": "assets/js/page-916af89c.ad474bea.js",
    "revision": "671cb08f78aeae7e84a95420e4f4e62e"
  },
  {
    "url": "assets/js/page-9a2a43a4.6ca0891e.js",
    "revision": "d7841a25ca502e6a8381664acd252ce0"
  },
  {
    "url": "assets/js/page-9ec1a766.54087ad8.js",
    "revision": "c60b4f602a6f36b116ad3bfe71c13bc3"
  },
  {
    "url": "assets/js/page-9f0190e0.22f5787c.js",
    "revision": "c23ad7550d7c90683838bf02860a25dc"
  },
  {
    "url": "assets/js/page-a6174872.2d1f5570.js",
    "revision": "80730bb0b8798740bacbf970b8f6d6bc"
  },
  {
    "url": "assets/js/page-aab392fc.65cc7f74.js",
    "revision": "a25dcb4a561135de00028a7f42bf7789"
  },
  {
    "url": "assets/js/page-ace574d0.80a70d5b.js",
    "revision": "37e3e63c39f3e004c03fe410afa2c26a"
  },
  {
    "url": "assets/js/page-ad24ce34.9a4beafa.js",
    "revision": "969dd58fdf8038f40b7f571cfeed25c1"
  },
  {
    "url": "assets/js/page-b0521034.a92bbb5a.js",
    "revision": "e49ec5484109863b13eca3960b11e206"
  },
  {
    "url": "assets/js/page-b0d90ce6.363e672e.js",
    "revision": "7beb9a9877e39ff0f8efa2e6df5373f5"
  },
  {
    "url": "assets/js/page-b40de7ce.f5a54743.js",
    "revision": "fc712dc3f616d1133cfafd52fbe69faf"
  },
  {
    "url": "assets/js/page-c26b0310.1dd6a2c0.js",
    "revision": "7db1e6ed9b56758ab30cfcfae50b2665"
  },
  {
    "url": "assets/js/page-c405dd3e.81b35c7f.js",
    "revision": "63f857fbc9cd115170136fea9bcf0f82"
  },
  {
    "url": "assets/js/page-c4bdd70e.f5d3301d.js",
    "revision": "7259b44d11393d2ec7b30f73bbdc8e32"
  },
  {
    "url": "assets/js/page-c5f1a60e.2ae26796.js",
    "revision": "2f92414e994761326a1703c6c96d09a8"
  },
  {
    "url": "assets/js/page-c60be50a.9e74594f.js",
    "revision": "fd1783a60eee244fef0f3385d49ebdf8"
  },
  {
    "url": "assets/js/page-d3e58f16.0ea89e68.js",
    "revision": "619f9f1b400a7c0a58ab60023df0458a"
  },
  {
    "url": "assets/js/page-d6c4343e.901c8fcc.js",
    "revision": "59b998d9d7468b77b1c338a7704b61fa"
  },
  {
    "url": "assets/js/page-e468b710.06c080a5.js",
    "revision": "059245ebc2496b1f4935055393947c56"
  },
  {
    "url": "assets/js/page-e72e49e8.f8251eb4.js",
    "revision": "8f3c713e4a53712b7598eff6a9962d66"
  },
  {
    "url": "assets/js/page-ec44d602.194ac997.js",
    "revision": "90b30e1ac6c133b9d5e214522d2a6b7d"
  },
  {
    "url": "assets/js/page-ed303fba.b05c9305.js",
    "revision": "0dc6ae17febd5053d39f9d731bf497bc"
  },
  {
    "url": "assets/js/page-f313c186.fd7c616e.js",
    "revision": "53e81e6b1ef3b15de8d79941575a26ac"
  },
  {
    "url": "assets/js/page-f6776002.5077cb03.js",
    "revision": "169a9946a0f09076b499859d79302134"
  },
  {
    "url": "assets/js/vendors~flowchart.fa9e1e07.js",
    "revision": "c2f16a38a9563012f1676aee15fb2fb0"
  },
  {
    "url": "assets/js/vendors~layout-Layout.95643146.js",
    "revision": "c95f1fc663b12d62bffdb5e474e19cef"
  },
  {
    "url": "category/index.html",
    "revision": "e7e33cd6fd521694ad30fc94c535be1b"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "c7530278b3bbae36afa8643cc0427f22"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "63f27562217ef2d39a955ead979e71a9"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "02def8099ff7205615f87bca1cc1fdb3"
  },
  {
    "url": "Coding/CSharp/avoid-control-workflow-by-exception.html",
    "revision": "4c0981e995948da75c5bb24b59a43177"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "e8c291eef9e10dd4f136e604b2f9158c"
  },
  {
    "url": "Coding/CSharp/safe-access-dictionary.html",
    "revision": "9c464cdde5424396a7f7ec81c07c714a"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "58ceedced471462e8b5ce519bd8164f3"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "b0490bf2d400db05abdeea8836d98ae7"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "bfd7b9c912a58365e268abe4f6ff3e8b"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "9a6c61b91da73057ec104d7d451b8ea3"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "f6f52b556a9cf925f8b1828379745327"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "e81c5280a9ae3a11d42ad1a59e0f61e7"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "281f9d90003e2ce4edb6ea9714bd581a"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "ea07aa4c2235ce8ccd4651510a9eddb1"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "2277283bd7ec849e1529620b346d674a"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "9d9ddda05345342eb12b6863101b63d7"
  },
  {
    "url": "Coding/Front-End/CSS/css-quarter-oval.html",
    "revision": "2ad345b75a271027bdc1c7fb2b0ed8bb"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "a4d37f8c74298c02af36d111698e601b"
  },
  {
    "url": "Coding/Front-End/Security/開新分頁.html",
    "revision": "07b303e978ba1637a35b7c98272529d6"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "254144cc86d0d3846e7414a020a8279f"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "f0134eeb794c78542da41ca7f38d4b5f"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "d6f2099f091b0a2268f0d8bdda89dd16"
  },
  {
    "url": "Coding/JS/publish-package-to-npm.html",
    "revision": "7940e99dec34b4499db7d8b20d9a03fa"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "84e24ab6d588a70e8c86f8d983704acb"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/index.html",
    "revision": "4ef83187888bc32f901cb94d3a00612b"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/Syntax.html",
    "revision": "1a4b712b7fc4cea280327f79be3518b7"
  },
  {
    "url": "Coding/JS/Vue/vue-event-binding.html",
    "revision": "d91c6394006c99998a2bc3eb8d62b89d"
  },
  {
    "url": "Coding/JS/Vue/vue3-experience.html",
    "revision": "41ba36414a7ad3648d6cbb5f7107bf7f"
  },
  {
    "url": "Coding/JS/Vue/vuetify-experience.html",
    "revision": "f785a65dd4717651fb3d1b41601bb90c"
  },
  {
    "url": "Coding/package-tips.html",
    "revision": "913fc9308afcf0e81cb43c631fb25efc"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "9508090b094205b49d02ab34127673fb"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "04973b09114c5ee190b1c1e97115efec"
  },
  {
    "url": "Coding/Server/linux/simple-monitor-command.html",
    "revision": "a062927ae85d1ebeb2caa4cb6d2f4105"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "ffcfe99644cad80d36b3c5a20459f5f2"
  },
  {
    "url": "Coding/SQL/sqlite-to-postgresql.html",
    "revision": "496348d3c967842bab4ceb8d564fce01"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "38048e9b1fdfbc0a97b12857f8ec5568"
  },
  {
    "url": "Coding/Website/heroku/coding-tips.html",
    "revision": "5ec9927ace9b7a205372bd11b7cd48ec"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/back-end.html",
    "revision": "47a0c9ab7467f12a91fd376b426ff8c4"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/front-end.html",
    "revision": "8b4f5b6e9888c3020903db66963a9c2a"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/index.html",
    "revision": "59acde7914075a0e0c8349c0252427b2"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/authentication.html",
    "revision": "dfb772939fd7d4e123ced15d69ebcbab"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/authorization.html",
    "revision": "59d3ea9dc32d051e0d732fdd5bb5e3d4"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/basic.html",
    "revision": "26153039ec4c38cf8e505ed933a7f222"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/page-idle.html",
    "revision": "e9d79f365fc65ed6a1945216bbf7e4b2"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/user-setting.html",
    "revision": "36ec6fed523e36f695f86a40566f959b"
  },
  {
    "url": "Demos/index.html",
    "revision": "14aa69707fbe8a98ee0956b0cd22f663"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "fa5fa21540b97b75cad4990eaf4ca860"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "e155dcba5c608a66313983480fe9541e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "4eed3b46c4765d110429064fa5a6dc82"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "c8e10a83fb422565e8f4482e9643adcc"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "3a0b3760a2edf38508b36a7ea210a8fa"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "d5eb3417811666eb33e4b78f68cb8a8d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "3708876f904175dca468bfab10e3c13b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "a3bfd8b367c2973e530223b3da97b434"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "400848b5078a3da6f921003e771c1216"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "10ea4eed82c0f5915773f3bcb242bc3d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "a745679bd3364ce3b54c4b55c0e9d74b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "70a2f7ec456e633b441a3aac8fd86084"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "2480279d3b74aa63dd237ca85b88df5c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "1003e86e45303dc4c37d511478fba6e1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "15505b8147cbc321dea48eebc9fdffad"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "deaef1b9c092f551cded4d88a6ed9035"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "ce50c0208b5529b403d61cb241625e86"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "496a2a1b2e87c950f745ed60b23e58da"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "eb0e1a4d092b5c9c39fe4aab8761e824"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "d33371fada8fcc8e13627647ee93f849"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "731125bc876ec0da70af6b5b20730252"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "55e88451bde7ce12c8769a4a3b2ceaed"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "b6fda7f80c3440f58b9b478f7df9fad7"
  },
  {
    "url": "Game/FEZ/5. 3on/3on共通玩法介紹.html",
    "revision": "4828a2b094f6d40906bcc8058e6780cf"
  },
  {
    "url": "Game/FEZ/5. 3on/3on刀玩法介紹.html",
    "revision": "eb16a1f4424a8828b48a9ef4153fc6ba"
  },
  {
    "url": "Game/FEZ/5. 3on/3on大劍玩法介紹.html",
    "revision": "f36cb1aea030fdef64b2d9778a3ff48e"
  },
  {
    "url": "Game/FEZ/5. 3on/3on雙修玩法介紹.html",
    "revision": "1dd86430c9de9eae9b39c6f3c0c5a53d"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "7b5f19f19292f9d96d7ecee177b262b2"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "2141790ec52cde6e934e5ea870f20135"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "726a27378b8cec9cd0f9a7cde60ad5b8"
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
    "revision": "77f4707f88bada6ead44dee69b2a84ec"
  },
  {
    "url": "search/index.html",
    "revision": "89ece18e0c585d63656fb74aeaa4d87e"
  },
  {
    "url": "tag/index.html",
    "revision": "b5a97774b7392fc395df4d1318bcefc0"
  },
  {
    "url": "VueJCBlog/Config.html",
    "revision": "e4e25d531004d49c90cb1f9dba0907b8"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "f39d134f8458e959bd7942ce9e8129ac"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "1d734624d8546bfdf345c7462c19cf13"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "c819088ef2ca1d62dfc89e32272ef368"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "efa4561ed9197e78fba638cd28f4e1c0"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "7dff1f580358ea2fb3c05210c2913c50"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "99562670a856753d3a24b17680154802"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "dfe32635847737eabb0a71c85f9a2593"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "2148e64a3602829a4555a7f79cf59662"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "995daf03e3c90f8d3ad55c4847fa4b6a"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "a3cf487bcc12ea92b14da2e5671082d7"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "0657521bac76e7661795d22246dee2c5"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "c8681e8d5232acf2712fc410d9994bdc"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "a9262badd5aa4a6c293057bfb43818b3"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "dc3935b906239b52d5d5ead29b976d12"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "063b04af553ff14b6e1b565ba2f938f7"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "a5c5c8ed7fcf998d27ac64a189a9c0f0"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "42539724ba5b51018b8a80f24b5f55c6"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "59f9e5e5a88d32467513a930ae2b1155"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "af08b6f5a7fe3dba9d32228de724a7c2"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "97354f32fe3944d4a04d1cf41de034a8"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "5ed6b69f3cd34de5efcfc149f1043398"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "35e49f6fbf2abf8a95d5d4210868f21d"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "7725ee5d6bc6987d2effe0bbde7eab73"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "4db868ad9b6768ee9f10c674b3a9a8fb"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "f006ab10443c1e12c8718c640a20e7ec"
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
