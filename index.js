$(() => {
    if ($(window).width() <= 412) {
        $('.navbar').width($(window).width() -30) 
        $("#home .row").find(".col-5").removeClass("col-5");
        $("#about .row, .connect .row").find(".col-6").removeClass("col-6");
        $("#home, #about, .connect").find(".row").removeClass("row");
        $("#about").find(".wrapper").removeClass("wrapper");
        $(".hero-cards").find(".row").removeClass("row");
        $(".hero-card").removeClass("col-3").removeClass("col-xl-4");
    }
    $(".hero-coming-soon").height($(window).height());
    //const mail = "karaboramakau@gmail.com"
    const mail = "gmphiri92@gmail.com"
    const api = `https://mailthis.to/${mail}`
     $('input, textarea').val("");
    
    $("#download").click(() => {
        window.open("docs/George Madalitso Phiri CV 2023.pdf");
    });
    $("#notifyMe").click(() => {
            let formData = {
            name: "X",
            email: $("#notifEmail").val(),
            message: "This person wants to be notified when the use cases are ready."
       };
        console.log(formData);
        const options =  {
            type:     "post",
            data:     formData,
            cache:    false,
            url:      api,
            dataType: "text" };
         $.ajax(options).then(() => {
             window.location.assign('https://mailthis.to/confirm');
         }).error(() => {
            alert("unable to send email"); 
         });
    })
    
    $("#sendConnect").click(() => {
       let formData = {
           name: $("#name").val(),
           email: $("#email").val(),
           message: $("#message").val()
       };
        console.log(formData);
        const options =  {
            type:     "post",
            data:     formData,
            cache:    false,
            url:      api,
            dataType: "text" };
         $.ajax(options).then(() => {
             window.location.assign('https://mailthis.to/confirm');
         }).error(() => {
            alert("unable to send email"); 
         });
    });
    
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("nav ul li a");
    window.onscroll = () => {
        if (!window.location.toLocaleString().includes("project")) {
             let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;

                if (pageYOffset >= sectionTop) {
                    current = section.getAttribute("id");
                }
            });

            for (let link of navLi) {
                $(link).removeClass("active");
                if (current === "") {
                    $('nav').find('.home').addClass('active'); 
                } else if ($(link).hasClass(current)) {
                    $(link).addClass("active");
                }
            }
        }
    };
})
