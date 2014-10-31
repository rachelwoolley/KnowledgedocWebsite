/**
 * Created by WS8 on 5/08/14.
 */


var MastheadReplace =
{
    init: function()
    {
        var windowWidth = $(window).width() ;
        var masthead= $("#masthead");
        masthead.removeAttribute('src');
        if ( $(window).width() < 500)
        {
            masthead.setAttribute('src','images/knowledgedoc.jpg');

        }
        else
        {

            masthead.setAttribute('src','images/masthead.jpg')


        }


    }
};

MastheadReplace.init();


