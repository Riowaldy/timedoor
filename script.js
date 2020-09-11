document.getElementById('size2').checked = true;
function imgFunc() {
    disableToppings();
    uncheckToppings();

    // check data size
    var dataView = (document.getElementById("price").innerHTML).substring(1);
    dataView = parseInt(dataView);
    var resSize = 0;
    var repSize = 0;
    if(dataView == 0){
    }else{
        repSize = 1;
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

    // check data toppings
    var toppings = document.getElementsByName('toppings');
    var resToppings = 0;
    for(i = 0; i < toppings.length; i++) { 
        if(toppings[i].checked)
        resToppings = resToppings + 2;
    }
    imgTemp = imgTemp+resToppings;

    // show to price
    document.getElementById("price").innerHTML = "$"+ imgTemp;
    var imgVal = document.getElementById("price").innerHTML;
    imgVal = imgVal.substring(1);
    return {
        imgVal: imgVal,
        repSize:repSize
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
            if(Fimg.repSize = 1){
                sizeVal = res;
            }else{
                sizeVal = sizeTemp+res;
            }
            document.getElementById("price").innerHTML = "$"+ sizeVal;
        }
    }
    return sizeTemp;
}

function toppingsFunc(){
    var Fimgtp = imgFunc();
    var restp = parseInt(Fimgtp.imgVal);
    var toppingsTemp = restp;
    document.getElementById("price").innerHTML = "$"+ toppingsTemp;
    return toppingsTemp;
}

function disableToppings(){
    document.getElementById("lobster").disabled = true;
    document.getElementById("oyster").disabled = true;
    document.getElementById("salmon").disabled = true;
    document.getElementById("bacon").disabled = true;
    document.getElementById("duck").disabled = true;
    document.getElementById("sausage").disabled = true;
    document.getElementById("avocado").disabled = true;
    document.getElementById("broccoli").disabled = true;
    document.getElementById("onions").disabled = true;
    document.getElementById("zucchini").disabled = true;
    document.getElementById("tuna").disabled = true;
    document.getElementById("ham").disabled = true;
    if(document.getElementById('img1').checked){
        document.getElementById("lobster").disabled = true;
        document.getElementById("oyster").disabled = true;
        document.getElementById("salmon").disabled = true;
        document.getElementById("bacon").disabled = true;
        document.getElementById("duck").disabled = true;
        document.getElementById("sausage").disabled = true;
        
        document.getElementById("avocado").disabled = false;
        document.getElementById("broccoli").disabled = false;
        document.getElementById("onions").disabled = false;
        document.getElementById("zucchini").disabled = false;
        document.getElementById("tuna").disabled = false;
        document.getElementById("ham").disabled = false;
    }else if(document.getElementById('img2').checked){
        document.getElementById("avocado").disabled = true;
        document.getElementById("tuna").disabled = true;
        document.getElementById("duck").disabled = true;
        document.getElementById("sausage").disabled = true;

        document.getElementById("broccoli").disabled = false;
        document.getElementById("onions").disabled = false;
        document.getElementById("zucchini").disabled = false;
        document.getElementById("lobster").disabled = false;
        document.getElementById("oyster").disabled = false;
        document.getElementById("salmon").disabled = false;
        document.getElementById("bacon").disabled = false;
        document.getElementById("ham").disabled = false;
    }else if(document.getElementById('img3').checked){
        document.getElementById("avocado").disabled = true;
        document.getElementById("lobster").disabled = true;
        document.getElementById("oyster").disabled = true;
        document.getElementById("salmon").disabled = true;

        document.getElementById("broccoli").disabled = false;
        document.getElementById("onions").disabled = false;
        document.getElementById("zucchini").disabled = false;
        document.getElementById("tuna").disabled = false;
        document.getElementById("bacon").disabled = false;
        document.getElementById("duck").disabled = false;
        document.getElementById("ham").disabled = false;
        document.getElementById("sausage").disabled = false;
    }else{}
    uncheckToppings()
}

function uncheckToppings(){
    if(document.getElementById("lobster").disabled){
        document.getElementById("lobster").checked = false;
    }
    if(document.getElementById("oyster").disabled){
        document.getElementById("oyster").checked = false;
    }
    if(document.getElementById("salmon").disabled){
        document.getElementById("salmon").checked = false;
    }
    if(document.getElementById("bacon").disabled){
        document.getElementById("bacon").checked = false;
    }
    if(document.getElementById("duck").disabled){
        document.getElementById("duck").checked = false;
    }
    if(document.getElementById("sausage").disabled){
        document.getElementById("sausage").checked = false;
    }
    if(document.getElementById("avocado").disabled){
        document.getElementById("avocado").checked = false;
    }
    if(document.getElementById("broccoli").disabled){
        document.getElementById("broccoli").checked = false;
    }
    if(document.getElementById("onions").disabled){
        document.getElementById("onions").checked = false;
    }
    if(document.getElementById("zucchini").disabled){
        document.getElementById("zucchini").checked = false;
    }
    if(document.getElementById("tuna").disabled){
        document.getElementById("tuna").checked = false;
    }
    if(document.getElementById("ham").disabled){
        document.getElementById("ham").checked = false;
    }
}

disableToppings()