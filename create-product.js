$(document).ready(function () {
    // $('.step-header').click(function(){
    //     $(this).parent().toggleClass('active-step');
    // })

    //check if all inputs are filled and open 2 section
    $('#step1').click(function () {
        let inputs = $(this).parents('.steps').find('.input-active');
        inputs.each(function () {
            if ($(this).val() === '') {
            } else {
                $('.step-2').addClass('active-step');
                $(this).parents('.steps').removeClass('active-step');
                $(this).parents('.steps').addClass('verified-step');
                return false;
            }
        })

        $(document).on('click', '.verified-step', function () {

            if ($(window).width() > 768) {
                $(this).toggleClass('active-step')
                console.log('dddd')
            } else {
                $('.steps').removeClass('active-step')
                $(this).addClass('active-step')
            }

        })
    })


    //check if all inputs are filled and open 3 section
    $('#step2').click(function () {
        // let inputs = $(this).parents('.step-body').find('.checkForValid');
        let inputs = $('.input-active');
        let allFilled = true;
        inputs.each(function () {
            if ($(this).val() == '') {
                allFilled = false;
                return false;
            }
        })
        $('.step-3').addClass('active-step')
        console.log("allFilled " + allFilled)
    })


    $('.complete-step').click(function () {
        let inputs = $(this).parents('.step-body').find('.checkForValid');
        inputs.each(function () {
            if (!$(this).val()) {
                $(this).addClass('error-border')
            }
        })
    })
    $('.checkForValid').change(function () {
        if ($(this).val()) {
            $(this).removeClass('error-border')
        }
    })

    //active step toggle content section
    // $('.active-step').click(function (){
    //     $(this).find('.step-body').toggle();
    // })

    // set date
    const DATE = Date();
    let dateInput = $('.set_date');
    dateInput.val(DATE);

    // change fields due to radio buttons

    $(".radioSelect").each(function () {
        showSpecificFields(this);
    });

    $(".radioSelect").click(function () {
        showSpecificFields(this);
    });


    function showSpecificFields(obj) {
        if ($(obj).is(":checked")) {
            var radioVal = $(obj).val();
            $(".fieldsSpecific").each(function () {
                if ($(this).attr('data-id') == radioVal) {
                    $(this).show();
                    $(this).find('input[type=text]').addClass('input-active')
                } else {
                    $(this).hide();
                    $(this).find('input[type=text]').removeClass('input-active')
                }
            });
        }
    }
});

// create image preview
$(document).on("click", "i.del", function () {
    $(this).parent().remove();
});
$(function () {
    $(document).on("change", ".uploadFile", function () {
        var uploadFile = $(this);
        var files = !!this.files ? this.files : [];
        if (!files.length || !window.FileReader) return; // no file selected, or no FileReader support

        if (/^image/.test(files[0].type)) { // only image file
            var reader = new FileReader(); // instance of the FileReader
            reader.readAsDataURL(files[0]); // read the local file

            reader.onloadend = function () { // set image data as background of div
                //alert(uploadFile.closest(".upimage").find('.imagePreview').length);
                uploadFile.closest(".imgUp").find('.imagePreview').css("background-image", "url(" + this.result + ")");
            }
        }

    });
});

//make verified steps toggle


