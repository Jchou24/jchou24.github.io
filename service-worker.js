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
    "revision": "dc8788a38a0eb2864e8cedbb31ca1741"
  },
  {
    "url": "About/index.html",
    "revision": "364d7c51095878ccbaa35cea1defacc8"
  },
  {
    "url": "archive/index.html",
    "revision": "c1fe0e95764afce9123a3efc121caa3a"
  },
  {
    "url": "assets/css/0.styles.f0e7cea7.css",
    "revision": "dd0de86f6d1bfcca0b7272a489756032"
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
    "url": "assets/js/100.2060bdd5.js",
    "revision": "5c01d26b9b75bf27903efc4582944811"
  },
  {
    "url": "assets/js/101.1c1a42a5.js",
    "revision": "f1c89732cc0cb2fef058fdab7a2b772c"
  },
  {
    "url": "assets/js/102.647df412.js",
    "revision": "7c191df868866074aaa7fdd16080dea1"
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
    "url": "assets/js/108.0068bf33.js",
    "revision": "795861e19478000d05007d69e028f75d"
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
    "url": "assets/js/89.3c3fd676.js",
    "revision": "d25e52c8498411b770bb8dbd40bac546"
  },
  {
    "url": "assets/js/90.be7be52c.js",
    "revision": "b30f0305159bb42fb49081c3f1c877c7"
  },
  {
    "url": "assets/js/91.8982e014.js",
    "revision": "850d76092050058e46a99ebf90823df1"
  },
  {
    "url": "assets/js/92.b8ba9463.js",
    "revision": "866965d4a92a0a2f4f9777cb5f5e17d7"
  },
  {
    "url": "assets/js/93.20bb28a7.js",
    "revision": "5d1ddbd11454cba9f479f12511838a6b"
  },
  {
    "url": "assets/js/94.3d338985.js",
    "revision": "d809a111c1da52ef83cd8c80a9b13bd5"
  },
  {
    "url": "assets/js/95.3b9f685a.js",
    "revision": "9963c1435c3bf6cc865827912bf663fb"
  },
  {
    "url": "assets/js/96.16f17b32.js",
    "revision": "5e706ce596811b67e546d552d33acf58"
  },
  {
    "url": "assets/js/97.1541b827.js",
    "revision": "cbd0899639241b63e1c6fef6c6bc08b8"
  },
  {
    "url": "assets/js/98.2d6dd358.js",
    "revision": "61fe30616e0cecd2708edd3c4afb3029"
  },
  {
    "url": "assets/js/99.c6cf1be4.js",
    "revision": "4999ccb56f46654afa90c6c64747171a"
  },
  {
    "url": "assets/js/app.cc4df36d.js",
    "revision": "b823ed4f0b91b51eecd2c173396e9c23"
  },
  {
    "url": "assets/js/layout-BaseLayout.01c0a979.js",
    "revision": "b0bc214db409c07ab336f11004d142d2"
  },
  {
    "url": "assets/js/layout-Layout.2a53ec50.js",
    "revision": "6f30630654a8e0f0f81c22392b85d560"
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
    "url": "assets/js/page-0a921c99.3b8e9528.js",
    "revision": "32e5519316dfad90b733ab47c0d80d4c"
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
    "url": "assets/js/page-1c4a4e12.92629ec6.js",
    "revision": "58c8d9892e961fa1fa0e65a58c21952c"
  },
  {
    "url": "assets/js/page-1ccc22d8.5416727b.js",
    "revision": "3bb353c95097a73fae069a6ec776ea99"
  },
  {
    "url": "assets/js/page-1db42de8.1e63fe14.js",
    "revision": "b5bc919b7605c1a163b563c3b546d633"
  },
  {
    "url": "assets/js/page-1e536af9.238b93ab.js",
    "revision": "00698ef1fb12bd93d3fc95e00b3c7e16"
  },
  {
    "url": "assets/js/page-21fcb945.e5057b67.js",
    "revision": "0d2a9465146029f697b6e103e0237eaa"
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
    "url": "assets/js/page-2c6bc4ab.d2d35470.js",
    "revision": "743279f81392db63b999960a756d0e34"
  },
  {
    "url": "assets/js/page-2e8c0cd0.0323246a.js",
    "revision": "50f1f85020562f230d34a42b99acaa1a"
  },
  {
    "url": "assets/js/page-320aac86.dee3f640.js",
    "revision": "37b071d0ce8db3461fd73ff094bb16bb"
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
    "url": "assets/js/page-47f71914.99c4d959.js",
    "revision": "cb6ac82aa702d3752ef96c024c3bbb7e"
  },
  {
    "url": "assets/js/page-4829d184.a6cb8c7d.js",
    "revision": "f2efa0ba990fd5f3e7215aafddc86a5e"
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
    "url": "assets/js/page-4d9fba32.a54e93dc.js",
    "revision": "878ad17f3f124bcd9bd84932005fa0a6"
  },
  {
    "url": "assets/js/page-4dc00f25.393fb5ae.js",
    "revision": "dd335165e1018fea660b1e1629794248"
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
    "url": "assets/js/page-59cd63bf.a2c67fba.js",
    "revision": "28bbe0df429c5aaa58b6860e3c197279"
  },
  {
    "url": "assets/js/page-5cdb680e.c46aeab5.js",
    "revision": "30f1b4aad1267ffb22d3f216365551ca"
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
    "url": "assets/js/page-7bfb30a6.013fdd29.js",
    "revision": "f5e4c5c7945383f28a60cf608c7f3d52"
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
    "url": "assets/js/page-89b130dc.de23211c.js",
    "revision": "6c810add7469fc3038393e6bf5d51e83"
  },
  {
    "url": "assets/js/page-8da9df6c.3c8ea320.js",
    "revision": "ea608410daf275ae5f83f5e3d61add6e"
  },
  {
    "url": "assets/js/page-916af89c.b09bfca7.js",
    "revision": "3f5b7d16ed1b82f99175ef5db38ae16a"
  },
  {
    "url": "assets/js/page-9a2a43a4.edae34ba.js",
    "revision": "825ad38af36ad17bdb29723ed6331b63"
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
    "url": "assets/js/page-b0d90ce6.c55c9102.js",
    "revision": "4e422209135cf93f83f6773d3a6e999c"
  },
  {
    "url": "assets/js/page-b40de7ce.55a5f6dd.js",
    "revision": "4a8f0299f1e3f151d40e5554d8b08dc6"
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
    "url": "assets/js/page-e72e49e8.2b6b5aa5.js",
    "revision": "31a27a554661abe5f416fcc30003f3ea"
  },
  {
    "url": "assets/js/page-ed303fba.5525769d.js",
    "revision": "0e81099d2983252046f947d29b12e190"
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
    "revision": "07502703c7edddf29b17429b79f5140a"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "5ad5bd4830409a4c4ae4e1f8a9c0a056"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "8f9d02e75a20df7bb12f81562728f09b"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "dd557cf2d0c13a66cd7bb113f3354a5a"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "ab755c9512126e38f033a32d5b4d83f2"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "491073dd521bea4f7a0fb59dbbe7ff20"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "57910a7c3ace2347aab2f9e51031e286"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "7886e6653aba79defa0ef2b29b22b1da"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "4b6195162c7731e48d2ed70c6e9b6388"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "6a565051c807a330579d5517d10a1c86"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "188fa48d9c5071a76d68420fbdccdfad"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "ce90635be7b19558143387c31c1baf86"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "1473779b3f8ff91296ffd82d288c041a"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "563d6c28488a08d3ddecf10ade601bb3"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "afe66fde16eb7f24d9b8ca4f67ae7b3d"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "7889d6aa501c5b02449fe670b8ac7d3e"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "d9465546e26b1a5a020d0d74e09baa9c"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "914e0d1765af1e836676afe7a0a04962"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "9537dc9b8b268d3bd140646ae2abc777"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "5615815a0fc6675277039f6778123060"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "0c884f059ce7e1b47f53cb639984adda"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "eb5750a6e942db3034e6cb192b8e1bee"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "261b6d8b22a4b1e8c2d482e358006ef4"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "7507b9a4ce3243971c65bda3cfd801ed"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "c19de1ff55b3e0bca895c6c265eb4c4f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "b1a3429a6dfc62a4f5b87d7406f7926a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "395bd20404ad40f6322e1f064333f1c0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "5663165e2b4bf8f1cf6f3c814f268be7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "af522b8c5612b128087865c1af3e3664"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "5efeb381df0e21bdda2a667c1115d28b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "64a6defe14913c35aca0eb38c4a51d85"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "9f5ed136dd41b4800db7a6c4720376ba"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "91be5d388a2ba63f680e18fc4e1fb96a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "7ce0b17c173d4e88a7279f90b3840406"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "ba8eaf3754afd750abcc90d6c0fa51ff"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "2b0be4fbb37eec36234577d8b481a77e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "24b7acba2012a134b35921590a0d5305"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "fdfc2bc4a129aba6a5c8f8244767a26a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "d25c3262f65affd3bf92413d6e356ec7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "8057a8c743a6ccfb4180882e43b0a6b8"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "0510f73943c3e39003df804f9fcd241b"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "f16ac5f45d08948963c105e8c0a17aa0"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "0f241f0e881687702d651f2465c23120"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "b11c9e5f8dde11650365c4019149c20b"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "6a11cfa16eeacbe572dfc25eb0f46edf"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "2607b178f2e67bc3905556f98763a9fc"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "59d4a92e15b98af1893bd3f2da0487a8"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "a8e856ca4b22a64dbdfac231352d946c"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "14503146b4f489c104fd7b279646e142"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "2a29b234d7cbc74391c9eecbf9d9eccf"
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
    "revision": "90af2026f406fb3ca3abe32244ae5d32"
  },
  {
    "url": "search/index.html",
    "revision": "b3b2f30dc154cec92892c7ae9b60ae92"
  },
  {
    "url": "tag/index.html",
    "revision": "5dea0219f73e3b6481548370a55a5095"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "a11b9bf6deaee84ea1f97dd3c904f53f"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "9ab651df7c83a9e41f874e4721c5b0b8"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "65ce3c28cc47d730ea64df83daf931a1"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "cf3be11c87ba83d14eea353d4fd5ccb6"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "1ae1f5e426eaf3039a053b0a7ce03e88"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "83eae690580252f7b722f9d65233c331"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "e4311b6ff93229d45283bfaefb782701"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "951922e2fe844f9681658f78b5a63168"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "f5f7e16f5baca6366145e237b6fdb69b"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "508dbf8b6ef4ad0c09c8ecba901aca6f"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "23d1f10b19f916878ef60b7c61a62d57"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "8854cc4db08d2c37200857ab8a51143d"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "f4e5717c63a2fb22d84bdbb6b2e3d468"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "3a6ac9e3102792b823c1045e8a955cc2"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "d131694e115ea893147b3ed0255dbb05"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "a1a1e7acd42bd93924c7ed9b018268dc"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "9204b9669123c490186b334d0e783a6b"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "f49d8961bcc28c761439a9371625108f"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "9945e05c33f0e7e882b5e5ced01d4ab2"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "3dcc91c74702357ce82594296393ccd3"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "a0750b1ece968f423f27dd88875d812d"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "e5394bc347391c019db74be511b931ba"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "f32e22ad9eb0c186eb1c41593b7e74a2"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "a943a0b84c37d048bfcd85c937052a68"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "54b3407b6020c0308cf11f66e6df08f4"
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
