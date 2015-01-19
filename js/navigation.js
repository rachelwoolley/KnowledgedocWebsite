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

    },


    arrowClick:function(arrowid)
    {
        var arrow=arrowid;
        arrow.click(function() {
            var ul=arrow.next().next();

            {
                if (arrow.hasClass("arrow-down")) {
                    arrow.addClass("arrow-up");
                    arrow.removeClass("arrow-down");


                    ul.addClass("visible");
                    ul.removeClass("hidden");

                }
                else {
                    arrow.addClass("arrow-down");
                    arrow.removeClass("arrow-up");

                    ul=arrow.next().next();
                    ul.addClass("hidden");
                    ul.removeClass("visible");

                }
            }

        });
    }


};


MenuOpen.init();







