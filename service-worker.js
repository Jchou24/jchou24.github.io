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
    "revision": "fc036b352697d2f740a3937cd5adb420"
  },
  {
    "url": "About/index.html",
    "revision": "b35bba0af2d2647b314ce741c3aca414"
  },
  {
    "url": "archive/index.html",
    "revision": "d135048e6b66b171819a0203f80884a8"
  },
  {
    "url": "assets/css/0.styles.f0e7cea7.css",
    "revision": "dd0de86f6d1bfcca0b7272a489756032"
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
    "url": "assets/js/100.71613571.js",
    "revision": "e7839a02155e3c8cf80649c228b3735a"
  },
  {
    "url": "assets/js/101.c9391e67.js",
    "revision": "b0727e3e86e059fd3546aa92901f61f8"
  },
  {
    "url": "assets/js/102.5305e594.js",
    "revision": "ba68518c401432b2d1cf9f1ccd7a3b39"
  },
  {
    "url": "assets/js/103.8bff28d7.js",
    "revision": "46ccaebc1696a4a727515764a83756e6"
  },
  {
    "url": "assets/js/104.56264ce6.js",
    "revision": "7f5877dfc7a5eaea92d28db1e150d27f"
  },
  {
    "url": "assets/js/105.348be6ad.js",
    "revision": "4227edfeaf7b01a6361bae4026d6b88f"
  },
  {
    "url": "assets/js/106.6a282699.js",
    "revision": "35c3a3adceb8f7a3ddc345a5e3cbcd47"
  },
  {
    "url": "assets/js/107.10705983.js",
    "revision": "45d00819dfffaa3136f6f1550c438648"
  },
  {
    "url": "assets/js/108.5dd8c8a4.js",
    "revision": "2d5ce0f6243f198c97a14174c3f740f2"
  },
  {
    "url": "assets/js/109.5e265067.js",
    "revision": "2b5ca4b753432bbb312651d4da946ab7"
  },
  {
    "url": "assets/js/110.62f9567f.js",
    "revision": "55742f028c0ba6b39ce50dbd8b5a6af3"
  },
  {
    "url": "assets/js/111.d753cc89.js",
    "revision": "29139d58e36465331ca4dbb0898b4d27"
  },
  {
    "url": "assets/js/112.5342a375.js",
    "revision": "95f6dcb8d25a3047d12f1dc74d9c231d"
  },
  {
    "url": "assets/js/113.aadd7e59.js",
    "revision": "002e566aa498590b348c6fb4f5e0d6c8"
  },
  {
    "url": "assets/js/114.18ee4f1d.js",
    "revision": "4493ec6a9b7bd88b38388782d1233687"
  },
  {
    "url": "assets/js/115.20f12b1d.js",
    "revision": "06a1d91d5890154db662ef1dfa2dc11a"
  },
  {
    "url": "assets/js/116.5200da32.js",
    "revision": "185e42a5459aa252b565cd3aa0e97362"
  },
  {
    "url": "assets/js/117.1e77c5b1.js",
    "revision": "334d3796db042f4ac07e4588efb50f5c"
  },
  {
    "url": "assets/js/118.ba53a274.js",
    "revision": "8a205622ac4ba0c8ed529ad2b04a7106"
  },
  {
    "url": "assets/js/119.122d3d25.js",
    "revision": "bd189bcc9eaf9325d4f89e114157e938"
  },
  {
    "url": "assets/js/120.70a1e8a6.js",
    "revision": "05940a9bc5c4beeaf92c17c677775c4a"
  },
  {
    "url": "assets/js/121.6a9b3840.js",
    "revision": "7c963c63263d03a61e8cd52df727bce2"
  },
  {
    "url": "assets/js/2.fe5781d0.js",
    "revision": "a08313653b77b200359c7ff1f810f78b"
  },
  {
    "url": "assets/js/3.00466cfa.js",
    "revision": "7546530de6f4deced56eaceefebc6366"
  },
  {
    "url": "assets/js/4.ba3508a2.js",
    "revision": "e9288e16a8cf2bafb446239b709d1a0f"
  },
  {
    "url": "assets/js/5.60baeb67.js",
    "revision": "5b8d9ee461f38070ea68f2e5265fbdd5"
  },
  {
    "url": "assets/js/6.441fbabc.js",
    "revision": "42702391e3fc666a7f1b14d33b34c276"
  },
  {
    "url": "assets/js/97.6e2cf321.js",
    "revision": "7757f80f9c7a95d5a1230fe40e9a4f2c"
  },
  {
    "url": "assets/js/98.562cf511.js",
    "revision": "ae4ab3bde64db0a60811db4cc3003e31"
  },
  {
    "url": "assets/js/99.03d576d7.js",
    "revision": "f471f02c83368880b70514ef2651daca"
  },
  {
    "url": "assets/js/app.7dd5f4b7.js",
    "revision": "80d35a33bb15787ff8c6411e87abb935"
  },
  {
    "url": "assets/js/layout-BaseLayout.c5429969.js",
    "revision": "7b58efb1ac92aa0f30014e4c0fd51fc2"
  },
  {
    "url": "assets/js/layout-Layout.e71431c6.js",
    "revision": "9d3d3bebaae09c68eaf62875533ce640"
  },
  {
    "url": "assets/js/layout-NotFound.f2bad2bb.js",
    "revision": "c264b94365a8493cabe725ee3d100f84"
  },
  {
    "url": "assets/js/page-0193e625.824663d0.js",
    "revision": "21ab9855486ee526d4febba54f2018d1"
  },
  {
    "url": "assets/js/page-021b3aa4.bad79faa.js",
    "revision": "1b328a8e4aa1953ea8e0c305525fb909"
  },
  {
    "url": "assets/js/page-0a921c99.ba719550.js",
    "revision": "c565e8e141961cd59651bf0a79c154e8"
  },
  {
    "url": "assets/js/page-0c6c4d65.f4a06ca1.js",
    "revision": "bd411181e4ea7fda4f8373a2b1bc0ff8"
  },
  {
    "url": "assets/js/page-0c7f77bc.e8a6eea3.js",
    "revision": "c7cda64ff2eb5e18d30bbe0e641e16d5"
  },
  {
    "url": "assets/js/page-0d32e5ee.0a6a1a63.js",
    "revision": "04e80217067d8828d996625662feb3b3"
  },
  {
    "url": "assets/js/page-1080dbe2.71260e62.js",
    "revision": "46d1fccfdb4bda509b5c509665b0df4d"
  },
  {
    "url": "assets/js/page-1a34eb5d.667c26b7.js",
    "revision": "b82609522dfe6862a9794c4dc0e80041"
  },
  {
    "url": "assets/js/page-1c4a4e12.58bb2cd7.js",
    "revision": "e5675212f2aef991dcceb7d57936f988"
  },
  {
    "url": "assets/js/page-1ccc22d8.4028a49c.js",
    "revision": "53b1b5cda8caf2ede6c49620b785a2ab"
  },
  {
    "url": "assets/js/page-1db42de8.4ad93c91.js",
    "revision": "b21eb637a1b8a8ca1c1954bcb4e5052f"
  },
  {
    "url": "assets/js/page-1e536af9.d0bad6eb.js",
    "revision": "ed71b8fd99f68e981be52dd9ba6c97e4"
  },
  {
    "url": "assets/js/page-21fcb945.33b64f5d.js",
    "revision": "311e758f76e1274fd212850afedbd75a"
  },
  {
    "url": "assets/js/page-25bc4f18.fc4a7794.js",
    "revision": "bce0698636a3e0eab89ad55ead9c6fc8"
  },
  {
    "url": "assets/js/page-27f6ecec.3c29daca.js",
    "revision": "dacf2090b764ba42d44e2089749ffd44"
  },
  {
    "url": "assets/js/page-29c918e5.06e8f324.js",
    "revision": "64d9dd5756a6407fc6467c36b47a4872"
  },
  {
    "url": "assets/js/page-2c6bc4ab.47f1f38c.js",
    "revision": "64694b5a05216c38b2d8600d65a99fb3"
  },
  {
    "url": "assets/js/page-2e8c0cd0.02015307.js",
    "revision": "b128aed590857fe957be15d5de191a0e"
  },
  {
    "url": "assets/js/page-320aac86.6acb3cc7.js",
    "revision": "e0edd83624127f357747f1628c7b8fa2"
  },
  {
    "url": "assets/js/page-339369e0.70c9b2f9.js",
    "revision": "e1810e69e2eb3ea5dc1c55b727f08a8e"
  },
  {
    "url": "assets/js/page-36d5d2b3.97f1cdf0.js",
    "revision": "89c952ea43be7f250d8cffdba7ccb91c"
  },
  {
    "url": "assets/js/page-39e05f8b.2f1aca80.js",
    "revision": "ddb8dcca837fe307ac0e447430f04d3c"
  },
  {
    "url": "assets/js/page-3c8dbd4b.696e0d7d.js",
    "revision": "20e364c37e021198263c30b00b6868db"
  },
  {
    "url": "assets/js/page-3cdc4745.f576b606.js",
    "revision": "398c988b6eb1a9568e0f0988293d0fdf"
  },
  {
    "url": "assets/js/page-3ff73aa5.84cb2650.js",
    "revision": "e21baf6ae8be663087ce92f5d8916e79"
  },
  {
    "url": "assets/js/page-4144513c.b84598d4.js",
    "revision": "5739ea307026cff91b4fa1f461e5f975"
  },
  {
    "url": "assets/js/page-422a7e52.cbb7ae03.js",
    "revision": "c27ec095e70aa6c549a6a28b05e1a707"
  },
  {
    "url": "assets/js/page-445c88ce.cbea5bb6.js",
    "revision": "17aefdf5904314d77b82e28ff3f229f8"
  },
  {
    "url": "assets/js/page-4478a866.d59f85af.js",
    "revision": "44be662e59ee6192a6a94cd30f92e4fd"
  },
  {
    "url": "assets/js/page-455360d1.b5581c51.js",
    "revision": "3217ae1f557746ea4be1aaa1f64005ef"
  },
  {
    "url": "assets/js/page-47f71914.7e15db23.js",
    "revision": "0bf0e09a4f84b89205ab8a6b0da49846"
  },
  {
    "url": "assets/js/page-4829d184.9570be46.js",
    "revision": "aca540a22cfe3fb29108d0522cf53fa3"
  },
  {
    "url": "assets/js/page-486aacae.ad957450.js",
    "revision": "ddaf9b1452412c294075dc38a7232489"
  },
  {
    "url": "assets/js/page-4d521b14.65439554.js",
    "revision": "70169f3b5386e0e29c04d9ad10cf21b5"
  },
  {
    "url": "assets/js/page-4d7e2aa5.0edc5871.js",
    "revision": "c20ec2586c9652e39c13944b43538532"
  },
  {
    "url": "assets/js/page-4d9fba32.208846bd.js",
    "revision": "8eedfa9b244c19a87a02d19e5bab12d2"
  },
  {
    "url": "assets/js/page-4dc00f25.f7017365.js",
    "revision": "e2047dc63815a415d5e7c87e91c00ca4"
  },
  {
    "url": "assets/js/page-4dc54ba5.2e9c78e1.js",
    "revision": "198ab88036aaec1b80dc5cfe2fbacddd"
  },
  {
    "url": "assets/js/page-4df429d2.3c5530dd.js",
    "revision": "e25b73070d6dae7525e4ef7951dd9059"
  },
  {
    "url": "assets/js/page-518ca8d8.5d1bd74d.js",
    "revision": "d98df2fce531afa5cc9a42fa1359c78f"
  },
  {
    "url": "assets/js/page-55a376be.a2320e53.js",
    "revision": "724e6f899a4f6395e0aa8db7c3d72555"
  },
  {
    "url": "assets/js/page-59cd63bf.c9b4ae9e.js",
    "revision": "4ca8a2e429c85fc2a5086de08fbf88af"
  },
  {
    "url": "assets/js/page-5cdb680e.4d4aa188.js",
    "revision": "c46bf8bfb3a48f589d466e93718e2282"
  },
  {
    "url": "assets/js/page-5de41bb6.37c2a12b.js",
    "revision": "8e47585c16fc17ae67d70c5c2bc7328c"
  },
  {
    "url": "assets/js/page-5edad598.7825766d.js",
    "revision": "8fca572ec8df4566924a41c423435f6b"
  },
  {
    "url": "assets/js/page-64a9a694.5156049f.js",
    "revision": "d7b35e106700ce5c2d804a1ce71819c7"
  },
  {
    "url": "assets/js/page-66061c06.ce80b7ae.js",
    "revision": "424fd5549e757bfec6d2d15ff6dc17d3"
  },
  {
    "url": "assets/js/page-6890df9a.0d0617b5.js",
    "revision": "90edf35695302c9eb87cceb524ab61a4"
  },
  {
    "url": "assets/js/page-68b44e7f.8bac159a.js",
    "revision": "a9c588facf64a6000c565f78a3a3a136"
  },
  {
    "url": "assets/js/page-6dbff0ea.30a93d4c.js",
    "revision": "c6b432b0e1083b2fc8ccac82c3a5e53c"
  },
  {
    "url": "assets/js/page-6f7fa8b4.0f559178.js",
    "revision": "525099d5a0bdaaf33406c33dd7d303bd"
  },
  {
    "url": "assets/js/page-70612fe6.fd7c9081.js",
    "revision": "1929f7eefe1abdd1c2eb4e6639d598c4"
  },
  {
    "url": "assets/js/page-720c8312.c03795bd.js",
    "revision": "bb740747b034b30b82a986d2c619b2eb"
  },
  {
    "url": "assets/js/page-74a44f51.9a29a519.js",
    "revision": "914c675325030ce8562db8a4f1380477"
  },
  {
    "url": "assets/js/page-7507c3f6.e43834e3.js",
    "revision": "9fd0d3d75b972dc85bc0b6a10c8eca6c"
  },
  {
    "url": "assets/js/page-7690c622.0522dca9.js",
    "revision": "104a491ad2dc590199f9f68b09374d39"
  },
  {
    "url": "assets/js/page-7bfb30a6.edea8ca1.js",
    "revision": "aa39ef4f0ea889de29674398b01324ac"
  },
  {
    "url": "assets/js/page-7d3a6963.f83f756d.js",
    "revision": "4959fc4815da18d88f1f352ab6b8a5d7"
  },
  {
    "url": "assets/js/page-7e6b5e12.b4f8e36c.js",
    "revision": "c669d668ca45ace32b072893b5142ee7"
  },
  {
    "url": "assets/js/page-82c2c642.d3557387.js",
    "revision": "00e2e4a6d2417f61a22cdfd868ac846a"
  },
  {
    "url": "assets/js/page-85f4c948.7bc190b5.js",
    "revision": "6d4ff1f1935dd5d403709780836f8053"
  },
  {
    "url": "assets/js/page-8892394c.99fbda65.js",
    "revision": "cf44553c112189111caff9d697109305"
  },
  {
    "url": "assets/js/page-89b130dc.91bdbd9b.js",
    "revision": "4cff76d686665c9675983689a4218df5"
  },
  {
    "url": "assets/js/page-8da9df6c.08fb46b9.js",
    "revision": "483fee5789927a9013251a7b103f7b4a"
  },
  {
    "url": "assets/js/page-916af89c.dc62db8f.js",
    "revision": "57f12412cf0ab7fb18fcf5d9dcd3986f"
  },
  {
    "url": "assets/js/page-9a2a43a4.6ad8f225.js",
    "revision": "3b121191b8f50e815c3a892ff3947b5b"
  },
  {
    "url": "assets/js/page-9ec1a766.517e76ff.js",
    "revision": "cead7ad799291a131e1b1a9c27de5dce"
  },
  {
    "url": "assets/js/page-9f0190e0.1ea99986.js",
    "revision": "9a90790549a22dcc75b0edcfe2a4c475"
  },
  {
    "url": "assets/js/page-a6174872.e11c5c98.js",
    "revision": "e5c4739a9d131af1bb94ba4858723fa4"
  },
  {
    "url": "assets/js/page-aab392fc.96b8a70b.js",
    "revision": "21a8c391e5b5e7a66176cd913790b481"
  },
  {
    "url": "assets/js/page-ace574d0.7502416e.js",
    "revision": "01978a9a3c314c76b93b204dc91833d5"
  },
  {
    "url": "assets/js/page-ad24ce34.36f93bf1.js",
    "revision": "971460f4092e128b46be8aa1d8eba95b"
  },
  {
    "url": "assets/js/page-b0521034.36c8b697.js",
    "revision": "404677e40ceb817b937e09b3bcf7eda6"
  },
  {
    "url": "assets/js/page-b0d90ce6.1b6f77a7.js",
    "revision": "1ac710ddf3bbe77c253b4eff16f6a28f"
  },
  {
    "url": "assets/js/page-b40de7ce.d8aefdfd.js",
    "revision": "7eb5e717c13bf141b8bf459c82f216d0"
  },
  {
    "url": "assets/js/page-c26b0310.42373edd.js",
    "revision": "fd1ddce2baa13385a0d93c5da4cd9a07"
  },
  {
    "url": "assets/js/page-c4bdd70e.7f834b8a.js",
    "revision": "ae8bdcd8dd471b6fbd87605257d2b98d"
  },
  {
    "url": "assets/js/page-c5f1a60e.8696e6af.js",
    "revision": "3fdbb17415128de558e2db3d5844623e"
  },
  {
    "url": "assets/js/page-c60be50a.af3aa7cf.js",
    "revision": "3b49d7c84db9b87997d22248dc7f8f42"
  },
  {
    "url": "assets/js/page-d6c4343e.8bc7553c.js",
    "revision": "c9af2878244f1fd2d2964de529da3b87"
  },
  {
    "url": "assets/js/page-e468b710.b1b2fb0f.js",
    "revision": "f1ae75df1e1909e97066b65fe56591e1"
  },
  {
    "url": "assets/js/page-e72e49e8.09c9ff85.js",
    "revision": "dc7bfa835e252a7aa115f1257a2d1984"
  },
  {
    "url": "assets/js/page-ed303fba.c8042edb.js",
    "revision": "783fd3dcb29c65f06a605f4df1f99efb"
  },
  {
    "url": "assets/js/page-f313c186.00169505.js",
    "revision": "aee5d1594f85737672e8917ac25cbe60"
  },
  {
    "url": "assets/js/vendors~flowchart.3b184799.js",
    "revision": "e3a525acd9c81f6cd66613c778ec8785"
  },
  {
    "url": "assets/js/vendors~layout-Layout.128401f6.js",
    "revision": "aedf998521258d157e4a9deca85df180"
  },
  {
    "url": "category/index.html",
    "revision": "9b89873c3a83dbe43e69ec393dcfb6b6"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "b1b90758162fa9fc4f2f09d29e2f3a30"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "f6e928d7a57a5ca40e9fdeea3e509747"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "23ba63556e3840f8cd8dbad43efa07a3"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "29c02276a5aaeca07d45fe0bb3ebd125"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "d66ac6350282e913a3dfadb1e45ce303"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "48cbe4c029cde253522a243cd41a8542"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "5b2d012930c4e361ba3c408a97085825"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "2d6e37514e7db97d29eb675ee54b00e8"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "5c0b6f01d0364a1f6a17dcb86ce93d71"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "952e9982ed24b2089623c99a0c0cca89"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "7f445a1fab29cb1e25e7379e6f0701ab"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "26b1cc1a15e881e2ecbf76bc43da64b7"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "e65e10818c18e4b3173da0cc9f104cde"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "eec9ea39bd8de725902f30721c3d0978"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "e82ea8e117c5ebd35e9391414b74fcf0"
  },
  {
    "url": "Coding/Front-End/Security/開新分頁.html",
    "revision": "3f46a0edfb1065eea6dcfed958b39e48"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "8ba3de5697602d53c9ade2de1850944f"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "0c3905ecf3d653859af1209743eaf1d0"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "d48beee5fc6a8f570e30275d131794a8"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "ecb6fcc5c452c750d8f07c3a977dec56"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/index.html",
    "revision": "51a2b5a5b37a9d7d5821f2af341c72cb"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "b1f7d4bb8ec0cef989171c73390e419c"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "15ef8e8088793a78e80d87ab76a21d09"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "139c85864ca1775af2df16c3d7281000"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "c232d00983e67ba89540ab4b80041310"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/back-end.html",
    "revision": "f9639f16d8b7a99d8bcca616bd552fcd"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/front-end.html",
    "revision": "ff3105e45a80e8145c38d1cbb65934fa"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/index.html",
    "revision": "03a3a68a7492b89bbf38dc38c787c166"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "829acdc562787641dc6a8c1da0866f9a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "a432ef01374fca505d1f813133a699d7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "5a01315bc8d130477a2d3b0e27cae0ed"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "d9d52dfcfa3ec4be0e92ecf98bb3b318"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "fd729ecf3daaeb438a41b3063e68a296"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "6449823c4b534d8c58f31285e9fb31df"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "d581694f5a501d9fc4245b9082649ea2"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "dea0318bb8935b790847c90f34f8fa2e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "f93c85042f73632ac6588d82d84c6f49"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "8c53c9ac10ad14bbac1d7abd328d9833"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "80742073b4882be6e230559164d1316b"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "8991c2030378e89047c3d9cfd8ada4d0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "39b80fc3d9d7ec89626b553c79b4dd7c"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "a4a0eaefba31e099e96d78ebf05b79d6"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "8d5a6c465ba4861a43065fa69fc1328e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "ac8854a8d24650e3659f25491c750b99"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "d6a885ba8541bf2529702fa4078ed536"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "b333180586df65d7171e4bce6c6a1573"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "b02b9aff0eec47bf07c09e8fbfd36c93"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "1039d7bc09e8383f65b614639ac21e19"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "4e7ecc1195cd8743f1b07e6b2ead2ce0"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "5f308c34c42d0f8af78129700d526290"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "aac08107668b8e6ea75566a974ed6cda"
  },
  {
    "url": "Game/FEZ/5. 3on/3on共通玩法介紹.html",
    "revision": "f47948ed0219f72f319aa0577cd02dbf"
  },
  {
    "url": "Game/FEZ/5. 3on/3on刀玩法介紹.html",
    "revision": "23f584cf252c94d209916547fb9462f8"
  },
  {
    "url": "Game/FEZ/5. 3on/3on大劍玩法介紹.html",
    "revision": "b0e82480eea6d86272242f601983bdbd"
  },
  {
    "url": "Game/FEZ/5. 3on/3on雙修玩法介紹.html",
    "revision": "df3b49c257a33c3d8c3ffe4e5e6728b2"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "183f85a9f9ba03b2f7c15d825308eec6"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "a6c30619a5524143f1d5a26fc08d93e4"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "caca2a398ce4e4eafd7a773244212e26"
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
    "revision": "d7fa5b40b7c4a74247d031eb4c755dfd"
  },
  {
    "url": "search/index.html",
    "revision": "cd5887e7fbb52f706b0683e9af47df85"
  },
  {
    "url": "tag/index.html",
    "revision": "fdb9af81986f6c83048c4d3bf492d9f3"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "12f7b8bd13352c86e28b25b1f88f971a"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "d7c165d17b09be5a08ecb690d02ef511"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "daf861a75d62b792280f6442486fd685"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "fd032fb906646861c7d4ca3f4958b78d"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "0bc2f4d9f87bbbb97cdf614a0ea90cf2"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "ca3b2603d024768858690639d6f66186"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "cd06ec950360618b85a8454d69eaf1d9"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "6e7e3d33953e8de95e8a7694368d7f32"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "6212e0bd751ca7e8064589ed6ebeac70"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "dd68e10db9f4ce6ba386dc03dafe1888"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "dd3585700988993df5f130864c194ba3"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "ab7802645aeeae4e578507bbade67fbc"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "1b58aa3fc9e6caff73404c56ca4476cc"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "308c902f58f037095a7ab581cf4655db"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "702a03be0610ddf4cb48e39377794dbd"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "23acf2ec9acec9ab28089dbb6a21a692"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "65b97fe44344cb2ddcfdf25c6047d3e2"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "9e0eb1764ad7312717d5d850ce1f44c6"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "dae293877f99c420259104219d4c0ddc"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "e03bf616b48e88a2bab9cb28ff10ea90"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "c935006bba80bb4a58dbb5b630ae4b1b"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "360f4e650450456eb3de6a2357cf40e0"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "3d949547179865809ed0178c914da6c9"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "0950645e20b281b266a590228e124396"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "3ce423c5cc3f1190f82392c21de8e1b4"
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
