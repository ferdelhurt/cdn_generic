function sum_option (op_sum)
{
    t_sum = 0;

    for (var i = op_sum.length - 1; i >= 0; i--) {
        if(op_sum == document.styleSheets[i].href.split('/')[document.styleSheets[i].href.split('/').length - 1])
        {
            ux = i;

            break;

        }


    };


    for (var i = document.styleSheets[ux].cssRules.length - 1; i >= 0; i--) {
        if(document.styleSheets[7].cssRules[5]["conditionText"] == "print")
        {
            return false;
        }

    };



    pdd[0]  = parseInt(jQuery("tbody td").css("padding").replace("px","")[0].split(" "));
    pdd[1]  = parseInt(jQuery("tbody td").css("padding").replace("px","")[2].split(" "));
    pdd[2]  = parseInt(jQuery("tbody td").css("height").replace("px",""));

    pdd['bbm']  = parseFloat(jQuery("tbody td").css("border-bottom").split(" ")[0].replace("px","")).toFixed(0);


    return t_sum;

}
