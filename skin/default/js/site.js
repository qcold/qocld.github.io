//一般直接写在一个js文件中
layui.use(['layer', 'element', 'carousel', 'util', 'form'], function () {
    var layer = layui.layer
        , element = layui.element
        , carousel = layui.carousel
        , util = layui.util
        , form = layui.form;

    //幻灯片模块
    //建造实例
    carousel.render({
        elem: '#test1'
        , height: '300px'
        , width: '100%' //设置容器宽度
        , arrow: 'always' //始终显示箭头
        //,anim: 'hover' //切换动画方式
    });

    $(function () {
        //播放公告
        playAnnouncement(3000);
    });

    function playAnnouncement(interval) {
        var index = 0;
        var $announcement = $('.home-tips-container>span');
        //自动轮换
        setInterval(function () {
            index++;    //下标更新
            if (index >= $announcement.length) {
                index = 0;
            }
            $announcement.eq(index).stop(true, true).fadeIn().siblings('span').fadeOut();  //下标对应的图片显示，同辈元素隐藏
        }, interval);
    }

    $(".fly-tags a").wrap("<dd></dd>");
    $(".fly-link .fly-panel-main a").wrap("<dd></dd>");


    //列表页分页处理
    $("#paging a b").parent().remove();

    if ($("#paging").html() != undefined) {
        $("#paging").html($("#paging").html().replace(/&nbsp;/gi, ''));
    }

    //内容页上下文改为按钮
    $("#pre a").addClass("layui-btn");
    $("#pre a").text("← " + $("#pre a").text());
    $("#next a").addClass("layui-btn");
    $("#next a").text($("#next a").text() + " →");


    //点击搜索按钮弹出搜索框
    $("#search").click(function () {
        if ($("#search-bar").css("display") == "none") {
            $("#search-bar").slideDown();
        } else {
            $("#search-bar").slideUp("slow");
        }
    });

    //手机版导航条显隐逻辑
    $("#menu").click(function () {
        if ($(".menuBar").css("display") == "none") {
            $(".menuBar").slideDown();
        } else {
            $(".menuBar").slideUp("slow");
        }
    });

    $(".detail-body img").attr({width: '', height: ''});

    //返回页首开始
    $(window).scroll(function () {
        if ($(this).scrollTop() > 120) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    });

    //赞助按钮点击事件
    $(".donate").click(function () {
        layer.open({
            type: 2,
            title: 'PayPal',
            shadeClose: true,
            shade: 0.8,
            area: ['380px', '90%'],
            content: '感谢支持，丹乐网已关闭所有赞助方式，我们有缘再见！'
        });
    });

    //新域名提示
    layer.msg('欢迎来到丹乐网的存档库，请保存我们的域名www.flymore.ga', {icon: 4});
    //支付宝红包弹窗
/*    var cookie_hongbao = $.cookie("hongbao");
    if(cookie_hongbao==null){
        hongbao();
        $.cookie("hongbao","1",{expires: 1, path: '/'});
    }*/

    //支付宝红包弹窗
    /*function hongbao() {
        layer.open({
            type: 1,
            title: '支付宝大额现金红包',
            resize: false,
            area: '300px',
            offset: '50px',
            moveType: 2,
            shade: 0.8,
            shadeClose: false, //点击遮罩关闭
            content: '<div style="background-color: #CC0033; padding:20px;text-align: center;font-size: 12px;color: #ffffff;">\n' +
                '    <p style="font-size: 22px;font-weight: bold;">建站不易 <span style="color: #FF99CC">歡迎打賞</span></p>\n' +
                '    <div style="border: 2px dotted #CCFF00;color: #CCFF00;background-color: #CC0000;margin: 10px 0;padding: 10px 0;">\n' +
                '        <p>每天打开支付宝首页搜索</p>\n' +
                '    <p style="font-weight: bold;padding: 5px 0;color: #CCFF00;font-size: 32px">4458905</p>\n' +
                '    </div>\n' +
                '<button style="font-size: 16px;color: #FF5722;background-color: #CCFF00;border-radius:10px;padding: 2px 10px;border: hidden;" onclick="window.open(\'https://qr.alipay.com/\')">打开支付宝领红包</button>\n' +
                '    <p style="padding-top: 8px;font-size: 12px;color: #00FF99;">小姐姐,不能因为长得靓就不领哦,快收下您的小确幸！</p>\n' +
                '    <p style="padding-top: 8px;font-size: 10px;color: #ffffff;">(你每领一次并使用，我们就获得0.1元援助！！！如果没有地方使用，请扫描本站收款码打赏，谢谢支持!)</p>\n' +
                '</div>'
        });
    }*/
});