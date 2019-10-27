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
    "revision": "3e3adcc2f2905b8477919d531ad62959"
  },
  {
    "url": "About/index.html",
    "revision": "0ebacf719f99b2180f1e67c01a007fde"
  },
  {
    "url": "archive/index.html",
    "revision": "f7a48869b5248236d6e7ffb811c6e55a"
  },
  {
    "url": "assets/css/0.styles.52a2dc11.css",
    "revision": "b1d56553d151847a3b93714d9a19a327"
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
    "url": "assets/js/app.1aede38f.js",
    "revision": "4fadf38d4d6be64313e1f07b333e3f22"
  },
  {
    "url": "assets/js/layout-BaseLayout.701130f6.js",
    "revision": "80c6cbbb34b9be577f1c462b5157bd68"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.4acf1b6e.js",
    "revision": "8f50bfb10642b1e2062c2c176130d465"
  },
  {
    "url": "assets/js/layout-Layout.8aa65948.js",
    "revision": "9ab276ce72d33bad8555b7cde43b617c"
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
    "url": "assets/js/page-17916170.e43de984.js",
    "revision": "07bfcd2f7590419c344921f6e85dd84a"
  },
  {
    "url": "assets/js/page-1efb5c62.06a5aed9.js",
    "revision": "b04acd7b029d1e03bdbb40fabd1a56e2"
  },
  {
    "url": "assets/js/page-2282a6e0.6b4ef936.js",
    "revision": "a402623c3e174fea196cfbfb5f995ff4"
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
    "url": "assets/js/page-3721e5cf.d0232776.js",
    "revision": "d2dbd97e16917452db6c2ae7c7f54da5"
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
    "url": "assets/js/page-3b1778e4.5decdce8.js",
    "revision": "7b0bb3f2ef343f66c3795e21d6f09718"
  },
  {
    "url": "assets/js/page-4048f79b.3bcd53d4.js",
    "revision": "71e9ae1e1265c7ca78cdcbc367efa12f"
  },
  {
    "url": "assets/js/page-409d673b.44a09776.js",
    "revision": "63963e442601342971b00e00745450ec"
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
    "url": "assets/js/page-47ec31ef.3f566805.js",
    "revision": "c0f4dacfc07d037aaed70017cdf3b079"
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
    "url": "assets/js/page-53a21bc2.5b0b1880.js",
    "revision": "42cf50b4cf40f7873f6260e466f12183"
  },
  {
    "url": "assets/js/page-548dbfdd.0ff0559e.js",
    "revision": "ed5381774dbf1bd3eaeddd1332538d8e"
  },
  {
    "url": "assets/js/page-54cde949.3e995cb7.js",
    "revision": "8c9912a5e8945e83e8761019bb7fa080"
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
    "url": "assets/js/page-5ae76184.d7cd2a9d.js",
    "revision": "e0b64d8e5cf45230f731fefcfc77b613"
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
    "url": "assets/js/page-64c6c3f9.1ddb0ad0.js",
    "revision": "d382b3e69c11ce2c99f82eb5ad9b3778"
  },
  {
    "url": "assets/js/page-68a3e126.d99ac548.js",
    "revision": "f2c18d52bfa3d111ef43ff31f86b8ec5"
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
    "url": "assets/js/page-7e22c02f.ce234883.js",
    "revision": "7ff7049b1c13cd1e7144372cb5f8efa8"
  },
  {
    "url": "assets/js/page-7f4c69e4.d34c2991.js",
    "revision": "69867913e1aa3e7bde9dd74149543057"
  },
  {
    "url": "assets/js/page-9a13860a.7ae475fa.js",
    "revision": "38ec564bdf18af93f0d3cb360b4fd4d2"
  },
  {
    "url": "assets/js/page-9d704b70.c2f0bd0d.js",
    "revision": "f7f9a8001b1737231433f43b1880abce"
  },
  {
    "url": "assets/js/page-a1c83fc6.966350dd.js",
    "revision": "d50a61bf0cb30c0c47adee7b8596bb7e"
  },
  {
    "url": "assets/js/page-a649c29e.3c328624.js",
    "revision": "3e9a05326673d740884a72e523951510"
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
    "url": "assets/js/page-c799e3a4.aba5270c.js",
    "revision": "394cec66654111995b9cb27dd3e4778c"
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
    "revision": "e34ea865c4859b435d13c9c0c63e86a3"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "09df998a03fae65a26b12720e5e02121"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "669d058f3703808435606b7bef6a477f"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "207e0e79b103b1c7d57159b634556bd5"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "c180993548fe677c764816d4a8c1d674"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "bf0bb963ddfd4e09201f6377c447a9cd"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "343ec52201251a871a48aed4c56f7207"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "45d477c4d18966c3f10711cbac4fe9c4"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "0f36911f50613c93cf91c53df930dc33"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "e22cd41982d2d4038891c0d11ba00124"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "43468c771031ba8a57071884e57703c8"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "0bd154d5abae794408c2469e9dba2f4b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "bb00a48eaf22ff059b374bef5115ff51"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "49d3c74e82d3298d2c25acba00bc6058"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "a46dea84f64aa84e5d0700bcd583f373"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "4fe77a2a3d28e910c49e7e5fc1ab6bdc"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "b0cf800b40364fda068a3f12eab4289b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "ad0bb86e098c7d07502a9b699d047880"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "a21ca7a6356f70c2ce8854d9465d22e7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "442a88523c08c1bcad4dacf5d08cbfcc"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "b01ab4652edc924443c2345fb2b95401"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "70cb261e68ef6f5f7f25827cfd9b5b09"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "ed8f3b43daefefc218c7b85083a6fc50"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "5a020cf1ac34b1b8e8308bf5537e40e2"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "86d7ce007be5b2807b99b54466869b97"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "e71ee92eeb419735ba8961ed436ecf32"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "a06323ea89f66f3d6be5ffbb6669b572"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "5fe20cf5d7a96e6b2d91c51aa2b027ce"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "c86e8dec3d1b6f9e505f750fd2b21c42"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "9581f9e0e0518be642beeb50da788462"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "afc6f32c1e2a410c4303d1b7dcc0895a"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "01ef3ddd689c7a110477e8f6b120d8ea"
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
    "revision": "81579a82dba6bc6c1aadd2d312c65c5e"
  },
  {
    "url": "search/index.html",
    "revision": "887288bb09df66e4f78431bd9ea30380"
  },
  {
    "url": "tag/index.html",
    "revision": "43778fb13a7a50d3f3299e6413e2e00e"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "223c4df30b6a21dd4c1600326f09beb0"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "8022ae6cb345cf69c37af55932830307"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "c19e663ecd430d9fb830d392ecd10035"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "802493fe1fa89cd21d975dadf56f436c"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "98c6c66ac7fdf36882243d569c21fc00"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "9aa2bca7c6edea3cf94df08dd8067d94"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "4764b5770d9e66b7366b335cc18f9822"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "aa82d1fae95c9eb543386fd6b2706f34"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "fc1139a010b6dc0b713c0179120dea5a"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "5cb3968fec3c7b4dc36a4c173ffb49b5"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "da8b1b6931d5fab10619ae0a70372e4f"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "533c037d5ebb214dd2ea2892698ad454"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "204cde7ed196df35c3f4a3677f865c4c"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "6d79244d819e0c8e664bb5716fba3116"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "0a3c4c29879b21622b241f0403abea69"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "3115bd55bbae087e1ece82fe7f3ddd02"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "1e6e7f9586f38d7d317acbc76f5be887"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "ec784d81298d7d97cb6fb240f87c2a0c"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "694276cb2dafec4178bbc57622eaf000"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "93ab2b846f5f69a51d8ff9c47a0e03ab"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "db7c50e0cd925a042787448f3ec54501"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "0c7fc49e1d722b8d95d365b8b26c883b"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "e00e5ce5171f7c6cc518a59075815b20"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "f168df55d4b0f0edec02a254ab37bac6"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "682cb468b59834fdeb8eaf3a31aca1ad"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "b71b2b4a7d9d4190d61503a12d5eee48"
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
