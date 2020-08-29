    /* 抓日期的值 */
    // var date = new Date(),
    // currentDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
    // document.write("今天日期是 " + date.getFullYear() + " 年 " + (date.getMonth() + 1) + " 月 " + date.getDate() + " 日");
    var currentDate = Date.parse((new Date()).toLocaleDateString());

    /* 依日期換tab */
    $(function () {
        $(".tab-menu li").each(function () {
            var specifiedDate = $(this).data('date');
            var specifiedid = $(this).data('id');
            var date = Date.parse(specifiedDate);

            if (date == currentDate) {
                $(this).addClass('active');
                $("div[id]").hide();
                $("div[id='" + specifiedid + "']").show();
                //e.preventDefault();
            }
        });

        /* 依日期換按鈕文字 */
        $(".tab-inner .btn-main .btn").each(function () {
            var specifiedDate = $(this).data('date');
            var date = Date.parse(specifiedDate);

            if (date == currentDate) {
                // $(this).css({
                //     "background-color": "#ff4e78",
                // });
                $(this).html("立即購買");
            } else if (currentDate - date > 0) {
                // $(this).css({
                //     "background-color": "#bfbfbf",
                // });
                $(this).html("完&nbsp;售");
            } else {
                // $(this).css({
                //     "background-color": "#bfbfbf",
                // });
                $(this).html("12:00&nbsp;準時開搶");
            }
        });
    });

    /* 完售換連結 */
    function myFunction(e) {
        var specifiedDate = e.dataset.date;
        var date = Date.parse(specifiedDate);
        var specifiedUrl = e.dataset.url;

        // if (date == currentDate) {
        //     console.log(date == currentDate);
        //     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        //         window.open('ra9mag://search?keyword=樂趣買5折慶');
        //     } else {
        //         window.open('https://www.google.com.tw');
        //     }
        // } else if (currentDate - date > 0) {
        //     window.open(specifiedUrl);
        // } else {}

        if (date == currentDate) {
            if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) {
                pDapp1 = true;
                window.location = 'ra9mag://search?keyword=樂趣買5折慶';
                var pWait1 = setTimeout(function () {
                    //alert(pHapp1);
                    pDapp1 = false;
                    if (!pHapp1) {
                        //window.open("https://app.adjust.com/d6ezchq_tj0o998?fallback=https%3A%2F%2Frakuma.rakuten.com.tw%2F",'_blank');
                        window.location = 'https://app.adjust.com/d6ezchq_tj0o998?fallback=https%3A%2F%2Frakuma.rakuten.com.tw%2F';
                    }
                }, 800);

            } else if (navigator.userAgent.match(/android/i)) {
                pDapp1 = true;
                window.location = 'ra9mag://search?keyword=樂趣買5折慶';
                var pWait1 = setTimeout(function () {
                    //alert(pHapp1);
                    pDapp1 = false;
                    if (!pHapp1) {
                        //window.open("https://app.adjust.com/d6ezchq_tj0o998?fallback=https%3A%2F%2Frakuma.rakuten.com.tw%2F",'_blank');
                        window.location = 'https://app.adjust.com/d6ezchq_tj0o998?fallback=https%3A%2F%2Frakuma.rakuten.com.tw%2F';
                    }
                }, 800);

            } else {
                window.open("https://app.adjust.com/d6ezchq_tj0o998?fallback=https%3A%2F%2Frakuma.rakuten.com.tw%2F", '_blank')
            }
        } else if (currentDate - date > 0) {
            window.open(specifiedUrl);
        } else {}
    };

    /* 換分頁 */
    $(function () {
        $(".tab-menu li").click(function (e) {
            var specifiedid = $(this).data('id');
            $(".tab-menu li").removeClass('active');
            $(this).addClass('active');

            $("div[id]").hide();
            $("div[id='" + specifiedid + "']").show();
            //  $("div [data-id='" + $(this).attr("href").replace("#","") + "']").addClass("active");
            e.preventDefault();

            // var myScrollPos = $('li.active').offset().left + $('li.active').outerWidth(true) / 2 + $(
            //     '.navbar').scrollLeft() - $('.navbar').width() / 2;
            // // console.log(myScrollPos);
            // $('.navbar').scrollLeft(myScrollPos);
        });
    });

    /* 按鈕判斷設備換連結 */