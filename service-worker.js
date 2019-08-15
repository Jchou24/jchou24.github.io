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
    "revision": "5c1b487ec409fcf12875d0f58831faa3"
  },
  {
    "url": "About/index.html",
    "revision": "e100647ad6493ab6bc6feb9634aba7b7"
  },
  {
    "url": "archive/index.html",
    "revision": "8f5941f7c588a5572e6f82bb3f2a1905"
  },
  {
    "url": "assets/css/0.styles.814392c0.css",
    "revision": "b606a64a8f3c894d72cf582dfc80394f"
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
    "url": "assets/js/6.c6feb8fc.js",
    "revision": "29ad4bf192e187553ee08c27640cce6c"
  },
  {
    "url": "assets/js/62.b5d18919.js",
    "revision": "39f37add7abc5d274a3d34f763c2884d"
  },
  {
    "url": "assets/js/63.04fd8d62.js",
    "revision": "2ef6237041b83f53cdc421a56be89f20"
  },
  {
    "url": "assets/js/64.6932b2b4.js",
    "revision": "b1d13cd3e78afd2e9f9f30990d135e04"
  },
  {
    "url": "assets/js/65.42a68743.js",
    "revision": "d2e56abc94c80e804cc249ba55b43637"
  },
  {
    "url": "assets/js/66.b79d6842.js",
    "revision": "2565b12b57a940d5db516cf38100023e"
  },
  {
    "url": "assets/js/67.a71a5152.js",
    "revision": "08f4fa624de7a9f407989f263a967100"
  },
  {
    "url": "assets/js/68.174a370c.js",
    "revision": "c904cac566de64db7ecd5bb017c2dfe5"
  },
  {
    "url": "assets/js/69.da5df483.js",
    "revision": "d941e11a7c429bfc9fdd1c78e901bd07"
  },
  {
    "url": "assets/js/70.446642ee.js",
    "revision": "a62bc3a9febfde877da7f3f62741d0ec"
  },
  {
    "url": "assets/js/71.e72956ed.js",
    "revision": "6495d25b0eb9b54bba62a555e62e0d05"
  },
  {
    "url": "assets/js/72.639d0b3b.js",
    "revision": "3ecaac12dd216d14bcb40d238e5cf2f2"
  },
  {
    "url": "assets/js/73.57df221e.js",
    "revision": "05b2b8d6c6ab417d2c7aee165cacb3ab"
  },
  {
    "url": "assets/js/74.9311a33f.js",
    "revision": "0b5db4bd5eb8ef3e8cb82d458ddb424c"
  },
  {
    "url": "assets/js/75.01e90978.js",
    "revision": "e4dfae587f50ed5f0c0a1e10e3f23dcf"
  },
  {
    "url": "assets/js/76.33728556.js",
    "revision": "ea47c0165d1721c377d78b6e75921ff1"
  },
  {
    "url": "assets/js/77.5db7d814.js",
    "revision": "f05f25f6d990df93f27b2d7aa80db2f0"
  },
  {
    "url": "assets/js/78.fc69f4fd.js",
    "revision": "b958d507fd70275d673451365d073777"
  },
  {
    "url": "assets/js/79.0dab4b02.js",
    "revision": "1741ee1ba2cdb83fabe3940663447c3c"
  },
  {
    "url": "assets/js/80.47787766.js",
    "revision": "7f6a7fba7ee609160115fe70fba5d74d"
  },
  {
    "url": "assets/js/81.f1b47517.js",
    "revision": "5bc003e48dca0bca96c4afa6bf08fd2e"
  },
  {
    "url": "assets/js/82.5ba711b9.js",
    "revision": "8ae06f7fc159bb8bb5adbba2e5b32bab"
  },
  {
    "url": "assets/js/83.50b9c76d.js",
    "revision": "2a8b03af23e5de517133440979356ef6"
  },
  {
    "url": "assets/js/84.0acf0899.js",
    "revision": "196fa35207e3c2c190dadbecd0df8a70"
  },
  {
    "url": "assets/js/app.9a16a249.js",
    "revision": "d196ef88107cfbc28e88c20cdc6ae59a"
  },
  {
    "url": "assets/js/layout-BaseLayout.047e5006.js",
    "revision": "1b63c5dfdbcbe52b9a0e7de0e69c6841"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.4f77edd1.js",
    "revision": "bda7d43a3d7b9fab932cd58ea28a7a90"
  },
  {
    "url": "assets/js/layout-Layout.0a754505.js",
    "revision": "b1cd093b13b30ad83f36089eed016a32"
  },
  {
    "url": "assets/js/layout-NotFound.5af2150c.js",
    "revision": "bc38e423ae39cf27eb74fb31d41d8010"
  },
  {
    "url": "assets/js/page-01b1365c.a6a09c39.js",
    "revision": "148d5114f05a8ac15a0a42f922ed8a80"
  },
  {
    "url": "assets/js/page-03ff99e4.16cbe945.js",
    "revision": "c09d787c267124c44b512328d793b6c5"
  },
  {
    "url": "assets/js/page-0815fe43.718958a4.js",
    "revision": "a93ed05c31c0ca53faf46bb6c6796550"
  },
  {
    "url": "assets/js/page-0994254e.dd1278cf.js",
    "revision": "ab1456a78838ec59c431274d547981fe"
  },
  {
    "url": "assets/js/page-09cfa20f.a64b4e5f.js",
    "revision": "8258387a2fb62cbf9ba4770585f9509a"
  },
  {
    "url": "assets/js/page-0bd5cd98.a0c4b501.js",
    "revision": "58a394f81c7e76dccc429d2039c58695"
  },
  {
    "url": "assets/js/page-0ca8b05c.adbab171.js",
    "revision": "0a2fe13ea99060deff04b2109f82f6b3"
  },
  {
    "url": "assets/js/page-130de14f.f4188dbd.js",
    "revision": "e0fbda9cb1ccce2a8fdf0d3402bdbd37"
  },
  {
    "url": "assets/js/page-17119ea4.8cb52e58.js",
    "revision": "10f2cd2b1c4d0cd7da2fbbc48aa60b16"
  },
  {
    "url": "assets/js/page-1efb5c62.833a3958.js",
    "revision": "b703e0a4aa12afb132fdc8feeb0f33d5"
  },
  {
    "url": "assets/js/page-2afe58d4.7705b903.js",
    "revision": "b4a6cf8d66fe7f6f1f6262c78d507d1f"
  },
  {
    "url": "assets/js/page-2ba07fce.b081973c.js",
    "revision": "fa3078de7bce8cd65f19254ab53e0280"
  },
  {
    "url": "assets/js/page-2da25f49.17c72045.js",
    "revision": "4e19ed771e3b14541c3a65313d20162a"
  },
  {
    "url": "assets/js/page-2f77601c.c0cfcb3c.js",
    "revision": "464b1f0b328f7b1665b3c030ecda7663"
  },
  {
    "url": "assets/js/page-36058925.97fe9582.js",
    "revision": "0e6c437b758b015b95c50a80d2d52c5d"
  },
  {
    "url": "assets/js/page-3721e5cf.98b08de4.js",
    "revision": "c7fd32950bfaf091cd9a9e7d5a1b8472"
  },
  {
    "url": "assets/js/page-38e94d3e.3e1a51c7.js",
    "revision": "89cb6d1333c76842de8fc9903be835b3"
  },
  {
    "url": "assets/js/page-39d006b5.46b89949.js",
    "revision": "b90fc908c40faae65231eade5633ccfa"
  },
  {
    "url": "assets/js/page-4048f79b.fade70cc.js",
    "revision": "ad49583ecf5ff8136dfcc0a593222b52"
  },
  {
    "url": "assets/js/page-409d673b.d2884273.js",
    "revision": "0b88ecd620d3988ce1b8f89cefe1a128"
  },
  {
    "url": "assets/js/page-42a0ea7c.30a2eb90.js",
    "revision": "e678e83b6cb8f9ea04864c59186e0fa7"
  },
  {
    "url": "assets/js/page-4773a0fc.4ef2161d.js",
    "revision": "53af1d42eecb2b9f2fe4b756b32592ae"
  },
  {
    "url": "assets/js/page-47ec31ef.2a922020.js",
    "revision": "2c45723ad60b5e843078ecf83b4ce4ab"
  },
  {
    "url": "assets/js/page-494b7749.b795e9a3.js",
    "revision": "5e6e9ce40a848805c19195215aed10ff"
  },
  {
    "url": "assets/js/page-4e40ef0e.583d1775.js",
    "revision": "e19bfff1bf56768184e6db27f30dd9a8"
  },
  {
    "url": "assets/js/page-4f5eb00c.f4f508d2.js",
    "revision": "1e007f4080b03c1a7b97eb5944fcd245"
  },
  {
    "url": "assets/js/page-52453899.2bedde09.js",
    "revision": "022becde9e4352571ca0a3836622372a"
  },
  {
    "url": "assets/js/page-56c5add8.22990f27.js",
    "revision": "3d91b36df3d2fdb3e9aedcbd7615f683"
  },
  {
    "url": "assets/js/page-5971d062.eac60f76.js",
    "revision": "44065dbfadc37100e98f5f59ce83a7a0"
  },
  {
    "url": "assets/js/page-5ae76184.42375774.js",
    "revision": "5063409bf5282bb6d9b052a93de3649d"
  },
  {
    "url": "assets/js/page-5c24028f.9eddb1a7.js",
    "revision": "01c36efdf6287e3940df6f99cbfda882"
  },
  {
    "url": "assets/js/page-5dade32f.ef888cd8.js",
    "revision": "1aef67dc10778d52c440e3b10bc064eb"
  },
  {
    "url": "assets/js/page-62c3f84a.25732768.js",
    "revision": "79af5e2203346b338f318527deba3b65"
  },
  {
    "url": "assets/js/page-631831dc.05e79b60.js",
    "revision": "dad4f2e07c0316525903eb8484f10a85"
  },
  {
    "url": "assets/js/page-64c6c3f9.0052308c.js",
    "revision": "51f68a462c39b40c18fd0a7425719fc2"
  },
  {
    "url": "assets/js/page-68a3e126.b02aa1ee.js",
    "revision": "123f075987ceb376340e408f80b6d92f"
  },
  {
    "url": "assets/js/page-718e3f13.de26be14.js",
    "revision": "33b5ad0434c7a72a7cd7d79b536fe8c5"
  },
  {
    "url": "assets/js/page-7961fc62.425c50cb.js",
    "revision": "5b49125d65c9d7bb8442f12d3ad6afe2"
  },
  {
    "url": "assets/js/page-7e22c02f.b1acc35b.js",
    "revision": "965e89bacba3442c69aa079cbbbe5f26"
  },
  {
    "url": "assets/js/page-9a13860a.43544b04.js",
    "revision": "6deb8bd703684b2903cf2a5069f01653"
  },
  {
    "url": "assets/js/page-9d704b70.ae382183.js",
    "revision": "4c828b28fafd0f501dfc19dac6df5b1e"
  },
  {
    "url": "assets/js/page-a1c83fc6.4584e717.js",
    "revision": "d688f1637cd67c356b18595d46d64e68"
  },
  {
    "url": "assets/js/page-b6123e24.bba77da5.js",
    "revision": "abe4a58350c1f2e3884e68e7775aec2e"
  },
  {
    "url": "assets/js/page-c1e7a5fc.df5e6f09.js",
    "revision": "419621630dcba352f23afc98c7b8688b"
  },
  {
    "url": "assets/js/page-c41b383a.c607fdd4.js",
    "revision": "e17bbc6755fdf83eae03ad265db5eae5"
  },
  {
    "url": "assets/js/page-cd03364e.570da9cc.js",
    "revision": "5d53988ddbcce5c5e765c40de315d8e1"
  },
  {
    "url": "assets/js/page-deb70f94.e240ac1b.js",
    "revision": "665da205a5eb5e2b4f1f9f4fbbca393b"
  },
  {
    "url": "assets/js/page-e869018c.741d1b58.js",
    "revision": "f7e37197725a2ec69c1727dcd25bbe3e"
  },
  {
    "url": "assets/js/page-fa2e9ecc.29502530.js",
    "revision": "5ff968dbaf461a267dade5db7a80251b"
  },
  {
    "url": "assets/js/vendors~flowchart.f0316a3b.js",
    "revision": "bae7d13d629aa2b4df00da3884bf8ec3"
  },
  {
    "url": "assets/js/vendors~layout-Layout.549aa564.js",
    "revision": "2c5f9223313373c45c1e0302588ed302"
  },
  {
    "url": "category/index.html",
    "revision": "3609b0197dfd442d9ea72e8df55f36d3"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "201270e1a8685fed9f81d5c5e4f0129f"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Format.html",
    "revision": "5868de4dca07f2f0ae97366316e8c65c"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "f5de7163ee6d052a58846aa5bbfcd3e3"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "4de3b377385fb79ef21c1703e13d4231"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "8660073e921dc79129bbed1fc27d6f32"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "a6a3a73416bb35c9dd95d2749cda7cec"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "a4bc138cc28a60f159c2d42a48a716b5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "d92351e322d5be6e7925f9756052f2e4"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "e1c9bf0b54fca370c615ee010a8a9e8d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "c90b218e7db09f35f80df436993ebf51"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/走位.html",
    "revision": "15c1db3a09e86a56d5cd14611cd8763e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "92cbab32cbbdf79b34905ba9a8285287"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "2cbd520cd2ee0fbcc7093b6c41ba3297"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "8f2566461392d503d061854f729a204e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "287f3cd87410779df62d0f9c3637587e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "8d12ea0a2e53df9ed99b55e1a3a126ad"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "857e0db3e661cbaffd3985958c120ab2"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "4a65251d5ad4a59c8a665cb027bf090b"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "e6fd5d80abf83a92ff3d1d81522e6af5"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "eb97b7eb781abd22d26116e3048c4c70"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "43be1b782708594a29405aa0aba0715a"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "d3d759a28e76a8b7c6e598b58417df31"
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
    "revision": "2980a7a2a78c851afd424ecd52e2847a"
  },
  {
    "url": "search/index.html",
    "revision": "759297ac78010d3989726ded78f92ca3"
  },
  {
    "url": "tag/index.html",
    "revision": "43ed335d56d1524e1c508fe28aa54a8a"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "08dae0d4718040117d1aac3d452727b6"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "1c63d367ab0e2e7dcb364ec2f20f443d"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "4206b229cdf6de41a9a6ce9e41c934c4"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "56111cb2b3e37db829ccd9bd6c3199ee"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "9117911913d6d30c86ad185e395adcd1"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "b3d9f5d5c7b2f45164e87ac8734ba195"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "e272fbe8db74497273dbcfc1ffbcd0a2"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "c4fae4c69df951115801af452f9b7572"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "de761c96d554095b3b78812e9d7dcbcb"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "207c8ff38e6eb13b019280a7913ab1c7"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "d30c5d38d3f98d3f73e8757d16c1aca4"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "82051cfc657df46cbe46b528d28aa496"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "b48b9d874e96da90404385d5c29a6470"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "dcdb0eb7eac223249ce11f4a459c5b31"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "373a9f7a700e1467e70add69bf0abdef"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "a598273517d180e65cbcb67c8587e722"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "2e59a1d03ec36f9a5b75f8a349eef73c"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "14b54f9dd6adec9d76e5be1b72839a48"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "22791f570301533d2c863d7e89d82549"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "af27b32703a606bab1c3e82602ae87cc"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "c7ee731c8fd4e69da3d6134c41f6bd39"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "8748e4f19450a7df13165adaf90e5e32"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "5594da2bf4f91d9d35460271b76302bf"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "f6bb867f043543c74f07d2cd8043902f"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "642b940fb25d939a3d3bfd3e71e8c3ff"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "a630f8664a4cce5a908e45511e354786"
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
