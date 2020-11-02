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
    "revision": "326dd46b44a48755e0bd56a9213b1e03"
  },
  {
    "url": "About/index.html",
    "revision": "e60871abb7c037e9c65c794070470f55"
  },
  {
    "url": "archive/index.html",
    "revision": "ac4465d602ce659525170a1d74684bb4"
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
    "url": "assets/js/104.a2060782.js",
    "revision": "eee28973e6f736ffb34046d00419df3f"
  },
  {
    "url": "assets/js/105.8af27f91.js",
    "revision": "d2332097ea2f9cca22cc0637e94acbe0"
  },
  {
    "url": "assets/js/106.a6b866d7.js",
    "revision": "b3a89231dbd413e447e21daf6de5c10b"
  },
  {
    "url": "assets/js/107.46ccd680.js",
    "revision": "7b7cfc74b92d0393cf6d2ec3cf35f9b1"
  },
  {
    "url": "assets/js/108.8726b402.js",
    "revision": "35421ed1b6330d7634413adf6c71f27d"
  },
  {
    "url": "assets/js/109.2c47567b.js",
    "revision": "0de381e7743ac773198a77b8800e19c5"
  },
  {
    "url": "assets/js/110.68bf453a.js",
    "revision": "850de518efa2181dfc8b113d346818db"
  },
  {
    "url": "assets/js/111.2bef3e83.js",
    "revision": "da4da80ee8facd16391644fc086217e5"
  },
  {
    "url": "assets/js/112.e1552395.js",
    "revision": "52521d58708ffccb7cba80b371a9c21e"
  },
  {
    "url": "assets/js/113.c22a1599.js",
    "revision": "9e7bbe09aac6bbb158794712599b2c76"
  },
  {
    "url": "assets/js/114.b42a047d.js",
    "revision": "33215692f11877ad466f02d841aaaf21"
  },
  {
    "url": "assets/js/115.f9681eb6.js",
    "revision": "71b05317285e61ca513b09019e7eaf40"
  },
  {
    "url": "assets/js/116.bcd28b2c.js",
    "revision": "899feac1167b1a4aed2f81f603c20709"
  },
  {
    "url": "assets/js/117.0914e2cb.js",
    "revision": "e9342b7321a83d09f08af02b2ff3453a"
  },
  {
    "url": "assets/js/118.09b8d43f.js",
    "revision": "04952a21aa36ed0b9e6aeb5107b55332"
  },
  {
    "url": "assets/js/119.90df53fb.js",
    "revision": "4a6cec95e1d89f7ec9a2d34cd265fec1"
  },
  {
    "url": "assets/js/120.7ec1cc9f.js",
    "revision": "ac4147b910695b3e60c9fd820feda17f"
  },
  {
    "url": "assets/js/121.6d0425ce.js",
    "revision": "ae12c6120b027f27c9ce65ba4716d2ee"
  },
  {
    "url": "assets/js/122.02a7feff.js",
    "revision": "796ca006936b09ee12dcde235e1d9514"
  },
  {
    "url": "assets/js/123.dd5278ff.js",
    "revision": "596876e577ba3509fbe7ceed10dc045f"
  },
  {
    "url": "assets/js/124.4519209f.js",
    "revision": "0bcb2a8f57352667e5177a7ad2feb422"
  },
  {
    "url": "assets/js/125.4ad51c3b.js",
    "revision": "a14aea40b8c44ba7e82faff64d7121b8"
  },
  {
    "url": "assets/js/126.c8627b18.js",
    "revision": "ae7adebfb9eb07101f2ef94ba8d6edd1"
  },
  {
    "url": "assets/js/127.1140b25c.js",
    "revision": "eae2a2b56c3f3e9f106fa6e964879b9c"
  },
  {
    "url": "assets/js/128.67360a1d.js",
    "revision": "368cccebb66ae4392976e8ddbff7def4"
  },
  {
    "url": "assets/js/2.62f76231.js",
    "revision": "2441aeab771c71dcb43cb1c4810ec389"
  },
  {
    "url": "assets/js/3.8506dc0d.js",
    "revision": "ee14a78f3518168a643c9590aabdc048"
  },
  {
    "url": "assets/js/4.1c86cc24.js",
    "revision": "8882e5ba6c7d231572322fe0a4c9de7d"
  },
  {
    "url": "assets/js/5.6ee66820.js",
    "revision": "8c339f4927eff35a599e10aa5684eb5a"
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
    "url": "assets/js/layout-Layout.b01ca47d.js",
    "revision": "f4f28f4e1c8684475191eb41ef79b80c"
  },
  {
    "url": "assets/js/layout-NotFound.8e0a65d3.js",
    "revision": "a83c98368d0f170b942757e757912bb6"
  },
  {
    "url": "assets/js/page-0193e625.e00d99c3.js",
    "revision": "a3c1ad278b99b8f063da45d806bfad36"
  },
  {
    "url": "assets/js/page-021b3aa4.09c90299.js",
    "revision": "8ea95ebc1107837817a852d8895b627f"
  },
  {
    "url": "assets/js/page-0a921c99.f6a127ff.js",
    "revision": "1ebef2cd535308a40901fc4464c4b3fa"
  },
  {
    "url": "assets/js/page-0c6c4d65.ebbfadea.js",
    "revision": "8fe7e0d47cc0db7bb448e1a0528023b0"
  },
  {
    "url": "assets/js/page-0c7f77bc.72bdc135.js",
    "revision": "714df8e9e5fa307c6326b25fc85297c8"
  },
  {
    "url": "assets/js/page-0d32e5ee.c31d8930.js",
    "revision": "4ef3f3c486976842fc9876d020355195"
  },
  {
    "url": "assets/js/page-1080dbe2.9eb811f3.js",
    "revision": "89173eda2b8afe0aa4b5bd5a8ffc4195"
  },
  {
    "url": "assets/js/page-1486eb54.2d025114.js",
    "revision": "115f5be0b523065525f553dc0e661e95"
  },
  {
    "url": "assets/js/page-177d640c.84885554.js",
    "revision": "4829c1dce3e4e4b56c8a962410357c95"
  },
  {
    "url": "assets/js/page-1a34eb5d.4e7dd225.js",
    "revision": "aea69310d08b6b19c1f596e861a72b80"
  },
  {
    "url": "assets/js/page-1c4a4e12.65d4859c.js",
    "revision": "125cb82b1bbf0ba83414943335cd9ab1"
  },
  {
    "url": "assets/js/page-1ccc22d8.846f8d1b.js",
    "revision": "2053c6e92758169b6c659ec69b1a36da"
  },
  {
    "url": "assets/js/page-1db42de8.55a8d7d2.js",
    "revision": "5dc43046d248fe1508b3e0af4574ec87"
  },
  {
    "url": "assets/js/page-1e536af9.2de15cc5.js",
    "revision": "aef35df80ff90fb9e11a851d211bb686"
  },
  {
    "url": "assets/js/page-21fcb945.a3a2b74f.js",
    "revision": "8b953d50e8cce065a4487fef6922221a"
  },
  {
    "url": "assets/js/page-25bc4f18.e17f6bc8.js",
    "revision": "5db054d7573b225f0fee4ff030627cd8"
  },
  {
    "url": "assets/js/page-27f6ecec.879a52b7.js",
    "revision": "cb419d0e210a3a78bba88cd4a71c8e3c"
  },
  {
    "url": "assets/js/page-29c918e5.b29c0f53.js",
    "revision": "63a48748edaa267e178a08947f5bfabc"
  },
  {
    "url": "assets/js/page-2c6bc4ab.549067cc.js",
    "revision": "1279d2e85331c5061ae0c204aa30ff64"
  },
  {
    "url": "assets/js/page-2e8c0cd0.26a7bb06.js",
    "revision": "cdfa3b4ebb26d3477f0642c7511c0c71"
  },
  {
    "url": "assets/js/page-302e6251.bd36f72f.js",
    "revision": "8f858e1b236c08c8362abad6544cfb17"
  },
  {
    "url": "assets/js/page-320aac86.865670a4.js",
    "revision": "0fff1a0c5ac8707e172dda1eb297a085"
  },
  {
    "url": "assets/js/page-339369e0.24addd72.js",
    "revision": "d10be774aa26f8b02f9697a38f4ced88"
  },
  {
    "url": "assets/js/page-36d5d2b3.b7dc9fcc.js",
    "revision": "d9826e2a3c6121fd0cf1e1d18bef5d3b"
  },
  {
    "url": "assets/js/page-39e05f8b.844a4ce7.js",
    "revision": "3eb8b7718991fa6a2ff5f9c97a285a57"
  },
  {
    "url": "assets/js/page-3c8dbd4b.b58c76a8.js",
    "revision": "dff2b448c5926fe2994e043d171e0e1c"
  },
  {
    "url": "assets/js/page-3cdc4745.a499d154.js",
    "revision": "d8055b00f3d4066e6288506a1a6414f2"
  },
  {
    "url": "assets/js/page-3ff73aa5.63a522ee.js",
    "revision": "e747a1a360b2d781e46dec593aff31c7"
  },
  {
    "url": "assets/js/page-4107293f.e276ad2e.js",
    "revision": "1f9e20cfc2ce2a5f2fc28329fb4c6483"
  },
  {
    "url": "assets/js/page-4144513c.033b2fe9.js",
    "revision": "e89a72baeb7852056c4cd9feb4e72cf4"
  },
  {
    "url": "assets/js/page-422a7e52.219ca696.js",
    "revision": "df658f7ef5aada92da5672288614f260"
  },
  {
    "url": "assets/js/page-445c88ce.3b8ff029.js",
    "revision": "a72c6c7695262264485c735954148bfc"
  },
  {
    "url": "assets/js/page-4478a866.1c4e036c.js",
    "revision": "f6e64fc1e9b32660498b91753e82c50b"
  },
  {
    "url": "assets/js/page-455360d1.0f7c7dd2.js",
    "revision": "2aac0da5a813398954cf86dc4f114c96"
  },
  {
    "url": "assets/js/page-47f71914.8da2a64d.js",
    "revision": "e3c51437f4be9b5f37b9f5d63614f3a7"
  },
  {
    "url": "assets/js/page-4829d184.4d6294e1.js",
    "revision": "75903c19c8845bacceb854243222c1ba"
  },
  {
    "url": "assets/js/page-486aacae.8a9e95d6.js",
    "revision": "ad77b5a60769b854e338f3848c6b8370"
  },
  {
    "url": "assets/js/page-4d521b14.c5ebec76.js",
    "revision": "3a3c637508cc7053fc7126b29297e9b9"
  },
  {
    "url": "assets/js/page-4d7e2aa5.55bb4531.js",
    "revision": "8b2ac9d40275c3631821739158fbc6fe"
  },
  {
    "url": "assets/js/page-4d9fba32.627582f5.js",
    "revision": "0f380b741d467f5f8b463b7da2c6180d"
  },
  {
    "url": "assets/js/page-4dc00f25.bcbd7a95.js",
    "revision": "5368d9ee95d534f95f65735488597152"
  },
  {
    "url": "assets/js/page-4dc54ba5.9fc9d067.js",
    "revision": "8972b3ef0641aef76b7144c76285437c"
  },
  {
    "url": "assets/js/page-4df429d2.57f546dc.js",
    "revision": "d5236960d09ab875794a08b72ffb8a72"
  },
  {
    "url": "assets/js/page-518ca8d8.d4fe7d23.js",
    "revision": "d8badcd9203832fd8d665a06edafde35"
  },
  {
    "url": "assets/js/page-545b8d99.755d16e6.js",
    "revision": "f702d46234ae1bd66596cca44a44d675"
  },
  {
    "url": "assets/js/page-55a376be.3733d235.js",
    "revision": "de46cd1de1619c8c26315d875db00820"
  },
  {
    "url": "assets/js/page-59cd63bf.5cf1bb64.js",
    "revision": "be228441cdabdb81b07564487dde7184"
  },
  {
    "url": "assets/js/page-5cdb680e.826e9a1b.js",
    "revision": "ed4ec7960fc97bac40008a9d551feaaa"
  },
  {
    "url": "assets/js/page-5de41bb6.328e163b.js",
    "revision": "feeb98e9321f672b0193fa71d16a5e0d"
  },
  {
    "url": "assets/js/page-5edad598.085a90d7.js",
    "revision": "9fd1f05b1e024165b2da3f26f29e8843"
  },
  {
    "url": "assets/js/page-64a9a694.ad9591be.js",
    "revision": "d8ac5ebe614304ec39cd53aeae9c64e1"
  },
  {
    "url": "assets/js/page-66061c06.2873096d.js",
    "revision": "473954ff1d70c2439832ad2082251107"
  },
  {
    "url": "assets/js/page-6890df9a.d9bfbe74.js",
    "revision": "09965e1717975f6290f716dc53761a0b"
  },
  {
    "url": "assets/js/page-68b44e7f.5a191380.js",
    "revision": "e8de425b7a7e1d44f483846858f8ec7f"
  },
  {
    "url": "assets/js/page-6dbff0ea.befba485.js",
    "revision": "ef65ccda49af3f800ebd007b2fa617a9"
  },
  {
    "url": "assets/js/page-6f7fa8b4.42a5f830.js",
    "revision": "007725eee95ca31fada6ab2fdf64a682"
  },
  {
    "url": "assets/js/page-70612fe6.c8ff840f.js",
    "revision": "f9d9ec50448f1724c3a0f830add55be8"
  },
  {
    "url": "assets/js/page-720c8312.d5f8ce77.js",
    "revision": "199d64a4487a43557513ae646892cc26"
  },
  {
    "url": "assets/js/page-74a44f51.bd3e6a13.js",
    "revision": "0a4b07de5c82e8552231f22ae99982a5"
  },
  {
    "url": "assets/js/page-7507c3f6.ef619bd9.js",
    "revision": "418c1d9c02262174c31158c28fd94f39"
  },
  {
    "url": "assets/js/page-761a0ef6.ed72e05e.js",
    "revision": "b009c0c036edee8c916fef58767cb06a"
  },
  {
    "url": "assets/js/page-7690c622.462b6da9.js",
    "revision": "b1f6e1866681f9da3a9ec7e54b46d6fa"
  },
  {
    "url": "assets/js/page-7bfb30a6.5bcac475.js",
    "revision": "9e70b9b70d30373ac95bc3049609d6e5"
  },
  {
    "url": "assets/js/page-7d3a6963.e01a63da.js",
    "revision": "39d53c2c0cec55f1666cc29d77a49a12"
  },
  {
    "url": "assets/js/page-7e6b5e12.e3567529.js",
    "revision": "e65d43cca575953a0eb246a603797c5e"
  },
  {
    "url": "assets/js/page-82c2c642.c7d5933d.js",
    "revision": "90392a40d550f128b677b371052b7ecb"
  },
  {
    "url": "assets/js/page-85f4c948.b98713f9.js",
    "revision": "fa6863f7f20e9bf8592c9d32b954c0f9"
  },
  {
    "url": "assets/js/page-8892394c.e5cc3390.js",
    "revision": "63908deadd3586484b690e9e32d75516"
  },
  {
    "url": "assets/js/page-89b130dc.01be302d.js",
    "revision": "13666fdd558682e150eda5cea53a0651"
  },
  {
    "url": "assets/js/page-8da9df6c.bd296b20.js",
    "revision": "19affa7d4367a0759b22b6a17470e9c2"
  },
  {
    "url": "assets/js/page-916af89c.3bd9ef7f.js",
    "revision": "e32a63c42e5de31b9af21d8327baf9c5"
  },
  {
    "url": "assets/js/page-9a2a43a4.e3f6a220.js",
    "revision": "e2070b806c510d0b0d5494361e90ca31"
  },
  {
    "url": "assets/js/page-9ec1a766.14fe09f7.js",
    "revision": "cea5bebfbc3df0a94d04dda71fb1fff7"
  },
  {
    "url": "assets/js/page-9f0190e0.f7739908.js",
    "revision": "affe23d143381f71011a65f045464a1a"
  },
  {
    "url": "assets/js/page-a6174872.886fbde1.js",
    "revision": "fd31fd582cb5f99f801c80a19d5c02cd"
  },
  {
    "url": "assets/js/page-aab392fc.99afaf8a.js",
    "revision": "999131d6e9e995b1bf7a46da1eced0c6"
  },
  {
    "url": "assets/js/page-ace574d0.be17b7fa.js",
    "revision": "59e124157d364d271d2e74c93aa86e90"
  },
  {
    "url": "assets/js/page-ad24ce34.a8c42651.js",
    "revision": "848a220754c51731d0337d74ea5dea03"
  },
  {
    "url": "assets/js/page-b0521034.63f62e34.js",
    "revision": "c27d6d10d9fb63482f3392f24730e8c8"
  },
  {
    "url": "assets/js/page-b0d90ce6.5753d393.js",
    "revision": "85bfb4d00ae0328ba752a3e40342e003"
  },
  {
    "url": "assets/js/page-b40de7ce.581092d4.js",
    "revision": "18824e7e91fafd3c77394b383149b8f8"
  },
  {
    "url": "assets/js/page-c26b0310.2a3013c2.js",
    "revision": "0471620148e0e1a3041d61503df62235"
  },
  {
    "url": "assets/js/page-c4bdd70e.17260dc0.js",
    "revision": "1276e9a367a5929bad035222da474297"
  },
  {
    "url": "assets/js/page-c5f1a60e.60718fd7.js",
    "revision": "c5bc0190a95ddac5cc6bf508eeca5ca9"
  },
  {
    "url": "assets/js/page-c60be50a.8e4296cb.js",
    "revision": "d72c058979b9d705704d4b9c8a5566ba"
  },
  {
    "url": "assets/js/page-d6c4343e.db1c7816.js",
    "revision": "99ee9bef9444437457a992205cfdce59"
  },
  {
    "url": "assets/js/page-e468b710.7f2e82f5.js",
    "revision": "32340a125f84c923acc6eb27e20fdc0c"
  },
  {
    "url": "assets/js/page-e72e49e8.de77a8e6.js",
    "revision": "5e0fc8ecb574c226fd3779189d23b825"
  },
  {
    "url": "assets/js/page-ec44d602.1bb97a71.js",
    "revision": "f60c104680b038d3c5a1b124e1f3054f"
  },
  {
    "url": "assets/js/page-ed303fba.3742012f.js",
    "revision": "0750f35dd15f4b88d7abc96906c7b8db"
  },
  {
    "url": "assets/js/page-f313c186.e9a648b4.js",
    "revision": "ff1cca9b45d93f102426f733aaca314a"
  },
  {
    "url": "assets/js/vendors~flowchart.30eeed30.js",
    "revision": "bac61689d4888435e1d80aa1f755a3cf"
  },
  {
    "url": "assets/js/vendors~layout-Layout.ce5a5a6a.js",
    "revision": "f82077444f3476e0f778f87b8f1e1313"
  },
  {
    "url": "category/index.html",
    "revision": "81468576ac37448193e9b6d4f794d8fc"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "44490c732f893518a413f9a5aae7578d"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "aef9fbaba8430260704fee0a63f7a939"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "c8ec338d73b021c640f0a181aedb39b7"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "bb6ffe8fd7e39ac5f0f07e9fd122f718"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "234da41b8f382e9903e71676c0d23c90"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "5dc1c4b44595ffb1a8a7c4d55814827d"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "0300adac6710da31dd3a012e36ce2aea"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "7633b6f58365831a967cf63b99f98d2f"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "4e82e827b81d9511ebc1e52917061740"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "8092f785f943d1a10c40b9ca07746123"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "3249453984f187311aaeefd7151a9c2c"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "00007380e73d9f91b7ee9cadacd8cc2e"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "2edc0a319bf0dc7a8b6b08a0e982c04f"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "fdb3bb64fb3a0b81901d0d041112a78e"
  },
  {
    "url": "Coding/Front-End/CSS/css-quarter-oval.html",
    "revision": "2d3c308a6d7a6f2cbdeb8b37dfc906da"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "bae4549455ab26fb69a6e6ca453132c5"
  },
  {
    "url": "Coding/Front-End/Security/開新分頁.html",
    "revision": "9ba52fd02c9bbfa230a7d4e68ae7269d"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "2f5556b886e69e3dea535aeccf4162e8"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "e88f3bd601f0a3cdd5025d32c845f2b5"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "3373b823ae1cfe6a84382ba288446276"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "e6d768ba40f3f385b5ae8ac7aea8c41f"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/index.html",
    "revision": "2341502bad5798735a08f74923c83930"
  },
  {
    "url": "Coding/JS/Vue/vue-event-binding.html",
    "revision": "466800c9c15ff21685af583d5ba88447"
  },
  {
    "url": "Coding/package-tips.html",
    "revision": "3ec9b0edb3bfb65ddc22c61bbb85b27c"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "da2035daa342e24a71c327c7619329b2"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "86680c588b69893e414eb2d91f9b7908"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "d57216e80843581b88b005f12b15eec2"
  },
  {
    "url": "Coding/SQL/sqlite-to-postgresql.html",
    "revision": "037054fa3d1bb4043d2ac248579bb893"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "f0f736d2c8f7abe5d5ccaa8998fd3219"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/back-end.html",
    "revision": "8a528d76a521bb8388705161f583729e"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/front-end.html",
    "revision": "667dc2b28ac6f589c9a9d7abeb3c83d6"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/index.html",
    "revision": "192d359994b7e3ff66ecf8e7d22983a2"
  },
  {
    "url": "Coding/Website/vue-dotnetcore-scaffolding/basic.html",
    "revision": "9840a4e7e8b08d0ecd7aa2c87d647eff"
  },
  {
    "url": "Demos/index.html",
    "revision": "ee8967f49e91db0bbcbca438f9672362"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "30d543a75c0f6a0315dc7c5d98a6a195"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "5a212106b4f6f7f96d636083a9dc61d5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "baa44f3dbd19449d6960fb530e7ab809"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "29f01ef4baaf15cbb8e998c71a745b0c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "48cb8579bb5be52cab0cc882dc1b0b13"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "59eadb8bc032513946ca25799424925c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "68ce1a99576a8fb8bf1c90c858c70cbc"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "dec3f16f7c312d576ebcef31db8286f1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "94dde43000163a7c4e1b389c891020ca"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "eb157879ee99f2d99211b365624ac2aa"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "2d1c9cae66b8a06672331a1dbb2f8f73"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "ebc90e34dba29770ed6a692cb27b501c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "ccea084f8853c286ef3d068b78181f7e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "97333056567248fdbaa3aa0a17f56145"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "6db8a660df18b7f3aa76e90d3e70a11c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "c9931a37e6b01b341f29c8a32e3ad03a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "ad4eb568a42e53b6fc27eb65e36fca15"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "b0c4f7de1737b573a22ca59d4c71860c"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "b38a936c100dac85d7d657afbfa31652"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "4e98bd788781c1dec6267e2881d3f561"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "0d6df038a63bc390dca75748aa38ab3d"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "fc9739a8850596676479af9b25602e36"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "02b28c1f3b1d151b130188da39338a1e"
  },
  {
    "url": "Game/FEZ/5. 3on/3on共通玩法介紹.html",
    "revision": "759ea63a284b9d93f877645b5cde3e2b"
  },
  {
    "url": "Game/FEZ/5. 3on/3on刀玩法介紹.html",
    "revision": "c991c73425fdefe2f6b11c59aa459128"
  },
  {
    "url": "Game/FEZ/5. 3on/3on大劍玩法介紹.html",
    "revision": "094c0c48b22229a31702b1ab85b5fc12"
  },
  {
    "url": "Game/FEZ/5. 3on/3on雙修玩法介紹.html",
    "revision": "a1b9812a23070d2b9b3178d7fb6f4d08"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "b4e55a6dfb00e8bb52c54017606075ce"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "b78d2424f95614ba2a1fb012ab9b8957"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "773a2278d125ea4b2b92a8c8903fcd0f"
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
    "revision": "fc6f09f9889e08ac1a163a22840d8d31"
  },
  {
    "url": "search/index.html",
    "revision": "7de6b4418db8cf0d30ea7a4d965456bc"
  },
  {
    "url": "tag/index.html",
    "revision": "2c74f4990e9d8d4dd1fd1e4216bb5099"
  },
  {
    "url": "VueJCBlog/Config.html",
    "revision": "ba1ee42f6e5e496b64291fdbd575b1c2"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "4081904310d8ffcf2395daf408396592"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "4b2b0145e6696eaed2d13878f3af47ff"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "e777183da660e99344c994ab0068c16a"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "fc441b1bba8fc5f7fd64bd34e9b78543"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "0e8216a16f94b0e5906f53508b292582"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "f43b3873674d7d96349cbe467e377174"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "2faaaf1d1241f030aa0d1ce087dcfe93"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "2c026c23565985c01163234fcc79edba"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "b69179986f9f2f731ec60131fbb2d9ab"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "20f4cfec467a1a68fa4072f5ba9294c0"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "a00b232c293b00321f1a0f2f882e0895"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "214f1c5e48c0df1ed94b1ede74e6576d"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "d956fd1b2860ed341b3f8db0ed622f73"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "d11211189df067526f3e786e3258ba68"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "0354017526329b59cabc101f0af971f6"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "6cd547e5afb58f8c6d69d4ff769ec43d"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "e03ff5b361a6b827db51a9fb7d83db04"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "7b2ab7549169cbc7cca77576375ab9d1"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "b1cb6eaa41b06cbd7b151c11747c46ad"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "7c83ec1d7084c0dabfc90b8bde5720b6"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "4751c86f9e5c12a4aea697d145d6e44f"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "c82bd9af906abba0cc03eab83c985e5a"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "d7bb12c840c1eed7d1682572f0e4f147"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "3edbe6255b1ce0410b52393c82868a04"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "36cf9a90c16806eb1d6eb37f96acc309"
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
