
/*下边封装的是显示某种格式的时间函数*/

~function () {
	
var clock = document.getElementById("clock");
    console.log(new Date());
    
	// 获取当前时间 -> 这里是客户端时间
    function getCurDate() {
        return new Date();
    }

    // week -> 输入一个时期返回今天是星期几
    function showWeek(lan_num) { // 参数是决定返回中文的星期天还是英文的星期天
        var cn_num = ["日", "一", "二", "三", "四", "五", "六"],en_num = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        if (lan_num === "cn_num")
        {
            return cn_num[getCurDate().getDay()];
        }else if (lan_num === "en_num") {
            return en_num[getCurDate().getDay()];
        }
         // - > 返回星期几
    }

    // 月、日、小时等出现个位数的情况前面补充0，补充为两位，比如1变为01
    function showYhm() {
        var ary = [],
                y = getCurDate().getFullYear(),
                mon = numFormat(getCurDate().getMonth() + 1),
                d = numFormat(getCurDate().getDate()),
                h = numFormat(getCurDate().getHours()),
                m = numFormat(getCurDate().getMinutes()),
                s = numFormat(getCurDate().getSeconds());
        ary = [y, mon, d, h, m, s]; // - > 返回的是 一个数组 包含了年月日时分秒
        return ary;
    }

    // 格式 大于0 num 小于0 "0" + num
    function numFormat(num) {
        return num < 10 ? "0" + num : num;
    }


    // 时间输出格式封装的函数
    function timeFormat(lan) {
        var curWeek = showWeek("cn_num"),
                curYear = showYhm()[0],
                curMonth = showYhm()[1],
                curDay = showYhm()[2],
                curHour = showYhm()[3],
                curMin = showYhm()[4],
                curMsec = showYhm()[5];
        if (lan === "cn") // 中文格式 ->  输出时间格式为 yyyy年mm月dd日 星期n hh:mm:ss
        {
            clock.innerHTML = curYear + "年" + curMonth + "月" + curDay + "日" + " 星期" + curWeek + " " + curHour + ":" + curMin + ":" + curMsec;
        }else if (lan === "en") { // 英文格式 ->  输出时间格式为 yyyy - mm - dd en hh:mm:ss AM(PM)
            var noon = Number(curHour) < 10 ? "AM" : "PM";
            clock.innerHTML = curYear + "-" + curMonth + "-" + curDay + " " + showWeek("en_num") + " " + curHour + ":" + curMin + ":" + curMsec + " " + noon;
        }

    }

    // 显示时间在页面上 格式为 -- 2008年10月10日星期一 12:12:12  1s刷新一次
    window.setInterval(function () {
        getCurDate();
        timeFormat("cn"); // 这里传参 cn 或者 en ； 已显示不同格式的时间
    },1000);






} ();