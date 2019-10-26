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
    "revision": "9daa76b3714432b895aaa7024412cb01"
  },
  {
    "url": "About/index.html",
    "revision": "b8fdfc004e2ef7d70bfd28c3c6f5394d"
  },
  {
    "url": "archive/index.html",
    "revision": "ab074e424054d275ecf7e998c5cf662b"
  },
  {
    "url": "assets/css/0.styles.ddedcfd6.css",
    "revision": "d5eb833185a32866afe3cb4dbd2000fb"
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
    "url": "assets/js/app.119a5bdc.js",
    "revision": "abe66893210eb683a6e15dd25e821a26"
  },
  {
    "url": "assets/js/layout-BaseLayout.701130f6.js",
    "revision": "80c6cbbb34b9be577f1c462b5157bd68"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.b9fab019.js",
    "revision": "c2c6b3e7b809e7ebfa66b90269aaebd0"
  },
  {
    "url": "assets/js/layout-Layout.0220ff01.js",
    "revision": "e275382a8474e386a0feb16a526b8df6"
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
    "url": "assets/js/page-03ff99e4.7c431d6b.js",
    "revision": "6c913859060a9c2c48ab7379115e475d"
  },
  {
    "url": "assets/js/page-0815fe43.e66e2b88.js",
    "revision": "92b8f1963e7eda79a98e3e392497db08"
  },
  {
    "url": "assets/js/page-0994254e.c639023a.js",
    "revision": "5ce9af68d3c5b6d1426a78c9fd7474dc"
  },
  {
    "url": "assets/js/page-09cfa20f.157d9094.js",
    "revision": "26e5c6dd0fabf512dd5218d59d0401ce"
  },
  {
    "url": "assets/js/page-0bd5cd98.b5c57af6.js",
    "revision": "ad43a9ad633bf6ac84f638b40230304d"
  },
  {
    "url": "assets/js/page-0ca8b05c.aefc8f64.js",
    "revision": "ab38fbd8b89722efd30b66d00a69ff9b"
  },
  {
    "url": "assets/js/page-130de14f.d37e6dc7.js",
    "revision": "486f2863baf1dc007aa5589a3d602cb8"
  },
  {
    "url": "assets/js/page-17916170.bcdae016.js",
    "revision": "5f6a72b00a447942b3ada4fee4c607a4"
  },
  {
    "url": "assets/js/page-1efb5c62.8dfd62e4.js",
    "revision": "9e7787d1cab4ebfeea32ef9c7fb542d8"
  },
  {
    "url": "assets/js/page-2282a6e0.1b11406c.js",
    "revision": "2fd45ba6451abc9bd6fd9d391b8bd0c3"
  },
  {
    "url": "assets/js/page-2ba07fce.a4c1cb16.js",
    "revision": "8aa87f8bcd66c696f982cdb82ce97e5e"
  },
  {
    "url": "assets/js/page-2da25f49.17c72045.js",
    "revision": "4e19ed771e3b14541c3a65313d20162a"
  },
  {
    "url": "assets/js/page-2f77601c.baec5d25.js",
    "revision": "efb0c36bf878d065e3fa4f4ca282d6d4"
  },
  {
    "url": "assets/js/page-36058925.836fcca4.js",
    "revision": "94b8bfc79145548d23d3a2a46f46d673"
  },
  {
    "url": "assets/js/page-3721e5cf.cf3642e4.js",
    "revision": "be3430a1eb783c5f8667aa6e800bc4af"
  },
  {
    "url": "assets/js/page-38e94d3e.2766f3c4.js",
    "revision": "77ac16e4f6205f3ebd8318eee6face52"
  },
  {
    "url": "assets/js/page-39d006b5.2f76c9d5.js",
    "revision": "b492a3a358c30e82ac7d54b9043fa2d5"
  },
  {
    "url": "assets/js/page-3b1778e4.a6df912e.js",
    "revision": "ca053f34b9dd83df64251e6cf54d9727"
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
    "url": "assets/js/page-437f73dc.66ea1d1a.js",
    "revision": "0aaf896f9808888d84f9608108f79062"
  },
  {
    "url": "assets/js/page-4773a0fc.e03272e8.js",
    "revision": "190c4d7815bf366f59b327705423db3a"
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
    "url": "assets/js/page-4f5eb00c.56ea271b.js",
    "revision": "7380b5f9ec2a58d90207933c72f0e4cd"
  },
  {
    "url": "assets/js/page-52453899.372d3b5d.js",
    "revision": "e9115f0bc3f0e044c80d2aa21a3b6a37"
  },
  {
    "url": "assets/js/page-53a21bc2.8f1963af.js",
    "revision": "ef4584ebf11c7948c97bd070b5ab2e70"
  },
  {
    "url": "assets/js/page-548dbfdd.e8bfccac.js",
    "revision": "c8de39f20026633718153d83f692a32a"
  },
  {
    "url": "assets/js/page-54cde949.b531cbce.js",
    "revision": "b6333838ff13c85b73b8a69c4dfe486e"
  },
  {
    "url": "assets/js/page-56c5add8.02d88c51.js",
    "revision": "9153a0a8977be6da3b7d82aa9a77efd3"
  },
  {
    "url": "assets/js/page-5971d062.1b6a1d38.js",
    "revision": "089a714f7cc2787fb03113704e58ebb3"
  },
  {
    "url": "assets/js/page-5ae76184.bf5f4c5e.js",
    "revision": "d42ae105300d74917e288f9acde88d8b"
  },
  {
    "url": "assets/js/page-5c24028f.bab20eab.js",
    "revision": "00071757c35306795d62e998d54aedc9"
  },
  {
    "url": "assets/js/page-5dade32f.97b2838a.js",
    "revision": "12a430443a2d6254faef4d276d37faa6"
  },
  {
    "url": "assets/js/page-62c3f84a.2fe091fe.js",
    "revision": "5408f8473bd7c117abb27e250dad12a1"
  },
  {
    "url": "assets/js/page-631831dc.1400bb9e.js",
    "revision": "11d8145ae6392917d239569213c5fc1d"
  },
  {
    "url": "assets/js/page-64c6c3f9.8536de64.js",
    "revision": "18253b3efd01c618e6fd9f8bdcc19ce2"
  },
  {
    "url": "assets/js/page-68a3e126.f7498f89.js",
    "revision": "ea7108ca7799decc94a48265ff9dc8cc"
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
    "url": "assets/js/page-7e22c02f.bfa9b925.js",
    "revision": "feee0ce5860a3a1c8cb8e2424a4b1ea0"
  },
  {
    "url": "assets/js/page-7f4c69e4.443c26f4.js",
    "revision": "a448148442406efbeb3fa4db224b8c5b"
  },
  {
    "url": "assets/js/page-9a13860a.c3e6463a.js",
    "revision": "1312f32f67487e6ca9e5b6584dd715ba"
  },
  {
    "url": "assets/js/page-9d704b70.1ed7a3bb.js",
    "revision": "c4ff0213012b782034ca37ea4133f617"
  },
  {
    "url": "assets/js/page-a1c83fc6.be378f9b.js",
    "revision": "cff6888f2eb7ac4e26f14a23804a29ec"
  },
  {
    "url": "assets/js/page-a649c29e.6b7c21f7.js",
    "revision": "aac5702c1d6836b3cb608bdd7d89b8de"
  },
  {
    "url": "assets/js/page-b6123e24.85676abd.js",
    "revision": "4dd06ac3a446d5118986c992358a1697"
  },
  {
    "url": "assets/js/page-c1e7a5fc.659963bd.js",
    "revision": "24c059a75a9a595f8571f060e334569f"
  },
  {
    "url": "assets/js/page-c41b383a.00a2879c.js",
    "revision": "12afaa316252856d460b9b6305c390d6"
  },
  {
    "url": "assets/js/page-c799e3a4.45f73ab5.js",
    "revision": "d0e572804c49e3fe461c8b80c3e1bcf6"
  },
  {
    "url": "assets/js/page-cd03364e.8f1b4d51.js",
    "revision": "1ba1d8b9aac75f760f9d70661140c89e"
  },
  {
    "url": "assets/js/page-deb70f94.957fd2b5.js",
    "revision": "9ce476fca051ae73664e4340f2a28a79"
  },
  {
    "url": "assets/js/page-e869018c.1ec467e5.js",
    "revision": "6b323e5ac21661a7d0c7f2fa67634cf3"
  },
  {
    "url": "assets/js/page-e87fecf8.ac4c321c.js",
    "revision": "e02275f71e867098bf67dd19b27051d4"
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
    "revision": "197530e59cb64804a2bdd2696cdda4e0"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "513325bddf93bd3fcb54442cf54bc7e2"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "1dd78c4a0ab2ebe0d1e32b45ef793298"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "173f3351c968d50fa5e0590deee16906"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "90f3afd86b006350838c8f10c7f4d586"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "7e7ec215457bc9cc89cacd6bfb357ccb"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "1e84448667d881df2f204afa0e904844"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "d2321be9b6c9f7a630842e707be1ca45"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "88db932baf358f047262ca185db8fe26"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "2eb20e14213f1b7e9bd57939033c0174"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "3b2a5a1c7d529426b8ece61098468db9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "5af04af99bb73775b632d830924df8aa"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "34956530964885f8daa937e1e1fd0665"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "7c28b6f714fecbb38895f3b5efbeec5c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "0a0f732ae839995d9ed232b6cd57bee7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "f0f11935a65fd5e2f9065cb54a95e6fa"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "04fd2909fb5160e155461f3c4c746fa8"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "76c4f61f27f6413c78a79183befa284a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "fb15533bca2555c4c138140c461eae4b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "73bc89854f89f7faff7d8e05ba8462e6"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "166ea4c193b07f57cd85fbb7e0de1d92"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "6d37d4af90f734ec83ad93de7efbc8c5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "46b66f4079ab596d0552202cfdd7e943"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "49aa82dc354176cea4db9311730f9135"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "170bdea67687db30b644d643c1e02dbd"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "97635c490cb1c8869c19cda2884f8f50"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "283ef27be0ffeb2bf561ba5c98b60767"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "b2e1c3f7f18b6e7f507b70776a23aa1d"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "6be285a1da22e406f797780f4c481212"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "2eaacfd2985f1ad137594245fa4b50bb"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "f38e2c96c1e91ea292d76902470e7b27"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "ee161dee439c552995bed9abe25f4ccf"
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
    "revision": "638aa92599a12cec371a7928dda9fe29"
  },
  {
    "url": "search/index.html",
    "revision": "15d5c4569b11756edbb80bb451026dbb"
  },
  {
    "url": "tag/index.html",
    "revision": "02d3702828a2c9b231b02500fb0ffb73"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "75620b938e45a41427fc3ef401c7d284"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "4a7f6992e49587f3b5f2ae36110d77a5"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "2b478eea07db0c7dbfc248613a2b3bf8"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "c893df9bfbfe6331804f22772de87c53"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "2413e1c8b3997701b6a6553706062539"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "5befa39c5d9af58850ae0d0b25494ef2"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "2ea53e81bb166571a237e7ae19de1404"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "fb59bfb366ccfe47e82abfc644648032"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "ca2b1655f0236c7c0ef35f91bf184787"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "b9a01cbbd19c8d301adf2d2c3ff07ed9"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "ff8f9a5830d8b36731e7b1f3afbbe65a"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "bfbb8f38c3170e4aa61097fbe01737e3"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "c7cd804ee393cc00d21bb3725f4a7747"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "26c7027b15e2845756e9711e2e4fb806"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "039946c3cb80bd9497b0267ea84a93b8"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "59693ee6cbafaf966be5cacba36c62cc"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "69bba3d55de9bdfac35eefe528bf43ff"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "7f78819d391320668c4ba5b1ae8e9c97"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "57219f020811a6798b04c76a8e5644f2"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "90ecc48de3e4626999a5a61ba56aff32"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "d9a9d75f1a6d813dfe1c22a51568f7d0"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "c8f8187f5ac7ae60292b1b7ced1e89e2"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "26ff46b59609c2284bc244947dceb280"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "2f151b524ea7ab5eec3e904150b08873"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "dad1713458dda94199b33d9f4eb8f669"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "8f95818fee51418461cb18fe6042a7fc"
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
