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
    "revision": "900f858392ef524f5487ce51f19e98a8"
  },
  {
    "url": "About/index.html",
    "revision": "4288ae28b855b2d0252900e2f3ecf2af"
  },
  {
    "url": "archive/index.html",
    "revision": "3a814014b05eec177a147a30327974b5"
  },
  {
    "url": "assets/css/0.styles.e7594f96.css",
    "revision": "afc64a6467a444422709bf8715356e80"
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
    "url": "assets/js/75.f01451fd.js",
    "revision": "4eade7060fdc7b31ebb2e69fb305d773"
  },
  {
    "url": "assets/js/76.5e9b3575.js",
    "revision": "6c648e5ee08057ea78909b9f5de21008"
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
    "url": "assets/js/app.fe5abb41.js",
    "revision": "94518de60ff61493e7aca6f557338d76"
  },
  {
    "url": "assets/js/layout-BaseLayout.701130f6.js",
    "revision": "80c6cbbb34b9be577f1c462b5157bd68"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.59e1c6e6.js",
    "revision": "a29002f10408e52a9965077ecc236e96"
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
    "url": "assets/js/page-0815fe43.3477eef9.js",
    "revision": "49eeddd312f0b3df34de305d9c72f8dc"
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
    "url": "assets/js/page-17916170.5c8b5c4c.js",
    "revision": "cf9e082c1457616efac2a81ad372e49b"
  },
  {
    "url": "assets/js/page-1efb5c62.8dfd62e4.js",
    "revision": "9e7787d1cab4ebfeea32ef9c7fb542d8"
  },
  {
    "url": "assets/js/page-2282a6e0.692e3585.js",
    "revision": "010601fb870f7164a41be33c6e5ee276"
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
    "url": "assets/js/page-3721e5cf.d69c8b55.js",
    "revision": "2da60833165c29e56dd78f65ee2c2a6d"
  },
  {
    "url": "assets/js/page-38e94d3e.2766f3c4.js",
    "revision": "77ac16e4f6205f3ebd8318eee6face52"
  },
  {
    "url": "assets/js/page-39d006b5.c2ea974a.js",
    "revision": "9d440fb7253fafdf0b18e3e986481a27"
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
    "url": "assets/js/page-409d673b.a3b4179d.js",
    "revision": "0adf50369ab43c1951a34d51d64b28a1"
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
    "url": "assets/js/page-4e40ef0e.133e42f3.js",
    "revision": "f88488264801b189e7e7f7856b9ec279"
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
    "url": "assets/js/page-53a21bc2.623909d4.js",
    "revision": "29f7c31500dbb5b31d2c7e8eb3b33350"
  },
  {
    "url": "assets/js/page-548dbfdd.7c4acad2.js",
    "revision": "e2621a9dc323fbbf24e0a2ae6614a83e"
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
    "url": "assets/js/page-5ae76184.863a4497.js",
    "revision": "dd50e0fa2e1dbd8a9fb8bfcb7e74bcd2"
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
    "url": "assets/js/page-631831dc.45894dc8.js",
    "revision": "c859e2288e33eba567465fa6c673c465"
  },
  {
    "url": "assets/js/page-64c6c3f9.8536de64.js",
    "revision": "18253b3efd01c618e6fd9f8bdcc19ce2"
  },
  {
    "url": "assets/js/page-68a3e126.f2e7c003.js",
    "revision": "23635b63fb02f8527209689aa2c951bd"
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
    "url": "assets/js/page-9d704b70.85f45f85.js",
    "revision": "2d9031200c98c2383574b8f2fe3729d2"
  },
  {
    "url": "assets/js/page-a1c83fc6.9a3fccf5.js",
    "revision": "d9d8bed1ad9f6ebdc9168acc8f7087cd"
  },
  {
    "url": "assets/js/page-a649c29e.6b7c21f7.js",
    "revision": "aac5702c1d6836b3cb608bdd7d89b8de"
  },
  {
    "url": "assets/js/page-b6123e24.14126798.js",
    "revision": "efc564b05dda41e503e576dbf824abe2"
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
    "url": "assets/js/page-c799e3a4.a727a2bd.js",
    "revision": "43985b4165ae9cfc42091d219aa9e6fa"
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
    "url": "assets/js/page-e87fecf8.2ab33a85.js",
    "revision": "53855631eed8e50bb70b962b9f47c3ba"
  },
  {
    "url": "assets/js/page-fa2e9ecc.69932216.js",
    "revision": "9911c4d562e85f53985237677513ed7f"
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
    "revision": "5761ef9179169099923cc1eb2e4eb5c1"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "06139f513c7979d66671f815502791bc"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "900ddb7e0de7da13918fe7300721e6c3"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "ffd68ab31b23ab782631cff0bb8541ff"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "a55ba1777c82426efc68e6e5e955c52e"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "5a923a3dea8f843c76aacc2a16add249"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "bbf28ddedc66dc06ac064ff691f57b46"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "37a75c8ec18b26a0edc4fddbc2c77c30"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "38ae933b700232c1ceaca6e596ec9376"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "b730537d45c13a9e0dfe755f2db43ccb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "4509a6685f89164775108ebdda0a9328"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "852950e2d77cdf2dca78deb50f4126fd"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "2eb359de247637439fc3a03894c2222a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "19b1194ea37b722fb92fa33d1522a356"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "ed0569115f4d85a9a3dc9265741978de"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "9dae8882538bda1444e7eda506514528"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "919eef8927e453706865b2fc6392960e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "24895276a0b467bfa2bcf3332bdd0e6a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "f6ce99d5649cbf551b58d917c99ac19f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "12253ac32b89b86000f36010fc9236cf"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "c665c54f764040fdc0b1bb6b2a15af96"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "6bd941f1a0e23b66601a5c2548c48fc1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "b39d6d95dd03da3369965515257126d9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "62c9c270b63f675a36ae5a27cd340657"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "bbe819b930d49c6932fe7cafb285713f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "4fdc5bb1b306404a3e8404090e0b8ce4"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "4ad3bf086e2d77324cc88a46ccb5f01d"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "7684208883a28a24bfac949f5613527a"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "1d5b110713a4be0702e3fb7e2152108a"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "9a4c489295d32cfb110d52f9457aa9bb"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "7ac5d071ded89ece53c9a25aa7e41add"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "38f68d1a13b0b6cd3e3a783eeef5a3d3"
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
    "revision": "dabd32ebfe7332be67f0726e295a981f"
  },
  {
    "url": "search/index.html",
    "revision": "80cbd3a76776b82e1f1df15207e04e17"
  },
  {
    "url": "tag/index.html",
    "revision": "e779ad930e3c4cc70c5fab32282afdc0"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "6aa53d8921b0488e50d74396ba94ac84"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "ded25f7d1324acf4e9a62719d774ecb0"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "ed5a4c3c1e27900d64ed7b2617c3233b"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "10b1215afed15f755e978ebc0f4a0a8e"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "ad7cf575e84c760da5466fdfb8c2ef26"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "bb48ac479839171ad08e87fb3b52a650"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "e73eddc8ecdd631cbf32b74fde9d8ab7"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "3a8a5150442ec5032b968652dc8a21db"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "47113b81ab932fd264fcc0f209641b45"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "fcbd7c76ae9612d784f6b9c38be1e090"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "54923ae3012e3fef454e32363fefb3f5"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "6935af7c4ac69c2fe94dff1e357ba70a"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "6c03bad26fa8446a97beae59e7124346"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "f055ebc64afa220859c551b87759929f"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "dc330af1a1307d59610c1b6fdbd972ab"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "396db06c2d897891c170df97017b1b65"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "d8ae9e13ea94be1d1b28595a1cfd179c"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "0cd3656ecee4fd96c49b3c86c1a87a2e"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "27088b952e66641068876dc013470710"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "4be7386c00495479528e7a863fa7976c"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "f1fb8b1a47b3e966f5567705d086a47e"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "30c8b43a5ee5980bdbab675cb0afe6f4"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "2f54c6ab22a8a54eddb2c3282d4bfd9e"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "b308d8fd1187b58bc165d3cc18f98530"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "0a30c31357d14a949b35380e74c3cd8d"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "9947dfca1d83e31301c6997ad2f35caf"
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
