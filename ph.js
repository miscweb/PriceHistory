var UIExtension=function(){var t="strictmodeoff@gmail.com",e="https://raw.githubusercontent.com/miscweb/PriceHistory/"+APP_VERSION+"/images/y2/",n="https://rawgit.com/miscweb/pricehistory/master/index.html";return{Dom:function(){return $},Url:function(t){return e+t},Sort:function(t){$(".phcontainer.status"+t).get().reverse().forEach(function(t){var e=(t=$(t).parents(".app_search_results_feed_item_holder")).prevAll();e.length>0&&t.insertBefore(e[e.length-1])})},Paint:function(e){var i=$('<div class="phico" style="position:absolute;display:table;bottom:5px;right:5px;width:140px;height: 50px;border: 2px solid rgb(255,255,255);border-radius: 10%;cursor:pointer;opacity:0.9;box-shadow: 3px 4px 4px rgba(0,0,0,0.2);background-color:#00B53E;"/>'),a=$('<div style="padding:5px 5px 5px;"/>');i.append(a);var o=$("<img style='width:40px;height:40px;' src='"+UIExtension.Url("test.png")+"'/>");o.click(function(){if(e&&e.length>0){var t=[];e.forEach(function(e,n){t.push({id:e.id,uid:e.uid,status:n%2==0?1:2,fd:e.d,history:[{d:e.d,p:n%2==0?e.p+1:e.p-1}]})}),ph.UI(t),tr.Event({category:document.location.href,action:"click",label:"demo"})}}),a.append(o),(o=$("<a href='"+n+"' target='_blank'><img style='width:40px;height:40px;' src='"+UIExtension.Url("home.png")+"'/></a>")).click(function(){tr.Event({category:document.location.href,action:"click",label:"home"})}),a.append(o),(o=$("<a href='mailto:"+t+"?subject=Feedback&body=\n----\nPath:"+document.location.href+"' target='_blank'><img style='width:40px;height:40px;' src='"+UIExtension.Url("mail.png")+"'/></a>")).click(function(){tr.Event({category:document.location.href,action:"click",label:"mail"})}),a.append(o),i.insertBefore("#app_search_results_search_button"),(i=$('<div class="app_sort_menu_item">מחיר יורד</div>')).click(function(){UIExtension.Sort(1)}),$("#app_sort_menu_holder").append(i),(i=$('<div class="app_sort_menu_item">מחיר עולה</div>')).click(function(){UIExtension.Sort(2)}),$("#app_sort_menu_holder").append(i)}}}(),tr={Init:function(t){return ga("create",t,"auto"),this},PageView:function(){ga("send","pageview")},Event:function(t){ga("send","event",t.category,t.action,t.label)}},storage={Get:function(t,e){var n={};t.forEach(function(t){n[t]=JSON.parse(localStorage.getItem(t))}),e&&e(n)},Set:function(t,e){Object.keys(t).forEach(function(e){localStorage.setItem(e,JSON.stringify(t[e]))}),e&&e()},Clear:function(t,e){t.forEach(function(t){localStorage.removeItem(t)}),e&&e()}},utils={SetUrlQS:function(t,e,n){var i=new RegExp("([?&])"+e+"=.*?(&|$|#)","i");if(t.match(i))return t.replace(i,"$1"+e+"="+n+"$2");var a="",o=t.indexOf("#");return-1!==o&&(a=t.substring(o),t=t.substring(0,o)),t+(-1!==t.indexOf("?")?"&":"?")+e+"="+n+a}},myad2={PagedUrl:function(t,e){return utils.SetUrlQS(t,"Page",e)},Scrap:function(t){var e=[],n=(new Date).toJSON().slice(0,10).split("-");return n[0]=n[0].slice(-2),n=n.reverse().join("."),t.find(".ad_feed_ad_item_price_list_layout").each(function(t,i){var a=$(i).parents(".ad_feed_ad_item_list_layout"),o=a.attr("data-ad-id").substring(a.attr("data-ad-id").lastIndexOf("_")+1),r=(((a.find(".ad_feed_ad_item_info_line2_list_layout")[0]||{}).innerText||"").match(/[a-zA-Z]*((\d{1,2})([./])(\d{1,2})([./])(\d{2,4})).*/)||[])[1]||n;e.push({id:o,p:parseFloat(((i.innerText||"").match(/\d/g)||[]).join("")||0),d:r,uid:a.attr("id")})}),e},UI:function(t,e){t.forEach(function(t){var n=$(e.Dom().find("#"+t.uid));if(0==n.find(".phcontainer").length){n.css("height","auto");var i=$("<div class='phcontainer status"+t.status+"' style='position: relative;z-index: 1;'/>");n.append(i),i.append("<img src='"+e.Url("status"+t.status+".png")+"'>"),i.click(function(e){var n=i.find(".tooltiptext");if(0==n.length){n=$('<div class="tooltiptext" style="direction:rtl;background-color: #555;color: #fff;text-align: center;border-radius: 6px;padding: 8px 0"> </div>');for(var a=t.history.length-1;a>=0;a--)n.append("<div><span>"+t.history[a].d+"</span> - <span>"+t.history[a].p.toLocaleString()+"&nbsp;₪</span></div>");t.fd&&n.append("<div><span>נצפה לראשונה</span> - <span>"+t.fd+"</span></div>"),i.append(n)}else n.toggle();e.stopPropagation()})}})}},ph=function(){var t,e,n,i={maxdata:200,maxhistory:2,engines:{myad2:{}}},a={"m.yad2.co.il":{id:"myad2",engine:myad2,matches:/m.yad2.co.il/i}};return{Init:function(t){return n=t,t&&t.domain&&(n.domain=n.domain.replace("www.","")),this},Entitled:function(t,e,n){ph.Entitlements(function(i){var a=!1,o=i[t];if(o)switch(t){case"engines":a=void 0!=o[e];break;default:a=o>=e}n&&n(a)})},Entitlements:function(e){t?e&&e(t):storage.Get(["entitlements"],function(n){t=(n||{}).entitlements||i,e&&e(t)})},Factory:function(t){t=t||n.domain;var e=a[t];return e||Object.keys(a).some(function(n){return!!t.match(a[n].matches)&&(e=a[n],!0)}),e},Run:function(t,n){if(e){var i=$(t||document),a=e.engine.Scrap(i);a.length>0?ph.Scan(a,function(t){n&&n(t,a)}):n&&n()}else{var o=ph.Factory();o?ph.Entitled("engines",o.id,function(i){i?(e=o,ph.Run(t,n)):n&&n()}):n&&n()}},Scan:function(t,n){storage.Get([e.id],function(i){var a=[],o=(i||{})[e.id]||{data:{}},r=Object.keys(o.data);ph.Entitlements(function(i){t.forEach(function(t){var e=o.data[t.id];e?(t.p!=e.p&&(e.status=t.p>e.p?2:1,i.maxhistory>0&&(e.history=e.history||[],e.history.push({d:e.d,p:e.p}),e.history.length>i.maxhistory&&(e.history=e.history.slice(1))),e.d=t.d,e.p=t.p),e.status&&a.push({id:t.id,uid:t.uid,status:e.status,fd:e.fd,history:e.history})):i.maxdata>0&&(o.data[t.id]={d:t.d,p:t.p,fd:t.d},r.push(t.id),r.length>i.maxdata&&(delete o.data[r[0]],r=r.slice(1)))});var s={};s[e.id]=o,storage.Set(s),n&&n(a)})})},UI:function(t){e.engine.UI(t,n.uiext)}}}();