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
    "revision": "b3fa9343b4022339c9c25875b0dc15f1"
  },
  {
    "url": "About/index.html",
    "revision": "a21ce48f67c255d6e59cf4f2257d0c17"
  },
  {
    "url": "archive/index.html",
    "revision": "80744d4bb86b7698aee990b7f21a4bb4"
  },
  {
    "url": "assets/css/0.styles.e89d9017.css",
    "revision": "e953193a74cb66fa7dfcf5a3ac889ad9"
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
    "url": "assets/js/6.c1adc221.js",
    "revision": "f3d01cbafac3d1781080fc1ca87589bd"
  },
  {
    "url": "assets/js/71.dcdde32d.js",
    "revision": "3e28289cfb17bf1aeff608da41ace914"
  },
  {
    "url": "assets/js/72.fe364393.js",
    "revision": "51e66f4e93629f9b26e1db4b644b0702"
  },
  {
    "url": "assets/js/73.fde4c545.js",
    "revision": "783e8eb4c9377a856259ca0dc9c88dc1"
  },
  {
    "url": "assets/js/74.1805b2ab.js",
    "revision": "d3f60a7bbaf4ffb6ae4111f04f5ffdac"
  },
  {
    "url": "assets/js/75.244d761e.js",
    "revision": "33b6919ba0483fde9822e5550735ad48"
  },
  {
    "url": "assets/js/76.5e9b3575.js",
    "revision": "6c648e5ee08057ea78909b9f5de21008"
  },
  {
    "url": "assets/js/77.a18fc60c.js",
    "revision": "15a3de0e3258f9264f876ae21ee00ac5"
  },
  {
    "url": "assets/js/78.cd0f1ee3.js",
    "revision": "7235619901be9b772087220767265fc0"
  },
  {
    "url": "assets/js/79.b2b1b035.js",
    "revision": "6dcec478917007f30364ec7e473c6e65"
  },
  {
    "url": "assets/js/80.accd52d4.js",
    "revision": "fea1712728ca44d93edb6d22b7338fde"
  },
  {
    "url": "assets/js/81.ec2a2f5f.js",
    "revision": "4cde5aa4acee41515d6f8442f47b0d39"
  },
  {
    "url": "assets/js/82.c547c707.js",
    "revision": "f192777829cd10c1d0f6e9ebc9606cb1"
  },
  {
    "url": "assets/js/83.56fe9474.js",
    "revision": "89ebdb5133e52e0680bffeea95e46c3b"
  },
  {
    "url": "assets/js/84.8456d966.js",
    "revision": "d8337f5646018745f7d1fa54ef35cb1d"
  },
  {
    "url": "assets/js/85.bd4b2ffc.js",
    "revision": "3da319e0bebf6ce792be3be36b259d45"
  },
  {
    "url": "assets/js/86.182b3bc3.js",
    "revision": "806750a2142a96839a16cf600d793271"
  },
  {
    "url": "assets/js/87.77542a9b.js",
    "revision": "d34acb0d8362346d336cd62c87180cb3"
  },
  {
    "url": "assets/js/88.4a6d34f6.js",
    "revision": "b0b2f2693239e9c1abf990f236c52854"
  },
  {
    "url": "assets/js/89.da194bfa.js",
    "revision": "2a0e9d8b8ffe34cb9db2912d94742c68"
  },
  {
    "url": "assets/js/90.e2955ca0.js",
    "revision": "2ea27e29e9ce80e1db9a832227db5726"
  },
  {
    "url": "assets/js/91.587d25b4.js",
    "revision": "a7bf3792aea22ab2451ddee98797455a"
  },
  {
    "url": "assets/js/92.9fb68045.js",
    "revision": "c76e6329a173ec4fce9e87d641c24d22"
  },
  {
    "url": "assets/js/93.9524e660.js",
    "revision": "999186f558c08914d44846476d6a0491"
  },
  {
    "url": "assets/js/app.86b1e2d6.js",
    "revision": "e2841f7afd602296becc82e98b2b4c92"
  },
  {
    "url": "assets/js/layout-BaseLayout.701130f6.js",
    "revision": "80c6cbbb34b9be577f1c462b5157bd68"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.89a88898.js",
    "revision": "17f3855beb5a7742dbdc8e8e1400ee55"
  },
  {
    "url": "assets/js/layout-Layout.f58d38e2.js",
    "revision": "d92ce2bad2059e8291093c9dd0829741"
  },
  {
    "url": "assets/js/layout-NotFound.2777a78e.js",
    "revision": "a235e589040ffbcdc1877c502c6ff021"
  },
  {
    "url": "assets/js/page-01b1365c.7557707b.js",
    "revision": "0fb438462c461103e5afa3ac8c83ca89"
  },
  {
    "url": "assets/js/page-03ff99e4.fd5095e6.js",
    "revision": "a6ab5ae608bc21c1e097bea31db3eaa2"
  },
  {
    "url": "assets/js/page-0815fe43.435b9fe4.js",
    "revision": "d19f6ec730b095d799ac82bc8a730ad1"
  },
  {
    "url": "assets/js/page-0994254e.2404d04c.js",
    "revision": "e1863f93b073081f2bf89029c69516aa"
  },
  {
    "url": "assets/js/page-09cfa20f.8bf4d0e3.js",
    "revision": "657b908330254a6dc9f93d44d93c9b1c"
  },
  {
    "url": "assets/js/page-0bd5cd98.d5403acb.js",
    "revision": "8045bf5df2f2d6265d61cc4dc631895e"
  },
  {
    "url": "assets/js/page-0ca8b05c.be47e366.js",
    "revision": "97fa3c45899a12a842f90c98f1de2703"
  },
  {
    "url": "assets/js/page-130de14f.442c6e71.js",
    "revision": "f967a71c1e2a4c922cee99226f31242b"
  },
  {
    "url": "assets/js/page-17916170.f97f5de6.js",
    "revision": "bd41374180047f4972d49ccd971dfed3"
  },
  {
    "url": "assets/js/page-1efb5c62.06a5aed9.js",
    "revision": "b04acd7b029d1e03bdbb40fabd1a56e2"
  },
  {
    "url": "assets/js/page-2282a6e0.376f8c53.js",
    "revision": "79b6f41518827bb2755d14d6b09159d0"
  },
  {
    "url": "assets/js/page-2ba07fce.a7bcb4ce.js",
    "revision": "cdbe73dd8546e3c08926639737d8f485"
  },
  {
    "url": "assets/js/page-2da25f49.7bd81b63.js",
    "revision": "83d8ba06b62a99726c175eb7a4849cab"
  },
  {
    "url": "assets/js/page-2f77601c.4e332f56.js",
    "revision": "c9da81d3206c0188361d0f71ff1eabc3"
  },
  {
    "url": "assets/js/page-36058925.5ec09725.js",
    "revision": "62f2955ddae3e3d248b9fce24217f177"
  },
  {
    "url": "assets/js/page-3721e5cf.19c1b24d.js",
    "revision": "27a04475c1390e5e4d6667fba60b8f93"
  },
  {
    "url": "assets/js/page-38e94d3e.d744f630.js",
    "revision": "b1ea2d639d993b6f8556787fe17e894f"
  },
  {
    "url": "assets/js/page-39d006b5.c405906a.js",
    "revision": "174fb3e96e902058b7417e14fb061e26"
  },
  {
    "url": "assets/js/page-3b1778e4.1c499d50.js",
    "revision": "abb000d11ea13baef8b2c6ccbc7d8a28"
  },
  {
    "url": "assets/js/page-4048f79b.c0c3dc80.js",
    "revision": "7fe3c18b0366bcff21cfdd5c4452d80c"
  },
  {
    "url": "assets/js/page-409d673b.e1fa9a83.js",
    "revision": "d79fe6165613e1bfd5440f4935e40391"
  },
  {
    "url": "assets/js/page-42a0ea7c.7ca16f2f.js",
    "revision": "fc00e02e995e5fcc1abb53a2935692d9"
  },
  {
    "url": "assets/js/page-437f73dc.0dccffdd.js",
    "revision": "aeb996a2990ac1cec966465a9878e70a"
  },
  {
    "url": "assets/js/page-4773a0fc.1cd6f3bf.js",
    "revision": "d093a5058a541d0b0d2b3a8bced83440"
  },
  {
    "url": "assets/js/page-47ec31ef.c7ed513a.js",
    "revision": "0b6dfc21c76e3f08dd1a7e1e259a8b91"
  },
  {
    "url": "assets/js/page-494b7749.d16f3c66.js",
    "revision": "cf5f05953df0c7775e272ee6a8943ae5"
  },
  {
    "url": "assets/js/page-4e40ef0e.9dd4e0ef.js",
    "revision": "7a412bb482bb247e9b9efc61cbc4fe32"
  },
  {
    "url": "assets/js/page-4f5eb00c.5134e22c.js",
    "revision": "d304d1e2b3e021b4f9a4d11a49497b16"
  },
  {
    "url": "assets/js/page-52453899.d13b9666.js",
    "revision": "4c6bdeb7bc0b5c43c060bac2be9968f8"
  },
  {
    "url": "assets/js/page-53a21bc2.5f10b7f0.js",
    "revision": "82526c8b416e5dd20ddf4ec7b1a8f7e4"
  },
  {
    "url": "assets/js/page-548dbfdd.e8bfccac.js",
    "revision": "c8de39f20026633718153d83f692a32a"
  },
  {
    "url": "assets/js/page-54cde949.c1272458.js",
    "revision": "3c9e997077bc098a353a0dea3b16beb9"
  },
  {
    "url": "assets/js/page-56c5add8.a8f1c46a.js",
    "revision": "f4329fa22cc2ae5333e76f286d2f7ac8"
  },
  {
    "url": "assets/js/page-5971d062.97a034fc.js",
    "revision": "7d3ccaf2ebb0799183f723c85de4e9dc"
  },
  {
    "url": "assets/js/page-5ae76184.5ccd4079.js",
    "revision": "3166d93e66fc1b76b9fad29100a3578a"
  },
  {
    "url": "assets/js/page-5c24028f.18db8110.js",
    "revision": "64d6bb824e328ea4d8e036f5c7758bee"
  },
  {
    "url": "assets/js/page-5dade32f.ac5e378f.js",
    "revision": "b95ebedded2628e404542f4b81feaaf9"
  },
  {
    "url": "assets/js/page-62c3f84a.abe72e3b.js",
    "revision": "438263489a65e64cdcba9246afe72007"
  },
  {
    "url": "assets/js/page-631831dc.a7ccbf57.js",
    "revision": "3ec257cc3f691d81d14ffecae58f774a"
  },
  {
    "url": "assets/js/page-64c6c3f9.0129b199.js",
    "revision": "bf3460510fb1d3372ff3c4ed30ce0381"
  },
  {
    "url": "assets/js/page-68a3e126.b04b5232.js",
    "revision": "26aed14308f7f163440312cfe17339ca"
  },
  {
    "url": "assets/js/page-718e3f13.735214e1.js",
    "revision": "efd4d03ad3de7afd7b93438d57e35ee1"
  },
  {
    "url": "assets/js/page-7961fc62.d13cb513.js",
    "revision": "bb01df436dc388dcbb97078a99b0dff6"
  },
  {
    "url": "assets/js/page-7e22c02f.17c40488.js",
    "revision": "48ef651eed50fbab2ecb06b51d30ff6d"
  },
  {
    "url": "assets/js/page-7f4c69e4.ba348b36.js",
    "revision": "639eb0d363f617c03485ca0aba7081a4"
  },
  {
    "url": "assets/js/page-9a13860a.3c9cd5a9.js",
    "revision": "f06a46b1b4b32534df52b9770009787c"
  },
  {
    "url": "assets/js/page-9d704b70.c2f0bd0d.js",
    "revision": "f7f9a8001b1737231433f43b1880abce"
  },
  {
    "url": "assets/js/page-a1c83fc6.8a7e7539.js",
    "revision": "0d68458ea04188d3b8bb099eb1185aba"
  },
  {
    "url": "assets/js/page-a649c29e.3c328624.js",
    "revision": "3e9a05326673d740884a72e523951510"
  },
  {
    "url": "assets/js/page-b6123e24.ce35a282.js",
    "revision": "d843ec5fd76d67f15c4f983547927d6f"
  },
  {
    "url": "assets/js/page-c1e7a5fc.ad15e437.js",
    "revision": "e9152a9a1a5895649e27b2f28ddd2fc7"
  },
  {
    "url": "assets/js/page-c41b383a.de7ef550.js",
    "revision": "345d2b61bb9d07e0278ef5d31ecea561"
  },
  {
    "url": "assets/js/page-c799e3a4.3c69dba2.js",
    "revision": "bfec6f8f0a8fbc23877caac6f92cf138"
  },
  {
    "url": "assets/js/page-cd03364e.eeb72b34.js",
    "revision": "6859e3597160ac7708875b9223c89af7"
  },
  {
    "url": "assets/js/page-deb70f94.37e07aab.js",
    "revision": "c3e2d1baf9d7073e60fcf55697436f02"
  },
  {
    "url": "assets/js/page-e869018c.0879002d.js",
    "revision": "89be7cfe6a00881871ffce04ca1adf99"
  },
  {
    "url": "assets/js/page-e87fecf8.1f9b2d32.js",
    "revision": "9806214a4c63b5ead947c88c9885f8be"
  },
  {
    "url": "assets/js/page-fa2e9ecc.753fa15c.js",
    "revision": "fb2cd156420123ef6b12868395fbaac5"
  },
  {
    "url": "assets/js/vendors~flowchart.dc0c9f14.js",
    "revision": "cadb01bded3c58ae4f97ab41543344a3"
  },
  {
    "url": "assets/js/vendors~layout-Layout.9eabf537.js",
    "revision": "f6cdcb1a5e7753215425799241ef6e0d"
  },
  {
    "url": "category/index.html",
    "revision": "fe7d44a7dad5fa1df50c24978486b3fa"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "4ed9bf38585b43e4b230fdb0e92aac54"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "14406e4ca334c51fe56aef9e58049884"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "083eec44836b5943bf02c75b2572199f"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "4476278fd51fe28705f4fe381a03619a"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "c7221ec5ac7408a4d4feafb82a85fcb7"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "a8fc8acbc0773365551f4809c24b0528"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "22bf82130399117209f2b82c456664a8"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "1cd1527f99c3a9dd879e891631db9a2d"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "1a1e23234f7188a59c175674aba5a65a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "c97e9912bbf6a6efdf8c5601a61951c5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "bd3041462a9526f52c6b2a7153f5a7af"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "0ee651729b533e58f5a01420f02b420e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "82faab7b1196b51df5d6cdc5f69ba661"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "3ada9a4ecc6946f3ed98663836551f1b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "2b2d131f667d5273f0ca6c4747e9d344"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "af8c5365e2f417f3eb9ff75b3e31eee1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "6f7df58b93fb4f364bee204a5826636a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "aa90d0312729097876d23292c043438d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "3fc2d186d6fd6be34869585d1b9407e6"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "cef53ef9633470af68ca13ea464677a7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "15ef9c9219b541a9fa8b18fa6c8d58a3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "31d9d06322e31b3a430911c53016db9d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "01c899327b9d2fdd575a6b8371d01433"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "c45bcd39b7d86de3689dedc697a80c5d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "9e271bacce7020e0f9b7e0db69bf11ee"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "3467ab7584ab9eab51fae1cec1144c67"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "25d3ffd982ed250b437e68ff2220beca"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "288db7b4418b59a554fd0c119b8ea340"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "660a82345a2dac5c123298f51bae3cf5"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "8fdd8232c10cb8d786dfc0c48de2f330"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "fde64f3601ceab25eef834fb9f566389"
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
    "revision": "2b79d38dc8572b84e90881c0d86d3e8f"
  },
  {
    "url": "search/index.html",
    "revision": "8ea852eb9d8fe41a0ca96b5bc416a7e9"
  },
  {
    "url": "tag/index.html",
    "revision": "a3351a1c21676f6d926de9347b2c7417"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "c8bf1a7d6a1ed1a2c3ad5b6eb0f831e3"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "c1a4afff6804e6b0a42b19d3e273be85"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "9ab2b19b915aeb1730b613ae912957c9"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "6a42bd160396200c1179705ba749ae26"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "53bb1a7ac0f3441453c64b9a246ebe32"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "2a857abe6a9681cd694a6f85186cca0f"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "ed9f91ff8b4d47dac9a10d1d9be91361"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "6060c33e6d7d89dd399433b42f6d235b"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "a8ef934e4a0de8694249092e03fcf54e"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "2e51e92542899e327896715ea553b985"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "18db3c188d530cc8856c7be0c9345bc0"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "aa50ff1f0b9f53e6eed1ee2df62e5db2"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "9baef0c94befbc8eda671ec499979b74"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "b3472b10651e1b7a8f592e6d4b41482c"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "afaf7c5b4cdb60e47ef0493179332455"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "acaf61e2e649abcddcf2ade0f01a2469"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "a47b1f5d71d9f5828186fc078b6e7689"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "38a3f8dd061d8f622e868b06414a5bf3"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "da13ca98bc6446e8a4acbcdd8f1e4b2c"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "7ab2c71a467779e91ad8e1e1fd088a73"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "4c0ae99aacb508028b0c4fc14600134c"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "ba8ad6a35e458098300c2f6be4759910"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "9b4d6c5d76bf698e3ebc34961b36395d"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "1ec60cc201fd7ce0dab7ee3ade8e98c5"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "9d3ca15e4ca95b4de8e301f94c6dbd20"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "38a2b53fba259370aae03a47d59f2f27"
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
