/**
 * Created by WS8 on 5/11/14.
 */

var FlowchartDropDown =

{
    init:function()
    {
        var links = $("a.flowchartLink");
        var info = links.parent().next().next().next().next();


        for(var i=0, ii=links.length; i<ii; i++)
        {
            $(links[i]).click(function()
            {
                /*
                for (var j= 0, jj=links.length; j<jj; j++)
                {


                        var infoj = $(links[j]).parent().next().next().next().next();
                        $(links[j]).addClass('inactive');
                        $(links[j]).removeClass('active');
                        infoj.addClass('hidden');
                        infoj.removeClass('visible');

                }
                */

                var info = $(this).parent().next().next().next().next();
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
                    var boxLink = box.prev().prev().prev().prev().children();
                    boxLink.addClass('inactive');
                    boxLink.removeClass('active');
                }

            });
        }

/*
        var link1=$(links[0]);
        var info1=$(info[0]);
        var link2=$(links[1]);
        var info2=$(info[1]);
        var link3=$(links[2]);
        var info3=$(info[2]);
        var link4=$(links[3]);
        var info4=$(info[3]);


        link1.click(function()
            {
            if(link1.hasClass('inactive'))
            {
                link1.addClass('active');
                link1.removeClass('inactive');
                info1.addClass('visible');
                info1.removeClass('hidden');

                if(link2.hasClass('active'))
                {
                    link2.addClass('inactive');
                    link2.removeClass('active');
                    info2.addClass('hidden');
                    info2.removeClass('visible');
                }
                if(link3.hasClass('active'))
                {
                    link3.addClass('inactive');
                    link3.removeClass('active');
                    info3.addClass('hidden');
                    info3.removeClass('visible');
                }
                if(link4.hasClass('active'))
                {
                    link4.addClass('inactive');
                    link4.removeClass('active');
                    info4.addClass('hidden');
                    info4.removeClass('visible');
                }

            }
            else if(link1.hasClass('active'))
            {
                link1.addClass('inactive');
                link1.removeClass('active');
                info1.addClass('hidden');
                info1.removeClass('visible');
            }
            }

        );

        link2.click(function()
            {
                if(link2.hasClass('inactive'))
                {
                    link2.addClass('active');
                    link2.removeClass('inactive');
                    info2.addClass('visible');
                    info2.removeClass('hidden');

                    if(link1.hasClass('active'))
                    {
                        link1.addClass('inactive');
                        link1.removeClass('active');
                        info1.addClass('hidden');
                        info1.removeClass('visible');
                    }
                    if(link3.hasClass('active'))
                    {
                        link3.addClass('inactive');
                        link3.removeClass('active');
                        info3.addClass('hidden');
                        info3.removeClass('visible');
                    }
                    if(link4.hasClass('active'))
                    {
                        link4.addClass('inactive');
                        link4.removeClass('active');
                        info4.addClass('hidden');
                        info4.removeClass('visible');
                    }

                }
                else if(link2.hasClass('active'))
                {
                    link2.addClass('inactive');
                    link2.removeClass('active');
                    info2.addClass('hidden');
                    info2.removeClass('visible');
                }
            }

        );

        link3.click(function()
            {
                if(link3.hasClass('inactive'))
                {
                    link3.addClass('active');
                    link3.removeClass('inactive');
                    info3.addClass('visible');
                    info3.removeClass('hidden');

                    if(link2.hasClass('active'))
                    {
                        link2.addClass('inactive');
                        link2.removeClass('active');
                        info2.addClass('hidden');
                        info2.removeClass('visible');
                    }
                    if(link1.hasClass('active'))
                    {
                        link1.addClass('inactive');
                        link1.removeClass('active');
                        info1.addClass('hidden');
                        info1.removeClass('visible');
                    }
                    if(link4.hasClass('active'))
                    {
                        link4.addClass('inactive');
                        link4.removeClass('active');
                        info4.addClass('hidden');
                        info4.removeClass('visible');
                    }

                }
                else if(link3.hasClass('active'))
                {
                    link3.addClass('inactive');
                    link3.removeClass('active');
                    info3.addClass('hidden');
                    info3.removeClass('visible');
                }
            }

        );

        link4.click(function()
            {
                if(link4.hasClass('inactive'))
                {
                    link4.addClass('active');
                    link4.removeClass('inactive');
                    info4.addClass('visible');
                    info4.removeClass('hidden');

                    if(link2.hasClass('active'))
                    {
                        link2.addClass('inactive');
                        link2.removeClass('active');
                        info2.addClass('hidden');
                        info2.removeClass('visible');
                    }
                    if(link3.hasClass('active'))
                    {
                        link3.addClass('inactive');
                        link3.removeClass('active');
                        info3.addClass('hidden');
                        info3.removeClass('visible');
                    }
                    if(link1.hasClass('active'))
                    {
                        link1.addClass('inactive');
                        link1.removeClass('active');
                        info1.addClass('hidden');
                        info1.removeClass('visible');
                    }

                }
                else if(link4.hasClass('active'))
                {
                    link4.addClass('inactive');
                    link4.removeClass('active');
                    info4.addClass('hidden');
                    info4.removeClass('visible');
                }
            }

        );
*/

    },




    clickFunction:function(link)
    {

        alert($(link).text());
    }
};

FlowchartDropDown.init();
