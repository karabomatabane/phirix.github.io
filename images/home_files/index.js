$(() => {
    if ($(window).width() <= 375) {
        $("#home .row").find(".col-5").removeClass("col-5");
        $("#home").find(".row").removeClass("row");
    }
    const mail = "gmphiri92@gmail.com"
    const api = `https://mailthis.to/${mail}`
     $('input, textarea').val("");
    
    $("#download").click(() => {
        window.open("docs/KMatabane_CV.pdf");
    });
    
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

    };
})
