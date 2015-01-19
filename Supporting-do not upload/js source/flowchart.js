/**
 * Created by WS8 on 5/11/14.
 */

var FlowchartDropDown =

{
    init:function()
    {
        var links = $("a.flowchartLink");
        var info = links.parent().next().next().next().next().next().next();


        for(var i=0, ii=links.length; i<ii; i++)
        {
            $(links[i]).click(function()
            {

                var info = $(this).parent().next().next().next().next().next().next();
                if($(this).hasClass('active'))
                {
                    $(this).addClass('inactive');
                    $(this).removeClass('active');
                    info.addClass('hidden');
                    info.removeClass('visible');
                }
                else
                {
                    $(this).addClass('active');
                    $(this).removeClass('inactive');
                    info.addClass('visible');
                    info.removeClass('hidden');

                    var box = info.siblings(".visible");
                    box.addClass('hidden');
                    box.removeClass('visible');
                    var boxLink = box.prev().prev().prev().prev().prev().prev().children();
                    boxLink.addClass('inactive');
                    boxLink.removeClass('active');
                }

            });
        }

    }
};

FlowchartDropDown.init();
