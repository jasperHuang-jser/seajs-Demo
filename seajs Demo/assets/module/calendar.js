define(function(require, exports, module) {
	//���������������Ļ�����ʽ�ļ�
    require('themes_smoothness');
	//����������������jQuery��
    var $ = require('jquery');
	//����������������jQueryUI��
    require('jqui');
	//������������������������ű��ļ�
    require('datepicker_cn');

    /*
    * ���������ؼ������������������ѡ��Χ
    * @param {Object} widget Ϊ��jquery��ȡ��Ӧ�ڵ㷽ʽ��д��������name����ΪfromeDate��input������"input[name='fromDate']"��Ϊ������
    * @param {Object} categoryΪѡ��ʱ�����
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
    * ��ʼ�������ؼ����������Ŀ�ѡ�����ڷ�Χ
    * ������Ĭ�������ַ�����ʽΪ��yy-mm-dd
    * @param {Object} _minDateΪ�ӽ��쿪ʼ�㣬��������ʾ���������ڣ�����������Ϊ100��ǰ����������-100��Ϊ������
    * @param {Object} _maxDateΪ�ӽ��쿪ʼ�㣬��������ʾ���������ڣ�����������Ϊһ���º󣬴����ַ�����+1m����Ϊ������
    */
    function setDetailCalendarDate(widget, _minDate, _maxDate) {
        $(widget).datepicker({
            minDate: _minDate,
            maxDate: _maxDate,
            dateFormat: "yy-mm-dd" 
        });
    }

	//�����ṩ�ӿڣ�����ֻ��Ҫ�ṩsetCalendarDate()�����ӿ�
    module.exports = {
        setCalendarDate: setCalendarDate
    }
});