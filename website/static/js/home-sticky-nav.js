window.onscroll = function() {myFunction()};
        let navBar = document.getElementsByClassName('nav-container');
        console.log(navBar[0]);

        let landing = document.getElementsByClassName("countdown");
        function myFunction() {
            if (window.pageYOffset >= landing[0].offsetTop) {
                navBar[0].style.backgroundColor = "white";
            } else {
                navBar[0].style.backgroundColor = "transparent";
            }
        }