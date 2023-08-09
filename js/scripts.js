var footer = `
<div class="footer">
    <div class="container">
    <div class="row">             
        <div class="col-5 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul class="list-unstyled">
                <li><a href="./index.html">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="./contactus.html">Contact</a></li>
            </ul>
        </div>
        <div class="col-6 col-sm-5"> 
            <h5>Our Address</h5>
            <address>
                121, Clear Water Bay Road<br>
                Clear Water Bay, Kowloon<br>
                HONG KONG<br>
                <i class="fa fa-phone fa-lg"></i>: +852 1234 5678<br>
                <i class="fa fa-fax fa-lg"></i>: +852 8765 4321<br>
                <i class="fa fa-envelope fa-lg"></i>: 
                <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
        </div>
        <div class="col col-sm-4 align-self-center">
            <div style="text-align:center">
                <a class="btn btn-social-icon fab fa-facebook-square" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook"></i></a>
                <a class="btn btn-social-icon fab fa-linkedin" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin"></i></a>
                <a class="btn btn-social-icon fab fa-twitter" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
                <a class="btn btn-social-icon fab fa-youtube" href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                <a class="btn btn-social-icon fas fa-envelope-square" href="mailto:confusion@food.net"><i class=""></i></a>
            </div>
        </div>
    </div>
    <div class="row justify-content-center">             
        <div class="col-auto">
            <p>© Copyright 2015 WEBSITE_NAME</p>
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
                    <h1>WEBSITE_NAME</h1>
                    <p>INFO_TEXT</p>
                </div>
                <div class="col-12 col-sm align-self-center">
                    <img src="img/logo.png" class="img-fluid">
                </div>
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
    $("#loginButton").click(function(){
        $("#loginModal").modal('show');
    });
    
    $("#reserveButton").click(function(){
        $("#reserveModal").modal('show');
    });
    $("#footerID").append(footer)
    $("#headerID").append(header)
});
