(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"class":"Player","scripts":{"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"createTween":TDV.Tour.Script.createTween,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"cloneBindings":TDV.Tour.Script.cloneBindings,"historyGoBack":TDV.Tour.Script.historyGoBack,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"toggleVR":TDV.Tour.Script.toggleVR,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"shareSocial":TDV.Tour.Script.shareSocial,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"initAnalytics":TDV.Tour.Script.initAnalytics,"translate":TDV.Tour.Script.translate,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"resumePlayers":TDV.Tour.Script.resumePlayers,"executeJS":TDV.Tour.Script.executeJS,"clone":TDV.Tour.Script.clone,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"playAudioList":TDV.Tour.Script.playAudioList,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"mixObject":TDV.Tour.Script.mixObject,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"existsKey":TDV.Tour.Script.existsKey,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizShowScore":TDV.Tour.Script.quizShowScore,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"downloadFile":TDV.Tour.Script.downloadFile,"init":TDV.Tour.Script.init,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"showPopupImage":TDV.Tour.Script.showPopupImage,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"quizStart":TDV.Tour.Script.quizStart,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setLocale":TDV.Tour.Script.setLocale,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"enableVR":TDV.Tour.Script.enableVR,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizFinish":TDV.Tour.Script.quizFinish,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getComponentByName":TDV.Tour.Script.getComponentByName,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"initQuiz":TDV.Tour.Script.initQuiz,"startMeasurement":TDV.Tour.Script.startMeasurement,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setValue":TDV.Tour.Script.setValue,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showWindow":TDV.Tour.Script.showWindow,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getMainViewer":TDV.Tour.Script.getMainViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"disableVR":TDV.Tour.Script.disableVR,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getOverlays":TDV.Tour.Script.getOverlays,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"openLink":TDV.Tour.Script.openLink,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"unregisterKey":TDV.Tour.Script.unregisterKey,"getKey":TDV.Tour.Script.getKey,"registerKey":TDV.Tour.Script.registerKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPixels":TDV.Tour.Script.getPixels,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPlayListItems":TDV.Tour.Script.getPlayListItems},"start":"this.init()","data":{"textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"rate":1},"locales":{"en":"locale/en.txt"},"name":"Player537","history":{},"defaultLocale":"en","displayTooltipInTouchScreens":true},"defaultMenu":["fullscreen","mute","rotation"],"hash": "c053f6502a2f8a53209cd4ae1fc029ef5345e83f8d3002f972c65d9ee68d3393", "definitions": [{"items":["this.Model3DPlayListItem_100FDDED_3393_16C6_41B0_60DDDB453621","this.Model3DPlayListItem_100FEDED_3393_16C6_4146_E1237AC303E4"],"class":"PlayList","id":"mainPlayList"},{"class":"Model3DPlayer","id":"MainViewerModel3DPlayer","viewerArea":"this.MainViewer"},{"paddingRight":0,"bottom":"4.12%","paddingLeft":0,"fontFamily":"Montserrat","id":"Button_2EC0E9C4_336C_0BA9_41C4_7F21ED4CFEF5","backgroundColorRatios":[0],"pressedBackgroundColorRatios":[0],"pressedBackgroundOpacity":1,"fontSize":12,"iconWidth":0,"fontColor":"#FFFFFF","data":{"name":"Button house info"},"rollOverBackgroundColorRatios":[0],"fontWeight":"bold","verticalAlign":"middle","width":110,"minHeight":1,"rollOverBackgroundColor":["#BBD149"],"backgroundOpacity":0,"rollOverShadow":false,"pressedBackgroundColor":["#BBD149"],"height":40,"tabIndex":0,"label":trans('Button_2EC0E9C4_336C_0BA9_41C4_7F21ED4CFEF5.label'),"minWidth":1,"layout":"horizontal","horizontalAlign":"center","rollOverBackgroundOpacity":0.8,"iconHeight":0,"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_100FEDED_3393_16C6_4146_E1237AC303E4, {\"distance\":582.42529,\"x\":-17.42999,\"pitch\":-3.05,\"y\":49.26,\"yaw\":-11.97,\"z\":19.57}, 1, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 1)","borderColor":"#000000","paddingTop":0,"backgroundColor":["#000000"],"class":"Button","left":"13.16%","paddingBottom":0,"propagateClick":false},{"surfaceSelectionCoef":2,"label":trans('model_2B34C7A5_3393_7346_41C1_AB7A5E5CFD2A.label'),"surfaceReticleMaxRadius":50,"data":{"label":"model1","keepModel3DLoadedWithoutLocation":true,"showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true},"lights":["this.light_2A95693D_3393_1F46_41BC_E3A6F8162CDE","this.light_2A9A193D_3393_1F46_41C0_8A6877D8E24E"],"bakedTextures":true,"objects":[],"model":"this.res_2B3447A6_3393_7342_4188_02DB2CF13176","sphericalHarmonicsMaxDegree":3,"surfaceReticleMinRadius":15,"camera":"this.cam_2B6C093D_3393_1F46_41C6_1F3BCE521FEC","backgroundColor":"#000000","castShadow":true,"antialiasingLevel":0.3,"surfaceReticleRadius":0.02,"class":"Model3D","floorRadius":2040.86,"thumbnailUrl":"media/model_2B34C7A5_3393_7346_41C1_AB7A5E5CFD2A_t.jpg","environmentIntensity":0.5,"id":"model_2B34C7A5_3393_7346_41C1_AB7A5E5CFD2A"},{"paddingRight":0,"bottom":"3.99%","paddingLeft":0,"fontFamily":"Montserrat","id":"Button_10951B0D_336C_08BB_41B1_2525846848BD","backgroundColorRatios":[0],"pressedBackgroundColorRatios":[0],"pressedBackgroundOpacity":1,"fontSize":12,"iconWidth":0,"fontColor":"#FFFFFF","data":{"name":"Button house info"},"rollOverBackgroundColorRatios":[0],"fontWeight":"bold","verticalAlign":"middle","width":110,"minHeight":1,"rollOverBackgroundColor":["#BBD149"],"backgroundOpacity":0,"rollOverShadow":false,"pressedBackgroundColor":["#BBD149"],"height":40,"tabIndex":0,"label":trans('Button_10951B0D_336C_08BB_41B1_2525846848BD.label'),"minWidth":1,"layout":"horizontal","horizontalAlign":"center","rollOverBackgroundOpacity":0.8,"iconHeight":0,"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_100FDDED_3393_16C6_41B0_60DDDB453621, {\"distance\":1338.12539,\"x\":-79.13884,\"pitch\":-30.4,\"y\":-178.60639,\"yaw\":-41.67,\"z\":-37.93776}, 1, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","borderColor":"#000000","paddingTop":0,"backgroundColor":["#000000"],"class":"Button","left":"3.77%","paddingBottom":0,"propagateClick":false},{"subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"propagateClick":false,"playbackBarBorderSize":0,"vrPointerSelectionColor":"#FF6600","data":{"name":"Main Viewer"},"subtitlesFontFamily":"Arial","progressBackgroundColorRatios":[0],"progressRight":"33%","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"minHeight":50,"progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"progressOpacity":0.7,"playbackBarHeadHeight":15,"vrPointerSelectionTime":2000,"playbackBarHeadBackgroundColorRatios":[0,1],"minWidth":100,"playbackBarHeadBorderSize":0,"subtitlesGap":0,"toolTipPaddingBottom":4,"playbackBarHeadShadow":true,"playbackBarBackgroundOpacity":1,"height":"100%","progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","toolTipPaddingLeft":6,"progressBarBackgroundColorDirection":"horizontal","subtitlesTextShadowOpacity":1,"firstTransitionDuration":0,"progressBottom":10,"toolTipPaddingRight":6,"progressBackgroundColor":["#000000"],"subtitlesBackgroundColor":"#000000","playbackBarBottom":5,"progressHeight":2,"progressBarBorderRadius":2,"toolTipShadowColor":"#333138","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBorderSize":0,"progressBarBorderSize":0,"toolTipTextShadowColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontSize":"1.11vmin","playbackBarHeadWidth":6,"id":"MainViewer","vrPointerColor":"#FFFFFF","playbackBarProgressBorderSize":0,"toolTipFontColor":"#606060","subtitlesTop":0,"surfaceReticleColor":"#FFFFFF","subtitlesBottom":50,"playbackBarRight":0,"playbackBarHeight":10,"progressBorderRadius":2,"progressLeft":"33%","vrThumbstickRotationStep":20,"playbackBarHeadShadowColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"subtitlesTextShadowHorizontalLength":1,"playbackBarHeadShadowOpacity":0.7,"subtitlesTextShadowColor":"#000000","subtitlesFontSize":"3vmin","surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesFontColor":"#FFFFFF","playbackBarBorderColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","width":"100%","toolTipPaddingTop":4,"toolTipFontFamily":"Arial","toolTipBorderColor":"#767676","class":"ViewerArea","playbackBarHeadBorderColor":"#000000"},{"surfaceSelectionCoef":2,"label":trans('model_20CD7639_3364_38DB_41C2_57242CEC0F00.label'),"surfaceReticleMaxRadius":50,"data":{"label":"model2","keepModel3DLoadedWithoutLocation":true,"showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true},"lights":["this.light_20C846E8_3364_3979_41B6_F022C18EC654","this.light_20C926E8_3364_3979_41C2_43FF8DAB40A8"],"bakedTextures":true,"objects":[],"model":"this.res_20CD2639_3364_38DB_41B1_A7E5FEC46F92","sphericalHarmonicsMaxDegree":3,"surfaceReticleMinRadius":15,"camera":"this.cam_20C896E8_3364_3979_4177_8631F654524A","backgroundColor":"#000000","castShadow":true,"antialiasingLevel":0.3,"surfaceReticleRadius":0.02,"class":"Model3D","floorRadius":1266.36,"thumbnailUrl":"media/model_20CD7639_3364_38DB_41C2_57242CEC0F00_t.jpg","environmentIntensity":0.5,"id":"model_20CD7639_3364_38DB_41C2_57242CEC0F00"},{"player":"this.MainViewerModel3DPlayer","class":"Model3DPlayListItem","media":"this.model_2B34C7A5_3393_7346_41C1_AB7A5E5CFD2A","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","id":"Model3DPlayListItem_100FDDED_3393_16C6_41B0_60DDDB453621","begin":"this.setModel3DCameraSequence(this.mainPlayList, this.Model3DPlayListItem_100FDDED_3393_16C6_41B0_60DDDB453621, this.seq_298B07B5_3391_3346_41A6_6A75B482E61A); this.mainPlayList.set('selectedIndex', 0); ; this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerModel3DPlayer","class":"Model3DPlayListItem","media":"this.model_20CD7639_3364_38DB_41C2_57242CEC0F00","end":"this.trigger('tourEnded')","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","id":"Model3DPlayListItem_100FEDED_3393_16C6_4146_E1237AC303E4","begin":"this.setModel3DCameraSequence(this.mainPlayList, this.Model3DPlayListItem_100FEDED_3393_16C6_4146_E1237AC303E4, this.seq_298B58F9_336C_095B_41B4_CE415021EE00); this.mainPlayList.set('selectedIndex', 1); ; this.setEndToItemIndex(this.mainPlayList, 1, 0)"},{"shadowTolerance":2,"castShadow":true,"class":"OrbitLight","pitch":45,"id":"light_2A95693D_3393_1F46_41BC_E3A6F8162CDE","yaw":-45,"intensity":0.5},{"shadowTolerance":2,"castShadow":true,"class":"OrbitLight","pitch":75,"id":"light_2A9A193D_3393_1F46_41C0_8A6877D8E24E","yaw":135,"intensity":0.3},{"levels":[{"url":"media/model_2B34C7A5_3393_7346_41C1_AB7A5E5CFD2A/scene.glb","class":"Model3DResourceLevel"},{"class":"Model3DResourceLevel","url":"media/model_2B34C7A5_3393_7346_41C1_AB7A5E5CFD2A/scene_mobile.glb","tags":"mobile"}],"class":"Model3DResource","id":"res_2B3447A6_3393_7342_4188_02DB2CF13176"},{"minY":-234.93,"initialDistance":1338.13,"initialX":-79.13,"initialYaw":-41.67,"minDistance":419.06,"maxY":315.26,"initialPitch":-30.4,"autoNearFar":true,"doubleClickAction":"none","minX":-3089.13,"maxZ":2212.58,"vrEnabled":true,"minZ":-2083.05,"class":"OrbitModel3DCamera","id":"cam_2B6C093D_3393_1F46_41C6_1F3BCE521FEC","maxX":3033.44,"sequences":["this.seq_298B07B5_3391_3346_41A6_6A75B482E61A"],"maxDistance":3352.48,"initialZ":-37.93,"initialY":-178.6},{"shadowTolerance":2,"castShadow":true,"class":"OrbitLight","pitch":45,"id":"light_20C846E8_3364_3979_41B6_F022C18EC654","yaw":-45,"intensity":0.5},{"shadowTolerance":2,"castShadow":true,"class":"OrbitLight","pitch":75,"id":"light_20C926E8_3364_3979_41C2_43FF8DAB40A8","yaw":135,"intensity":0.3},{"levels":[{"url":"media/model_20CD7639_3364_38DB_41C2_57242CEC0F00/scene.glb","class":"Model3DResourceLevel"},{"class":"Model3DResourceLevel","url":"media/model_20CD7639_3364_38DB_41C2_57242CEC0F00/scene_mobile.glb","tags":"mobile"}],"class":"Model3DResource","id":"res_20CD2639_3364_38DB_41B1_A7E5FEC46F92"},{"minY":-246.05,"initialDistance":582.43,"initialX":-17.42,"initialYaw":-11.97,"minDistance":260.03,"maxY":344.58,"initialPitch":-3.05,"autoNearFar":true,"doubleClickAction":"none","minX":-1916.97,"maxZ":1212.97,"vrEnabled":true,"minZ":-1173.82,"class":"OrbitModel3DCamera","id":"cam_20C896E8_3364_3979_4177_8631F654524A","maxX":1882.1,"sequences":["this.seq_298B58F9_336C_095B_41B4_CE415021EE00"],"maxDistance":2080.22,"initialZ":19.57,"initialY":49.26},{"class":"Model3DCameraSequence","id":"seq_298B07B5_3391_3346_41A6_6A75B482E61A","movements":[{"class":"TargetModel3DCameraMovement","easing":"cubic_in_out","targetX":-79.13,"targetYaw":-41.67,"duration":500,"targetPitch":-30.4,"data":{"name":"View 1"},"targetZ":-37.93,"targetDistance":1338.13,"targetY":-178.6},{"class":"TargetModel3DCameraMovement","easing":"cubic_in_out","targetX":-27.84,"targetYaw":-0.74,"duration":2000,"targetPitch":-90,"data":{"name":"View 2"},"targetZ":64.76,"targetDistance":975.59,"targetY":40.16},{"class":"TargetModel3DCameraMovement","easing":"cubic_in_out","targetX":-44.23,"targetYaw":-0.74,"duration":2000,"targetPitch":-90,"data":{"name":"View 3"},"targetZ":10.95,"targetDistance":419.06,"targetY":40.16}]},{"class":"Model3DCameraSequence","id":"seq_298B58F9_336C_095B_41B4_CE415021EE00","movements":[{"class":"TargetModel3DCameraMovement","easing":"cubic_in_out","targetX":-17.42,"targetYaw":-11.97,"duration":500,"targetPitch":-3.05,"data":{"name":"View 1"},"targetZ":19.57,"targetDistance":582.43,"targetY":49.26},{"class":"TargetModel3DCameraMovement","easing":"cubic_in_out","targetX":-17.42,"targetYaw":86.82,"duration":2000,"targetPitch":-0.8,"data":{"name":"View 2"},"targetZ":19.57,"targetDistance":582.43,"targetY":49.26},{"class":"TargetModel3DCameraMovement","easing":"cubic_in_out","targetX":-17.42,"targetYaw":-9.18,"duration":2000,"targetPitch":-90,"data":{"name":"View 3"},"targetZ":19.57,"targetDistance":844.82,"targetY":49.26}]}],"watermark":false,"layout":"absolute","gap":10,"width":"100%","minHeight":0,"children":["this.MainViewer","this.Button_2EC0E9C4_336C_0BA9_41C4_7F21ED4CFEF5","this.Button_10951B0D_336C_08BB_41B1_2525846848BD"],"minWidth":0,"height":"100%","backgroundColor":["#000000"],"backgroundColorRatios":[0],"scrollBarColor":"#000000","propagateClick":false,"id":"rootPlayer","scrollBarMargin":2};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.24, Tue Jul 22 2025