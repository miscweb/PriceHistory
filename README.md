# PriceHistory
שומר היסטורית מחירים על המודעות ביד 2.
לאופציית המיון באתר נוספו אפשרויות למיין לפי מחירים יורדים או עולים בדף עצמו.
על מנת להפעיל סריקה בדף הרצוי יש להדביק את מה שלמטה. ניתן להוסיף את הקישור כ bookmark ואז כל פעם ללחוץ עליו 
דוגמא לדפדפן כרום
כנסו לאתר כלשהו ושימרו אותו כ bookmark
לאחר מכן תערכו אותו על ידי כניסה ל bookmarks
ובכתובת של האתר תדביקו את שורת הקוד ושמרו.
זוהי שורת הקוד שמפעילה את הסורק 

javascript:var APP_VERSION="1.1",PTIndex=function(){var e={scriptUrl:"https://rawgit.com/miscweb/PriceHistory/"+APP_VERSION+"/uiext.js"};return{LoadLibrary:function(e,t){var n=document.createElement("script");n.type="text/javascript",n.src=e,n.readyState?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(n.onreadystatechange=null,t&&t())}:n.onload=function(){t&&t()},document.getElementsByTagName("head")[0].appendChild(n)},Init:function(){"undefined"==typeof UIExtension&&PTIndex.LoadLibrary(e.scriptUrl)}}}();PTIndex.Init();
