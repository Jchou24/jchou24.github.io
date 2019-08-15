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
    "revision": "5edfefbccd7ec02921ab29109d877c5c"
  },
  {
    "url": "About/index.html",
    "revision": "96a2af0a7d9f28eb762c8d35befaed4f"
  },
  {
    "url": "archive/index.html",
    "revision": "f9ab04e8fdc8f274d447b84d65c77735"
  },
  {
    "url": "assets/css/0.styles.7ac38c70.css",
    "revision": "70b8461030bfc751be12912cf282a4e3"
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
    "url": "assets/js/1.a72bb583.js",
    "revision": "4c74dac5986e94b5eb8814e8ae91c5f9"
  },
  {
    "url": "assets/js/2.8e43167e.js",
    "revision": "ef0df3f7b316cb8d0dceabc6ff2262b5"
  },
  {
    "url": "assets/js/3.a04ad345.js",
    "revision": "57d4f6c6c2f07128843c6cba07c6ab96"
  },
  {
    "url": "assets/js/5.802652d3.js",
    "revision": "ac98ccfa04ee0ba3c3894ea748341e77"
  },
  {
    "url": "assets/js/6.f770afec.js",
    "revision": "33d3a2fd5328206a35a64c16a4683f65"
  },
  {
    "url": "assets/js/62.ef92d87f.js",
    "revision": "77ed83b0ab71f4ccf1ff5534ebaba33e"
  },
  {
    "url": "assets/js/63.cbaeb2d3.js",
    "revision": "9f30d9e07520f1a6cb1eebe36135d937"
  },
  {
    "url": "assets/js/64.920878b3.js",
    "revision": "598ffa8a6869c3014eac97f0f52560ed"
  },
  {
    "url": "assets/js/65.b7769e51.js",
    "revision": "96a282e5f28eeefece7414f0a93d268b"
  },
  {
    "url": "assets/js/66.142d5b0a.js",
    "revision": "dcf680b4da1468276c7bafd2adbaba1d"
  },
  {
    "url": "assets/js/67.5cdef212.js",
    "revision": "1e0ae349bac14dbc8bf724853a9d121c"
  },
  {
    "url": "assets/js/68.2fdaca42.js",
    "revision": "d5d895c7b322410bd12b78ee6ef6a3df"
  },
  {
    "url": "assets/js/69.9841f1a9.js",
    "revision": "f3f9fba457df075d6c1cf87428260d66"
  },
  {
    "url": "assets/js/70.cf310b59.js",
    "revision": "c899473c95aaa4bc884315c5f5bb4cde"
  },
  {
    "url": "assets/js/71.cf025150.js",
    "revision": "ca0a3a1b3c79bd8465e6077eb035c26c"
  },
  {
    "url": "assets/js/72.c76198c0.js",
    "revision": "535a90610466b14961c2b35cd0753269"
  },
  {
    "url": "assets/js/73.adedf19c.js",
    "revision": "9ce6c1ae22ca83f85fe1b06a5a623361"
  },
  {
    "url": "assets/js/74.b8d244c9.js",
    "revision": "2ef98aacb3b352a8de6fa94e06400331"
  },
  {
    "url": "assets/js/75.c694059e.js",
    "revision": "da8025296cdd80e2016a6a9a5d0183a1"
  },
  {
    "url": "assets/js/76.bddf88e7.js",
    "revision": "8719bf4d11ee291099c60fe56f1c9b44"
  },
  {
    "url": "assets/js/77.25dd5443.js",
    "revision": "bcfa891b6022d2f79c160817168de868"
  },
  {
    "url": "assets/js/78.ad6d037b.js",
    "revision": "7ac925da58695e5f585b2ce4ecf15b4d"
  },
  {
    "url": "assets/js/79.dcfbcfb2.js",
    "revision": "06e488c2bb2db3dd1b3300d989f9ed0a"
  },
  {
    "url": "assets/js/80.e3cb4f61.js",
    "revision": "1ea8b07e7d9ccabefd815974a64d7081"
  },
  {
    "url": "assets/js/81.f1b47517.js",
    "revision": "5bc003e48dca0bca96c4afa6bf08fd2e"
  },
  {
    "url": "assets/js/82.de1c9a03.js",
    "revision": "991a92aa629568fceed79aea0a25fa33"
  },
  {
    "url": "assets/js/83.f5978cc8.js",
    "revision": "61bd701828d7ae40273b200cd5e98a08"
  },
  {
    "url": "assets/js/84.c83cca7e.js",
    "revision": "f5a8eaeffee504a7d5ec23a51b928e30"
  },
  {
    "url": "assets/js/app.a9ef43a1.js",
    "revision": "7ba7483797bee974d9cb1112921865b5"
  },
  {
    "url": "assets/js/layout-BaseLayout.701130f6.js",
    "revision": "80c6cbbb34b9be577f1c462b5157bd68"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.5799009b.js",
    "revision": "1bdaf80ef0f983f30a0702c01b53476f"
  },
  {
    "url": "assets/js/layout-Layout.e8f24ed9.js",
    "revision": "0d0bfbadc6137518ad6e46b11464b3cf"
  },
  {
    "url": "assets/js/layout-NotFound.e6cd77e7.js",
    "revision": "ec80bb81daacc8f5c27ebb0fcc05815a"
  },
  {
    "url": "assets/js/page-01b1365c.1b63aa1c.js",
    "revision": "0539a43944f05e75c5568cf2af52d55d"
  },
  {
    "url": "assets/js/page-03ff99e4.aafaa2da.js",
    "revision": "9389061b5854072217f7a3ffd91228c6"
  },
  {
    "url": "assets/js/page-0815fe43.b3db05f8.js",
    "revision": "aa678e56b0dbcb258659cf4a6e7a527d"
  },
  {
    "url": "assets/js/page-0994254e.df0001e1.js",
    "revision": "f535df9b63a3a10632f63447c2f45fd5"
  },
  {
    "url": "assets/js/page-09cfa20f.973afcf6.js",
    "revision": "d89dbf4975f477d2e807b6ccb0c5a942"
  },
  {
    "url": "assets/js/page-0bd5cd98.e3ab4bea.js",
    "revision": "32c9d2c36383208c0234a95cf4fc80b6"
  },
  {
    "url": "assets/js/page-0ca8b05c.43cdda79.js",
    "revision": "0584ce0eb89a30aa76e44d795053f6fb"
  },
  {
    "url": "assets/js/page-130de14f.1a997ae7.js",
    "revision": "c4a42cfb6ce0ff2cb9181a2e74a4326a"
  },
  {
    "url": "assets/js/page-17119ea4.23e9a365.js",
    "revision": "5715d77a00f84a16262b6c80edc6ba25"
  },
  {
    "url": "assets/js/page-1efb5c62.0177d7e5.js",
    "revision": "363a4b51ad1fcc416d021428b8b2b532"
  },
  {
    "url": "assets/js/page-2afe58d4.3c22e358.js",
    "revision": "4c82e32f418cfe9aa6b67deca914cd68"
  },
  {
    "url": "assets/js/page-2ba07fce.d8f86782.js",
    "revision": "0b72cb73f92c10b80829162cdc726f96"
  },
  {
    "url": "assets/js/page-2da25f49.e5a5e787.js",
    "revision": "f41d249625067bdc0075abca23dcca47"
  },
  {
    "url": "assets/js/page-2f77601c.38895b86.js",
    "revision": "8beb870da6ba2f40bcd823d735a445cb"
  },
  {
    "url": "assets/js/page-36058925.68b489eb.js",
    "revision": "e11d813c25c657f3ccabf08ae9fe8f54"
  },
  {
    "url": "assets/js/page-3721e5cf.342be1d8.js",
    "revision": "17fc09509c9f3bd7ef9556ff1ffb37a8"
  },
  {
    "url": "assets/js/page-38e94d3e.6c43de80.js",
    "revision": "2d7c90da7609928dbd3f34d70c8b8e0b"
  },
  {
    "url": "assets/js/page-39d006b5.4a7953f3.js",
    "revision": "f8ff6d75c4bb8042975e87aabab1aa7b"
  },
  {
    "url": "assets/js/page-4048f79b.7bf5b5b5.js",
    "revision": "13b160cb9268d166cf0b74f8f7853fa2"
  },
  {
    "url": "assets/js/page-409d673b.d40a7e1d.js",
    "revision": "f6cb597177af4f849a3f3e15ed57c539"
  },
  {
    "url": "assets/js/page-42a0ea7c.7695b8d9.js",
    "revision": "caa485c32f3a29287bf2a264f0d27d3d"
  },
  {
    "url": "assets/js/page-4773a0fc.43d65d70.js",
    "revision": "dca08b484c7d61def19005c01536066f"
  },
  {
    "url": "assets/js/page-47ec31ef.de22dee5.js",
    "revision": "a09b7df3956ed94d3af6eff299f80b53"
  },
  {
    "url": "assets/js/page-494b7749.b795e9a3.js",
    "revision": "5e6e9ce40a848805c19195215aed10ff"
  },
  {
    "url": "assets/js/page-4e40ef0e.acfe34ac.js",
    "revision": "00702df6aab92ba42964bade68588b60"
  },
  {
    "url": "assets/js/page-4f5eb00c.deae44de.js",
    "revision": "beccb2cbb9fba2c7a3a6fdba586e0de7"
  },
  {
    "url": "assets/js/page-52453899.6c3ab705.js",
    "revision": "e3fc1e4dcf845d95e25d49477c1ade84"
  },
  {
    "url": "assets/js/page-56c5add8.b58e6f6a.js",
    "revision": "c8f9af89ec35957c84474444b7f9ee06"
  },
  {
    "url": "assets/js/page-5971d062.2413bcca.js",
    "revision": "5310bb092865ca4fa4d120bd211772c6"
  },
  {
    "url": "assets/js/page-5ae76184.19b1c13c.js",
    "revision": "89980f2a4a9698a67eaaa07d7f8d2fad"
  },
  {
    "url": "assets/js/page-5c24028f.4662e4c4.js",
    "revision": "85d4c6dd599de06946334698345bafbd"
  },
  {
    "url": "assets/js/page-5dade32f.c4ccb17c.js",
    "revision": "40b7399a7dfb48ead07a309a71bd22a9"
  },
  {
    "url": "assets/js/page-62c3f84a.a0444a24.js",
    "revision": "b26dd21afd7b1e93a73d6414e9d91b6d"
  },
  {
    "url": "assets/js/page-631831dc.048d8784.js",
    "revision": "f1b8531a16bedc2e8078e444f590175c"
  },
  {
    "url": "assets/js/page-64c6c3f9.132c4d70.js",
    "revision": "d3ab781bb917851df65899e4a0dd74ba"
  },
  {
    "url": "assets/js/page-68a3e126.356fa3a9.js",
    "revision": "d17ef0dffd4ecc78156b5c51c4e6c061"
  },
  {
    "url": "assets/js/page-718e3f13.9cd7c4ed.js",
    "revision": "375092cca6fd786100e6d5bd2b085d9d"
  },
  {
    "url": "assets/js/page-7961fc62.463b0ea2.js",
    "revision": "5a0f59c84dd099491fc9343d48244b3c"
  },
  {
    "url": "assets/js/page-7e22c02f.e2013263.js",
    "revision": "6c44183ef18236d5296baa4b7f59a65f"
  },
  {
    "url": "assets/js/page-9a13860a.429a400e.js",
    "revision": "bdb6bc14028335ac778e089e9be86465"
  },
  {
    "url": "assets/js/page-9d704b70.0aebe02e.js",
    "revision": "f370a97ebe336300f9f93684e6b17cee"
  },
  {
    "url": "assets/js/page-a1c83fc6.9741e03d.js",
    "revision": "978906b89342cd33ab3ce244259106e1"
  },
  {
    "url": "assets/js/page-b6123e24.34f1bbfd.js",
    "revision": "e1cd3cda1abee3f6baf6f773e65e39b5"
  },
  {
    "url": "assets/js/page-c1e7a5fc.851055a5.js",
    "revision": "c67ed60d4aed6c236b657cd2a988b126"
  },
  {
    "url": "assets/js/page-c41b383a.15fdfc05.js",
    "revision": "820acdedefd8ef4f202a3aeb20cabba0"
  },
  {
    "url": "assets/js/page-cd03364e.b0fe26d0.js",
    "revision": "a3dbf72e78d89288624ef1ae2c812819"
  },
  {
    "url": "assets/js/page-deb70f94.95a1adfb.js",
    "revision": "091768bc657886a4a058d345db7f9ee3"
  },
  {
    "url": "assets/js/page-e869018c.f1c67a15.js",
    "revision": "d2b18af8c2431cc4c00294564539683b"
  },
  {
    "url": "assets/js/page-fa2e9ecc.5e6d6dc4.js",
    "revision": "93da1c7167241f770375d58b8e0b4bd3"
  },
  {
    "url": "assets/js/vendors~flowchart.e7614f86.js",
    "revision": "838b67a3c55107e0683f5725eee2f419"
  },
  {
    "url": "assets/js/vendors~layout-Layout.3a67db1a.js",
    "revision": "0c23e27d261a318550557189c5154f5a"
  },
  {
    "url": "category/index.html",
    "revision": "f46550b187dd677f0d58a617d8d97fc3"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "cbf704d01b6153095457993d24491720"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Format.html",
    "revision": "f0fe25e1716e7fc6e27a69dd6921d5ff"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "335d4ebfdb88ee2d22069216c1b8e0e4"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "9bd4d107b424ac7028c79bc70727e96b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "0351cbe14738106df4a80b0d134398bf"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "55e70c9432d8509180992ae43edfad38"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "02c02c98330ec15429e6f97b831819f4"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "931a98831508f7d4cfc519312cc83d6f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "f4de487c4a0b9060f02bf3a1a15acf1c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "a9a1b9c24908e0c979b5f1a4bea72681"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/走位.html",
    "revision": "1a11750d6f328f49b50c641896d2d676"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "ec3e6e795fe30407b080753c2b771f76"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "af6a8fe141d579a13b4bf95ce66f5cd6"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "2aac40964e204d413f345e7b66abe6eb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "2cf6d4cf438d7cfb6884519007e66293"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "f19547658efde80ccd0a8d50b92c439f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "1b4cbc55a55c7662cbe73f6a3e221c93"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "bf1c04e58c2baf144b6457700c576ded"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "e55ea5d93c66863538684e76fccacc78"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "3fd705cded3c4c0bd9799079b3e226e0"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "23e71e699f241a51503df110585b9df2"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "e0aa2bbddf60f2de5e725d58bbf8a3e4"
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
    "revision": "8b38899d8597ee45f1ea8fe20c51942a"
  },
  {
    "url": "search/index.html",
    "revision": "4e31a682a45bbce536a2c5c02b4f49f2"
  },
  {
    "url": "tag/index.html",
    "revision": "aa3bb561b3f223aee779f2e87bc9a227"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "5c34ecdc6f071bde012c21c3f12601d6"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "dca00dbd78d364880789a2f8f2296ab7"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "4328ccc19ea57182682e5ea0cd1455b0"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "b86a138335af7a8ed2483922a7ceaa1f"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "39c6b726673881a970d41e5347c181b0"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "0a61524ff2238fba2c1d944c132548db"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "216b81b9fa6aa2855d38e7aefd8ecd4b"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "b24107d094362e6adb9e2a45db582fa7"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "4c0ccb2de948fe17599ccf25581c7d37"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "ad7c6af2d27c14a26fad6e19694eec07"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "7dd7eb21c51fa2801f2ad64068b25a71"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "e02f7d7d6f9297443e36482d485f1d0f"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "305a8826ca382fc0b10f88ded141c760"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "633f3a1509440e957e4059764a27bb3c"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "38edc3d7895729c8fd6f4d25b9da70a3"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "eae6b588787fd5020904a27dd5f6a646"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "eb78cfdf38758b6ebfb8483e596bb7a9"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "e9cd6d7a7c0c9691d9480adc3c369a36"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "f2228cbe090f6229f3dbb8cb08a03916"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "aea36213692c13dc490e9f638a661798"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "b82e2f1612357e862da2e17163afebf0"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "2065458fe5727b37c5535f987acf8ae3"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "957326d99b9060f70699c1769e2ff0a4"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "8b2b52f0161011367cd9fd487bebc311"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "8c204e1a01793a41e3bfea0a85c80ae7"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "659899a42e0ede4c8eb81c750a482663"
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
