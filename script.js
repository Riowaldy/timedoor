document.getElementById('size2').checked = true;
function imgFunc() {
    var dataView = (document.getElementById("price").innerHTML).substring(1);
    dataView = parseInt(dataView);
    var resSize = 0;
    var rep = 0;
    if(dataView == 0){
    }else{
        rep = 1;
        if (document.getElementById('size1').checked) {
            resSize = rate_value = document.getElementById('size1').value;
        }else if(document.getElementById('size2').checked){
            resSize = rate_value = document.getElementById('size2').value;
        }else if(document.getElementById('size3').checked){
            resSize = rate_value = document.getElementById('size3').value;
        }else{}
    }
    resSize = parseInt(resSize);
    var img = document.getElementsByName('img');
    for(i = 0; i < img.length; i++) { 
        if(img[i].checked)
        var imgTemp = parseInt(img[i].value);
    }
    imgTemp = imgTemp+resSize;
    document.getElementById("price").innerHTML = "$"+ imgTemp;
    var imgVal = document.getElementById("price").innerHTML;
    imgVal = imgVal.substring(1);
    return {
        imgVal: imgVal,
        rep: rep
    };
}

function sizeFunc() {
    var Fimg = imgFunc();
    var sizeTemp = 0;
    var sizeVal= 0;
    var res = parseInt(Fimg.imgVal);
    var size = document.getElementsByName('size');
    for(i = 0; i < size.length; i++) { 
        if(size[i].checked){
            sizeTemp= size[i].value;
            sizeTemp = parseInt(sizeTemp);
            if(Fimg.rep = 1){
                sizeVal = res;
            }else{
                sizeVal = sizeTemp+res;
            }
            document.getElementById("price").innerHTML = "$"+ sizeVal;
        }
    }
    return sizeTemp;
}