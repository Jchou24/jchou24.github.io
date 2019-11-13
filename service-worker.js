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
    "revision": "9d34cd1e2d80251722c64b5afc9a1720"
  },
  {
    "url": "About/index.html",
    "revision": "f36974a344a6061a2e8df5f9afe2f9a9"
  },
  {
    "url": "archive/index.html",
    "revision": "19f0fbbdfb2879e4b9793b9b46357982"
  },
  {
    "url": "assets/css/0.styles.218c3b5e.css",
    "revision": "a68658733ce0088fe38828e164b17005"
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
    "url": "assets/js/76.c964b3c7.js",
    "revision": "f05002229cf075dbf31bc9313acbf63c"
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
    "url": "assets/js/app.12b7dcf7.js",
    "revision": "cddfaca6742c6ab89997ffa98c1df639"
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
    "url": "assets/js/page-01b1365c.37fe17e7.js",
    "revision": "7e91c49409b80e851d952b09f93625a4"
  },
  {
    "url": "assets/js/page-03ff99e4.23d57a44.js",
    "revision": "8dfc781de1ba7df958e59ca1c30c6d13"
  },
  {
    "url": "assets/js/page-0762cb2c.a799950f.js",
    "revision": "91b19d48cb817027d9b33999aef03426"
  },
  {
    "url": "assets/js/page-0815fe43.b695bfa6.js",
    "revision": "e9eedbe5e2bc76d9d668f87003f65e02"
  },
  {
    "url": "assets/js/page-0994254e.9b6cbe6e.js",
    "revision": "55a55df804440c82b0cb010bc7b29369"
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
    "url": "assets/js/page-130de14f.6b4dd4ef.js",
    "revision": "7e1a89e9996058b9676f1ddbf1d4a9d1"
  },
  {
    "url": "assets/js/page-17916170.4cb2c377.js",
    "revision": "e49cb4cadb99ecd442a267e861e9e48b"
  },
  {
    "url": "assets/js/page-1efb5c62.ed33cdf4.js",
    "revision": "1996669c4c609fd6c786ca17b0ff480f"
  },
  {
    "url": "assets/js/page-2282a6e0.3a08af3c.js",
    "revision": "66bf0dde29c52efa13b041431ff57205"
  },
  {
    "url": "assets/js/page-2ba07fce.6f276956.js",
    "revision": "28e6432aff37e4e4b0f85d2105e630be"
  },
  {
    "url": "assets/js/page-2da25f49.1c449173.js",
    "revision": "8894f6eb40994a94719486095ac7675c"
  },
  {
    "url": "assets/js/page-2f77601c.2a38f60c.js",
    "revision": "88265ea63611cb2db7e01d32e3bbcde2"
  },
  {
    "url": "assets/js/page-36058925.90e986b3.js",
    "revision": "17e800986ea72e290271e7fa45b6eeea"
  },
  {
    "url": "assets/js/page-3721e5cf.2bc5fb4f.js",
    "revision": "ea35321e228100c95e57a8b2cbcd31b9"
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
    "url": "assets/js/page-3b1778e4.2c8e2346.js",
    "revision": "3f14e648cc12606da1e97c7a74bd1c9f"
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
    "url": "assets/js/page-437f73dc.75922ceb.js",
    "revision": "993d1859ef1e2762b61ed7fe6c0c3ab2"
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
    "url": "assets/js/page-4e40ef0e.2e00f71e.js",
    "revision": "ba20345e0e233aae2c19a8bf8cd14c96"
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
    "url": "assets/js/page-53a21bc2.3b5ece4f.js",
    "revision": "742fcd3642ade0db812f9a3d655f9bcb"
  },
  {
    "url": "assets/js/page-548dbfdd.8240f6bc.js",
    "revision": "04a864e5097e35564ab858c18940712c"
  },
  {
    "url": "assets/js/page-54cde949.308f078c.js",
    "revision": "6718ad7702b34b35de4d92269408d807"
  },
  {
    "url": "assets/js/page-56c5add8.42dcea88.js",
    "revision": "93a4e05ea4277a4e992505310a62b684"
  },
  {
    "url": "assets/js/page-5971d062.6b0ccc45.js",
    "revision": "ce70c52bd82f091bf5f9247a6b7daff1"
  },
  {
    "url": "assets/js/page-5ae76184.71d2856d.js",
    "revision": "1b904959b94c5c7e7bdf64ed09e58ee1"
  },
  {
    "url": "assets/js/page-5c24028f.0d900630.js",
    "revision": "303fa51e9cec9486292c084ca9ede3cd"
  },
  {
    "url": "assets/js/page-5dade32f.db642332.js",
    "revision": "608f9a36e454360c4a061b222db9204a"
  },
  {
    "url": "assets/js/page-62c3f84a.8e836a5d.js",
    "revision": "a991545a756bb71f386f2f8879d18fed"
  },
  {
    "url": "assets/js/page-631831dc.5554a619.js",
    "revision": "91f7bbcb916fe21f9eb8768cfb4710a7"
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
    "url": "assets/js/page-718e3f13.19ea7a4d.js",
    "revision": "815d06042696f3eb2d7fd5bff463e454"
  },
  {
    "url": "assets/js/page-7961fc62.59251ed0.js",
    "revision": "ae7f06452bcad0d6d83ea7f368bbeaba"
  },
  {
    "url": "assets/js/page-7e22c02f.8c411cc7.js",
    "revision": "3a0c99bf9157a712577d34a2bc66380c"
  },
  {
    "url": "assets/js/page-7f4c69e4.e4511893.js",
    "revision": "cf803c1b473c8d075e3f742865cdc6b8"
  },
  {
    "url": "assets/js/page-9a13860a.bb6cd7e7.js",
    "revision": "446a0b83239b2b2900741db2c3a6be00"
  },
  {
    "url": "assets/js/page-9d704b70.6de5dda3.js",
    "revision": "e0fa320dbe1162af9950d9182f67d115"
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
    "url": "assets/js/page-e63bef64.5d47b566.js",
    "revision": "8c274e03269cf907424c05ca792b3d1e"
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
    "revision": "ba173afcbc712a3d5096effc608fd644"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "ae8c1dc10ce9d08552967225def54414"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "7341fbb7f47916d19e553fe7b98bb348"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "f708cfe2fb0837d53c07824bb564adef"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "2a336efee114bc030a58e35218585a25"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "3c08eb8a29569fa7f83e9d054f06b721"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "25a21a2ea01841ce17741e9667a13e21"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "bf3863542eb73743a7ba6d38456b4ee4"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "a6e843ccfa794ef78ce7e5f5f5a671de"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "60a7a7116718954fd4026fee5709ae18"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "292a4dd8bc707b4d646374227318da02"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "202d6b109346978f1b2869e362bfa1b1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "298a22ad45907ed95ac44810acc2358a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "825c8ec4228ce59bb3e07010ee0d2012"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "4b160bb590f41ed8c96a2ac988898591"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "efd021fd7288edd2339e6e1db2e981c9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "de4d4f86583799de1cb578e722e24bda"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "62e5bb1a243d690756ae20df75b5f613"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "605fc2161f7fcbff0e89ab28cb9f64e5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "42ecde6a7fd59f27a01fb99f3ee56eab"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "f631ea86ea2f2d89733fa8099a8ab397"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "8117dd292cb23203d2c4f9f8212593ac"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "6307dceaa9e8b8c33d0d04d7813cf20f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "68a83db6401c61cb7ee8615ef335d95b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "0f5d5dd7385fe31fbd69c12907466c5f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "59b1b237c10c52bd2e5c94ead7e8f2b2"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "8c4563e4ddbf64e0877c0092120a43ee"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "b7820b5710f85d8ba28d4eafd7d710fe"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "6f3b57d50cb34e95e97d31a3adfe1460"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "c5dbb0684d83d0d849364b7fa4b6b7f1"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "dd00e5e4881cc829b4341a9c37432189"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "6fb8c9e6e2cd7198f41ef27527152cd0"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "82cf88d0bce6619a97a965f60a7259b9"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "535bbb039b8b99c5c79ff059812ae582"
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
    "revision": "780af4748707b39e4ad83eb20c39b6c2"
  },
  {
    "url": "search/index.html",
    "revision": "1d370a0a75bc95cb2f97e9ca3ad4b080"
  },
  {
    "url": "tag/index.html",
    "revision": "a4a3d3d0fc3a873c11e305814a006338"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "12ca4da5e410a7f0e8bed71a73647961"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "61a435295bf9e96be8133790b8df25f6"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "7aa7a1a00604225ef45f1afaa4e8e910"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "fc679d483117033e9156839e825fa953"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "9333421c246525ea05e2e7829ddb1f56"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "31f0b4f8445aa4a58c5da6de783ae9ae"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "8601b57b34971ff8f3b052564d055a9e"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "c40f5e118d3c1ca6392653688ee22880"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "16bcd0fc82cbea2c2e596b5400d53cf7"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "4a475c6cc778a817720670f42bd01ac6"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "6519f29aae9ed0ef688bbab1f448666b"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "ed5d056427a68a0ffa265e0d938f351b"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "9e9e49f8b803ed10002a24bd7d5da617"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "6c6102e0ef68dfbee5e588c6e79ddc37"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "f233997ff00958f3c88637da37c349af"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "16288161e617ef242e0e5a03933661c8"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "468a4b6952aab6f7b7f73755dc624a3b"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "2d48cf73556640dcad3e49bb268d746f"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "376c43b18f94266eb13b3114c1b00534"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "5188350059fc5156576da0ed6a4a2bab"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "789b33894e671b275ad34ea171180c0d"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "514d6c5a87c9e71aa4fa9e86310ec45c"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "97dcbd5ccafdde696e31e42173676e01"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "123ee5e0cc9f0a189690c472b2ec68e7"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "859606cf157fdac927bd567d7671a8bb"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "5d954426c562abbf2a56df5dbb4d0ee1"
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
