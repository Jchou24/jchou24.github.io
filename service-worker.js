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
    "revision": "f03d7d8c7a1311f5cc35d498cceaf61c"
  },
  {
    "url": "About/index.html",
    "revision": "ea1c3c2cdcfe611942cef4f68955f9cb"
  },
  {
    "url": "archive/index.html",
    "revision": "4da3d3da5dca9c0725ee4f1db56001ca"
  },
  {
    "url": "assets/css/0.styles.21adc6d7.css",
    "revision": "4431845cbca7f80aed83961afb779553"
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
    "url": "assets/js/layout-BaseLayout.fa402607.js",
    "revision": "c833dc72e61df18f7c6a860ac68539e8"
  },
  {
    "url": "assets/js/layout-Layout.9c8a9811.js",
    "revision": "09d895228931d6a22efb4642a3c1d0e2"
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
    "url": "assets/js/page-0326a646.fe625464.js",
    "revision": "02436753a6cda3fa0105d1b7c588f5e4"
  },
  {
    "url": "assets/js/page-0a921c99.71029864.js",
    "revision": "5dfeb9cdaf392f7207c2f11fe4f7f861"
  },
  {
    "url": "assets/js/page-0c6c4d65.106c0ab3.js",
    "revision": "f261749e59d677be8582d3e37c8a0d69"
  },
  {
    "url": "assets/js/page-0c7f77bc.9db22727.js",
    "revision": "89f3b46a52cb52f1ee9054c1bcd6442c"
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
    "url": "assets/js/page-11a8df82.62c4afbd.js",
    "revision": "9caeea4dcd09c3dd36f8746e305052d7"
  },
  {
    "url": "assets/js/page-129b7428.ba1652a5.js",
    "revision": "d802ea8de3d2d1d505ceafa9c42a29d4"
  },
  {
    "url": "assets/js/page-1486eb54.11ac4aa6.js",
    "revision": "69b99a7eefec86d3d9f0531cb571eb72"
  },
  {
    "url": "assets/js/page-177d640c.3a331718.js",
    "revision": "2e52222b2aaff842fd745de46ce6b257"
  },
  {
    "url": "assets/js/page-1a34eb5d.c75a56fe.js",
    "revision": "ee38e1919c3c2dd7707fbba3e488a7db"
  },
  {
    "url": "assets/js/page-1c4a4e12.198e778f.js",
    "revision": "1a13a442613aea796535d5a25f5fd12e"
  },
  {
    "url": "assets/js/page-1ccc22d8.dfdc58d3.js",
    "revision": "380e41f099caa385adac88b974cec997"
  },
  {
    "url": "assets/js/page-1db42de8.412e74a7.js",
    "revision": "0230e1d392d85d979665b1d1d9af0974"
  },
  {
    "url": "assets/js/page-1e536af9.d8c161f7.js",
    "revision": "fad188f6f8c3ef0ecb5bbd74589ff631"
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
    "url": "assets/js/page-29c918e5.d1f1c4fe.js",
    "revision": "2b78ca2ed88fa9d8ec901b97037cafe5"
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
    "url": "assets/js/page-302e6251.02afde21.js",
    "revision": "aef450669514e5e852b9c18f45c92ca4"
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
    "url": "assets/js/page-32acecfe.bfd0ff70.js",
    "revision": "a373587bfecc12e46180735300398e45"
  },
  {
    "url": "assets/js/page-339369e0.6b0f48e1.js",
    "revision": "e3d38a88073b40ada9813f315f803b22"
  },
  {
    "url": "assets/js/page-36d5d2b3.4237b426.js",
    "revision": "8f907ecedda3c12813a37e76b03afa72"
  },
  {
    "url": "assets/js/page-39e05f8b.c8f9e075.js",
    "revision": "029bdf3c2d57ffcf432ffb87736c143c"
  },
  {
    "url": "assets/js/page-3ab0cb1c.b6fd81a2.js",
    "revision": "7432bda18dc20a2fe42de39ffe0b0056"
  },
  {
    "url": "assets/js/page-3c8dbd4b.a242fa76.js",
    "revision": "29332fc44f08f8203e3f1e4299ed493e"
  },
  {
    "url": "assets/js/page-3cdc4745.2906b7f4.js",
    "revision": "28ea9e9155512bdc5a9e84cce541e55b"
  },
  {
    "url": "assets/js/page-3cfa4e13.2d1068b2.js",
    "revision": "03935a5c6beb6d8b65294760d2955b8c"
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
    "url": "assets/js/page-4107293f.482048d6.js",
    "revision": "5afbc2b55bb80ea3dbaf71d3e128b706"
  },
  {
    "url": "assets/js/page-4144513c.264ad19a.js",
    "revision": "ced0f02dba53af0cb6b5e85f9506b4ae"
  },
  {
    "url": "assets/js/page-422a7e52.e2f8aa05.js",
    "revision": "0d2e54a58573473ab6023b34f4f015f3"
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
    "url": "assets/js/page-455360d1.8dca3eeb.js",
    "revision": "48f991bbc19d14dc1f15f91fb7c9d477"
  },
  {
    "url": "assets/js/page-47f71914.68374c8d.js",
    "revision": "7c35c5426462221c80ff18353a69324a"
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
    "url": "assets/js/page-4d521b14.8882e3e8.js",
    "revision": "b6b47396f677a1c94c80c7a781909cac"
  },
  {
    "url": "assets/js/page-4d7e2aa5.edb9e9d2.js",
    "revision": "be46a7e46090aabee058ee0958d5b369"
  },
  {
    "url": "assets/js/page-4d9fba32.93396f22.js",
    "revision": "e2d4ed44b4229792c1449d743d6bcd1e"
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
    "url": "assets/js/page-4df429d2.89ba1041.js",
    "revision": "22e7159234fcd33962b31206b833c066"
  },
  {
    "url": "assets/js/page-518ca8d8.48259024.js",
    "revision": "36d47f2cc88727d4ec4564f166fc1170"
  },
  {
    "url": "assets/js/page-545b8d99.196a412f.js",
    "revision": "19d25c2a6bf7b1fbeefefa201ef00c18"
  },
  {
    "url": "assets/js/page-55a376be.565bedb0.js",
    "revision": "f5105c99e7425eed131a88f14ff87f8d"
  },
  {
    "url": "assets/js/page-59cd63bf.abfed9a1.js",
    "revision": "975ba2e54aa42ec9e6949f76943f156f"
  },
  {
    "url": "assets/js/page-5cdb680e.7c741851.js",
    "revision": "46a60a9d310d794553b4164a03b9bf21"
  },
  {
    "url": "assets/js/page-5de41bb6.a2f1e323.js",
    "revision": "ad3a4fb3f5b81cf612bdb52aefa39824"
  },
  {
    "url": "assets/js/page-5edad598.fb21a415.js",
    "revision": "7eb031e7f82d19d57e0f12b429bbd887"
  },
  {
    "url": "assets/js/page-63d82e5a.c2909264.js",
    "revision": "bf9261978cc5e44351acf9a55b9bafb3"
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
    "url": "assets/js/page-6dbff0ea.c13c1f16.js",
    "revision": "3700d824c65e369a5e80c6ba9a04806e"
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
    "url": "assets/js/page-720c8312.377fd683.js",
    "revision": "60a29631e5277ea7fdbdca0e9b99cd71"
  },
  {
    "url": "assets/js/page-74a44f51.1de6c274.js",
    "revision": "a8d0d540edfeffd6141a039206266776"
  },
  {
    "url": "assets/js/page-7507c3f6.aee26885.js",
    "revision": "cfcd92d6595d3cfd38f7e3c097c966b4"
  },
  {
    "url": "assets/js/page-761a0ef6.6ba90866.js",
    "revision": "89875b26f3f8f8b857d0a3ff84365a2e"
  },
  {
    "url": "assets/js/page-7690c622.7d1d386c.js",
    "revision": "6125f0414d879a29678c0bbd39890264"
  },
  {
    "url": "assets/js/page-777196ab.e8802d47.js",
    "revision": "8b03c2215798db0bef8205c397630f12"
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
    "url": "assets/js/page-7ba2451f.d69d7b39.js",
    "revision": "2b8d16e95936b09d61da36e26bc02513"
  },
  {
    "url": "assets/js/page-7bfb30a6.8ae07e42.js",
    "revision": "c6e2cedb4e07d7939317f56e7c785bec"
  },
  {
    "url": "assets/js/page-7d3a6963.f9fa4fec.js",
    "revision": "75d8d618438683c716e72dfd122a86c4"
  },
  {
    "url": "assets/js/page-7e6b5e12.590bfc8a.js",
    "revision": "a058c94b47df2e45594e87ffe607c41b"
  },
  {
    "url": "assets/js/page-7f3fbf36.3d0913fa.js",
    "revision": "b876f1add897c26ca398802f8af70185"
  },
  {
    "url": "assets/js/page-82c2c642.3816c89c.js",
    "revision": "395af1663bc973d3f55cbbd04537d519"
  },
  {
    "url": "assets/js/page-85f4c948.0ab11d5c.js",
    "revision": "ae3789b94e4396fbbdf5a3f6001819c1"
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
    "url": "assets/js/page-8da9df6c.f3eb0b7e.js",
    "revision": "fe28345cb79f10bd87dc97adf50575cf"
  },
  {
    "url": "assets/js/page-916af89c.03b13237.js",
    "revision": "3708724cd2797ba3e6043fba6bfce5ad"
  },
  {
    "url": "assets/js/page-9a2a43a4.28ab7cc3.js",
    "revision": "8f46ee985c1e89650c323848d4e21ca2"
  },
  {
    "url": "assets/js/page-9ec1a766.365b921a.js",
    "revision": "28f00875aa90b0836b7cfe79f99cb467"
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
    "url": "assets/js/page-b0d90ce6.cb238011.js",
    "revision": "e966afc53e633739f73541fc1c1897e6"
  },
  {
    "url": "assets/js/page-b40de7ce.f2c14681.js",
    "revision": "0b73fe0c7d90a7c9615cbbb4b97fbc14"
  },
  {
    "url": "assets/js/page-c26b0310.efd1670e.js",
    "revision": "81b8073c92ae0a40bfdd1b10cd43d4df"
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
    "url": "assets/js/page-c5f1a60e.4528d108.js",
    "revision": "7ce722ef1d984299f36fc5a7343230a4"
  },
  {
    "url": "assets/js/page-c60be50a.1cbadcfe.js",
    "revision": "d6fb939beaf3f2738311c76ca9cd1ae4"
  },
  {
    "url": "assets/js/page-d3e58f16.38606b3d.js",
    "revision": "d32c5102c051c4748a2cc136d926927f"
  },
  {
    "url": "assets/js/page-d6c4343e.bc658308.js",
    "revision": "40b64e385568bcff1e98c13ae27d5f70"
  },
  {
    "url": "assets/js/page-e468b710.b50cfa1a.js",
    "revision": "b1ed5a24e7cc0a1c0b284882a78aee27"
  },
  {
    "url": "assets/js/page-e72e49e8.92a896c0.js",
    "revision": "0abe61324490421e1caaab42fe67b38d"
  },
  {
    "url": "assets/js/page-ec44d602.41b2d3d6.js",
    "revision": "e3c4304e19b81efdf6cbd8596da9c16f"
  },
  {
    "url": "assets/js/page-ed303fba.a3be7e08.js",
    "revision": "2940946c635606e58309ee004dcb52e7"
  },
  {
    "url": "assets/js/page-f313c186.baf6f9b7.js",
    "revision": "0927215c0d677b963250f076eae356f8"
  },
  {
    "url": "assets/js/page-f6776002.7ccc7618.js",
    "revision": "4e2a72b22e867db9bdc84f0814537e4e"
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
    "revision": "b4efd9878d2b5600f55a7c1b292037fa"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "5504abef9358e33ca18a8013801d11fc"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "12367106e84dad5290ef2bc9a1e2aaed"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "1793415a1ddeb3b42d1f492abb302f64"
  },
  {
    "url": "Coding/CSharp/avoid-control-workflow-by-exception.html",
    "revision": "3558dd4675a5b0feac3faf78e6b23f39"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "4dfc294fdd07e1db069f06899a1ce865"
  },
  {
    "url": "Coding/CSharp/safe-access-dictionary.html",
    "revision": "a2d0f3c3f2b3cff1ade9f96b5a41a811"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "61d92838ab90e5973d70563f8ca66ae1"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "bb277a0271ae048510896e7c6da42468"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "45d00508b2b2c61138a87e877d38541c"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "7e3f5ce8492e7578c96683f56281cbdf"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "93635295eda7d2de93e175b761a9fa09"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "d504c5f0305054619f8c8c616db7a929"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "34d29681b765f3450f456b6b6ed34818"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "32d038597f8cdb47a0f531f787be117c"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "8a29feb3bd0d4fff34488a9d756ffdbb"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "0c50b55269f68a7a13ccdd3a15d6576f"
  },
  {
    "url": "Coding/Front-End/CSS/css-quarter-oval.html",
    "revision": "30ff9d0dc2dc00df8bb5609027a0e3d1"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "dd5c38c425261cf9dbdf362e61fdd5e7"
  },
  {
    "url": "Coding/Front-End/Security/開新分頁.html",
    "revision": "55f94311b5f81a066e8ec480e002dbe6"
  },
  {
    "url": "Coding/IDE/visual-studio-hotkeys.html",
    "revision": "184b68add2a2e8084e99c81e59dd418b"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "04ca02f78423ccaf1e79fbf15802d688"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "efeb175b613f169451aafc4f43604d07"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "d4b199f663ffa4a8f66f9e990081881d"
  },
  {
    "url": "Coding/JS/publish-package-to-npm.html",
    "revision": "d2a8290af33f05e12723f22b71212ad9"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "90f8cc1274fee23ba6a5f27e1dd044de"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/index.html",
    "revision": "1535e809da6c2110e049fbf33790e7fb"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/Syntax.html",
    "revision": "5aa395c47af1ee1830675f6b6cc2e5b6"
  },
  {
    "url": "Coding/JS/Vue/vue-event-binding.html",
    "revision": "d37bc6f8f195f4e3b11256a762be0673"
  },
  {
    "url": "Coding/JS/Vue/vue3-experience.html",
    "revision": "91c4e6de24482ca335fe135b9cc19afd"
  },
  {
    "url": "Coding/JS/Vue/vuetify-experience.html",
    "revision": "5aaab7625940f540949ad3fd8d08ade6"
  },
  {
    "url": "Coding/package-tips.html",
    "revision": "6009df6140820a343424ea9c623fe8c8"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "154796d9e0d3799dacddc258f04aa42d"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "266efa43f9280be0d23e140593b25f15"
  },
  {
    "url": "Coding/Server/linux/simple-monitor-command.html",
    "revision": "ec735a9cf3d7fb9a4813c1092431f060"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "c147ca497e8fcc49c89b2d21ecbb2a55"
  },
  {
    "url": "Coding/SQL/sqlite-to-postgresql.html",
    "revision": "6d1a2691b448dd35653a453d70727973"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "1ff42ee4ecf05521e2f59ffc59589f38"
  },
  {
    "url": "Coding/Website/heroku/coding-tips.html",
    "revision": "44068f34a1679b38cd260e441ece2ec2"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/back-end.html",
    "revision": "06e1863d4c35d965b154adcb0be871b5"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/front-end.html",
    "revision": "05e39fabb6c1ba6827def75b648707c9"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/index.html",
    "revision": "67978d450417b79c759bc43fb17ab796"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/authentication.html",
    "revision": "f65b923d7553eb58ecd245c818a441b0"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/authorization.html",
    "revision": "b60dbdde3ab8e3cc170e4bc10e5d45e9"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/basic.html",
    "revision": "c7cd71c0dd9832d89ce013263e2f2b7b"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/page-idle.html",
    "revision": "ae6d71ee3ec4e75be0d2b78b3c1f72c9"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/user-setting.html",
    "revision": "9d315ae7d6bac0a881ff19829d84beb5"
  },
  {
    "url": "Demos/index.html",
    "revision": "9245fb0084709b6d85bfbe15211d7747"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "435aa5af5c51e851e785133984a9f4e1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "b525439f4b5a1aa3937dde9e01bda927"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "2c559b2b756e303a76a211921cc435d3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "9aaf273f12ee5197b712c8913a3d70ed"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "f6337ff29427d6052be302c86d33b6e3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "ad6bee9353fbfb2fd75517bb1c598403"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "e614062b5f862fdd1226521b68a4cf62"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "2cc75130aff8ebbb1a0e9654cc808df7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "02b0de16ffffe851e3a125c1c4042eaa"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "5fde36a2326c18600b092b716908268c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "48b6a0575d24e559de3f2263a2c4d49a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "2a14d109bf6da66228907db4ba88ac7a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "e99af2749be7bf0681928d6afa88568e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "5d43ac1b184ae5013ac8195ed9472d24"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "c547416db311f9433dcea47b8aaccf94"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "0d85c715d43d4b470d2e38ac16b44d9d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "bec26bdc46bc05aa131f1c5f68331901"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "dbb0d882f17e56a285ef259c7affc695"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "f1f738d7e2336b2496affcd6196d0936"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "40f2b715f0a0ba3aafa6325e62a648ec"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "4a41cec90ca9a4709a64f382d58d7256"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "eebaafaae7af39e66af6e974187c3c93"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "fb06bf6fe27659c40dcede2c134b7065"
  },
  {
    "url": "Game/FEZ/5. 3on/3on共通玩法介紹.html",
    "revision": "ee70753704ff658bc46be5aa69f69c63"
  },
  {
    "url": "Game/FEZ/5. 3on/3on刀玩法介紹.html",
    "revision": "96cc81a88024cb8be1dcfa8db04279d9"
  },
  {
    "url": "Game/FEZ/5. 3on/3on大劍玩法介紹.html",
    "revision": "5710c7bc098728f58d18e4fdd6c2d5c5"
  },
  {
    "url": "Game/FEZ/5. 3on/3on雙修玩法介紹.html",
    "revision": "3cc3b1ca70b73f7730ab5283c4967afe"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "bf309b49f26dc417a478911109b5a61e"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "849f1f74d63d57ccb1c6f9e36c6c6644"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "ca295c4f57df66451fee9ed67daeecad"
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
    "revision": "ba298d1e7d9dac8095b6af96235d7f4e"
  },
  {
    "url": "Psychology/index.html",
    "revision": "02abf4c04e4635d2793343e56c1654e8"
  },
  {
    "url": "Psychology/人群現象.html",
    "revision": "f4f5f7e0d8d5761cbc44d21f54e4d5cb"
  },
  {
    "url": "Psychology/價值判斷.html",
    "revision": "09a4aa8b8e463ef47ea0401e18eb9fd1"
  },
  {
    "url": "Psychology/決策.html",
    "revision": "f72b97a59c1ce3cc709966bb25e48d2c"
  },
  {
    "url": "Psychology/溝通.html",
    "revision": "e099ef4251ebef7f570a022c43da79ce"
  },
  {
    "url": "Psychology/組織合作.html",
    "revision": "8c1d69cee896412a0d8ffff76f89374e"
  },
  {
    "url": "Psychology/認知.html",
    "revision": "bc7d7dc5373d664393a7a4cdd482ccf4"
  },
  {
    "url": "search/index.html",
    "revision": "79de97b76d5eebc5cca2d761dffee9eb"
  },
  {
    "url": "tag/index.html",
    "revision": "1ec0c426166e3b625b626c70618f8efa"
  },
  {
    "url": "VueJCBlog/Config.html",
    "revision": "64fe59a081c37352cb6289d61e90afda"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "577b0cf6261d49c22a94badc9f463c3d"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "2a3491b3d828b197d4ea9ff14e020f92"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "13d7ff54eae49e2d4f2ec028ec1180b7"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "cfa8c45b86e9604abcadb01abe8b3808"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "498e1eb92a41d3025b5dace71ca58f0f"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "0ac2d3433358437d3fdf5a5b513e5c44"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "39c8713e9f7947c439a13e97d4c757e8"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "b77a8aca43cbfaf645d5cb7c9829cbe3"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "ce17aed0239211b40798f9bbda78dad2"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "9e7a50e5b875c24aff278f29969fbd2b"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "69e919c3f213fe5469302b929faa33bb"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "6a1f840c4e16b8d3b9cba6a41b7571a4"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "ca2fe135e79e7eced144a34f3bc6c019"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "ba1f56bf31e729ec0d0a883b43ae0502"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "7014bd693ed8f32b72fcd31149f73c6c"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "59e2f8983f5369628bc8c1e98cd4a1d4"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "d0ce3436c0a551a9b9aaf17332ca799f"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "ab9a87e2b1b8783d887e5211bd2bc098"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "c5f59b21e940029e2c883b881ae123aa"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "78f4b07e07424a977784bfcff604f3ab"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "bf99d0fd4cc3ab4cde01531dd02636a4"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "777ec0180ed105f31181f01b673b0504"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "85c9be85957025b92e1a8f655415c762"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "6f19e365032a8d9fe42164fbbaed2b2e"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "933a1e76f172f2a4db20764c57bda06b"
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
