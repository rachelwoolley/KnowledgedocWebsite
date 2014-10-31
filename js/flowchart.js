/**
 * Created by WS8 on 28/10/14.
 */

var FlowchartDropDown =
{
    init: function()
    {
        //wrap links in spans
        var links = $("a");

            for (var i= 0, ii=links.length; i<ii; i++)
            {
                if (links[i].title && links[i].title.length > 0)
                {
                    var tipContainer = document.createElement("span");
                    tipContainer.className =links[i].className + " tipcontainer";

                    links[i].parentNode.replaceChild(tipContainer, links[i]);
                    tipContainer.appendChild(links[i]);
                    //run showTip in response to mouseover events
                    //run hideTip in response to mouseout events
                    //run showTip in response to focus events
                    //run hideTip in response to blur events

                    $(links[i]).bind("mouseover", FlowchartDropDown .showTipListener);
                    $(links[i]).bind("mouseout", FlowchartDropDown .hideTipListener);
                    $(links[i]).bind("focus", FlowchartDropDown .showTipListener);
                    $(links[i]).bind("blur", FlowchartDropDown .hideTipListener);
                }
            }


    },
    showTipListener: function(event)
    {
        FlowchartDropDown .showTip(this);
        event.preventDefault() ;
    },

    hideTipListener: function(event)
    {
        FlowchartDropDown .hideTip(this);
    },


    showTip: function(link)
    {
        if (!link.nextSibling)
        {
            // insert a rich tooltip after the link
            var tip = document.createElement("span");
            tip.className = "tooltip";
            var tipText = document.createTextNode(link.title);
            tip.appendChild(tipText);
            link.parentNode.appendChild(tip);
            link.title="";
        }
    },

    hideTip: function(link)
    {
        // remove a rich tooltip after the link
        if (link.nextSibling)
        {
            var tip = link.nextSibling;
            link.title = tip.firstChild.nodeValue;
            link.parentNode.removeChild(tip);
        }

    }
};

FlowchartDropDown .init();






