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
    "revision": "9903c799c09f3aed58b03e721f2e2f2a"
  },
  {
    "url": "About/index.html",
    "revision": "169c0513abfcc9d63fe3c12557312659"
  },
  {
    "url": "archive/index.html",
    "revision": "861bdf42ec9a7e9c29a2acc8ca2536b3"
  },
  {
    "url": "assets/css/0.styles.e4cd46cb.css",
    "revision": "b8a4b26e6bcfecae667500ad84547427"
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
    "url": "assets/js/1.167e0f21.js",
    "revision": "e4c771820729a5026b5b723ff21189ba"
  },
  {
    "url": "assets/js/2.fdf8b5fc.js",
    "revision": "b9b3e07fa7af082a273d165b1e071978"
  },
  {
    "url": "assets/js/3.79905a2d.js",
    "revision": "703c01bfe232be28077b7af7f916e339"
  },
  {
    "url": "assets/js/4.72421304.js",
    "revision": "5de97c92b782b20f499d30eebe5d0928"
  },
  {
    "url": "assets/js/5.3dc25a14.js",
    "revision": "80991b97e66bb0c5782427add6bb0324"
  },
  {
    "url": "assets/js/6.7d2712a5.js",
    "revision": "a12841ab22f141e1c81c7d6256cbf5eb"
  },
  {
    "url": "assets/js/73.c7d0d2a7.js",
    "revision": "cd12515a5ae10e68546b62d1dae2a455"
  },
  {
    "url": "assets/js/74.70305040.js",
    "revision": "81a1b627b33a4c1671abcba5e483b31f"
  },
  {
    "url": "assets/js/75.b8f8bf4e.js",
    "revision": "46a3855d8b98d517feabffb31fa18547"
  },
  {
    "url": "assets/js/76.845109b1.js",
    "revision": "9db0104fa457e5d4e27437336644c45b"
  },
  {
    "url": "assets/js/77.3c35f391.js",
    "revision": "fee58e93fb01ad20b075f1bd774f6916"
  },
  {
    "url": "assets/js/78.ba8490e8.js",
    "revision": "542d3209b224d3abc40148274f78a42b"
  },
  {
    "url": "assets/js/79.abe1fb49.js",
    "revision": "6384748251ac1dfa2c827b3a203623e5"
  },
  {
    "url": "assets/js/80.0fed990c.js",
    "revision": "224b14128f60399d3ed2f5f623963dd7"
  },
  {
    "url": "assets/js/81.eab02666.js",
    "revision": "3d0cbeef87e96ab1ae4fd9ca20a4ddf8"
  },
  {
    "url": "assets/js/82.aeb95ec2.js",
    "revision": "f50def12acae675a8d97dd34c174d050"
  },
  {
    "url": "assets/js/83.40bcdb87.js",
    "revision": "85bdbaa345c81ca67cf17b69a1e0ec08"
  },
  {
    "url": "assets/js/84.ca121c85.js",
    "revision": "f5a0d0b476cd85ea14d5d6285d4fd580"
  },
  {
    "url": "assets/js/85.c23e9e57.js",
    "revision": "c750414f7b68a3906702a879e15faf0d"
  },
  {
    "url": "assets/js/86.605d12e0.js",
    "revision": "771b3d8057f4ca1d39107032a711d48a"
  },
  {
    "url": "assets/js/87.7c65d90b.js",
    "revision": "08d5ce567ff856fb660529d98c1161cc"
  },
  {
    "url": "assets/js/88.319a7181.js",
    "revision": "ca0d9d6d59b5ed47f620d187d95739ee"
  },
  {
    "url": "assets/js/89.a26b877a.js",
    "revision": "2ff52da3cb68119ecc29f2074ba9ce19"
  },
  {
    "url": "assets/js/90.80b1945b.js",
    "revision": "6774e585bc4b3074173de673b57fd5cc"
  },
  {
    "url": "assets/js/91.3919bed2.js",
    "revision": "1fdee015fec990028cec009c373ae675"
  },
  {
    "url": "assets/js/92.a4cc5989.js",
    "revision": "bd1a3e1acfca8166a99b3687196456cb"
  },
  {
    "url": "assets/js/93.4b43bd1d.js",
    "revision": "7270a5b2b7acad086d81d34fbca8fdec"
  },
  {
    "url": "assets/js/94.58745cb2.js",
    "revision": "37dd889240f6e19452094813b080f991"
  },
  {
    "url": "assets/js/app.b63c2817.js",
    "revision": "698109ac96e2058d993ce12678f9f094"
  },
  {
    "url": "assets/js/layout-BaseLayout.f13e3a0d.js",
    "revision": "d2d29cda94a1a82feacba89a2ce6f7d0"
  },
  {
    "url": "assets/js/layout-Layout.a038f125.js",
    "revision": "f89c7daa033ce644ef0364778cae542b"
  },
  {
    "url": "assets/js/layout-NotFound.673dc41b.js",
    "revision": "0f02b39c473d3f447ad0e1f8944da322"
  },
  {
    "url": "assets/js/page-01b1365c.3d507fff.js",
    "revision": "730065debc935e2fc1fcc8bdca76fc00"
  },
  {
    "url": "assets/js/page-03ff99e4.629f794f.js",
    "revision": "40c41c7c55ae5d22c61dfa5ad40d5192"
  },
  {
    "url": "assets/js/page-0762cb2c.309eb287.js",
    "revision": "6dbbc690805388d029d0c12bb5f05019"
  },
  {
    "url": "assets/js/page-0815fe43.e34790a3.js",
    "revision": "7ae622c1c8d1dd8aaa7b63191f181aea"
  },
  {
    "url": "assets/js/page-0994254e.981d0f33.js",
    "revision": "1d7827794da849a80c50c1871f971dfd"
  },
  {
    "url": "assets/js/page-09cfa20f.4885b075.js",
    "revision": "f168bf134dfc270779485c2dd925ff65"
  },
  {
    "url": "assets/js/page-0bd5cd98.5f5dc45c.js",
    "revision": "b7019cf2ef732db6776a8f65c9b4009e"
  },
  {
    "url": "assets/js/page-0ca8b05c.62f33fe8.js",
    "revision": "d517eb9eef24cee7850eb4e456e9d1e3"
  },
  {
    "url": "assets/js/page-130de14f.1e8d347b.js",
    "revision": "b75ea86d187a49be3879cc88aa354bf8"
  },
  {
    "url": "assets/js/page-17916170.dcbc07c9.js",
    "revision": "766af0153fcb0eee0eb08f75e6f1493a"
  },
  {
    "url": "assets/js/page-1efb5c62.b00fddf8.js",
    "revision": "5653975dd98c14ba0fc29935db9bd8cd"
  },
  {
    "url": "assets/js/page-2282a6e0.2cffb86a.js",
    "revision": "c53e492bd90b4ac85543eacce4d8ad6f"
  },
  {
    "url": "assets/js/page-2ba07fce.2e48f3e4.js",
    "revision": "ed5e430cf5892278f91c066530ea9b84"
  },
  {
    "url": "assets/js/page-2da25f49.7bf8c82b.js",
    "revision": "12d476febe266d794e068e1f9657eb51"
  },
  {
    "url": "assets/js/page-2f77601c.6d35d91a.js",
    "revision": "115f74de7b6836cb4736cddff3182983"
  },
  {
    "url": "assets/js/page-36058925.82faa59b.js",
    "revision": "9e95a0fb855aa51727511a5ce7970d69"
  },
  {
    "url": "assets/js/page-3721e5cf.500c6198.js",
    "revision": "219d9de8ba75071de4cc2e62f38de065"
  },
  {
    "url": "assets/js/page-38e94d3e.73fc3a0f.js",
    "revision": "bfb5a0a586c0e517c0907d84691da396"
  },
  {
    "url": "assets/js/page-39d006b5.22a8c6c7.js",
    "revision": "c518f4f04ff1b6d4a98d2616486d10fe"
  },
  {
    "url": "assets/js/page-3b1778e4.4882404e.js",
    "revision": "61a584be8e6c4ef8b65998a18b8e254d"
  },
  {
    "url": "assets/js/page-4048f79b.35a7a8be.js",
    "revision": "061cd4e139c35804cdb2d9425ca14c51"
  },
  {
    "url": "assets/js/page-409d673b.4035f7b0.js",
    "revision": "83b66a23ecdbd142bcc991ff42c374ef"
  },
  {
    "url": "assets/js/page-42a0ea7c.9de4dae2.js",
    "revision": "e9ae85f1ffb230ed9f812207e08aede5"
  },
  {
    "url": "assets/js/page-437f73dc.e2bb91a8.js",
    "revision": "81672a0f1ee1f667c511d160e200523b"
  },
  {
    "url": "assets/js/page-4773a0fc.625e9d12.js",
    "revision": "f2ffbb84333e4a971ac2035fb981421f"
  },
  {
    "url": "assets/js/page-47ec31ef.b0a171ad.js",
    "revision": "d2d4d3e751f20d2e4f9f6227ed75115f"
  },
  {
    "url": "assets/js/page-494b7749.cc801c03.js",
    "revision": "09b22c21657e7ca65167860573db8edf"
  },
  {
    "url": "assets/js/page-4e40ef0e.606c27b3.js",
    "revision": "b53f5299725eee93de8adfe5a52c4794"
  },
  {
    "url": "assets/js/page-4f5eb00c.a0f9715a.js",
    "revision": "9c860e10e354eb4cb75d6053df8fe5f0"
  },
  {
    "url": "assets/js/page-52453899.656dcc1b.js",
    "revision": "659ec41d63f197d463b8d0102debf853"
  },
  {
    "url": "assets/js/page-53a21bc2.ac8c5881.js",
    "revision": "88b4ad778f239b62ca7450fdd8fbdc4a"
  },
  {
    "url": "assets/js/page-548dbfdd.8971e254.js",
    "revision": "ce1b92ce65b2c0f2c40302df35f66636"
  },
  {
    "url": "assets/js/page-54cde949.308f078c.js",
    "revision": "6718ad7702b34b35de4d92269408d807"
  },
  {
    "url": "assets/js/page-56c5add8.d03cdd18.js",
    "revision": "9133839c30eb68619b73f469e3798764"
  },
  {
    "url": "assets/js/page-5971d062.f0c52c25.js",
    "revision": "9f74f1c39862ac88388f495405d99144"
  },
  {
    "url": "assets/js/page-5ae76184.979f96cb.js",
    "revision": "c96932b7717458dd72064aa21a12c9ca"
  },
  {
    "url": "assets/js/page-5c24028f.bf6c7cd5.js",
    "revision": "66ce1ce4017cc57119fa00ca9d21bf93"
  },
  {
    "url": "assets/js/page-5dade32f.102d888a.js",
    "revision": "dbbd8d0e0016d75a24e559087712d368"
  },
  {
    "url": "assets/js/page-62c3f84a.bdea8282.js",
    "revision": "910a1245e19bbb75f0b804dcc054a759"
  },
  {
    "url": "assets/js/page-631831dc.b964fa1e.js",
    "revision": "29d1368a0b1f0403bb593890f7c6be8c"
  },
  {
    "url": "assets/js/page-64c6c3f9.3bfd705f.js",
    "revision": "9a5b5ba0df6aeea0634fa64c44e6e9ce"
  },
  {
    "url": "assets/js/page-68a3e126.f30639d5.js",
    "revision": "ca540453dbbabd79cbc1670bbf13ec7c"
  },
  {
    "url": "assets/js/page-718e3f13.c6b2f6f5.js",
    "revision": "9b67fded602b5bf2b0d3afce47e7e24b"
  },
  {
    "url": "assets/js/page-7961fc62.53fd4fb1.js",
    "revision": "092a48c20753abd20614650c54097fdf"
  },
  {
    "url": "assets/js/page-7e22c02f.6bfc6ebd.js",
    "revision": "3494ef7620fa1adc9577c24eb025a35b"
  },
  {
    "url": "assets/js/page-7f4c69e4.fb4e8432.js",
    "revision": "e9d12462d555af2fda765587de15a489"
  },
  {
    "url": "assets/js/page-9a13860a.4560c89d.js",
    "revision": "2708850310519eb8597e1f12434cdc50"
  },
  {
    "url": "assets/js/page-9d704b70.4a6e69e4.js",
    "revision": "2e75635069f092588262f781cc36dc72"
  },
  {
    "url": "assets/js/page-a1c83fc6.b2cf720e.js",
    "revision": "8a5d68300822ce2e0a6a5c70582604ab"
  },
  {
    "url": "assets/js/page-a649c29e.069d8e77.js",
    "revision": "36fdbf76f36b0951802f0c2b2fd44193"
  },
  {
    "url": "assets/js/page-b6123e24.fe5e2f85.js",
    "revision": "5096dd20cff4fa3f1bc14113f2c589b3"
  },
  {
    "url": "assets/js/page-c1e7a5fc.90a28c44.js",
    "revision": "85382977c2ce2a1f67357326fd31e42c"
  },
  {
    "url": "assets/js/page-c41b383a.e7b55bb7.js",
    "revision": "815b954d0593dba9a3045987d91d36ee"
  },
  {
    "url": "assets/js/page-c799e3a4.6f59bbd6.js",
    "revision": "fc4db7ad2ca8eeeafa5779964943cfc0"
  },
  {
    "url": "assets/js/page-cd03364e.78aa8191.js",
    "revision": "5e13536b00324b0079ad9ab41c729f04"
  },
  {
    "url": "assets/js/page-deb70f94.8028776d.js",
    "revision": "937a05bc3324817a98d67b2789a0cbac"
  },
  {
    "url": "assets/js/page-e63bef64.5981a283.js",
    "revision": "f7ce0b1e94ac0a28086aba13f2562b1c"
  },
  {
    "url": "assets/js/page-e869018c.e46b9087.js",
    "revision": "422bce8fe33583121937052bd3d4775f"
  },
  {
    "url": "assets/js/page-e87fecf8.6e0cb7fa.js",
    "revision": "b248ab1c6cdff054f8f61fefa792d8a5"
  },
  {
    "url": "assets/js/page-fa2e9ecc.19ce9960.js",
    "revision": "ccbab45efb43f5e7f0a451da08b7fe25"
  },
  {
    "url": "assets/js/vendors~flowchart.a87810ff.js",
    "revision": "a0eb213b5d4c89aa0a53e63938ee04bf"
  },
  {
    "url": "assets/js/vendors~layout-Layout.71e5eb67.js",
    "revision": "f13eb12d23b648bf4a80e3301c162b62"
  },
  {
    "url": "category/index.html",
    "revision": "9487d94c27f5136eb09731b6f22d084d"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "a9e12856ef4c6470602ebff16f8277c6"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "8d0a3c45091cf1a7e32190bcbb139b99"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "38a04929551f9d591cfac3750080da12"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "b3dd0ede7694e86b008940650b8d4523"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "ac3f9f9504ba004db05f48677a175ad8"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "dfa21dedf35cdd55bbe258027009af53"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "4c51b2fa26fa6aab6e09c3da8bd86ec2"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "b57fc3779e7422411d1ecb49cece50d1"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "95af48c4d0d0b0497b5da1f8b2748efd"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "aa37f87e6b42fe088119c5c7f4ce82ba"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "838af41ecc42f010a313bbce1275749a"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "baf506f43ae2778069887c9225dd6ef8"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "ed253a00f664e6c548b09844d384bf1e"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "8bb3f09a14033847813e1569953d50a3"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "93f83fefe1442542fce763680fc1f4bc"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "9fb0c9de635eada2a35850076f9d33b6"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "5dcf1f78bcd5578ec6f91075229114a9"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "efd8f4f4b93af825bdf27e71d2da18d5"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "c2828747eb7028c62c9ab1b8a1dba917"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "8d1fc6257147390c0c86162c5ed4ca3d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "6704f5c32b015d23ee20a8fbd6cf64d4"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "98d56e0733b09de47f20d87e11604f7d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "ef51688834e54f8c22ad114a64a349f7"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "6e198c3e4b3f8b5bcabcf6b02948a925"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "a898979b2de35660b1ec1e57207a0519"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "862a3b2c54c118c4a6c9fcb058ffb750"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "66fb3d2e22576948818a5df236ac0462"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "6a417b6c30e92149958c9b160169b9da"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "2b0e18be4b5d2b4361557644eaad05d5"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "5014349652be5a3508727bbe676b8b7b"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "2028122d0c0d0628b0f899ce31759d47"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "53b47f8625b021c223236d10dd9a0056"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "50f6238900c755f43733b186eeccfb2c"
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
    "revision": "7f9ef8c4bac6bc996ecf19e46a547aa0"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/css/all.css",
    "revision": "826c57385f3d35cfed5478ba7b1f5c03"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/css/brands.css",
    "revision": "a3ceb4f1b808969cd8f1bb0aac1510c2"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/css/fontawesome.css",
    "revision": "dbcb133434de9fcab3b59ade7ec21498"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/css/regular.css",
    "revision": "fee1728359ce4620fd348a3e54507aa2"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/css/solid.css",
    "revision": "29836be7445cd9786959237ea8e13405"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/css/svg-with-js.css",
    "revision": "bd066123cdf3337103b21713df9bfd01"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/css/v4-shims.css",
    "revision": "6dd334cc89ff203f10b026482960997d"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/css/v4-shims.min.css",
    "revision": "7254c92168d4717ed7b36234b2bba3b8"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-brands-400.eot",
    "revision": "e2a76403183eff8967cf6318c6e51509"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-brands-400.svg",
    "revision": "a999c7b8823b901248833dc7fe07a52f"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-brands-400.ttf",
    "revision": "e0fc4e5c719b4dc10c97fc111d7374e1"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-brands-400.woff",
    "revision": "d034c1b2ee84dd981ef2e637754a0b4f"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-brands-400.woff2",
    "revision": "f319eac1c755f9929fd856720ce1695e"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-regular-400.eot",
    "revision": "5a4618f029618cc2795c05fe53d57028"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-regular-400.svg",
    "revision": "e9d8dbb0c3e9b97ffc59c50ff5d01422"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-regular-400.ttf",
    "revision": "6534c603e0892488132ad57248ec69e2"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-regular-400.woff",
    "revision": "e99569d3d10c94c60d9a68523c1c0e71"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-regular-400.woff2",
    "revision": "a3715c6fe264a51f1d9260b447ff46bc"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-solid-900.eot",
    "revision": "d9824d00712532d7697df68df16ae0d3"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-solid-900.svg",
    "revision": "666a82cb3e9f8591bef4049aea26c4c6"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-solid-900.ttf",
    "revision": "00ddaede094b83270cadbfc1a907e8ca"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-solid-900.woff",
    "revision": "128d2b0be23925e5cf36717ddc6f093b"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/font-awesome/webfonts/fa-solid-900.woff2",
    "revision": "18d2347ab2a9f40ca2247cdb03303d84"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/menu.css",
    "revision": "b77ae49bbe4659ad03cfef294993ae00"
  },
  {
    "url": "reveal-plugins/reveal.js-menu/menu.js",
    "revision": "a5c2b07e1542574c9c32ef832a816d5f"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/css/fontawesome-all.css",
    "revision": "df971aa5d84841ee38832d91eec13fea"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/css/fontawesome-all.min.css",
    "revision": "008d988812b8880cba5c961a2801ecf4"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-brands-400.eot",
    "revision": "7001a3b042968d7dab0e6101e006e7b9"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-brands-400.svg",
    "revision": "7062ba59eccb39a5b2928e76775c070e"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-brands-400.ttf",
    "revision": "8ba7759787c0747a9eb4cacc52fda0d4"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-brands-400.woff",
    "revision": "06caed825136db34feec1818b2e7b694"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-brands-400.woff2",
    "revision": "821db3df5dfee55d22d026a550437493"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-regular-400.eot",
    "revision": "eb226bfbc2cbafd8d77dd97c5c51a707"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-regular-400.svg",
    "revision": "5520ce161fcd465b3af338abb8c3df01"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-regular-400.ttf",
    "revision": "2beb8065550b6030c920fc073c10abce"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-regular-400.woff",
    "revision": "e688d53830f28ff118f912e3eaa42dc5"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-regular-400.woff2",
    "revision": "ddb3298b99debbc30dab9de16385fd6e"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-solid-900.eot",
    "revision": "89b584356dc1ab35af50c4417f6af1cb"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-solid-900.svg",
    "revision": "354488156fbac95ac6b0f486d9d344c2"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-solid-900.ttf",
    "revision": "e77d3ec9bc38ea486eb885456693278a"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-solid-900.woff",
    "revision": "e00c146f3a292e6dc28f7a5730dc4e20"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/font-awesome-5.0.2/webfonts/fa-solid-900.woff2",
    "revision": "e519eef3aaa5e7db03d6a901694fc660"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/lib/screenfull/screenfull.min.js",
    "revision": "d72f6e9bf2c61ac4724dac6a346c5180"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/toolbar.css",
    "revision": "487c98342da1e3e11d455fb333fe4f0f"
  },
  {
    "url": "reveal-plugins/reveal.js-toolbar/toolbar.js",
    "revision": "dc54ab50ab6df632767a594bbfeb3738"
  },
  {
    "url": "search/index.html",
    "revision": "d092641002a15279dff2ab316f35058b"
  },
  {
    "url": "tag/index.html",
    "revision": "8258def3968e2e3283b04fd1e8eee7f9"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "23f118d61f7a09f2faaf6290d6a97c2f"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "76112d0047a5894378d3c6571cbc6474"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "2eec694887377ba914131c8e3e7b1a64"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "8204763516ec8f0d4a1dc743bec019a7"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "cd37f8aed914e57968cc7909ff8860f2"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "9880c0b3aad9c75f158dd3f0f56904b1"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "a1727af40e7853a83cf10b30fb0a7364"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "861e06cf955b3151b6026062d2dd5749"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "41e89f0fc3c3b461dadebbc843faea7e"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "d0773022ecc087e252d2c89a7dcc7599"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "f0118d996afb95d046662de31ea7d193"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "0d5c88882c8fc678676e610068e2e097"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "60198367f9050581360acda61bfca28c"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "d3102e8a78444ebab601b0d70f123c70"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "35c2cd099a003f054f55507941b4b81a"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "fc5e7ff43a0a407c5db4156ad106494f"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "c7a937881f1c16e115899659b2610d92"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "e988b4b329f09916ee907d3a6175f50c"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "777bca81d587e1ca4165d861d7a1686a"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "84532c5f80bbe6b333c9b1ad1f0f0d1f"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "c5e6d0da9318755234c10f7018bc84d6"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "1c755762d9b2b53cfbf11c9df1b8441c"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "3aa555ff2d9634e271904404a8f5b8e6"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "93a61b84aaddea43f06cdb1ae2b502e9"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "b1f8536cadfe1f6ef6ef0f2eaab6539d"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "68ef4985edf04c7da1334b92d2ec0978"
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
