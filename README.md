# PriceHistory
<div align="right">
מעקב אחר שינויי מחירים באתר יד 2 מובייל.<br/>
תומך בכל סוגי המודעות <br/>
מאפשר למיין לפי שינויי מחירים בדף עצמו<br/>
הפעלה:<br/>
1)להעתיק שורת קוד המופיעה למטה<br/>
2)הוספת  bookmark בנייד ובו הדביקו את הקוד שהועתק<br/>
3)בכל עמוד שתרצו לסרוק ולראות שינויי מחירים הפעילו את ה bookmark<br/>

contact us: strictmodeoff@gmail.com<br/>
</div>
javascript:var APP_VERSION="1.1",PHIndex=function(){var n={scriptUrl:"https://rawgit.com/miscweb/PriceHistory/"+APP_VERSION+"/ph.js",analyticsUrl:"https://rawgit.com/miscweb/PriceHistory/"+APP_VERSION+"/analytics.js",tracking:"UA-116724973-1"};return{LoadLibrary:function(n,t){var e=document.createElement("script");e.type="text/javascript",e.src=n,e.readyState?e.onreadystatechange=function(){"loaded"!=e.readyState&&"complete"!=e.readyState||(e.onreadystatechange=null,t&&t())}:e.onload=function(){t&&t()},document.getElementsByTagName("head")[0].appendChild(e)},Init:function(){void 0===window.jQuery?PHIndex.LoadLibrary("//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js",function(){PHIndex.Init()}):"undefined"==typeof ph?PHIndex.LoadLibrary(n.scriptUrl,function(){PHIndex.Init()}):(ph.Init({domain:document.location.hostname,uiext:UIExtension}).Run(null,function(n,t){UIExtension.Paint(t),n.length>0&&ph.UI(n)}),PHIndex.LoadLibrary(n.analyticsUrl,function(){tr.Init(n.tracking).PageView()}))}}}();PHIndex.Init();
