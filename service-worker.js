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
    "revision": "f02aa793879ba8ff8b837698d4a3512b"
  },
  {
    "url": "About/index.html",
    "revision": "15fb457186cf75ae70d256ea56887963"
  },
  {
    "url": "archive/index.html",
    "revision": "d8b330ebd4091e26dba1082901f0e3c8"
  },
  {
    "url": "assets/css/0.styles.a215b59f.css",
    "revision": "bde799a9ea0a4ad2e188f207a4e9501b"
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
    "url": "assets/img/1.b582708c.jpg",
    "revision": "b582708ca3b3cda9d42bace00daa2f78"
  },
  {
    "url": "assets/img/1.e21543dc.jpg",
    "revision": "e21543dcedd65da2bb46151d501f6ac3"
  },
  {
    "url": "assets/img/2.02d26cc1.jpg",
    "revision": "02d26cc163bed4428ddc2d900dc2797b"
  },
  {
    "url": "assets/img/2.16d67fa8.jpg",
    "revision": "16d67fa819eb9ed1bc9964733ff3229a"
  },
  {
    "url": "assets/img/3.33f073cb.jpg",
    "revision": "33f073cbc11b65b40be87bcd392a8792"
  },
  {
    "url": "assets/img/3.677e9382.jpg",
    "revision": "677e9382e71e6f4a10a362ab4d6a024e"
  },
  {
    "url": "assets/img/4.65320b0d.jpg",
    "revision": "65320b0d59c9b53fe87e0c4b5b966815"
  },
  {
    "url": "assets/img/4.d40d7534.jpg",
    "revision": "d40d75344cb707ae4717d57493fb8bf2"
  },
  {
    "url": "assets/img/5.a09a79ff.jpg",
    "revision": "a09a79ffc9e262124b3e4546de7c0a46"
  },
  {
    "url": "assets/img/6.d1e49b88.jpg",
    "revision": "d1e49b8860fa3f1552bb1b6a63c8cb4c"
  },
  {
    "url": "assets/img/6.fb14f833.jpg",
    "revision": "fb14f83357255da1a9103ba7cde0b5fb"
  },
  {
    "url": "assets/img/7.922e30cd.jpg",
    "revision": "922e30cd5cf9f5a20539b346c75c66ed"
  },
  {
    "url": "assets/img/8.c3eacf32.jpg",
    "revision": "c3eacf32abc5fdd4f444141c3fb65a3d"
  },
  {
    "url": "assets/img/9.f5fc7afc.jpg",
    "revision": "f5fc7afc04ba38fb4f5838fdcd696a96"
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
    "url": "assets/js/100.37522b80.js",
    "revision": "66b2d0b54c2284f3966d496fa9a45e2f"
  },
  {
    "url": "assets/js/101.7d246156.js",
    "revision": "ec2dad1bc0bec84256a82f68e1c15f51"
  },
  {
    "url": "assets/js/102.d2502f2c.js",
    "revision": "0b5b82f870cd59ae4fbabd801979ce10"
  },
  {
    "url": "assets/js/103.6bf7c088.js",
    "revision": "5bfeee5a64a8748d07368a214ed9efdf"
  },
  {
    "url": "assets/js/104.13261414.js",
    "revision": "dc12790b3c2f65e41532b69eb628cc3a"
  },
  {
    "url": "assets/js/105.4568a6a1.js",
    "revision": "a28b6027e57915fb45aded7c60a6a13f"
  },
  {
    "url": "assets/js/106.dbbb3664.js",
    "revision": "57c29562312cfe99d1530845a85a3da5"
  },
  {
    "url": "assets/js/107.11270fd7.js",
    "revision": "e07ec763e8ee7633a920131e36fc65f0"
  },
  {
    "url": "assets/js/108.5eb32548.js",
    "revision": "a46c3fb31f0ed46cdf1308318eeaf7a1"
  },
  {
    "url": "assets/js/109.93d1f958.js",
    "revision": "0499d3003705c7d6f952b9442dab9d1d"
  },
  {
    "url": "assets/js/110.55d8b7cd.js",
    "revision": "3bcb2629fcea2036df589528010993a4"
  },
  {
    "url": "assets/js/111.14604ae1.js",
    "revision": "0d5b9cac38aac8135cf67204945e59f0"
  },
  {
    "url": "assets/js/112.3da6b0a5.js",
    "revision": "74d2338cf490cc05ea951a56e7a83cb6"
  },
  {
    "url": "assets/js/113.983c9df9.js",
    "revision": "b89c6050517c2f14075b3fce6c5903f7"
  },
  {
    "url": "assets/js/114.5877f02b.js",
    "revision": "7d87a94cc89b7409987561d2960dd566"
  },
  {
    "url": "assets/js/115.e5b9531a.js",
    "revision": "44cfe21bb728d28c3fb3a8987c7713b7"
  },
  {
    "url": "assets/js/116.4b16f438.js",
    "revision": "a384f285a4de1afb887575b0193c9446"
  },
  {
    "url": "assets/js/117.e088c39d.js",
    "revision": "f3de397262492dbe38a81416ba5825de"
  },
  {
    "url": "assets/js/118.157a518d.js",
    "revision": "0dbfbe93ca0359153d1692eb20ec1a13"
  },
  {
    "url": "assets/js/119.180ee483.js",
    "revision": "17799076a1fcdde859cd6561ae42211d"
  },
  {
    "url": "assets/js/120.599449ed.js",
    "revision": "9dfb52d3e610997286ab812d4228ab22"
  },
  {
    "url": "assets/js/121.2df180a3.js",
    "revision": "1cb0003756f5d8e902483dd861455fbd"
  },
  {
    "url": "assets/js/122.7ae617bc.js",
    "revision": "31e0adb2455f59f22a31df1382d29f34"
  },
  {
    "url": "assets/js/2.fe5781d0.js",
    "revision": "a08313653b77b200359c7ff1f810f78b"
  },
  {
    "url": "assets/js/3.00466cfa.js",
    "revision": "34ea31a961fe5b9ba89908a228bcd9e1"
  },
  {
    "url": "assets/js/4.ba3508a2.js",
    "revision": "e9288e16a8cf2bafb446239b709d1a0f"
  },
  {
    "url": "assets/js/5.52e9afd0.js",
    "revision": "c01e558f7f236461808cc651708bb6e1"
  },
  {
    "url": "assets/js/6.441fbabc.js",
    "revision": "42702391e3fc666a7f1b14d33b34c276"
  },
  {
    "url": "assets/js/98.a7d61a6a.js",
    "revision": "b13e09120165aefd22f13c73c12fa2b2"
  },
  {
    "url": "assets/js/99.ab5a6627.js",
    "revision": "b2debe3120c22d45a8585de4c5585de8"
  },
  {
    "url": "assets/js/app.9c348e4d.js",
    "revision": "e8376282d6ea35f814a375732bd52474"
  },
  {
    "url": "assets/js/layout-BaseLayout.0989b0c2.js",
    "revision": "b02bae10ea90094fc3432d1f3da5c15a"
  },
  {
    "url": "assets/js/layout-Layout.e11f295a.js",
    "revision": "fcef3ad9c85d1a144515d8cbac87d95d"
  },
  {
    "url": "assets/js/layout-NotFound.f2bad2bb.js",
    "revision": "c264b94365a8493cabe725ee3d100f84"
  },
  {
    "url": "assets/js/page-0193e625.e4fb2e61.js",
    "revision": "5522936e26adcd849bd5664bcb3b238c"
  },
  {
    "url": "assets/js/page-021b3aa4.6915f958.js",
    "revision": "af65b15cdbdb6926ed2fce152d5a901d"
  },
  {
    "url": "assets/js/page-0a921c99.486fc3c7.js",
    "revision": "38b39dfad9a45924118b93bf982c06dd"
  },
  {
    "url": "assets/js/page-0c6c4d65.05ba8f80.js",
    "revision": "c2ebf5ba99906af2ebbb3a31b7d79f83"
  },
  {
    "url": "assets/js/page-0c7f77bc.f3bde866.js",
    "revision": "c653ca32d44cac28afc6ad104bb42050"
  },
  {
    "url": "assets/js/page-0d32e5ee.5e68cf77.js",
    "revision": "24f27bbd672d5de6af3c0ae941a368b0"
  },
  {
    "url": "assets/js/page-1080dbe2.54895e39.js",
    "revision": "ea646f09dc2850e9198c8e59d79611c7"
  },
  {
    "url": "assets/js/page-1486eb54.d9841136.js",
    "revision": "b1beab1744475f33fe7cef160c0887af"
  },
  {
    "url": "assets/js/page-1a34eb5d.d893d134.js",
    "revision": "3a8a706dffd92f2561876818f10a6133"
  },
  {
    "url": "assets/js/page-1c4a4e12.49e049c7.js",
    "revision": "7bc4664b01f9db9f1b095ebbddf0444d"
  },
  {
    "url": "assets/js/page-1ccc22d8.304b893a.js",
    "revision": "96740c8583dffa451f2128a0c92d124a"
  },
  {
    "url": "assets/js/page-1db42de8.20e56135.js",
    "revision": "022a5d9f4573dc23573f779a0207d35a"
  },
  {
    "url": "assets/js/page-1e536af9.07a41594.js",
    "revision": "f198efc21846d24b7830295209260b22"
  },
  {
    "url": "assets/js/page-21fcb945.c2050696.js",
    "revision": "9b85abdbb5b145d65990d1bce5e0cdd5"
  },
  {
    "url": "assets/js/page-25bc4f18.f045362f.js",
    "revision": "10500b260ee0635e9b67dc825b8ce5df"
  },
  {
    "url": "assets/js/page-27f6ecec.2127daf0.js",
    "revision": "85209a4feae01185c8b35aa5dcc010d7"
  },
  {
    "url": "assets/js/page-29c918e5.a19278ee.js",
    "revision": "f75f698008429e19e7b264e8eb5bcef8"
  },
  {
    "url": "assets/js/page-2c6bc4ab.31285422.js",
    "revision": "39bab88aa755ffb2288b8dd0b736cbd3"
  },
  {
    "url": "assets/js/page-2e8c0cd0.2967f3f4.js",
    "revision": "ff80e34f0fd3cc4eaa7133e9765a4d5c"
  },
  {
    "url": "assets/js/page-320aac86.f0a0135f.js",
    "revision": "d76d711bdca0fe8c5d36bbbbebbcb422"
  },
  {
    "url": "assets/js/page-339369e0.aad51005.js",
    "revision": "2edce10cf68339b8b174aabe82673299"
  },
  {
    "url": "assets/js/page-36d5d2b3.e0b236c0.js",
    "revision": "3c7e0c71a12354cf4e8721ba5242624d"
  },
  {
    "url": "assets/js/page-39e05f8b.56e5b40f.js",
    "revision": "20ad862c77918f36840a2123a6ec6156"
  },
  {
    "url": "assets/js/page-3c8dbd4b.36795149.js",
    "revision": "3d0f47310ce0d0dcff4cae66fb6d3a22"
  },
  {
    "url": "assets/js/page-3cdc4745.1fa7d8a9.js",
    "revision": "5188ffad08d30dc7faf06290762fad23"
  },
  {
    "url": "assets/js/page-3ff73aa5.1d39eed4.js",
    "revision": "33bed2c31aa4a773db6546982b2f4976"
  },
  {
    "url": "assets/js/page-4144513c.392ad426.js",
    "revision": "d4cdd0598a91914a3cd41f1eb1b2a63a"
  },
  {
    "url": "assets/js/page-422a7e52.5989e652.js",
    "revision": "b84b43a5c874530c85c79c9fa425cbf7"
  },
  {
    "url": "assets/js/page-445c88ce.99273377.js",
    "revision": "6b756e59736bae243fb09a7d4eb859b5"
  },
  {
    "url": "assets/js/page-4478a866.c69bf67c.js",
    "revision": "cb338a784e0b988d41e6e98144258dca"
  },
  {
    "url": "assets/js/page-455360d1.a5cb4c82.js",
    "revision": "dde0d94a06a6aacb382a9293d8d9283d"
  },
  {
    "url": "assets/js/page-47f71914.d3665378.js",
    "revision": "7868a0270b3d999880638c8142424602"
  },
  {
    "url": "assets/js/page-4829d184.721df5c2.js",
    "revision": "5cd6d28a3e12556a4af12164ccae78c4"
  },
  {
    "url": "assets/js/page-486aacae.d372b2c0.js",
    "revision": "a114342d17d225c858452e86bd7a111b"
  },
  {
    "url": "assets/js/page-4d521b14.76650da2.js",
    "revision": "a25ae49504484b7ee9e467bd06c2d62e"
  },
  {
    "url": "assets/js/page-4d7e2aa5.f6010f43.js",
    "revision": "9e72f86c79a3a8efa0eaa35f7e51cb3f"
  },
  {
    "url": "assets/js/page-4d9fba32.c1fede58.js",
    "revision": "990606c5db1772ec4f9ef4c7cc6a9dd9"
  },
  {
    "url": "assets/js/page-4dc00f25.b81f6573.js",
    "revision": "e1b855b6170e906ae1a19ee0f307144b"
  },
  {
    "url": "assets/js/page-4dc54ba5.2ea5cd9f.js",
    "revision": "1ab218f454d84ecee02a3d359729d4bc"
  },
  {
    "url": "assets/js/page-4df429d2.2596a4a2.js",
    "revision": "546ce6f2093e3b9d97f5788a0e466327"
  },
  {
    "url": "assets/js/page-518ca8d8.5f523b0c.js",
    "revision": "4085d2668700f9c4b7e8ca2f6144cc8a"
  },
  {
    "url": "assets/js/page-55a376be.8ceb0fe2.js",
    "revision": "3d92159d5356c811815b63496662a6d9"
  },
  {
    "url": "assets/js/page-59cd63bf.af25348a.js",
    "revision": "dbe3582ff6b73ea5ab8e6f9ff77fbb19"
  },
  {
    "url": "assets/js/page-5cdb680e.df41ad85.js",
    "revision": "a8a24f3095ffb9fc42f2468360f4ea8c"
  },
  {
    "url": "assets/js/page-5de41bb6.66a2424a.js",
    "revision": "19aff5ed291ad90f083b28ee20c2a4d5"
  },
  {
    "url": "assets/js/page-5edad598.aa5131b7.js",
    "revision": "80533029a2aea45e493d2cac3663b28b"
  },
  {
    "url": "assets/js/page-64a9a694.baf663ab.js",
    "revision": "161db7f034f8191a8deeeb02e116a1a0"
  },
  {
    "url": "assets/js/page-66061c06.cdeb515f.js",
    "revision": "683c0617832624b7e4854a416cd0c7f9"
  },
  {
    "url": "assets/js/page-6890df9a.56fef304.js",
    "revision": "79efe1cae8a81451d0db53d8352c9a8d"
  },
  {
    "url": "assets/js/page-68b44e7f.ca081283.js",
    "revision": "8ea31ae15aed478646b9f39b67f9cadf"
  },
  {
    "url": "assets/js/page-6dbff0ea.5a549477.js",
    "revision": "7f162b8715e27d7fc363f401bcf9e428"
  },
  {
    "url": "assets/js/page-6f7fa8b4.cafec285.js",
    "revision": "2ddf177f9dcbcaf94ebad358eaa6c016"
  },
  {
    "url": "assets/js/page-70612fe6.184eb19c.js",
    "revision": "6a15b7478f345bf75536c1530f7d76a2"
  },
  {
    "url": "assets/js/page-720c8312.b35506ec.js",
    "revision": "a5766f1adc56ae12e67e00101d2b3e60"
  },
  {
    "url": "assets/js/page-74a44f51.5ac787e8.js",
    "revision": "7460a26d79e087c58c3b0e8309d9c6e9"
  },
  {
    "url": "assets/js/page-7507c3f6.b3560f89.js",
    "revision": "0c804fed7db7054fae3143da2b37c668"
  },
  {
    "url": "assets/js/page-7690c622.18bfe8ca.js",
    "revision": "da1ef7017f10d6965d4c6bc4f7a96938"
  },
  {
    "url": "assets/js/page-7bfb30a6.8bb9e828.js",
    "revision": "88432040379063c99bbe96f0d04164e9"
  },
  {
    "url": "assets/js/page-7d3a6963.4921b134.js",
    "revision": "6e4072e47d15fc0e925c55b3e77d3c72"
  },
  {
    "url": "assets/js/page-7e6b5e12.cba261c2.js",
    "revision": "06e3451a8e0fbbf59714c02e7ee61caa"
  },
  {
    "url": "assets/js/page-82c2c642.0acae9ab.js",
    "revision": "2748308aad90184606a071ec27ec9209"
  },
  {
    "url": "assets/js/page-85f4c948.00c4b514.js",
    "revision": "9c65f203c9f686d010bda5ab5f9d7837"
  },
  {
    "url": "assets/js/page-8892394c.5fdc81a4.js",
    "revision": "f7d73c936a1d2cd51e5421f34204621c"
  },
  {
    "url": "assets/js/page-89b130dc.4b62799c.js",
    "revision": "23a463dc565517282706fad57156cc70"
  },
  {
    "url": "assets/js/page-8da9df6c.9821afd6.js",
    "revision": "d42fadb077ea933b3b76aa359f7cdabf"
  },
  {
    "url": "assets/js/page-916af89c.4f52427d.js",
    "revision": "34c397d624947b78f99592763da22794"
  },
  {
    "url": "assets/js/page-9a2a43a4.16406193.js",
    "revision": "935852bef0cd7df17b3c40641b5b9835"
  },
  {
    "url": "assets/js/page-9ec1a766.a1d2bfa2.js",
    "revision": "9ddd1a0fae2e6918b84235373152ca0e"
  },
  {
    "url": "assets/js/page-9f0190e0.11ef63fc.js",
    "revision": "7ffa8b4d45d8c42b5d30ef60265906fc"
  },
  {
    "url": "assets/js/page-a6174872.f2e39fbd.js",
    "revision": "81db7f4c7eace1d562cf9b6a548ccfe2"
  },
  {
    "url": "assets/js/page-aab392fc.d0034026.js",
    "revision": "0c76b816a88eb06ad765e3017794d4f3"
  },
  {
    "url": "assets/js/page-ace574d0.e1cbb0cc.js",
    "revision": "2b8c571150b7b32b1b82d3f2943f28f4"
  },
  {
    "url": "assets/js/page-ad24ce34.3d035ac5.js",
    "revision": "f8ffb0a6dc93ff5fd117997bbc4bc784"
  },
  {
    "url": "assets/js/page-b0521034.94774b5c.js",
    "revision": "593ab0338c3259aa4a58934675394d41"
  },
  {
    "url": "assets/js/page-b0d90ce6.bce88f49.js",
    "revision": "05a6e0c37608c3c65569b39b6a3a9916"
  },
  {
    "url": "assets/js/page-b40de7ce.17186df1.js",
    "revision": "f93cd43c933de0d3f386b39a8d34d97c"
  },
  {
    "url": "assets/js/page-c26b0310.735989fd.js",
    "revision": "cfbb4cc1e30f632ef2e9716d95e2491d"
  },
  {
    "url": "assets/js/page-c4bdd70e.047618e0.js",
    "revision": "0b609d7192cea0acadbcda66ab8b3efb"
  },
  {
    "url": "assets/js/page-c5f1a60e.b0d45622.js",
    "revision": "0ae16213c944b5298edb786e9e056e30"
  },
  {
    "url": "assets/js/page-c60be50a.c4b8d95a.js",
    "revision": "519b904c307a31da8ef5cc257cf61844"
  },
  {
    "url": "assets/js/page-d6c4343e.202acf15.js",
    "revision": "9c3315a83d507fb6ea3b7ecdc39d71f8"
  },
  {
    "url": "assets/js/page-e468b710.95754c50.js",
    "revision": "8c8173ff07f01541f939f0785081d15a"
  },
  {
    "url": "assets/js/page-e72e49e8.ed70c565.js",
    "revision": "1107fb6e2ab12de59df99f711fff2ae2"
  },
  {
    "url": "assets/js/page-ed303fba.e359fab4.js",
    "revision": "df6628aebd70c722e486e33eac0f3f15"
  },
  {
    "url": "assets/js/page-f313c186.3c3ab8a7.js",
    "revision": "c47c9ed50415b9367e6f8abf9b5b79ca"
  },
  {
    "url": "assets/js/vendors~flowchart.ab2f50d2.js",
    "revision": "e8d84ad556696af0f6b6d3ad0c3c82b2"
  },
  {
    "url": "assets/js/vendors~layout-Layout.3bfe664c.js",
    "revision": "a02e2ae2ebab99bf25eea16ad9b16360"
  },
  {
    "url": "category/index.html",
    "revision": "3302ce1fb485a7e34dfb759e08e29964"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "32b40cde294fea706e16d162357d1ce6"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "864fcfe1e9ca3d52a613b78e95af0eda"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "5e87275b17a82625a75479ea6ac298bb"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "b9b6a2e38798384b8c6ec19f6746105e"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "e96dbe1556fd8978a99da9e0075c5771"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "4caff943802f7bfa6f67c8fccb7f3aba"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "a62b03ae30d05cfd6570d9795e8d307f"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "d587027e6964efc04853a2f9c76802f3"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "98d40d71c7b1081a97fd217b194e18f4"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "797f4aedde2983cc7bff23e685cafe52"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "9187f3e243637589bd700791cc9b8780"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "40be91162c597f2701601922b29c38fa"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "b102a7dc8ff670eaacc86ea07727b0aa"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "257a222bf3e270300ca3057f9c52c8b5"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "3476fb694864d327b872087f9b0bea7a"
  },
  {
    "url": "Coding/Front-End/Security/開新分頁.html",
    "revision": "dc3a8fa00d57f357e630ec09febdea05"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "61698b907a4d249eb3f26841c3775c6c"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "9b7887e17a6db353443da7fbccac5b76"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "1a8d37c443620b0ee077a057a0ee1da6"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "50f95d97c2023e21d8276ecbab6a476e"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/index.html",
    "revision": "5e734f5b2d37ae0dbeb326bedd126d08"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "56ebee2e73174bf41ac5aa8face491f4"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "afd0cef24ca099656a104bedb09a9fed"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "c73e042463a9fc463d79038ca43b0491"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "044961014535298c59722fd220767468"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/back-end.html",
    "revision": "e6c8723a4aa70e5bee26258e8d07afa6"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/front-end.html",
    "revision": "41347b4677d335ae9d56012c758a4440"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/index.html",
    "revision": "87a3851141e73f7f33a257a6f8b25c0f"
  },
  {
    "url": "Demos/index.html",
    "revision": "19c8ef9818b33d664c51c875d7b7a261"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "dc48d4addacad5ab493e3ec84689c1e0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "cc02193674b8047106988907dc85db31"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "31a55b824b1dbde7bcce9bacd88ecde6"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "e8b4960e8191c57766de08839f2b8634"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "03545334377168f371def6d29a1b1575"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "c9867d069ddd8e8a7397cf0394be7f04"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "e2985042a250e642253529102db07c2d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "453b51c13fbd002a75e710c0e79dcccf"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "bd181921894376a10e0af922e3a70f5d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "e4e34bdbfda21d7f3805c1abd59457f7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "28f26062f17c53946ac87f17ee4ed8ce"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "72ccb2d285ae823607f0700c5a0b8fd9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "9fe2324cbe88f7ecdc301c0142c77403"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "b3a62ae8af31e8004ae8552937d89ee5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "25af9fe7024753903004e5029a778b73"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "15459980104d0ee0f6b902dfbdfa6809"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "c26aaed63cf36b49595d200c458cd7bc"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "b6da14095c8663f684c577bb2d2d9248"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "d4573b7c3e4c584d44c096eecb62e874"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "55c67c30cc0c0089c71c6830458de788"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "f56a876b53ef9e787e3cb03173639286"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "c8a928acb5701768d099f08c7781b273"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "d97a33b582b735b084543d8818a9b5a9"
  },
  {
    "url": "Game/FEZ/5. 3on/3on共通玩法介紹.html",
    "revision": "dff9fbc86e8d5c8294c46a9484dbc982"
  },
  {
    "url": "Game/FEZ/5. 3on/3on刀玩法介紹.html",
    "revision": "7d187eefdb728425ef8c1bf6761afa16"
  },
  {
    "url": "Game/FEZ/5. 3on/3on大劍玩法介紹.html",
    "revision": "e119a4797a589266480066a478bd7e2d"
  },
  {
    "url": "Game/FEZ/5. 3on/3on雙修玩法介紹.html",
    "revision": "904c5d882528d31d0183804f60995bde"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "aa434a59ae0908afef432ba766864d60"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "019ba210142e5ecf20fc1030ca208cc7"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "497d3fd9b9f686c335946228858e5865"
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
    "url": "img/fez/3on/map_setting_GL.png",
    "revision": "c6fbc725be934ce444c4ac781d63cbe4"
  },
  {
    "url": "img/fez/3on/map_setting.png",
    "revision": "9dc22414004f69ca2aaf5bf56ff39a10"
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
    "revision": "8d4ec6419334e50208078284a10f5049"
  },
  {
    "url": "search/index.html",
    "revision": "da834e4b0b35e13d528009e68b13a258"
  },
  {
    "url": "tag/index.html",
    "revision": "2f29a710fb85c923446e360cce3d08ee"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "8e6784534211721ea0a4d0986cbcaf99"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "ed69e70ae1c09b0ef4ebfc8b24ff696b"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "23b5493f5a7b40e7ea117f923a605ef0"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "14ebbc4f7882e7be292825538e38287f"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "fdcf552277dee9151c5f00429db52dcd"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "c6e0daba83b71a659dddb163625839cc"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "0016437b50e7416750a8647f3b7048e6"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "d33c55068d516d6491b3d35bd8b38daf"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "53cdc0dc4dc293877248be69469ca126"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "843e4bffde8cf2416c03fe701ed712e7"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "51f2a72c6bee901a23dac7b572a7f2e4"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "71f680aa8e8cfa52cc3b340966210c70"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "c92cc23dc7a5039c2f8cfcf29554fc55"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "0823bafedf882e9c583ec19aaa5ea9e5"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "3bf69d3a09c7429f7d9ce5c2623fb0d7"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "87bfa9629cbdc31c7f5aa008b1f80114"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "78247efe6792f0f1677c11e5065e560a"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "3b3e2465b09e186589ba99cdc00d57b9"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "a4d8b3dd95cc409469122a40da61a2bf"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "48b267ade5e67fd4a2c73bdd5cac65ab"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "db969a7a503501cfaa58e97d24df32bc"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "7fc1d197ce01831433f5cde6d865ee3a"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "596e8bfe0152c0884ce3c9fff08c1dbb"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "374ec062801b76fc1bedc1faceadb7a8"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "a4c00aee78f71eadac2d5762531821e2"
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
