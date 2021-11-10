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
    "revision": "b9db1390c4e171d6ba6d547daa846284"
  },
  {
    "url": "About/index.html",
    "revision": "541a18ec5674abb425f7993d28dd46a7"
  },
  {
    "url": "archive/index.html",
    "revision": "ac15ae6abb2112a0aa2f19e9f24e06c0"
  },
  {
    "url": "assets/css/0.styles.4e4bcf6a.css",
    "revision": "87710792d8ecef823c7224600a0babc0"
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
    "url": "assets/img/alt+f12-preview_reference.8972a8d9.png",
    "revision": "8972a8d912eca15b07940aeeaae7f59d"
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
    "url": "assets/img/ctrl+dot-auto_add_using_package.007f4392.png",
    "revision": "007f43926678c0d4cec6e5126bde81b0"
  },
  {
    "url": "assets/img/ctrl+dot-auto_create_constructor.f833adda.png",
    "revision": "f833addab56f911e38053bb1453cb1dd"
  },
  {
    "url": "assets/img/ctrl+dot-auto_create_field_or_property_from_constructor.a98b3a83.png",
    "revision": "a98b3a8320f134110f4cbb4661eed2b4"
  },
  {
    "url": "assets/img/ctrl+dot-extend_constructor_parameter.c253df2b.png",
    "revision": "c253df2b8eff5ecdcc61a3ff3244df5c"
  },
  {
    "url": "assets/img/ctrl+dot-extract_method.aa0975c6.png",
    "revision": "aa0975c68d9b71bc6806643abe6a28aa"
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
    "url": "assets/js/124.dca022f2.js",
    "revision": "3865e32a746dd3ef85e11587b38991ad"
  },
  {
    "url": "assets/js/125.2eda4525.js",
    "revision": "b461e9fbf18a48f54f0979288271a0f1"
  },
  {
    "url": "assets/js/126.ddc4b150.js",
    "revision": "881e40f82f4933be78412fcae3f169ca"
  },
  {
    "url": "assets/js/127.b0cb9c74.js",
    "revision": "1f9905d4dcf4e411ac44a1f013eba3ff"
  },
  {
    "url": "assets/js/128.7362fdda.js",
    "revision": "2180363e20b0d150ad3a903f76b7b430"
  },
  {
    "url": "assets/js/129.9db3eacc.js",
    "revision": "b6b2960202d23e3568736ee5724fe853"
  },
  {
    "url": "assets/js/130.f392865b.js",
    "revision": "f012360cbdf0cb699b080ff95567b873"
  },
  {
    "url": "assets/js/131.dea36333.js",
    "revision": "18e2b390f5a97ef47d896a28c90fd83b"
  },
  {
    "url": "assets/js/132.e6941e37.js",
    "revision": "cfc3d47728cae940dcfd046aced2bf62"
  },
  {
    "url": "assets/js/133.b0256384.js",
    "revision": "33563f80ec6281407301c06c89fb55ea"
  },
  {
    "url": "assets/js/134.c2c9d1b7.js",
    "revision": "7ce4dd3c8619cd332c1af98f602ad897"
  },
  {
    "url": "assets/js/135.95dafcb8.js",
    "revision": "e65323dbf8d41765db764db2f1a158c9"
  },
  {
    "url": "assets/js/136.88a9d282.js",
    "revision": "30825a47c628dee8d2331a98c264be5c"
  },
  {
    "url": "assets/js/137.3a2e89e4.js",
    "revision": "400780ecaa79eb636b5af12ddcec964d"
  },
  {
    "url": "assets/js/138.92c7b617.js",
    "revision": "b38967b4514a9ffe05d9b74a00dfa14d"
  },
  {
    "url": "assets/js/139.edba41b3.js",
    "revision": "1ca174a1269bccabbdf86a2dc5b1647f"
  },
  {
    "url": "assets/js/140.99554f2e.js",
    "revision": "a19550ade5ecad5ca29acdb20b8384e5"
  },
  {
    "url": "assets/js/141.e65f132d.js",
    "revision": "6eb04ec18f8bb30c8e905a7dcd03a0ce"
  },
  {
    "url": "assets/js/142.466361c4.js",
    "revision": "5a72b578ec8e2a13843bd499fcdc68b9"
  },
  {
    "url": "assets/js/143.e9ada836.js",
    "revision": "ca873f3ce8b8fb4bf7f9d472ff44c9c5"
  },
  {
    "url": "assets/js/144.3b6ee041.js",
    "revision": "e16ce5182b9ecd06cdcdcd0476146cb0"
  },
  {
    "url": "assets/js/145.9ab9cbc2.js",
    "revision": "cde4d5483e26784842b5757056ff7ddb"
  },
  {
    "url": "assets/js/146.b7611974.js",
    "revision": "b1ea00b724e2fb2610dafc84f97de20a"
  },
  {
    "url": "assets/js/147.4579f0da.js",
    "revision": "28e600c1c2a5414ba6dfcbab9f300530"
  },
  {
    "url": "assets/js/148.66fae617.js",
    "revision": "9a6c7654ba7f9242d8160136b06a4b5a"
  },
  {
    "url": "assets/js/2.c75f8704.js",
    "revision": "cd204939983382ea97e30b00f10de059"
  },
  {
    "url": "assets/js/3.2283a985.js",
    "revision": "e7238e06327c07121a11ff53354a6700"
  },
  {
    "url": "assets/js/4.92687a32.js",
    "revision": "21a87abffdf3f02f58c116ffeec791ea"
  },
  {
    "url": "assets/js/5.eb5bc7fd.js",
    "revision": "f38040ebe2574b798e6b8c9caf539a7f"
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
    "url": "assets/js/layout-Layout.1e3a6301.js",
    "revision": "dd08677f1025ccdfbdd7077cd6f1c99a"
  },
  {
    "url": "assets/js/layout-NotFound.8ce2063f.js",
    "revision": "c0c1d63dd1b28e7e45cac21f76247540"
  },
  {
    "url": "assets/js/page-0193e625.2abd88a5.js",
    "revision": "77d0401d034f4baef76a2914b4147276"
  },
  {
    "url": "assets/js/page-021b3aa4.9866f57d.js",
    "revision": "47ff967e64045ccdb2a5350bb36cd421"
  },
  {
    "url": "assets/js/page-0326a646.50e5d97c.js",
    "revision": "501bf6aa09433980b56c7535e2a43c60"
  },
  {
    "url": "assets/js/page-0a921c99.71029864.js",
    "revision": "5dfeb9cdaf392f7207c2f11fe4f7f861"
  },
  {
    "url": "assets/js/page-0c6c4d65.fe19d04c.js",
    "revision": "d2859b7801ddff097746648788d7013c"
  },
  {
    "url": "assets/js/page-0c7f77bc.c10c9339.js",
    "revision": "923bcc3664b5726300e47ab4ac29b130"
  },
  {
    "url": "assets/js/page-0d32e5ee.86ca8c1f.js",
    "revision": "62ff4baa723ce0a8a3d50e306ab22cf6"
  },
  {
    "url": "assets/js/page-0e69d9d2.b0ed5fa9.js",
    "revision": "763a970b92eb564326578860d679a659"
  },
  {
    "url": "assets/js/page-1080dbe2.19c69c46.js",
    "revision": "4a0e627ed773737ab3cd4fab074807fa"
  },
  {
    "url": "assets/js/page-11a8df82.bed216f5.js",
    "revision": "092956bf079031695f682674e59ec766"
  },
  {
    "url": "assets/js/page-129b7428.ba1652a5.js",
    "revision": "d802ea8de3d2d1d505ceafa9c42a29d4"
  },
  {
    "url": "assets/js/page-1486eb54.830df76d.js",
    "revision": "904302da0a676c7a69aebd21631ab5aa"
  },
  {
    "url": "assets/js/page-177d640c.a42ad1e9.js",
    "revision": "c91e23f8fb3530bbd14eb5fba18d349d"
  },
  {
    "url": "assets/js/page-1a34eb5d.634e34bc.js",
    "revision": "01511d0672355cec2cb5840d5665e50c"
  },
  {
    "url": "assets/js/page-1c4a4e12.92b168b4.js",
    "revision": "8dd42fc107232aebc4a44257d43485f3"
  },
  {
    "url": "assets/js/page-1ccc22d8.dfdc58d3.js",
    "revision": "380e41f099caa385adac88b974cec997"
  },
  {
    "url": "assets/js/page-1db42de8.6b03a846.js",
    "revision": "3497074a6e1c7a97fbafea3fed754add"
  },
  {
    "url": "assets/js/page-1e536af9.ca8cd870.js",
    "revision": "941277554b5ddac77bac964c10817215"
  },
  {
    "url": "assets/js/page-21fcb945.a6e8c21b.js",
    "revision": "da87e91f1af9de5ddd3bdead8daca48f"
  },
  {
    "url": "assets/js/page-25bc4f18.a7a178e0.js",
    "revision": "81f1217387b89eef0d554bb124c0ecee"
  },
  {
    "url": "assets/js/page-27f6ecec.228da25c.js",
    "revision": "a1bdd43171a3346c835fd2721e4bae96"
  },
  {
    "url": "assets/js/page-29c918e5.62763ec4.js",
    "revision": "d74757021100fa4d7c30dc2e7dc4e5cc"
  },
  {
    "url": "assets/js/page-2b10966c.52acc968.js",
    "revision": "e9ba79bd84e407d0d443f7055d32e9af"
  },
  {
    "url": "assets/js/page-2c6bc4ab.fcea3d34.js",
    "revision": "cf0565c2ea3d7c085b9ab82c1771de86"
  },
  {
    "url": "assets/js/page-2e8c0cd0.ee043268.js",
    "revision": "0e381db7ed88f602b293b2e16401f4a3"
  },
  {
    "url": "assets/js/page-302e6251.08a19f4d.js",
    "revision": "bacf211c2ac6e5cbe581a20ded8cf956"
  },
  {
    "url": "assets/js/page-320aac86.7dba8da4.js",
    "revision": "80a8d737ec6f3617e200c757aecea11d"
  },
  {
    "url": "assets/js/page-3229196c.8ab07ed0.js",
    "revision": "777aadc798ba24b19674f26375eead21"
  },
  {
    "url": "assets/js/page-32acecfe.53792bb5.js",
    "revision": "8ddd15d58aabf63ea853ddebcf932338"
  },
  {
    "url": "assets/js/page-339369e0.3b7c9907.js",
    "revision": "eae6d15b8945f09364b2bfadf127ed77"
  },
  {
    "url": "assets/js/page-36d5d2b3.d37fbe3d.js",
    "revision": "4f1f22fede7eece2812327495b00be31"
  },
  {
    "url": "assets/js/page-39e05f8b.c8f9e075.js",
    "revision": "029bdf3c2d57ffcf432ffb87736c143c"
  },
  {
    "url": "assets/js/page-3ab0cb1c.7ccd0aeb.js",
    "revision": "be6f7d7f671ee12a9210e65e41332db2"
  },
  {
    "url": "assets/js/page-3c8dbd4b.78172e74.js",
    "revision": "608521d56b60260447d93281795e6570"
  },
  {
    "url": "assets/js/page-3cdc4745.2906b7f4.js",
    "revision": "28ea9e9155512bdc5a9e84cce541e55b"
  },
  {
    "url": "assets/js/page-3cfa4e13.b9caafa7.js",
    "revision": "755d432d7466da725073b94f4da1dba4"
  },
  {
    "url": "assets/js/page-3edf90d5.123d2d59.js",
    "revision": "55d25690059b002663d32c59d034195a"
  },
  {
    "url": "assets/js/page-3ff73aa5.1f75179b.js",
    "revision": "2dee2d0e2a83743e1953ad1c50f6c6a8"
  },
  {
    "url": "assets/js/page-4107293f.a459c51a.js",
    "revision": "8334a1cec99adfdf652e299efeeb10ce"
  },
  {
    "url": "assets/js/page-4144513c.7d200ce7.js",
    "revision": "a2e6efb67d29b89d30108ae2f0858a46"
  },
  {
    "url": "assets/js/page-422a7e52.6919ea54.js",
    "revision": "dbd097d2337e54fe476db711622a4087"
  },
  {
    "url": "assets/js/page-445c88ce.82d2047c.js",
    "revision": "ec8cb6366143c68f09fb7ca91eaf1c91"
  },
  {
    "url": "assets/js/page-4478a866.bcefc40c.js",
    "revision": "aa52463e663b55c075fc7dd4bac0ec4d"
  },
  {
    "url": "assets/js/page-455360d1.15a239a8.js",
    "revision": "91d0a46fc4f8cf27f1b7f498bae7f8bb"
  },
  {
    "url": "assets/js/page-47f71914.ecb9f2df.js",
    "revision": "62bb528c4cf3d05fd3e5dba0576190a3"
  },
  {
    "url": "assets/js/page-4829d184.7b18600a.js",
    "revision": "5e32a542ea1368940b44228a4c7494aa"
  },
  {
    "url": "assets/js/page-486aacae.6d1fe302.js",
    "revision": "4073663ad2abdb64b1b034f019d01b2a"
  },
  {
    "url": "assets/js/page-4d521b14.a0fe5710.js",
    "revision": "d2017f8fbb46e8292773a7d8e9caff98"
  },
  {
    "url": "assets/js/page-4d7e2aa5.edb9e9d2.js",
    "revision": "be46a7e46090aabee058ee0958d5b369"
  },
  {
    "url": "assets/js/page-4d9fba32.97e7f35c.js",
    "revision": "5022489b40d077d2b1293113d1a2b593"
  },
  {
    "url": "assets/js/page-4dc00f25.f4811d76.js",
    "revision": "53ee801133dabcd4be2cd72661d471e8"
  },
  {
    "url": "assets/js/page-4dc54ba5.60d4fd21.js",
    "revision": "8e0b1e728f5fae05d79921fb031b8a35"
  },
  {
    "url": "assets/js/page-4df429d2.675c1c59.js",
    "revision": "e5ccf5fc46cfc9b761c1fbf697373f34"
  },
  {
    "url": "assets/js/page-518ca8d8.48259024.js",
    "revision": "36d47f2cc88727d4ec4564f166fc1170"
  },
  {
    "url": "assets/js/page-545b8d99.29747d35.js",
    "revision": "c09c294dce69ee044536367a869581e4"
  },
  {
    "url": "assets/js/page-55a376be.565bedb0.js",
    "revision": "f5105c99e7425eed131a88f14ff87f8d"
  },
  {
    "url": "assets/js/page-59cd63bf.2ae54f5b.js",
    "revision": "8266cba163f121a0f3f2b02e81ac848c"
  },
  {
    "url": "assets/js/page-5cdb680e.8823ca9c.js",
    "revision": "ad6be56490f28cba0fe4f71ea8e8d06e"
  },
  {
    "url": "assets/js/page-5de41bb6.d5ba6249.js",
    "revision": "4958a40b032d6ecb11bad619ef2b3f6b"
  },
  {
    "url": "assets/js/page-5edad598.1c4b0124.js",
    "revision": "ae5f18bcd4e85dffcdaceddee4e99f3e"
  },
  {
    "url": "assets/js/page-63d82e5a.af2d8c83.js",
    "revision": "e455ba4684b3131973a7902ec72d3165"
  },
  {
    "url": "assets/js/page-64a9a694.1ea1bf8a.js",
    "revision": "8eb027cb18b3326fed975c2286aacf30"
  },
  {
    "url": "assets/js/page-66061c06.fe509000.js",
    "revision": "f8c101cd5584bcd42a24fd2f1a05a31c"
  },
  {
    "url": "assets/js/page-6890df9a.00ea7e5a.js",
    "revision": "5c6868e5ea0e064be81962ac387d60cf"
  },
  {
    "url": "assets/js/page-68b44e7f.9b6ed1e9.js",
    "revision": "6cba9f28a1f14e245643933b12b909f2"
  },
  {
    "url": "assets/js/page-6dbff0ea.0e8c87ec.js",
    "revision": "89ab1b08dd42885caddb2e0fe7c014cd"
  },
  {
    "url": "assets/js/page-6f7fa8b4.d5789806.js",
    "revision": "13bf74d161f895b93d437ad81b4bd040"
  },
  {
    "url": "assets/js/page-70612fe6.68b8875a.js",
    "revision": "bb2deb56102864714f3b71436158cc1a"
  },
  {
    "url": "assets/js/page-720c8312.880c3d42.js",
    "revision": "b6ca4d9122c475b63e45868ba3edddde"
  },
  {
    "url": "assets/js/page-74a44f51.dc8ec4c5.js",
    "revision": "95134fe2195c3ad6416ac92b144797be"
  },
  {
    "url": "assets/js/page-7507c3f6.abdfa412.js",
    "revision": "204876fe467db7ef9b55bf223779490f"
  },
  {
    "url": "assets/js/page-761a0ef6.dc61ae15.js",
    "revision": "a61a8ce466e4d6d6cec8c396b4c63fd3"
  },
  {
    "url": "assets/js/page-7690c622.7d1d386c.js",
    "revision": "6125f0414d879a29678c0bbd39890264"
  },
  {
    "url": "assets/js/page-777196ab.1e35823e.js",
    "revision": "bd305c19eb62f40c8251b7999d49a583"
  },
  {
    "url": "assets/js/page-793331a0.c441a3b3.js",
    "revision": "fe1709f3296cb2d016c0986f2656756e"
  },
  {
    "url": "assets/js/page-79e60960.2dbe50f5.js",
    "revision": "4fffdb5da5734d400049d5e20dfbf82d"
  },
  {
    "url": "assets/js/page-7ba2451f.ff6ce230.js",
    "revision": "8d00a054274c8f5484267109655cd28d"
  },
  {
    "url": "assets/js/page-7bfb30a6.84f6f164.js",
    "revision": "d3f9f0958d4e0011bad1f7d6ef3164ec"
  },
  {
    "url": "assets/js/page-7d3a6963.bf89a740.js",
    "revision": "9389c56ee744be5f818d9d2d3d5d4d95"
  },
  {
    "url": "assets/js/page-7e6b5e12.590bfc8a.js",
    "revision": "a058c94b47df2e45594e87ffe607c41b"
  },
  {
    "url": "assets/js/page-7f3fbf36.c297f6bc.js",
    "revision": "89363c2e67878bed7dafe0bca1eed9e9"
  },
  {
    "url": "assets/js/page-82c2c642.7f3b57dc.js",
    "revision": "470d5ee96242faec28b032119d479ec2"
  },
  {
    "url": "assets/js/page-85f4c948.ce01d07f.js",
    "revision": "e2284ef509bb8e94dcda8ca4d1259ec4"
  },
  {
    "url": "assets/js/page-8892394c.3b9a5706.js",
    "revision": "e0179642bed8a731621c979b656a18e6"
  },
  {
    "url": "assets/js/page-89b130dc.e34f757d.js",
    "revision": "457c4c70c70a974c6b7a449804e9efab"
  },
  {
    "url": "assets/js/page-8da9df6c.77071087.js",
    "revision": "0e5e1293cfd8bf0b27105d40315459f2"
  },
  {
    "url": "assets/js/page-916af89c.03b13237.js",
    "revision": "3708724cd2797ba3e6043fba6bfce5ad"
  },
  {
    "url": "assets/js/page-9a2a43a4.eafc5391.js",
    "revision": "076c3f1ce0b2013d74d361760c4df009"
  },
  {
    "url": "assets/js/page-9ec1a766.273baa76.js",
    "revision": "eeacfc83776512f260ef2aa999d98389"
  },
  {
    "url": "assets/js/page-9f0190e0.5f25159f.js",
    "revision": "9b3805be6f1178b1717ed9ba791ca0e4"
  },
  {
    "url": "assets/js/page-a6174872.0fab0478.js",
    "revision": "eae1c1c9f2c8e806d5a5758fb50884c4"
  },
  {
    "url": "assets/js/page-aab392fc.5a1979e0.js",
    "revision": "131ed29de5e2fc202b87838659c0753f"
  },
  {
    "url": "assets/js/page-ace574d0.94b353fb.js",
    "revision": "f47563342fe3f4b56314c767166efe80"
  },
  {
    "url": "assets/js/page-ad24ce34.d2a94978.js",
    "revision": "548a9b128961f23483fb1f3efa5a2fde"
  },
  {
    "url": "assets/js/page-b0521034.74c4f9bc.js",
    "revision": "d4de72cc04b25bcd2ee742c35078408e"
  },
  {
    "url": "assets/js/page-b0d90ce6.6d8083dd.js",
    "revision": "284def34d098237cb3c0d57069d71943"
  },
  {
    "url": "assets/js/page-b40de7ce.f2c14681.js",
    "revision": "0b73fe0c7d90a7c9615cbbb4b97fbc14"
  },
  {
    "url": "assets/js/page-c26b0310.27a38a1f.js",
    "revision": "2aabe06883b172d64118487cfd585a41"
  },
  {
    "url": "assets/js/page-c405dd3e.b8d8b843.js",
    "revision": "3c34ada0d5c133caea770d19b06eb2f6"
  },
  {
    "url": "assets/js/page-c4bdd70e.15ab4ce8.js",
    "revision": "b5cecd78479afd169a06849a9b146733"
  },
  {
    "url": "assets/js/page-c5f1a60e.66a84b50.js",
    "revision": "8b5a38a3affdc7e71a378367b9c1dc87"
  },
  {
    "url": "assets/js/page-c60be50a.1cbadcfe.js",
    "revision": "d6fb939beaf3f2738311c76ca9cd1ae4"
  },
  {
    "url": "assets/js/page-d3e58f16.5be9a2fd.js",
    "revision": "053ebe56eb74af61d8eec51ad769ebfc"
  },
  {
    "url": "assets/js/page-d6c4343e.c0a97135.js",
    "revision": "ff9dff4d4d28fa862750d467b2c2520c"
  },
  {
    "url": "assets/js/page-e468b710.b9e4012f.js",
    "revision": "54a9784f4ffdfb540ce5d8f603c2e56c"
  },
  {
    "url": "assets/js/page-e72e49e8.42ddd449.js",
    "revision": "6aa19e4423b8c2b072c42fc3e28a35af"
  },
  {
    "url": "assets/js/page-ec44d602.41b2d3d6.js",
    "revision": "e3c4304e19b81efdf6cbd8596da9c16f"
  },
  {
    "url": "assets/js/page-ed303fba.fda8569e.js",
    "revision": "e6c411e19773670f1e526b608bf37d77"
  },
  {
    "url": "assets/js/page-f313c186.baf6f9b7.js",
    "revision": "0927215c0d677b963250f076eae356f8"
  },
  {
    "url": "assets/js/page-f6776002.5d818115.js",
    "revision": "d1f3a40235def2202408c83044dfdb3b"
  },
  {
    "url": "assets/js/page-fe61e53c.235c57f5.js",
    "revision": "4a9f02c2e666d5b9bd468cf488f9d265"
  },
  {
    "url": "assets/js/vendors~flowchart.404209b1.js",
    "revision": "4cc5dc02c7a775ed1fc7d1426b794bff"
  },
  {
    "url": "assets/js/vendors~layout-Layout.e07c5607.js",
    "revision": "9e6712de34e7194b7ff3e555d9232ccb"
  },
  {
    "url": "category/index.html",
    "revision": "3d1482118872b0e25d893aae809cc4b9"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "dbc11fa955dfa45f8632e28609fb3a2b"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "627689cb8cb870f42aca33347d3f605d"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "ddb36495cc0da745f8351da294e9fb92"
  },
  {
    "url": "Coding/CSharp/avoid-control-workflow-by-exception.html",
    "revision": "0f4a20188209e1fe20a8662036eb93e2"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "d5f25965fd940e3cb2c1becb1c8cf0f0"
  },
  {
    "url": "Coding/CSharp/safe-access-dictionary.html",
    "revision": "3723ba8572b05e91d19f8c81a5976073"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "0a94557dd33674cc295d3e9ffdcec567"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "76b52d5020ac82c759249776293055db"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "51b8da4d01b88f3e5159cca55e296cc0"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "366529f152e4fdc3a11faf186fc98a2e"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "a951a11ed391fd298b5cdeeb85a7644e"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "53aa7512d53e9937a77a539b41457fda"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "c7f96f281040f281177fe6887ed779ca"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "21f51d751d6d15d35a069f474e14ef49"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "4aa311e0c8ace913ebc6c347c5462b57"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "f2fce6ca29999d7898b0127d3adc9180"
  },
  {
    "url": "Coding/Front-End/CSS/css-quarter-oval.html",
    "revision": "f38924d5d14a4876e5b3f6b850ff51a7"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "551d18083832d6c56a617812a7213a1b"
  },
  {
    "url": "Coding/Front-End/Security/開新分頁.html",
    "revision": "bc3d097eea8140405ea3a5f3b8dc811b"
  },
  {
    "url": "Coding/IDE/visual-studio-hotkeys.html",
    "revision": "8717c8445b33ff7e8feb10f48b42b4cf"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "20709a7af0934e1d7d49199f9be4b9c3"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "7b54382c4897a11cffbe247e44a9587e"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "4572c32fcee14e2082ef9d23d2a85044"
  },
  {
    "url": "Coding/JS/publish-package-to-npm.html",
    "revision": "76bb57ce4f30e060386c8daa43cc9896"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "042e7a0ff6fd9c878ffb968d20b7d327"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/index.html",
    "revision": "20942c25a802065636cfa385fe1bba94"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/Syntax.html",
    "revision": "36e443e8d2a882f4391cbb11894611c2"
  },
  {
    "url": "Coding/JS/Vue/vue-event-binding.html",
    "revision": "8ebde1bb4a70b6a592bf31165ac5cac2"
  },
  {
    "url": "Coding/JS/Vue/vue3-experience.html",
    "revision": "e69c5b7c724ae5820e998f3f45f02a3c"
  },
  {
    "url": "Coding/JS/Vue/vuetify-experience.html",
    "revision": "db0a4086023021616ff44d214c2d83f9"
  },
  {
    "url": "Coding/package-tips.html",
    "revision": "f69f72890197b8126afd7ebe72cab57f"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "0b45328b7d93353e9e4ded0053367cb6"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "b6a8079f85c04cba26b194a02af1de53"
  },
  {
    "url": "Coding/Server/linux/simple-monitor-command.html",
    "revision": "235ecd5c5eca58b763be72b0e1a25809"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "11e5be22a3447d215a9cbaa870819cca"
  },
  {
    "url": "Coding/SQL/sqlite-to-postgresql.html",
    "revision": "078c2a8766d2a265dc1f381baba96b81"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "2220b902107de3216d273aca60875759"
  },
  {
    "url": "Coding/Website/heroku/coding-tips.html",
    "revision": "d1799766fe5cf317c8d5d917a852471a"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/back-end.html",
    "revision": "8e9d417f0e060ea2b040f23b3daa5ad2"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/front-end.html",
    "revision": "37bd1a29bbabefbf8cd6e400a60c729e"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/index.html",
    "revision": "905018d6f283e5dd66d6de48758e8c63"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/authentication.html",
    "revision": "0ce5d8509a6ab9880742581a4ba29b68"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/authorization.html",
    "revision": "62e6563b5ae220d7304eb9f2793f625e"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/basic.html",
    "revision": "68a36941154dfd1c8443bc144020bb14"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/page-idle.html",
    "revision": "1ff836901652e878125b688f0baea2f8"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/user-setting.html",
    "revision": "07664f8f4b2af0f9a6520feccc274666"
  },
  {
    "url": "Demos/index.html",
    "revision": "ebf15d7c23d6949d9942ed9eab8a996f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "d2515b2f4cf75e3b17c67d0a052ea28a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "f481460c7bfe37fffd2f29a1d8d0a629"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "22c114b8d326a510c7e754e83cef171d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "494e909ad6f8ca7264ec21509fe1dcaf"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "595e649a88ff5a9380845d953fe6e09b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "66cb569f236c2718aca52f7c36374921"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "661ad162a70cc8ac3ee37b91b70392ea"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "f9bb1d4e7b43108f79dcc437742d60f7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "b8a1542e15bd444ee4e27c5eb223ac72"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "61b5a3e7bf57fc8c0c2ba45ff4e3abda"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "faf7e709dd3278714c14b4fb795b0fb9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "2ecbc8908632dea1ec17db4c87e6f491"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "acae881315d160cc13867d7cdfcb6586"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "9988eb6111379bda9bb1a007775776bb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "5e85e6d5d55055b39e177b9e5ab654fc"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "a6fba0ce1b6f6d203092d6cac879b264"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "6e136ae9774844e16a6c50cfced9b634"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "ca741c83c2d6f14f8166838b8ee8e5e2"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "b355058086a3bb0669c326194ea615b0"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "cb2a221be767814c41f2ccfee0712e91"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "442252c8e9b606af4b95979617edcb24"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "65fd0ecb5077443445d484af27c612f9"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "efa9a22e49f20fd90235d4ff934924c8"
  },
  {
    "url": "Game/FEZ/5. 3on/3on共通玩法介紹.html",
    "revision": "61a3bf0f154b5b1970b7a3a834ded404"
  },
  {
    "url": "Game/FEZ/5. 3on/3on刀玩法介紹.html",
    "revision": "a00563abbcecf67278e58ba8daa05c80"
  },
  {
    "url": "Game/FEZ/5. 3on/3on大劍玩法介紹.html",
    "revision": "664bd973ab0c3f47d678ec3816610b91"
  },
  {
    "url": "Game/FEZ/5. 3on/3on雙修玩法介紹.html",
    "revision": "8c7074bc9779f7866cf966b5eef618fc"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "5f433b3dec7b51b237864f8fafdddc95"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "37c432854366069a99122e9c002131b7"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "f87156ffba0e60e3b02f50d4e684fbf6"
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
    "revision": "b2dea1d86b2391acbb100726dd6e1b44"
  },
  {
    "url": "Psychology/index.html",
    "revision": "48184fddec4b9317ae0108726cfc82d1"
  },
  {
    "url": "Psychology/人群現象.html",
    "revision": "6f81d9e8867e8075e2f0f2e0ad40a862"
  },
  {
    "url": "Psychology/價值判斷.html",
    "revision": "6b555ec25fbd3b36d9ed1b6ef1eeb7eb"
  },
  {
    "url": "Psychology/決策.html",
    "revision": "2ab34b22151a063f43ae8f00047a5624"
  },
  {
    "url": "Psychology/溝通.html",
    "revision": "731da1d746d4c6c0c12a86ea2b4333be"
  },
  {
    "url": "Psychology/組織合作.html",
    "revision": "f75eb63e368bf8123256316fb869a670"
  },
  {
    "url": "Psychology/認知.html",
    "revision": "769e95858a6ba90749d0f3ba161a80d8"
  },
  {
    "url": "search/index.html",
    "revision": "7ba4164a67bece328b142bf0892fd589"
  },
  {
    "url": "tag/index.html",
    "revision": "2063afa11a60ab7f73a7c603e6257876"
  },
  {
    "url": "VueJCBlog/Config.html",
    "revision": "901e50d42ed3defd72e1d892149d7009"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "4d260ef369d2366eb54c6911aba79dbf"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "580b4d45156044f9f9f8b2f29229b7ec"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "42439e665691f31065fdd87504762347"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "51c5f04241b3168d3f5b8f5abf33cd58"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "bc71b01a5747f35b0d0076e25ca73e14"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "b846ca4f33d6cae0799cc51704e725e6"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "198ca524308402ad2b2093444edd2069"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "4e99b37dc3a00a4724d4dd1a98b87851"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "89b1c0862a43ddaf34fc293874d5d796"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "725a1b86a3ac692f2dcbacaf0d034782"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "bacf845ab45207c852c06f91f8453bb1"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "0c7e01681fb1600f2105b06684ca94b4"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "6708a197cdfbbb88515157795bff6c9b"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "6931b4ac6fc8e93b19174eaa5ebdc20e"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "e3e9bb1ddb594d969dfc9ff1bafe5c63"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "d398531c224705ebc552a7d31150916c"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "f86efcf576b504a3f70caaf029b84233"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "b4b7e3af362e45ec1597782f7b8d0a17"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "13d9c27b31ad7eb0b869f3d3b2c1e5bb"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "8ecc7b72816165ce620fc03a0a8fefa7"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "e2b3c535e68c9a6c38aedd5efa34d819"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "016ce1bbc9f21c370d08e1798995b352"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "2d102beaad139691c0c81d06982564ed"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "b593c52f4c16768e89567bec67fffa17"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "ea940a54eb74785f33bcbe2f4b6c56d4"
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
