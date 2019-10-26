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
    "revision": "b4592298d1791a25fcc5336745095b5f"
  },
  {
    "url": "About/index.html",
    "revision": "71094408fcefcf6b268e471593a4a606"
  },
  {
    "url": "archive/index.html",
    "revision": "bf0aba5a0a1286a94fe4e9031d29d406"
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
    "url": "assets/js/app.a37b92fe.js",
    "revision": "26a14c297ac4c35a769c36a9004e2609"
  },
  {
    "url": "assets/js/layout-BaseLayout.701130f6.js",
    "revision": "80c6cbbb34b9be577f1c462b5157bd68"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.7ea06557.js",
    "revision": "c86c573e84526c4c8f2a8c1fd7c5a701"
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
    "url": "assets/js/page-03ff99e4.e5c137bb.js",
    "revision": "c768fbfa23124125d373f900f98e4dbc"
  },
  {
    "url": "assets/js/page-0815fe43.17b7011b.js",
    "revision": "baf7b439a369d67aa71bfeab2dcf5cdc"
  },
  {
    "url": "assets/js/page-0994254e.310af08f.js",
    "revision": "d44613e8205bf0d34419e17338297e89"
  },
  {
    "url": "assets/js/page-09cfa20f.7dd62918.js",
    "revision": "8b4111fe2692a9465fb85f860f6267db"
  },
  {
    "url": "assets/js/page-0bd5cd98.3d897c32.js",
    "revision": "3e2e591baa88d89b6e7e26cbfda73776"
  },
  {
    "url": "assets/js/page-0ca8b05c.eb57b7de.js",
    "revision": "5f84fd94c7f1a533928a5ca4f7646a05"
  },
  {
    "url": "assets/js/page-130de14f.4d1c0811.js",
    "revision": "1ead4a49af1a23869a5e92003eda5a3c"
  },
  {
    "url": "assets/js/page-17916170.e43de984.js",
    "revision": "07bfcd2f7590419c344921f6e85dd84a"
  },
  {
    "url": "assets/js/page-1efb5c62.06d78514.js",
    "revision": "69bfa0f9734b23b8a13a8f92f9091836"
  },
  {
    "url": "assets/js/page-2282a6e0.404d7f06.js",
    "revision": "e39a62232246caf221dca2d62b176bfd"
  },
  {
    "url": "assets/js/page-2ba07fce.f6cc859f.js",
    "revision": "2e905093fd1599c44bbf11bdbe3df9d1"
  },
  {
    "url": "assets/js/page-2da25f49.f5e8ad7a.js",
    "revision": "b1af66fa75db7b4d751910c9a2a0de40"
  },
  {
    "url": "assets/js/page-2f77601c.6c479d94.js",
    "revision": "92cc2cdf688df930c40f4257ca551e92"
  },
  {
    "url": "assets/js/page-36058925.02bc0817.js",
    "revision": "13dcee8b63e77d3d4b0c324ebc018551"
  },
  {
    "url": "assets/js/page-3721e5cf.d0232776.js",
    "revision": "d2dbd97e16917452db6c2ae7c7f54da5"
  },
  {
    "url": "assets/js/page-38e94d3e.9a665bea.js",
    "revision": "f81554dc0556708ed8e5bbd9f1a074d4"
  },
  {
    "url": "assets/js/page-39d006b5.c405906a.js",
    "revision": "174fb3e96e902058b7417e14fb061e26"
  },
  {
    "url": "assets/js/page-3b1778e4.e0880245.js",
    "revision": "4672b317174ae3d8c2bdd0a2a44f6f34"
  },
  {
    "url": "assets/js/page-4048f79b.2e548f7f.js",
    "revision": "cccd04bf00f343740f727fda3a979cfb"
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
    "url": "assets/js/page-4773a0fc.be57fccc.js",
    "revision": "ee078ff2b2f9af86903e5c875c48d948"
  },
  {
    "url": "assets/js/page-47ec31ef.73bfa097.js",
    "revision": "66405c12a84c6822b48cfc7d8e6c1d15"
  },
  {
    "url": "assets/js/page-494b7749.d62639b1.js",
    "revision": "9131e6f0f7a6067b6419417e90b48fd9"
  },
  {
    "url": "assets/js/page-4e40ef0e.50d53426.js",
    "revision": "4df120bde39eba6f1421d79fd7297591"
  },
  {
    "url": "assets/js/page-4f5eb00c.c030713d.js",
    "revision": "b5751621d5e3e9a6d6aedd2615a195ee"
  },
  {
    "url": "assets/js/page-52453899.ce295a3b.js",
    "revision": "1a16efc993d46149a1022f38b38fb04a"
  },
  {
    "url": "assets/js/page-53a21bc2.5b0b1880.js",
    "revision": "42cf50b4cf40f7873f6260e466f12183"
  },
  {
    "url": "assets/js/page-548dbfdd.3c1a25e5.js",
    "revision": "70d7db00800bda8c5d52ae76f621877c"
  },
  {
    "url": "assets/js/page-54cde949.81942e48.js",
    "revision": "818e36c2f307b9fd386d3f1a64b5a025"
  },
  {
    "url": "assets/js/page-56c5add8.1368db77.js",
    "revision": "6170c7d926d989ef13923d2ddc311969"
  },
  {
    "url": "assets/js/page-5971d062.3024a12e.js",
    "revision": "0d5a414443069c55ba4621997be6ba89"
  },
  {
    "url": "assets/js/page-5ae76184.ff36a6ce.js",
    "revision": "7a5b71a4f3589e4fec7e7613b02f3ffc"
  },
  {
    "url": "assets/js/page-5c24028f.4a681beb.js",
    "revision": "02230bb6018d3ac35a9993e7de3f1e25"
  },
  {
    "url": "assets/js/page-5dade32f.b18c53e2.js",
    "revision": "c8fa8f4252d4ba979c66cc631cacdefe"
  },
  {
    "url": "assets/js/page-62c3f84a.966de41a.js",
    "revision": "c35134120c5521ddf027964822f25d93"
  },
  {
    "url": "assets/js/page-631831dc.f4fd16fe.js",
    "revision": "7fc849d745f54b2ebe4047d6b8c1f110"
  },
  {
    "url": "assets/js/page-64c6c3f9.34e36959.js",
    "revision": "8aa47a714d826c4ac5ff07ce242f723e"
  },
  {
    "url": "assets/js/page-68a3e126.d7445828.js",
    "revision": "e68ef2c0e9db6c2c64707ac8684659b9"
  },
  {
    "url": "assets/js/page-718e3f13.a0398d01.js",
    "revision": "d071e58a60b405fa7b6197848d6d6787"
  },
  {
    "url": "assets/js/page-7961fc62.d13cb513.js",
    "revision": "bb01df436dc388dcbb97078a99b0dff6"
  },
  {
    "url": "assets/js/page-7e22c02f.ce234883.js",
    "revision": "7ff7049b1c13cd1e7144372cb5f8efa8"
  },
  {
    "url": "assets/js/page-7f4c69e4.21f456b8.js",
    "revision": "e4c975580c17abcb4499c24608d4b3f7"
  },
  {
    "url": "assets/js/page-9a13860a.7ae475fa.js",
    "revision": "38ec564bdf18af93f0d3cb360b4fd4d2"
  },
  {
    "url": "assets/js/page-9d704b70.93e57dbb.js",
    "revision": "aba0941b1d65a58cac857796efa9247c"
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
    "url": "assets/js/page-b6123e24.f2e61607.js",
    "revision": "f098d659300d4f4c00a5a52bd6ea9803"
  },
  {
    "url": "assets/js/page-c1e7a5fc.8f9a80de.js",
    "revision": "069277accf900f5a4b0a671c881de74c"
  },
  {
    "url": "assets/js/page-c41b383a.9386f912.js",
    "revision": "fa0fc8a888474a99e89f47bafb06b080"
  },
  {
    "url": "assets/js/page-c799e3a4.6a7bd7b0.js",
    "revision": "076b8e8bb583a571f168599a4d025aaf"
  },
  {
    "url": "assets/js/page-cd03364e.5afa6107.js",
    "revision": "47253fe2807c2b93770be3015c364371"
  },
  {
    "url": "assets/js/page-deb70f94.a091fc20.js",
    "revision": "e915af1922ede97e84a66a038f884dae"
  },
  {
    "url": "assets/js/page-e869018c.0cea644c.js",
    "revision": "b5aa41c551300e83b225c51fe9e93ed5"
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
    "revision": "85bcb59cf22eee1a724d9312d1de324e"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "5c952b0d0098f2f23e32207a8fbf26c5"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "448a35ffbee115654da081226cdd57d8"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "6c365fb6de467fb9b5b1c77587d26e3f"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "fc01f31ae8cdcf4459975d466df5a153"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "7543c26ce32b6761bb250a0e2c269970"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "6c076dcce22091d9eb99625ec4eb4e8b"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "f89d8f3dc164f0681d8eaa8eeccd19b1"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "c5468ea80822754608e577bc0c472734"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "1a1b6f887788d06eaf8306a8036969e5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "59294560df37e34d5bf9bce08a051fed"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "0aab34a08eed5af67eccab866240baaa"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "bf889ef8bd1e18c4c62358630d7da7e3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "40805f3a0364f9643d3d829668df8394"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "091d477b56bad869f6553d5685caba84"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "544fbad3d2c12995b61e6cb8c2394813"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "3b444b2da206600b312d00f568a6dc4c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "93514f892cf811b0fff25818902259c0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "3677a1d4bd549fdf29f739188b1adc36"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "fc613083254cd45cdec0a4498abc1bf2"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "0efbd5753bd3ac8b2e5574f6d4ea8779"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "561ea753701e7467b9cda3eb0862e142"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "5e0608264672f9489cc799ea33b79ba8"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "b4674d0aa447504a008c83b59d20c304"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "4da2afba9b8813f9a6da447d4d29ded7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "cada1e781f0c927fa1aeb7b408e149c0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "78ec6df39de9831f3916f40e01fb6544"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "8eef3b943ccefce136e8419fa2d29b3d"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "9c5c983353ff346937b5514c438474b8"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "855ad711456db6aee3c1390666365890"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "b8aebf5e7e1c106ea9502399418964d6"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "e56a7db1c2ee8db19787d972a6566c7e"
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
    "revision": "e1cc7a1ea3efc76841426d421c2aca4e"
  },
  {
    "url": "search/index.html",
    "revision": "b5a253997d208345e824b7ea28f12076"
  },
  {
    "url": "tag/index.html",
    "revision": "ca3fbe6e6adc344abee7b91b8eaa28b8"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "299a60c3feb04cc02a1ff8438ed1d3b3"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "e6940360d7ee831f8df5a1ea9d7b6faf"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "f51e3600507d1b71132ffcdca0861b2f"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "420d4a9de58c4aced3f15ef2036cdaa5"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "87265f450dc9ff1568a90677d7b96608"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "2a640b54de0d1bdf2f201872f006c73e"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "20c063062d8e181d0c6899846aa5afc2"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "ec957bd77c2c0c3fef36216666ed6e98"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "825454ba6505bd61efe9db9425046ab2"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "5bfacd615d47416c58b639db4c17bb19"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "74ae93240cf6f2e68760f227341ed4e2"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "2f2df805a049f81f3536bff97be19a35"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "acca75f3d08152df4a516b4ab041025e"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "4fef926ea39b79cc29dc3d4a20b935ea"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "1a5cfb677aea7b5bba6a7f6e230b3403"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "251d2f99f074bf63ddb69a898f369934"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "ca6f0e1d9dc127acab67b1173828b970"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "7b31229b4edb3f063b21d122f8fa9708"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "b32d70b4d7c791848eb55e46022e0838"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "2993bf76035651acfeb783f129301dab"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "3e6713e1bd06fcb2a7d5beec1c2a4546"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "8c9b8cd582e81300019482ec3fe34b1c"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "bdd62230187d522b94a014c39f2f90d6"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "e21ee72567a4d07a3b8e5d29f6ac2e84"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "7c3835af9fe5a7c67456126111bb2ac4"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "ff8276364b06372549ac66d1c86dae28"
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
