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
    "revision": "cd9c72f5e9eb5960aefacf891b39daae"
  },
  {
    "url": "About/index.html",
    "revision": "223b3601618bd6628a0880de731fea83"
  },
  {
    "url": "archive/index.html",
    "revision": "f6780ca0a3d43a930db9f28c99124167"
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
    "url": "assets/js/app.868e48dd.js",
    "revision": "e2472e5d4d5c789577cfd60eae640f08"
  },
  {
    "url": "assets/js/layout-BaseLayout.701130f6.js",
    "revision": "80c6cbbb34b9be577f1c462b5157bd68"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.bbe3cb54.js",
    "revision": "fe833c3c3bc07f402f87c2a52fdf89aa"
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
    "url": "assets/js/page-2da25f49.7bd81b63.js",
    "revision": "83d8ba06b62a99726c175eb7a4849cab"
  },
  {
    "url": "assets/js/page-2f77601c.1d970a91.js",
    "revision": "dea913d472545cb2932d3b5653dda58f"
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
    "url": "assets/js/page-3b1778e4.5decdce8.js",
    "revision": "7b0bb3f2ef343f66c3795e21d6f09718"
  },
  {
    "url": "assets/js/page-4048f79b.e947545e.js",
    "revision": "4bb5f3b3933ed07ba912c0ab8467399e"
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
    "url": "assets/js/page-437f73dc.f046ea51.js",
    "revision": "ea9420802f1c9f8ba71f71182580812c"
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
    "url": "assets/js/page-4e40ef0e.1417f849.js",
    "revision": "5c1b099aa86db3e431fad112388a44e0"
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
    "url": "assets/js/page-54cde949.4e99f8f2.js",
    "revision": "10ac3f8fb4102c3bf6e6ef7a51347760"
  },
  {
    "url": "assets/js/page-56c5add8.26cde8d7.js",
    "revision": "9ec7d5877e873fa26e86798604cf255a"
  },
  {
    "url": "assets/js/page-5971d062.661d8e12.js",
    "revision": "89798f8a06c5c9bbf48632ee3e8a9080"
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
    "url": "assets/js/page-7961fc62.ba5a10db.js",
    "revision": "f09dd7e94b4f80f7f216706aa87c1443"
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
    "url": "assets/js/page-b6123e24.ce35a282.js",
    "revision": "d843ec5fd76d67f15c4f983547927d6f"
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
    "url": "assets/js/page-c799e3a4.b6e0bb8b.js",
    "revision": "018b3779385ee46c598e989b30b6a533"
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
    "revision": "58693622dd0bcbb6495e931592c271d7"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "c32b35f8219e543a5be7491259e36540"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "f6a84055b57eff977ba5dd2d2c36950b"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "7966dbe4247658f331c2c421fbcbe9a0"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "d86421730eb60eb40dad7666681050c6"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "cdcc0a775ae51d5005153b3f8e236e49"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "f79fb372b1aaf7f59faa1a703cff3f16"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "9f834f6c56bf379affa42b3eb89dddf6"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "6b838c2fbffdf22d32b7745381d53335"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "69a7b8898c8506cd27798567b0004593"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "841704b2a52eab8c33bda1fcf5e67f6d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "29b0d648a16c0543a667e5e722f15a49"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "9b773158bfe87986e7c7c81ff6b8fb4b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "48aa7b91dc61bba93a5e0652421dd838"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "e44825639d2cd47364d08e617334774c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "c9ee1b353315c155cc8baeeeab940ae0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "dac492a7e5cc6c5136872b858723bc4f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "5f3d850f0d8f3f475339821dc11101a3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "de4f8c0fce47a3271276627d3e8ed53f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "aeb80a8f5df47d35497393f725dfdd70"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "6d16f45f3568b33f8b04aeb8bcb4ee23"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "b67128cc6463ff9b7b0b229d72faa4cf"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "53dcfc23ec1f773bd8e8b6bfa76b05fb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "468f802cd6c4d50f28725b3a006aa7c5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "82c5b32d3be35e5dad06dd7621063a58"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "ce618cd035374831fce9dccfaf6b112b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "fc509b4a004a108bf96ab5b7e87d1118"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "b6c38dc1b7607a805a413538e27a1748"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "2a7ab123d42a013f206039f227c84518"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "fde57a89a6be1501328e25929eff0ecf"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "2c4cb904136bdec858debb63e32de640"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "849c40f400f523d97dc3c60a25683612"
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
    "revision": "1fa8111e49aee11d6d6457aa9187cd04"
  },
  {
    "url": "search/index.html",
    "revision": "e20a0c872e88fa78d10867608acb36cb"
  },
  {
    "url": "tag/index.html",
    "revision": "332201275681e98f7e06e619e04e2283"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "cbda1552461042ddab4ffdb2a30da1c3"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "954181e2ba786f807716894d2525190b"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "bcf191c12a1bf1e6c96a1562232ca8c4"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "7013596f0bc6a37c7ac7c35fc522de16"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "f7e1d72d0ae2c259906c00186188b75a"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "2af61d23869bf88e7af5dcbd0f8e2739"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "75a0d9b8aeb0a0a3c0c673f4b1d1b0af"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "dee9e89ae7f6ded473398334b0a596f0"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "10762a0562e5d8b2729b5c57dd8f117c"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "80b81a639b7c1ffeafb3f64fc1fc667a"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "8fcc08ac4bdb80a03d28446709b58498"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "e63d63e3c83e3820e63a458ddc92a3d1"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "47977f76ad680200615d8184cd24820f"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "b6071c4b5c5cb138e59c0a71487b38b5"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "233ee21567f0f6c9858e0f6ca38706f7"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "7293d51a2f0faca84216cafb695b1672"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "86ef13de747fd0d567627f07d8cc8605"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "53db3ff994c2d100cc940093cd1dfd6d"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "c5700c3bef0dd1f86e0cbdd742308365"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "02b8c0cc7da316a8daf07dada689dd47"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "c7ad7e306182adb14f3701f3e9bc27c3"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "58cb6a1c7e9b2e44d32646e600441f5a"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "7d33c4f568f39f009d6d4d92ad94c003"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "8f0b485b48bd07d628a7e7f709bfe571"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "14cde95bffc0e5253b372b0d5675454a"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "64545288470b1d94efb6cb9ded693aa0"
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
