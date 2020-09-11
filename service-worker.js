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
    "revision": "752f043122712622e34a246df6f217dd"
  },
  {
    "url": "About/index.html",
    "revision": "a897ab59aa4fb5db99dc5af712228b69"
  },
  {
    "url": "archive/index.html",
    "revision": "f19482bba212262190e50b2bcb3003b1"
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
    "url": "assets/js/app.2fa62fd3.js",
    "revision": "0b3dddda94474c1596eca49d734ee9a5"
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
    "url": "assets/js/page-0193e625.08c2b100.js",
    "revision": "5d54c2fcc4763d32305804a6f2add255"
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
    "url": "assets/js/page-0c7f77bc.b73443d8.js",
    "revision": "ea155a58eb11b4fec2e8e5a8005dcbfd"
  },
  {
    "url": "assets/js/page-0d32e5ee.a7fdb7ba.js",
    "revision": "3a56bcfc9e159a148b4d13377edadc80"
  },
  {
    "url": "assets/js/page-1080dbe2.54895e39.js",
    "revision": "ea646f09dc2850e9198c8e59d79611c7"
  },
  {
    "url": "assets/js/page-1486eb54.a4774822.js",
    "revision": "dd2021df6e35b9b35ddea03cd2ae087e"
  },
  {
    "url": "assets/js/page-1a34eb5d.23ba94e3.js",
    "revision": "9442126ef07833543cfe10dede29da40"
  },
  {
    "url": "assets/js/page-1c4a4e12.49e049c7.js",
    "revision": "7bc4664b01f9db9f1b095ebbddf0444d"
  },
  {
    "url": "assets/js/page-1ccc22d8.1e7e6797.js",
    "revision": "b971465bbed72cfeb0ba67f2d0e7d65c"
  },
  {
    "url": "assets/js/page-1db42de8.de3dc94c.js",
    "revision": "0a2f8d6553e08b92e569a27769ab4ee2"
  },
  {
    "url": "assets/js/page-1e536af9.f11970d9.js",
    "revision": "4b11717dcd8f585ac9c11ada22c7bd77"
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
    "url": "assets/js/page-2c6bc4ab.237d7d03.js",
    "revision": "c98e1cab7951bcdde480ed850c079861"
  },
  {
    "url": "assets/js/page-2e8c0cd0.2967f3f4.js",
    "revision": "ff80e34f0fd3cc4eaa7133e9765a4d5c"
  },
  {
    "url": "assets/js/page-320aac86.1873529d.js",
    "revision": "958d85f69594931588c5c623497372c5"
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
    "url": "assets/js/page-39e05f8b.2e215aee.js",
    "revision": "0c3ef8059eb04d6912059f3b33f7a000"
  },
  {
    "url": "assets/js/page-3c8dbd4b.36795149.js",
    "revision": "3d0f47310ce0d0dcff4cae66fb6d3a22"
  },
  {
    "url": "assets/js/page-3cdc4745.fe927cad.js",
    "revision": "ec817699f098e4f5e3602fc5dbedb28f"
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
    "url": "assets/js/page-4478a866.30a28c7d.js",
    "revision": "064bd20aa0abcb77fd232c6534f0a116"
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
    "url": "assets/js/page-4829d184.808b9b9a.js",
    "revision": "b38d8fa55f291ce52554836df7fbe24d"
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
    "url": "assets/js/page-4dc00f25.ac6f54f8.js",
    "revision": "758814a87eedaea2b2ba104f2700f7fd"
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
    "url": "assets/js/page-59cd63bf.31747e9e.js",
    "revision": "8f2f6e0ae841bca30ea7c472f7fde7d7"
  },
  {
    "url": "assets/js/page-5cdb680e.df41ad85.js",
    "revision": "a8a24f3095ffb9fc42f2468360f4ea8c"
  },
  {
    "url": "assets/js/page-5de41bb6.edf8fd5e.js",
    "revision": "cb99ae3fa9c0a0f05918610f0e6cab9f"
  },
  {
    "url": "assets/js/page-5edad598.aa5131b7.js",
    "revision": "80533029a2aea45e493d2cac3663b28b"
  },
  {
    "url": "assets/js/page-64a9a694.5085628b.js",
    "revision": "5af437dcb3effc7fa0e72319ca47f56f"
  },
  {
    "url": "assets/js/page-66061c06.95eb11e5.js",
    "revision": "cefa310b24ac41ca43935a0c4b22bb35"
  },
  {
    "url": "assets/js/page-6890df9a.56fef304.js",
    "revision": "79efe1cae8a81451d0db53d8352c9a8d"
  },
  {
    "url": "assets/js/page-68b44e7f.69c87d82.js",
    "revision": "fff66eabdbc3197fe6ad0d02f382f86e"
  },
  {
    "url": "assets/js/page-6dbff0ea.5a549477.js",
    "revision": "7f162b8715e27d7fc363f401bcf9e428"
  },
  {
    "url": "assets/js/page-6f7fa8b4.e3308d2f.js",
    "revision": "827fd6a3538f5c9b1d3d3f4c3e514d1e"
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
    "url": "assets/js/page-7507c3f6.ad3b8721.js",
    "revision": "5d899f929f50af5ef6a5d4352abba50e"
  },
  {
    "url": "assets/js/page-7690c622.18bfe8ca.js",
    "revision": "da1ef7017f10d6965d4c6bc4f7a96938"
  },
  {
    "url": "assets/js/page-7bfb30a6.26074d78.js",
    "revision": "84dc237278bfcac3a13ac3589b998b18"
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
    "url": "assets/js/page-85f4c948.0d6cb205.js",
    "revision": "9b97665d0c1615e43453175cb9aab542"
  },
  {
    "url": "assets/js/page-8892394c.5fdc81a4.js",
    "revision": "f7d73c936a1d2cd51e5421f34204621c"
  },
  {
    "url": "assets/js/page-89b130dc.af64f032.js",
    "revision": "7de4cee7c01d0f20d37d8e04cefa3ef8"
  },
  {
    "url": "assets/js/page-8da9df6c.8c34e88c.js",
    "revision": "527c7488aaae21ab31722b78c9c00692"
  },
  {
    "url": "assets/js/page-916af89c.492b3390.js",
    "revision": "e018301eaef723072ee14c960cf9a4c1"
  },
  {
    "url": "assets/js/page-9a2a43a4.f657c13a.js",
    "revision": "f97bf451ee79d40210f772cefd85d010"
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
    "url": "assets/js/page-a6174872.64df5d8d.js",
    "revision": "912ec221bba0fdaf1b10e04c4c12e50e"
  },
  {
    "url": "assets/js/page-aab392fc.3f79b0f9.js",
    "revision": "e844ca847dfb56426b05fe8ec66d5f9d"
  },
  {
    "url": "assets/js/page-ace574d0.e1cbb0cc.js",
    "revision": "2b8c571150b7b32b1b82d3f2943f28f4"
  },
  {
    "url": "assets/js/page-ad24ce34.bdce7adf.js",
    "revision": "587d9f977bcc73751261ac695c55e478"
  },
  {
    "url": "assets/js/page-b0521034.405cfde8.js",
    "revision": "01f3311068e6ff67dea732a50b8dbb2d"
  },
  {
    "url": "assets/js/page-b0d90ce6.bce88f49.js",
    "revision": "05a6e0c37608c3c65569b39b6a3a9916"
  },
  {
    "url": "assets/js/page-b40de7ce.d97bd097.js",
    "revision": "3fec03d1c34da3e72720134b26a61e93"
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
    "url": "assets/js/page-c5f1a60e.40726302.js",
    "revision": "b243e1fc7d3bf3e5551554deba1d632b"
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
    "url": "assets/js/page-ed303fba.a68d96ea.js",
    "revision": "3e29dcd5a21e49e9ed76e180226a5a95"
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
    "revision": "ac94e5a191d9b215bc25c689d385e472"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "febe0031db37503d2f469141e2eb5949"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "7592a424f11aac66557ade5162e203e1"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "2ce66c872c1bee31682d2d63a9f938e4"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "b5f7de51ab9382eb10823bb4e1d8cd1d"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "6df22bce53ed2b538f596390653c52fc"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "227286777e02ccbbb0395d0e9d0aa0ce"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "6da8f10627629ab6b1f728aebf73e891"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "0797111f363e64eb7f518334a03acdb1"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "b69af5b0eb3a269e1fae552bb1ee8e34"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "5152ccd626cbec1e9608f9c062230882"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "d7220613f5904284b4bee0e810b94c0f"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "5a566f936990c1dbdd45211487e4b33e"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "0deb82f2c441c3fdb42e451e74d4a27b"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "f368230f2095ad2e6c54ff6d5072d8bc"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "6c05656f7eb1e7fc6d82df03e5bdfed4"
  },
  {
    "url": "Coding/Front-End/Security/開新分頁.html",
    "revision": "a0b6b4600c490c13b17b62058f8f7e83"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "eff0f159e3da4dedb78ead67bd666454"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "abfc6ef5ce56f9152f2c8df5e071b65c"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "4ae8beae71863c71b2d92429ac76799b"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "747b7e7fe0ed78a5a8c885a8c783bdc6"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/index.html",
    "revision": "01f8910292a4bff5aca13bd15abf137b"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "3961edb46c6ee4b2286400df7a4aaeba"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "04632e65786d1f34b5b5110cce1e7035"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "e9c4344255970d02199cf1f71c44acad"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "eabcb18a9f50d101a80e3f57fd3e088d"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/back-end.html",
    "revision": "903651f834a575b36dd5091c688254d2"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/front-end.html",
    "revision": "8e0d7563141ba277c0bf79931e24160b"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/index.html",
    "revision": "6da5f9abffbf7d0b57d7fded2f42ce67"
  },
  {
    "url": "Demos/index.html",
    "revision": "7f18018f270324ec491c4fe2ed71799b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "4823e2840bfcc670cffff76abf182b24"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "d1961108aed1c1ab08d3581d23a38567"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "43f7b837b59a74ebcac2f557ef8a7c1d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "1c7d36098e19e89664060dc3f8d6968c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "68b703aad4cbf74080e062d315f041d4"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "de5a78494637bb741b38a354f11a30ea"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "83daddb94e65865ca4399c1439b783e9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "7c49e7f7470ec271595a7e3d551f0db9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "26b81a3f7e6bc2f134765c9b914afc26"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "9413702636bee259ddc3d36df847ecf3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "c659d1f4d279a2eb9c5d947d78530363"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "587fb235acdba006a8e16682f247a8a8"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "69256951b196260cc8769ea8b1a323d9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "dfac069cfdbfb831a68fc7db06f0fa14"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "bc5509513765c9b0b349f6e746a2633a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "76ae3b49d5ec8c22c23ba08e947009eb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "0d5ab0d7d614359eea7e0f21064c4442"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "c8ff4edec88587f207e57efc4f9393c8"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "c7914cb678ed3e316238fe46ba119cca"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "87d6c3b44733dbf7ff3b2b8c278cf6c8"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "d62c393207d524e1e4f92d1284831bd8"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "f1cb4d537995173a74939d96bbf41bc8"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "9be8560e243b3fb8fb924ede0213df03"
  },
  {
    "url": "Game/FEZ/5. 3on/3on共通玩法介紹.html",
    "revision": "dfa46c09a6d195c6d3787ffa19e91f96"
  },
  {
    "url": "Game/FEZ/5. 3on/3on刀玩法介紹.html",
    "revision": "726f7cade1903810631e724cebce7244"
  },
  {
    "url": "Game/FEZ/5. 3on/3on大劍玩法介紹.html",
    "revision": "bf93f38b720dc8df059c2842959be378"
  },
  {
    "url": "Game/FEZ/5. 3on/3on雙修玩法介紹.html",
    "revision": "51e7a0d60ec2e64184a1e0b7835e64dd"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "8097e90bfe788d579c71e075ed567c29"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "fcfa3c9709add27569ec1daf6e41d86a"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "9c7103bc95a8de9c955259d23269a7a6"
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
    "revision": "0ff5715121311129d126404fc3d1831a"
  },
  {
    "url": "search/index.html",
    "revision": "583c246d6369862d3868dad3023eac3d"
  },
  {
    "url": "tag/index.html",
    "revision": "f482caa643d6ea6ae0c1ced0f330aed2"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "7efb46ef832df71d83f65dff632ac3f0"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "590e1f7fcfdae03e3717156a9086956c"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "77909a0dcd6180b802696db280f26818"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "bed54032c87970c4bcda213cab7ab638"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "3d09e13a1ded1b64bfae555f4d96ed61"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "abcb95f093e58e02f5b4544bc27789fe"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "5b8181febab7c35a9bbe1cc3a85ff64c"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "ca6f1a7689f6e47218aef01feb7f87ab"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "500da38290a285d62d6fa80ac6f87ce0"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "c36ce8d3fc4a050efb63648363d2530a"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "e41f2a24587da0ea6941e6e420dc4acb"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "1ea5d1997bab4b8f40f2424d970bcbb4"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "1fe156e74a307f38b90f75c47b74e054"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "ebd34a3c69a90117dcb4167c24b6defc"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "242303115ffd29b7f5fd18ebdf84de56"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "d839465692792fcf9fbeb86dc108af3a"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "0da04cd9041f6f1f52302c3e0eeae21b"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "f572a89fd0a1332e1e7998df60fd0e09"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "4244a83f8d9dbeeedcb276fb4c84f47c"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "5dd036c66db7940c33ae540040f5e987"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "d74ea3956acd28c5981bc784f1e75bd2"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "6073d646b434ffde95a66a47c507363f"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "0a33c4c93c2fa69de924f2ea9bb54f07"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "be014a5791a0e8cb16c5472ea03d72d3"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "22a48c6c227a089026ddd6339cc13d5c"
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
