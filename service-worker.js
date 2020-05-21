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
    "revision": "410b917c30bb16b7304c679355a7dbfd"
  },
  {
    "url": "About/index.html",
    "revision": "25836c25802fa3277006705678829687"
  },
  {
    "url": "archive/index.html",
    "revision": "3e7ceb2c743698ab18e9b381ccab3f07"
  },
  {
    "url": "assets/css/0.styles.f78d105b.css",
    "revision": "504f540ad0dcd1812c1f40eae20f71d6"
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
    "url": "assets/js/100.c3c11307.js",
    "revision": "f7f510aacaec544b8371a887c8d6f1a9"
  },
  {
    "url": "assets/js/101.80e8a878.js",
    "revision": "ffb73a002089eca9bec7f089d86808cf"
  },
  {
    "url": "assets/js/102.43d2afed.js",
    "revision": "08ac93f713aa56d887836a7fa9806015"
  },
  {
    "url": "assets/js/103.484ace34.js",
    "revision": "0d5b80fc8a76a9b643a86597e669d81a"
  },
  {
    "url": "assets/js/104.572e68b4.js",
    "revision": "ddfac7f1e614648a69ca6c1fe378585a"
  },
  {
    "url": "assets/js/105.9ade835a.js",
    "revision": "7d2d351cf64166d5ba20e35544791d0c"
  },
  {
    "url": "assets/js/106.d303d886.js",
    "revision": "8e74f4f0df84122aeb22e930c3044a1a"
  },
  {
    "url": "assets/js/107.e6bf2531.js",
    "revision": "421f410ce82c06a67f5352387b84829e"
  },
  {
    "url": "assets/js/108.2635a1a8.js",
    "revision": "c662734178079234781d3abe99cbb807"
  },
  {
    "url": "assets/js/109.21d6c5bd.js",
    "revision": "b0c4086eab31b0c74be334c8e23a2076"
  },
  {
    "url": "assets/js/110.f5ffe569.js",
    "revision": "910b2783bf33d58c4f8aaae009eabe71"
  },
  {
    "url": "assets/js/111.0d79a70b.js",
    "revision": "64233e712b313b936e058557a7c57a11"
  },
  {
    "url": "assets/js/112.3682e545.js",
    "revision": "a3ff39055a7b0192a3c6e8ea54190be6"
  },
  {
    "url": "assets/js/2.cc475928.js",
    "revision": "02601f4e541a5a67be2623f03f15b670"
  },
  {
    "url": "assets/js/3.bc79db90.js",
    "revision": "3d6cf8cd82cd99d67df1362ffed4ba45"
  },
  {
    "url": "assets/js/4.ba3508a2.js",
    "revision": "e9288e16a8cf2bafb446239b709d1a0f"
  },
  {
    "url": "assets/js/5.a311c362.js",
    "revision": "6fe829dea28a37c51dab65abae7aee2b"
  },
  {
    "url": "assets/js/6.441fbabc.js",
    "revision": "42702391e3fc666a7f1b14d33b34c276"
  },
  {
    "url": "assets/js/88.3e9d5dde.js",
    "revision": "b4ca8198ea932b21dd313084f84af871"
  },
  {
    "url": "assets/js/89.ffde715b.js",
    "revision": "4b308293649b09da0c4ffe95f0726154"
  },
  {
    "url": "assets/js/90.be7be52c.js",
    "revision": "b30f0305159bb42fb49081c3f1c877c7"
  },
  {
    "url": "assets/js/91.988d7373.js",
    "revision": "2fa0c12a58ed0a4510442672602190a2"
  },
  {
    "url": "assets/js/92.d5c3bd4c.js",
    "revision": "95e445b32cdd58cc6393e8ffd96d1d47"
  },
  {
    "url": "assets/js/93.20bb28a7.js",
    "revision": "5d1ddbd11454cba9f479f12511838a6b"
  },
  {
    "url": "assets/js/94.1b1014fb.js",
    "revision": "4f125bad653bb43aab6dec091212d76c"
  },
  {
    "url": "assets/js/95.3b9f685a.js",
    "revision": "9963c1435c3bf6cc865827912bf663fb"
  },
  {
    "url": "assets/js/96.08155cc6.js",
    "revision": "d87b4e6f48e355ce658801a34aa5f781"
  },
  {
    "url": "assets/js/97.6479ea70.js",
    "revision": "2ff6c1a141da93a840b71030766fbd36"
  },
  {
    "url": "assets/js/98.2d6dd358.js",
    "revision": "61fe30616e0cecd2708edd3c4afb3029"
  },
  {
    "url": "assets/js/99.2938c214.js",
    "revision": "a39e1798c5c7cf6752a93911f56a2ca0"
  },
  {
    "url": "assets/js/app.d0506c86.js",
    "revision": "bff83287a91d4d84c28a6e20c8f37134"
  },
  {
    "url": "assets/js/layout-BaseLayout.01c0a979.js",
    "revision": "b0bc214db409c07ab336f11004d142d2"
  },
  {
    "url": "assets/js/layout-Layout.3d69abe1.js",
    "revision": "5beea662e021b6b2399a0e7c37ba8e5a"
  },
  {
    "url": "assets/js/layout-NotFound.1d0a77f4.js",
    "revision": "15ca814e4f94540a57199d5eecd0c2b8"
  },
  {
    "url": "assets/js/page-0193e625.f6911f94.js",
    "revision": "11cc65514c4cc04ed0f6c98f06640ddd"
  },
  {
    "url": "assets/js/page-021b3aa4.20a83495.js",
    "revision": "47d6301104d42a694aae0bf20fae64d7"
  },
  {
    "url": "assets/js/page-0a921c99.923e40f8.js",
    "revision": "b1123daeeeec37e5d57edfdfae316eb2"
  },
  {
    "url": "assets/js/page-0c6c4d65.381f013c.js",
    "revision": "d53d272cae50a37df3a33cff6a869c68"
  },
  {
    "url": "assets/js/page-0c7f77bc.b442bfa6.js",
    "revision": "2504c4b1a56cc6f56e3f88d793356bfa"
  },
  {
    "url": "assets/js/page-1a34eb5d.4f851963.js",
    "revision": "e7ec04a3f1049caab378d16e89e82a2e"
  },
  {
    "url": "assets/js/page-1c4a4e12.7652ed65.js",
    "revision": "818bb233ef60fc5da74450f5f97e8b44"
  },
  {
    "url": "assets/js/page-1ccc22d8.5416727b.js",
    "revision": "3bb353c95097a73fae069a6ec776ea99"
  },
  {
    "url": "assets/js/page-1db42de8.00cd870a.js",
    "revision": "ba1a4ed862bfa9b43bb405588a7fbca2"
  },
  {
    "url": "assets/js/page-1e536af9.238b93ab.js",
    "revision": "00698ef1fb12bd93d3fc95e00b3c7e16"
  },
  {
    "url": "assets/js/page-21fcb945.ae7a642a.js",
    "revision": "e4b5e1d42d9bb0eb071db04bda06666a"
  },
  {
    "url": "assets/js/page-25bc4f18.239f2f2b.js",
    "revision": "837b42c0265cc23ebee4ac52ae8e8dc6"
  },
  {
    "url": "assets/js/page-27f6ecec.720f163f.js",
    "revision": "2e6deb2ac809499ec7d85d103c2727a6"
  },
  {
    "url": "assets/js/page-29c918e5.eba4821c.js",
    "revision": "0d4b57dfa56993c0e4117d188ec80553"
  },
  {
    "url": "assets/js/page-2c6bc4ab.28bc4018.js",
    "revision": "bf7e5199044bde10b94d649e1694f37f"
  },
  {
    "url": "assets/js/page-2e8c0cd0.0323246a.js",
    "revision": "50f1f85020562f230d34a42b99acaa1a"
  },
  {
    "url": "assets/js/page-320aac86.fcedb6f9.js",
    "revision": "fdab29429b683b83be4ebd17ead63c1c"
  },
  {
    "url": "assets/js/page-339369e0.1241135b.js",
    "revision": "3d7b0ffcde5a0fc480bf19f2c4229f6e"
  },
  {
    "url": "assets/js/page-36d5d2b3.78956a26.js",
    "revision": "3580fba630d6e0bd6b37afd599ab2263"
  },
  {
    "url": "assets/js/page-39e05f8b.e608dcf6.js",
    "revision": "4f2b7a8c8431b12b700fa537b06b7fae"
  },
  {
    "url": "assets/js/page-3c8dbd4b.38fde2d6.js",
    "revision": "7e01a6fa2be35fbfa9b67c53e237a612"
  },
  {
    "url": "assets/js/page-3cdc4745.757e9e22.js",
    "revision": "fd6d41344aeae9482f69433efba8ea63"
  },
  {
    "url": "assets/js/page-4144513c.7d3a8fd4.js",
    "revision": "a3453cf37f80e746ac37cbc86a78bf69"
  },
  {
    "url": "assets/js/page-422a7e52.aab1a21f.js",
    "revision": "460f2b6826f4077c3c4cabe7b0dceb96"
  },
  {
    "url": "assets/js/page-4478a866.8ec9decc.js",
    "revision": "955cb073d804caa4e52730c0039edb7f"
  },
  {
    "url": "assets/js/page-455360d1.68b18c40.js",
    "revision": "4e7841effaeff169937edea774db74aa"
  },
  {
    "url": "assets/js/page-47f71914.e04aae40.js",
    "revision": "fe462e0c2a3ab26277c39012a02b2b32"
  },
  {
    "url": "assets/js/page-4829d184.cac339a9.js",
    "revision": "89c053f41239f888fd43e9f6fa7a01eb"
  },
  {
    "url": "assets/js/page-486aacae.f743cddc.js",
    "revision": "f9e895dd12efd72ad00a7cfba40c7d14"
  },
  {
    "url": "assets/js/page-4d521b14.8cf2fbf7.js",
    "revision": "4c4d3c9a8fba36072ce7726c38d2c464"
  },
  {
    "url": "assets/js/page-4d7e2aa5.9954ad2f.js",
    "revision": "96475f292566416ba78cd037fc34784d"
  },
  {
    "url": "assets/js/page-4d9fba32.0936843a.js",
    "revision": "50317bdb2bb5bb071107aae8797947ed"
  },
  {
    "url": "assets/js/page-4dc00f25.3270661c.js",
    "revision": "2d886a273e4b99e36f7678eec07bdd59"
  },
  {
    "url": "assets/js/page-4dc54ba5.c947a890.js",
    "revision": "5d6d8bab5ccffd77f38aaa8f865a39c7"
  },
  {
    "url": "assets/js/page-4df429d2.1826ba82.js",
    "revision": "4c8cd5f696d5a7f0631e0e6b3c14fd15"
  },
  {
    "url": "assets/js/page-518ca8d8.89d08c3c.js",
    "revision": "831a77bb4db4436c2da38f570aad639a"
  },
  {
    "url": "assets/js/page-55a376be.3ad6d680.js",
    "revision": "9b2c8b0ba63b4aed25d5a09a0a7a60c6"
  },
  {
    "url": "assets/js/page-59cd63bf.eac86ad4.js",
    "revision": "8bb7cb083e954d2f4437925ff43ce881"
  },
  {
    "url": "assets/js/page-5cdb680e.f3ae4a01.js",
    "revision": "426e3f49172522d1902a5a3f32bf50b6"
  },
  {
    "url": "assets/js/page-5de41bb6.a97817e4.js",
    "revision": "a41253ffb22e395dd9966e0832ca3a83"
  },
  {
    "url": "assets/js/page-5edad598.7fa0b0e9.js",
    "revision": "7bf81635a5bdfdb73471267358b84f7d"
  },
  {
    "url": "assets/js/page-66061c06.92ef1ce5.js",
    "revision": "4bc9eb7fea7712909569a45860dc3a33"
  },
  {
    "url": "assets/js/page-6890df9a.6e0efcbd.js",
    "revision": "0b26a54d33826a7b833a9d5ebea8703b"
  },
  {
    "url": "assets/js/page-6dbff0ea.f378ef4d.js",
    "revision": "39d2f00c90afd9a1d3404d36ddef85a7"
  },
  {
    "url": "assets/js/page-70612fe6.cf68a133.js",
    "revision": "6506bef4e4a731adc0e0860951ab5a34"
  },
  {
    "url": "assets/js/page-720c8312.12c5f21e.js",
    "revision": "21dd444a3cfdd627a129b40e9b354e6f"
  },
  {
    "url": "assets/js/page-74a44f51.0771c1f7.js",
    "revision": "0c11d3e77b3536abc3bd8e73583ebc75"
  },
  {
    "url": "assets/js/page-7690c622.2b08c801.js",
    "revision": "2bba9aa8866e2f3e0f3dc42e3b7d76fb"
  },
  {
    "url": "assets/js/page-7bfb30a6.910ff348.js",
    "revision": "e586022a5894772342ff4fabe4b33861"
  },
  {
    "url": "assets/js/page-7d3a6963.428acdfe.js",
    "revision": "971e5467b2e09176815b2ab61796e07d"
  },
  {
    "url": "assets/js/page-7e6b5e12.8bf11464.js",
    "revision": "86ae6398bf2cd764e77b51dbc759e505"
  },
  {
    "url": "assets/js/page-82c2c642.d864c4fb.js",
    "revision": "f9f2f061dcd5e78a6f4e8c3d73ce5e81"
  },
  {
    "url": "assets/js/page-85f4c948.4c7e9cab.js",
    "revision": "157b593eac99a320543ed96bfd90cc17"
  },
  {
    "url": "assets/js/page-8892394c.3773aa63.js",
    "revision": "d77112ce00029b52dc84661a21367188"
  },
  {
    "url": "assets/js/page-89b130dc.49da71de.js",
    "revision": "660dca6a42f3b939245b4649f2fef877"
  },
  {
    "url": "assets/js/page-8da9df6c.d06619e9.js",
    "revision": "c77c07c7d1d969c29c76e8b83a500c41"
  },
  {
    "url": "assets/js/page-916af89c.b09bfca7.js",
    "revision": "3f5b7d16ed1b82f99175ef5db38ae16a"
  },
  {
    "url": "assets/js/page-9a2a43a4.365546d0.js",
    "revision": "94aa58d94b83c489eabcb41690f25759"
  },
  {
    "url": "assets/js/page-9ec1a766.44bbddd9.js",
    "revision": "373e47e779c0fc77a283d3108513b28e"
  },
  {
    "url": "assets/js/page-a6174872.4522753a.js",
    "revision": "9b4a3750dbe20b8c5127642db1a2edf5"
  },
  {
    "url": "assets/js/page-aab392fc.8271fd21.js",
    "revision": "00eba5ebd03354a2358bbd0efb0ff101"
  },
  {
    "url": "assets/js/page-ace574d0.25415c05.js",
    "revision": "bfa2823cae525aff8bb510ed23a12fd6"
  },
  {
    "url": "assets/js/page-ad24ce34.5af3aa4e.js",
    "revision": "5431c1c863a99587cc7335c5c12df63c"
  },
  {
    "url": "assets/js/page-b0521034.f0313559.js",
    "revision": "9832c0db3aec67ad6a8f679395f33129"
  },
  {
    "url": "assets/js/page-b0d90ce6.31c748ba.js",
    "revision": "ffd76d299e9d27956c70748150412be6"
  },
  {
    "url": "assets/js/page-b40de7ce.4dff8c5d.js",
    "revision": "f4c9f3a7d240d28d2976031a1ded174a"
  },
  {
    "url": "assets/js/page-c26b0310.622ef88a.js",
    "revision": "d8e82323dc4e6858d6162265c138009e"
  },
  {
    "url": "assets/js/page-c4bdd70e.88e42756.js",
    "revision": "e824f6282e8e755873903fcba2da3872"
  },
  {
    "url": "assets/js/page-c5f1a60e.5da1042a.js",
    "revision": "1ee19a2eb2c89f3602a05c65b992947f"
  },
  {
    "url": "assets/js/page-c60be50a.fb167268.js",
    "revision": "fcc10028794aa93b8bd02ab9e6d499d4"
  },
  {
    "url": "assets/js/page-d6c4343e.388bf700.js",
    "revision": "09a509911165c7911073967831686c4e"
  },
  {
    "url": "assets/js/page-e468b710.939325d7.js",
    "revision": "1f4f427e891a50275db2ebdc6fc1dfa0"
  },
  {
    "url": "assets/js/page-e72e49e8.be51aa23.js",
    "revision": "f3020723acfd21c3a3d7af3937026e2c"
  },
  {
    "url": "assets/js/page-ed303fba.65cb1cf5.js",
    "revision": "409d8353e4de791fc340deff0fa54d4b"
  },
  {
    "url": "assets/js/page-f313c186.15263c83.js",
    "revision": "20cbd450ae8976e9b7ed8cc554642f19"
  },
  {
    "url": "assets/js/vendors~flowchart.90c92111.js",
    "revision": "ba7c70d805c815b544feafdb6588c87b"
  },
  {
    "url": "assets/js/vendors~layout-Layout.d515d087.js",
    "revision": "377ede223e142e95438b0d7958920a1f"
  },
  {
    "url": "category/index.html",
    "revision": "e640c9afdcc8abbfd5aff8a4a1d37d87"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "b3a045835c7b35d0147fd7ee585a5802"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "e2dc1501a03952ff6f5f589b75cf6f01"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "c6f8737885d037190aac9a541001847b"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "59a17a7324626a48dcda51094a3f1954"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "94641f8740a40f4fdd71680b7c5962b4"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "a79ef55fd0bd2c14f869ef7e6f66e28c"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "8e9132c94b4d2bec5f37f6200119ed67"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "464341b26455f6c095049428af631469"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "7e2b97ca0a954b7d8177dcd7e87291f4"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "a10d8a7e8ebff5c3135c47756047fd84"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "c6502c690d3767d57852d37f00a0777e"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "d0398ec7a6dd140878156a5cb124a087"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "d5b22be94bf6b22faf784133b49b370f"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "930d3422d118246927cf333075ed6494"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "de9b4858250729b289f6622cef6d07e7"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "105c6ad620fbadf90f0112af5e95aa6f"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "c396825021b28ecef246a9d5fba63ffd"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "ad4bdd57ed37aaa428643dd49dafa9c7"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "a4e92eda8161161d2a1abe2bfa6b5058"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "bc7cc704333574ccd65bc18cb27993b4"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "bc1ff8137e0a66e9e9e48897e5be14d6"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "754aa99abcd04dc38c23229a527db250"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "d3eefd0f1483ecbb799bfe47ec1875cb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "3d94735a3211043082846ccc43bd1e28"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "b79343e7092007b6d17fd5833e1e65c4"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "7b57d0c9e65fbd2bbf20a5bf6a40aef1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "54f789d2a8a72e4232d360e26a60cb76"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "f0cb28e669bd0117d5238cd08078a37e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "04d4ca9b5230f170cc1df528ee792ad7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "7dfdd9ac5e6039ec3fc43eac2a304c93"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "711ec47837da3e22b8f031e949bbaca5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "7690d4d1ca9eb93d949d84aabefabf96"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "e46bcc573f49648abcd058e791416e8a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "621c0179cb87b0f38c196dfb78661cff"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "46da86a8b4b5e59f0ca0ea332ce464cb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "390043372ce113b78e36df6571578a12"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "2c796e0620a4c06d5b3f3f2ff7539e4a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "6826ee5f52e3d305f297a5857d21b4e9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "30a69e15183da80a4a9e41b0cab82f05"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "520ce58af54ac13183109b9b42545d1b"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "25ae46f611167f18abfa970445a2371c"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "7e4182e361c62597e4b46e68b82262f9"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "1106a9f8522bc3f71f573f3066856b3c"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "bda6a92dd5ac0fda2895e6e535a05df1"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "6ec09b8d634bdd588d7636fea1cbbe93"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "a19a4adfef309da5b1def5c2ed01a77d"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "98084d19103de6f34014b0b28340a4b3"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "fc8de883aced89d31af109240fa65b08"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "895aa38030240abe429d569c3e8fa6df"
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
    "revision": "caf290af243e552609b9c119cd3c043e"
  },
  {
    "url": "search/index.html",
    "revision": "8ffd97e7b3c225b1ddd8b42e3d81a606"
  },
  {
    "url": "tag/index.html",
    "revision": "51e7cf5feb249659a361d80f43a318a1"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "9b9bfdd4b7adf519373aecaa4bb55c13"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "1880f2a501208e4a03926b86685534d5"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "60c706761142e6f7e518c190f8ed9727"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "d454595d63b304611435e4d50cd5cb34"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "47d9e465a711075627021d7d51e8e936"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "a50bb148e4a8c9f8fa6fdd94ef688b92"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "b7cf249ffddd94eb8c2a2a2266fb5da9"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "d0df93f09e1bed9d14c35b470eeb167f"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "d730986b71c65c9433cd04950fce5478"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "59ae7877c74f2172d63b712141b5d476"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "33f7beb391b8a1b408c1a714dce07c77"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "a98b9a7649ad7c2ce5ce76352037d43b"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "1b699a9cafa87efd1d4376bb6d08b485"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "65fd418ccb9c2f2f3478e2e7d2de9161"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "6397b691448b4cc523c0ae1e00b3336c"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "61940fb6d23d3debdd750b7571c69cf9"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "6a5be16b3b0ad130d8d960cafc519341"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "0c7ccac7e017a319bf46a175bbddc382"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "d6fc4de705f2b1201b87c957ffce83af"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "463cebdf4e45830dd6198c4b41373c25"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "df839c112917729282f556933a3ec3fc"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "c3760395aa45c3c64f1fd67826466d6a"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "2f968f1c7ee91a1f88d8a2ae5e0c5e40"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "b573da8791cc0c8228a1389927df088b"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "9cbea4fafa4d098c86062b7d416897cf"
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
