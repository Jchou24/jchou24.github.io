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
    "revision": "288714ffca3e6dda0b056d0004656511"
  },
  {
    "url": "About/index.html",
    "revision": "5bd9fec0987686dfdc8bcd7e95814f87"
  },
  {
    "url": "archive/index.html",
    "revision": "58c53288b38afc9e16143580d060425b"
  },
  {
    "url": "assets/css/0.styles.f78d105b.css",
    "revision": "504f540ad0dcd1812c1f40eae20f71d6"
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
    "url": "assets/js/100.dce25699.js",
    "revision": "905f3ddc031aa4066374f35a3b22837e"
  },
  {
    "url": "assets/js/101.c9391e67.js",
    "revision": "b0727e3e86e059fd3546aa92901f61f8"
  },
  {
    "url": "assets/js/102.63adb51b.js",
    "revision": "bd23f065f8e66b68a0c85249a1a06c06"
  },
  {
    "url": "assets/js/103.9ca8d1d5.js",
    "revision": "8ca979f1f7f7615f6e2baec16b31e2b0"
  },
  {
    "url": "assets/js/104.e7f083bc.js",
    "revision": "11a430a76b9d84f2b227d866cdcfb5a7"
  },
  {
    "url": "assets/js/105.98cf4316.js",
    "revision": "933d050c454504d22d4cbb21a76fccdd"
  },
  {
    "url": "assets/js/106.5b07860d.js",
    "revision": "88341dfd07b7fd6b2bc64a8d0362257a"
  },
  {
    "url": "assets/js/107.bede3657.js",
    "revision": "8549eb4b882a1dc2b1f6a5472fb8bec6"
  },
  {
    "url": "assets/js/108.a7915cba.js",
    "revision": "39026fc8945105a6bad33b78ea105329"
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
    "url": "assets/js/111.b8a535a0.js",
    "revision": "7fbe8bd8d117185fe9794944b5988172"
  },
  {
    "url": "assets/js/112.5342a375.js",
    "revision": "95f6dcb8d25a3047d12f1dc74d9c231d"
  },
  {
    "url": "assets/js/113.4d908dd6.js",
    "revision": "8a75d56ac88bc27b65b6a7a1ff8c075f"
  },
  {
    "url": "assets/js/114.bf33c261.js",
    "revision": "b7bf0e3a9433154a82e1f2968598ffb8"
  },
  {
    "url": "assets/js/115.b4b2ccef.js",
    "revision": "06ca12c7b8fdd98f1c6715f8cca4eff6"
  },
  {
    "url": "assets/js/116.1e62ddd0.js",
    "revision": "1bfa70d333aa06f0eed5d247d21f6556"
  },
  {
    "url": "assets/js/117.b6ccc7fe.js",
    "revision": "1169f55967dacb82a3ea09983c15a1d7"
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
    "url": "assets/js/98.aade59a6.js",
    "revision": "9b1dc783c25de84ad969d8cc3a0b036c"
  },
  {
    "url": "assets/js/99.03d576d7.js",
    "revision": "f471f02c83368880b70514ef2651daca"
  },
  {
    "url": "assets/js/app.32482ea3.js",
    "revision": "6b1cfbe9c327ca58647e80f6fd3fb138"
  },
  {
    "url": "assets/js/layout-BaseLayout.0989b0c2.js",
    "revision": "b02bae10ea90094fc3432d1f3da5c15a"
  },
  {
    "url": "assets/js/layout-Layout.aa8bcfdb.js",
    "revision": "f2fdaab30d63250bab125f87bb382e13"
  },
  {
    "url": "assets/js/layout-NotFound.ea21898e.js",
    "revision": "9b80883630c99eae1debbe7abd5039b7"
  },
  {
    "url": "assets/js/page-0193e625.85df3c6b.js",
    "revision": "737a69b43c68ddca3098658a2de793ed"
  },
  {
    "url": "assets/js/page-021b3aa4.6a198968.js",
    "revision": "c9729ca8c24cc24a997142a3ad72ac6e"
  },
  {
    "url": "assets/js/page-0a921c99.7f0136c4.js",
    "revision": "b615be16f53c87c55fcdc676e0c3cbc1"
  },
  {
    "url": "assets/js/page-0c6c4d65.f4a06ca1.js",
    "revision": "bd411181e4ea7fda4f8373a2b1bc0ff8"
  },
  {
    "url": "assets/js/page-0c7f77bc.b3a61720.js",
    "revision": "88f1fb4aa146cc83d574e82686d2f530"
  },
  {
    "url": "assets/js/page-0d32e5ee.fe4354b9.js",
    "revision": "73c7df8f152ed7b637a9f6698f4e8fab"
  },
  {
    "url": "assets/js/page-1080dbe2.62dfad78.js",
    "revision": "049fdeed607a13f4323470fdac1cdde0"
  },
  {
    "url": "assets/js/page-1a34eb5d.3bc1700d.js",
    "revision": "21aef44a643b2e09f03beada2d8ada21"
  },
  {
    "url": "assets/js/page-1c4a4e12.5c6ca163.js",
    "revision": "a0456441eb0052f43f6cd9520cd9d771"
  },
  {
    "url": "assets/js/page-1ccc22d8.8d0337fa.js",
    "revision": "6934f15d598b9652f3bb1ecbf4ebf167"
  },
  {
    "url": "assets/js/page-1db42de8.a3fac0fb.js",
    "revision": "9ef8a1cc78131ddbe314c3f7bea37c30"
  },
  {
    "url": "assets/js/page-1e536af9.880c550e.js",
    "revision": "a8e59f7052cfe75038f5a35d835ebf5c"
  },
  {
    "url": "assets/js/page-21fcb945.fa3ae524.js",
    "revision": "f8b96cd0875010db1b3ef0db456aa4f5"
  },
  {
    "url": "assets/js/page-25bc4f18.16ea9ebd.js",
    "revision": "eb165df7d4af07808c29612cfa209093"
  },
  {
    "url": "assets/js/page-27f6ecec.e20540d0.js",
    "revision": "3d9186911a806049169b7554a669d343"
  },
  {
    "url": "assets/js/page-29c918e5.523de284.js",
    "revision": "a7ec30ad0046670db27a6956bdac2d92"
  },
  {
    "url": "assets/js/page-2c6bc4ab.b50018a9.js",
    "revision": "fd9cf80e30a168abbed2ae93bed2b90f"
  },
  {
    "url": "assets/js/page-2e8c0cd0.3bb02813.js",
    "revision": "bcc12463d73802f6b57606ea7b354700"
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
    "url": "assets/js/page-36d5d2b3.19d8ae8f.js",
    "revision": "ce7139f24771c7e3bb0a9dc682b78567"
  },
  {
    "url": "assets/js/page-39e05f8b.57323384.js",
    "revision": "df4da5986a683506213c76da502daccc"
  },
  {
    "url": "assets/js/page-3c8dbd4b.946762e7.js",
    "revision": "ac32c92e2fe7eb0b268b0f87359888a9"
  },
  {
    "url": "assets/js/page-3cdc4745.d11911cb.js",
    "revision": "2a87eb931eddf7bf845bd60c8fa3e91f"
  },
  {
    "url": "assets/js/page-3ff73aa5.66893088.js",
    "revision": "006e21035d61d756a4138867f433713e"
  },
  {
    "url": "assets/js/page-4144513c.8502e35e.js",
    "revision": "98712d3845ec1ca01147235a7c6ebd8c"
  },
  {
    "url": "assets/js/page-422a7e52.cbb7ae03.js",
    "revision": "c27ec095e70aa6c549a6a28b05e1a707"
  },
  {
    "url": "assets/js/page-445c88ce.614e95d1.js",
    "revision": "04b7cbf0dc8b20fc3e140c37147b986b"
  },
  {
    "url": "assets/js/page-4478a866.c47890d3.js",
    "revision": "c0b238ae10dde0a00e3b9d49977f059d"
  },
  {
    "url": "assets/js/page-455360d1.d1118b6e.js",
    "revision": "e1e6656b8529fd2dfe3dfd5c2eac9174"
  },
  {
    "url": "assets/js/page-47f71914.7e15db23.js",
    "revision": "0bf0e09a4f84b89205ab8a6b0da49846"
  },
  {
    "url": "assets/js/page-4829d184.dd6e4df5.js",
    "revision": "472a1a286be62f13a5d4326c33517c52"
  },
  {
    "url": "assets/js/page-486aacae.761a66de.js",
    "revision": "e37dd0e148e1f836715dd9cff334db33"
  },
  {
    "url": "assets/js/page-4d521b14.2ecd6ff2.js",
    "revision": "f1e19394c77deaf76f28d4a9bfa7bc18"
  },
  {
    "url": "assets/js/page-4d7e2aa5.0c1003db.js",
    "revision": "255e4d9ded0fd1fb93428bced8cb0d72"
  },
  {
    "url": "assets/js/page-4d9fba32.cfce1bbf.js",
    "revision": "da4c542faaa57ce5ac8241ed83504e7a"
  },
  {
    "url": "assets/js/page-4dc00f25.c2f0ebac.js",
    "revision": "f177b4aeeb6d1ca28a5605f191b67942"
  },
  {
    "url": "assets/js/page-4dc54ba5.f8e00255.js",
    "revision": "2afd9024f193f83e16876fde8ab8f114"
  },
  {
    "url": "assets/js/page-4df429d2.381906c1.js",
    "revision": "0257fe975d105a216e9065c7bff2c4e8"
  },
  {
    "url": "assets/js/page-518ca8d8.6b2f233e.js",
    "revision": "f0e09aa7582beebe01f96aa66ff4033d"
  },
  {
    "url": "assets/js/page-55a376be.562c1f08.js",
    "revision": "0b123671224a4ded02d4be1679effb38"
  },
  {
    "url": "assets/js/page-59cd63bf.204642a3.js",
    "revision": "0a9a0272bff64518383455c00ec1c13d"
  },
  {
    "url": "assets/js/page-5cdb680e.4d4aa188.js",
    "revision": "c46bf8bfb3a48f589d466e93718e2282"
  },
  {
    "url": "assets/js/page-5de41bb6.b0fc2dd5.js",
    "revision": "b4c16539b1a7c0ca959444771d60751a"
  },
  {
    "url": "assets/js/page-5edad598.f0019879.js",
    "revision": "9f71dec833bbbec9f93531a111d2cc6e"
  },
  {
    "url": "assets/js/page-64a9a694.25261ef3.js",
    "revision": "c18d043eca48a03495fd92e4d716305b"
  },
  {
    "url": "assets/js/page-66061c06.75979da2.js",
    "revision": "11fc0e2abcc61436486834d545c4346a"
  },
  {
    "url": "assets/js/page-6890df9a.fea48a36.js",
    "revision": "41ed40e3fa9383e703c316f5e99001f5"
  },
  {
    "url": "assets/js/page-68b44e7f.13f99f46.js",
    "revision": "77d095aef57d34b301c7775426089702"
  },
  {
    "url": "assets/js/page-6dbff0ea.a36552ad.js",
    "revision": "dff73dae9e94f7ca1499e1c384985fd2"
  },
  {
    "url": "assets/js/page-6f7fa8b4.01a9eaeb.js",
    "revision": "dc8404fb6e5178136f7cd014438c50ef"
  },
  {
    "url": "assets/js/page-70612fe6.135a5e67.js",
    "revision": "e5fe0ed3391a003106d6a17399fa1a09"
  },
  {
    "url": "assets/js/page-720c8312.c03795bd.js",
    "revision": "bb740747b034b30b82a986d2c619b2eb"
  },
  {
    "url": "assets/js/page-74a44f51.fe56b90b.js",
    "revision": "bd2d5a457353914f842ea98cb02b0dd9"
  },
  {
    "url": "assets/js/page-7507c3f6.bbaacadc.js",
    "revision": "7964a244a5ba54e930080886b580d30e"
  },
  {
    "url": "assets/js/page-7690c622.a091a888.js",
    "revision": "3133d61f1a65460d876c4824c1851e75"
  },
  {
    "url": "assets/js/page-7bfb30a6.edea8ca1.js",
    "revision": "aa39ef4f0ea889de29674398b01324ac"
  },
  {
    "url": "assets/js/page-7d3a6963.57bb389f.js",
    "revision": "bbd84cbeed9a2bab605ccace98eaf9b2"
  },
  {
    "url": "assets/js/page-7e6b5e12.e98db297.js",
    "revision": "815beda0e0dbcdbf5e237f4ee79806d6"
  },
  {
    "url": "assets/js/page-82c2c642.68a424cb.js",
    "revision": "44ae604889cc3593b4c6556074ed1960"
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
    "url": "assets/js/page-89b130dc.f31dc193.js",
    "revision": "c44dc687a37ca8ed5030ca1b52141768"
  },
  {
    "url": "assets/js/page-8da9df6c.08fb46b9.js",
    "revision": "483fee5789927a9013251a7b103f7b4a"
  },
  {
    "url": "assets/js/page-916af89c.e7a839ae.js",
    "revision": "b4b4863a080d4816155bb99aae747aef"
  },
  {
    "url": "assets/js/page-9a2a43a4.c81b6975.js",
    "revision": "358abd0665aec94d89781dd9d921ff00"
  },
  {
    "url": "assets/js/page-9ec1a766.5522c6fa.js",
    "revision": "790ffd54f81d9c7b4283c58af3a67f85"
  },
  {
    "url": "assets/js/page-9f0190e0.b300f50a.js",
    "revision": "4c90204d37d2cc951f76d1c3499e0eef"
  },
  {
    "url": "assets/js/page-a6174872.fb9fe76d.js",
    "revision": "ca7f7a7fe2f51edec564e7a3475e0a76"
  },
  {
    "url": "assets/js/page-aab392fc.f5a4517a.js",
    "revision": "2cfff27ce82071396d454117f8303e00"
  },
  {
    "url": "assets/js/page-ace574d0.f4b5ba3e.js",
    "revision": "995b801993bc917b3d890bfa67780656"
  },
  {
    "url": "assets/js/page-ad24ce34.74b0b95a.js",
    "revision": "c9b18b784b54385fcb33fd9f1f0fbc07"
  },
  {
    "url": "assets/js/page-b0521034.55485564.js",
    "revision": "2561a3b632310a6e388a3ce1bbc1e06b"
  },
  {
    "url": "assets/js/page-b0d90ce6.d58ea932.js",
    "revision": "6a8e50f481f686f609cbf3c63099647b"
  },
  {
    "url": "assets/js/page-b40de7ce.d8aefdfd.js",
    "revision": "7eb5e717c13bf141b8bf459c82f216d0"
  },
  {
    "url": "assets/js/page-c26b0310.0534fb85.js",
    "revision": "e9777b8f4a317c65b203f44734819ea5"
  },
  {
    "url": "assets/js/page-c4bdd70e.dd9e7a19.js",
    "revision": "7d3545339f3ef59ef713553058c4e335"
  },
  {
    "url": "assets/js/page-c5f1a60e.c9674533.js",
    "revision": "035cffe5e9b6f9302caf88d4aa9982fd"
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
    "url": "assets/js/page-ed303fba.4cf72667.js",
    "revision": "975a554d139188a28ca4714ef9405099"
  },
  {
    "url": "assets/js/page-f313c186.74d7c970.js",
    "revision": "102c5137f136b1a7d31fe8b8b9f29035"
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
    "revision": "d28ae1a051006d2170dd31c9ad82fd4d"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "507bc0158246a16c82db7123252b8af3"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "660fb685ff1df37fcc5d27d10b4dffbb"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "78a2b88c16734173fa43a186e1eef600"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "de69b4f67ecb4542b6971dded22ed1c7"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "4f240d664fca7e4ad66cd324073a8141"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "ab6d2b68eab166901fea4f50bd0aea2e"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "e50c5526d42c22d4c0afe2f2da8a02b4"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "8993141579d2ed5beffa197c7c958ab8"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "48166b479cb9d14af8c19fba28bc5cbd"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "ccfb54a457b3ca7d664fb0d3dcf32873"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "ee6e12f060598f1e66a18f8d17582a2b"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "c6d82fbd443af42124b638ea76d6dcaf"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "8286e91c26e3089de2a0d634186a76e7"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "fbcb977435fd576d9c11245b81981213"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "09653d6f67d01d8e479c23514be64c9b"
  },
  {
    "url": "Coding/Front-End/Security/開新分頁.html",
    "revision": "3b44f5e9c84b4be47c25bba89eda152f"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "d466877bf214c6ec7327bade9347fb49"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "fbfbe21cf63c173710e9132d3af8b8be"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "72d9e65bb0dfbca5b0e3319060665eb3"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "47ba2c2ab455d3c320fb2c472afdc944"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/index.html",
    "revision": "342770c547c905b24f5bafb0311640d1"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "deb12407b191e4f2f28aa55ab60c106a"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "fa7de12dddba16be29b4cd42e6770736"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "ae5eab6d5399649b4b4bb12bcb3caa7f"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "cb6ece8629ecca7b3d809edcd12b9a47"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/back-end.html",
    "revision": "99aada983b0b5c786942d5b34f4d4710"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/front-end.html",
    "revision": "3007d33b386e6398e68be0a4aefe6850"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/index.html",
    "revision": "bd523a3c8a12c8dd3d79ecb086b76d88"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "e41ae07ec0f1088fb6ae9e92850e0ea3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "92b9cb68990cf55b104dad65d695aea1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "cea86a00d2b5db02ed2e6ddb1e240ef3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "7f8c71fd5db83e8014477d0b047ac67f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "d122a03234ee05eff7ca133f1bea0096"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "bc4c29fc12262460367780f95dcdb093"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "fb9aa46b06423ba3cdb4755ce0d31095"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "f5fe13c11a8dd51223a9d7511e9af5c3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "fbe34b1d6561b73b96425ad73566cf35"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "c05da2537ef3951f95c94bb5d6a7dc49"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "7ef6f6f10d003af3ab3e329036bee5d5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "64f519e5d26aa835ae8a8b96c77c91e1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "85839d9a3e26ef02ae39db76f9e627a5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "88435c4c586580efa2c5b4c0d3379e46"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "1df72d4180bc246af63b76b5a81405ae"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "650c19d22c976e6cee7e4f470159ce63"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "41594772142d0b1aada8d4d07fc9c3b2"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "4b79523d27664cb3adba0c66ddf6695e"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "58c7652a96750546f2c561eea549c061"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "9034c4bdad82063d90c92245eccb99c0"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "29851fc19bb24d58f94e717296e0de35"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "d705ee51af18b77c309325eb879a371b"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "b97a5f4dbff3ca29580614b86f04c7cf"
  },
  {
    "url": "Game/FEZ/5. 3on/3on共通玩法介紹.html",
    "revision": "71885a5e8a6480e8bfc80705a3fc3769"
  },
  {
    "url": "Game/FEZ/5. 3on/3on刀玩法介紹.html",
    "revision": "45fe929c83d55b0fb9ce1776cf79ca16"
  },
  {
    "url": "Game/FEZ/5. 3on/3on大劍玩法介紹.html",
    "revision": "71347d96fa3733aa43848a703bc59806"
  },
  {
    "url": "Game/FEZ/5. 3on/3on雙修玩法介紹.html",
    "revision": "b320ea40e9f5bc7da00821c221c08240"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "560dd93c0e63557c23c903773e187e4a"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "0aedc678bb6adbe59d35d1b47d27b4e0"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "353decd4ba9e2d4782951cc54a34d6cf"
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
    "revision": "ed40affae2f95a7933d8783b2acb8041"
  },
  {
    "url": "search/index.html",
    "revision": "a0f83a70311b687b6f9c3ec2126f2386"
  },
  {
    "url": "tag/index.html",
    "revision": "f87bec06fe1ade45848810d743a4d79d"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "2edd70403f49a3c83501d81738b87132"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "14c06ab323cd1c5ca31a2764a3c10b1a"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "efe252b080ca4ba07c229012de56378a"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "77359412127c94348b0ca07a6f99fcd4"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "7b5d7a70231b19557984b7e4f6a41aee"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "30c4a418c4d3681cd0e5d533f70aa74f"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "cf89e63285a4d7436885153f899502b5"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "69de4422007d9483f7f62689c49d073c"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "7fd969effc00a471a290e435cca7607f"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "91308a08f47b6905e741e04b94218bd8"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "520b4877434a944f9327a00a4378b276"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "3400ee0acf8249b7ed009578da426baf"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "27cc553840bed2e674073733ebd042ec"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "828328a103999096ccbdc52c5d3ddf18"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "9fac59edfc56b999bd5a4238a225c850"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "63266deee547a1889b0ae16d00cf538b"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "b2a28ffb814287313d449cbc46d1dd76"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "8524d46e88f3d4a301381c890aa834f5"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "e5848584f88051511e287f2349b2c94b"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "9fe3bcb7e56016f31f297930c45ede9a"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "d9b4214f8f04fe2b9702d2b231a2f09b"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "f460d4b5c2d50ea59e30fc126bf7a874"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "46841bf0f3ff54b13f1d06fa0887bcd7"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "a414a3201c93ff2c4316c8ad9b9118dc"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "8f7c63eb6d636220376e22f9048ab56d"
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
