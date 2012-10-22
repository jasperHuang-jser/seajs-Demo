define(function(require, exports, module) {
	//获得日历插件依赖的基础样式文件
    require('themes_smoothness');
	//获得日历插件依赖的jQuery库
    var $ = require('jquery');
	//获得日历插件依赖的jQueryUI库
    require('jqui');
	//获得日历插件依赖的中文字体脚本文件
    require('datepicker_cn');

    /*
    * 根据日历控件的类别设置它的日期选择范围
    * @param {Object} widget 为用jquery获取相应节点方式的写法，如获得name属性为fromeDate的input，传入"input[name='fromDate']"作为参数；
    * @param {Object} category为选择时间类别
    */
    function setCalendarDate(widget, category) {
        switch (category) {
        case "Client_general":
            setDetailCalendarDate(widget, "-6m", 0);
            break;
        case "Client_future":
            setDetailCalendarDate(widget, "-6m", "1y");
            break;
        case "Client_archive":
            setDetailCalendarDate(widget, "-1y", 0);
            break;
        case "Store_general":
            setDetailCalendarDate(widget, "-6m", 0);
            break;
        case "Store_future":
            setDetailCalendarDate(widget, "-6m", "1y");
            break;
        case "Store_archive":
            setDetailCalendarDate(widget, "-2y", 0);
            break;
        default:
            setDetailCalendarDate(widget, "-2y", "+2y");
            break;
        }
    }

    /*
    * 初始化日历控件并设置它的可选择日期范围
    * 本日历默认日期字符串格式为：yy-mm-dd
    * @param {Object} _minDate为从今天开始算，日历能显示的最早日期，如最早日期为100天前，传入数字-100作为参数；
    * @param {Object} _maxDate为从今天开始算，日历能显示的最晚日期，如最晚日期为一个月后，传入字符串“+1m”作为参数；
    */
    function setDetailCalendarDate(widget, _minDate, _maxDate) {
        $(widget).datepicker({
            minDate: _minDate,
            maxDate: _maxDate,
            dateFormat: "yy-mm-dd" 
        });
    }

	//对外提供接口，这里只需要提供setCalendarDate()函数接口
    module.exports = {
        setCalendarDate: setCalendarDate
    }
});