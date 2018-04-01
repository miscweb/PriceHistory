# PriceHistory
שומר היסטורית מחירים על המודעות ביד 2.
לאופציית המיון באתר נוספו אפשרויות למיין לפי מחירים יורדים או עולים בדף עצמו.
על מנת להפעיל סריקה בדף הרצוי יש להדביק את מה שלמטה. ניתן להוסיף את הקישור כ bookmark ואז כל פעם ללחוץ עליו 
דוגמא לדפדפן כרום
כנסו לאתר כלשהו ושימרו אותו כ bookmark
לאחר מכן תערכו אותו על ידי כניסה ל bookmarks
ובכתובת של האתר תדביקו את שורת הקוד ושמרו.
זוהי שורת הקוד שמפעילה את הסורק 

javascript:var PTIndex=function(){var e="https://rawgit.com/miscweb/PriceHistory/1.0/uiext.js";return{LoadLibrary:function(e,t){var a=document.createElement("script");a.type="text/javascript",a.src=e,a.readyState?a.onreadystatechange=function(){"loaded"!=a.readyState&&"complete"!=a.readyState||(a.onreadystatechange=null,t&&t())}:a.onload=function(){t&&t()},document.getElementsByTagName("head")[0].appendChild(a)},Init:function(){"undefined"==typeof UIExtension&&PTIndex.LoadLibrary(e)}}}();PTIndex.Init();
