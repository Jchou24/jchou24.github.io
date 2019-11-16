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
    "revision": "0b6fe60dd3494cef512febe515d96034"
  },
  {
    "url": "About/index.html",
    "revision": "b884472153ac21428543fb57e2c3f57d"
  },
  {
    "url": "archive/index.html",
    "revision": "67b0b0998c438c6aeef545044978b56e"
  },
  {
    "url": "assets/css/0.styles.3965cd15.css",
    "revision": "cf169be84a3cfef0ba30d4c065e818a5"
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
    "url": "assets/js/1.79ab92d2.js",
    "revision": "ac990803e3e42bd47f0819e3e148627e"
  },
  {
    "url": "assets/js/2.00b094cc.js",
    "revision": "21df6221815fdbb5b0ba3866c42d5880"
  },
  {
    "url": "assets/js/3.77b2f4ef.js",
    "revision": "1e599482f243bbb1cf02d0db3cc967ab"
  },
  {
    "url": "assets/js/5.82aeedcd.js",
    "revision": "9a36aab64560299fc3ba30df2f9977a9"
  },
  {
    "url": "assets/js/6.7d4a9d0d.js",
    "revision": "ca0df1a45efcfaa5a34b8004a3412594"
  },
  {
    "url": "assets/js/73.e82d33bd.js",
    "revision": "166f701bcd1281cba1d85eb1234a4187"
  },
  {
    "url": "assets/js/74.0d4ed3f1.js",
    "revision": "f34d3a2c490dbe2409528a6b3d3bcef3"
  },
  {
    "url": "assets/js/75.a5781ecc.js",
    "revision": "e1cc665f671ea3721dc25dd49a057e94"
  },
  {
    "url": "assets/js/76.486fb3fb.js",
    "revision": "56cd92fca718211710f9fc12cda4ae49"
  },
  {
    "url": "assets/js/77.51a366cd.js",
    "revision": "f6d19aaccbd3793a1b3eea725eebb590"
  },
  {
    "url": "assets/js/78.f6c4ab88.js",
    "revision": "bfa3ca74fbcebd9f3c342971ff1646a2"
  },
  {
    "url": "assets/js/79.b909cc70.js",
    "revision": "6dac109c7e90ce533b73c7377b947f05"
  },
  {
    "url": "assets/js/80.69d73db4.js",
    "revision": "d606605e63d9c6fb88cd5da9e8b7b4e1"
  },
  {
    "url": "assets/js/81.1170598a.js",
    "revision": "1985e6450efce9da086c103575d170f6"
  },
  {
    "url": "assets/js/82.9700acf7.js",
    "revision": "2618fdb5fe6da5dbe33aa262998a81e1"
  },
  {
    "url": "assets/js/83.6b42ec5b.js",
    "revision": "6fb83218bad46396f4bb1ae28ea60776"
  },
  {
    "url": "assets/js/84.e5d71847.js",
    "revision": "04a60a6a8cfd188d652644062d983253"
  },
  {
    "url": "assets/js/85.addf39b4.js",
    "revision": "fcad29e078d4bea9b5ff66ec000c1bbd"
  },
  {
    "url": "assets/js/86.564b74b7.js",
    "revision": "77e08453e717aae3433a5323cbd58a5b"
  },
  {
    "url": "assets/js/87.3a39ea50.js",
    "revision": "37b1c06df184cfddc40c2557e35b641c"
  },
  {
    "url": "assets/js/88.a6a446ed.js",
    "revision": "8428e3942a67ace07f7e888844c2215a"
  },
  {
    "url": "assets/js/89.2e8cea65.js",
    "revision": "a344de935a57e573f8b9566a7258efe4"
  },
  {
    "url": "assets/js/90.f4524f25.js",
    "revision": "0b4b76f93802d75d90eb5e1fe3943fd7"
  },
  {
    "url": "assets/js/91.1523106f.js",
    "revision": "b05ace84e714499ef5c2e27c3a0afa89"
  },
  {
    "url": "assets/js/92.a4cc5989.js",
    "revision": "bd1a3e1acfca8166a99b3687196456cb"
  },
  {
    "url": "assets/js/93.de85ef9e.js",
    "revision": "9d5e3141bd58c67aec4ca35c80d34db9"
  },
  {
    "url": "assets/js/94.da6ec790.js",
    "revision": "d7f0ee05099e8083cb60b97e2c006e89"
  },
  {
    "url": "assets/js/app.99a2b7ea.js",
    "revision": "b59492601b3c01e676bfdf46ab730b7e"
  },
  {
    "url": "assets/js/layout-BaseLayout.0d9f7e4e.js",
    "revision": "31e4f752c566b6cd2de2c967664a03dd"
  },
  {
    "url": "assets/js/layout-BaseLayout~layout-Layout.f654f3a9.js",
    "revision": "8a7e7b24aa3217665d78e84a53527a4b"
  },
  {
    "url": "assets/js/layout-Layout.b2081abc.js",
    "revision": "5db993cf0f11bfee8de7df39ea31eeab"
  },
  {
    "url": "assets/js/layout-NotFound.d37517a2.js",
    "revision": "0cbece96a31af663b9112bb99fc7a762"
  },
  {
    "url": "assets/js/page-01b1365c.b7e4720b.js",
    "revision": "67382287b3669619d20ad0124208bfbb"
  },
  {
    "url": "assets/js/page-03ff99e4.5b249c7d.js",
    "revision": "12dcfe9605639ffacc567dc9cd812403"
  },
  {
    "url": "assets/js/page-0762cb2c.52c943e9.js",
    "revision": "c9d971aed9e00ce309cc8cc1598b4a46"
  },
  {
    "url": "assets/js/page-0815fe43.f10064ea.js",
    "revision": "4c26fe29b53d1fbf68755741df3894d9"
  },
  {
    "url": "assets/js/page-0994254e.a75e678d.js",
    "revision": "5b08923b795fbdcedf326ff6bbe50922"
  },
  {
    "url": "assets/js/page-09cfa20f.8475882d.js",
    "revision": "21499b3274a0d8674f6377ef50651bf4"
  },
  {
    "url": "assets/js/page-0bd5cd98.357e7b87.js",
    "revision": "94838c66f4a1a64bab491870bd7d4c0e"
  },
  {
    "url": "assets/js/page-0ca8b05c.fc9042e4.js",
    "revision": "274f9dec27e31c60c25964e436b26e2f"
  },
  {
    "url": "assets/js/page-130de14f.8a6a62a9.js",
    "revision": "ff3b8073b50162a38cfe44068fac13e6"
  },
  {
    "url": "assets/js/page-17916170.5ffbb9f0.js",
    "revision": "160c87b8f0ec7a327b72bff6da63f3ae"
  },
  {
    "url": "assets/js/page-1efb5c62.6e559915.js",
    "revision": "7fd8734a26de86ee670d19a35708cbf2"
  },
  {
    "url": "assets/js/page-2282a6e0.2cffb86a.js",
    "revision": "c53e492bd90b4ac85543eacce4d8ad6f"
  },
  {
    "url": "assets/js/page-2ba07fce.ad6127a8.js",
    "revision": "da0bcaf23436591744557fc00131a68a"
  },
  {
    "url": "assets/js/page-2da25f49.30ded4e7.js",
    "revision": "c409a66ea63f7755a1bfc7347aa51b99"
  },
  {
    "url": "assets/js/page-2f77601c.747dc1ec.js",
    "revision": "6c38b1cd9eba2b461a7d3261af26b479"
  },
  {
    "url": "assets/js/page-36058925.3aaff4b2.js",
    "revision": "ff342776f900d3e74f86aa2427b7cea1"
  },
  {
    "url": "assets/js/page-3721e5cf.1a019608.js",
    "revision": "f1ffe69170f54231580cc412bf16faeb"
  },
  {
    "url": "assets/js/page-38e94d3e.f730a681.js",
    "revision": "47811966e197e012924608a7fb15f2fb"
  },
  {
    "url": "assets/js/page-39d006b5.8f6df81e.js",
    "revision": "b5e253efc1b6d97396cbf9b422cb26b9"
  },
  {
    "url": "assets/js/page-3b1778e4.17825a5c.js",
    "revision": "163d087814253322bff6d2f3c14ee034"
  },
  {
    "url": "assets/js/page-4048f79b.beecc160.js",
    "revision": "8ee43ba3945176a992f3ea9e749bfaf5"
  },
  {
    "url": "assets/js/page-409d673b.0361da1a.js",
    "revision": "49ff7075737af6052666cdd971ca4499"
  },
  {
    "url": "assets/js/page-42a0ea7c.764a551f.js",
    "revision": "ce289f520649607d5bf905c78d4afefd"
  },
  {
    "url": "assets/js/page-437f73dc.98dbcd7e.js",
    "revision": "30e5080cfb6ef9d99150582f5ceaf098"
  },
  {
    "url": "assets/js/page-4773a0fc.51453e97.js",
    "revision": "1fcefcec813e6a50f0ef9c95261ed19a"
  },
  {
    "url": "assets/js/page-47ec31ef.631a8079.js",
    "revision": "789dd8ac5cf3d648627350905e416475"
  },
  {
    "url": "assets/js/page-494b7749.1ae71acb.js",
    "revision": "6eb808ec10f187c7bfd35c5430b86724"
  },
  {
    "url": "assets/js/page-4e40ef0e.68311305.js",
    "revision": "51ea510661f358070c16a59bfa2d3a78"
  },
  {
    "url": "assets/js/page-4f5eb00c.4d6a902f.js",
    "revision": "96ff4454f53a15c3e0b2f7fdaa40c565"
  },
  {
    "url": "assets/js/page-52453899.7e05edd7.js",
    "revision": "7e953e56f58883bf2810feffab184c3d"
  },
  {
    "url": "assets/js/page-53a21bc2.91e582ae.js",
    "revision": "bd867bde8da5eed85b59b041b849c84a"
  },
  {
    "url": "assets/js/page-548dbfdd.5254e7dc.js",
    "revision": "e3bf84fa8c4fdd82026f88cb1262b3fe"
  },
  {
    "url": "assets/js/page-54cde949.e02f3201.js",
    "revision": "56b949b2ecac61c1843710f1317cf51b"
  },
  {
    "url": "assets/js/page-56c5add8.295a5883.js",
    "revision": "35b92e4f90037a44936c60f79ea9eed2"
  },
  {
    "url": "assets/js/page-5971d062.1fd24fe8.js",
    "revision": "5a8811863dbfad959f8b7494197171f1"
  },
  {
    "url": "assets/js/page-5ae76184.455354c3.js",
    "revision": "22a4c34420ed9b791ea79c3c61b4f9d4"
  },
  {
    "url": "assets/js/page-5c24028f.e52d126f.js",
    "revision": "cf3e39ae539565a3a8275f12f391713e"
  },
  {
    "url": "assets/js/page-5dade32f.2153143b.js",
    "revision": "b47ddcf6bb7ba7fdb6adbce05eb23f86"
  },
  {
    "url": "assets/js/page-62c3f84a.aeb3c219.js",
    "revision": "8a11318d999f175aa42e69bae0e0cb2c"
  },
  {
    "url": "assets/js/page-631831dc.5ef64bf9.js",
    "revision": "93b0f674305e7aeee96c3eaba5de14f7"
  },
  {
    "url": "assets/js/page-64c6c3f9.b7ffb147.js",
    "revision": "e68d9e6e46e986d72f0fd2d46d4d4719"
  },
  {
    "url": "assets/js/page-68a3e126.472ee0fe.js",
    "revision": "5ae3fbcab11de4582d6d30d3cbf48790"
  },
  {
    "url": "assets/js/page-718e3f13.d527cac4.js",
    "revision": "398730718bb59aea26936b946ca7c9b2"
  },
  {
    "url": "assets/js/page-7961fc62.204fcc05.js",
    "revision": "2d8ece6d34bbd7138e42501b907f30b8"
  },
  {
    "url": "assets/js/page-7e22c02f.9776ca0c.js",
    "revision": "d50d159876b78084124248164984413f"
  },
  {
    "url": "assets/js/page-7f4c69e4.fb4e8432.js",
    "revision": "e9d12462d555af2fda765587de15a489"
  },
  {
    "url": "assets/js/page-9a13860a.0f8cab91.js",
    "revision": "8286dfb4a00fd9753287a0f558f65de5"
  },
  {
    "url": "assets/js/page-9d704b70.2509df6c.js",
    "revision": "a20d8d0dbd4a9cf20f5991ed91026dda"
  },
  {
    "url": "assets/js/page-a1c83fc6.f6513243.js",
    "revision": "0c5c5b3f353f4b3b06c1ce83bdcdc830"
  },
  {
    "url": "assets/js/page-a649c29e.588855c2.js",
    "revision": "8756a58d3d78bcc8c70b61357652b1c0"
  },
  {
    "url": "assets/js/page-b6123e24.6e97d214.js",
    "revision": "1fea1e26c7132d01ce5ea1c07bfb8fe9"
  },
  {
    "url": "assets/js/page-c1e7a5fc.9c799ba9.js",
    "revision": "062fddbc35e3970efc71f9db2853ab40"
  },
  {
    "url": "assets/js/page-c41b383a.9911ea52.js",
    "revision": "0d5721cabb4f9905a93c9844847d9fc1"
  },
  {
    "url": "assets/js/page-c799e3a4.c2c35ffa.js",
    "revision": "2775164a4a430da25af1d2d8e20a3f1f"
  },
  {
    "url": "assets/js/page-cd03364e.3ffb01a5.js",
    "revision": "d3b22cc7b5881fba8972ba0b2ecb8db8"
  },
  {
    "url": "assets/js/page-deb70f94.66fbeb64.js",
    "revision": "fb4bccd4684c52d7ae6d90f0b2d11445"
  },
  {
    "url": "assets/js/page-e63bef64.4f34b60c.js",
    "revision": "fc379b917ab48c19ac1dd7953739f45f"
  },
  {
    "url": "assets/js/page-e869018c.4a370aea.js",
    "revision": "ce051b762d6e59916c148d2dcecb88db"
  },
  {
    "url": "assets/js/page-e87fecf8.91314eed.js",
    "revision": "4f5dabc520d20732cd7f7e16cfb4b810"
  },
  {
    "url": "assets/js/page-fa2e9ecc.f5272157.js",
    "revision": "4d492f74505ac9bb3d8afdc0916bb5a4"
  },
  {
    "url": "assets/js/vendors~flowchart.1f24faf5.js",
    "revision": "ffe491b7d7b6a9b2c3aa781c61eab488"
  },
  {
    "url": "assets/js/vendors~layout-Layout.4f271528.js",
    "revision": "63b6cdfdad4bb2a863655ac9cd1107f1"
  },
  {
    "url": "category/index.html",
    "revision": "5ec4bf1e863222cee76c9afcaea53051"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-css.html",
    "revision": "75c37245e2a5053733904957728f26e5"
  },
  {
    "url": "Coding/Front-End/CSS/awesome-icons.html",
    "revision": "b74877e07eefb4f00e77f4204c3cc4be"
  },
  {
    "url": "Coding/Front-End/JS/Module Bundler/Webpack/awesome-webpack.html",
    "revision": "39a8b4dd97a66e4065325253bd7d5cfd"
  },
  {
    "url": "Coding/Front-End/JS/Vue/awesome-vue.html",
    "revision": "b419894961c7fb2c7f7eb7c638e244bb"
  },
  {
    "url": "Coding/日常筆記/CodeReview/code-review-memo.html",
    "revision": "d4b1efe0cf05ec3717b7ac60391b3891"
  },
  {
    "url": "Coding/日常筆記/CSharp/AutoMapper-class繼承後之對應.html",
    "revision": "9f4aa2e5689605e83f05e94e029782c5"
  },
  {
    "url": "Coding/日常筆記/CSharp/String-Concatenate.html",
    "revision": "97739e1c173023dd48c9d18873103c60"
  },
  {
    "url": "Coding/日常筆記/CSharp/tmp.html",
    "revision": "0f777e2fd0f8947e2c7026ce33271396"
  },
  {
    "url": "Coding/日常筆記/CSharp/變數命名.html",
    "revision": "d8bc1b052c2e86b7b670952e1a99a90f"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/index.html",
    "revision": "e908c12c9f78945fc86a97707c70ca22"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/TMP.html",
    "revision": "dd6ea96ebb00e33a1232900a202f7971"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/1. 心/心理戰.html",
    "revision": "11121d127073c117f82cd8beb0e59557"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/index.html",
    "revision": "142617ecf5261d123b7849a73ffdadfa"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/神小跳.html",
    "revision": "c389a23b6385fea7cfdd0c66df0d2d71"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/視野變換.html",
    "revision": "b529e27f78a65e8f67d9c90f214dabaf"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/走位.html",
    "revision": "59b638c8622cd69bcb1ef6a8832a8ccf"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/跳點.html",
    "revision": "f359a782164eb1c1e63b28dc3f774f31"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/2. 技/預出手.html",
    "revision": "067aaf5e2494a0833064174f5e703d00"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/3. 體/index.html",
    "revision": "e97bf97dd84f8f1f05e4cfb48f86bbf1"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/index.html",
    "revision": "70e7292675680daad6e0a4e0383ca567"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/卡位.html",
    "revision": "59ee8b2605681ee51dce2dd862ff6a72"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/4. 群/組隊.html",
    "revision": "d7eff25acab3ed73c5904a61c91dec32"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/index.html",
    "revision": "ee9feb125ac6c1c396f98022e4832adb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/5. 略/局勢.html",
    "revision": "d9c9e1ca6eca574bbf2513aee74848cb"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/6. 決/index.html",
    "revision": "9a93c688a1a0861a59104d11e60b489d"
  },
  {
    "url": "Game/FEZ/1. 遊戲思路/index.html",
    "revision": "fd62d87dfe6a11659abb925b6270011d"
  },
  {
    "url": "Game/FEZ/2. 國戰步兵戰策略/index.html",
    "revision": "072b8aa267d687da8013e467f91ea852"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/刀.html",
    "revision": "6f0944d138611aee067d518b31933d34"
  },
  {
    "url": "Game/FEZ/3. 各職玩法/雙修.html",
    "revision": "d6a301a16a1f974b3a8acc93157091be"
  },
  {
    "url": "Game/FEZ/4. 2on/index.html",
    "revision": "73e60813f4832cc13d107056fd02dcae"
  },
  {
    "url": "Game/FEZ/5. 3on/index.html",
    "revision": "13db259751445e35ac817da0a59b803e"
  },
  {
    "url": "Game/FEZ/X. Theorem/HMM.html",
    "revision": "6229c4d8c3bb3a03a6e62be0c7074e52"
  },
  {
    "url": "hello-vuejcblog.html",
    "revision": "a8429de6c9b67334a05b816c27a8a8f3"
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
    "revision": "0397a30eaa1bae0b4d49a9500f86a657"
  },
  {
    "url": "search/index.html",
    "revision": "326b82cfb83f9b07aa6bf2db279dec6c"
  },
  {
    "url": "tag/index.html",
    "revision": "0c13cb6c11c9de735125bcfb0fc220e0"
  },
  {
    "url": "VueJCBlog/Development/article/hello-vuejcblog.html",
    "revision": "e2bc6b28b106dcd84a81f77aaa43928f"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-comment.html",
    "revision": "763512e3463e0240c66a3f790e4d4c06"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load.html",
    "revision": "bdb691ca9044f58ff902fe4bc4b1222f"
  },
  {
    "url": "VueJCBlog/Development/article/test/test-lazy-load2.html",
    "revision": "c263cd59ebf3eab5e82de9407f3f3684"
  },
  {
    "url": "VueJCBlog/Feature/about-page.html",
    "revision": "2e8d3a1526f4674edb48e318eed36c7c"
  },
  {
    "url": "VueJCBlog/Feature/archive-page.html",
    "revision": "338762adf7286bdb9a521b2b08d729f8"
  },
  {
    "url": "VueJCBlog/Feature/category-page.html",
    "revision": "c06615a166b09e1a4f78c1158756e43d"
  },
  {
    "url": "VueJCBlog/Feature/common-feature.html",
    "revision": "7175fc52706eb91c41282c4027c858be"
  },
  {
    "url": "VueJCBlog/Feature/index-page.html",
    "revision": "8a63ffe9c0aeb7d7b6c1634294e6cf70"
  },
  {
    "url": "VueJCBlog/Feature/index.html",
    "revision": "201b8bd881f4bcae90da8d4d99f514b0"
  },
  {
    "url": "VueJCBlog/Feature/post-page.html",
    "revision": "5877f29d606fe59248f0a31093472ff9"
  },
  {
    "url": "VueJCBlog/Feature/search-page.html",
    "revision": "94562f55c5fbe125c765261014a2751a"
  },
  {
    "url": "VueJCBlog/Feature/sidebar-feature.html",
    "revision": "6f6f0c690d51b62c8a5f3186d39e263a"
  },
  {
    "url": "VueJCBlog/Feature/tag-page.html",
    "revision": "b40cf516a5dc5b57625834c8ec869f97"
  },
  {
    "url": "VueJCBlog/index.html",
    "revision": "d13afa1e7b6b4b89b72ea57de07df753"
  },
  {
    "url": "VueJCBlog/Installation.html",
    "revision": "e66c7a12ef6295f11e1bec4a54631e05"
  },
  {
    "url": "VueJCBlog/Quick-Start.html",
    "revision": "8227aec270ff765895d0495268acc81f"
  },
  {
    "url": "VueJCBlog/Usage/Container/index.html",
    "revision": "ff51569f551237ff4716ad7671975629"
  },
  {
    "url": "VueJCBlog/Usage/front-matter.html",
    "revision": "45125eb114d67006c00d4f2181c7449d"
  },
  {
    "url": "VueJCBlog/Usage/index.html",
    "revision": "8460a74a41661249c3b5ef22e2302e14"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/advanced.html",
    "revision": "2cc48a9878ec76d5d20e1e567dca7488"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/basic.html",
    "revision": "b9c0317c3d87a292d3267f98dba8cd85"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/flow-chart.html",
    "revision": "053e7309e3b304c37c04be313a5a9237"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/index.html",
    "revision": "2f8f08b1754f49c847c39afc63487022"
  },
  {
    "url": "VueJCBlog/Usage/Markdown/link.html",
    "revision": "6ce69d74377ae543e1b3f537452d92be"
  },
  {
    "url": "VueJCBlog/Usage/Slide.html",
    "revision": "0899dc90334638e536203b09a69f3edc"
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
