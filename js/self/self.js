$(".form_datetime").datetimepicker({
    minView: "month", //选择日期后，不会再跳转去选择时分秒
    format: "yyyy-mm-dd", //选择日期后，文本框显示的日期格式
    language: 'zh-CN', //汉化
    autoclose:true //选择日期后自动关闭
});

/*------富文本编辑器--------*/
layui.use('layedit', function(){
    var layedit = layui.layedit
        ,$ = layui.jquery;

    //构建一个默认的编辑器
    var index = layedit.build('LAY_demo1');

    //编辑器外部操作
    var active = {
        content: function(){
            alert(layedit.getContent(index)); //获取编辑器内容
        }
        ,text: function(){
            alert(layedit.getText(index)); //获取编辑器纯文本内容
        }
        ,selection: function(){
            alert(layedit.getSelection(index));
        }
    };

    $('.site-demo-layedit').on('click', function(){
        var type = $(this).data('type');
        active[type] ? active[type].call(this) : '';
    });

    //自定义工具栏
    layedit.build('LAY_demo2', {
        tool: ['face', 'link', 'unlink', '|', 'left', 'center', 'right']
        ,height: 100
    })
});