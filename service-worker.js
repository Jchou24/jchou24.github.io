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
    "revision": "6741ce74d303676c6631b9f20aab0dbb"
  },
  {
    "url": "About/index.html",
    "revision": "33ddf4f9e48241d5937c91b8922bed0a"
  },
  {
    "url": "archive/index.html",
    "revision": "f644cb21431211899d0117b6f23461e2"
  },
  {
    "url": "assets/css/0.styles.2d78dfb8.css",
    "revision": "b86b62d2638ba738e620167716411cf8"
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
    "url": "assets/js/124.a932635c.js",
    "revision": "0a58ecbc309fae2ca6cd7e3ee2c0ce2d"
  },
  {
    "url": "assets/js/125.e93f04ce.js",
    "revision": "03d28436da5b822d6f3b7206f92645fa"
  },
  {
    "url": "assets/js/126.ddc4b150.js",
    "revision": "881e40f82f4933be78412fcae3f169ca"
  },
  {
    "url": "assets/js/127.69af5b73.js",
    "revision": "dc01a8b484af176982af29b12b5d024c"
  },
  {
    "url": "assets/js/128.7362fdda.js",
    "revision": "2180363e20b0d150ad3a903f76b7b430"
  },
  {
    "url": "assets/js/129.17cbb03e.js",
    "revision": "9614953091ccc49be11fed650bec82fe"
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
    "url": "assets/js/134.74b36e54.js",
    "revision": "2d2559bf472e4b348f3f4cb8ec56a3d2"
  },
  {
    "url": "assets/js/135.95dafcb8.js",
    "revision": "e65323dbf8d41765db764db2f1a158c9"
  },
  {
    "url": "assets/js/136.f95f2bab.js",
    "revision": "d3e9c0fa961e2f7a81d9a3fa20a655d2"
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
    "url": "assets/js/140.51473bf7.js",
    "revision": "0b040b7bdfaa3ffa768a46c2e3c5f61c"
  },
  {
    "url": "assets/js/141.28ade5ca.js",
    "revision": "5ffd31ba673a93296c9c1ed030259505"
  },
  {
    "url": "assets/js/142.1aeb4426.js",
    "revision": "938c8a85ca8480d38eab51f0a408d9e8"
  },
  {
    "url": "assets/js/143.e9ada836.js",
    "revision": "ca873f3ce8b8fb4bf7f9d472ff44c9c5"
  },
  {
    "url": "assets/js/144.50548ca9.js",
    "revision": "654c2f6a2f432b385f210f2e87d99539"
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
    "url": "assets/js/4.865bd174.js",
    "revision": "a6cb07350b320a7942310c3afcb2f1e9"
  },
  {
    "url": "assets/js/5.2caf0ccb.js",
    "revision": "3e4b1242f6cd13af8646fa251b0350f6"
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
    "url": "assets/js/layout-Layout.56d9f4b8.js",
    "revision": "a774d7c8dfd3d3e9b619e8228203aad0"
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
    "url": "assets/js/page-021b3aa4.0e0c3d25.js",
    "revision": "6d8824d3ec13355e735f4985628a4773"
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
    "url": "assets/js/page-0c6c4d65.24ef6b34.js",
    "revision": "2c3a0e29f7a5b01607d95d15b363e7ab"
  },
  {
    "url": "assets/js/page-0c7f77bc.c10c9339.js",
    "revision": "923bcc3664b5726300e47ab4ac29b130"
  },
  {
    "url": "assets/js/page-0d32e5ee.6686ed2c.js",
    "revision": "6831c34e347a64c736c22d48fc709861"
  },
  {
    "url": "assets/js/page-0e69d9d2.5c8f0b7a.js",
    "revision": "25cba30365df42a72157e3fa7042da1b"
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
    "url": "assets/js/page-129b7428.3de5f32c.js",
    "revision": "865c9794464bdf140bf57f0bbfb161c7"
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
    "url": "assets/js/page-1c4a4e12.198e778f.js",
    "revision": "1a13a442613aea796535d5a25f5fd12e"
  },
  {
    "url": "assets/js/page-1ccc22d8.dfdc58d3.js",
    "revision": "380e41f099caa385adac88b974cec997"
  },
  {
    "url": "assets/js/page-1db42de8.125ea93d.js",
    "revision": "c59c2637818eba5c7dfec38e25d601d6"
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
    "url": "assets/js/page-2c6bc4ab.f8192e56.js",
    "revision": "5d6508fa411239c907c6183a0333bc59"
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
    "url": "assets/js/page-320aac86.7dba8da4.js",
    "revision": "80a8d737ec6f3617e200c757aecea11d"
  },
  {
    "url": "assets/js/page-3229196c.8ab07ed0.js",
    "revision": "777aadc798ba24b19674f26375eead21"
  },
  {
    "url": "assets/js/page-32acecfe.0903e40c.js",
    "revision": "e47415a9b68f4379bf9808a714ee89c8"
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
    "url": "assets/js/page-3c8dbd4b.f6dce87f.js",
    "revision": "dcec22e748e5426babf847ab8b04c9f6"
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
    "url": "assets/js/page-445c88ce.2eb9d821.js",
    "revision": "978144af57be846c1caf549265742b52"
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
    "url": "assets/js/page-47f71914.4ca304ad.js",
    "revision": "94143dd9e5f799ceca527394fd56c4fa"
  },
  {
    "url": "assets/js/page-4829d184.7b18600a.js",
    "revision": "5e32a542ea1368940b44228a4c7494aa"
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
    "url": "assets/js/page-4d7e2aa5.edb9e9d2.js",
    "revision": "be46a7e46090aabee058ee0958d5b369"
  },
  {
    "url": "assets/js/page-4d9fba32.5f16790e.js",
    "revision": "9bc55fc7c92984e411cd5ba52b64ff1a"
  },
  {
    "url": "assets/js/page-4dc00f25.e2d0703e.js",
    "revision": "0e5d0fcef20eb0b8ab7327381393b121"
  },
  {
    "url": "assets/js/page-4dc54ba5.26d4ca9b.js",
    "revision": "f10ecef585bc9370b87ac4e5297d8262"
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
    "url": "assets/js/page-545b8d99.182a1c0d.js",
    "revision": "43a7c85289baebf55a736db5621481ff"
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
    "url": "assets/js/page-5cdb680e.72dd6f26.js",
    "revision": "d48732db66bc972c0f65872a2440db16"
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
    "url": "assets/js/page-63d82e5a.1ec90229.js",
    "revision": "d4da3ecd0834b8d3c1c6a589254a425c"
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
    "url": "assets/js/page-68b44e7f.20fb9b11.js",
    "revision": "c591c82c7bbfc3784eca6fd9e47fb2b1"
  },
  {
    "url": "assets/js/page-6dbff0ea.c13c1f16.js",
    "revision": "3700d824c65e369a5e80c6ba9a04806e"
  },
  {
    "url": "assets/js/page-6f7fa8b4.9e64f71f.js",
    "revision": "559b28fd8e21f8dab321a8a05ad0a5b3"
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
    "url": "assets/js/page-74a44f51.1de6c274.js",
    "revision": "a8d0d540edfeffd6141a039206266776"
  },
  {
    "url": "assets/js/page-7507c3f6.e1321fca.js",
    "revision": "1ee83f53699c4c8357ab55cbcda4f51f"
  },
  {
    "url": "assets/js/page-761a0ef6.b154cc91.js",
    "revision": "386772189f4f4f0f6842ae2863af86b7"
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
    "url": "assets/js/page-793331a0.fc095d2a.js",
    "revision": "2f1a7be3a5bdbf5a1b401fdcb6038909"
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
    "url": "assets/js/page-7d3a6963.866110ee.js",
    "revision": "2564942eec2d53c0e7c3a6cd6d9e616b"
  },
  {
    "url": "assets/js/page-7e6b5e12.7723bfdb.js",
    "revision": "16df164d9099198f7cbcc948921bf1d5"
  },
  {
    "url": "assets/js/page-7f3fbf36.c297f6bc.js",
    "revision": "89363c2e67878bed7dafe0bca1eed9e9"
  },
  {
    "url": "assets/js/page-82c2c642.dc17ca56.js",
    "revision": "6678edca33709fd2ee8cea4ab3d6bf23"
  },
  {
    "url": "assets/js/page-85f4c948.6159ec4c.js",
    "revision": "4baec10c9ac6f1a6687006cffe8a97be"
  },
  {
    "url": "assets/js/page-8892394c.3b9a5706.js",
    "revision": "e0179642bed8a731621c979b656a18e6"
  },
  {
    "url": "assets/js/page-89b130dc.79113d28.js",
    "revision": "ec9a20719283aec64b4296f4f5a352c9"
  },
  {
    "url": "assets/js/page-8da9df6c.537ddb55.js",
    "revision": "7e029d1e2f0f2fd644a58eea804d1ff8"
  },
  {
    "url": "assets/js/page-916af89c.03b13237.js",
    "revision": "3708724cd2797ba3e6043fba6bfce5ad"
  },
  {
    "url": "assets/js/page-9a2a43a4.309f528a.js",
    "revision": "257e73c7582a5ffc6fa27f855f41c9e1"
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
    "url": "assets/js/page-a6174872.c39115d5.js",
    "revision": "a71c953ad234e0fcb55a122a8e9ca119"
  },
  {
    "url": "assets/js/page-aab392fc.001c3187.js",
    "revision": "d1ef2c11b469eecbdef6a08e97611825"
  },
  {
    "url": "assets/js/page-ace574d0.fef65055.js",
    "revision": "fed466241953f044fb93091de47d1d20"
  },
  {
    "url": "assets/js/page-ad24ce34.d2a94978.js",
    "revision": "548a9b128961f23483fb1f3efa5a2fde"
  },
  {
    "url": "assets/js/page-b0521034.0142b022.js",
    "revision": "ceb688de614d472e7b4ba6fee6f5eb5a"
  },
  {
    "url": "assets/js/page-b0d90ce6.cb238011.js",
    "revision": "e966afc53e633739f73541fc1c1897e6"
  },
  {
    "url": "assets/js/page-b40de7ce.be7dbc67.js",
    "revision": "d161dfe7c8600daf357a5eb902e300a7"
  },
  {
    "url": "assets/js/page-c26b0310.27a38a1f.js",
    "revision": "2aabe06883b172d64118487cfd585a41"
  },
  {
    "url": "assets/js/page-c405dd3e.46e9fb78.js",
    "revision": "596e9e13a2f7892e616ede0510eced6a"
  },
  {
    "url": "assets/js/page-c4bdd70e.61c39909.js",
    "revision": "95b8309c74a552305102caa89eecbe88"
  },
  {
    "url": "assets/js/page-c5f1a60e.19a2060c.js",
    "revision": "69b26c6683085086843a22f1edb0baee"
  },
  {
    "url": "assets/js/page-c60be50a.1cbadcfe.js",
    "revision": "d6fb939beaf3f2738311c76ca9cd1ae4"
  },
  {
    "url": "assets/js/page-d3e58f16.b2eaa22b.js",
    "revision": "9b278da2adf805be6716d6990afb723d"
  },
  {
    "url": "assets/js/page-d6c4343e.c0a97135.js",
    "revision": "ff9dff4d4d28fa862750d467b2c2520c"
  },
  {
    "url": "assets/js/page-e468b710.b50cfa1a.js",
    "revision": "b1ed5a24e7cc0a1c0b284882a78aee27"
  },
  {
    "url": "assets/js/page-e72e49e8.931d9264.js",
    "revision": "e69f9994fda61b4f2ba7b4830fbeaed2"
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
    "url": "assets/js/page-f313c186.a4d38404.js",
    "revision": "225cbb01c9a2eda219a2c949122f0c74"
  },
  {
    "url": "assets/js/page-f6776002.7ccc7618.js",
    "revision": "4e2a72b22e867db9bdc84f0814537e4e"
  },
  {
    "url": "assets/js/page-fe61e53c.33bd738a.js",
    "revision": "de72cce6c3c76ddc677ec59cb762dfa2"
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
    "revision": "386b0d9c56fa1bb723c7786edd5bbe94"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "4d881f28840fc78107592e7e07159d9a"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "cc5e5f90ff697c47651755b430bf6339"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "9321223020f24d374196afda04d3c99d"
  },
  {
    "url": "Coding/CSharp/avoid-control-workflow-by-exception.html",
    "revision": "202de86b94ce73d87baed6386dea3ddd"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "3cfbb679e014bcec053815d72a2479e8"
  },
  {
    "url": "Coding/CSharp/safe-access-dictionary.html",
    "revision": "4190ed75e3fc094badbe904675ae53c0"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "30f20f849d13866211e5b265a5b87c22"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "d754f870fde21dbea69de1675f02b1ce"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "407d41e17d28102c4060d61423763cf0"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "f9e45182aea4dd94816afed9316fd39c"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "feebfb6fc8b6be95d9daf402989a67c3"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "591acf2faca8be6f26bdf58a29326c38"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "777b38a88e0538070e2c3f060761ca8e"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "30b317f6bd6ab7066ae1555647c3313c"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "d531bae928e532485a29c530c3a8c75d"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "5eab14d2a3ffaab36eb83c91b880d9c0"
  },
  {
    "url": "Coding/Front-End/CSS/css-quarter-oval.html",
    "revision": "95ca960ff3e453be9602ca634017e1a8"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "3bf0dfb7f35dc0166c2e2de0f284ad02"
  },
  {
    "url": "Coding/Front-End/Security/開新分頁.html",
    "revision": "bb53a64670854012b88d9d46862b3a14"
  },
  {
    "url": "Coding/IDE/visual-studio-hotkeys.html",
    "revision": "a7d01cbdebc65e06bc8500bf6e792140"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "6e7d5f21dbed1d8b7a0109d6575f1a45"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "009ce059329729f9da214c7c920bd522"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "8d12d7b788fa2d23e3f8e37ec52aa2ae"
  },
  {
    "url": "Coding/JS/publish-package-to-npm.html",
    "revision": "f7ff5e5552f1bb9c5a9425bc818cb8d8"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "19e7bc3a20e2e89ba532b03a88e152a3"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/index.html",
    "revision": "2d5b44aacc5c395f731876b04efb5be2"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/Syntax.html",
    "revision": "24334c521dbd961c58f838990c7ddc22"
  },
  {
    "url": "Coding/JS/Vue/vue-event-binding.html",
    "revision": "bfbf9517a6fa1914d9e3d994c808d049"
  },
  {
    "url": "Coding/JS/Vue/vue3-experience.html",
    "revision": "d60249aada6ea055cbae7241d2f62eba"
  },
  {
    "url": "Coding/JS/Vue/vuetify-experience.html",
    "revision": "407481b16e8efee185a6a0819c9c589e"
  },
  {
    "url": "Coding/package-tips.html",
    "revision": "447a49abdf245d0d92637a6d98d3f648"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "82bad670f0ac93f7989cd9927eb339ac"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "e8ba9159ea00f9ebcd6ec9ca58f32dd6"
  },
  {
    "url": "Coding/Server/linux/simple-monitor-command.html",
    "revision": "3a36b7046f65f1eaff0d6b3030f3dc5e"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "b302a843e959aa362184f2a146482d73"
  },
  {
    "url": "Coding/SQL/sqlite-to-postgresql.html",
    "revision": "c7dfdf74862b147ac8aa3e84e8871540"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "8c29445a04f6662e3c04e76b09536828"
  },
  {
    "url": "Coding/Website/heroku/coding-tips.html",
    "revision": "42ce0f960246c9776503d4e5ae1a1f0d"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/back-end.html",
    "revision": "7fce6be61805df372aafe240bf7dfd9f"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/front-end.html",
    "revision": "a62026c86955b8cbed02c5bffb31ac89"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/index.html",
    "revision": "d90b2ab238d1deaa1acfd355b02dc400"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/authentication.html",
    "revision": "7d7c2a5b71976d7c764a530115206280"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/authorization.html",
    "revision": "64832ced8fdb22ec057a5cfa5a368c6a"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/basic.html",
    "revision": "c800e187825c604408f9396fb56b893b"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/page-idle.html",
    "revision": "5f039af0684e5187af946c2dd4ec5f9d"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/user-setting.html",
    "revision": "a800d35046734b8bd5db830f3ba60bf4"
  },
  {
    "url": "Demos/index.html",
    "revision": "3e1ab0d3d0880eb6f96c226bd0dcf6d4"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "0c3317ea3b95c21ca7e608e1d688e644"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "9fb3537e8d313d8a0d8441abb5212c30"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "c411195ae158fe6add966d66b8a45150"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "4a0a9216bafca9e5e6d8a9bb5f75a052"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "f3b7d5b7e9199686c3e893e6ee78022b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "0ff98cee64b9fc87616627b362330118"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "61785e06de51569b98f17d30c1f3d603"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "fad63b5b77d52332a551c9dd2d6b496e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "d2d48f8b58c0efee351e5d4594276df0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "a04cc86d6dbf538b25f9128ecc66a46e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "1872e731526ab63471b52decff53b2f6"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "fb0dc5f58dc7c5a6a8c52e8411e01237"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "998a0d59fde04b9588c897d2afc8b33f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "753fd820faa95bd039b034042a8f2c85"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "5de8835e97475729ca8d35f46a036e8d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "df1f7e97309ddb124c7470ef499ed193"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "6219592412366d372b4d142edefe36b8"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "c8e67bb41201fbd050828123e257fb9e"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "0637c821d941aaf02cf5598ae6f83c53"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "1f068a631435046fddd179a77e737914"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "b6cac81299bf915dd9e4e9c2ae34fc0e"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "931ca473a1608cd190ca5058f45cbf7a"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "1581cdc88b5e104625e1802136137a44"
  },
  {
    "url": "Game/FEZ/5. 3on/3on共通玩法介紹.html",
    "revision": "4629770f2a9a32cee294f8313389d70e"
  },
  {
    "url": "Game/FEZ/5. 3on/3on刀玩法介紹.html",
    "revision": "f9de5cea4e91e950ef45770ad2b8a21f"
  },
  {
    "url": "Game/FEZ/5. 3on/3on大劍玩法介紹.html",
    "revision": "46bdbcb8a3a03220d4ae686a2e32f97a"
  },
  {
    "url": "Game/FEZ/5. 3on/3on雙修玩法介紹.html",
    "revision": "d2c8fbdf3e363ec06c1c286031bfe6eb"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "4017f495666f31dbfbf607db23637a4c"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "e21a8057418433053f75ef7820f74c03"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "b788c68338fd90a42f397920021f6d30"
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
    "revision": "4b0832f5dd31d7949901d363b1005bde"
  },
  {
    "url": "Psychology/index.html",
    "revision": "d5fbe7fb12610e5b08f2de48ef2b33a8"
  },
  {
    "url": "Psychology/人群現象.html",
    "revision": "0f5c2faaa89673b5e40683348a6511e2"
  },
  {
    "url": "Psychology/價值判斷.html",
    "revision": "094d8a625ea368b663b02b123d063dbd"
  },
  {
    "url": "Psychology/決策.html",
    "revision": "fff52464d5e3f046f96300af3688d240"
  },
  {
    "url": "Psychology/溝通.html",
    "revision": "f2c9c8a11c43b6331c940c0493dc1632"
  },
  {
    "url": "Psychology/組織合作.html",
    "revision": "6e19c3165dcb8223a4a3b280dcb3bd89"
  },
  {
    "url": "Psychology/認知.html",
    "revision": "4c5571bd419aab6693610426ce67f226"
  },
  {
    "url": "search/index.html",
    "revision": "ff5d9e750f4fd8c702ca216aff8b0c21"
  },
  {
    "url": "tag/index.html",
    "revision": "6e48e885f231faffef41e385fdf0f5ed"
  },
  {
    "url": "VueJCBlog/Config.html",
    "revision": "91071188b0650f778ee7ca849b119f1b"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "5f4ccc8b4458d7a27eb66ca97395cb8b"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "e56f0bac720aa4812faadec33ab9a742"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "0f78c0d34a5a234b9db9e94bee9ae3ff"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "abb6d65fe43961b85bb4f72e1b7d3cf7"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "5c35738892477e8ad2f82f4f1c65ae82"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "dade3bd03f76add7e576a3c733780b7e"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "f2d17c6a58f1ce5724fc3fd760234a9b"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "04b95c04620dd1b44495305cb09b5d76"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "30693063fa0ecb1a4f0683e9d92eefce"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "dd296b29cb89ea128e2d0a5d49c83091"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "79b7952bb0b250a834192b59487f66b5"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "dc2d6ce2119895d24fa0225c0ca056d4"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "ae65168680988739202d0e389ea48a6c"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "359087d093e550f20e451a34079f5c40"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "8833bda0ea0e7f1a828157fdcd4ea515"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "5135cc2d70685679e9aed3439008f448"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "fdf784af58ff7d5c5ae7bde5600cc25c"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "f7b61b68b337fd793a62517cf375a4df"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "716c951a1c6e5e6a01d47a59b40d9cc2"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "6101ed55d0325a58350f0d49d4e2335f"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "4952af336842cd2ce19e97894a8cc094"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "ca6f17e5f6f58b696fc1acb58e388c53"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "d815add4691f1c2833434747631dbbaa"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "487b52026f36ff0409f50eea15f5a374"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "48c2900ee9f73c57849895de52bb4126"
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
