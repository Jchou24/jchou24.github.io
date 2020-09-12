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
    "revision": "e291e7dc33c937204f5e3dda7c35bd40"
  },
  {
    "url": "About/index.html",
    "revision": "820ac0b84340ccf8c7b9616d8277c519"
  },
  {
    "url": "archive/index.html",
    "revision": "24428a5444785bc0cdc9fc715960acb3"
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
    "url": "assets/js/100.425cc617.js",
    "revision": "ee083f41f75eb5f42b2ee1997c720c01"
  },
  {
    "url": "assets/js/101.47791e8f.js",
    "revision": "228a621c5e7d9874ad41ac6aede71e76"
  },
  {
    "url": "assets/js/102.288abacd.js",
    "revision": "2be0941e088d631ff50e6e807de44137"
  },
  {
    "url": "assets/js/103.612775b7.js",
    "revision": "0b29e3cdaf9b5071a3cd2de0cb1425ff"
  },
  {
    "url": "assets/js/104.53487ab4.js",
    "revision": "f22bcf4226d7d1bd8ff71a2e926e4f64"
  },
  {
    "url": "assets/js/105.8a4e8818.js",
    "revision": "1b5626b8061c5d4059d6dbac52aa1abe"
  },
  {
    "url": "assets/js/106.a066cdc2.js",
    "revision": "8333c4c7fede08d6eba69eac38bc3165"
  },
  {
    "url": "assets/js/107.3292fa74.js",
    "revision": "afef4b9f2dcfcba53c25af2866cdaa8e"
  },
  {
    "url": "assets/js/108.831c4c6d.js",
    "revision": "25f2c52b540ed389af7e4366a5cc6a4d"
  },
  {
    "url": "assets/js/109.35781314.js",
    "revision": "00bce5a40ba0e08cd3b2076fd34f1ca3"
  },
  {
    "url": "assets/js/110.159f6a61.js",
    "revision": "fd28596c1fa137d692cc6ceb70b6c550"
  },
  {
    "url": "assets/js/111.035cb4ca.js",
    "revision": "bb0d3564c822c319c67f2f5036fcb0fe"
  },
  {
    "url": "assets/js/112.2db16b51.js",
    "revision": "616c8b1462c2578b7859c20c9c9da52f"
  },
  {
    "url": "assets/js/113.a35a9f31.js",
    "revision": "5fadcb70b737379dbc923fec6952b856"
  },
  {
    "url": "assets/js/114.e03015ce.js",
    "revision": "825f088f9cd9bb5c0896d7c3400ca5b1"
  },
  {
    "url": "assets/js/115.87e4c218.js",
    "revision": "5980ae1e13c96336bbb48625906fa97f"
  },
  {
    "url": "assets/js/116.1158aa66.js",
    "revision": "4f24ce41ee3560070f4cb76d1801c15b"
  },
  {
    "url": "assets/js/117.474b3151.js",
    "revision": "0db6e795caf9a4af16eaa982c0b8728b"
  },
  {
    "url": "assets/js/118.0e85a3c9.js",
    "revision": "3208f482ad808ee16a7d0bdf773dfed5"
  },
  {
    "url": "assets/js/119.260fa49d.js",
    "revision": "f7ae7a3975b9064fe24b890e6742c224"
  },
  {
    "url": "assets/js/120.8d6a80e5.js",
    "revision": "35e83aeb22b56cb178fa4682ccda9fcd"
  },
  {
    "url": "assets/js/121.c72af6f4.js",
    "revision": "47079911cb63d06f538d0e2f3b13767b"
  },
  {
    "url": "assets/js/122.2e327fce.js",
    "revision": "af3e7827b2fe38f646619294a55fe702"
  },
  {
    "url": "assets/js/123.3a1433a9.js",
    "revision": "fee5e7253310b6da9d8f45b51d42bec0"
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
    "url": "assets/js/99.0b9fb522.js",
    "revision": "6cc5c71e2d66fb56396c4c167d45db2f"
  },
  {
    "url": "assets/js/app.075bff15.js",
    "revision": "9ecc1b9a6f25fa9e99fbda0c6f8017c3"
  },
  {
    "url": "assets/js/layout-BaseLayout.0989b0c2.js",
    "revision": "b02bae10ea90094fc3432d1f3da5c15a"
  },
  {
    "url": "assets/js/layout-Layout.31efa6e0.js",
    "revision": "2f019a8b14f8a540c6056d1fa8439215"
  },
  {
    "url": "assets/js/layout-NotFound.f2bad2bb.js",
    "revision": "c264b94365a8493cabe725ee3d100f84"
  },
  {
    "url": "assets/js/page-0193e625.26722944.js",
    "revision": "372b3ed55171876c9a9d5308fadae1e7"
  },
  {
    "url": "assets/js/page-021b3aa4.73ff40b2.js",
    "revision": "77316e1308495accb46b4bd38d839035"
  },
  {
    "url": "assets/js/page-0a921c99.c0f656c6.js",
    "revision": "319a4931b491f9682e8cee090ebc34bd"
  },
  {
    "url": "assets/js/page-0c6c4d65.13bf6186.js",
    "revision": "4d584e18580482463abc5b55733502a3"
  },
  {
    "url": "assets/js/page-0c7f77bc.34fcd611.js",
    "revision": "b84286be0f2b5eef8e1aa5e1b4e1e7e2"
  },
  {
    "url": "assets/js/page-0d32e5ee.90bd9a7b.js",
    "revision": "a6289fd22e211ef01e32c6202817fd59"
  },
  {
    "url": "assets/js/page-1080dbe2.7bff18aa.js",
    "revision": "0d888c93718e1fc296f88c2059f80800"
  },
  {
    "url": "assets/js/page-1486eb54.eb486b37.js",
    "revision": "1db6a2917fe32bf04bdde11cb974496e"
  },
  {
    "url": "assets/js/page-177d640c.64a0c86e.js",
    "revision": "d7d555ba0d43805c5afcc2d004a4fb5f"
  },
  {
    "url": "assets/js/page-1a34eb5d.8584a659.js",
    "revision": "113375364520ad82a824bb942ff03294"
  },
  {
    "url": "assets/js/page-1c4a4e12.3eee8b7b.js",
    "revision": "713ed02f6f56390f0f00f6d5b720eb9b"
  },
  {
    "url": "assets/js/page-1ccc22d8.2934af20.js",
    "revision": "cc96f48f172da17df05c766c8eb2de9a"
  },
  {
    "url": "assets/js/page-1db42de8.c9b71376.js",
    "revision": "aed5772b6e6275ae4c503f99db071579"
  },
  {
    "url": "assets/js/page-1e536af9.64e2ffdc.js",
    "revision": "aebada746612d624ec078921e5bfadb9"
  },
  {
    "url": "assets/js/page-21fcb945.52727c19.js",
    "revision": "f49bec53c351aed1af507cb2998115a0"
  },
  {
    "url": "assets/js/page-25bc4f18.74c3314d.js",
    "revision": "6426c1f9d07ce5659967d679ab16392b"
  },
  {
    "url": "assets/js/page-27f6ecec.78bd3cd7.js",
    "revision": "c4ee453cc08b1b58815446b7689a9251"
  },
  {
    "url": "assets/js/page-29c918e5.572bcd5a.js",
    "revision": "39c7f68de70a31fd1e5b0d060e07c275"
  },
  {
    "url": "assets/js/page-2c6bc4ab.1422216f.js",
    "revision": "b1446bea5605790271a731a3731bc757"
  },
  {
    "url": "assets/js/page-2e8c0cd0.57a30e5f.js",
    "revision": "a47ef02a9ecebb0bad1f9bfbffdeb886"
  },
  {
    "url": "assets/js/page-320aac86.cb2da4ce.js",
    "revision": "fc0b85be1feae029928b2f617c3e80fd"
  },
  {
    "url": "assets/js/page-339369e0.f1d5fa05.js",
    "revision": "af9a9aac9382d1cecfa0cea6e4a54af5"
  },
  {
    "url": "assets/js/page-36d5d2b3.a6d987b2.js",
    "revision": "c08e6c763510b7240d4f83a39310f9e6"
  },
  {
    "url": "assets/js/page-39e05f8b.d3323dbc.js",
    "revision": "aec375e9257edb76d3ffd42469bd7f18"
  },
  {
    "url": "assets/js/page-3c8dbd4b.1b309692.js",
    "revision": "2948f63ce705421a817b2bd86bfbba6f"
  },
  {
    "url": "assets/js/page-3cdc4745.65c0f2e1.js",
    "revision": "afac04239f2cc988828c37382c0cd96a"
  },
  {
    "url": "assets/js/page-3ff73aa5.eeca5fef.js",
    "revision": "096d0e7e1616a57a076f7e0910b280cd"
  },
  {
    "url": "assets/js/page-4144513c.c41f04d6.js",
    "revision": "8b66aac28626d5d4b71b15fca8abc22c"
  },
  {
    "url": "assets/js/page-422a7e52.daf7e034.js",
    "revision": "a93c2645a4c35000c904aee29d2f3b7a"
  },
  {
    "url": "assets/js/page-445c88ce.58ddb07b.js",
    "revision": "1b2f2e7f5b2561c62c65e12e6f3bc359"
  },
  {
    "url": "assets/js/page-4478a866.b7908aee.js",
    "revision": "b6613129f1e04c05904dee2a90f2e7ae"
  },
  {
    "url": "assets/js/page-455360d1.4a350b22.js",
    "revision": "3c9024efdee86eeb82429fa783544990"
  },
  {
    "url": "assets/js/page-47f71914.2270e6b9.js",
    "revision": "f3d3919bac9ab3ef13bf03027b6f86bb"
  },
  {
    "url": "assets/js/page-4829d184.2ad7d775.js",
    "revision": "f5662e0ce1985d7a94814b60294060f3"
  },
  {
    "url": "assets/js/page-486aacae.abc5d45d.js",
    "revision": "d6989438ae7aa100131bd0cf8ec532e6"
  },
  {
    "url": "assets/js/page-4d521b14.80cc1153.js",
    "revision": "1c4634ae80008f112ac44e1b0166b692"
  },
  {
    "url": "assets/js/page-4d7e2aa5.a136490a.js",
    "revision": "6ca3fdc7419f6239716a4ddafbf0b138"
  },
  {
    "url": "assets/js/page-4d9fba32.39269e21.js",
    "revision": "40b7c04965f3e9f6620b1ab33757bd2d"
  },
  {
    "url": "assets/js/page-4dc00f25.f9102903.js",
    "revision": "0a9760fc82c6615050da923c7fb2297e"
  },
  {
    "url": "assets/js/page-4dc54ba5.654cbd06.js",
    "revision": "4859fe1be6b59b01728a45117b39d5fa"
  },
  {
    "url": "assets/js/page-4df429d2.669e619e.js",
    "revision": "9ed85271a7e823651efaebdea6943b2a"
  },
  {
    "url": "assets/js/page-518ca8d8.13a5b4f3.js",
    "revision": "fed0d860105f48f1f1569ce05babace5"
  },
  {
    "url": "assets/js/page-55a376be.750393cb.js",
    "revision": "cc6aad89526242e883cf5bc9d490ca30"
  },
  {
    "url": "assets/js/page-59cd63bf.663d43ab.js",
    "revision": "287db688e3a02a3d32fb11bda5a7f4dd"
  },
  {
    "url": "assets/js/page-5cdb680e.32e9ff70.js",
    "revision": "826021a308ee73f4b61704b9b088082a"
  },
  {
    "url": "assets/js/page-5de41bb6.f876baf6.js",
    "revision": "a64e4d598a01ef631a2e543b32f0eb5f"
  },
  {
    "url": "assets/js/page-5edad598.1e36255d.js",
    "revision": "983e4be884bb7508c86b2e50adfbdf3b"
  },
  {
    "url": "assets/js/page-64a9a694.84348a7b.js",
    "revision": "619cc916d214334336bb22c7529d1945"
  },
  {
    "url": "assets/js/page-66061c06.bc3bce56.js",
    "revision": "4575e4e0217343e51315cff46a53b330"
  },
  {
    "url": "assets/js/page-6890df9a.8ff58e6e.js",
    "revision": "62d0ef6d3cb2f85cce1a9cdae63d3874"
  },
  {
    "url": "assets/js/page-68b44e7f.f854bbe2.js",
    "revision": "3fc1cd62b272d9fba000d4e0a0601e38"
  },
  {
    "url": "assets/js/page-6dbff0ea.3a33ad32.js",
    "revision": "7bb957a0e5031ddc144c4630838f6f6f"
  },
  {
    "url": "assets/js/page-6f7fa8b4.3b31adba.js",
    "revision": "2cc1dd3397dacd10eaa5b5e7034aa845"
  },
  {
    "url": "assets/js/page-70612fe6.974fec9e.js",
    "revision": "f3b6bd43e71ad96795ef9fdbd9896c2e"
  },
  {
    "url": "assets/js/page-720c8312.0862e60c.js",
    "revision": "fc303d5c9618c409633d05d53677dc69"
  },
  {
    "url": "assets/js/page-74a44f51.fc8f7367.js",
    "revision": "c6e4529a451f5f88c99070aa5fa6a447"
  },
  {
    "url": "assets/js/page-7507c3f6.1cc585db.js",
    "revision": "9b3ae4c9b30353a08894742e0a26dc43"
  },
  {
    "url": "assets/js/page-7690c622.b089b805.js",
    "revision": "46505fa60e066ed05bea855e1941ae74"
  },
  {
    "url": "assets/js/page-7bfb30a6.d4cccf35.js",
    "revision": "aaaa0aa9d18c62f7bac29c44666753d5"
  },
  {
    "url": "assets/js/page-7d3a6963.64bd3990.js",
    "revision": "e92281161e88f9669376acf8fcc658c7"
  },
  {
    "url": "assets/js/page-7e6b5e12.28c06696.js",
    "revision": "36d193034cbc36bd1ce3e97a77a02b48"
  },
  {
    "url": "assets/js/page-82c2c642.bf5d2cd1.js",
    "revision": "871c29a0c4c8ac8fe9852f1fb37ba933"
  },
  {
    "url": "assets/js/page-85f4c948.bf3771bd.js",
    "revision": "7def130ed40c3587c82e63c322df44f7"
  },
  {
    "url": "assets/js/page-8892394c.d1bbedd9.js",
    "revision": "8b436095bf6b176d60493f3782681743"
  },
  {
    "url": "assets/js/page-89b130dc.e2f6af57.js",
    "revision": "b94f1da9ee3b0ffc2e960d58876fa795"
  },
  {
    "url": "assets/js/page-8da9df6c.49026fe2.js",
    "revision": "95322332694daeb10de556c7c60fe857"
  },
  {
    "url": "assets/js/page-916af89c.6c390e07.js",
    "revision": "06c6be31e5865d2454484002689b03a7"
  },
  {
    "url": "assets/js/page-9a2a43a4.0c10a8ea.js",
    "revision": "30ed65c5de1fb905152fa277448d34f5"
  },
  {
    "url": "assets/js/page-9ec1a766.a8540269.js",
    "revision": "68f7ecf09857571bc0fd7512aa06a9a9"
  },
  {
    "url": "assets/js/page-9f0190e0.7287b55c.js",
    "revision": "3202bc014f49fb15eeb22a91fa592562"
  },
  {
    "url": "assets/js/page-a6174872.56c1fbe1.js",
    "revision": "1eff3f3ceb328017fe348f51fa6e094b"
  },
  {
    "url": "assets/js/page-aab392fc.39963176.js",
    "revision": "6be6fbc6f7aef0c02c8f1062cc2e10dc"
  },
  {
    "url": "assets/js/page-ace574d0.37984007.js",
    "revision": "a74e88446ace555b4e34c1a1aae872a2"
  },
  {
    "url": "assets/js/page-ad24ce34.d506306e.js",
    "revision": "77351ed0b6937cb8c20c78f5e3bd63f6"
  },
  {
    "url": "assets/js/page-b0521034.88c6a06e.js",
    "revision": "83194ea621cfe0baf67faacee87767ae"
  },
  {
    "url": "assets/js/page-b0d90ce6.1dd0aad1.js",
    "revision": "b0908f3c19c0ca50c5865b2c970b3b7d"
  },
  {
    "url": "assets/js/page-b40de7ce.74156690.js",
    "revision": "ab1338131f068c94cb9535eb8dbd630f"
  },
  {
    "url": "assets/js/page-c26b0310.cf0ca192.js",
    "revision": "e6f3d960579d6abac7e5accecc8f2365"
  },
  {
    "url": "assets/js/page-c4bdd70e.a559b94e.js",
    "revision": "24ba6cd3d85d240650bb5bfed181bc49"
  },
  {
    "url": "assets/js/page-c5f1a60e.530c8665.js",
    "revision": "d9e8d4db85df96625edda1ccf201fb7c"
  },
  {
    "url": "assets/js/page-c60be50a.df6bd7b8.js",
    "revision": "f1fc5dd261c8d00debe6d757fcb204e3"
  },
  {
    "url": "assets/js/page-d6c4343e.88100e78.js",
    "revision": "415164c86c32062ea6ea8fdaf822886e"
  },
  {
    "url": "assets/js/page-e468b710.fd048c02.js",
    "revision": "58a1152b9680262aa6ccbfa7496baaeb"
  },
  {
    "url": "assets/js/page-e72e49e8.190f561d.js",
    "revision": "be9416521bfee8d43c2eb6594275221d"
  },
  {
    "url": "assets/js/page-ed303fba.d2a8ab6d.js",
    "revision": "079681e5e1f42d08f336dcaf8df8ead0"
  },
  {
    "url": "assets/js/page-f313c186.a201867e.js",
    "revision": "b30bfa4dbbf32240120f0aa1f153627d"
  },
  {
    "url": "assets/js/vendors~flowchart.6a978e21.js",
    "revision": "444eee131b42d47448a620443b992af4"
  },
  {
    "url": "assets/js/vendors~layout-Layout.60e79813.js",
    "revision": "0b504d0a451a96456f57ff6f9ad6eb6d"
  },
  {
    "url": "category/index.html",
    "revision": "4e0cd885b2706601f95ece3f8001f2e8"
  },
  {
    "url": "Coding/CodeReview/code-review-memo.html",
    "revision": "795555e1e2ada7debf87eef503c173ca"
  },
  {
    "url": "Coding/coding-tips.html",
    "revision": "a7d5078f2ea080940e21e3055e382386"
  },
  {
    "url": "Coding/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "51795f57a66b43e33e4aad6ad67348d4"
  },
  {
    "url": "Coding/CSharp/csharp-tips.html",
    "revision": "28a87a9d848155d06ab3e3385eb9cdaf"
  },
  {
    "url": "Coding/CSharp/String-Concatenate.html",
    "revision": "e5a0a5a8043b11360595058609bfa74b"
  },
  {
    "url": "Coding/CSharp/例外處理.html",
    "revision": "2b85e751f6789dc60fe9da803a6593b4"
  },
  {
    "url": "Coding/CSharp/變數命名.html",
    "revision": "0502af8a9ecfcc768670b5a8c82d0070"
  },
  {
    "url": "Coding/CSharp/責任鏈.html",
    "revision": "0fb0e9a432aa1ba8eaaa1af41cdabb5e"
  },
  {
    "url": "Coding/CSharp/責任鏈2.html",
    "revision": "b82dbf85e83c798921d942302bf15326"
  },
  {
    "url": "Coding/CSharp/責任鏈3.html",
    "revision": "68b587fad9feef278aef204b8697753a"
  },
  {
    "url": "Coding/Front-End/awesome-graphic-resources.html",
    "revision": "30e6be9e2b48481fef67b251483b4829"
  },
  {
    "url": "Coding/Front-End/awesome-pwa.html",
    "revision": "43a1b444a4d4cc4dfc95f4611b4ae047"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "acfba1ca8d694d359ecd65cf60530bcd"
  },
  {
    "url": "Coding/Front-End/CSS/css-parameters.html",
    "revision": "50a5b9ad5f6644bb7f059d4ee86c3a69"
  },
  {
    "url": "Coding/Front-End/CSS/css-tips.html",
    "revision": "77384582707caae152f8c40c0d876e12"
  },
  {
    "url": "Coding/Front-End/Security/開新分頁.html",
    "revision": "adf99bc90cbfa449fe9766cee115cb1e"
  },
  {
    "url": "Coding/JS/awesome-js.html",
    "revision": "116698fd96146d33b1cfa649075564d4"
  },
  {
    "url": "Coding/JS/js-tips.html",
    "revision": "6de1ba9e7ee79885bcbe0b2021324823"
  },
  {
    "url": "Coding/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "9822c0f1b3060cc2c896a2bca5821a30"
  },
  {
    "url": "Coding/JS/Vue/awesome-vue.html",
    "revision": "3a6475a94ca71c189e89bdf0732d4a99"
  },
  {
    "url": "Coding/JS/Vue/vue-basic-tutorial/index.html",
    "revision": "faeb947a5786be0ca312961c2c150872"
  },
  {
    "url": "Coding/progessive-design.html",
    "revision": "bd6f1419a5c5985f808dfaab63d38001"
  },
  {
    "url": "Coding/Server/IIS/iis-memo.html",
    "revision": "efe69c1aa6a0218e0cabb2fe12dc82f3"
  },
  {
    "url": "Coding/SQL/sql-memo.html",
    "revision": "45cd3d8edafb6e805c77779c568c1ef0"
  },
  {
    "url": "Coding/SQL/sqlite-to-postgresql.html",
    "revision": "0d19bb7e091588b8a4e7d8c48d7aec7b"
  },
  {
    "url": "Coding/SQL/StoredProcedure/cursor-syntax-memo.html",
    "revision": "93efc0df86938998da18b28a06520d84"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/back-end.html",
    "revision": "ea3be1ad663d14b8674af847fa5cb490"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/front-end.html",
    "revision": "0051c93ba1141afa3c4b47e46bc219ef"
  },
  {
    "url": "Coding/Website/vue-csarhp-todolist-tutorial/index.html",
    "revision": "55b0db08b074d419d3bb62364d96d870"
  },
  {
    "url": "Demos/index.html",
    "revision": "e75a3b341e121312caca1b000cd1dd73"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "c09870e99b4dc39dc1576cfc01057144"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "5aa957ed8df1b59b56995bcf16495554"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "0213aa91e788b26cab4a7a77cbc555c1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "dda76e58498be4b42148bb79349c2fb0"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "8590024a4397e71e9f233b1f9bad39e5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "8b486b95aadb38e16e41c71fac8f076e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "316a1b022bfb9d232edec28b0531dfa6"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "644931e4588c521ff9c34448104b6320"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "f34935db760e568086015a112423465f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "5ad837d9d6c563376267d9049d6bbceb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "105954b00ba19faf80e5913e1d656aff"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "af9d67242a925fa04f70a94d5de6b7dc"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "d26130913351d161ef1072e5555ea9d2"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "2056dc2c43850e825aa275311fdce45a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "1e685af5f6261ed6ca2ec00f045d0d65"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "a464a0500fdfbb6c429598df2ac2d32d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "85920ec2090cc55bea5c69b0fea043ca"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "233f7d0795dc5d8c66a83e3924c556d2"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/僻地戰.html",
    "revision": "07b213261cbeb9e42e8dd7f7a4702548"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "29cb94fc6ad488fc0668e3335aeee384"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "90a647981b6ae67ad435836b4b861641"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "284ee7f719805b507ef76b1da616d356"
  },
  {
    "url": "Game/FEZ/4. 2on/玩法介紹.html",
    "revision": "a94c76321c69cc9ab137f0e7dca30a1b"
  },
  {
    "url": "Game/FEZ/5. 3on/3on共通玩法介紹.html",
    "revision": "722cc52aa6190417c13ef2377f07f7b2"
  },
  {
    "url": "Game/FEZ/5. 3on/3on刀玩法介紹.html",
    "revision": "4f4d469be6e8d04dff00973d59b79281"
  },
  {
    "url": "Game/FEZ/5. 3on/3on大劍玩法介紹.html",
    "revision": "1bac5e34ef538f4e6ce1fbc46f930383"
  },
  {
    "url": "Game/FEZ/5. 3on/3on雙修玩法介紹.html",
    "revision": "8cd9dfcdcc1d93357a7ecc52e5fbe26f"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "d6d5bfdb185780198d31fd515ac9af91"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "1bb0eb60ea8369b7d885fc318263620d"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "b4bf822acacaaf250d4150fc4c655191"
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
    "revision": "bc21ccc07be70ec7406e397ca1d5a658"
  },
  {
    "url": "search/index.html",
    "revision": "288759e142816be28c2e0e8392588940"
  },
  {
    "url": "tag/index.html",
    "revision": "401b217c25ae6b9773f5324d3095af51"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "741039fc90563e85a2debc317738a5d0"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "0ca666bf9af9cea9bed73382a4230bcf"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "1a742700cf86d0cccc880229888f6539"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "27a1a30877d04ae261c21d748c3342ff"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "416c04e2595336e7f8d749dd37298a89"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "a85c9e71206e16ecf852a78e98710157"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "b5c416a8a926136a7e3aaf01df9488d5"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "32931ef1a4f3a825bf19e821ffa530cd"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "5da5d41a47ac1cd97f891f75a5daf5ed"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "4c950f0408e589e0c43889cc9bae1307"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "71e652a90d8cbe6f175c86132000375c"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "1642675a80b5358aa904382138d1b787"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "d6abeb5915d43e2671802e04bc932947"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "b349357f9804420d7204f61fc552e153"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "9d1c42d27c68a7bf5534d8c4dbdab290"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "7dafea7acfa3065007d7792674c9202e"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "fe2262ff1248ad0c79f2056b6f8c3f68"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "2bb3bbd607b3130a775f908944bc29ad"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "4cd680ae6a39205b895fe624da4c8fc1"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "dcc183a03722d77da0cad4887590d35c"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "94f3a56aa9be036342f1390caf591f3d"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "b8fda08a0188ad9607db36366efa5e67"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "d499d2b0684dc0f726e8372b49c027ab"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "e0ef3356828d9ec82ed49167e126099d"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "f969f56e23bf11efd8280499e15b003b"
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
