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
    "revision": "272665ce0001511e8fdcb59657bc1495"
  },
  {
    "url": "About/index.html",
    "revision": "351c129145aa522a24d6a94adfd991cb"
  },
  {
    "url": "archive/index.html",
    "revision": "94bf693134a858098805c94b0899fcd3"
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
    "url": "assets/js/app.ca4bc3af.js",
    "revision": "e3fda91228a418ef26e2d07f4f8671a2"
  },
  {
    "url": "assets/js/layout-BaseLayout.701130f6.js",
    "revision": "80c6cbbb34b9be577f1c462b5157bd68"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.65cdb486.js",
    "revision": "4ad1e600ee28cf5fe4a69739315da253"
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
    "url": "assets/js/page-01b1365c.24fbd246.js",
    "revision": "07b4517d0dd668669117711f0500385c"
  },
  {
    "url": "assets/js/page-03ff99e4.fd5095e6.js",
    "revision": "a6ab5ae608bc21c1e097bea31db3eaa2"
  },
  {
    "url": "assets/js/page-0815fe43.3aacb94c.js",
    "revision": "c104ffe2bc9442633420c1777ba17e17"
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
    "url": "assets/js/page-17916170.e43de984.js",
    "revision": "07bfcd2f7590419c344921f6e85dd84a"
  },
  {
    "url": "assets/js/page-1efb5c62.06a5aed9.js",
    "revision": "b04acd7b029d1e03bdbb40fabd1a56e2"
  },
  {
    "url": "assets/js/page-2282a6e0.a537ad94.js",
    "revision": "7d403a531636401f3cc72caa263249fc"
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
    "url": "assets/js/page-2f77601c.c1f59902.js",
    "revision": "f33263c3cb4752b0b2f5852db50cadda"
  },
  {
    "url": "assets/js/page-36058925.5ec09725.js",
    "revision": "62f2955ddae3e3d248b9fce24217f177"
  },
  {
    "url": "assets/js/page-3721e5cf.da5468d2.js",
    "revision": "23058f6843bf65a13244dca47fb4c601"
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
    "url": "assets/js/page-3b1778e4.3879e710.js",
    "revision": "b5cd0f62f45ea371d7e9643b27874604"
  },
  {
    "url": "assets/js/page-4048f79b.3bcd53d4.js",
    "revision": "71e9ae1e1265c7ca78cdcbc367efa12f"
  },
  {
    "url": "assets/js/page-409d673b.90fc7d34.js",
    "revision": "ef648dd5948063844869b0308c9b5e84"
  },
  {
    "url": "assets/js/page-42a0ea7c.7ca16f2f.js",
    "revision": "fc00e02e995e5fcc1abb53a2935692d9"
  },
  {
    "url": "assets/js/page-437f73dc.8928e0c4.js",
    "revision": "d772ee4c99a2c5ffed666aba9a8f899d"
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
    "url": "assets/js/page-4f5eb00c.cd9fecbb.js",
    "revision": "3c93e0c63c328e3396fbd928adae73fb"
  },
  {
    "url": "assets/js/page-52453899.d13b9666.js",
    "revision": "4c6bdeb7bc0b5c43c060bac2be9968f8"
  },
  {
    "url": "assets/js/page-53a21bc2.0f21176b.js",
    "revision": "fe04408cb59f481675a668f775402931"
  },
  {
    "url": "assets/js/page-548dbfdd.3c1a25e5.js",
    "revision": "70d7db00800bda8c5d52ae76f621877c"
  },
  {
    "url": "assets/js/page-54cde949.4e99f8f2.js",
    "revision": "10ac3f8fb4102c3bf6e6ef7a51347760"
  },
  {
    "url": "assets/js/page-56c5add8.a8f1c46a.js",
    "revision": "f4329fa22cc2ae5333e76f286d2f7ac8"
  },
  {
    "url": "assets/js/page-5971d062.661d8e12.js",
    "revision": "89798f8a06c5c9bbf48632ee3e8a9080"
  },
  {
    "url": "assets/js/page-5ae76184.d4b58698.js",
    "revision": "298d2eb628f726f7d29d6efcfea11394"
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
    "url": "assets/js/page-62c3f84a.6ece2a62.js",
    "revision": "f03a69fd4d460d52e50e8d4d1baab2d9"
  },
  {
    "url": "assets/js/page-631831dc.5dca22e0.js",
    "revision": "fb6ac3352e5c3753922286599ce7831f"
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
    "url": "assets/js/page-7961fc62.ba5a10db.js",
    "revision": "f09dd7e94b4f80f7f216706aa87c1443"
  },
  {
    "url": "assets/js/page-7e22c02f.17c40488.js",
    "revision": "48ef651eed50fbab2ecb06b51d30ff6d"
  },
  {
    "url": "assets/js/page-7f4c69e4.8fbdd2f4.js",
    "revision": "588960b3d8d568f29491555b7531e73e"
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
    "url": "assets/js/page-a649c29e.305b5b0d.js",
    "revision": "8f16cd40890a49adb6d0877b4016a03a"
  },
  {
    "url": "assets/js/page-b6123e24.24b218b1.js",
    "revision": "d061c480b300eaaf8134d5c6e08df4aa"
  },
  {
    "url": "assets/js/page-c1e7a5fc.b13cf926.js",
    "revision": "b6e28d54027fdafdca6ae26a28c2fdcc"
  },
  {
    "url": "assets/js/page-c41b383a.6af77936.js",
    "revision": "2661c8670070d76328a619a8eb8475aa"
  },
  {
    "url": "assets/js/page-c799e3a4.6a7bd7b0.js",
    "revision": "076b8e8bb583a571f168599a4d025aaf"
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
    "url": "assets/js/page-e87fecf8.baca9118.js",
    "revision": "f54e7deb109b12fd809f3a6c49994557"
  },
  {
    "url": "assets/js/page-fa2e9ecc.458b260a.js",
    "revision": "14eb5050b58ab18a7dca968f68f5e917"
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
    "revision": "b1dbfb9df1b29ec8d0cf2cb1c3c7bc2b"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "063bb1686f5e32592d3e415bf1f27130"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "b74200e794086214118bb1d8f208c700"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "90ffa5104f260dbd425eb71c8ecf4b6e"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "b30728160f9866836dcfc8675b189dac"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "7b468fbb5471856e652c9fb75019856e"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "64f0b2dc3459b87d6b8ba1bb26a864b1"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "6d46f612aafa108ce102365e6870f7c1"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "90b9c3b3b7c6105eaddc2faf717e9949"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "94db7480de321322bcba9f7c539c3124"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "f48ef69f5b493bfe1fc70fc0fa8e8241"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "151f9ddb353e367b1aeaf80e9a640506"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "5dcc7184ad74367addf2359bac6dceda"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "231e83eb9684cad6960b4547e22caa70"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "0aa76e792eefd4f11e55e052d8d7a880"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "70080a55a73892ce696353c754faf952"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "f37cb816f46b008c19c1cb83ada50caf"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "10564d0a5c6349732d3fc4ef12b437bb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "2b73f09fd8b2a1d1cff37ffbff0416a3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "a010828ee7a79922567b9fffa7862532"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "57981e71f0353f8388e6b5ba38efa3ec"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "cf202a5333dacb69c70077860275ced1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "4aacd3587d8ae8ff2dd738b885af99a6"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "b70b404615b0850a5d95260ef4820919"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "02e855b73510e9d5e38e5bbf6be3e1ad"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "2f410cc70407f1a1ea7aff5d8bce74a2"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "36e42addaa06d62c8bf1df703fa5b9f2"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "7b2d8ae1752a46b63e73c17e2ec86825"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "b6f119ce9682d0f6c6f6be95c2d30f6c"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "015708dfe5646f7204e4a2865c6ba979"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "d085bf22dbc66289a264fb1026b651e5"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "8fab38991e57c48400e7299cb024f049"
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
    "revision": "46afd325b74de70df3947b8f5e414cc1"
  },
  {
    "url": "search/index.html",
    "revision": "da2e30d58b1fb65bad161c8401781758"
  },
  {
    "url": "tag/index.html",
    "revision": "0770a8aefd2bfe8a1a98a1a6fdc6aa6a"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "a2857b8c7297bab994eed44c4cfd297c"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "7db93e16ef28d0fa26e70a7886bc0c6d"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "3802bcfb4bf2b8f06a5bf66e1b0b7040"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "33da699f2ed08c3a34ae3a01d13d9d60"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "90b70b70cfcfbe4efb88314fc0981e61"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "088032178b45df74a207d34a52ff9fcf"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "d2b2b4328b41b50a3c1c4ffab364ee3a"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "724be7303804ad1a1d41c6b5e05db8c8"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "1c7a16a8369f95b387cff4869a545e19"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "42e060ebcf7decd0e81fb4674985432f"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "4de4fbc7aec9fae109987bc0f898b36a"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "226840b44addac4349424ea37997c11c"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "373b9acac2038592a7b24853c5070c35"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "b94c079d0d8ac7dcb5460cb8ea69ac66"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "9324976d8cb97513a91c5d07c92dfd62"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "42fb9d2b398eeda35dad01d062403729"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "c9caf4734870216e926db5e749fa3c33"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "7fb124a1009570ab28c78a34e5620091"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "c976456468fb369ea84f6624b7b38cd6"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "074c089a83a24c6257a0b2ea6894c5bf"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "0a662c334e23ffbacf0e94615376e974"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "c42aaf4b7c04d83ee5ff13bc5c75b274"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "f88c35105911ba893e5ff4f9687f6665"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "d5133de8ec2e27bbec77267c6fbd29f6"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "2b7a050242f849cae65d4de94a01e629"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "73f3e1a8494585cce78badf688581fcd"
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
