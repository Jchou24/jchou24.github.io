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
    "revision": "3e5352f8af4cef778e8aa186cc358981"
  },
  {
    "url": "About/index.html",
    "revision": "21217a772e63c80b6b761a98ebc0df16"
  },
  {
    "url": "archive/index.html",
    "revision": "3ef3e9a671048df877e651832d5ebb50"
  },
  {
    "url": "assets/css/0.styles.18274374.css",
    "revision": "6433f9bea04a7066106552fe7efd6582"
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
    "url": "assets/js/132.de139573.js",
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
    "url": "assets/js/page-0193e625.04f722d7.js",
    "revision": "fb0c10916667de052beb7e804a2d9160"
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
    "url": "assets/js/page-0a921c99.812b86f8.js",
    "revision": "661d800db19caf0488b15aed4865d846"
  },
  {
    "url": "assets/js/page-0c6c4d65.ecd6227c.js",
    "revision": "a8acc0ebb6eac49d73d4d58823664adf"
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
    "url": "assets/js/page-0e69d9d2.5c8f0b7a.js",
    "revision": "25cba30365df42a72157e3fa7042da1b"
  },
  {
    "url": "assets/js/page-1080dbe2.ed828ea2.js",
    "revision": "d4d7a5f13d718f95fca10ca0d1254edd"
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
    "url": "assets/js/page-177d640c.3a331718.js",
    "revision": "2e52222b2aaff842fd745de46ce6b257"
  },
  {
    "url": "assets/js/page-1a34eb5d.9233d98a.js",
    "revision": "8b304b3060b388b3b6ef856e4834b4f7"
  },
  {
    "url": "assets/js/page-1c4a4e12.b0be3e54.js",
    "revision": "63e9ca196f06ad1eda7cd839d13447fa"
  },
  {
    "url": "assets/js/page-1ccc22d8.eab99bb0.js",
    "revision": "ecfea2aef735f58a3b39338f53c42e88"
  },
  {
    "url": "assets/js/page-1db42de8.412e74a7.js",
    "revision": "0230e1d392d85d979665b1d1d9af0974"
  },
  {
    "url": "assets/js/page-1e536af9.72a44b59.js",
    "revision": "e2e687c8d2f2ceda5c8b4741d82ca80d"
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
    "url": "assets/js/page-29c918e5.e5164c12.js",
    "revision": "8fff88b5468e69eed3f3ad0855213ce6"
  },
  {
    "url": "assets/js/page-2b10966c.52acc968.js",
    "revision": "e9ba79bd84e407d0d443f7055d32e9af"
  },
  {
    "url": "assets/js/page-2c6bc4ab.e73724dd.js",
    "revision": "9eff44571574ecc343c04bcf93be111d"
  },
  {
    "url": "assets/js/page-2e8c0cd0.ee043268.js",
    "revision": "0e381db7ed88f602b293b2e16401f4a3"
  },
  {
    "url": "assets/js/page-302e6251.0079db19.js",
    "revision": "b604bd7d22f6a444f963339057a40001"
  },
  {
    "url": "assets/js/page-320aac86.77dbaf54.js",
    "revision": "ece1f17091eb373a484d62f282f00602"
  },
  {
    "url": "assets/js/page-3229196c.af5ba2e8.js",
    "revision": "3a83d6fd5b459656a55100942242b746"
  },
  {
    "url": "assets/js/page-32acecfe.2e0e9c71.js",
    "revision": "e821414d3da2b3ca966eeda4e09faa34"
  },
  {
    "url": "assets/js/page-339369e0.3b7c9907.js",
    "revision": "eae6d15b8945f09364b2bfadf127ed77"
  },
  {
    "url": "assets/js/page-36d5d2b3.4237b426.js",
    "revision": "8f907ecedda3c12813a37e76b03afa72"
  },
  {
    "url": "assets/js/page-39e05f8b.c6cc9a0d.js",
    "revision": "ab32fef582b01aa06593570a87c88b2d"
  },
  {
    "url": "assets/js/page-3ab0cb1c.6515326f.js",
    "revision": "b4cfb97ce7a8e5ed9761cec6dde44baf"
  },
  {
    "url": "assets/js/page-3c8dbd4b.78172e74.js",
    "revision": "608521d56b60260447d93281795e6570"
  },
  {
    "url": "assets/js/page-3cdc4745.1eb19726.js",
    "revision": "ade4adc84ef47c18fa781b0082c2d877"
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
    "url": "assets/js/page-3ff73aa5.ed1f14e8.js",
    "revision": "9c59f2f5fa015bd2eda2d9f603ecead2"
  },
  {
    "url": "assets/js/page-4107293f.a459c51a.js",
    "revision": "8334a1cec99adfdf652e299efeeb10ce"
  },
  {
    "url": "assets/js/page-4144513c.67f7af1d.js",
    "revision": "7956ca557dc9b5f1f1da6cba636a52ab"
  },
  {
    "url": "assets/js/page-422a7e52.aad0affb.js",
    "revision": "6fd12c842a2c98704239902f3ca94508"
  },
  {
    "url": "assets/js/page-445c88ce.2eb9d821.js",
    "revision": "978144af57be846c1caf549265742b52"
  },
  {
    "url": "assets/js/page-4478a866.3d0899d7.js",
    "revision": "5dbed62fc099f735df7e6fdbaa407c59"
  },
  {
    "url": "assets/js/page-455360d1.8dca3eeb.js",
    "revision": "48f991bbc19d14dc1f15f91fb7c9d477"
  },
  {
    "url": "assets/js/page-47f71914.26ad842c.js",
    "revision": "cefca28fc43be0758247100370250499"
  },
  {
    "url": "assets/js/page-4829d184.fed2d44c.js",
    "revision": "76eb1c08992b3ecd5084c832e6f8f98f"
  },
  {
    "url": "assets/js/page-486aacae.a60ccb4c.js",
    "revision": "76db7d4649460e21a195c8020771be6c"
  },
  {
    "url": "assets/js/page-4d521b14.a0fe5710.js",
    "revision": "d2017f8fbb46e8292773a7d8e9caff98"
  },
  {
    "url": "assets/js/page-4d7e2aa5.fcbcbc39.js",
    "revision": "a78bd5b22507b488c6f23529b5e62866"
  },
  {
    "url": "assets/js/page-4d9fba32.93396f22.js",
    "revision": "e2d4ed44b4229792c1449d743d6bcd1e"
  },
  {
    "url": "assets/js/page-4dc00f25.e2d0703e.js",
    "revision": "0e5d0fcef20eb0b8ab7327381393b121"
  },
  {
    "url": "assets/js/page-4dc54ba5.30a25c44.js",
    "revision": "bc6c9d1d9e0ac3eba91748b827d9dba2"
  },
  {
    "url": "assets/js/page-4df429d2.36d9e0ae.js",
    "revision": "2ec432e258b5a72005f8d3721c608ad3"
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
    "url": "assets/js/page-5cdb680e.17728988.js",
    "revision": "0020329a10b2fdfeec41f4856ace083b"
  },
  {
    "url": "assets/js/page-5de41bb6.dac59d27.js",
    "revision": "9f66f0d5e817c0ff0f57a36f98da0e5f"
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
    "url": "assets/js/page-66061c06.2f010cc1.js",
    "revision": "ffb62c91c9b50f8cd551fb0521257107"
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
    "url": "assets/js/page-6dbff0ea.a6ffe0b3.js",
    "revision": "585ef5c6ef2180cecaa3756ef4c9f337"
  },
  {
    "url": "assets/js/page-6f7fa8b4.9e64f71f.js",
    "revision": "559b28fd8e21f8dab321a8a05ad0a5b3"
  },
  {
    "url": "assets/js/page-70612fe6.c618aaef.js",
    "revision": "35baec3f6d30032122569dd044d9c1c8"
  },
  {
    "url": "assets/js/page-720c8312.880c3d42.js",
    "revision": "b6ca4d9122c475b63e45868ba3edddde"
  },
  {
    "url": "assets/js/page-74a44f51.1de6c274.js",
    "revision": "a8d0d540edfeffd6141a039206266776"
  },
  {
    "url": "assets/js/page-7507c3f6.4d8d13a9.js",
    "revision": "5368112835996a99c9645b392c844570"
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
    "url": "assets/js/page-7bfb30a6.8ae07e42.js",
    "revision": "c6e2cedb4e07d7939317f56e7c785bec"
  },
  {
    "url": "assets/js/page-7d3a6963.f9fa4fec.js",
    "revision": "75d8d618438683c716e72dfd122a86c4"
  },
  {
    "url": "assets/js/page-7e6b5e12.a8f3d031.js",
    "revision": "e1cb7bf3498d1d31ea228da9489f6da5"
  },
  {
    "url": "assets/js/page-7f3fbf36.b6125669.js",
    "revision": "6b749825ff0e9659b16211b1a8e96827"
  },
  {
    "url": "assets/js/page-82c2c642.dc17ca56.js",
    "revision": "6678edca33709fd2ee8cea4ab3d6bf23"
  },
  {
    "url": "assets/js/page-85f4c948.495c8790.js",
    "revision": "1346a0f193699ec9a6f71c39d8dceed6"
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
    "url": "assets/js/page-8da9df6c.615db201.js",
    "revision": "1f6acc5725e5ae9ceb6a795abe05fad8"
  },
  {
    "url": "assets/js/page-916af89c.6e74c626.js",
    "revision": "a7b2362e319187bcc9907a234f27bc92"
  },
  {
    "url": "assets/js/page-9a2a43a4.3b5c0321.js",
    "revision": "1bb08b23804c35cc05a96a9bee47a12f"
  },
  {
    "url": "assets/js/page-9ec1a766.e652f266.js",
    "revision": "32992142cc0dc8a481aba3705ae4f192"
  },
  {
    "url": "assets/js/page-9f0190e0.3d0ae089.js",
    "revision": "a3d09746e813bc43185415ffb4b38623"
  },
  {
    "url": "assets/js/page-a6174872.2573b501.js",
    "revision": "980bac178e14dc1deae1177da07a9cfe"
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
    "url": "assets/js/page-b0521034.295c6915.js",
    "revision": "8a263f8a3e08c32eb469d8e3d290635a"
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
    "url": "assets/js/page-c26b0310.d8562950.js",
    "revision": "d634ccb72e39172c4ab3d07f39ab5921"
  },
  {
    "url": "assets/js/page-c405dd3e.b8d8b843.js",
    "revision": "3c34ada0d5c133caea770d19b06eb2f6"
  },
  {
    "url": "assets/js/page-c4bdd70e.513ba7cb.js",
    "revision": "c18e7003f4effc1625b4770c21c2dda1"
  },
  {
    "url": "assets/js/page-c5f1a60e.4528d108.js",
    "revision": "7ce722ef1d984299f36fc5a7343230a4"
  },
  {
    "url": "assets/js/page-c60be50a.cfc52c0e.js",
    "revision": "d7844aa825a595f5d3394e23367fd5e6"
  },
  {
    "url": "assets/js/page-d3e58f16.5be9a2fd.js",
    "revision": "053ebe56eb74af61d8eec51ad769ebfc"
  },
  {
    "url": "assets/js/page-d6c4343e.71921fba.js",
    "revision": "80c1220ff4521d98a78579d6ac094d8d"
  },
  {
    "url": "assets/js/page-e468b710.b50cfa1a.js",
    "revision": "b1ed5a24e7cc0a1c0b284882a78aee27"
  },
  {
    "url": "assets/js/page-e72e49e8.f9b1e6d4.js",
    "revision": "a1f967f1780986a9031aef2b7d6d2307"
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
    "url": "assets/js/page-f313c186.1a62377a.js",
    "revision": "44516fbc42307235b4707d7bb6267fbe"
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
    "revision": "4735946f50ae6e05182c7d1899b51e9a"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "9452349035afe518a40909729289a2ee"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "7e1059450bea0a87790d90b0d142034c"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "a79178e31d0629200118e92c0ff6106b"
  },
  {
    "url": "Coding/CSharp/avoid-control-workflow-by-exception.html",
    "revision": "d3e3c89d6f383aeac1097ed21aab5992"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "fa98981eb77503a0510c2496f8a3c03e"
  },
  {
    "url": "Coding/CSharp/safe-access-dictionary.html",
    "revision": "c9a4b6c3ec64d0a291517913dc360cf9"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "e871b6e45ebe16d4893567bdff374a3c"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "fdd61dd5b13a50b9b93236bcd6f5b971"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "74d3c69355b84bc883db836cbce7431a"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "7cd83f2db66217bc8a1f9a9fde45890c"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "70a4090e6edad96b1fd789f3699fca8c"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "cda3f51df04ad9bf76a41beb2c7feef8"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "00600447fc9b2c36244f6d411563156b"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "484eede61776867a60fdc805516b5fe4"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "22eb10a6bf3b38b9642013cfd6c2dcfd"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "5ed28be6768f492bb00cf3d16be913db"
  },
  {
    "url": "Coding/Front-End/CSS/css-quarter-oval.html",
    "revision": "059a62d254fc3db62f87da8eabd5a99c"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "686a1a634855d210b6a1d37d0882cae3"
  },
  {
    "url": "Coding/Front-End/Security/開新分頁.html",
    "revision": "2360a7c5f0f13d11f468dae8cb786aa2"
  },
  {
    "url": "Coding/IDE/visual-studio-hotkeys.html",
    "revision": "2525d385304b018dcacb4cd32d61f9d4"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "47cff3f48421800e8d95f775cf0eff1e"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "04cf4a699c3608564939ba8740efbef0"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "8f86cc5e44708c2b1ce41b5cb66e24da"
  },
  {
    "url": "Coding/JS/publish-package-to-npm.html",
    "revision": "f9f062322330b4874bc828078debfd59"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "a5b972888808ef58a37ef6c686920f90"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/index.html",
    "revision": "7c2390226d0aed91ec9716d597c9e82f"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/Syntax.html",
    "revision": "2ad78f68938f0fedc3ef12596d4c447c"
  },
  {
    "url": "Coding/JS/Vue/vue-event-binding.html",
    "revision": "0b2ff28b83279e4faa661e0f0f2e72bf"
  },
  {
    "url": "Coding/JS/Vue/vue3-experience.html",
    "revision": "38ccf2e469f0a9f81c6849b0a8976c8b"
  },
  {
    "url": "Coding/JS/Vue/vuetify-experience.html",
    "revision": "e19c7794c8c11960af56a84b7ae8a430"
  },
  {
    "url": "Coding/package-tips.html",
    "revision": "2f3caa0774adc6312c957d11aea38e25"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "8d17da6ea95aed6efaa4126c972d6624"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "60a5045f51a2a9a7ddea8d558716ec99"
  },
  {
    "url": "Coding/Server/linux/simple-monitor-command.html",
    "revision": "fc18de521585b74ed6cd07952743349a"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "314813bffc065de041f91fb3eab27de6"
  },
  {
    "url": "Coding/SQL/sqlite-to-postgresql.html",
    "revision": "975f15b29749f415ce97cea19dd1a2dd"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "9a991fab5fbf997ec1f7e1d7ee2a767f"
  },
  {
    "url": "Coding/Website/heroku/coding-tips.html",
    "revision": "4d2d333542060490b8f2ba5105a32d3b"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/back-end.html",
    "revision": "edceac8f4223f095372e3124de4e15b6"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/front-end.html",
    "revision": "cfc1a860806f4f7b9dbe541fd88c232b"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/index.html",
    "revision": "d76ce385a1594237026f88e7b379c66a"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/authentication.html",
    "revision": "1c9537217b7fbc31e1dbf1e8384f158d"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/authorization.html",
    "revision": "eebc6f82ab65af4ab92ef1d88de6fad6"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/basic.html",
    "revision": "ed97e4687e84a5f27ea19ee619eae555"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/page-idle.html",
    "revision": "03d99a005da6f82d01f5d4a21f812c7e"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/user-setting.html",
    "revision": "1a451b69a649d1c08a1f13be55ddbc95"
  },
  {
    "url": "Demos/index.html",
    "revision": "52865c4c25e8542225860305803a1345"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "727ca709efadbbcd99186f76163ffa9a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "f9d280e3fd1c293c1fedba48bc2f6712"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "54c8c08187cd5decfe279517f3ae8a0c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "194cc4990b0002c8429aa4e7d5e4dd41"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "6eceb6be748fb470752b17f99ce65a65"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "7c4b63c9f108bdc329e587972b28587b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "903193a90ec1e2045d122a56354a14d1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "631ce4044af6ec3dec5a05e0a602fc36"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "82d61e3892c92cd1d17e680500d4858e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "c7039310cfa49a03dad2de19733cee91"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "c8bbe0dcc80f95716f4904e806447595"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "7fee747372b83b0c76c12b2df2ecb905"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "0165ced6cbf205befd7ea2397444bbd5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "32760333fb951f237da7288c681a35f2"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "74fe15e384a9ac64ec07a2f33905bf60"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "f01191c0da77790cd84e8f0ccebcc917"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "0fe7866b5d9f92a22771c7dd87214aa3"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "29957f2492455e2ca38cf6acf7af1032"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "57e40a8b1ac8b75abb1895b73e07d168"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "bf2bb7c87d1a3b73ac56f965426e79a8"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "31f5baa742ef82caf9ddf504fd3ec97c"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "22854cfc522d429677cf1333f2392686"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "aa8b8864196ab98650bedfe282c7bcf1"
  },
  {
    "url": "Game/FEZ/5. 3on/3on共通玩法介紹.html",
    "revision": "5eab8bbda97d59a1b28bc38b3444a1bb"
  },
  {
    "url": "Game/FEZ/5. 3on/3on刀玩法介紹.html",
    "revision": "2062495f1b6f871ca45d5f192b6c4f3c"
  },
  {
    "url": "Game/FEZ/5. 3on/3on大劍玩法介紹.html",
    "revision": "68cc1affe37c680d9f196fe888313eb2"
  },
  {
    "url": "Game/FEZ/5. 3on/3on雙修玩法介紹.html",
    "revision": "743965cc36ca1c02f913eb0db016a756"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "2fda7c4d25a7b0957bfa71514c539b2a"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "906dcf7664107c550ec7055e7186b3bc"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "c8f6f3473c11deb9454f3cf454ab0887"
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
    "revision": "fd1e607165d8986e58b48b9610529425"
  },
  {
    "url": "Psychology/index.html",
    "revision": "1616abc51926b23c5883e97c771285c4"
  },
  {
    "url": "Psychology/人群現象.html",
    "revision": "0e0e36c64f727fc82504cc9de8d574c1"
  },
  {
    "url": "Psychology/價值判斷.html",
    "revision": "020f29f390f7174c815b23fe26bca7bb"
  },
  {
    "url": "Psychology/決策.html",
    "revision": "283f354ae71fda509a6b98fd09f29d81"
  },
  {
    "url": "Psychology/溝通.html",
    "revision": "7cd72dc2868c1394b8fd3fd60c4d3eb5"
  },
  {
    "url": "Psychology/組織合作.html",
    "revision": "eccff03515a357026a09456c50c2f77e"
  },
  {
    "url": "Psychology/認知.html",
    "revision": "7c3f044c11cea7f36fc40cd94c2e21a2"
  },
  {
    "url": "search/index.html",
    "revision": "b26a459e530316e5ac97b92777238fb1"
  },
  {
    "url": "tag/index.html",
    "revision": "8e7a52b8dce7af4fdf7c84cd8827cb6a"
  },
  {
    "url": "VueJCBlog/Config.html",
    "revision": "fbdadd91921b32546c626d60c0deafce"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "a042c9e6f3844b2fc5b9e4547000dcb0"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "0f9f86162eceab84152664902fb832fb"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "7edf7ccbcc5cfac9f621f8c7e3817991"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "893d5312f22add030d9c296d764ba796"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "8d55b28285a09ccb5dc9075ec653a404"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "aa0d92b480ef7aa9e6ca8dbee781ad19"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "1292bf63d2ace1da4f51a9a7815ea725"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "75e7c3933f77e4f89b0aae5f388c37d2"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "ec5e5c4c53524b2e3d10ea06fb96f20d"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "b0f9a900503e9e843005af153ecab321"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "171636192738fd590a47664d68246a1b"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "99363256664ff74e7ec16e8275501238"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "c2181511b2074fe9f4fe7a669159b996"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "9436296a8c75b01495145ef678743272"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "da03dbb12dee25cc68695e65ae434590"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "465a153b2f55597be9370369cf72170d"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "209e6b08f6453c80f1c66da3ea7fe601"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "2748a18ff544b41ff37a5578031b84ce"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "7ae2a70595cdbcdd3b1c84ac47c22956"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "c4ad3a68dc7e1b36d1dd7a9610c654ed"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "6bf10e64b2a525ece0843ac046049117"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "16df7f1dd8c9cbe02b7c7fa88b722738"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "b3a85528df958876c521891d9ef0a4eb"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "5d8ebd709edf0ba7a9dd335d69bc11fe"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "c8159501fea1088d939db97c1e4a96ff"
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
