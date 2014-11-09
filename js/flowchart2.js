/**
 * Created by WS8 on 5/11/14.
 */

var FlowchartDropDown =

{
    init:function()
    {
        var links = $("a.flowchartLink");
        var info = links.parent().next().next().next().next();

        var link1 = links[0];
        var link2 = links[1];
        var link3 = links[2];
        var link4 = links[3];

/*
        var info1 = info[0];
        var info2 = info[1];
        var info3 = info[2];
        var info4 = info[3];

        */

        link1.click(FlowchartDropDown.clickFunction(link1));
        link2.click(FlowchartDropDown.clickFunction(link2));
        link3.click(FlowchartDropDown.clickFunction(link3));
        link4.click(FlowchartDropDown.clickFunction(link4));

           // $(links[i]).on("click", FlowchartDropDown.clickFunction());
    },

    clickFunction:function(linkid)
    {
        console.log("clicked");
        var link = linkid;
        link.click(function()
            {
                var info = link.parent().next().next().next().next();

                if (link.hasClass("inactive"))
                {
                    link.addClass("active");
                    link.removeClass("inactive");
                    info.removeClass("hidden");
                    info.addClass("visible");
                    console.log("inactive -> active");
                }

                else if (link.hasClass("active"))
                {
                    link.addClass("inactive");
                    link.removeClass("active");
                    info.removeClass("visible");
                    info.addClass("hidden");
                    console.log("active -> inactive");
                }
            }

        )
    }

    /*,

    clickShow:function(link,info)
    {
;
    },

    clickHide:function(link,info)
    {

    }
    */
};

FlowchartDropDown.init();
