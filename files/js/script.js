// javascript

const menuBtn = document.querySelector('.menu-btn')
      menu = document.querySelector('nav ul')
      exitBtn = document.querySelector('.exit-btn');
      
menuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)';
})

exitBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(100%)';
})

//function getModal()
$.fn.getModal = function (info) {

    var info = info.toString();

    if (info == "true") {
        $("#info").html('Thank you for your comment. I will contact you soon.').css('color', '#555').slideDown();
    } else {
        $("#info").html('Could not send mail! Sorry!').css('color', '#fc5476').slideDown();
    }

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    //var btn = document.getElementById("myBtn");
    //var btn = document.getElementById("#submit");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        document.getElementById("contact").reset();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById("contact").reset();
        }
    }
}

//function validate()
function validate() {
    var fname = $("#firstname").val(); // First Name
    var lname = $("#lastname").val();	// Last Name
    var email = $("#email").val(); // Email
    var comment = $("#comment").val(); // Comment

    // Checking for blank fields.
    if (fname != '') {
        $("#errfirstname").text("");
    }
    if (lname != '') {
        $("#errlastname").text("");
    }
    if (email != '') {
        $("#erremail").text("");
        var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email.match(mailformat)) {
            if (comment == '') {
                $("#errcomment").text("Please write something, so I can learn more about you. ");
                $("#comment").focus();
            }
        } else {
            $("#erremail").text("You have entered an invalid email address!");
            $("#email").focus();
            return false;
        }
    }
    if (comment != '') {
        $("#errcomment").text("");
    }
    // Checking for blank fields.
    if (fname == '' || lname == '' || email == '' || comment == '') {
        if (fname == '') {
            $("#errfirstname").text("First name is required");
            $("#firstname").focus();
            return false;
        }
        if (lname == '') {
            $("#errlastname").text("Last name is required");
            $("#lastname").focus();
            return false;
        }
        if (email == '') {
            $("#erremail").text("Your email address is required");
            $("#email").focus();
            return false;
        }
        if (comment == '') {
            $("#errcomment").text("Please write something, so I can learn more about you.");
            $("#comment").focus();
            return false;
        }
    }
    return true;
}

$("#submit").click(function (e) {
    var contact = $('#contact');
    e.preventDefault();
    if (validate()) {
        $.ajax({
            type: "POST",
            url: "./php/action-page.php",
            data: contact.serialize(),
            success: function (msg) {
                $.fn.getModal(true);
                return false;
                //alert("Success");
            },
            error: function (msg) {
                $.fn.getModal(false);
                return false;
                //alert("Error " + msg.d.toString());
            }
        });
    }
});


//Slide In Elements
// $(window).scroll(function() {
//   $(".slideanim").each(function(){
//     var pos = $(this).offset().top;

//     var winTop = $(window).scrollTop();
//     if (pos < winTop + 600) {
//       $(this).addClass("slide");
//     }
//   });
// });