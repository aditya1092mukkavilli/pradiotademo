$('document').ready(function(){
    AOS.init({once: false});
    $('#submit').on('click', function(){
        var name = $('#Name').val();
        var email = $('#email').val();
        var phonenumber = $('#phonenumber').val();
        var requestType = $('#requesttype').val();
        var form = $('contactus-form');
        if(name == '' || name=='undefined'){
            return;
        } else if(email == '' || email=='undefined'){
            return;
        } else if(phonenumber == ''|| phonenumber == 'undefined'){
            return;
        } else {
            var subject= "Enquiry from "+ name;
            var body = "name ="+name+" "+ "email="+ email + " "+ "phonenumber=" +phonenumber+ " "+ "requestType=" +requestType+"<"  ;
            body += window.location.href;
            body += ">";
            var uri = "mailto:info@pradiota.com?subject=";
            uri += encodeURIComponent(subject);
            uri += "&body=";
            uri += encodeURIComponent(body);
            window.open(uri);
            $('#Name').val('');
            $('#email').val('');
            $('#phonenumber').val('');
            $('#requesttype').val('');
        }

    });
});