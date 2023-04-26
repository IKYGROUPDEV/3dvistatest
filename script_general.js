(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
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
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
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
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
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
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"backgroundColorRatios":[0],"data":{"locales":{"tr":"locale/tr.txt"},"textToSpeechConfig":{"volume":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"rate":1,"speechOnTooltip":false,"speechOnQuizQuestion":false,"pitch":1},"defaultLocale":"tr","history":{},"name":"Player428"},"watermark":false,"start":"this.init()","defaultMenu":["fullscreen","mute","rotation"],"id":"rootPlayer","children":["this.MainViewer"],"layout":"absolute","scrollBarColor":"#000000","scrollBarMargin":2,"propagateClick":false,"hash": "f47aa9f1e4c6f5d0932651e34837e7fdf0fc8f01c4404a7d50471219e3fcd02c", "definitions": [{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_AFF6CAB6_BC72_80DD_41D0_8A7B3D473B79","id":"panorama_A837D7A8_BC72_80F5_41E1_1B9F4007DD3A_camera","enterPointingToHorizon":true},{"toolTipFontSize":"1.11vmin","progressRight":"33%","progressOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"progressBackgroundColor":["#000000"],"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"data":{"name":"Main Viewer"},"propagateClick":false,"playbackBarHeadHeight":15,"playbackBarLeft":0,"subtitlesTextShadowHorizontalLength":1,"progressBottom":10,"playbackBarHeadShadowColor":"#000000","minHeight":50,"playbackBarHeadBackgroundColorRatios":[0,1],"minWidth":100,"playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"surfaceReticleSelectionColor":"#FFFFFF","toolTipFontFamily":"Arial","firstTransitionDuration":0,"subtitlesBackgroundColor":"#000000","progressBarBackgroundColorDirection":"horizontal","progressHeight":2,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTextShadowVerticalLength":1,"progressBarBorderRadius":2,"playbackBarBottom":5,"progressBorderSize":0,"progressBarBorderColor":"#000000","progressBarBorderSize":0,"width":"100%","progressBarBackgroundColorRatios":[0],"toolTipTextShadowColor":"#000000","subtitlesTop":0,"subtitlesGap":0,"toolTipPaddingLeft":6,"vrPointerSelectionColor":"#FF6600","vrPointerSelectionTime":2000,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipShadowColor":"#333138","height":"100%","toolTipPaddingTop":4,"playbackBarHeight":10,"subtitlesTextShadowOpacity":1,"subtitlesTextShadowColor":"#000000","playbackBarHeadWidth":6,"playbackBarBackgroundOpacity":1,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","progressBorderRadius":2,"subtitlesFontSize":"3vmin","subtitlesFontColor":"#FFFFFF","playbackBarRight":0,"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"class":"ViewerArea","subtitlesBackgroundOpacity":0.2,"progressBorderColor":"#000000","progressLeft":"33%","toolTipBackgroundColor":"#F6F6F6","toolTipPaddingBottom":4,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorRatios":[0],"progressBarBackgroundColor":["#3399FF"],"subtitlesBottom":50,"subtitlesBorderColor":"#FFFFFF","toolTipBorderColor":"#767676","playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"vrPointerColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"toolTipFontColor":"#606060","toolTipPaddingRight":6,"click":"this.setModel3DCameraSpot(this.mainPlayList, this.Model3DPlayListItem_AAC31103_BDF7_81BB_41D8_B746269D77B7, {\"x\":-9173.40401,\"z\":1446.7964,\"yaw\":85.71,\"y\":3225.88317,\"pitch\":-29.99}, 1, 'cubic_in_out'); this.setPlayListSelectedIndex(this.mainPlayList, 0)","surfaceReticleColor":"#FFFFFF","id":"MainViewer","progressBackgroundColorRatios":[0],"subtitlesFontFamily":"Arial"},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_A8D8C2D5_BC76_805F_41E2_36AC31F5F4FB","id":"panorama_A95C63BB_BC76_80CB_41D7_D4A7B4CD5570_camera","enterPointingToHorizon":true},{"class":"Panorama","label":trans('panorama_A837D7A8_BC72_80F5_41E1_1B9F4007DD3A.label'),"thumbnailUrl":"media/panorama_A837D7A8_BC72_80F5_41E1_1B9F4007DD3A_t.jpg","data":{"label":"PARADISE"},"vfov":180,"hfovMax":130,"hfov":360,"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","rowCount":6,"url":"media/panorama_A837D7A8_BC72_80F5_41E1_1B9F4007DD3A_0/{face}/0/{row}_{column}.jpg","width":18432,"height":3072,"colCount":36,"tags":"ondemand"},{"class":"TiledImageResourceLevel","rowCount":3,"url":"media/panorama_A837D7A8_BC72_80F5_41E1_1B9F4007DD3A_0/{face}/1/{row}_{column}.jpg","width":9216,"height":1536,"colCount":18,"tags":"ondemand"},{"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_A837D7A8_BC72_80F5_41E1_1B9F4007DD3A_0/{face}/2/{row}_{column}.jpg","width":6144,"height":1024,"colCount":12,"tags":"ondemand"},{"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_A837D7A8_BC72_80F5_41E1_1B9F4007DD3A_0/{face}/3/{row}_{column}.jpg","width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"]},{"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_A837D7A8_BC72_80F5_41E1_1B9F4007DD3A_0/{face}/vr2gen/0.jpg","width":12288,"height":2048,"colCount":6,"tags":"mobilevr2gen"}]},"thumbnailUrl":"media/panorama_A837D7A8_BC72_80F5_41E1_1B9F4007DD3A_t.jpg"}],"id":"panorama_A837D7A8_BC72_80F5_41E1_1B9F4007DD3A","hfovMin":"120%"},{"class":"PanoramaPlayer","touchControlMode":"drag_rotation","mode":"quality","arrowKeysAction":"translate","displayPlaybackBar":true,"aaEnabled":true,"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"class":"Panorama","label":trans('panorama_A95C63BB_BC76_80CB_41D7_D4A7B4CD5570.label'),"thumbnailUrl":"media/panorama_A95C63BB_BC76_80CB_41D7_D4A7B4CD5570_t.jpg","data":{"label":"DELUX"},"vfov":180,"hfovMax":130,"hfov":360,"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","rowCount":6,"url":"media/panorama_A95C63BB_BC76_80CB_41D7_D4A7B4CD5570_0/{face}/0/{row}_{column}.jpg","width":18432,"height":3072,"colCount":36,"tags":"ondemand"},{"class":"TiledImageResourceLevel","rowCount":3,"url":"media/panorama_A95C63BB_BC76_80CB_41D7_D4A7B4CD5570_0/{face}/1/{row}_{column}.jpg","width":9216,"height":1536,"colCount":18,"tags":"ondemand"},{"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_A95C63BB_BC76_80CB_41D7_D4A7B4CD5570_0/{face}/2/{row}_{column}.jpg","width":6144,"height":1024,"colCount":12,"tags":"ondemand"},{"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_A95C63BB_BC76_80CB_41D7_D4A7B4CD5570_0/{face}/3/{row}_{column}.jpg","width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"]},{"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_A95C63BB_BC76_80CB_41D7_D4A7B4CD5570_0/{face}/vr2gen/0.jpg","width":12288,"height":2048,"colCount":6,"tags":"mobilevr2gen"}]},"thumbnailUrl":"media/panorama_A95C63BB_BC76_80CB_41D7_D4A7B4CD5570_t.jpg"}],"id":"panorama_A95C63BB_BC76_80CB_41D7_D4A7B4CD5570","hfovMin":"120%"},{"class":"PlayList","id":"mainPlayList","items":["this.Model3DPlayListItem_AAC31103_BDF7_81BB_41D8_B746269D77B7"]},{"class":"PlayList","id":"playList_AADEB062_BDF7_8075_41CC_D3F347A93B4B","items":["this.PanoramaPlayListItem_AAC26104_BDF7_81BD_41E7_0852213713A4"]},{"class":"PlayList","id":"playList_AADEA062_BDF7_8075_41BE_108422EF6E48","items":["this.PanoramaPlayListItem_AAC3B104_BDF7_81BD_41E2_C4C1BA1A2FDD"]},{"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_AE11FF82_BC51_80B5_41D3_754B1B140AF2","id":"panorama_AF2E8507_BC51_81BB_41D7_22A93ECEA5FF_camera","enterPointingToHorizon":true},{"class":"Model3DPlayer","id":"MainViewerModel3DPlayer","viewerArea":"this.MainViewer"},{"class":"Model3D","objects":["this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_0","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_2","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_4","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_6","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_8","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_10","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_12","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_14","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_16","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_18","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_20","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_22","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_24","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_26","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_28","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_30","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_32","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_34","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_36","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_38","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_40","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_42","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_44","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_46","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_48","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_50","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_52","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_54","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_56","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_58","this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_60","this.sprite_AD056D08_BC53_81B5_41CE_056E83FC419A","this.sprite_AE8825A5_BC72_80FF_41DC_E61D34C8FCA2","this.sprite_A95FC797_BC71_80DB_41D3_7A963CCB2634"],"label":trans('model_AC247B03_BC53_81BB_41E7_6DF86B5BE969.label'),"environmentIntensity":0.61,"surfaceReticleMaxRadius":50,"surfaceReticleRadius":0.02,"thumbnailUrl":"media/model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_t.jpg","lights":[],"surfaceSelectionCoef":2,"backgroundColor":"#333333","floorRadius":119956.32,"bakedTextures":true,"model":"this.res_AC938C22_BC53_87F5_41E0_DE3A914B4C10","surfaceReticleMinRadius":15,"camera":"this.cam_AC926C22_BC53_87F5_41DF_27610068AFC1","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969","backgroundImageURL":"media/model_AC247B03_BC53_81BB_41E7_6DF86B5BE969/bg_ACEAD3B2_BC56_80D5_41BD_11290A704608.jpg","data":{"showOnlyHotspotsLineSightInPanoramas":true,"showOnlyHotspotsLineSight":true,"label":"7"}},{"class":"Panorama","label":trans('panorama_AF2E8507_BC51_81BB_41D7_22A93ECEA5FF.label'),"thumbnailUrl":"media/panorama_AF2E8507_BC51_81BB_41D7_22A93ECEA5FF_t.jpg","data":{"label":"APPLE"},"vfov":180,"hfovMax":130,"hfov":360,"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"class":"TiledImageResourceLevel","rowCount":6,"url":"media/panorama_AF2E8507_BC51_81BB_41D7_22A93ECEA5FF_0/{face}/0/{row}_{column}.jpg","width":18432,"height":3072,"colCount":36,"tags":"ondemand"},{"class":"TiledImageResourceLevel","rowCount":3,"url":"media/panorama_AF2E8507_BC51_81BB_41D7_22A93ECEA5FF_0/{face}/1/{row}_{column}.jpg","width":9216,"height":1536,"colCount":18,"tags":"ondemand"},{"class":"TiledImageResourceLevel","rowCount":2,"url":"media/panorama_AF2E8507_BC51_81BB_41D7_22A93ECEA5FF_0/{face}/2/{row}_{column}.jpg","width":6144,"height":1024,"colCount":12,"tags":"ondemand"},{"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_AF2E8507_BC51_81BB_41D7_22A93ECEA5FF_0/{face}/3/{row}_{column}.jpg","width":3072,"height":512,"colCount":6,"tags":["ondemand","preload"]},{"class":"TiledImageResourceLevel","rowCount":1,"url":"media/panorama_AF2E8507_BC51_81BB_41D7_22A93ECEA5FF_0/{face}/vr2gen/0.jpg","width":12288,"height":2048,"colCount":6,"tags":"mobilevr2gen"}]},"thumbnailUrl":"media/panorama_AF2E8507_BC51_81BB_41D7_22A93ECEA5FF_t.jpg"}],"id":"panorama_AF2E8507_BC51_81BB_41D7_22A93ECEA5FF","hfovMin":"120%"},{"class":"PlayList","id":"playList_AADE9062_BDF7_8075_41D2_067152FE7776","items":["this.PanoramaPlayListItem_AAC24104_BDF7_81BD_41E6_60EF9AC2BF1E"]},{"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_AFF6CAB6_BC72_80DD_41D0_8A7B3D473B79"},{"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_A8D8C2D5_BC76_805F_41E2_36AC31F5F4FB"},{"class":"Model3DPlayListItem","start":"this.MainViewerModel3DPlayer.set('displayPlaybackBar', true)","id":"Model3DPlayListItem_AAC31103_BDF7_81BB_41D8_B746269D77B7","end":"this.trigger('tourEnded')","media":"this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969","player":"this.MainViewerModel3DPlayer"},{"class":"PanoramaPlayListItem","camera":"this.panorama_A837D7A8_BC72_80F5_41E1_1B9F4007DD3A_camera","media":"this.panorama_A837D7A8_BC72_80F5_41E1_1B9F4007DD3A","id":"PanoramaPlayListItem_AAC26104_BDF7_81BD_41E7_0852213713A4","player":"this.MainViewerPanoramaPlayer"},{"class":"PanoramaPlayListItem","camera":"this.panorama_AF2E8507_BC51_81BB_41D7_22A93ECEA5FF_camera","media":"this.panorama_AF2E8507_BC51_81BB_41D7_22A93ECEA5FF","id":"PanoramaPlayListItem_AAC3B104_BDF7_81BD_41E2_C4C1BA1A2FDD","player":"this.MainViewerPanoramaPlayer"},{"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_AE11FF82_BC51_80B5_41D3_754B1B140AF2"},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_0","clickEnabled":false,"objectId":"31","data":{"label":"Location Terrain [1356802]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_2","clickEnabled":false,"objectId":"33","data":{"label":"Location Terrain#1 [1356808]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_4","clickEnabled":false,"objectId":"35","data":{"label":"Location Terrain#2 [1356814]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_6","clickEnabled":false,"objectId":"37","data":{"label":"Location Terrain#3 [1356820]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_8","clickEnabled":false,"objectId":"39","data":{"label":"Location Terrain#4 [1356826]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_10","clickEnabled":false,"objectId":"41","data":{"label":"Location Terrain#5 [1356832]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_12","clickEnabled":false,"objectId":"43","data":{"label":"Location Terrain#6 [1356838]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_14","clickEnabled":false,"objectId":"45","data":{"label":"Location Terrain#7 [1356844]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_16","clickEnabled":false,"objectId":"47","data":{"label":"Location Terrain#8 [1356850]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_18","clickEnabled":false,"objectId":"49","data":{"label":"Location Terrain#9 [1356856]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_20","clickEnabled":false,"objectId":"51","data":{"label":"Location Terrain#10 [1356862]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_22","clickEnabled":false,"objectId":"53","data":{"label":"Location Terrain#11 [1356868]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_24","clickEnabled":false,"objectId":"55","data":{"label":"Location Terrain#12 [1356874]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_26","clickEnabled":false,"objectId":"57","data":{"label":"Location Terrain#13 [1356880]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_28","clickEnabled":false,"objectId":"59","data":{"label":"Location Terrain#14 [1356886]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_30","clickEnabled":false,"objectId":"61","data":{"label":"Location Terrain#15 [1356892]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_32","clickEnabled":false,"objectId":"63","data":{"label":"Location Terrain#16 [1356898]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_34","clickEnabled":false,"objectId":"65","data":{"label":"Location Terrain#17 [1356904]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_36","clickEnabled":false,"objectId":"67","data":{"label":"Location Terrain#18 [1356910]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_38","clickEnabled":false,"objectId":"69","data":{"label":"Location Terrain#19 [1356916]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_40","clickEnabled":false,"objectId":"71","data":{"label":"Location Terrain#20 [1356922]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_42","clickEnabled":false,"objectId":"73","data":{"label":"Location Terrain#21 [1356928]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_44","clickEnabled":false,"objectId":"75","data":{"label":"Location Terrain#22 [1356934]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_46","clickEnabled":false,"objectId":"77","data":{"label":"Location Terrain#23 [1356940]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_48","clickEnabled":false,"objectId":"79","data":{"label":"Location Terrain#24 [1356946]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_50","clickEnabled":false,"objectId":"81","data":{"label":"Location Terrain#25 [1356952]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_52","clickEnabled":false,"objectId":"83","data":{"label":"Location Terrain#26 [1356958]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_54","clickEnabled":false,"objectId":"85","data":{"label":"Location Terrain#27 [1356964]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_56","clickEnabled":false,"objectId":"87","data":{"label":"Location Terrain#28 [1356970]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_58","clickEnabled":false,"objectId":"89","data":{"label":"Location Terrain#29 [1356976]"},"rollOverEnabled":false},{"class":"InnerModel3DObject","id":"model_AC247B03_BC53_81BB_41E7_6DF86B5BE969_60","clickEnabled":false,"objectId":"91","data":{"label":"Location Terrain#30 [1356982]"},"rollOverEnabled":false},{"parentId":"31","depthTest":false,"anchorY":0.52,"x":-2577595.832245791,"y":1403593.2107197675,"z":44661.46115084319,"image":"this.AnimatedImageResource_AADFF041_BDF7_BFB7_41C1_ADF218250B29","data":{"label":"Circle Arrow 01 Down"},"class":"SpriteModel3DObject","translationX":0.03,"translationY":-0.04,"transparentAreaActive":true,"anchorX":0.39,"translationZ":1,"width":73,"height":73,"click":"this.setPanoramaCameraWithSpot(this.playList_AADEA062_BDF7_8075_41BE_108422EF6E48, this.PanoramaPlayListItem_AAC3B104_BDF7_81BD_41E2_C4C1BA1A2FDD, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setMediaBehaviour(this.playList_AADEA062_BDF7_8075_41BE_108422EF6E48, 0, this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969, true)","translationLength":-3,"id":"sprite_AD056D08_BC53_81B5_41CE_056E83FC419A"},{"parentId":"41","depthTest":false,"x":-3517477.9694426022,"y":3148254.536915434,"z":402807.2434075736,"image":"this.AnimatedImageResource_AADFB041_BDF7_BFB7_41DE_7833A3B45E93","data":{"label":"Circle Arrow 01 Down"},"class":"SpriteModel3DObject","translationX":-0.41,"translationY":0,"transparentAreaActive":true,"translationZ":0.91,"width":73,"height":73,"click":"this.setPanoramaCameraWithSpot(this.playList_AADEB062_BDF7_8075_41CC_D3F347A93B4B, this.PanoramaPlayListItem_AAC26104_BDF7_81BD_41E7_0852213713A4, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setMediaBehaviour(this.playList_AADEB062_BDF7_8075_41CC_D3F347A93B4B, 0, this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969, true)","translationLength":0,"id":"sprite_AE8825A5_BC72_80FF_41DC_E61D34C8FCA2"},{"parentId":"35","depthTest":false,"x":620769.6914184765,"y":-1096986.334914342,"z":16724.464020575397,"image":"this.AnimatedImageResource_AADF9041_BDF7_BFB7_41DC_A31B7234D34F","data":{"label":"Circle Arrow 01 Down"},"class":"SpriteModel3DObject","translationX":-0.03,"translationY":-0.02,"transparentAreaActive":true,"translationZ":1,"width":73,"height":73,"click":"this.setPanoramaCameraWithSpot(this.playList_AADE9062_BDF7_8075_41D2_067152FE7776, this.PanoramaPlayListItem_AAC24104_BDF7_81BD_41E6_60EF9AC2BF1E, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setMediaBehaviour(this.playList_AADE9062_BDF7_8075_41D2_067152FE7776, 0, this.model_AC247B03_BC53_81BB_41E7_6DF86B5BE969, true)","translationLength":0,"id":"sprite_A95FC797_BC71_80DB_41D3_7A963CCB2634"},{"class":"Model3DResource","levels":[{"class":"Model3DResourceLevel","url":"media/model_AC247B03_BC53_81BB_41E7_6DF86B5BE969/scene.glb"},{"class":"Model3DResourceLevel","url":"media/model_AC247B03_BC53_81BB_41E7_6DF86B5BE969/scene_mobile.glb","tags":"mobile"}],"id":"res_AC938C22_BC53_87F5_41E0_DE3A914B4C10"},{"class":"FlyOverModel3DCamera","minPitch":-90,"initialY":3225.88,"minX":-168033.48,"autoNearFar":true,"minZ":-94648.61,"maxX":191835.47,"initialPitch":-30,"initialZ":1446.8,"maxY":13257.33,"initialYaw":85.71,"minHeight":2398.11,"keepHeight":false,"maxPitch":45,"maxZ":102580.26,"id":"cam_AC926C22_BC53_87F5_41DF_27610068AFC1","initialX":-9173.39,"minY":-1704.25},{"class":"PanoramaPlayListItem","camera":"this.panorama_A95C63BB_BC76_80CB_41D7_D4A7B4CD5570_camera","media":"this.panorama_A95C63BB_BC76_80CB_41D7_D4A7B4CD5570","id":"PanoramaPlayListItem_AAC24104_BDF7_81BD_41E6_60EF9AC2BF1E","player":"this.MainViewerPanoramaPlayer"},{"class":"AnimatedImageResource","rowCount":6,"frameDuration":41,"colCount":4,"finalFrame":"first","levels":[{"class":"ImageResourceLevel","url":"media/res_AF5A004F_BC6E_804B_41D2_2027ACB1EFAF_0.png","width":584,"height":876}],"id":"AnimatedImageResource_AADFF041_BDF7_BFB7_41C1_ADF218250B29","frameCount":24},{"class":"AnimatedImageResource","rowCount":6,"frameDuration":41,"colCount":4,"finalFrame":"first","levels":[{"class":"ImageResourceLevel","url":"media/res_AF5A004F_BC6E_804B_41D2_2027ACB1EFAF_0.png","width":584,"height":876}],"id":"AnimatedImageResource_AADFB041_BDF7_BFB7_41DE_7833A3B45E93","frameCount":24},{"class":"AnimatedImageResource","rowCount":6,"frameDuration":41,"colCount":4,"finalFrame":"first","levels":[{"class":"ImageResourceLevel","url":"media/res_AF5A004F_BC6E_804B_41D2_2027ACB1EFAF_0.png","width":584,"height":876}],"id":"AnimatedImageResource_AADF9041_BDF7_BFB7_41DC_A31B7234D34F","frameCount":24}],"backgroundColor":["#FFFFFF"],"minHeight":0,"minWidth":0,"class":"Player","scripts":{"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"initQuiz":TDV.Tour.Script.initQuiz,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"getMainViewer":TDV.Tour.Script.getMainViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"resumePlayers":TDV.Tour.Script.resumePlayers,"createTween":TDV.Tour.Script.createTween,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"initAnalytics":TDV.Tour.Script.initAnalytics,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizShowScore":TDV.Tour.Script.quizShowScore,"showWindow":TDV.Tour.Script.showWindow,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"executeJS":TDV.Tour.Script.executeJS,"quizStart":TDV.Tour.Script.quizStart,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"shareSocial":TDV.Tour.Script.shareSocial,"mixObject":TDV.Tour.Script.mixObject,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizFinish":TDV.Tour.Script.quizFinish,"init":TDV.Tour.Script.init,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"downloadFile":TDV.Tour.Script.downloadFile,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"existsKey":TDV.Tour.Script.existsKey,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setLocale":TDV.Tour.Script.setLocale,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"textToSpeech":TDV.Tour.Script.textToSpeech,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"registerKey":TDV.Tour.Script.registerKey,"translate":TDV.Tour.Script.translate,"getOverlays":TDV.Tour.Script.getOverlays,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"cloneBindings":TDV.Tour.Script.cloneBindings,"setValue":TDV.Tour.Script.setValue,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"playAudioList":TDV.Tour.Script.playAudioList,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getComponentByName":TDV.Tour.Script.getComponentByName,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"clone":TDV.Tour.Script.clone,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getMediaByName":TDV.Tour.Script.getMediaByName,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setMapLocation":TDV.Tour.Script.setMapLocation,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"openLink":TDV.Tour.Script.openLink,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"isPanorama":TDV.Tour.Script.isPanorama,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"startMeasurement":TDV.Tour.Script.startMeasurement,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPixels":TDV.Tour.Script.getPixels,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getKey":TDV.Tour.Script.getKey},"gap":10,"width":"100%","height":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.1.0-beta.11761.js.map
})();
//Generated with v2023.1.0-beta.11761, Wed Apr 26 2023