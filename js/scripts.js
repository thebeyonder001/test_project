var footer = `
<div class="footer">
    <div class="container">
    <div class="row">             
        <div class="col-5 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul class="list-unstyled">
                <li><a href="./index.html">Home</a></li>
                <li><a href="./aboutme.html">About</a></li>
                <li><a href="./menu.html">Menu</a></li>
                <li><a href="./contactus.html">Contact</a></li>
            </ul>
        </div>
        <div class="col-6 col-sm-5">
        </div>
        <div class="col col-sm-4 align-self-center">
            <div style="text-align:center">
                <a class="btn btn-social-icon fas fa-envelope-square" href="mailto:towards.ligrothism@gmail.com"><i class=""></i></a>
                <a class="btn btn-social-icon fab fa-instagram" href="http://www.instagram.com/towards.ligrothism"><i class="fa fa-instagram"></i></a>
                <a class="btn btn-social-icon fab fa-youtube" href="http://youtube.com/@TowardsLigrothism"><i class="fa fa-youtube"></i></a>
            </div>
        </div>
    </div>
    <div class="row justify-content-center">             
        <div class="col-auto">
            <p>© Copyright 2023 Mundane Thoughts</p>
        </div>
    </div>
    </div>
</div>
`
var header = `
    <header class="jumbotron">
        <div class="container">
            <div class="row row-header">
                <div class="col-12 col-sm-6">
                    <h1>Mundane Thoughts</h1>
                    <p>A collection of my efforts towards ligrothism</p>
                </div>
                <!-- <div class="col-12 col-sm align-self-center">
                     <img src="img/logo.png" class="img-fluid">
                 </div>-->
            </div>
        </div>
    </header>`
$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-button").click(function(){
        if ($("#carousel-button").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        }
        else if ($("#carousel-button").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');                    
        }
    });
    
    $("#footerID").append(footer)
    $("#headerID").append(header)
});
