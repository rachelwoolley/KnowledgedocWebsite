/**
 * Created by WS8 on 31/07/14.
 */


var MenuOpen =
{
    init:function()
    {
        MenuOpen.thinWidth()
    },

    thinWidth:function()
    {
        var topDrop = $(".top");
        if (!topDrop.hasClass("hidden"))
        {topDrop.addClass("hidden")}
        /* Menu Navigation DropDown */
        var arrow1 =$("#arrow1");
        var arrow2 =$("#arrow2");
        var arrow3 =$("#arrow3");
        var arrow4 =$("#arrow4");

        arrow1.click(MenuOpen.arrowClick(arrow1));
        arrow2.click(MenuOpen.arrowClick(arrow2));
        arrow3.click(MenuOpen.arrowClick(arrow3));
        arrow4.click(MenuOpen.arrowClick(arrow4));

        /* Flowchart DropDown */

        var arrow5 =$("#arrow5");
        var arrow6 =$("#arrow6");
        var arrow7 =$("#arrow7");
        var arrow8 =$("#arrow8");

        arrow5.click(MenuOpen.arrowClick(arrow5));
        arrow6.click(MenuOpen.arrowClick(arrow6));
        arrow7.click(MenuOpen.arrowClick(arrow7));
        arrow8.click(MenuOpen.arrowClick(arrow8));
    },


    arrowClick:function(arrowid)
    {
        var arrow=arrowid;
        arrow.click(function() {
            var ul=arrow.next().next();

            if(arrow.hasClass("grey"))
            {
                if (arrow.hasClass("down")) {
                    arrow.addClass("up");
                    arrow.removeClass("down");
                    arrow.attr("src", "../images/arrowUpGrey.gif");

                    ul.addClass("visible");
                    ul.removeClass("hidden");
                }
                else
                {
                    arrow.addClass("down");
                    arrow.removeClass("up");
                    arrow.attr("src", "../images/arrowDownGrey.gif");

                    ul.addClass("hidden");
                    ul.removeClass("visible");
                }
            }

            else
            {
                if (arrow.hasClass("down")) {
                    arrow.addClass("up");
                    arrow.removeClass("down");
                    if ($("h1").hasClass("home")) {arrow.attr("src", "images/arrowUp.gif");}
                    else{arrow.attr("src", "../images/arrowUp.gif");}

                    ul.addClass("visible");
                    ul.removeClass("hidden");

                }
                else {
                    arrow.addClass("down");
                    arrow.removeClass("up");

                    if ($("h1").hasClass("home")) {arrow.attr("src", "images/arrowDown.gif");}
                    else{arrow.attr("src", "../images/arrowDown.gif");}
                    ul=arrow.next().next();
                    ul.addClass("hidden");
                    ul.removeClass("visible");

                }
            }

        });
    }


};


MenuOpen.init();







