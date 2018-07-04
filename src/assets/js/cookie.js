/*用export把方法暴露出来*/  
/*设置cookie*/ 
// cookie 的名称、值以及过期天数。
export function setCookie(c_name, value, expiredays){
    var date = new Date();
    // 这个是cookie有效期，将cookie的有效时间设成当前时间之前就是删除
    date.setSeconds(date.getSeconds()+expiredays)
    document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+date.toGMTString())
    console.log(document.cookie);
}

//获取Cookie
export function getCookie(c_name){
    if (document.cookie.length>0){
        let c_start = document.cookie.indexOf(c_name + "=")
        if (c_start!=-1){
            c_start=c_start + c_name.length+1 
            let c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ''
}

// 删除Cookie
export function delCookie(c_name){
    setCookie(c_name, '', -1)
}