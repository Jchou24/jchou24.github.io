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
    "revision": "57b507ad2eeee18d468dac7bd08794bd"
  },
  {
    "url": "About/index.html",
    "revision": "c6917d6666a1ea939fa14a1518da85be"
  },
  {
    "url": "archive/index.html",
    "revision": "143cc75fafbe1ae63991a8501d7131fb"
  },
  {
    "url": "assets/css/0.styles.af15835e.css",
    "revision": "2f4df33552e658269d37c2e42747e76f"
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
    "url": "assets/js/app.aa1c8aeb.js",
    "revision": "10302cff5b13726c1e5867f4ec06eca2"
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
    "url": "assets/js/layout-Layout.f2186528.js",
    "revision": "a427974eada6983d1f435cd737495d6d"
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
    "url": "assets/js/page-0994254e.00e30fc0.js",
    "revision": "e39429f356beab8cdb42eb40438cb7a0"
  },
  {
    "url": "assets/js/page-09cfa20f.57afbcfb.js",
    "revision": "b7ad7d6e2d217bc913fef060d8894ab8"
  },
  {
    "url": "assets/js/page-0bd5cd98.94cad002.js",
    "revision": "8ebe9193cf13e8a7f7820b0ee9e766e0"
  },
  {
    "url": "assets/js/page-0ca8b05c.cc88e06f.js",
    "revision": "bcfff73323c930d238b1fbbeb09761c7"
  },
  {
    "url": "assets/js/page-130de14f.5421bfc0.js",
    "revision": "7adde58d52408b5bcb9a19ffe11165bc"
  },
  {
    "url": "assets/js/page-17119ea4.45b58788.js",
    "revision": "e2e0198d5137d2e924378722282dad74"
  },
  {
    "url": "assets/js/page-1efb5c62.3c173cd8.js",
    "revision": "f0a0cf5497082b5e263cfd775853e9a3"
  },
  {
    "url": "assets/js/page-2afe58d4.d20ed327.js",
    "revision": "3d4c7195ddbbfc020ce1101f2f53f5ed"
  },
  {
    "url": "assets/js/page-2ba07fce.1c4cd5ac.js",
    "revision": "7e57110e1a098cfadef139b29e450af2"
  },
  {
    "url": "assets/js/page-2da25f49.f5852829.js",
    "revision": "4735e9e342176e1ff5cda22c84b305f3"
  },
  {
    "url": "assets/js/page-2f77601c.53ea86c6.js",
    "revision": "9d537e49945bf805c3a670511b46b962"
  },
  {
    "url": "assets/js/page-36058925.ae502460.js",
    "revision": "7a7d07b8a54063e4387bb21effa48de2"
  },
  {
    "url": "assets/js/page-3721e5cf.2ccc9af2.js",
    "revision": "4a26c039d0a175c13b540ebe9ae6267e"
  },
  {
    "url": "assets/js/page-38e94d3e.f7b8b4ca.js",
    "revision": "2c8b1364b715bb4ce082e534b2e1ca0c"
  },
  {
    "url": "assets/js/page-39d006b5.46b89949.js",
    "revision": "b90fc908c40faae65231eade5633ccfa"
  },
  {
    "url": "assets/js/page-4048f79b.d5781b16.js",
    "revision": "39a2bc58b5cf2e56b699b209d8dbb607"
  },
  {
    "url": "assets/js/page-409d673b.2cd5d671.js",
    "revision": "713bbce573a428f273ac2d5a128350d1"
  },
  {
    "url": "assets/js/page-42a0ea7c.30a2eb90.js",
    "revision": "e678e83b6cb8f9ea04864c59186e0fa7"
  },
  {
    "url": "assets/js/page-4773a0fc.e2dbd5a3.js",
    "revision": "793a8fa6312681954ac01af82004bd7e"
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
    "url": "assets/js/page-4e40ef0e.831b65f0.js",
    "revision": "4ee2050eaa62c5219e311b5e07e5fcd7"
  },
  {
    "url": "assets/js/page-4f5eb00c.6d169c65.js",
    "revision": "77d77a32123f4f52de795ff9dde483f6"
  },
  {
    "url": "assets/js/page-52453899.5a83ab3b.js",
    "revision": "d27075e206e7cdabfde033b557e9afdb"
  },
  {
    "url": "assets/js/page-56c5add8.d5cc24a9.js",
    "revision": "627c195342e164b2f31cd3b4b7b57aca"
  },
  {
    "url": "assets/js/page-5971d062.d640b105.js",
    "revision": "70a23568d672badc730632f41941f3f3"
  },
  {
    "url": "assets/js/page-5ae76184.c674d77d.js",
    "revision": "e81e61b1e2f44c5afaf6f9793b60c68d"
  },
  {
    "url": "assets/js/page-5c24028f.9eddb1a7.js",
    "revision": "01c36efdf6287e3940df6f99cbfda882"
  },
  {
    "url": "assets/js/page-5dade32f.7139f499.js",
    "revision": "583db6456515d9562cc8df1bdf354c6b"
  },
  {
    "url": "assets/js/page-62c3f84a.c2a71b98.js",
    "revision": "609c7cd42fcfd43adf93ebea2a469868"
  },
  {
    "url": "assets/js/page-631831dc.32b65ac4.js",
    "revision": "e336e95f0697e8a48f603fc14f14ee4a"
  },
  {
    "url": "assets/js/page-64c6c3f9.78f6d16d.js",
    "revision": "12472738831671f92f6c32d24ad6ffa2"
  },
  {
    "url": "assets/js/page-68a3e126.b02aa1ee.js",
    "revision": "123f075987ceb376340e408f80b6d92f"
  },
  {
    "url": "assets/js/page-718e3f13.fd1dcf10.js",
    "revision": "1006a3fe1571e43f75cc97bd695ff153"
  },
  {
    "url": "assets/js/page-7961fc62.8a054602.js",
    "revision": "91bd6631d8f5fbe175020f7dfe358369"
  },
  {
    "url": "assets/js/page-7e22c02f.b1acc35b.js",
    "revision": "965e89bacba3442c69aa079cbbbe5f26"
  },
  {
    "url": "assets/js/page-9a13860a.32368c2b.js",
    "revision": "cac1b6e90f8c5c0aeee5f0353d243f41"
  },
  {
    "url": "assets/js/page-9d704b70.95c140cc.js",
    "revision": "2d7fa192c5135e19101ba546d1b8c157"
  },
  {
    "url": "assets/js/page-a1c83fc6.c24e8a74.js",
    "revision": "f68d7724c4c23c2f7e83f0c707e02525"
  },
  {
    "url": "assets/js/page-b6123e24.bba77da5.js",
    "revision": "abe4a58350c1f2e3884e68e7775aec2e"
  },
  {
    "url": "assets/js/page-c1e7a5fc.e647ca53.js",
    "revision": "ed2297b1c9686e43951719fd98d3c8aa"
  },
  {
    "url": "assets/js/page-c41b383a.e2d97126.js",
    "revision": "3e276a7030ddcf0ed24e99b53a138824"
  },
  {
    "url": "assets/js/page-cd03364e.570da9cc.js",
    "revision": "5d53988ddbcce5c5e765c40de315d8e1"
  },
  {
    "url": "assets/js/page-deb70f94.f90dac5e.js",
    "revision": "5c7d6b6cfdd8952b5d9764752951102e"
  },
  {
    "url": "assets/js/page-e869018c.7f356298.js",
    "revision": "0d29fbbfd0e5fc7ce4ffc402212d7b29"
  },
  {
    "url": "assets/js/page-fa2e9ecc.c4833b05.js",
    "revision": "376cc03ff07200df3f41e98a0b27182b"
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
    "revision": "cf122cf91a75faf77557513d86568971"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "5de9e6b227b6d55d4b24f43d837b2be8"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Format.html",
    "revision": "4038a3c796b8d4a3efcef605fbe4b00a"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "f0fa71044425db583b0fd6d4e0083bd7"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "9d09ba8c0a397dfe4f30f2f3e9bfe5b1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "3b18abac92b5dd3a66eabbb6054de3ad"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "dfebfbe96fb47f1f3d8ddff333ba0d25"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "ac2a44d45510f9f44773f9a35f878b30"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "60fe39860121bef11272bb84c311231d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "f0775863bf4268b3db3a37db584841f3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "bcc2e0e3fd4a88d4483b54e470a83e22"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/走位.html",
    "revision": "31ebe11395cd5976b0a691a4f5b85d59"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "241c0c84d87a9dbcbd182c9272c402e3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "f7fe7b2111c94e0af8d10c2b91cee18a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "4af04c5c203d5752ae6061af15ccabad"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "f4a3bb8672a9b988bc35e77d75b1408d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "e0976a76dc518be65d2cd13896ab065c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "2caf86a5aed3ba55adc5678998dc2115"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "f1dd29ff8e94475fea410c8e90cbd939"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "933fb3b65fe074cde34f7be0cbf6a986"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "d0bd052e287face8e15df0c1fcec13ae"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "ba73b3e1de6a0deee1df45424b3cecf1"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "670399cc591e306393089b4c3541c785"
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
    "revision": "3d59b400e874d25fc4377c7930c54833"
  },
  {
    "url": "search/index.html",
    "revision": "8b220cffedd40ce8153e6053b0f734c8"
  },
  {
    "url": "tag/index.html",
    "revision": "690121da0b6ed2b8c775e68cc0aed0fe"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "ea1550b4fbdd27bea04e6abff2ed79d2"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "5927fc952a58e2238d500067ad2a0d7b"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "9c4a9fa08c631757026ecda4f31e4ad3"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "eff3e4df5b4fbb431690f16f79eb291d"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "423e978b04b0ce7c0b3d666052b783bd"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "11da309367bfa423228024da89fa0c29"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "b9061c669e069d71d2978ac74d16eedf"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "375f6bf23a57d8eec18f695783b1de66"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "409a2b64e44936e03ee3ea31d6e39cf1"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "32cda1d6929f4050d995edb90b597ea4"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "0c667023d9f5d9f34521f6d7e5fbda71"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "d480cadec5f27097a19bafdd9e3d3c2e"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "5fae4fd3925e8d7f987f33986df6d510"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "ce9251491f3de578052d6459db8aa7cb"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "2cdc2639cadb1dab1833f3dc881ad6ef"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "81eb2476d298637de359c5faabc17630"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "bd2641b73f4ed5b3769389f376cf03ba"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "e5d444f2a83706a12bfd9414683415cf"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "3e7291938b50bd7b42954f796651cb6b"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "f108b3924b7a2d78e5c8242d7a24e478"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "13c1b014413e6505c25af50f4e76c22d"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "a4bd11edf72c4b2dc0a1d6da47931923"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "5d45ec1efb153eb9ec9f9ed71ba585e3"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "eae997b3eefc5ce6512e8d88837ac641"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "7bf4a4027ad4bae7cd766a3ab1a5582b"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "3ee2ff6e2ac0a4fde2809ce19c50f785"
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
