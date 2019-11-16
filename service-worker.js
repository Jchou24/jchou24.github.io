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
    "revision": "ac4062ef3465455889bcb3d91b3e7625"
  },
  {
    "url": "About/index.html",
    "revision": "9b099fbc3dcc24834a4a447a33037de2"
  },
  {
    "url": "archive/index.html",
    "revision": "f4b309e4a54cf312e9d285ae89cefd32"
  },
  {
    "url": "assets/css/0.styles.4ec16ec4.css",
    "revision": "a59ed4f7c474049d67d70fcb992a1cb8"
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
    "url": "assets/js/1.ce681c44.js",
    "revision": "3d81a3760a383e2c6a81673073449851"
  },
  {
    "url": "assets/js/2.3deaf0cf.js",
    "revision": "e7aa672b8b93acde53d9eeca0fb6fd87"
  },
  {
    "url": "assets/js/3.afc45633.js",
    "revision": "d10c7f35ca0b6b997b85b2c758e6b188"
  },
  {
    "url": "assets/js/5.5643127b.js",
    "revision": "a45f673569a642aa6c54b1e9f940e80a"
  },
  {
    "url": "assets/js/6.9ec8bbf1.js",
    "revision": "5ec59a4967f431076597a05292a4f892"
  },
  {
    "url": "assets/js/73.04c66de0.js",
    "revision": "ab4f3cdfec0aab7e269c18178feae5ae"
  },
  {
    "url": "assets/js/74.38d2b446.js",
    "revision": "0ed6491672714b8736a5512da88efeb3"
  },
  {
    "url": "assets/js/75.44687274.js",
    "revision": "8ef112aa705b24ae3b87803e35d0fec0"
  },
  {
    "url": "assets/js/76.c0af4921.js",
    "revision": "4e28e367fb1a422c367f9381fbd22bff"
  },
  {
    "url": "assets/js/77.94e8ee3a.js",
    "revision": "7c2098b02b526d874080ccd53cf0184a"
  },
  {
    "url": "assets/js/78.a307b1e6.js",
    "revision": "8df3d43a0d66881d7b73587383343958"
  },
  {
    "url": "assets/js/79.c166788f.js",
    "revision": "fc6d0e4d5a288e3fa11f1faeec7eccd3"
  },
  {
    "url": "assets/js/80.900a0858.js",
    "revision": "1abd34e5f70a291b4f1858ccbe493b1b"
  },
  {
    "url": "assets/js/81.c4715bf4.js",
    "revision": "34252d494b73acf264f20b4b682cfd05"
  },
  {
    "url": "assets/js/82.fde11470.js",
    "revision": "1938f6d7480d1f2b9a312e26e1aabc6c"
  },
  {
    "url": "assets/js/83.50444977.js",
    "revision": "e61392ad4dfb1ef3b9c102b15a1f5fa2"
  },
  {
    "url": "assets/js/84.57aeb4a0.js",
    "revision": "72298596322fe8699f3b6f002fb4b6d0"
  },
  {
    "url": "assets/js/85.ca14174f.js",
    "revision": "c7c5f42f01291a9394cac545674d3dd1"
  },
  {
    "url": "assets/js/86.fea1e6ee.js",
    "revision": "362608b9596cef5cf26dec3e3ed498eb"
  },
  {
    "url": "assets/js/87.b076d0f9.js",
    "revision": "84cf6cd43669cdf7d242816f83595f26"
  },
  {
    "url": "assets/js/88.a3f60a22.js",
    "revision": "db1265d153a0ef847688ec4047490e0b"
  },
  {
    "url": "assets/js/89.c6261d62.js",
    "revision": "95627c28b8dcbbe5be88dc0d50137f03"
  },
  {
    "url": "assets/js/90.2767dea0.js",
    "revision": "6dc58868940702da0e5a0047a154f601"
  },
  {
    "url": "assets/js/91.3781fff8.js",
    "revision": "7eb5cb54b7679d8e65c3ab2c26ee620a"
  },
  {
    "url": "assets/js/92.e361f450.js",
    "revision": "0f1dc1eeefd320ca5a1f2d6cf286db3a"
  },
  {
    "url": "assets/js/93.54cb3f26.js",
    "revision": "99033fe926996ee48c19404475355340"
  },
  {
    "url": "assets/js/94.5459a42e.js",
    "revision": "191d77811cda40382f092429b1d47f7d"
  },
  {
    "url": "assets/js/app.0ea8dc7f.js",
    "revision": "597685b7f80c6071117dad8b53b18716"
  },
  {
    "url": "assets/js/layout-BaseLayout.0d9f7e4e.js",
    "revision": "31e4f752c566b6cd2de2c967664a03dd"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.43788849.js",
    "revision": "ab54310021bfe9c4d300a56e61f9cd47"
  },
  {
    "url": "assets/js/layout-Layout.630f3ef5.js",
    "revision": "39bd0c2a9542c50f5ef0666dc3a103cf"
  },
  {
    "url": "assets/js/layout-NotFound.7c350f6f.js",
    "revision": "a9c4f501235fba13b0fa52466aeecc59"
  },
  {
    "url": "assets/js/page-01b1365c.e26be4cc.js",
    "revision": "8e90d93978d0e82a21dfb8e30bd05658"
  },
  {
    "url": "assets/js/page-03ff99e4.5ae567ab.js",
    "revision": "d362edec5fccf6a350f1d663245744f6"
  },
  {
    "url": "assets/js/page-0762cb2c.cedee720.js",
    "revision": "4f2258517579f4f72628c40e653281d2"
  },
  {
    "url": "assets/js/page-0815fe43.01b67d3e.js",
    "revision": "541284ce83d9a3a638fbf7d2a573b762"
  },
  {
    "url": "assets/js/page-0994254e.4f90d0e4.js",
    "revision": "287b9b083133b9ad1309a420651d7dfa"
  },
  {
    "url": "assets/js/page-09cfa20f.495ec0af.js",
    "revision": "955d8820a666e7f615c5612e4c7e3c1b"
  },
  {
    "url": "assets/js/page-0bd5cd98.8317de47.js",
    "revision": "633fed40f3c586598b2d66da5e082c61"
  },
  {
    "url": "assets/js/page-0ca8b05c.f0120213.js",
    "revision": "f7d3145ba4898b90d89e478530606e18"
  },
  {
    "url": "assets/js/page-130de14f.361b8975.js",
    "revision": "212d629a0b134aa3884f700695f311ca"
  },
  {
    "url": "assets/js/page-17916170.dcbc07c9.js",
    "revision": "766af0153fcb0eee0eb08f75e6f1493a"
  },
  {
    "url": "assets/js/page-1efb5c62.dab669db.js",
    "revision": "7ae51ee83168568409f2c6f0ff98aa6a"
  },
  {
    "url": "assets/js/page-2282a6e0.2c8f21b0.js",
    "revision": "f98448d6fd32ad417c0fea077294695e"
  },
  {
    "url": "assets/js/page-2ba07fce.95da3da3.js",
    "revision": "7154aceee7b5a718ca717fffba682bd6"
  },
  {
    "url": "assets/js/page-2da25f49.808fafa8.js",
    "revision": "78612cca2c60a18f1b71c38c4072f73d"
  },
  {
    "url": "assets/js/page-2f77601c.de0f4214.js",
    "revision": "ea7cf183ae9ac37ad404bf0113e6ddab"
  },
  {
    "url": "assets/js/page-36058925.07250ec1.js",
    "revision": "ed9a3fe301359332f9221843e2cf639f"
  },
  {
    "url": "assets/js/page-3721e5cf.42c4ad1e.js",
    "revision": "c2cffd0cbe34a83e3bf0a056be81dbf9"
  },
  {
    "url": "assets/js/page-38e94d3e.553343f2.js",
    "revision": "22c4db8c16e6fd67e0208a16873dd198"
  },
  {
    "url": "assets/js/page-39d006b5.43deb79c.js",
    "revision": "ab57ef159a5ba12ec0bbff4c08fe3189"
  },
  {
    "url": "assets/js/page-3b1778e4.eaa773d5.js",
    "revision": "9346429ba56f2dbc51247450adf49c20"
  },
  {
    "url": "assets/js/page-4048f79b.04779401.js",
    "revision": "14294e34f4d159ae6571cc69e1684417"
  },
  {
    "url": "assets/js/page-409d673b.ef2cd811.js",
    "revision": "f89551d088b80cecf03ce3f1987d397c"
  },
  {
    "url": "assets/js/page-42a0ea7c.764a551f.js",
    "revision": "ce289f520649607d5bf905c78d4afefd"
  },
  {
    "url": "assets/js/page-437f73dc.f669ca92.js",
    "revision": "cc0b40c4c8f2103b8309f9b27f3d195d"
  },
  {
    "url": "assets/js/page-4773a0fc.57dc68dc.js",
    "revision": "52e7a611307b7ae5d5f4e63b275b3722"
  },
  {
    "url": "assets/js/page-47ec31ef.e489794a.js",
    "revision": "099c44e9f71d07d8ee5451c3a529618b"
  },
  {
    "url": "assets/js/page-494b7749.e6467b4f.js",
    "revision": "a2ea99f1a8d3d41602ab5e729d305460"
  },
  {
    "url": "assets/js/page-4e40ef0e.2daf87fe.js",
    "revision": "694dd8ffef2a7fedc551ed8309f85dc8"
  },
  {
    "url": "assets/js/page-4f5eb00c.6bdb05e6.js",
    "revision": "57a4b9eb7a76f1435b29239ea527516d"
  },
  {
    "url": "assets/js/page-52453899.6585245e.js",
    "revision": "3e3499d666d17dfca999269692f66e1c"
  },
  {
    "url": "assets/js/page-53a21bc2.205948f2.js",
    "revision": "ca2368bc4644e05654285926b20c82b7"
  },
  {
    "url": "assets/js/page-548dbfdd.33e5a4dc.js",
    "revision": "b9fbeabf47df2149229ff5b67f2cbc3b"
  },
  {
    "url": "assets/js/page-54cde949.4dff9825.js",
    "revision": "c6fdb6915e0b58749f94c425afd52298"
  },
  {
    "url": "assets/js/page-56c5add8.295a5883.js",
    "revision": "35b92e4f90037a44936c60f79ea9eed2"
  },
  {
    "url": "assets/js/page-5971d062.038187b6.js",
    "revision": "2f5af363356a0a75eb95aa01523d2cf0"
  },
  {
    "url": "assets/js/page-5ae76184.deef24c0.js",
    "revision": "d7f88335a2a1f9a882419a6cb8bd9428"
  },
  {
    "url": "assets/js/page-5c24028f.1577376c.js",
    "revision": "1f5e373ed5455c88523936072a9cdea8"
  },
  {
    "url": "assets/js/page-5dade32f.252eb149.js",
    "revision": "9e1312a57b6f06c2cfbe75a90e2b5edf"
  },
  {
    "url": "assets/js/page-62c3f84a.b22b2e9d.js",
    "revision": "70fcf56c06713fd6be2a1b8922b1c828"
  },
  {
    "url": "assets/js/page-631831dc.5ff1d646.js",
    "revision": "e8ab8c8324efe7e368c5b413a81e4abc"
  },
  {
    "url": "assets/js/page-64c6c3f9.a0ac123c.js",
    "revision": "fa5dbad10f427ce26321c730218714ce"
  },
  {
    "url": "assets/js/page-68a3e126.f7b978b8.js",
    "revision": "18d071bca762dab6154077b4c156f51f"
  },
  {
    "url": "assets/js/page-718e3f13.d527cac4.js",
    "revision": "398730718bb59aea26936b946ca7c9b2"
  },
  {
    "url": "assets/js/page-7961fc62.d6d296b9.js",
    "revision": "eae2c5bc56fdf88ca4660e25839ec292"
  },
  {
    "url": "assets/js/page-7e22c02f.0907920a.js",
    "revision": "5491aa8984173c9388ac98c13c029d85"
  },
  {
    "url": "assets/js/page-7f4c69e4.4fac498b.js",
    "revision": "58f4092261b3a70d45b0bed585901ce4"
  },
  {
    "url": "assets/js/page-9a13860a.0f8cab91.js",
    "revision": "8286dfb4a00fd9753287a0f558f65de5"
  },
  {
    "url": "assets/js/page-9d704b70.0fb862fe.js",
    "revision": "536aa3044bb76d6afca489b92db4ad17"
  },
  {
    "url": "assets/js/page-a1c83fc6.7b1b2046.js",
    "revision": "0cd757d4deab5f763c656a753ac54d19"
  },
  {
    "url": "assets/js/page-a649c29e.0c36555d.js",
    "revision": "11100c46ea9c463fa1e1b417b2d9c668"
  },
  {
    "url": "assets/js/page-b6123e24.5c9d8ec2.js",
    "revision": "fd0f278876d37adf2141c1448714f5ae"
  },
  {
    "url": "assets/js/page-c1e7a5fc.7835d93f.js",
    "revision": "f611dc517e82466fac45aa1eb4a27623"
  },
  {
    "url": "assets/js/page-c41b383a.25904278.js",
    "revision": "49af4b5b3839a186d5ec256b0a1bd517"
  },
  {
    "url": "assets/js/page-c799e3a4.41987749.js",
    "revision": "e73a20c154bf5ff6166ef76b9a7cf6ff"
  },
  {
    "url": "assets/js/page-cd03364e.dfd06f72.js",
    "revision": "f09edcf095491d1254abb0776780bee3"
  },
  {
    "url": "assets/js/page-deb70f94.20a9adb4.js",
    "revision": "90c08ead4788c2a200ef86953c935541"
  },
  {
    "url": "assets/js/page-e63bef64.af8bfe80.js",
    "revision": "352aa7acdacd46cb3c097893b49de0d7"
  },
  {
    "url": "assets/js/page-e869018c.af6c1610.js",
    "revision": "93cf9d34b669142ddc3bf5c44ec9aa6a"
  },
  {
    "url": "assets/js/page-e87fecf8.c3a0a9af.js",
    "revision": "eaec8c7f1ac505355413da84cf821623"
  },
  {
    "url": "assets/js/page-fa2e9ecc.19ce9960.js",
    "revision": "ccbab45efb43f5e7f0a451da08b7fe25"
  },
  {
    "url": "assets/js/vendors~flowchart.6827768a.js",
    "revision": "628c7250629bafeec66acb4d4f4c918a"
  },
  {
    "url": "assets/js/vendors~layout-Layout.d71d504f.js",
    "revision": "c8428ab650950a6173fa266dcb419a08"
  },
  {
    "url": "category/index.html",
    "revision": "f67e3f94dd4c47d8961601ded25330dc"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "63abf9e4076e2622ca5f0185c3a09c13"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "0bd65cea986b979df520122fd13561de"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "851a5841ae06251c0b67f4084fd02140"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "89e420512c8388f93db2aed4786d206c"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "0b0cd3ff946bcbc189f800be80dcd0d2"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "f231e3c93d8cf44b63fd9d4205ebaebb"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "6ff7ee64b95cfd4d120576fe8b87ac3c"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "7a9e21c8b2beea20695da243e69530a2"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "0d26909f07586ab36114f7f99cdc8f5e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "5af3ea5e0f785ed93b76da4b5e06c241"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "d494217955a0c4be3bba614453eed264"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "c3f1105310203ac75a48988617398ab7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "2959fe02cb8f9f6e6e8f4d1845b42a64"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "27e2270f82ab3fe06a806dd71b17f8b6"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "a6bb81b7d9382b488b699c0eda07e3e3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "4bdc7d649bf3436d142accce3ce5375c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "0ebacd24d3ad5f86c0b237cf792cc690"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "1ff9eb6bc3e13f61a7fe6e552854f97a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "e0b157cf624add757298acd7a133f594"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "4a7e8a199170844565a2f42d337ad257"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "1e642c18472aa9818f34deecad28fdbd"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "0abf611d286b30ab451c056b5772db7e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "aa889de2303911d539803b64c361937e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "bde05e317dcc62341ad6d8343b7152f0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "d4c1e88597602b14b440592de2b8f909"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "318091c8d9cac7fab4d7cf2167534730"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "a17bdf7a860514d7437b0613ed27d223"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "69739c1b02577e790991521b585093fd"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "564e8337e02deef67f51ecc9137c14c1"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "80e9ceb8fde62278ad880af71f429a3e"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "6ad6c73bb6f0249a91dc6d0a4576854d"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "40194bc2235b42a58a6080b7ea44525b"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "b72da06d81917f3b1cd910fa5eee2239"
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
    "revision": "b09a442438098ebf77dacffaf103ea58"
  },
  {
    "url": "search/index.html",
    "revision": "7299990bb6b69005ee6b32c0525fa499"
  },
  {
    "url": "tag/index.html",
    "revision": "13391518a72067780e3e0cee370e2d6a"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "90a5659dbd60a3301d40b22e9e7a9cdf"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "1107f57423a614d69c15bf9e66ae7bda"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "81abd31a74c9802feffd7653474bdc44"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "b16c8d9f6cd8c2865e1c175395d5678c"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "fa1a39430b7d1f5e552b7b598e835c6d"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "ae266407c19130742e8361d5714b27d1"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "e82a42e27b8f628374f9864901e6b6cf"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "dbdd947be3df23a6f52192c980f85c33"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "4a5097dd315e1e26cac46e5ac7afad43"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "6378e822a50a99a8bd3757e84c06d3c1"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "f069e3b21ddf813ee871d65302d9b3db"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "336574804cbfb85c48c5c77aade36af9"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "2d815feda1d2c1a53a5f9c0cfd72da39"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "7989a355c1c947da2e57d4138f833544"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "4ae1f033349cc4a49b29f85285232d06"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "634bdf4863e52990475758d3897eff43"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "afda80f297223bd53428878cb6a98ab4"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "1bc6add66b303b9e58cb79e563d8b71e"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "bce56e040c9ab81094c13240ca856ddf"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "a8f0f92715635a65a6184e1dca7d4ced"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "331b8d478fe1460af462d23281a280c2"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "5eeccb1fbf306cdfcd92bd5ffbd742f6"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "9f50b33c8445d739c684c3318785e9f4"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "d66bc446d68e08f88366636f4546430a"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "f4889323e191003802d947ab94533b00"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "9c7f7ca1ad2fcadf1081714fab59a176"
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
