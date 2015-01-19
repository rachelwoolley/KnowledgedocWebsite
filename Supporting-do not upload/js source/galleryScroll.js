/**
 * Created by WS8 on 19/11/14.
 */

var GalleryScroll =
{
    init:function()
    {
        var arrow = $('.galleryArrow');
        var arrowLeft = arrow[0];
        var arrowRight = arrow[1];
        var galleryImage= $('img.gallery');

        $(arrowRight).click(

                function()
                {
                    if(galleryImage.hasClass('firstImage'))
                    {
                        galleryImage.addClass('secondImage',800 );
                        galleryImage.removeClass('firstImage');
                    }
                    else if(galleryImage.hasClass('secondImage'))
                    {
                        galleryImage.addClass('thirdImage',800 );
                        galleryImage.removeClass('secondImage');
                    }
                    else if(galleryImage.hasClass('thirdImage'))
                    {
                        galleryImage.addClass('fourthImage',800 );
                        galleryImage.removeClass('thirdImage');
                    }
                    else if(galleryImage.hasClass('fourthImage'))
                    {
                        galleryImage.addClass('fifthImage',800 );
                        galleryImage.removeClass('fourthImage');
                    }
                    else if(galleryImage.hasClass('fifthImage'))
                    {
                        galleryImage.addClass('sixthImage',800 );
                        galleryImage.removeClass('fifthImage');
                    }
                    else if(galleryImage.hasClass('sixthImage'))
                    {
                        galleryImage.addClass('seventhImage',800 );
                        galleryImage.removeClass('sixthImage');
                    }
                    else if(galleryImage.hasClass('seventhImage'))
                    {
                        galleryImage.addClass('firstImage');
                        galleryImage.removeClass('seventhImage',1000);
                    }

                }

        );

        $(arrowLeft).click(

            function()
            {
                if(galleryImage.hasClass('firstImage'))
                {
                    galleryImage.addClass('seventhImage',1000 );
                    galleryImage.removeClass('firstImage');
                }
                else if(galleryImage.hasClass('secondImage'))
                {
                    galleryImage.addClass('firstImage' );
                    galleryImage.removeClass('secondImage', 800);
                }
                else if(galleryImage.hasClass('thirdImage'))
                {
                    galleryImage.addClass('secondImage');
                    galleryImage.removeClass('thirdImage',800);
                }
                else if(galleryImage.hasClass('fourthImage'))
                {
                    galleryImage.addClass('thirdImage' );
                    galleryImage.removeClass('fourthImage',800);
                }
                else if(galleryImage.hasClass('fifthImage'))
                {
                    galleryImage.addClass('fourthImage' );
                    galleryImage.removeClass('fifthImage',800);
                }
                else if(galleryImage.hasClass('sixthImage'))
                {
                    galleryImage.addClass('fifthImage');
                    galleryImage.removeClass('sixthImage',800);
                }
                else if(galleryImage.hasClass('seventhImage'))
                {
                    galleryImage.addClass('sixthImage');
                    galleryImage.removeClass('seventhImage',800);
                }

            }

        );

    }
};

GalleryScroll.init();