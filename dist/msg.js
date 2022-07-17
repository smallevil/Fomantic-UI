var msg = {
    alert:function(title, content, buttonTitle = ''){
        $('body').modal({
            title: title ? title : '',
            class: 'center aligned mini',
            classTitle: 'centered',
            classContent: 'centered',
            content: content ? content : '',
            classActions: 'ui buttons fluid',
            actions: [{
                text: buttonTitle ? buttonTitle : '确定',
            }]
        }).modal('show');
    },
    confirm:function(title, content, okTitle = '', func){
        $('body').modal({
            title: title ? title : '',
            class: 'center aligned mini',
            classTitle: 'centered',
            classContent: 'centered',
            content: content ? content : '',
            classActions: 'ui buttons fluid',
            actions: [{
                text: '取消',
                class: '',
                click   : function(){ func(0) }
            },
            {
                text: okTitle ? okTitle : '确定',
                class: 'blue',
                click   : function(){ func(1) }
            }]
        }).modal('show');
    },
}