var oForm = document.getElementsByTagName('form')[0];
var aInput = oForm.getElementsByTagName('input');
var submit = document.getElementById('submit');
function isNull(arr){
    var flag = true;
    for(var i = 0; i < arr.length; i ++)
    {
        if(arr[i].value == '')
        {
            flag = false;
        }
    }
    return flag;
}
submit.onclick = function () {
    if(isNull(aInput) == false)
    {
        alert('信息未填写完整');
        return false;
    }
}