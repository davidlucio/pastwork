/** DomReady Function **/

$(document).ready(function(){
    
    selectStyler();
    
});

function selectStyler(){
    $('select').each(function(){
        var selectedOption = $(this).val();
        
        $(this).on('change', function() {
                        
            if(selectedOption != 'null' || selectedOption != "") {
                $(this).removeClass("emptySelect");
                $(this).addClass("fullSelect");
            }
            
        });
    });
}