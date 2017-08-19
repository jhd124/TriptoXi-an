var app = app||{};
(function(){
    app.model = {
        //地点数据
        locations: [ { lat: '34.212773',
                lng: '108.974336',
                name: '大唐芙蓉园',
                status: 1,
                address: '芙蓉西路99号' },
            { lat: '34.353552',
                lng: '109.215236',
                name: '华清宫',
                status: 1,
                address: '华清路38号' },
            { lat: '34.218285',
                lng: '108.964162',
                name: '大雁塔',
                status: 1,
                address: '雁塔南路附近' },
            { lat: '34.047558',
                lng: '108.866394',
                name: '西安秦岭野生动物园',
                status: 1,
                address: '107省道南500米' },
            { lat: '34.246352',
                lng: '108.907956',
                name: '大唐西市',
                status: 1,
                address: '劳动南路118号' },
            { lat: '34.251854',
                lng: '108.948302',
                name: '西安城墙',
                status: 1,
                address: '大南门月城内' },
            { lat: '33.91093',
                lng: '108.033989',
                name: '黑河国家森林公园',
                status: 1,
                address: '108国道与砂厚路交汇处西' },
            { lat: '34.237309',
                lng: '108.940713',
                name: '西安博物院',
                status: 1,
                address: '友谊西路72号' },
            { lat: '33.917289',
                lng: '108.65787',
                name: '太平国家森林公园',
                status: 1,
                address: '煤场村' },
            { lat: '34.009117',
                lng: '108.642458',
                name: '金龙峡',
                status: 1,
                address: '秦岭北麓将军山西侧' },
            { lat: '34.027159',
                lng: '108.974166',
                name: '关中民俗艺术博物院',
                status: 1,
                address: '五台镇南五台山路1号' },
            { lat: '34.29233',
                lng: '108.963628',
                name: '大明宫国家遗址公园',
                status: 1,
                address: '自强东路' },
            { lat: '34.323164',
                lng: '109.061304',
                name: '西安世博园',
                status: 1,
                address: '世博大道1号' },
            { lat: '34.298079',
                lng: '108.903488',
                name: '汉城湖旅游风景区',
                status: 1,
                address: '北二环与朱宏路交汇处西北角' },
            { lat: '33.784190',
                lng: '108.572875',
                name: '秦岭终南山地质公园朱雀景区',
                status: 1,
                address: '户菜路' },
            { lat: '33.966059',
                lng: '108.809561',
                name: '西安祥峪森林公园',
                status: 1,
                address: '东大镇祥峪沟村' },
            { lat: '34.227029',
                lng: '108.943286',
                name: '大兴善寺',
                status: 1,
                address: '小寨兴善寺西街55号' },
            { lat: '34.364278',
                lng: '109.217236',
                name: '临潼博物馆',
                status: 1,
                address: '环城东路1号' },
            { lat: '34.274564',
                lng: '108.925868',
                name: '广仁寺',
                status: 1,
                address: '城墙西北角西北一路152号' },
            { lat: '34.182894',
                lng: '109.494983',
                name: '蓝田猿人遗址',
                status: 1,
                address: '九间房镇公王岭蓝田猿人遗址' },
            { lat: '34.013726',
                lng: '108.743999',
                name: '草堂寺',
                status: 1,
                address: '草堂镇草堂村西北角' },
            { lat: '34.107946',
                lng: '108.494207',
                name: '重阳宫',
                status: 1,
                address: '祖庵镇' },
            { lat: '34.272872',
                lng: '108.954601',
                name: '八路军西安办事处纪念馆',
                status: 1,
                address: '北新街七贤庄内' },
            { lat: '34.131906',
                lng: '109.416814',
                name: '水陆庵',
                status: 1,
                address: '普化镇王顺山下' },
            { lat: '33.932873',
                lng: '108.875124',
                name: '万华山',
                status: 1,
                address: '沣峪口内210国道46公里处' },
            { lat: '34.295145',
                lng: '109.087878',
                name: '灞桥生态湿地公园',
                status: 1,
                address: '东城大道' },
            { lat: '33.898747',
                lng: '108.85487',
                name: '西安沣峪庄园',
                status: 1,
                address: '青岗树村' },
            { lat: '34.174143',
                lng: '109.307928',
                name: '蔡文姬纪念馆',
                status: 1,
                address: '文姬路' },
            { lat: '34.069724',
                lng: '109.410718',
                name: '西安辋川溶洞',
                status: 1,
                address: '辋川镇' },
            { lat: '33.93866',
                lng: '108.837486',
                name: '连珠潭风景区',
                status: 1,
                address: '沣峪口内17公里处' },
            { lat: '34.259458',
                lng: '108.947001',
                name: '西安钟楼',
                status: 1,
                address: '东西南北四条大街交汇处' },
            { lat: '34.220797',
                lng: '108.964162',
                name: '大雁塔北广场',
                status: 1,
                address: '芙蓉东路3号' },
            { lat: '34.239055',
                lng: '108.94161',
                name: '小雁塔',
                status: 1,
                address: '友谊西路72号' },
            { lat: '34.260204',
                lng: '108.943518',
                name: '西安鼓楼',
                status: 1,
                address: '北院门74号' },
            { lat: '34.196597',
                lng: '108.892106',
                name: '永阳公园',
                status: 1,
                address: '唐延南路1号' },
            { lat: '34.259782',
                lng: '108.94258',
                name: '钟鼓楼广场',
                status: 1,
                address: '北院门与西大街交叉口西北100米' },
            { lat: '34.198614',
                lng: '108.991242',
                name: '曲江寒窑遗址公园',
                status: 1,
                address: '寒窑路18号' },
            { lat: '34.23254',
                lng: '108.989834',
                name: '乐游原-青龙寺(雁翔路)',
                status: 1,
                address: '西影路与雁翔路十字向北350米' },
            { lat: '34.268895',
                lng: '108.940519',
                name: '莲湖公园',
                status: 1,
                address: '莲湖路18号(近莲花池街)' },
            { lat: '34.263971',
                lng: '108.954197',
                name: '新城广场',
                status: 1,
                address: '东新街256号(近省政府)' } ],
        //从维基百科取回地点数据
        /**
         * @param marker: google map marker对象
         * @param callback: 回调函数，
         * 如果维基百科中含有该条目，则callback带有一个对象类型参数，
         * 该对象有两个属性，1、维基百科关于该地点的摘要，2、通向维基百科该条目页面的链接
         * 如果没得到结果，参数为null
         * 如果请求出错，参数为错误信息
         */
        getSpotWikiExtract: function(marker,callback){
            var wikiEnd = "https://zh.wikipedia.org/wiki/";
            var wikiQueryString = "https://zh.wikipedia.org/w/api.php?"+$.param({
                action: "query",
                prop: "extracts",
                // exchars: 100,
                exsentences:2,
                titles: marker.title,
                explaintext: true,
                exsectionformat: "plain",
                format:"json"
            })
             $.ajax({
                url:wikiQueryString,
                method:'get',
                dataType:'jsonp',
                success: function(data){
                    var extract = Object.entries(data.query.pages)[0][1]
                    console.dir(extract)
                    if(extract.hasOwnProperty("extract")){
                        callback({
                            extract: extract.extract,
                            link: wikiEnd+marker.title
                        })
                    }else{
                        callback(null)
                    }
                },
                error: function(xhr,errtext){
                    callback(errtext)
                }
            })
        }
    }
    // 地图的viewmodel
    app.mapViewModel = {
        initMap: function(){
            var map = new google.maps.Map(document.getElementById("map"));
            app.mapViewModel.map = map
            var largeInfowindow = new google.maps.InfoWindow();
        
            map.setCenter({lat:34.259431, lng: 108.947015})
            map.setZoom(9)
            app.mapViewModel.initMarker(map,largeInfowindow);

            var listItems = document.getElementsByClassName('listView-items');
            for(var i=0;i<listItems.length;i++){
                listItems[i].addEventListener('click',(function(i){
                    return function(){
                    app.mapViewModel.markerClick(app.mapViewModel.markers[i],largeInfowindow)
                    }
                })(i))
            }
        },
        markers: [],
        //marker初始化方法
        /*
         @param map: google map Map 对象
         @param infowindow: google map infowindow 对象
         */
        initMarker: function(map,infowindow){
            
            for(var i = 0 ; i < app.model.locations.length ; i++){
                var lat = parseFloat(app.model.locations[i].lat);
                var lng = parseFloat(app.model.locations[i].lng);

                var marker = new google.maps.Marker({
                    position: {lat:lat,lng:lng},
                    map: map,
                    title: app.model.locations[i].name,
                })

                marker.address = app.model.locations[i].address;

                marker.addListener('click',function(){
                    var self = this
                    app.mapViewModel.markerClick(self,infowindow);
                })

                marker.addListener('dblclick',function(){
                    this.setAnimation(null)
                })

                this.markers.push(marker)
            }
        },
        //点击一个marker时，让它上下跳动，并呼出infowindow
        markerClick: function(marker,infowindow){
            marker.setAnimation(google.maps.Animation.BOUNCE)
            app.mapViewModel.populateInfoWindow(marker, infowindow);
        },

        //放infowindow，包含地点的基本信息和维基百科关于该地点的摘要，以及一个通向维基百科页面的链接
        /*
        @param marker: google map marker对象
        @param infowindow: google map infoWindow对象
        */
        populateInfoWindow: function(marker, infowindow) {
        if (infowindow.marker != marker) {
          infowindow.setContent('');
          infowindow.marker = marker;
          infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
          });
        app.model.getSpotWikiExtract(marker,function(data){
            if(data){
                infowindow.setContent('<div>' + marker.title + '</div><div><p>'+data.extract+'</p><p>地址：'+marker.address+'</p><a href='+data.link+' target="_blank">查看更多</a></div>');
            }else{
                infowindow.setContent('<div>' + marker.title + '</div><div><p>地址：'+marker.address+'</p></div>');
            }
        })
        infowindow.open(app.mapViewModel.map, marker);
        }
      }
    }
    //列表viewmodel
    var viewModel = function(){

        this.pointList = ko.observableArray(app.model.locations)
        this.filter = ko.observable();
        /*根据搜索框的输入确定列表中条目的隐藏和显示
        @param obj ：app.model.locations里的地点对象
        @return boolean ：返回一个布尔值，如果条目的名称跟用户的输入相符，则返回true 否则返回false
        */
        this.isShown = function(obj){
            
            var regexp = new RegExp(this.filter(),'g');

            var matchtest = regexp.test(obj.name)
            
            if(matchtest===false){
                obj.status=0;
            }else{
                obj.status=1;
            }
           
            return matchtest;
        }
        /*
         根据app.model.locations里各个地点对象的status属性决定是否显示marker
        */
        this.reputMarkers = function(){
            console.log(9)
            for(var i=0;i<app.model.locations.length;i++){
                if(app.model.locations[i].status===0){
                    app.mapViewModel.markers[i].setMap(null)
                }else{
                    app.mapViewModel.markers[i].setMap(app.mapViewModel.map)
                }
            }
        }
        // 控制小屏幕上汉堡菜单的隐藏显示
        this.toggleControlPanel = function(){
            var controlPanel = $('#controlPanel')
            controlPanel.toggleClass('controlPanel');
            controlPanel.toggleClass('controlPanelShow');
        }
    }


    app.viewModel = new viewModel()
    ko.applyBindings(app.viewModel)
})()
window.onload=function(){
    
}