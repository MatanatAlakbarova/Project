window.onload = function () {
    $("#background").length; {
        var a = !($.fn.isInViewport = function () {
            var t = $(this).offset().top
                , e = t + $(this).outerHeight()
                , n = $(window).scrollTop()
                , i = n + $(window).height();
            return 800 < $(window).width() ? e - $(this).outerHeight() > n && t + $(this).outerHeight() < i : n < e && t < i
        }
        );
        $(window).on("scroll", function () {
            $("#background").length && $("#background").isInViewport() && !a && ($(".custom-counter-item").each(function () {
                var t = $(this)
                    , e = t.attr("max-value");
                $({
                    countNum: t.text()
                }).animate({
                    countNum: e
                }, {
                    duration: 4e3,
                    easing: "linear",
                    step: function () {
                        t.text(Math.floor(this.countNum))
                    },
                    complete: function () {
                        t.text(this.countNum)
                    }
                })
            }),
                a = !0)
        })
    }
};
