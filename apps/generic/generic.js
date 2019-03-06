
url         = base_url+url_dir+url_pag;

sino        = [{"id":"1","ino":"SI"},{"id":"0","ino":"NO"}];
cove        = [{"id":"0","ino":"Compras"},{"id":"1","ino":"Ventas"}];

facexen     = [{"id":"0","ino":"Pocentaje"},{"id":"1","ino":"Monto Fijo"}];

vs_ad       = {"ta":{"1":"Activo","0":"Inactivo"},"td":{"1":"Eliminado","0":"No Eliminado"}};

ff_icons    = {"flu":{"1":"icon-lock","0":"icon-unlock"},"cok":{"1":"icon-ok-circle","0":"icon-remove"},"rem":{"0":"icon-remove"},"gru":{"0":"icon-group"}};

fshare      = [{"id":"1","ino":"Privada"},{"id":"0","ino":"Publica / Compartida"}];

dfmes       = [{"id":"1","ino":"ENE"},{"id":"2","ino":"FEB"},{"id":"3","ino":"MAR"},{"id":"4","ino":"ABR"},{"id":"5","ino":"MAY"},{"id":"6","ino":"JUN"},{"id":"7","ino":"JUL"},{"id":"8","ino":"AGO"},{"id":"9","ino":"SEP"},{"id":"10","ino":"OCT"},{"id":"11","ino":"NOV"},{"id":"12","ino":"DIC"}]



dtbl_bool   = false;

dtbl_ini    = 0;
dtbl_end    = 50;


// ---------------------------------
// Code Extern
//
//


//
// https://stackoverflow.com/a/29524405
//

String.prototype.ucfirst = function(notrim) {
    s = notrim ? this : this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');
    return s.length > 0 ? s.charAt(0).toUpperCase() + s.slice(1) : s;
}


// ---------------------------------
// ---------------------------------


function createCookie(name,value,days)
{
    var expires = "";

    if (days)
    {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name)
{
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for(var i=0;i < ca.length;i++)
    {
        var c = ca[i];

        while (c.charAt(0)==' ')
            c = c.substring(1,c.length);

        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length,c.length);
    }

    return null;
}

function eraseCookie(name)
{
    createCookie(name,"",-1);
}



//
//  -------------------------------------------------------------------------
//  -------------------------------------------------------------------------
//
// Esta seccion generacion de elementos de datos
//
//

function deletechecked(lk)
{
    var answer = confirm('Delete item?')

    if (answer) {
        window.location = lk;
    }

    return false;
}

//
//
//  -------------------------------------------------------------------------
//  -------------------------------------------------------------------------
//


//
//  -------------------------------------------------------------------------
//  -------------------------------------------------------------------------
//
// Esta seccion es delimitacion de operaciones con texto
//
//


function delimitation_text(txt,ftxt,ttxt)
{
    txt_dotted = '';

    if(txt.length > ttxt)
    {
        txt_dotted = ' ...';
    }

    return txt.substring(ftxt,ttxt) + txt_dotted;
}


//
//
//  -------------------------------------------------------------------------
//  -------------------------------------------------------------------------
//


//
//  -------------------------------------------------------------------------
//  -------------------------------------------------------------------------
//
// Esta seccion es de generacion de elementos de datos
//
//

function loadbtn(m0)
{
    slc = '';

    for ( var btn in m0)
    {
        for ( var i in m0[btn]['btn'])
        {
            var tybtn = m0[btn]['btn'][i]['ty'].split('-');

            switch(m0[btn]['btn'][i]['ty']) {
                case 'space':
                    slc = 'space';
                    break;
                case 'a':
                    slc = 'a';
                    break;
                case 'a-extra':
                    // slc = 'a-2';
                    jQuery( m0[btn]['tag'] ).append( add_link(m0[btn]['btn'][i]) );
                    continue;
                    break;
                case 'text':
                case 'button':
                case 'reset':
                case 'submit':
                    slc = 'input';
                    break;

            }

            if( !tybtn.hasOwnProperty(1)  )
                jQuery( "#" + slc + "-tmpl" ).tmpl( m0[btn]['btn'][i] ).appendTo( m0[btn]['tag'] );
        }
    }
}

function link_options(lk,txt)
{
    var answer = confirm(txt)

    if (answer)
    {
        window.location = lk;
    }

    return false;
}

function add_div(dt)
{
    var iel = document.createElement("div");

    if (dt.id) {
        iel.setAttribute("id", dt.id);
    }

    if (dt.hasOwnProperty("style")) {
        iel.setAttribute("class",dt.style);
    };

    if (dt.hasOwnProperty("text")) {
        iel.innerHTML = dt.text;
    };

    return iel;
}

function add_select(dt)
{
    var iel = document.createElement("select");


    if (dt.id) {
        iel.setAttribute("id", dt.id);
    }

    if (dt.hasOwnProperty("nm")) {
        iel.setAttribute("name", dt.nm);
    }

    if (dt.hasOwnProperty("css")) {
        iel.setAttribute("class",dt.css);
    };

    return iel;
}

function add_input(dt)
{
    var iel = document.createElement("input");

    if (dt.id) {
        iel.setAttribute("id", dt.id);
        iel.setAttribute("name", dt.id);
    }

    if (dt.type) {
        iel.setAttribute("type", dt.type);
    };

    if (dt.css) {
        iel.setAttribute('class',dt.css);
    }

    if (dt.option == 1) {
        iel.setAttribute("checked","checked");
    };

    if (dt.value) {
        iel.setAttribute("value",dt.value);
    };

    return iel;
}


function add_icon(dt)
{
    var iel = document.createElement("i");

    if (dt.class) {
        iel.setAttribute("class", dt.icon);
    };

    return iel;
}


function add_link(dt)
{
    var iel = document.createElement("a");

    iel.setAttribute("id", dt.id);
    iel.setAttribute("href", dt.href);

    if (dt.hasOwnProperty("class"))
    {
        iel.setAttribute("class", dt.class);
    }

    if (dt.hasOwnProperty("onclick"))
    {
        iel.setAttribute("onclick",dt.onclick);
    };

    if (dt.hasOwnProperty("text"))
    {
        iel.innerHTML = dt.text;
    };

    if (typeof(dt.data) === 'object' && obj_length(dt.data) > 0)
    {
        for (v_data in dt.data){
            iel.setAttribute(v_data, dt.data[v_data]);
        }

        // for (let [key, value] of Object.entries(dt.data)) {
        //     iel.setAttribute(key, value);
        // }
    }

    return iel;
}

function build_table()
{
    if ( typeof(dtbl) !== 'undefined' && typeof(dtbl) === 'object' && dtbl != null && dtbl.length > 0 )
        jQuery('#dataTable').dataTable({
                "sDom": "<'pull-right'l>t<\'row-fluid'<'span12'fp>>",
                "sPaginationType": "bootstrap",
                "oLanguage": {
                    "sLengthMenu": "Show _MENU_ entries"
                }
            });
}

function build_table_verify()
{
    if ( typeof(dtbl) !== 'undefined' && typeof(dtbl) === 'object' && dtbl != null && dtbl.length > 0 && dtbl.length < 500)
    {
        construct_table();

        build_table();

    }
    else if(dtbl_bool === true && typeof(dtbl_bool) !== 'undefined' && (typeof(dtbl) !== 'string' && typeof(dtbl) !== 'undefined'))
        nodata("#collapse4","<h1>Cargando Datos</h1>");
    else if(!dtbl_bool || (typeof(dtbl) !== 'string' && typeof(dtbl) !== 'undefined'))
        nodata("#collapse4","<h1>Sin Datos</h1>");
}

function type_dom(dt)
{
    switch(dt.type) {
        case 'div':
            result = add_div(dt);
            break;
        case 'i':
            result = add_icon(dt);
            break;
        case 'a':
            result = add_link(dt);
            break;
        case 'text':
        case 'hidden':
        case 'checkbox':
            result = add_input(dt)
            break;
        case 'object':
            result = tablecreate_body_multiple(object_to_array(dt.data));
            break;
        case 'table':
            result = tableCreate_in(dt);
            break;
        default:
            result = document.createTextNode('No se Reconoce el DOM');
    }

    return result;
}



//
//
// Final de codgigo
//
//  -------------------------------------------------------------------------
//  -------------------------------------------------------------------------



//
//  -------------------------------------------------------------------------
//  -------------------------------------------------------------------------
//
// Esta seccion de codigo son los manejadores de los combobox y manejadores de chosen jquery
//
//

function form_error(id, dt)
{
    if (typeof(dt) === 'object' && dt.length > 0)
        for (var dti = 0; dti < dt.length ; dti++)
            jQuery( id ).append( jQuery( "#form-error-tmpl" ).tmpl( dt[dti] ) );
    else
        jQuery( id ).append( jQuery( "#form-error-tmpl" ).tmpl( dt ) );

}

function form_error_continue(id, dt)
{
    jQuery( id ).append( jQuery( "#form-error-continue-tmpl" ).tmpl( dt ) );

    jQuery( '.alert.alert-success' ).delay( 4500 ).fadeOut( 500 );
}

function select_option(id)
{
    vl = id.split(' ');

    if( jQuery( vl[0] + ' option' ).size() > 0 )
        jQuery( id ).attr('selected','selected');
}

function unselect_option(id)
{
    $( id ).prop("selected", false);
}

function addfirst_combo(id)
{
    vl = id.split(' ');

    if( jQuery( vl[0] + ' option' ).size() > 0 )
        jQuery( id ).prepend( "<option value=\"0\"></option>" );
}

function update_chosen(id)
{
    jQuery( id ).val('').trigger('liszt:updated');
}

function empty_combo(id)
{
    jQuery( id ).empty();
}


function fill_combo(id,dt)
{
    if (typeof dt === 'object' && dt.length > 0 ){
        jQuery( id ).html( jQuery( "#cbx-combo-tmpl-options" ).tmpl( dt ) );
        return true;
    }else{
        return false;
    }
}

function fill_combo(id,dt,nb,ndt)
{
    if (typeof nb  !== 'undefined'  )
        ndt = 'Seleccione un(a) ' + nb;
    else
        ndt = 'Seleccione alguna opcion';

    if (!dt) { ndt = 'No tiene ningun Dato' };


    if (typeof dt === 'object' && dt.length > 0 )
    {
        jQuery( id ).html( jQuery( "#cbx-combo-tmpl-options" ).tmpl( dt ) );
    }
    else
    {
        // jQuery( id ).html( jQuery( "#cbx-combo-tmpl-options" ).tmpl( null ) );

    }

    jQuery( id ).attr('data-placeholder',ndt);

    return false;
}

function fill_combos(id,dt)
{
    empty_combo( id );
    fill_combo( id, dt );
    addfirst_combo( id );

    update_chosen( id );
}

function fill_ad(tp,dt)
{
    return vs_ad[tp][dt];

}

function fill_ic(tp,dt)
{
    return ff_icons[tp][dt];

}


//
//
// Final de codgigo de manejadores de combobox
//
//  -------------------------------------------------------------------------
//  -------------------------------------------------------------------------




//
//  -------------------------------------------------------------------------
//  -------------------------------------------------------------------------
//
// Manejador de Sortable
//


function ini_srtbl()
{
    jQuery(function(){
        jQuery( "ul.droptrue" ).sortable({
            connectWith: "ul",
            dropOnEmpty: false
        });

        jQuery( "ul.dropfalse" ).sortable({
            connectWith: "ul",
            //dropOnEmpty: false
        });

        jQuery( "#srtbl1, #srtbl2" ).disableSelection();
    });
}

function recargar_listas(srtbl_s, srtbl_n)
{
    if( srtbl_n != null && srtbl_n != "" && srtbl_n.length > 0 )
        jQuery( "#srtbl1" ).html( jQuery( "#v-item-cuenta" ).tmpl( srtbl_n ) );
    else
        jQuery( "#srtbl1" ).html( "" );

    if( srtbl_s != null  && srtbl_s != "" && srtbl_s.length > 0 )
        jQuery( "#srtbl2" ).html( jQuery( "#v-item-cuenta" ).tmpl( srtbl_s ) );
    else
        jQuery( "#srtbl2" ).html( "" );

}


//
//
// Final de codgigo de manejadores de Sortables
//
//  -------------------------------------------------------------------------
//  -------------------------------------------------------------------------


//
//  -------------------------------------------------------------------------
//  -------------------------------------------------------------------------
//
// Manejador de Tabla
//

function nodata(id,html)
{
    //
    jQuery(id).html(html);

}

function tablecreate_body_td(clong)
{
    var tr      = document.createElement('tr');

    for (var j = 0; j <= clong.length-1; j++)
    {
        var td = document.createElement('td');

        if (clong[j] != null && clong[j].hasOwnProperty("type"))
        {
            td.appendChild(type_dom(clong[j]));
        }
        else
        {
            if (clong[j] != null)
            {
                td.appendChild(document.createTextNode(clong[j]));
            }
            else
            {
                td.appendChild(document.createTextNode(""));
            }
        }

        tr.appendChild(td)
    }

    return tr;
}

function tablecreate_body_multiple(clong)
{
    var ptext   = document.createElement('p');

    for (var j = 0; j <= clong.length-1; j++)
    {
        if (clong[j] != null && clong[j].hasOwnProperty("type"))
        {
            ptext.append(type_dom(clong[j]));
        }
        else
        {
            if (clong[j] != null)
            {
                ptext.append(clong[j]);
            }
            else
            {
                ptext.append("");
            }
        }

    }

    return ptext;
}

function tablecreate_body(vdt)
{
    var tbd = document.createElement('tbody');
    var tr  = document.createElement('tr');

    for (var i = dtbl_ini; i <= Object.keys(vdt).length-1; i++)
    {
        var tr = document.createElement('tr');

        if( (i%2) == 0 )
        {
            tr.setAttribute('class', 'odd');
        }
        else
        {
            tr.setAttribute('class', 'gradeX odd');
        }

        tr = tablecreate_body_td( object_to_array(vdt[i]) );



        tbd.appendChild(tr);
    }

    return tbd
}

function tableCreate(id,data,tblid,tblcss,dhead)
{
    var tbl = document.createElement('table');
    var thd = document.createElement('thead');

    var counte  = 0;
    var tr      = document.createElement('tr');

    tbl.setAttribute('class',   tblcss);
    tbl.setAttribute('id',      tblid);

    for (var key in data[0])
    {
        var td = document.createElement('td');

        if (typeof dhead[counte] !== 'undefined')
        {
            td.appendChild(document.createTextNode(dhead[counte]));
        }
        else
        {
            td.appendChild(document.createTextNode(key));
        }

        tr.appendChild(td)

        counte++;
    };

    thd.appendChild(tr);
    tbl.appendChild(thd);

    var tbd = document.createElement('tbody');

    if (data != null && data != "" && Object.keys(data).length > 0)
    {
        tbd = tablecreate_body(data)

        tbl.appendChild(tbd);

    };

    jQuery(id).html(tbl);

}

function tableCreate_in(dt)
{
    var tbl = document.createElement('table');
    var thd = document.createElement('thead');

    var counte  = 0;
    var tr      = document.createElement('tr');

    tbl.setAttribute('class','table table-bordered table-condensed table-hover table-striped');
    // tbl.setAttribute('id',      tblid);

    for (var key in dt.thead)
    {
        var td = document.createElement('td');

        if (typeof dt.thead[counte] !== 'undefined')
        {
            td.appendChild(document.createTextNode(dt.thead[counte]));
        }
        else
        {
            td.appendChild(document.createTextNode(key));
        }

        tr.appendChild(td)

        counte++;
    };

    thd.appendChild(tr);
    tbl.appendChild(thd);

    var tbd = document.createElement('tbody');

    if (dt.data != null && dt.data != "" && Object.keys(dt.data).length > 0)
    {
        tbd = tablecreate_body(dt.data)

        tbl.appendChild(tbd);

    };

    return tbl;

}

//
//
// Final de codgigo de manejadores de combobox
//
//  -------------------------------------------------------------------------
//  -------------------------------------------------------------------------


//
//  -------------------------------------------------------------------------
//  -------------------------------------------------------------------------
//
// Manejador de ubicaciones
//

function get_locacion(vfn,ubi)
{
    jQuery.ajax(
        {
            url: base_url + 'ubicaciones/ubicacion_ajax/'+vfn[ubi].callfn,
            data: {dt:vfn[ubi].data,jx:vfn[ubi].ajax},
            type: 'POST',
            async: false,
            dataType: "json"
        }
    ).done(
        function(dt_req)
        {
            init = ubi;

            for (var i=0; i < obj_length(dt_req); i++)
            {
                var data = {};

                fill_combos(vfn[ubi].id,dt_req[i].data);

                if (vfn[ubi].hasOwnProperty("vari"))
                {
                    var variable    = vfn[ubi].vari;
                    var texton      = JSON.stringify(dt_req[i].data);

                    eval(variable +" = "+ texton);
                };

                ubi++;
            }

            jQuery(".chzn-select-deselect").chosen();

        }
    )
    .error(function(error)
        {
            console.log(error);
        }
    );
}

//
//
// Final de codgigo de manejadores de combobox
//
//  -------------------------------------------------------------------------
//  -------------------------------------------------------------------------


//
//  -------------------------------------------------------------------------
//  -------------------------------------------------------------------------
//
// Manejador de AJAX
//

function ajax_ctrl(dr,ct,fn,tp,dt,ob)
{
    rslt_ajax = false;

    if (typeof(dt) === 'object' && Object.keys(dt).length > 0 && !ob)
        dt = {pdt:dt};
    else if(typeof(dt) === 'string' && dt[0][1] !== '&')
        dt = '&'+dt;
    else if (!ob)
        return false

     jQuery.ajax(
            {
                url: base_url+dr+ct+'_ajax/ajax_' + fn,
                data: dt,
                type: 'POST',
                async: false,
                dataType: tp
            }
        ).done(
            function(dt_req) {
                if(dt_req != null && dt_req.exist && Object.keys(dt_req.data).length > 0)
                    rslt_ajax = dt_req.data;
            }
        ).error(function(error) {
                console.log(error);
            }
        );

    return rslt_ajax;
}

function ajax_ctrl_img(dr,ct,fn,tp,dt)
{
    rslt_ajax = '';

    jQuery.ajax(
            {
                url: base_url+dr+ct+'_ajax/ajax_'+fn,
                type: 'POST',
                data: {pdt:dt},
                cache: false,
                // contentType: false,
                // processData: false,

                // Custom XMLHttpRequest
                // xhr: function() {
                //     var myXhr = $.ajaxSettings.xhr();
                //     if (myXhr.upload) {
                //         // For handling the progress of the upload
                //         myXhr.upload.addEventListener('progress', function(e) {
                //             if (e.lengthComputable) {
                //                 $('progress').attr({
                //                     value: e.loaded,
                //                     max: e.total,
                //                 });
                //             }
                //         } , false);
                //     }
                //     return myXhr;
                // }
            }
        ).done(
            function(dt_req)
            {
                var dtbl    = dt_req;

                if (dtbl != null && dtbl.data.length > 0)
                {
                    rslt_ajax = dt_req.data;
                }
                else
                {
                    rslt_ajax = 0;
                }

            }
        ).error(function(error)
            {
                console.log(error);
            }
        );

    return rslt_ajax;
}

//
//
// Final de codgigo de manejadores de combobox
//
//  -------------------------------------------------------------------------
//  -------------------------------------------------------------------------


function obj_length(obj)
{
    var size = 0, key;

    for (key in obj)
        if (obj.hasOwnProperty(key)) size++;

    return size;
}

function object_to_array(objtoarr)
{
    var temp_ota = [];
    var i = 0;

    Object.keys(objtoarr)
    // iterate over them and generate the array
    .map(function(k)
            {
                // generate the array element
                temp_ota[i] = objtoarr[k];
                i++;
            }
        );

    return temp_ota;
}


function cargador_anios(id,ini,end,order)
{
    var a = 0;

    var anio = [];
    var temp = [];

    var hato = new Date();

    hato = hato.getFullYear();

    hato = hato + end;

    if(order)
        for (var i=hato; i > ini; i--)
        {
            //
            temp['id']   = i;
            temp['ino']  = i;

            anio[a] = Object.assign({}, temp);

            a++;
        }
    else
        for (var i=ini; i <= hato; i++)
        {
            //
            temp['id']   = i;
            temp['ino']  = i;

            anio[a] = Object.assign({}, temp);

            a++;
        }


    fill_combo(id,anio)
}

function fill_form_error(id,fields)
{
    for (var i = Object.keys(fields).length - 1; i >= 0; i--)
        if(fields[Object.keys(fields)[i]]["nombre"] != "" ){
            jQuery(".inline-block."+Object.keys(fields)[i]).css('display', 'inline');
            form_error("."+Object.keys(fields)[i]+"", fields[Object.keys(fields)[i]]);
        }
}



function enable_form()
{

}

function calculo_exento(facm,exem,exet)
{
    var exer = 0;

    if( facm > 0 && exem > 0 )
    {
        if( exet == 1 )
        {
            exer = facm - exem;
        }
        else
        {
            exer = (facm * exem) / 100;
        }
    }

    return exer;

}

function redondeador(nint_val)
{
    var nabs = 0;

    nint = n_dec( nint_val );
    nabs = nint_val - nint;

    if( nint > 0.555 )
    {
        nabs++;
    }

    return nabs;

}

function redondeador_it( nint_val )
{
    var nabs = 0;

    nint = n_dec(nint_val);
    nabs = nint_val - nint;

    if( nint > 0.495 )
    {
        nabs++;
    }

    return nabs;

}

function n_dec ( ndec )
{
    ndec = parseFloat( ndec );

    while( ndec > 1000 )
        ndec = ndec - 1000;

    while( ndec > 100 )
        ndec = ndec - 100;

    while( ndec > 10 )
        ndec = ndec - 10;

    while( ndec >= 1 )
        ndec = ndec - 1;

    return ndec;
}

function fdependencia(fd,ad)
{
    var ntmp = "";
    var fdep = "";

    for (var i = ad.length - 1; i >= 0; i--) {
        if(ad[i]['ic0'] === fd) {
            if (ad[i]['ic0'] !== 0) {
                fdep = fdependencia(ad[i]['ic'],ad)

                if (fdep !== "" && fdep.split(" ")[1] !== "->") {
                    ntmp = " -> " + fdep;
                } else if (fdep !== "") {
                    ntmp = fdep;
                } else {
                    ntmp = "";
                };
            };

            return " -> " + ad[i]['i3'] + ntmp;
        }

        ntmp = "";
    };

    return "";
}

jQuery(window).on('load',function() {
    if ( typeof(mx) !== 'undefined' && typeof(mx) === 'object' )
        loadbtn(mx);


    // build table for list
    build_table_verify();


    if (typeof(fdt) !== 'undefined' && typeof(fdt) === 'object' && fdt['form_error'] === 'false')
    {
        if(fdt['data']['form_continue'] === 'false')
        {
            if (!fdt['data'].hasOwnProperty('no_save'))
                fill_form_error(".control",fdt['data']);
            else
                form_error(".no_save",fdt['data']['no_save']);
        }
        else if(fdt['data']['form_continue'] === 'true')
        {
            form_error_continue(".no_save",fdt['data']['no_save']);
        }

    }
    else if (typeof(fdt) !== 'undefined' && typeof(fdt) === 'object' && fdt.hasOwnProperty('sec')) {
            form_error(".no_save",fdt.sec);
    }

    if (typeof(fdt_n) !== 'undefined' && typeof(fdt_n) === 'object' && fdt_n['form_error'] === true)
    {
        fdt_n['data']['no_save'].unshift({'nombre':'No puede agregar registro porque faltan los siguientes datos.'});
        form_error(".no_save",fdt_n['data']['no_save']);
    }


    if(jQuery('body').find('#srtbl1').length > 0)
        ini_srtbl();

    $('input[type="submit"]').click(function(e)
            {
               $('input[type="submit"]').attr('submit-button', 'disabled');
            }
        );

});


/*
 * If any field is edited,then only it will change value on submit
 */

// text written
// $(':text').keypress(function(e)
// {

//     enableSaveBtn();
// });

//backspace and delete key
// $(':text').keyup(function(e)
// {
//     // if (e.keyCode == 8 || e.keyCode == 46) {

//     //     // rest ignoreenableSaveBtn();
//     // } else
//     // {

//     //     e.preventDefault();
//     // }
// });

// // text pasted
// $(':text').bind('paste', function(e)
// {

//     enableSaveBtn();
// });

// // select element changed
// $('select').change(function(e)
// {

//     enableSaveBtn();
// });

// // radio changed
// $(':radio').change(function(e)
// {

//     enableSaveBtn();
// });

// // password written
// $(':password').keypress(function(e)
// {

//     enableSaveBtn();
// });
// // password pasted
// $(':password').bind('paste', function(e)
// {

//     enableSaveBtn();
// });
