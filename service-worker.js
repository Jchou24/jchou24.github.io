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
    "revision": "7d32e2fc3f3d8a1542a5bb79195d9e7f"
  },
  {
    "url": "About/index.html",
    "revision": "55ee74227824ca569acf64e3ba372540"
  },
  {
    "url": "archive/index.html",
    "revision": "476b8bafe534beeeace6de1b9b213a04"
  },
  {
    "url": "assets/css/0.styles.66beac6a.css",
    "revision": "e77a2c174181e85f557335ce81005952"
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
    "url": "assets/js/6.462ada8e.js",
    "revision": "9d2eb93c2c644cb2a2ce83f4beac8b03"
  },
  {
    "url": "assets/js/66.b62dc08b.js",
    "revision": "39971c3952f416c261fbbf5ac42e0827"
  },
  {
    "url": "assets/js/67.56c60c40.js",
    "revision": "d763699c5211c2cd36496de5027ebc1a"
  },
  {
    "url": "assets/js/68.89fa62be.js",
    "revision": "29ce6ccfde8130d794d9bf627c02dcf9"
  },
  {
    "url": "assets/js/69.ee12b87e.js",
    "revision": "bf832fa5b9b155f1e007eae29aecb5d7"
  },
  {
    "url": "assets/js/70.ad401182.js",
    "revision": "4aaee30a594f3f44bc9732d3f58bb56d"
  },
  {
    "url": "assets/js/71.71cd8474.js",
    "revision": "48e7f24f33e4e77976a6a89a6a3ec1a4"
  },
  {
    "url": "assets/js/72.bfd91cf9.js",
    "revision": "9dd99945774ed50c4101a1f4cb12c160"
  },
  {
    "url": "assets/js/73.ae318da2.js",
    "revision": "f5725e6e920c102754afbe6d8a1b1aed"
  },
  {
    "url": "assets/js/74.cb910501.js",
    "revision": "c6cb1c4c6785bf4937821a4a7f403c36"
  },
  {
    "url": "assets/js/75.74b0c998.js",
    "revision": "4ce539847e0f51994b4157796ba00068"
  },
  {
    "url": "assets/js/76.0e0cb349.js",
    "revision": "4a1b4ab96c288a20f578fa56ed513ca2"
  },
  {
    "url": "assets/js/77.91559126.js",
    "revision": "69cec446448e8ee2560d3fb2789b654f"
  },
  {
    "url": "assets/js/78.f00e9146.js",
    "revision": "3285aefa612dc25dc5173e919ad1fff7"
  },
  {
    "url": "assets/js/79.1fca4429.js",
    "revision": "46ab7386d2d2ca71438eccd3840a89fd"
  },
  {
    "url": "assets/js/80.08af99e5.js",
    "revision": "b9b104dadb2f0c13b86e768e2fe05a0a"
  },
  {
    "url": "assets/js/81.fb3a56d2.js",
    "revision": "22aa15e9d51e7e2b31f855ee77bb3c9c"
  },
  {
    "url": "assets/js/82.d47849e7.js",
    "revision": "3c07b9c81c7074d68651369d26d2d9e5"
  },
  {
    "url": "assets/js/83.95709365.js",
    "revision": "7a46378a0d99a5f55e70af6f091172a5"
  },
  {
    "url": "assets/js/84.6db0eb4c.js",
    "revision": "6e98a6cbec800e5a6535dc4079e8ed54"
  },
  {
    "url": "assets/js/85.f7402548.js",
    "revision": "801628a56f2ae786b9b01c62210195b9"
  },
  {
    "url": "assets/js/86.28d20ab4.js",
    "revision": "167f3283e9db7c6709f97bdb57f088bf"
  },
  {
    "url": "assets/js/87.cf748775.js",
    "revision": "20f456ecbab7c806ea7d8c619609ba51"
  },
  {
    "url": "assets/js/88.562c1e3c.js",
    "revision": "f68e63c86d0cce38e875ea3474691460"
  },
  {
    "url": "assets/js/app.d9a421dd.js",
    "revision": "58b52c4a1757ae7502c525bf2c1bff45"
  },
  {
    "url": "assets/js/layout-BaseLayout.701130f6.js",
    "revision": "80c6cbbb34b9be577f1c462b5157bd68"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.2b989ed0.js",
    "revision": "8b1cc8b33e29d67dbe4245939109f69a"
  },
  {
    "url": "assets/js/layout-Layout.83833bb9.js",
    "revision": "3ac9f3408391e7c710cc90ea973f7caa"
  },
  {
    "url": "assets/js/layout-NotFound.19a5a471.js",
    "revision": "2546bee544c737a9909fdb5074ef92b8"
  },
  {
    "url": "assets/js/page-01b1365c.7557707b.js",
    "revision": "0fb438462c461103e5afa3ac8c83ca89"
  },
  {
    "url": "assets/js/page-03ff99e4.3d0d7b98.js",
    "revision": "3766864b40f180335e1f66efeaa9c26b"
  },
  {
    "url": "assets/js/page-0815fe43.04fa193e.js",
    "revision": "65bbaadd667f06518f207b8437298bd0"
  },
  {
    "url": "assets/js/page-0994254e.6d52d648.js",
    "revision": "1c8e05f35a76daa279a5b793b908232e"
  },
  {
    "url": "assets/js/page-09cfa20f.abea1a4d.js",
    "revision": "09f23e88cea50e987b2014708e206645"
  },
  {
    "url": "assets/js/page-0bd5cd98.bd81cb13.js",
    "revision": "b6c159e17a9c950f2d374797ded0602e"
  },
  {
    "url": "assets/js/page-0ca8b05c.be47e366.js",
    "revision": "97fa3c45899a12a842f90c98f1de2703"
  },
  {
    "url": "assets/js/page-130de14f.e96a503c.js",
    "revision": "b70a6f167cb20c95752363ab402b56a5"
  },
  {
    "url": "assets/js/page-17119ea4.a85a939f.js",
    "revision": "e923c7bf65105b95a1efee47e23df724"
  },
  {
    "url": "assets/js/page-1efb5c62.3cf32721.js",
    "revision": "facb307c829b8a27dbbfb94fca307a0c"
  },
  {
    "url": "assets/js/page-2ba07fce.cedf5a0b.js",
    "revision": "3f6c7ab6c39793f3c157f2061b6f1ab7"
  },
  {
    "url": "assets/js/page-2da25f49.058fde1f.js",
    "revision": "485cd80e676237aaf3a751f3bba0fc84"
  },
  {
    "url": "assets/js/page-2f77601c.5f383fe4.js",
    "revision": "ae1082afb8d93db2d28cf0cfa0e13718"
  },
  {
    "url": "assets/js/page-36058925.b53861a4.js",
    "revision": "fd328cb31ffe05eca6f7cc15cf546623"
  },
  {
    "url": "assets/js/page-3721e5cf.bfe6f68b.js",
    "revision": "432b4d9c030dad54cd64419deefa2cb1"
  },
  {
    "url": "assets/js/page-38e94d3e.4dc2ee3a.js",
    "revision": "5c13a68a4ceb70367ab526c8e1dba4f1"
  },
  {
    "url": "assets/js/page-39d006b5.79fd49f7.js",
    "revision": "e89f1099738df152d85e7d13528bfa40"
  },
  {
    "url": "assets/js/page-4048f79b.e29b3590.js",
    "revision": "2969c4f9d9935919b36a9687a71aeb4f"
  },
  {
    "url": "assets/js/page-409d673b.bfa0d435.js",
    "revision": "249b9ec80d4792d6bf7ac945e749e573"
  },
  {
    "url": "assets/js/page-42a0ea7c.7c9b9364.js",
    "revision": "ec795ce2501fe3357c21dd946cd03332"
  },
  {
    "url": "assets/js/page-437f73dc.2250b9ea.js",
    "revision": "64b8f3c53ff41a5969da628519dfe814"
  },
  {
    "url": "assets/js/page-4773a0fc.84fee8a9.js",
    "revision": "2de9e31519103eb2eb4e2840e9de39ee"
  },
  {
    "url": "assets/js/page-47ec31ef.4a5f6d11.js",
    "revision": "d34085b52d6a7ea516e9fd8e5792a453"
  },
  {
    "url": "assets/js/page-494b7749.1a76f8b6.js",
    "revision": "c0aa87dbfc33d1e324c7892ee1d3c493"
  },
  {
    "url": "assets/js/page-4e40ef0e.8f621ea7.js",
    "revision": "7e6f464b999b78bb2ad7f10ffe0f838f"
  },
  {
    "url": "assets/js/page-4f5eb00c.69a69311.js",
    "revision": "6d3d40719855c1862686360cf67ef259"
  },
  {
    "url": "assets/js/page-52453899.593f0838.js",
    "revision": "1a2f2fd95b3b28fb96a6b10a2c018a68"
  },
  {
    "url": "assets/js/page-54cde949.419a2b59.js",
    "revision": "f6f85cc9ec85c1bef93e416a4a554d0a"
  },
  {
    "url": "assets/js/page-56c5add8.2e79741e.js",
    "revision": "e22157f47f666ec169aae8b72d941316"
  },
  {
    "url": "assets/js/page-5971d062.a55a5ccb.js",
    "revision": "932969e1bade3d8488583e423f0de175"
  },
  {
    "url": "assets/js/page-5ae76184.2a55cb00.js",
    "revision": "7c2898dc14a743eb6039a94daffab024"
  },
  {
    "url": "assets/js/page-5c24028f.4220cecd.js",
    "revision": "bf45e569a65c2c9c53d9769a34396d14"
  },
  {
    "url": "assets/js/page-5dade32f.18da2379.js",
    "revision": "75c9c4d012549147967b9cd7da33ada3"
  },
  {
    "url": "assets/js/page-62c3f84a.a24c5052.js",
    "revision": "f2261039f7778100e5f1b0f153b0f8ef"
  },
  {
    "url": "assets/js/page-631831dc.ca24764a.js",
    "revision": "88fbcbed83cf65c564f49f32a61e4e1c"
  },
  {
    "url": "assets/js/page-64c6c3f9.b869e330.js",
    "revision": "4cd973565a5a468035ccad94f7dc7e3b"
  },
  {
    "url": "assets/js/page-68a3e126.049be728.js",
    "revision": "ec7fb39a0d542e069efd8677ede0193c"
  },
  {
    "url": "assets/js/page-718e3f13.a96fe884.js",
    "revision": "0318bcadb285722aac57b0ef72385fd1"
  },
  {
    "url": "assets/js/page-7961fc62.6815b592.js",
    "revision": "af273f7d055cdbf4a48cb7ab3f81c37a"
  },
  {
    "url": "assets/js/page-7e22c02f.44e98dfe.js",
    "revision": "81ab8b3b9e3a82391fc65d31500feccd"
  },
  {
    "url": "assets/js/page-7f4c69e4.5a7bb2a3.js",
    "revision": "aae038034a9dd397df5aa0d5572946d2"
  },
  {
    "url": "assets/js/page-9a13860a.242d879b.js",
    "revision": "490cd406491179d22d59c42cbb251dae"
  },
  {
    "url": "assets/js/page-9d704b70.03f680bc.js",
    "revision": "e1a384be5280af6d137446e96ea9e619"
  },
  {
    "url": "assets/js/page-a1c83fc6.0c41c7bd.js",
    "revision": "2c72bcb8e5b6eee3f1338a5da18ee789"
  },
  {
    "url": "assets/js/page-a649c29e.937d771f.js",
    "revision": "c9280bc58baae13443a2cff0207a1ef7"
  },
  {
    "url": "assets/js/page-b6123e24.dbe93314.js",
    "revision": "6114362ee77441f5e59af3078ff8b2e3"
  },
  {
    "url": "assets/js/page-c1e7a5fc.0e5bb4f4.js",
    "revision": "24df5df50a9e6c6cd14d09c463f00c1e"
  },
  {
    "url": "assets/js/page-c41b383a.ea344bc7.js",
    "revision": "568b34ecef54b3f0c4ef18079924d00a"
  },
  {
    "url": "assets/js/page-c799e3a4.2719bf7d.js",
    "revision": "9b6a512877a47d3f5f1e18d3a6c3b187"
  },
  {
    "url": "assets/js/page-cd03364e.ae93290f.js",
    "revision": "586c61b037fb9422534a982a5cbecd82"
  },
  {
    "url": "assets/js/page-deb70f94.823aa9b1.js",
    "revision": "6e1e8a701c6a0ed80fce95220d051286"
  },
  {
    "url": "assets/js/page-e869018c.99d80a07.js",
    "revision": "78f84925e4ae0d3704d0b0b3e4240a42"
  },
  {
    "url": "assets/js/page-fa2e9ecc.91bc7c3b.js",
    "revision": "4460594f137172206b323c39c81bdcac"
  },
  {
    "url": "assets/js/vendors~flowchart.c63fec39.js",
    "revision": "6269f78b59a184a673a61a2cfd5f056e"
  },
  {
    "url": "assets/js/vendors~layout-Layout.d10d94c6.js",
    "revision": "9ba6bf4f0f7b3af52978280b76920911"
  },
  {
    "url": "category/index.html",
    "revision": "fea315dcb7b56f36173b81f39331c594"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "5838e83d7edebfb0032bdcaa06465cff"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "11b464b6a47e41ee343fe65c4cbe2447"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "cc700bcef9473ecf0bfe56cadf11efb3"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "684d5cc7a1620d3bf23aec0b584e4a9a"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "b773ab014c8aaecaeca1a1b102d18ddd"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "56cb915efa505d80cd8a517d0aa24b63"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "369a32b2a9768605eadf0caf58f357d2"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "e65de17d3dafbd5c0d17c0fd0c28a25a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "9a61b0c5c8ad4780358ccb955b8eec7c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "7b4bb30acc3a7ff51b707cdda2a52f84"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "16021f703f8f8bb5dfd99b51067c5e89"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "688942a51b497ca4c41c906b0f188e10"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "43ce2e7620fe00723cacfe3409712fec"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "f8fb0646fcbc58e6fbfb88e228871ee1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/走位.html",
    "revision": "2084924fb19032ee3e5b5f49216d8f34"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "7015971bbfea8d6741916a5c8e3d1f70"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "0581f72b2143bdaf0916b2b95199dbe0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "aa43a0f5754214b268df1189a3242aba"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "8f4b8d638129571fc684f634e0fbd69a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "11cfd875f128dce4d333260541c9104c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "da794c627409e0ef11fd959b4d0c37d2"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "56f9c0602b3b2b1b5b892e370a8c081e"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "85a6d5fa2cd80b8653e8c69118a2f1f2"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "a3e954849d8a3c20dde41b3ba383a8e1"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "51286d48609853cdedf5acbf26f6f2b2"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "143266a4733ca5a057460327c60edbfc"
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
    "revision": "dae9a93ca16287d4de83043db0c3c4ca"
  },
  {
    "url": "search/index.html",
    "revision": "794a4288113aafc89ba030116f672ef5"
  },
  {
    "url": "tag/index.html",
    "revision": "8ff18f2b0d102c0f80a1b8c1386299c7"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "ffc668e6a8a6b652be8bbb3f1e7e8ec4"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "7a8975b2b65e9325f5ae1bdc7416ba80"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "5225afcd8e3f40d101d5f1cd7a5b5a1b"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "7290985985857001ca978e6c25d0771d"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "4b83952ca159d6e3015a32992c356aa9"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "ec5b1137465d12924c113fdc10d1668f"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "98f077a0974a8c3f096f3ade28db0a63"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "567afdd1d12324bc764d32e0038f9fd8"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "30303267db6d15ad35b81f91c22ae85e"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "7b0d4e32971491d23655539954a7c94f"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "3bae5598fd61e79d380cfd4208ecc6a8"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "618d84778d703e0645f75bdce056bb9f"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "c8c6116e67c96d831676d582c27381d0"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "9e8a20b99706d0d99da3a0b56adc8f7c"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "0b6cc3aef9575032403dc73e8e656649"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "b09d0822e390868ac8547f6b4c736d23"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "3242354a357f74d44dd37407884f73fd"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "2d45e7829cbca22f2ecb60b56266f7e8"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "34f60d484483b4e9debe32adfd007708"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "d499c34cf68ab60567add53c55e2105c"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "9bb718477d27632ef96f756cc8ceea8c"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "9c32c4590f599a94c5185dadf515f0f2"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "b41e2246e7c2b6499a057b309306b301"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "ffbd1cb8cd89541c961695a2719a89ae"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "7f31462418dfb8e3df59edaf7737e77e"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "d2a9367cd77eb9426ff03daf7069fccb"
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
