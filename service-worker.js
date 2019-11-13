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
    "revision": "abc8fddcbbdf4f7b50b2d62073b4561f"
  },
  {
    "url": "About/index.html",
    "revision": "122ea85fc193781cb8304bdd234ab966"
  },
  {
    "url": "archive/index.html",
    "revision": "f6e36e648fbcdb2e8666118633fbd54b"
  },
  {
    "url": "assets/css/0.styles.50608605.css",
    "revision": "cabe1037b8ec8bd77ac1faf96dad5022"
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
    "url": "assets/js/1.b385ea35.js",
    "revision": "b84c2d211e7b088d5c4cbb6b22952e54"
  },
  {
    "url": "assets/js/2.f221e264.js",
    "revision": "bce38aca19e7cbcbf8d540a1e3321eb9"
  },
  {
    "url": "assets/js/3.e8b65939.js",
    "revision": "d130f815047c89c422fc607ea1ecbcc6"
  },
  {
    "url": "assets/js/5.0744bfca.js",
    "revision": "11088959c96de2bc519516c436baaf83"
  },
  {
    "url": "assets/js/6.8ba5432a.js",
    "revision": "5cb62b9899ef74904af74d2c3483b877"
  },
  {
    "url": "assets/js/73.5c6318e8.js",
    "revision": "904ba885c028ed884f35d89478f549d3"
  },
  {
    "url": "assets/js/74.f5be0ec0.js",
    "revision": "bbe00e50f1d71437dae7f3f838a82454"
  },
  {
    "url": "assets/js/75.8bc97f93.js",
    "revision": "2ac0cfbf1740608619ffeaf1108e10f3"
  },
  {
    "url": "assets/js/76.9775659c.js",
    "revision": "00f6915a58cb7a93e3ae844a68942cdc"
  },
  {
    "url": "assets/js/77.a77b1eb3.js",
    "revision": "b529b2fc57e922983c73cf2e456ffef0"
  },
  {
    "url": "assets/js/78.e56bc779.js",
    "revision": "715a13b1575b3be26c6c3f7bfe53e739"
  },
  {
    "url": "assets/js/79.fb6368da.js",
    "revision": "ff277afb27b4a35e4bb14c1bd610e5a6"
  },
  {
    "url": "assets/js/80.ce5a323e.js",
    "revision": "cac2d685d638a9303c5cdb0e500a9bb5"
  },
  {
    "url": "assets/js/81.b3b0dc86.js",
    "revision": "fece8e5f16845ce205d66a04a6f8a016"
  },
  {
    "url": "assets/js/82.d63cfcfe.js",
    "revision": "0fe65dee36a2213161b26a1c6f7f19f0"
  },
  {
    "url": "assets/js/83.fb6d7394.js",
    "revision": "3daf63da906abcf20ce88d058c604ad5"
  },
  {
    "url": "assets/js/84.a1301ea5.js",
    "revision": "811053216db76ab42b39eec701e6c757"
  },
  {
    "url": "assets/js/85.f5eff3e8.js",
    "revision": "bc437bbd3345c1c7eef52ac16f5e500e"
  },
  {
    "url": "assets/js/86.b750bdf0.js",
    "revision": "e2dea173147fea85042036a9931576c9"
  },
  {
    "url": "assets/js/87.aa0d6b23.js",
    "revision": "1969c0f2acfcf20bb89b97f624a47160"
  },
  {
    "url": "assets/js/88.35bebb02.js",
    "revision": "675a2d69d71e9ea6f01192143195b7a6"
  },
  {
    "url": "assets/js/89.8cc2fa23.js",
    "revision": "fae695a8bddac98efaa2e9ac6643cf39"
  },
  {
    "url": "assets/js/90.ca5be547.js",
    "revision": "3c948efd9c927c95f580b1085e12e1d2"
  },
  {
    "url": "assets/js/91.3781fff8.js",
    "revision": "7eb5cb54b7679d8e65c3ab2c26ee620a"
  },
  {
    "url": "assets/js/92.9b91ca83.js",
    "revision": "db5897995aede715ffcc34382ab3e5ae"
  },
  {
    "url": "assets/js/93.eaae0c15.js",
    "revision": "98d4145d39cdf6aa83a95dd683e80277"
  },
  {
    "url": "assets/js/94.0c72095e.js",
    "revision": "f07ce41494ea9fadfff5d129b5006de5"
  },
  {
    "url": "assets/js/app.c57f719a.js",
    "revision": "f6fa28b6fa0ae300bc4e6d1e3b7da4aa"
  },
  {
    "url": "assets/js/layout-BaseLayout.0d9f7e4e.js",
    "revision": "31e4f752c566b6cd2de2c967664a03dd"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.fda380a3.js",
    "revision": "712434b64da12742217decbe9a7c8732"
  },
  {
    "url": "assets/js/layout-Layout.e63a2fd3.js",
    "revision": "1c345598f7277380150c3ca7f056b034"
  },
  {
    "url": "assets/js/layout-NotFound.78404681.js",
    "revision": "f52c62ceaad3e54a1823af80102bbfe1"
  },
  {
    "url": "assets/js/page-01b1365c.9e8c912b.js",
    "revision": "5614b769e9ec7a7b60d563e52e15a2a7"
  },
  {
    "url": "assets/js/page-03ff99e4.9ab8f978.js",
    "revision": "9bcbdd60d9ed25f2de61bc120bb92297"
  },
  {
    "url": "assets/js/page-0762cb2c.44d348b9.js",
    "revision": "13521cc26e26aa42f9a1df8208e00c28"
  },
  {
    "url": "assets/js/page-0815fe43.2167be42.js",
    "revision": "3079663d33e66b8f681f0af995d1b339"
  },
  {
    "url": "assets/js/page-0994254e.fe692fd0.js",
    "revision": "19c0cc235acbe9cca84608d7dd54e946"
  },
  {
    "url": "assets/js/page-09cfa20f.75502480.js",
    "revision": "7688d2281ad67e20ec13ee84f176fa31"
  },
  {
    "url": "assets/js/page-0bd5cd98.41d09771.js",
    "revision": "1ffaaedb1ae1e4426430ca04673f52c7"
  },
  {
    "url": "assets/js/page-0ca8b05c.d20b7287.js",
    "revision": "e9bcb0d0a43ec239ad531acacb196bff"
  },
  {
    "url": "assets/js/page-130de14f.64c97058.js",
    "revision": "291810d96f3b11781f20f805ded9ce61"
  },
  {
    "url": "assets/js/page-17916170.4cb2c377.js",
    "revision": "e49cb4cadb99ecd442a267e861e9e48b"
  },
  {
    "url": "assets/js/page-1efb5c62.7e152d6a.js",
    "revision": "f6c8df3fdb81eb235199697a86b5ebdd"
  },
  {
    "url": "assets/js/page-2282a6e0.874de483.js",
    "revision": "e98c28508f2e691a2059230d27c7b434"
  },
  {
    "url": "assets/js/page-2ba07fce.804aba38.js",
    "revision": "6dfbf4aa28214ee752ea36f92024db2e"
  },
  {
    "url": "assets/js/page-2da25f49.c8141c52.js",
    "revision": "ff1821ae67f510a0917e3f901f71e76b"
  },
  {
    "url": "assets/js/page-2f77601c.934137e6.js",
    "revision": "b2afdbcdfff2a5ac17693076933c5438"
  },
  {
    "url": "assets/js/page-36058925.90e986b3.js",
    "revision": "17e800986ea72e290271e7fa45b6eeea"
  },
  {
    "url": "assets/js/page-3721e5cf.eb7eafcc.js",
    "revision": "7db6d3cb004d0105b18b3b7e3bd84788"
  },
  {
    "url": "assets/js/page-38e94d3e.b7236ff9.js",
    "revision": "8b8323de75ec8118b110d7bbb4fcf7ea"
  },
  {
    "url": "assets/js/page-39d006b5.7eacd9da.js",
    "revision": "09f26165460e4f31981683eb6cb19b76"
  },
  {
    "url": "assets/js/page-3b1778e4.a8b3235a.js",
    "revision": "76262a625b707079ddcd59a73401345e"
  },
  {
    "url": "assets/js/page-4048f79b.1dcbdf17.js",
    "revision": "e9f2baa8636d6e81fd41b1efdd6b1c3b"
  },
  {
    "url": "assets/js/page-409d673b.4b24fa24.js",
    "revision": "b6a435c624a496498b27c8d136d2e822"
  },
  {
    "url": "assets/js/page-42a0ea7c.83de8cec.js",
    "revision": "bb282544dfc4730da25866a4e1e1f1dc"
  },
  {
    "url": "assets/js/page-437f73dc.7c4f3866.js",
    "revision": "388b593123655df82690fa499a12c445"
  },
  {
    "url": "assets/js/page-4773a0fc.f6dd93a3.js",
    "revision": "913b27850bba6902c8c0118b5dd0c3d1"
  },
  {
    "url": "assets/js/page-47ec31ef.5bab2eba.js",
    "revision": "80b40c3befa7b7be66fa3d957d40ca28"
  },
  {
    "url": "assets/js/page-494b7749.f838db78.js",
    "revision": "bc22fa66b103a95b4752ff3c486aa75c"
  },
  {
    "url": "assets/js/page-4e40ef0e.22c3c1c4.js",
    "revision": "c80569f43ba14f9379e0add19e249603"
  },
  {
    "url": "assets/js/page-4f5eb00c.a94d3453.js",
    "revision": "ce735f6048934ac5ac308c904874c420"
  },
  {
    "url": "assets/js/page-52453899.355cf063.js",
    "revision": "12788690928c0c6277747ae06404cc75"
  },
  {
    "url": "assets/js/page-53a21bc2.79c71eb1.js",
    "revision": "5003f6e80d905390bca471a36ff64558"
  },
  {
    "url": "assets/js/page-548dbfdd.bddce90c.js",
    "revision": "97ddd50eb1eccccca4f0f8a9fa8e569b"
  },
  {
    "url": "assets/js/page-54cde949.23c24c73.js",
    "revision": "5e17fadd81d247d8d9aab63612d5f7b7"
  },
  {
    "url": "assets/js/page-56c5add8.057ebf6c.js",
    "revision": "f8e5a1259d5a10e1bbf24fd71f0dd7dc"
  },
  {
    "url": "assets/js/page-5971d062.6b0ccc45.js",
    "revision": "ce70c52bd82f091bf5f9247a6b7daff1"
  },
  {
    "url": "assets/js/page-5ae76184.b578d2c2.js",
    "revision": "f900093e8106ec37392aab03b40fb9e3"
  },
  {
    "url": "assets/js/page-5c24028f.0bd06832.js",
    "revision": "fd66aed22a7c5f7a206fea21debf68dd"
  },
  {
    "url": "assets/js/page-5dade32f.1fdb8247.js",
    "revision": "f9d8b6412565ae68636c17d6c55697a7"
  },
  {
    "url": "assets/js/page-62c3f84a.194e3ff0.js",
    "revision": "b0383d04bac974c531ecb4c194990ab4"
  },
  {
    "url": "assets/js/page-631831dc.3ff19439.js",
    "revision": "ee25b387c784d17718609630820de8e0"
  },
  {
    "url": "assets/js/page-64c6c3f9.f8fbd41e.js",
    "revision": "ae4e485dccd6c460ecea546c2036e6f4"
  },
  {
    "url": "assets/js/page-68a3e126.5f0f1055.js",
    "revision": "e792b6ee677bcdab304baf6423c6bc71"
  },
  {
    "url": "assets/js/page-718e3f13.438574b5.js",
    "revision": "6f69fc16cc1da273b281dc6913987eb7"
  },
  {
    "url": "assets/js/page-7961fc62.59251ed0.js",
    "revision": "ae7f06452bcad0d6d83ea7f368bbeaba"
  },
  {
    "url": "assets/js/page-7e22c02f.5238bfe8.js",
    "revision": "78ab6d291aaa9526dcd443a15b384ed1"
  },
  {
    "url": "assets/js/page-7f4c69e4.51461619.js",
    "revision": "2a0310954e99e60c672b67a7819d2f43"
  },
  {
    "url": "assets/js/page-9a13860a.6aaee4b4.js",
    "revision": "e707d540b2c7f86d3aa2c4bf611e1da2"
  },
  {
    "url": "assets/js/page-9d704b70.62f16039.js",
    "revision": "943b522b0590e703ceb3521a25d77fd3"
  },
  {
    "url": "assets/js/page-a1c83fc6.b1369012.js",
    "revision": "9015c9b1b1ece5c25a204e7b25d0080f"
  },
  {
    "url": "assets/js/page-a649c29e.c083fece.js",
    "revision": "34943a85d4d566c89a126fb53fcdaa18"
  },
  {
    "url": "assets/js/page-b6123e24.17c001fe.js",
    "revision": "16b4e75a867d9c62d03c7890a2fe0c89"
  },
  {
    "url": "assets/js/page-c1e7a5fc.9c390bbf.js",
    "revision": "b7e7eb0c1791f7b5b359bf3c432a1b7c"
  },
  {
    "url": "assets/js/page-c41b383a.101caa9d.js",
    "revision": "09c9ef8f1bbd884089a99d1574ca1b91"
  },
  {
    "url": "assets/js/page-c799e3a4.a044698d.js",
    "revision": "e8b18d7366eb99d0170b203baa7d6690"
  },
  {
    "url": "assets/js/page-cd03364e.78aa8191.js",
    "revision": "5e13536b00324b0079ad9ab41c729f04"
  },
  {
    "url": "assets/js/page-deb70f94.72d79571.js",
    "revision": "2b8787994d71f190383099878bcaf324"
  },
  {
    "url": "assets/js/page-e63bef64.8a3c2b5f.js",
    "revision": "704bbc65a10c64e7bb66fdc425a7c4c2"
  },
  {
    "url": "assets/js/page-e869018c.25f12799.js",
    "revision": "b277537d4f37dbfeb73929c448e40fe3"
  },
  {
    "url": "assets/js/page-e87fecf8.6e0cb7fa.js",
    "revision": "b248ab1c6cdff054f8f61fefa792d8a5"
  },
  {
    "url": "assets/js/page-fa2e9ecc.2b0f8f00.js",
    "revision": "70d22fae452ec20b18196fe360071b32"
  },
  {
    "url": "assets/js/vendors~flowchart.8b5cd09e.js",
    "revision": "8d4be868e0b694e3bf0d3f7ab80dfa98"
  },
  {
    "url": "assets/js/vendors~layout-Layout.3a13636c.js",
    "revision": "8078c918c2dbf9fd21f8438a655c152c"
  },
  {
    "url": "category/index.html",
    "revision": "99e42ec1d8d11a937865d56b1abba374"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "e286926c8c57cf1adea24af195f8c5d7"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "a5bebeb851c84ea4ac8c3ae94b5fede8"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "0df90969a0fd03dc54ee0af9fabf43f4"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "746fb7491192a99295bbde97f1e2bc86"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "cf3a28259baa8d1cab8d6a19f050665c"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "e199661ddf7b7904f388d84621564732"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "bc6ef26cfd3363c7a1ca0734295f1f10"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "9e0ef09d9ddb8b2dab59fb7845afe80d"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "a13ab9686b9fc8524914e676fd14a340"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "ec8750d06fd32a8f97167275e7c6852e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "717c6a7668d4c6da9030453292d5f69b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "11f0c05d7be899a72aa44c0ffce9579d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "75a43a68037dffe03bf43e60f1a347ba"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "a7587dd4a8783d9ef47c5c9851264236"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "36091003ce7b43ceb70fa385bb56ba89"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "a23a2f5d42303f06f74a7cda9b439c78"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "808a147555aff132ec7cce8c60d1e138"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "03b08260d0367b10679b4ca59726e9c4"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "270d1124e59f97e00433a65e6f409fbb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "60a282ff7c5eb5c39237985856258e5f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "b63de5abe0323c1e23390ec629f211a7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "d1816169692433b1e129ad08796072fc"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "938ae029afbe21842658cf4f626edc86"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "828077110f8a6a37100273df7d6e55af"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "f8a0137fbcaae9852d007d9195cbb000"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "c507068cb2d8756666c7d4a994f28c42"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "c7951118dc45b21c2118ffe2c35d539c"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "bad52d1426140d571f3c958803ebc7eb"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "e18e5dd733bdb0c1053880ed6b5995a9"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "76c73bb22ad0f5dd324d1d3f37d8d18c"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "4a3396c47e4cca833b446f154cb41899"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "9f64ad9d12155507b92e732ab58cc673"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "4634c3ed06dd39b273063b683e2abb88"
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
    "revision": "61dc4633e66a18bc065c6a9e3369f0e5"
  },
  {
    "url": "search/index.html",
    "revision": "c68b9b0de7cce3a4971cd09df2a2bf83"
  },
  {
    "url": "tag/index.html",
    "revision": "2b8da64ea888e78a55a413e4c65e13d4"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "50366071dd7d1aa2c2698ca5ae29b2c6"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "b980602ea34219a9d6580fc609c2a96f"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "bbc6315465e72d631d02d7943ea069e6"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "920afd7f096f192dd2af5504c48c504d"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "a5b9bbd6294d3248ea58ba96e05182bf"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "4e464fa5810056a7e0e19bd22ea55f27"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "9ad1a8a6ae0f26465f871f3e608a7abd"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "f8b72003346655d1850efaf4ec43e343"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "0686ac96ccf9361065e2d93b0386b8bb"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "ac4425868367fa8a2c84d7796b3a6bd9"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "32dd9dab84dc969b30e4c362f7160792"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "855d21ad2c01f34d55eaecf4ea61360e"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "4bf7248f91ed096f8913afa479e81d99"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "885a95de1223ffa51614ee02d016cfff"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "b9fff4ae53bd6ca447a587cb13c61f4e"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "0b0f9cf8d201b1e34a58351576e44b7f"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "9dffa71adc3df441657a63a798f91947"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "90938cd3e3ac3e40e343e413799fef3f"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "2df53f129542321595509e2f10b56dfc"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "0d442aae859dfe0900f68128bc64abac"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "d70f79048c480f14175c4ad7c736b8af"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "0a9dfe88dc50716d3199cbfe03511d56"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "ad91bf0bf5d2fa2f86fd9a0391794596"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "37d9b28017dc5a54f8362a3967d9fcb1"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "2385a2aab8adebd6248aaeaf2f798f8d"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "255386bc348bc551f132b90ae58181a0"
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
