$(document).ready(function(){
    $('#button_contacts').click(function(){
        var fio   = $('#fio').val();
        var Nazvanie   = $('#Nazvanie').val();
        var Adres = $('#Adres').val();
        var fio   = $('#fio').val();
        var Nazvanie   = $('#Nazvanie').val();
        var Email = $('#Email').val();
        $.ajax({
            url: "post.php", 
            type: "post", 
            dataType: "json", 
            data: { 
                "fio":   fio,
                "Nazvanie":   Nazvanie,
                "Adres": Adres,
                "Email": Email
            },
            success: function(data){
                $('.messages').html(data.result); 
            }
        });
    });
});
