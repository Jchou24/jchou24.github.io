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
    "revision": "f9934705f8558e5031e2567970ac2ed2"
  },
  {
    "url": "About/index.html",
    "revision": "56d1917bddb75ed5505c4e521fe69788"
  },
  {
    "url": "archive/index.html",
    "revision": "8c79a2771232db4a92f95fc663e38b0e"
  },
  {
    "url": "assets/css/0.styles.8d3227e5.css",
    "revision": "ac5f646c65f349444e664d644a4c5ac0"
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
    "url": "assets/js/1.61bc7a83.js",
    "revision": "867a91852cede2f5589ce21e84120374"
  },
  {
    "url": "assets/js/2.5d971239.js",
    "revision": "739615448bd4ee77b2ebc054eb7b3fee"
  },
  {
    "url": "assets/js/3.e0414623.js",
    "revision": "665150ee8c4bd230dbb367ed5b04d47c"
  },
  {
    "url": "assets/js/5.70779204.js",
    "revision": "ba6f079a82c81925adf58e5f2f848525"
  },
  {
    "url": "assets/js/59.40ec5823.js",
    "revision": "822c94be30a001c604d8a464f511849a"
  },
  {
    "url": "assets/js/6.bf2a3eae.js",
    "revision": "5276e2fab3b158e8f9b320e694b379f1"
  },
  {
    "url": "assets/js/60.691dfe3b.js",
    "revision": "9cb51ebbf0788f575aad426fbc9dd1d1"
  },
  {
    "url": "assets/js/61.39dadf4c.js",
    "revision": "723714bc0ed8219f827fc0173b309ab9"
  },
  {
    "url": "assets/js/62.377330c8.js",
    "revision": "9bfc8c8866583ab8a0f8a46ad0a85338"
  },
  {
    "url": "assets/js/63.b179ca92.js",
    "revision": "6627ec6e26ddac1cb4466fa7febd30f7"
  },
  {
    "url": "assets/js/64.4b9c9a3d.js",
    "revision": "3155b0d2edcc06b9a8393e1a48ec61f9"
  },
  {
    "url": "assets/js/65.4bb31d76.js",
    "revision": "c00465e64c39c63208832b748db3f988"
  },
  {
    "url": "assets/js/66.64b3d1fa.js",
    "revision": "e90f7804e707ad7967a9c79a304e8e07"
  },
  {
    "url": "assets/js/67.d49b0ea5.js",
    "revision": "572261d32383e954a1e7cb47ed25b0dd"
  },
  {
    "url": "assets/js/68.22e12cef.js",
    "revision": "76c8585378ca3bc9a1ac34e26a88c197"
  },
  {
    "url": "assets/js/69.58c86f66.js",
    "revision": "2ce3e7b0f4c38fe8d9266fa7be94fcb0"
  },
  {
    "url": "assets/js/70.7a9291e1.js",
    "revision": "d404211f42ea76935f56ea057f4ce55c"
  },
  {
    "url": "assets/js/71.295dd999.js",
    "revision": "5df223cda9c9b30688e79f763601dc1a"
  },
  {
    "url": "assets/js/72.36ea779d.js",
    "revision": "eba575f60b44c5203e5d1049c3e9ac2d"
  },
  {
    "url": "assets/js/73.ddcd7823.js",
    "revision": "7033d563c0b8776c934efd959670409b"
  },
  {
    "url": "assets/js/74.a1b5e81a.js",
    "revision": "867cd82e344564e57a46b29db34fe2c1"
  },
  {
    "url": "assets/js/75.c9c7dadc.js",
    "revision": "4bd3d59cf7d2c9fa75ae29c642025b20"
  },
  {
    "url": "assets/js/76.4077687b.js",
    "revision": "080dd9d24a2562dc2d4b85aa7ef053e8"
  },
  {
    "url": "assets/js/77.c6f0120f.js",
    "revision": "47176c7b78c60e78b1c61d2a45e24b78"
  },
  {
    "url": "assets/js/78.ffdf021c.js",
    "revision": "18f28f765dfc11d65f637044e1234053"
  },
  {
    "url": "assets/js/79.d73ab334.js",
    "revision": "a91b4cf83f0de4cba6b5f5a914bb9bfd"
  },
  {
    "url": "assets/js/80.6ddf7e9c.js",
    "revision": "dbffb2fc25e462e3e72e9499baf71f53"
  },
  {
    "url": "assets/js/81.a99a9b31.js",
    "revision": "275fdc06bfe7067a0d33401300d40399"
  },
  {
    "url": "assets/js/app.7b95f8a5.js",
    "revision": "8e618bd41c1c0fd48c485ec48ae9ca7f"
  },
  {
    "url": "assets/js/layout-BaseLayout.047e5006.js",
    "revision": "1b63c5dfdbcbe52b9a0e7de0e69c6841"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.51403313.js",
    "revision": "4b0947247ce5b4628aaa922527fffabe"
  },
  {
    "url": "assets/js/layout-Layout.b21057ba.js",
    "revision": "e853581370b5609ebd06677661f8f2dd"
  },
  {
    "url": "assets/js/layout-NotFound.d78c0cf3.js",
    "revision": "eaac891489f2832e4004d751255fa1bb"
  },
  {
    "url": "assets/js/page-01b1365c.98652bb6.js",
    "revision": "e3f2a47fe370db1725d0711486db9971"
  },
  {
    "url": "assets/js/page-03ff99e4.d8fb075c.js",
    "revision": "6f4467f232e198d286cfb54e39ede4e3"
  },
  {
    "url": "assets/js/page-0815fe43.9500e6c6.js",
    "revision": "9bf7ad14eb110cad563789803fe5621b"
  },
  {
    "url": "assets/js/page-0994254e.dd1278cf.js",
    "revision": "ab1456a78838ec59c431274d547981fe"
  },
  {
    "url": "assets/js/page-09cfa20f.5df8d84f.js",
    "revision": "3c2a06aa46ec9c607ca1b321a3f4177e"
  },
  {
    "url": "assets/js/page-0bd5cd98.34a34c6f.js",
    "revision": "099e198043e21be7cff85854baf4f8a8"
  },
  {
    "url": "assets/js/page-0ca8b05c.340dc024.js",
    "revision": "87e848c6606c390422ea3827166380e4"
  },
  {
    "url": "assets/js/page-130de14f.518d0e51.js",
    "revision": "f575cb0eae3c44129ca8df76378957f1"
  },
  {
    "url": "assets/js/page-17119ea4.ec85e68e.js",
    "revision": "e717936f48159cc865ebb0bd55698c95"
  },
  {
    "url": "assets/js/page-1efb5c62.3c173cd8.js",
    "revision": "f0a0cf5497082b5e263cfd775853e9a3"
  },
  {
    "url": "assets/js/page-2ba07fce.4e267cef.js",
    "revision": "3827110bfe72fa3062b483de94e41800"
  },
  {
    "url": "assets/js/page-2da25f49.27d7cf4f.js",
    "revision": "9047f3966e9a67552658df165e672fb1"
  },
  {
    "url": "assets/js/page-2f77601c.a01c1e3a.js",
    "revision": "9da54811b2fd5dfe1b46704ae51b46a0"
  },
  {
    "url": "assets/js/page-36058925.3448f6d5.js",
    "revision": "0d9d2df355ad5720cc48a50e311556f1"
  },
  {
    "url": "assets/js/page-3721e5cf.b2159efa.js",
    "revision": "02eec8d11088b47211139f2f4faaa6ab"
  },
  {
    "url": "assets/js/page-38e94d3e.16ef54a6.js",
    "revision": "134df58c51a08f0aa8b7400ddeedf668"
  },
  {
    "url": "assets/js/page-39d006b5.b42226c4.js",
    "revision": "af74587e55a46b49d753391616e2d2ee"
  },
  {
    "url": "assets/js/page-3f4ea122.e89e249d.js",
    "revision": "2181cbcbffae33a5465ff6572145baec"
  },
  {
    "url": "assets/js/page-4048f79b.b48a8b8a.js",
    "revision": "91d03a08228eec8ede5e62a1d84ca524"
  },
  {
    "url": "assets/js/page-409d673b.94e4742d.js",
    "revision": "f79cea1182703d90d2a2d9cd76ebdce0"
  },
  {
    "url": "assets/js/page-42a0ea7c.30a2eb90.js",
    "revision": "e678e83b6cb8f9ea04864c59186e0fa7"
  },
  {
    "url": "assets/js/page-4773a0fc.9301d707.js",
    "revision": "05d6b60dcf3d4977ce1caf8a7153d6e7"
  },
  {
    "url": "assets/js/page-47ec31ef.20fcb98a.js",
    "revision": "c2ef5067a36da133e52ae6a261b9c8e2"
  },
  {
    "url": "assets/js/page-494b7749.eff4d955.js",
    "revision": "e513ed239931ba53a3fa7d01fba7895a"
  },
  {
    "url": "assets/js/page-4e40ef0e.e3afabd3.js",
    "revision": "68f559ea4512b0473fe6338d232a9289"
  },
  {
    "url": "assets/js/page-52453899.7ebaa920.js",
    "revision": "978ffb6844565ac5f4f1fb57dd8c5923"
  },
  {
    "url": "assets/js/page-56c5add8.25373876.js",
    "revision": "c28b6eeb2c6465a78be50240e55f2741"
  },
  {
    "url": "assets/js/page-5971d062.7a0206b6.js",
    "revision": "7734deb80f5ecc95e15c6c44fb92cacd"
  },
  {
    "url": "assets/js/page-5c24028f.7a6fb237.js",
    "revision": "cf86aee1c765eb0d050c2dea44801ea7"
  },
  {
    "url": "assets/js/page-5dade32f.00d43202.js",
    "revision": "8309b29c89ca97bbe629161ae2556e6c"
  },
  {
    "url": "assets/js/page-62c3f84a.ac9e1671.js",
    "revision": "1cb80176c60cc5e490c8d69c9f267d3b"
  },
  {
    "url": "assets/js/page-631831dc.6ec6250f.js",
    "revision": "ebc43ac2fa84705003f6e83d4d10f65c"
  },
  {
    "url": "assets/js/page-64c6c3f9.e086f5d9.js",
    "revision": "fc997e2552d5955de50fde3ddc8251bf"
  },
  {
    "url": "assets/js/page-68a3e126.5e61ca8c.js",
    "revision": "fd654f96a93eccb9933cf9cc193a93a7"
  },
  {
    "url": "assets/js/page-718e3f13.d574bf5a.js",
    "revision": "6666ac0d6d95db2efbff8d843f70dff2"
  },
  {
    "url": "assets/js/page-7961fc62.f11786ab.js",
    "revision": "cfb0e37595b81499eca78c65f8919a04"
  },
  {
    "url": "assets/js/page-7e22c02f.ae8c19d5.js",
    "revision": "3b921a8898007c8e229c1396358f1a96"
  },
  {
    "url": "assets/js/page-9d704b70.a9592890.js",
    "revision": "814568caf46503d6230f433e341af72e"
  },
  {
    "url": "assets/js/page-a1c83fc6.8aefc573.js",
    "revision": "c2ba500fcdca46754353cff4601715ba"
  },
  {
    "url": "assets/js/page-b6123e24.592e108a.js",
    "revision": "23d75499de540ec0427771a7233dbd2a"
  },
  {
    "url": "assets/js/page-c1e7a5fc.07de0fa9.js",
    "revision": "77f93ff0029366971f1a1d9a72e60ae6"
  },
  {
    "url": "assets/js/page-c41b383a.7fb1f38a.js",
    "revision": "de1b871140ea44a9ef3fcf0750968110"
  },
  {
    "url": "assets/js/page-cd03364e.4fdac967.js",
    "revision": "96f5f7c2c1fbcf85a4b462ad4ba7c560"
  },
  {
    "url": "assets/js/page-deb70f94.3603c16b.js",
    "revision": "bf5acf8e49a05dedc8d37856f0c86e5d"
  },
  {
    "url": "assets/js/page-e869018c.74dd5c53.js",
    "revision": "8e9c26b0863011d2fee8514038d3e63d"
  },
  {
    "url": "assets/js/page-fa2e9ecc.d2ffdaf6.js",
    "revision": "220a3acf1b97b30313475e7ff21bdce3"
  },
  {
    "url": "assets/js/vendors~flowchart.a5675219.js",
    "revision": "30741b2fa51ebe40f7a4e7c912b6b42d"
  },
  {
    "url": "assets/js/vendors~layout-Layout.9e13ce31.js",
    "revision": "b6022bbc6491f78abc8ca7f7861db5d0"
  },
  {
    "url": "category/index.html",
    "revision": "aebebc9eab7dfa0cadc93d4cdfc020e3"
  },
  {
    "url": "Coding/日常筆記/AutoMapper-class繼承後之對應.html",
    "revision": "02725af804e8a7a7d7c41d78264c80e0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "ffd6619a1334aa1cc42f0dfe6388a1ff"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "29574b9c354f6c37611ea075a29318fe"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "1c33ad78ede8ef226700b20361acbde6"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "5792f2145135b865dff541a6c0cbbeac"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "f7152faa0655ffc7311619911f3ec971"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "3417ba464a7d5b3242ebb07f1fbedd80"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/走位.html",
    "revision": "f4c9ce972854344588613c9c0e015868"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "d9159cc95f5f247b2696deb59f9f6e89"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "82538569f921647f48ebd20e7d44883f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "66a29991e24ff2c1a29a3be9d8ab23d9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "30f331834b4e1bc7c43147a0008d3f58"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "af8f20966916afcffb1cfadb1f8f3798"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "c6078fd5620506b608582e72e7326402"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "18257dbe8def83a63eeb891e311b17e4"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "2921be6fc54a2c5b8b09f4c304de6db1"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "8c9f4d0a489f1d89e6c0971792cdbabe"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "4df45b48425d7142b40819a688f0598b"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "eede4ab156667120b05560bf54f010a3"
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
    "revision": "c7d7b44ec0bddb947d5d115954338020"
  },
  {
    "url": "search/index.html",
    "revision": "4862619f7d847a37f9d865bdb2943da7"
  },
  {
    "url": "tag/index.html",
    "revision": "ab029c527b25ddf19299dff6015b1ee9"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "f305a317f43ae269b5525e6f106f36ce"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "1b6118f3d3405183fb3b4db305fd745c"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "5f32e874a2b816c6a4ac7d66ae33dc73"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "65c81e32f03c844d7a7701505bd62b36"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "fbfc9877c25088cc176b8055ab4b5e42"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "db9ad10d8233351f85c7d34bc98ead10"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "fcd03991be01ed0f5459b26c2cc4fa12"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "9091efdf7f8fb57c8a066015e071e22a"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "b07d8ff832528eb5c73b92fc52ec152e"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "093ae671be5dc3332dca19f7e1c6ecb2"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "ae6f603ec3b77a1570c763bdc324d7dc"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "d1aa150643f0614ad16e73f4a7978f09"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "a6600148647473c76c298de1a7fc2b6e"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "09aca7399f5677a92a0a80cc353adc70"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "08b78d155dbf258e82137058c6472f01"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "ee04586ba8c5099049523acbff336d8e"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "57a30664e9bc24111c3cefe7bb0f1b5e"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "5e912ed06f899be99f92f60ae0b482f5"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "6c67616b1b9217a4a5933bb0ae59ed9a"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "f7e6e168df3fd77d75cb8457ae561266"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "7470989004c4631e1dd0879250b41ad4"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "8a9a1076a4adf537fd159b894adf8f95"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "5383895f91b94b93c54297df08f764b3"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "0ed02e367f15fd484f2f6561f8a8e589"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "50ed554778aa4da55cba48b0dbef67a6"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "94c00334428bba31110597e734073f23"
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
