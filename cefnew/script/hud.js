var _0x4407a7=_0x103b;(function(_0x594ee2,_0x2d2fc5){var _0x1f19f0=_0x103b,_0x5862cb=_0x594ee2();while(!![]){try{var _0x40f439=-parseInt(_0x1f19f0(0xe0))/0x1+parseInt(_0x1f19f0(0xe3))/0x2+parseInt(_0x1f19f0(0x102))/0x3+-parseInt(_0x1f19f0(0xd0))/0x4*(parseInt(_0x1f19f0(0x11e))/0x5)+parseInt(_0x1f19f0(0x114))/0x6+parseInt(_0x1f19f0(0xcb))/0x7*(-parseInt(_0x1f19f0(0x111))/0x8)+parseInt(_0x1f19f0(0x11d))/0x9;if(_0x40f439===_0x2d2fc5)break;else _0x5862cb['push'](_0x5862cb['shift']());}catch(_0x18cdc7){_0x5862cb['push'](_0x5862cb['shift']());}}}(_0x1fdb,0xeccc0));var hud=new Vue({'el':_0x4407a7(0xbf),'data':{'active':![],'server':_0x4407a7(0x119),'gun':_0x4407a7(0x112),'ammo':'','health':0x64,'armour':0x46,'run':0x32,'food':0x32,'servnumber':0x32,'infoNetwork':'','suspect':0x0,'isCaptureVisible':![],'captureTime':null,'captureRound':0x0,'formattedCaptureTime':_0x4407a7(0xee),'captureGang':[{'id':0x1,'name':_0x4407a7(0x113),'score':0x0},{'id':0x2,'name':_0x4407a7(0x126),'score':0x0}],'killList':[]},'computed':{'formattedCaptureTime':function(){var _0x241b85=_0x4407a7;const _0x301cbd=Math[_0x241b85(0xea)](this['captureTime']/0x3c),_0xf303d7=this[_0x241b85(0xe7)]%0x3c;return _0x301cbd[_0x241b85(0xfa)]()[_0x241b85(0x125)](0x2,'0')+':'+_0xf303d7['toString']()[_0x241b85(0x125)](0x2,'0');},'lastFiveKills'(){var _0x27b530=_0x4407a7;return this[_0x27b530(0xd4)][_0x27b530(0xca)](-0x5);}},'methods':{'capture'(_0x2595d7,_0x1b9e5d){var _0x3ae7ac=_0x4407a7;this[_0x3ae7ac(0xf9)]&&(this[_0x3ae7ac(0xfd)]&&clearInterval(this[_0x3ae7ac(0xfd)]),this['captureRound']=_0x2595d7,this[_0x3ae7ac(0xe7)]=_0x1b9e5d+0x1,this['countdownTimer']=setInterval(()=>{var _0x1bf4e1=_0x3ae7ac;this[_0x1bf4e1(0xe7)]--,this[_0x1bf4e1(0x123)](),this['captureTime']<=0x0&&(clearInterval(this['countdownTimer']),this[_0x1bf4e1(0xd2)]='00:00',this['countdownTimer']='');},0x3e8));},'formatCaptureTime'(){var _0x28625d=_0x4407a7;const _0x14d529=Math['floor'](this[_0x28625d(0xe7)]/0x3c),_0x45ade7=this[_0x28625d(0xe7)]%0x3c;this[_0x28625d(0xd2)]=_0x14d529[_0x28625d(0xfa)]()[_0x28625d(0x125)](0x2,'0')+':'+_0x45ade7[_0x28625d(0xfa)]()[_0x28625d(0x125)](0x2,'0');},'replaceColors'(_0xe591a){var _0x2947d4=_0x4407a7;return _0xe591a[_0x2947d4(0x120)](/\{([0-9A-Fa-f]{6})\}/g,_0x2947d4(0xe5))[_0x2947d4(0x120)](/\{\/\}/g,_0x2947d4(0x11a));},'killAdd'(_0x383519,_0x1bc700,_0x621c7e){var _0xe95689=_0x4407a7;this[_0xe95689(0xd4)][_0xe95689(0xe9)]({'killer':_0x383519,'weapon':_0x1bc700,'killed':_0x621c7e});},'killClear'(){var _0x4b4cc5=_0x4407a7;this[_0x4b4cc5(0xd4)]=[];}}});setInterval(function(){var _0x5443fa=_0x4407a7;if(hud[_0x5443fa(0xd9)]){var _0x5443f6=new Date(),_0x44b53a=_0x5443f6[_0x5443fa(0x11b)]()+0x1;document['getElementById'](_0x5443fa(0x11c))[_0x5443fa(0xda)]=_0x5443f6[_0x5443fa(0x115)]()[_0x5443fa(0xfa)]()[_0x5443fa(0x125)](0x2,'0')+'.'+_0x44b53a[_0x5443fa(0xfa)]()['padStart'](0x2,'0')+'.'+_0x5443f6[_0x5443fa(0xd3)](),document[_0x5443fa(0x110)]('server-time')[_0x5443fa(0xda)]=_0x5443f6[_0x5443fa(0xf7)]()['toString']()[_0x5443fa(0x125)](0x2,'0')+':'+_0x5443f6[_0x5443fa(0xc9)]()[_0x5443fa(0xfa)]()[_0x5443fa(0x125)](0x2,'0')+':'+_0x5443f6[_0x5443fa(0xd5)]()['toString']()[_0x5443fa(0x125)](0x2,'0');}},0x1f4);function pad(_0x34245a,_0xede4cd,_0xc8bdc0){var _0xd4c051=_0x4407a7;return _0xc8bdc0=_0xc8bdc0||_0xd4c051(0xc1),_0x34245a=_0x34245a+'',_0x34245a[_0xd4c051(0xf1)]>=_0xede4cd?_0x34245a:new Array(_0xede4cd-_0x34245a[_0xd4c051(0xf1)]+0x1)[_0xd4c051(0xe2)](_0xc8bdc0)+_0x34245a;}function MoneyUpdate(_0x3cfd84){var _0x4fa7ff=_0x4407a7;const _0x135fbd=document['getElementById']('cash');_0x135fbd[_0x4fa7ff(0xda)]=pad(_0x3cfd84,0x9)+_0x4fa7ff(0x118);}function _0x103b(_0x47c3cc,_0x161532){var _0x1fdb0f=_0x1fdb();return _0x103b=function(_0x103bb3,_0x3a124d){_0x103bb3=_0x103bb3-0xbb;var _0x5ead8f=_0x1fdb0f[_0x103bb3];return _0x5ead8f;},_0x103b(_0x47c3cc,_0x161532);}var speedometer=new Vue({'el':_0x4407a7(0xeb),'data':{'active':![],'speed':0x0,'gear':'P','fuel':0x0,'health':0x0,'engine':![],'lights':![],'doors':![],'key':![],'belt':![]}});function UpdateSpeed(_0x3c2692){var _0x4f11cf=_0x4407a7;document[_0x4f11cf(0x10b)](_0x4f11cf(0x100),function(_0x2246f4){var _0x420947=_0x4f11cf;_0x2246f4[_0x420947(0xf5)]===0x53&&(speedometer['gear']='R'),_0x2246f4['keyCode']===0x57&&(speedometer[_0x420947(0x10f)]='D');});_0x3c2692===0x0&&(speedometer[_0x4f11cf(0x10f)]='P');var _0x418788=Math[_0x4f11cf(0xe8)](1.6625*_0x3c2692/1.05);document[_0x4f11cf(0x110)](_0x4f11cf(0xc4))[_0x4f11cf(0xd6)]=_0x4f11cf(0xc6)+_0x418788+'%\x20500%;',speedometer[_0x4f11cf(0xc4)]=Math[_0x4f11cf(0xe8)](_0x3c2692);}cef['emit'](_0x4407a7(0xc7),'interface',![]),cef[_0x4407a7(0xcd)]('game:data:pollPlayerStats',!![],0x32),cef['on'](_0x4407a7(0xce),(_0x213568,_0x442ab1,_0x577438,_0x3e8fd1,_0x2a0049,_0x5ea36f,_0x552463,_0x4e60d9,_0x4228f9,_0x14beb8)=>{var _0x20928c=_0x4407a7;hud[_0x20928c(0xe1)]=Math['round'](_0x213568),hud[_0x20928c(0xed)]=Math[_0x20928c(0xe8)](_0x577438),hud[_0x20928c(0x10a)]=_0x20928c(0xf4)+_0x5ea36f+_0x20928c(0xf3),hud[_0x20928c(0xc8)]=_0x552463+'/'+(_0x4e60d9-_0x552463),hud[_0x20928c(0x107)]=_0x2a0049,MoneyUpdate(_0x4228f9),speedometer[_0x20928c(0xd9)]===!![]&&UpdateSpeed(_0x14beb8);}),cef['on'](_0x4407a7(0x10d),_0x3c58a0=>{var _0x315d19=_0x4407a7;hud[_0x315d19(0xd7)]=_0x3c58a0;}),cef['on'](_0x4407a7(0xcf),_0x407ab3=>hud[_0x4407a7(0xf9)]=_0x407ab3),cef['on'](_0x4407a7(0xff),(_0x23c4f3,_0x5d1401)=>hud[_0x4407a7(0x105)](_0x23c4f3,_0x5d1401)),cef['on'](_0x4407a7(0xfb),_0x4b58f5=>document[_0x4407a7(0x110)](_0x4b58f5+'pik')[_0x4407a7(0xbb)]()),cef['on'](_0x4407a7(0xd1),(_0x33e1b6,_0x444666)=>hud[_0x4407a7(0x104)][_0x33e1b6-0x1]['name']=_0x444666),cef['on']('cef:capture:gang:score',(_0x4c47dd,_0x2e967c)=>hud[_0x4407a7(0x104)][_0x4c47dd-0x1][_0x4407a7(0xf6)]=_0x2e967c),cef['on'](_0x4407a7(0xde),(_0x214522,_0x461274,_0x36d268)=>hud[_0x4407a7(0xf8)](_0x214522,_0x461274,_0x36d268)),cef['on']('cef:kill:list:clear',()=>hud[_0x4407a7(0xfc)]()),cef['on']('cef:hud:active',_0x18e8eb=>hud[_0x4407a7(0xd9)]=_0x18e8eb),cef['on']('cef:hud:run',_0x4e7b09=>hud[_0x4407a7(0x122)]=Math['round'](_0x4e7b09)),cef['on'](_0x4407a7(0xbd),_0x1b5608=>hud[_0x4407a7(0xbe)]=Math[_0x4407a7(0xe8)](_0x1b5608)),cef['on'](_0x4407a7(0x103),(_0x252f08,_0x5f0c8c)=>{var _0x3c1535=_0x4407a7;_0x252f08==0x0&&(_0x5f0c8c==0x0&&(document[_0x3c1535(0x110)](_0x3c1535(0x124))[_0x3c1535(0xd6)][_0x3c1535(0x10c)]='none'),_0x5f0c8c==0x1&&(document[_0x3c1535(0x110)](_0x3c1535(0x124))[_0x3c1535(0xd6)][_0x3c1535(0x10c)]=_0x3c1535(0xdb))),_0x252f08==0x1&&(_0x5f0c8c==0x0&&(document[_0x3c1535(0x110)](_0x3c1535(0xc3))[_0x3c1535(0xd6)][_0x3c1535(0x10c)]=_0x3c1535(0xdc)),_0x5f0c8c==0x1&&(document[_0x3c1535(0x110)](_0x3c1535(0xc3))[_0x3c1535(0xd6)][_0x3c1535(0x10c)]=_0x3c1535(0xdb))),_0x252f08==0x2&&(_0x5f0c8c==0x0&&(document[_0x3c1535(0x110)](_0x3c1535(0x121))[_0x3c1535(0xd6)]['display']=_0x3c1535(0xdc)),_0x5f0c8c==0x1&&(document[_0x3c1535(0x110)](_0x3c1535(0x121))['style']['display']=_0x3c1535(0xdb)));}),cef['on'](_0x4407a7(0xe4),_0x26490e=>{var _0x140bb3=_0x4407a7;document[_0x140bb3(0x110)](_0x140bb3(0xc2))['innerHTML']='\x20'+_0x26490e;}),cef['on']('cef:hud:server',_0x3fc506=>{var _0xda0896=_0x4407a7;document[_0xda0896(0x110)](_0xda0896(0x117))[_0xda0896(0xda)]='\x20'+_0x3fc506;}),cef['on'](_0x4407a7(0x11f),_0x178b43=>{var _0x3c6ced=_0x4407a7;document[_0x3c6ced(0x110)]('radarpointtext')[_0x3c6ced(0xda)]='\x20'+_0x178b43;}),cef['on'](_0x4407a7(0x10e),_0x832328=>{var _0x251fb3=_0x4407a7;_0x832328==0x1?speedometer[_0x251fb3(0xd9)]=!![]:speedometer[_0x251fb3(0xd9)]=![];}),cef['on'](_0x4407a7(0xd8),_0x1e8cf8=>{var _0x48c4cd=_0x4407a7,_0x3c0669=Math[_0x48c4cd(0xe8)](1.5151515151515151*_0x1e8cf8/1.05);document['getElementById'](_0x48c4cd(0xec))[_0x48c4cd(0xd6)]='stroke-dasharray:\x20'+_0x3c0669+_0x48c4cd(0xc0),speedometer[_0x48c4cd(0xec)]=Math[_0x48c4cd(0xe8)](_0x1e8cf8);}),cef['on'](_0x4407a7(0xf0),_0x1dc0b4=>{var _0x1ba1e1=_0x4407a7;let _0x46cfa6=Math[_0x1ba1e1(0xe8)](1.5151515151515151*_0x1dc0b4/0xa);document['getElementById'](_0x1ba1e1(0xe1))[_0x1ba1e1(0xd6)]='stroke-dasharray:\x20'+_0x46cfa6+_0x1ba1e1(0xc0),speedometer[_0x1ba1e1(0xe1)]=Math[_0x1ba1e1(0xe8)](_0x1dc0b4/0xa);}),cef['on'](_0x4407a7(0x106),(_0x36f827,_0x303c96)=>{var _0x5b9754=_0x4407a7;_0x36f827==0x1&&(_0x303c96==0x0?speedometer['engine']=![]:speedometer[_0x5b9754(0xfe)]=!![]),_0x36f827==0x2&&(_0x303c96==0x0?speedometer[_0x5b9754(0xdf)]=![]:speedometer[_0x5b9754(0xdf)]=!![]),_0x36f827==0x3&&(_0x303c96==0x0?speedometer[_0x5b9754(0x108)]=![]:speedometer[_0x5b9754(0x108)]=!![]),_0x36f827==0x4&&(_0x303c96==0x0?speedometer[_0x5b9754(0xcc)]=![]:speedometer[_0x5b9754(0xcc)]=!![]),_0x36f827==0x5&&(_0x303c96==0x0?speedometer[_0x5b9754(0xef)]=![]:speedometer[_0x5b9754(0xef)]=!![]);}),cef['on'](_0x4407a7(0x101),()=>document[_0x4407a7(0x110)]('select-clothes')[_0x4407a7(0xd6)][_0x4407a7(0x10c)]='flex'),cef['on'](_0x4407a7(0xc5),()=>document[_0x4407a7(0x110)](_0x4407a7(0xf2))['style']['display']=_0x4407a7(0xdc));function _0x1fdb(){var _0x377fce=['run','formatCaptureTime','artifacts0','padStart','Command\x20Two','play','specpanel-block-id','cef:hud:food','food','.hud-cefstudio','%\x20500%;','<span\x20style=\x22opacity:\x200.6\x22>0</span>','playerinfo-id','artifacts1','speed','cef:select:clothes:hide','stroke-dasharray:\x20','game:hud:setComponentVisible','ammo','getMinutes','slice','933583pftwXk','key','emit','game:data:playerStats','cef:capture:visible','290092VtNBHo','cef:capture:gang:name','formattedCaptureTime','getFullYear','killList','getSeconds','style','infoNetwork','cef:speed:fuel','active','innerHTML','flex','none','block','cef:kill:list:add','lights','1697067yFNiqQ','health','join','3222052wQgWOz','cef:player:info','<span\x20style=\x22color:\x20#$1;\x22>','cef:select:clothes','captureTime','round','push','floor','.speedometer-cefstudio','fuel','armour','00:00','belt','cef:speed:health','length','select-clothes','.png','images/gun/','keyCode','score','getHours','killAdd','isCaptureVisible','toString','cef:capture:sound','killClear','countdownTimer','engine','cef:capture:start','keydown','cef:select:clothes:show','531363XYybUH','cef:artifacts:config','captureGang','capture','cef:speed:icon','suspect','doors','cef:spector:button:show','gun','addEventListener','display','update:info:player','cef:speed:active','gear','getElementById','24bmQUdX','images/gun/0.png','Command\x20One','7204464UJaGPY','getDate','cef:onclick:spmenu','server-id','\x20<img\x20src=\x22images/money.png\x22\x20/>','Лаймовка','</span>','getMonth','server-date','2661948qwNprM','15qIxiaF','cef:radar:point','replace','artifacts2'];_0x1fdb=function(){return _0x377fce;};return _0x1fdb();}function selectClothes(_0x25bc53){var _0x5bcb74=_0x4407a7;cef['emit'](_0x5bcb74(0xe6),_0x25bc53);}cef['on'](_0x4407a7(0x109),()=>{var _0x5e37db=_0x4407a7;document[_0x5e37db(0x110)](_0x5e37db(0xbc))[_0x5e37db(0xd6)][_0x5e37db(0x10c)]=_0x5e37db(0xdd);}),cef['on']('cef:spector:button:hide',()=>{var _0x3bd33b=_0x4407a7;document[_0x3bd33b(0x110)](_0x3bd33b(0xbc))[_0x3bd33b(0xd6)][_0x3bd33b(0x10c)]='none';});function clickssppanel(_0xdd2c71){var _0x1b9b8f=_0x4407a7;cef['emit'](_0x1b9b8f(0x116),_0xdd2c71);}