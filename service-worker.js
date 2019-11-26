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
    "revision": "36ecaf23f1e4dcf1fd628d5a879ba29d"
  },
  {
    "url": "About/index.html",
    "revision": "25a1a2f897b6c314c812739a81f46316"
  },
  {
    "url": "archive/index.html",
    "revision": "3e4418a26f4b6ed81d74475bb7c24a33"
  },
  {
    "url": "assets/css/0.styles.be69e14c.css",
    "revision": "7a2177ecc6319b12a07efc4e1d2fad07"
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
    "url": "assets/js/1.e9c4f42b.js",
    "revision": "ecdb59a880aebf46c07e2a643764ac05"
  },
  {
    "url": "assets/js/2.7bee86f4.js",
    "revision": "4c7fd7b66984a2f6fab1a50dd54dc880"
  },
  {
    "url": "assets/js/3.279175ff.js",
    "revision": "d8eb694bad20e16fdac716058200b8f0"
  },
  {
    "url": "assets/js/4.22686d1d.js",
    "revision": "80f70bec970b6fd1a62ba6951e3ba6ff"
  },
  {
    "url": "assets/js/5.0335528f.js",
    "revision": "903fe62172255791bcae5de43af84f72"
  },
  {
    "url": "assets/js/6.deeb7423.js",
    "revision": "9bb18029b5f467a448447c1fe0f86b6e"
  },
  {
    "url": "assets/js/74.74c1d7ab.js",
    "revision": "e84da423092c87d366301ceea6c2e8d1"
  },
  {
    "url": "assets/js/75.2edcc2d3.js",
    "revision": "4e33e2ffd389259c6db95efe57f7e0a8"
  },
  {
    "url": "assets/js/76.4cfa2eda.js",
    "revision": "399b3ae451b2a3b939a898bc74fa1e2b"
  },
  {
    "url": "assets/js/77.bffc47ba.js",
    "revision": "003a7f9aaa9add1a4002a5532a2d5da0"
  },
  {
    "url": "assets/js/78.edf73117.js",
    "revision": "e645ffda573c22888ee6e35044ce06cc"
  },
  {
    "url": "assets/js/79.3c8ff7e5.js",
    "revision": "c4a0e2e145d4788a52d3792232d8a9f1"
  },
  {
    "url": "assets/js/80.3284ca1e.js",
    "revision": "97bfc1f7e5b422014b7d66a2d11e4208"
  },
  {
    "url": "assets/js/81.fa19f252.js",
    "revision": "3e3c201f1adced432309a633763175a2"
  },
  {
    "url": "assets/js/82.31df2b0f.js",
    "revision": "138f93bec2f12cbc9ed54c9a90f7e6c0"
  },
  {
    "url": "assets/js/83.45e2e143.js",
    "revision": "ba4fb418144bf4b308c62c0e4807a5ee"
  },
  {
    "url": "assets/js/84.c0c841ca.js",
    "revision": "3b85cdbf7d74bc0744de48d2ebdd6abb"
  },
  {
    "url": "assets/js/85.b5cbca58.js",
    "revision": "bf63b4899604a9686c897eed2f5f281a"
  },
  {
    "url": "assets/js/86.0849dde9.js",
    "revision": "17ecbe3900ad3a4bb92796bee5571cc1"
  },
  {
    "url": "assets/js/87.a26344bc.js",
    "revision": "ad080a502cb835cec199d0c5cb63650d"
  },
  {
    "url": "assets/js/88.4be1ac07.js",
    "revision": "746bc4e47a1971fee00419770af43a35"
  },
  {
    "url": "assets/js/89.3a1722be.js",
    "revision": "65f9681a546308ab5533f4ab854cc5d5"
  },
  {
    "url": "assets/js/90.2568b3cc.js",
    "revision": "c8786245ceb29494807bd93d746ddf76"
  },
  {
    "url": "assets/js/91.d03673db.js",
    "revision": "0689c56424ade1c27b665717f40c218a"
  },
  {
    "url": "assets/js/92.400228e9.js",
    "revision": "cb9aea5d644d2cf0c758921aa84fdde8"
  },
  {
    "url": "assets/js/93.54b23e9b.js",
    "revision": "26c25d8dd222e6b74835039438aaa8fc"
  },
  {
    "url": "assets/js/94.47ccb616.js",
    "revision": "ae30d28c91162af97d1500d4e8938344"
  },
  {
    "url": "assets/js/95.485237ea.js",
    "revision": "09046bdaa5df25f56fd4d0271b9f11a0"
  },
  {
    "url": "assets/js/app.87e552de.js",
    "revision": "fa80b4a43ce4ef3abd349cdd4592ec65"
  },
  {
    "url": "assets/js/layout-BaseLayout.03259e63.js",
    "revision": "0f9662e37db002cfc6bc139c8d7f3130"
  },
  {
    "url": "assets/js/layout-Layout.ceb0d5a1.js",
    "revision": "7ec50ce9776930683a2fe55b916d6eee"
  },
  {
    "url": "assets/js/layout-NotFound.03c76912.js",
    "revision": "a345bdff592a4f1d23ce585b67964956"
  },
  {
    "url": "assets/js/page-01b1365c.c20cca27.js",
    "revision": "01cb664dfe283beacbef766790922b2d"
  },
  {
    "url": "assets/js/page-03ff99e4.1d28dbff.js",
    "revision": "204626b5f987a17899384298562f776d"
  },
  {
    "url": "assets/js/page-0762cb2c.cc83b4b3.js",
    "revision": "166b5dafa28388e0e4020f7f6b1e61eb"
  },
  {
    "url": "assets/js/page-0815fe43.e92e33f2.js",
    "revision": "cd7181f6297b35982b5246b5d76f2551"
  },
  {
    "url": "assets/js/page-0994254e.c9dd8230.js",
    "revision": "9c85e5452ca6747235904ed05fd504c1"
  },
  {
    "url": "assets/js/page-09cfa20f.87a9ebab.js",
    "revision": "68a73a6c82b6539a08e40d5d91727e9c"
  },
  {
    "url": "assets/js/page-0bd5cd98.953dec44.js",
    "revision": "efec93480dac77e16a392116b09317da"
  },
  {
    "url": "assets/js/page-0ca8b05c.493d29d9.js",
    "revision": "f08c2470fad238764af6da3a7d86f95b"
  },
  {
    "url": "assets/js/page-130de14f.e54f2d12.js",
    "revision": "994b95125ad65b95f358e2d7e568d542"
  },
  {
    "url": "assets/js/page-17916170.5a8bb522.js",
    "revision": "facb2c0a14aca6b2dd173adba38e2e42"
  },
  {
    "url": "assets/js/page-1efb5c62.8bf1afe1.js",
    "revision": "11808988794b4a4c2bf2021dfa8ba619"
  },
  {
    "url": "assets/js/page-2282a6e0.a24caaf2.js",
    "revision": "0452dd597cb6f9f5a25602b5cb0be2aa"
  },
  {
    "url": "assets/js/page-2ba07fce.d47398ba.js",
    "revision": "633c6d00e722178d49ad7a1e111b41e3"
  },
  {
    "url": "assets/js/page-2da25f49.bddffa2e.js",
    "revision": "bf464b38c3a7444c62e839e2a83d85fd"
  },
  {
    "url": "assets/js/page-2f77601c.c637a758.js",
    "revision": "cd94de29dc2da80a40ddfd7ba448186c"
  },
  {
    "url": "assets/js/page-36058925.8636faa7.js",
    "revision": "0a208b0c9b37ca6327b809e95fb14855"
  },
  {
    "url": "assets/js/page-3721e5cf.ee6131e5.js",
    "revision": "0f5edd18913a261ad0f5ab62cb4407be"
  },
  {
    "url": "assets/js/page-38e94d3e.440714d0.js",
    "revision": "926b8f3dd0488c07090cb8b64236f67d"
  },
  {
    "url": "assets/js/page-39d006b5.7889c9f8.js",
    "revision": "785cecb853b3c786ac14a0528c9075c6"
  },
  {
    "url": "assets/js/page-3b1778e4.4a9ad643.js",
    "revision": "d69c6d0d44c1d28cb809ddf2fcb55a46"
  },
  {
    "url": "assets/js/page-4048f79b.494eae0d.js",
    "revision": "b469d2cb5f9dd659a2a082d93e8051db"
  },
  {
    "url": "assets/js/page-409d673b.5d36de4a.js",
    "revision": "440f20155a804b11bcb2f2cead05846e"
  },
  {
    "url": "assets/js/page-42a0ea7c.cf74a9d0.js",
    "revision": "77416fc2ae4610d7d94a0ddc0e91d5ec"
  },
  {
    "url": "assets/js/page-437f73dc.1c7ae79b.js",
    "revision": "ab6174fb494683be7c9318d7783b8ce2"
  },
  {
    "url": "assets/js/page-4773a0fc.00bfba63.js",
    "revision": "0f3084c6bd0b7a05ad7ec535cd8d662c"
  },
  {
    "url": "assets/js/page-47ec31ef.d08f5382.js",
    "revision": "469c9a3c74cc28247596c9bdf6da3e2f"
  },
  {
    "url": "assets/js/page-494b7749.f84c52f7.js",
    "revision": "2d060f49142b53110066ddc128011801"
  },
  {
    "url": "assets/js/page-4e40ef0e.35bb94bc.js",
    "revision": "5d00ee278f83d00fd1d955b2070f3de6"
  },
  {
    "url": "assets/js/page-52453899.9d215fc5.js",
    "revision": "9de7977dfca0334f542eff18679d3ce0"
  },
  {
    "url": "assets/js/page-53a21bc2.488cd27e.js",
    "revision": "724fea166653cd56fc21e95d09d099cb"
  },
  {
    "url": "assets/js/page-548dbfdd.39e59482.js",
    "revision": "83a14127cc314c485c05e9748f676376"
  },
  {
    "url": "assets/js/page-54cde949.61c00fe9.js",
    "revision": "6a94b9eee74526a7b8c89b490875e8ed"
  },
  {
    "url": "assets/js/page-56c5add8.26f7ba25.js",
    "revision": "1bd45a87badab93b891141fb031f595b"
  },
  {
    "url": "assets/js/page-5971d062.d29d8b2c.js",
    "revision": "518da0d83f87a4c9073da0ff45182a41"
  },
  {
    "url": "assets/js/page-5ae76184.320b7f0a.js",
    "revision": "1f19e366deb4f87c107101cc1871fa4f"
  },
  {
    "url": "assets/js/page-5c24028f.e2eeefd6.js",
    "revision": "c7f819ed2f98fcae836170d62f53908e"
  },
  {
    "url": "assets/js/page-5dade32f.066ae4bb.js",
    "revision": "57de850892071baa3a10de0baac7d00f"
  },
  {
    "url": "assets/js/page-62c3f84a.6ef4abf5.js",
    "revision": "2cfe4c92972be6bd9000dc3027250666"
  },
  {
    "url": "assets/js/page-631831dc.2c520271.js",
    "revision": "92cc7dfa4f608415838f0f7cf94cfa30"
  },
  {
    "url": "assets/js/page-64c6c3f9.5aa04e4b.js",
    "revision": "f677ce09ee162dee365838d02283708a"
  },
  {
    "url": "assets/js/page-68a3e126.e2cdbc61.js",
    "revision": "480aed231ba94cbb4114adcf47a37554"
  },
  {
    "url": "assets/js/page-718e3f13.206d6064.js",
    "revision": "79b90f281aa13348cb13fdda429e2b4e"
  },
  {
    "url": "assets/js/page-7961fc62.94d4d928.js",
    "revision": "18bfc942b2997204d7658bb162622c61"
  },
  {
    "url": "assets/js/page-7a9d1252.6b2b5d32.js",
    "revision": "f4d79475522c1d5f298deda5965f7b25"
  },
  {
    "url": "assets/js/page-7e22c02f.1d79916d.js",
    "revision": "13892812a3c8abd8ba8ac65ef40e3dcb"
  },
  {
    "url": "assets/js/page-7f4c69e4.45f22914.js",
    "revision": "829aaf35a68681f3d37f82283ecca0a2"
  },
  {
    "url": "assets/js/page-9a13860a.702dcc9c.js",
    "revision": "9981fcd7a46419371d1ab837d39a860f"
  },
  {
    "url": "assets/js/page-9d704b70.4246b63a.js",
    "revision": "a8464b8df97424a22796fbc735b39252"
  },
  {
    "url": "assets/js/page-a1c83fc6.9f64303d.js",
    "revision": "9d98cd4d5d4464477de8c529d49928bb"
  },
  {
    "url": "assets/js/page-a649c29e.703f26b7.js",
    "revision": "13cdb316e6a7a85b3b8b003f6c67a95f"
  },
  {
    "url": "assets/js/page-b496432e.466ccbdc.js",
    "revision": "a01044b7854bc7a2f0f25ab647e1c9a3"
  },
  {
    "url": "assets/js/page-b6123e24.14d7ebd8.js",
    "revision": "e6a96d60081d282badc48515a7d11c6a"
  },
  {
    "url": "assets/js/page-c1e7a5fc.70c34d8b.js",
    "revision": "bbbb4abb3c2966a69fec527bf9429b7a"
  },
  {
    "url": "assets/js/page-c41b383a.96973db5.js",
    "revision": "3bad5f1593368b3aa49db34a56ec517c"
  },
  {
    "url": "assets/js/page-c799e3a4.d967fc2e.js",
    "revision": "f73e5f6fb9cdf47ce49723439915dedf"
  },
  {
    "url": "assets/js/page-cd03364e.911fd9e8.js",
    "revision": "92a5460fd3f49b87c857b8561f2e975c"
  },
  {
    "url": "assets/js/page-deb70f94.fb581214.js",
    "revision": "bf1d570ccc7fb3c46ef7fef0f0aef466"
  },
  {
    "url": "assets/js/page-e63bef64.a574a402.js",
    "revision": "2bafd692d39f1914a723ef5e308de409"
  },
  {
    "url": "assets/js/page-e869018c.5f968cc3.js",
    "revision": "dd9e4c4a7820e689fd210c5324cbaa76"
  },
  {
    "url": "assets/js/page-e87fecf8.6e65fa2d.js",
    "revision": "a745321740ab792823663eed219b31de"
  },
  {
    "url": "assets/js/page-fa2e9ecc.003a2e89.js",
    "revision": "9ee34d8af67f1bb651ea8e7a5a46e88c"
  },
  {
    "url": "assets/js/vendors~flowchart.9cc30435.js",
    "revision": "7e328fb7cb23bfe51c3aa743a035d1fc"
  },
  {
    "url": "assets/js/vendors~layout-Layout.2c705892.js",
    "revision": "b828f725d9f84b98ee732cb1804d983e"
  },
  {
    "url": "category/index.html",
    "revision": "fc590139bbeb9a841afa375e001c7405"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "1b554b008aff62072287494b31075bd8"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "0902c67131dcfe666f114ee3648db194"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "7371e0e027a1cbbfd569d46b22d3aa7a"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "a1c0789f37869a81dfa3c25243dbb136"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "f55e8ae657e955edb01d8073a5c3cddb"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "aadd6ed0a1fc34f2c9016d1ac6dbac93"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "a6bbc74cfc71da5446f18486892c4dea"
  },
  {
    "url": "Coding/日常筆記/CSharp/例外處理.html",
    "revision": "eae3820094fe3ed6cbab250410b8f306"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "dfd055634b67b69be4a2c408907e6d3d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "14944fdf72e4c01ca5531d7a02395c35"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "aef559e2380c32f3afa07f4d84da8899"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "b9993abe03989332a5c3eec8fa987473"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "7c8fd6b9ca4c000f2631081236ff4030"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "010da1d4f128bca147a1e7a17e3dd695"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "a363cd7db63ab6951cbbc409a9e51251"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "4d19b79e0a89778a27d0232358022272"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "8f39b22fea40352aba640fd59f7a9a08"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "79d114530bef51d592c49b05c4bed86d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "7dce191786fc1e2427fcac7e387f3782"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "50f23f5e4ea0681e12f3c4fd980fadc9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "a5d9be12cffb50e67db163f8d79598e6"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "9a65643a53108bd03ec1ac77481fd203"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "112bb6e532b4281924b8ed3b7df641dc"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "c01025d0b993b895e3745978aafc0d48"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "b4844f84beffb1da8fcf03252f77194b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "049411a0ed4f12a1a6ef89a9e8bb6729"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "15ae00ed8e6069a9ff7776025914a24f"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "beadc841ec2aa0904b82dd5f5a82ad73"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "fd0134def39b62d7850366823a8eb885"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "e65925688802f7308d3af5af2377168a"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "cfb1945aef534d530dd831a888890a28"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "63ff75e7824c6f9b2aa594d6ec6e8b57"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "8fbcb8bc22d569efb6b2e0e122a36c3c"
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
    "revision": "38642355d3d417334dbda690723b1896"
  },
  {
    "url": "search/index.html",
    "revision": "c202734d22619d452346025791bb079c"
  },
  {
    "url": "tag/index.html",
    "revision": "4621e21ad59d7850589d5913d7242956"
  },
  {
    "url": "tmp.html",
    "revision": "93d96f7eae1de7a3ae269632ca52569d"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "71b6316cf9fcf1f7b7355a31373cc76a"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "535d0c423e2587b881532bc63781af18"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "769280b0fdd59125f1cf67f47f54cc3d"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "31c9545e7e5a6333b6c2d751d672d079"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "c7631a85020ff20ff0dbc13db5794b12"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "9dab1417e411e661af88abc8ed8f7ba4"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "df8e5c4cddcefdcaa415f1d96b42a42f"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "9c43d2d0baedae5fd9fa9ae746ab8b70"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "459793c0e5e78e29909659451231ea8f"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "a05fb9df27b6987ba932472f14f66920"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "136c6cb802e4e2ff92bab18c89feae50"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "b3111bc6633a1c26bf496be7adf841f1"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "dcb82779024dde480a4a81e1f253032a"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "d16465f647d87d8f746dfbe16e8b70d4"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "4c153c1b1fec16a009969342725e9627"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "6a2e33cae17345a909e5637b722628ca"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "90506afed0f1b23f18ff1e199732d0b7"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "3768e266f8cb92bc95ff31bb4aa333ab"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "36526b84f12c1075cd64beed1da7aae4"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "483d16c9373c7f1fad2b1986ad304500"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "0d476573b0e8840148c8c7ad0b97fcd2"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "02647907ec17b6ca8ba9b5639e2acfff"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "ea051fb58d5e1b272176dbd01999cac1"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "773a4d34669134b73a7a076791c23cea"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "4dcf6e25ac5892e846846f1a1ad66db9"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "e5d9bbb44133f4ae70f8aa8668e275ff"
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
