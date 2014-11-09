/**
 * Created by WS8 on 28/10/14.
 */

var FlowchartDropDown =
{
    init: function()
    {

        var flowchartLinks = $(".flowchartLink");

        for (var i=0, ii=flowchartLinks.length; i<ii; i++)
        {
            $(flowchartLinks[i]).bind("click", FlowchartDropDown.dropDownListener);
        }

       /* $(".flowchartLink").click(FlowchartDropDown.dropDown());

        /*
        var links = $(".flowchartLink");
        for (i=0, ii=links.length; i<ii; i++)
        {
            links[i].appendChild("span");
        }

        /*
        var listItems= $("li");

        for (i=0, ii=listItems.length; i<ii; i++)
        {

            if (listItems[i].parentNode.hasClass("flowchart"))
            {
                var flowchartBox = listItems[i].childNodes;
                $(listItems[i]).bind("click", FlowchartDropDown.dropDownListener)


            }
            else if (listItems[i].parentNode.hasClass("flowchartInfo"))
            {
                var flowchartInformation = listItems[i]
            }
        }
        */


    },

    dropDownListener: function(event)
    {
        if ()
        FlowchartDropDown.dropDown(this);
    },

    dropDown: function (link)
    {

        /*var links=link;
        links.removeClass('flowchartLink');*/

        var boxNumber = link.attr('class');

        var flowchartInfos= $("li.flowchartInfo");
        if (flowchartInfos.hasClass(boxNumber))
        {
            if(flowchartInfos.hasClass(hidden))
            {
                flowchartInfos.removeClass('hidden');
                flowchartInfos.addClass('visible');


            }
            else if (flowchartInfos.hasClass('visible'))
            {
                flowchartInfos.removeClass('visible');
                flowchartInfos.addClass('hidden');
            }
        }


    }


};

FlowchartDropDown.init();






