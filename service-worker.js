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
    "revision": "0822dcf9ce184980c813f9ecb41f1615"
  },
  {
    "url": "About/index.html",
    "revision": "3ccffa24eaa4263e50a9c45c754533ae"
  },
  {
    "url": "archive/index.html",
    "revision": "d132a80e0ed9700f7042145b3ad436d9"
  },
  {
    "url": "assets/css/0.styles.593546d7.css",
    "revision": "2051ca7195e717250e16c8afc3a54ba5"
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
    "url": "assets/js/6.17f9c8e8.js",
    "revision": "7869340ef7a98b4b94ebd6257880524a"
  },
  {
    "url": "assets/js/71.dcdde32d.js",
    "revision": "3e28289cfb17bf1aeff608da41ace914"
  },
  {
    "url": "assets/js/72.cfe78b8d.js",
    "revision": "28d930b617cc8d571078cdc00f4b3426"
  },
  {
    "url": "assets/js/73.fde4c545.js",
    "revision": "783e8eb4c9377a856259ca0dc9c88dc1"
  },
  {
    "url": "assets/js/74.e513c8be.js",
    "revision": "8b7cd7bf460a326ed8afcf34848f9a42"
  },
  {
    "url": "assets/js/75.3060d0cc.js",
    "revision": "e5e8047b13d33b5c785f39f661b6860a"
  },
  {
    "url": "assets/js/76.fcf2b36e.js",
    "revision": "8007f0fd9d59cc44a5ee79849c589b54"
  },
  {
    "url": "assets/js/77.55c60581.js",
    "revision": "b2a48649f69039f168e145bb3d87b5ef"
  },
  {
    "url": "assets/js/78.06f57943.js",
    "revision": "e6bb9e5a9ab498ad6b029a0474d9e7a9"
  },
  {
    "url": "assets/js/79.b2b1b035.js",
    "revision": "6dcec478917007f30364ec7e473c6e65"
  },
  {
    "url": "assets/js/80.ae9f4cfd.js",
    "revision": "f570be809c75b0972168fa445807b210"
  },
  {
    "url": "assets/js/81.65e2f667.js",
    "revision": "ec1b2bc8550e249fc2b530fd6d95c7c0"
  },
  {
    "url": "assets/js/82.201f5b99.js",
    "revision": "b5d0046acd215231999cd50d7a078f66"
  },
  {
    "url": "assets/js/83.8b6b7373.js",
    "revision": "0f729387e228d46b191beb8f05d79913"
  },
  {
    "url": "assets/js/84.8456d966.js",
    "revision": "d8337f5646018745f7d1fa54ef35cb1d"
  },
  {
    "url": "assets/js/85.1e1ed4b7.js",
    "revision": "ec5f1faaaf590b969813fbcd8c185cc0"
  },
  {
    "url": "assets/js/86.b956dab1.js",
    "revision": "f9a84e9fd003a24a7601ac51c8075e62"
  },
  {
    "url": "assets/js/87.7965f48e.js",
    "revision": "7fe36b879c4cadd029c2d8c3b1c523a7"
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
    "url": "assets/js/app.c11291f5.js",
    "revision": "266e64bcb420f5f85dd79ea8590befd1"
  },
  {
    "url": "assets/js/layout-BaseLayout.701130f6.js",
    "revision": "80c6cbbb34b9be577f1c462b5157bd68"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.be34caf1.js",
    "revision": "4efc3ad95f5b27ad61a94bf0a8d68a1d"
  },
  {
    "url": "assets/js/layout-Layout.b866c2d8.js",
    "revision": "86dff2e71da3bd32d1d4e106c3ffb7d4"
  },
  {
    "url": "assets/js/layout-NotFound.e99d6463.js",
    "revision": "8e97ba22f8817bf7690f90921acaf14b"
  },
  {
    "url": "assets/js/page-01b1365c.aca4b68f.js",
    "revision": "1f3bc56c2cddff44503004d08b231aa2"
  },
  {
    "url": "assets/js/page-03ff99e4.83a813dd.js",
    "revision": "ede25cfc81ead624fa0438ee5c985288"
  },
  {
    "url": "assets/js/page-0815fe43.c5b18e3e.js",
    "revision": "93a40353236b1a731a98c3b009a288f6"
  },
  {
    "url": "assets/js/page-0994254e.86317e86.js",
    "revision": "7fbadec53aabaae98c319a204e0003c1"
  },
  {
    "url": "assets/js/page-09cfa20f.a1b15218.js",
    "revision": "cfb52e2b9cdae136c3a09f819d67fce0"
  },
  {
    "url": "assets/js/page-0bd5cd98.5dfccfd5.js",
    "revision": "66c00eba28298dd1e4f0629d6beab052"
  },
  {
    "url": "assets/js/page-0ca8b05c.8242dec7.js",
    "revision": "51e0839867398e4930a800ae6d99fdc1"
  },
  {
    "url": "assets/js/page-130de14f.f32c216e.js",
    "revision": "5fb915e9a6083f2b0138f2feceb85b1c"
  },
  {
    "url": "assets/js/page-17916170.bcdae016.js",
    "revision": "5f6a72b00a447942b3ada4fee4c607a4"
  },
  {
    "url": "assets/js/page-1efb5c62.a340640a.js",
    "revision": "5642a95c38329dd57e80a3e49ab3d4ef"
  },
  {
    "url": "assets/js/page-2282a6e0.692e3585.js",
    "revision": "010601fb870f7164a41be33c6e5ee276"
  },
  {
    "url": "assets/js/page-2ba07fce.a1194bf9.js",
    "revision": "9b2c187578af13e2805ca0ace0eee031"
  },
  {
    "url": "assets/js/page-2da25f49.1016493e.js",
    "revision": "221c7bc98187d192aea48de78ef48cc7"
  },
  {
    "url": "assets/js/page-2f77601c.baec5d25.js",
    "revision": "efb0c36bf878d065e3fa4f4ca282d6d4"
  },
  {
    "url": "assets/js/page-36058925.2205a6c9.js",
    "revision": "712f30478cd8f2795800747799af3510"
  },
  {
    "url": "assets/js/page-3721e5cf.02edf903.js",
    "revision": "f0c018ed8b723435f3ab71772bc520fa"
  },
  {
    "url": "assets/js/page-38e94d3e.c37ae97e.js",
    "revision": "79f99e800886d8ef02a5b4f44cab7e98"
  },
  {
    "url": "assets/js/page-39d006b5.2f76c9d5.js",
    "revision": "b492a3a358c30e82ac7d54b9043fa2d5"
  },
  {
    "url": "assets/js/page-3b1778e4.efbde10d.js",
    "revision": "00212067dd54d17e99b0c5820a6b5ae7"
  },
  {
    "url": "assets/js/page-4048f79b.1b86a742.js",
    "revision": "528b0a94723903be151167b098137363"
  },
  {
    "url": "assets/js/page-409d673b.c40dc020.js",
    "revision": "83b38cde974b2ec45d1e1e7ba72b70fa"
  },
  {
    "url": "assets/js/page-42a0ea7c.7679be74.js",
    "revision": "061dea9faa5fccd1eb8ad7e6958cfdb4"
  },
  {
    "url": "assets/js/page-437f73dc.8981eed1.js",
    "revision": "626638f951f23abc8c5c34d93846a7c6"
  },
  {
    "url": "assets/js/page-4773a0fc.f582be58.js",
    "revision": "253d196de323eedd0dbe9d39caef5b5e"
  },
  {
    "url": "assets/js/page-47ec31ef.7d334cad.js",
    "revision": "b799989eccb55a66a809397b62451000"
  },
  {
    "url": "assets/js/page-494b7749.93711e88.js",
    "revision": "2a54fb69e2a1cf71bf494413fc0ce239"
  },
  {
    "url": "assets/js/page-4e40ef0e.a3050de0.js",
    "revision": "9fa8e9db8543244234e22e995e50cd2d"
  },
  {
    "url": "assets/js/page-4f5eb00c.1737e83f.js",
    "revision": "8ef8ec3e861963440b13b999ccb5b4eb"
  },
  {
    "url": "assets/js/page-52453899.4f6fd246.js",
    "revision": "24a1de2586254d1b5d9a1ab4a6f8f361"
  },
  {
    "url": "assets/js/page-53a21bc2.8acabdfc.js",
    "revision": "cc8b3eecc933a564c3f867d63f1bb898"
  },
  {
    "url": "assets/js/page-548dbfdd.cf3daac2.js",
    "revision": "168f83650742202f604cb5f99b0474fe"
  },
  {
    "url": "assets/js/page-54cde949.bd320e24.js",
    "revision": "5296f4d4d671444c80a32bfdc3184c7a"
  },
  {
    "url": "assets/js/page-56c5add8.4f6897d9.js",
    "revision": "e78e9b015372b419eaeb7af89f9269ea"
  },
  {
    "url": "assets/js/page-5971d062.1b6a1d38.js",
    "revision": "089a714f7cc2787fb03113704e58ebb3"
  },
  {
    "url": "assets/js/page-5ae76184.863a4497.js",
    "revision": "dd50e0fa2e1dbd8a9fb8bfcb7e74bcd2"
  },
  {
    "url": "assets/js/page-5c24028f.ac1c89da.js",
    "revision": "58e7ca513549071d77605cfa6cefd3b4"
  },
  {
    "url": "assets/js/page-5dade32f.6db4f5ce.js",
    "revision": "421c00308d5e057c5481e058b8887993"
  },
  {
    "url": "assets/js/page-62c3f84a.424de960.js",
    "revision": "2fab3882c680c802b3e13defc39b4605"
  },
  {
    "url": "assets/js/page-631831dc.1400bb9e.js",
    "revision": "11d8145ae6392917d239569213c5fc1d"
  },
  {
    "url": "assets/js/page-64c6c3f9.f5739879.js",
    "revision": "a05375422e7734551068328a079ea48f"
  },
  {
    "url": "assets/js/page-68a3e126.f199af42.js",
    "revision": "c642476a0d4d9ff8c073246bc9d17108"
  },
  {
    "url": "assets/js/page-718e3f13.0d80510f.js",
    "revision": "7e710f59d05581826947519550a4a074"
  },
  {
    "url": "assets/js/page-7961fc62.ffcc3ae1.js",
    "revision": "c552704a57416c847ae3fbe918bbc3ca"
  },
  {
    "url": "assets/js/page-7e22c02f.01f09192.js",
    "revision": "50e4ad5cab19e4579f917f919da45e8f"
  },
  {
    "url": "assets/js/page-7f4c69e4.bb11cf47.js",
    "revision": "6648b305290ef5891030e1cdb2986b65"
  },
  {
    "url": "assets/js/page-9a13860a.784f84c9.js",
    "revision": "d2dbb4f8c7f74f120f2d9ab70e41a684"
  },
  {
    "url": "assets/js/page-9d704b70.70ad6529.js",
    "revision": "01fe72b7250acbb9685352d717907e3b"
  },
  {
    "url": "assets/js/page-a1c83fc6.be378f9b.js",
    "revision": "cff6888f2eb7ac4e26f14a23804a29ec"
  },
  {
    "url": "assets/js/page-a649c29e.f2a355d4.js",
    "revision": "205e1cdaf84ea5a2072eb49a9d7f943c"
  },
  {
    "url": "assets/js/page-b6123e24.24b218b1.js",
    "revision": "d061c480b300eaaf8134d5c6e08df4aa"
  },
  {
    "url": "assets/js/page-c1e7a5fc.9426ee53.js",
    "revision": "740f6bf6d029e117f04c4125ad611141"
  },
  {
    "url": "assets/js/page-c41b383a.00a2879c.js",
    "revision": "12afaa316252856d460b9b6305c390d6"
  },
  {
    "url": "assets/js/page-c799e3a4.216ef145.js",
    "revision": "0ca4305b8a21191f3ca2f5c153234229"
  },
  {
    "url": "assets/js/page-cd03364e.8f1b4d51.js",
    "revision": "1ba1d8b9aac75f760f9d70661140c89e"
  },
  {
    "url": "assets/js/page-deb70f94.572cdc70.js",
    "revision": "69fc99759057f1cce470a5dbcd8b427f"
  },
  {
    "url": "assets/js/page-e869018c.1ec467e5.js",
    "revision": "6b323e5ac21661a7d0c7f2fa67634cf3"
  },
  {
    "url": "assets/js/page-e87fecf8.89bd7778.js",
    "revision": "424e98d6a9b9a8259304f4408a54c47d"
  },
  {
    "url": "assets/js/page-fa2e9ecc.079846a7.js",
    "revision": "dbc9de13b4d94812dacb655c9d79239c"
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
    "revision": "fe747b002cd29b834aae948575bde478"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "7db431952f69b6ad153e56fe7908f5df"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "e38453246759e30a3f2a160f65a7fd8c"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "4806c4460ec4618fb7723d91a48036af"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "c18849b6d85b518e86842259e4615b3f"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "2e9bf9d13fdb7bb5e570c049033b0bf8"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "04902b116a979184b0042e1b5a029bc7"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "9ab065c3b2efb4b1a37ecb410c8537ca"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "348eb92d20cc197dc93f8d09785605b1"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "3e80ca4028f504ecbc9547c96cb39bda"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "c3cf6e8a0157bb33821bddca0d4f264b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "e16662aa10c5160967801eb23c2444f0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "55d887065d9a82c6857c1782341c1330"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "64d88641d6b9961e2692d691c041622d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "4c8f98e699adc4def30df6c4f978f8c7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "663f87d81ab18cbf6211616c1b9ec8db"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "97766ebf6d3c530d012b8830ce02bae5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "c864cdb309390085862b559bc792688c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "3e85ef2ba64b76bacb7f41a8264ffce1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "283059bfe02ad50ea92639a62d17afc8"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "8fde0eb821a7fa64442f75b2c7c2cb26"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "3443a02dcc9a1a84215bf6a1c019edf1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "0c745a4d81e67581e0e3d168602f75bc"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "60c905aa9262a9e9a28f1d482487277d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "b338434026fd278367c1ae618fbb2391"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "e14dcde1169cd8d734e77170f99c71f3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "49e038bfaf676c78a1ba245a02367105"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "ca90755473be073596efcf01818a63ba"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "c37d85a8dd67d9475f7a2dfe0b0c2043"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "5bf1cb861c1085a0cecc58a8e66f4612"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "1c4d2982d343a3f0fb96216c69193587"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "10425dcf48c269b7b641db72d7cbb3f6"
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
    "revision": "d014984593e4d06629862f98b0bbb4eb"
  },
  {
    "url": "search/index.html",
    "revision": "0e6a637bcbcff3b38be1e9756fa904f8"
  },
  {
    "url": "tag/index.html",
    "revision": "962bf5dc655fe6c890f10c41160165d1"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "b9035dee2f989a48af16ca37200c15d1"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "c38a36d00c9c15b6b30487bb16ff7d94"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "7eaf65a037e6183ce0c9347fe861ac13"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "ce185e7c87540fb516c1a6d6476ab21e"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "79285ceb154bf4905a9f7a4ddea5dd4d"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "e8ac21f0a09d8fdedd090ed80b8cfc29"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "5e971e310df39fb10c9ea07ade38e462"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "c82607f7a1502b46764041d2d9f6e218"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "e773b11e6002d539a2c90bd9031d2958"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "b9e020b9dd7a28ba71232030509f4a01"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "b7e6674600b28bbc76a1fb5111a76b26"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "6442631a4cb1274540c1bc8dad14fa57"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "332745bbbefc9e227143c365831e2758"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "ef17d9ca31c0aefbe8cd582a1b39d575"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "68aa2edee9c6a866c5dfdad9b29e8682"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "b4af7fac95899d4269a3c36213c712c0"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "c4b1298b3d60c739cd09aff344176948"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "9e713fd404e46aa29f56c4744710a15b"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "147988bd3554cce39ce11fc90386a671"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "b6fabe436e78b6401d9ec27f65eeb45c"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "c55cd7f3ffd97938d237e704d57205cb"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "e56dcb6d678d668a29e3ba0c7c7075a9"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "bbfa2ddee8b12e5aa4839ef9962e9d3c"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "84583437e8c70c85a5651e0731ba0658"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "e30aae6baf6e5b0bf85e6fdd24c7794c"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "93dd59f83a13cfb81738dc7401a1bfa1"
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
