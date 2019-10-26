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
    "revision": "1511e91a02c4c3ac4cf684866844197c"
  },
  {
    "url": "About/index.html",
    "revision": "bf05e1b9f9329286f0c899a4d3af1ffe"
  },
  {
    "url": "archive/index.html",
    "revision": "bdd217aef21c43a5d473497b6d5c07da"
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
    "url": "assets/js/app.5c3c39ca.js",
    "revision": "7bdbb3b688913d9124fa84ab95d0136a"
  },
  {
    "url": "assets/js/layout-BaseLayout.701130f6.js",
    "revision": "80c6cbbb34b9be577f1c462b5157bd68"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.0d29f7f9.js",
    "revision": "8f50bfb10642b1e2062c2c176130d465"
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
    "url": "assets/js/page-01b1365c.05fc5cbc.js",
    "revision": "5d67d0fbbd5f665fce73d0196c618c87"
  },
  {
    "url": "assets/js/page-03ff99e4.e5c137bb.js",
    "revision": "c768fbfa23124125d373f900f98e4dbc"
  },
  {
    "url": "assets/js/page-0815fe43.c6f48b55.js",
    "revision": "b5b74fd014181ca3fe9935a489c610ad"
  },
  {
    "url": "assets/js/page-0994254e.2404d04c.js",
    "revision": "e1863f93b073081f2bf89029c69516aa"
  },
  {
    "url": "assets/js/page-09cfa20f.7dd62918.js",
    "revision": "8b4111fe2692a9465fb85f860f6267db"
  },
  {
    "url": "assets/js/page-0bd5cd98.962892b4.js",
    "revision": "ffc360ebb34ca63490ddb0999135a546"
  },
  {
    "url": "assets/js/page-0ca8b05c.be47e366.js",
    "revision": "97fa3c45899a12a842f90c98f1de2703"
  },
  {
    "url": "assets/js/page-130de14f.70e5b2ee.js",
    "revision": "59ae52bdc9ee569447bbef83bebfba77"
  },
  {
    "url": "assets/js/page-17916170.154aa143.js",
    "revision": "1904993cb7c769751f6f66768e64b4b5"
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
    "url": "assets/js/page-2da25f49.b0d647a1.js",
    "revision": "faccafa5ba2dcec8341fe510465e5f86"
  },
  {
    "url": "assets/js/page-2f77601c.eafd2713.js",
    "revision": "dd7ae717cac3f5e9827b5d8875895b8c"
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
    "url": "assets/js/page-4773a0fc.8f29569a.js",
    "revision": "80a3b0099f4f9eb3ccba4cb9c0700c34"
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
    "url": "assets/js/page-52453899.30bd0c81.js",
    "revision": "f0953cd153f43210efb3fa92a50dbc9f"
  },
  {
    "url": "assets/js/page-53a21bc2.0f21176b.js",
    "revision": "fe04408cb59f481675a668f775402931"
  },
  {
    "url": "assets/js/page-548dbfdd.e8bfccac.js",
    "revision": "c8de39f20026633718153d83f692a32a"
  },
  {
    "url": "assets/js/page-54cde949.4e99f8f2.js",
    "revision": "10ac3f8fb4102c3bf6e6ef7a51347760"
  },
  {
    "url": "assets/js/page-56c5add8.561e3b2a.js",
    "revision": "e001139022bfc47da9b564b8457c87c9"
  },
  {
    "url": "assets/js/page-5971d062.172c53de.js",
    "revision": "a10fe16a99776d1bb295fb628d5fdd33"
  },
  {
    "url": "assets/js/page-5ae76184.82789f89.js",
    "revision": "a8b9d15f8000877ced9e9b3bd0946ad6"
  },
  {
    "url": "assets/js/page-5c24028f.18db8110.js",
    "revision": "64d6bb824e328ea4d8e036f5c7758bee"
  },
  {
    "url": "assets/js/page-5dade32f.ee6f7ebb.js",
    "revision": "40c0fa6c980fb4b16d22231e2ec71471"
  },
  {
    "url": "assets/js/page-62c3f84a.bfffe330.js",
    "revision": "6e713a9389cb327e2299501c9cc445d1"
  },
  {
    "url": "assets/js/page-631831dc.5dca22e0.js",
    "revision": "fb6ac3352e5c3753922286599ce7831f"
  },
  {
    "url": "assets/js/page-64c6c3f9.5ec7e7b4.js",
    "revision": "8efc8a7ad235604b89aa8c347702d5b6"
  },
  {
    "url": "assets/js/page-68a3e126.ea5e2c39.js",
    "revision": "c6b7071b31f78db4e8c3a2437372d9ca"
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
    "url": "assets/js/page-a649c29e.a2ad1bce.js",
    "revision": "548e5beb0549e983ea541259ca9f9dde"
  },
  {
    "url": "assets/js/page-b6123e24.6495b85b.js",
    "revision": "1af5e4dd8c00bff86b76ee050ee62723"
  },
  {
    "url": "assets/js/page-c1e7a5fc.3dbdee23.js",
    "revision": "e48433b1e3bb6e89199844c9cac7828e"
  },
  {
    "url": "assets/js/page-c41b383a.de7ef550.js",
    "revision": "345d2b61bb9d07e0278ef5d31ecea561"
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
    "revision": "0cad6ffa9c28442948a1a58b649f9133"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "0d6b636b3ebd5a6c61240ed1669d47f8"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "62845c6fe694915179ac58ebdc430894"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "43a0a05f08e6cec0a4b2487c49b0e219"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "04a7cadf862ba771352b2d1305445e21"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "03f95ba5ec5d595f17b1b88238991a0a"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "f0abd8f6ad027a5a9323e07b0a033619"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "3f32ed3ff0be34d36258bb8157e6b990"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "51cbb1000f7170bb696302a4d7af0fe4"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "ffb36245636848d49a03cc9ac98515e4"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "d9ce7ebdac3f851e7480bf8bd32d6624"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "d49207754a6029b946e2c632664f3f20"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "e944dc125e7f8a0535ac8a1e24044a12"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "905cd920de75202c2ae7dd356cdd4cf8"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "679f3496f11770f79c41050ccc1c3783"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "43b306ed281b52f275b14e88893c0a52"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "7d12a76e49c1bcb222342310cd577081"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "9f7ad4e7c08cdd00ab8d89d25e991e57"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "072d1aff436758296d43f8da86318816"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "302c3f28e022306572f4de28c6a578d3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "d5fbbea5d0eb0c420e6fda69cffb6677"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "ea56a99de08e1064e802f0a006997b87"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "372513d520135ab53144fa445e9ef64d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "4aad356e61c4a527c4f0e2c7c05d5823"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "356c747d32a4d26113c5f33e24b7af1a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "75ff1c90104082a475a9250c9bc680b2"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "7d752a2ba30728237c4f529a382b62c7"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "7eb836abdd08a5e37533448f2a4c7eb7"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "e0c634a0951542b708844b2fae187fbe"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "53297a400cf1259e843a35ec2b76622f"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "37640b8ae53d9e5326a0c61a0de6b0d3"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "7320bdcf8aa204e91d1b1b048e90b4d7"
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
    "revision": "f209c60a30a5f41901dbe35adfa87a12"
  },
  {
    "url": "search/index.html",
    "revision": "db40a2bc172e351840bbb5ec4cea34bf"
  },
  {
    "url": "tag/index.html",
    "revision": "6841be22fd09d82d7d079cb1ced700b5"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "8803783707a58fcd6252a752a14b4256"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "17805f68116697aed80618a4028a92f0"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "6efef43e7c32153e8210141007fa0d44"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "4c8f1f39bf7bddcf2bd0773003238474"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "b920542a22b92d5736c27df83ed20ffb"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "8a11a2a9effcf2c8d9064b5eb45d6599"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "200f5f36324f615b53ccb61f9d1fa4ca"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "08d87a161c69df600727c968ea4fa6b1"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "b2294c55be5283638ff6c92f0139fd42"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "3db1ec1565eadf8e134962fe217a1e4e"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "b07b6fd3672303ea26e5a63e1251a0af"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "cd1458004e29f1f06defd891c9af8b32"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "83a86dcc9d9aa1df6733a973a0452bb2"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "872f340f3a0dceec3cadcbec871eeaca"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "3f9ad0bce0b25afef1e942278a270aed"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "f103c60f1a3f2f1661998f5affc2155d"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "861b36a1c5b85f4ebb81477cb36460de"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "008eed804606da95d6ab8125c4af6400"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "596082cf443e3e3282832c0d1e21d6df"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "05c1d4d4f993ebba5ccc4837a4df02b4"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "268ef65c7bb560972342af2ee8c1e94b"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "385ee94aac8186729b47edf62c8ab215"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "55800842df53a3b3231bf4b2275de5f0"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "dfe40cb62797dfbebfda029c5436de20"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "3a7043aa0543e4b39cb1af5264308fb1"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "0320071d5ac62340edece121689560fc"
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
