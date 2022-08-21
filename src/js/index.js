import'../sass/style.scss';
import'@laylazi/bootstrap-rtl/dist/js/bootstrap.min.js'; 
import'@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import'jquery/dist/jquery.min.js';
import'popper.js/dist/popper.min';
import'@fortawesome/fontawesome-free/js/all.min';

var pathname= window.location.pathname;
console.log(pathname);
$('.navbar-nav > li > a[href="'+pathname+'"]').parent().addClass('active');


$(document).ready(function() {

    
    var pathname= window.location.pathname;
    console.log(pathname);
    $('.navbar-nav > li > a[href="'+pathname+'"]').parent().addClass('active');

    $('[data-toggle="tooltip"]').tooltip()
    $('#copyright').text("  جميع الحقوق محفوظة للمتجر سنة  " + new Date().getFullYear());


    let btn =document.getElementById("on-click")
    btn.onclick =function(){
    alert("تم الاضافة الي السلة")
    }
    

})
