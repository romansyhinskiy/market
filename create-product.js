$(document).ready(function() {
    $('.step-header').click(function(){
        $(this).parent().toggleClass('active-step');
    })


    $('.complete-step').click(function(){
        let inputs = $(this).parents('.step-body').find('.checkForValid');
        inputs.each(function(){
            if(!$(this).val()){
                $(this).addClass('error-border')
            }
        })
    })
    $('.checkForValid').change(function(){
        if($(this).val()){
            $(this).removeClass('error-border')
            
        }
    })

    // set date
    const DATE = Date();
    let dateInput = $('.set_date');
    dateInput.val(DATE);

    // change fields due to radio buttons

    $(".radioSelect").each(function(){
        showSpecificFields(this);
    });
    
    $(".radioSelect").click(function(){
       showSpecificFields(this);
    });
    
    
    function showSpecificFields(obj){
        if($(obj).is(":checked")){
        var radioVal = $(obj).val();
         $(".fieldsSpecific").each(function(){
             if($(this).attr('id') == radioVal){
                 $(this).show();
             } else{
                 $(this).hide();                 
             }
         });   
        }
    }
});