let input = $('#mojInput');

$('.addBtn').click(function() {

    let inputValue = input.val();

    if (inputValue > '') {

        let ul = $('.mojUl');

        let mojLi = document.createElement('li');
        let textSpan = document.createElement('span');
        textSpan.append(inputValue);
        mojLi.append(textSpan);

        // X

        let span = document.createElement('span');
        $(span).text('X').slice();

        $(span).click(function() {

            $(span).parent().toggleClass('animX');
            
            setTimeout(function() {
                $('.animX').remove();
            }, 750);  
        });

        // -----------------------------------------

        // Line through
        let spanTwo = document.createElement('span')
        $(spanTwo).slice();

        $(spanTwo).click(function() {
            
            $(textSpan).toggleClass('check');
            $(spanTwo).toggleClass('img');

        });
        // -------------------------------------------
        
        mojLi.append(span);
        mojLi.append(spanTwo);
        input.val('');
        ul.append(mojLi);

   }else {
       alert('Type something!');
   }
});


$(input).keypress(function(event) {

    let inputValue = input.val();

    if( event.which == 13 ) {
        
        if (inputValue > '') { 

            // adding 'li' element to HTML
            let ul = $('.mojUl');

            let mojLi = document.createElement('li');
            let textSpan = document.createElement('span');
            textSpan.append(inputValue);
            mojLi.append(textSpan);

            // X

            let span = document.createElement('span');
            $(span).text('X').slice();

            $(span).click(function() {

                $(span).parent().toggleClass('animX');
                
                setTimeout(function() {
                    $('.animX').remove();
                }, 750);

            });

            // -----------------------------------------

            // Line through
            let spanTwo = document.createElement('span')
            $(spanTwo).slice();

            $(spanTwo).click(function() {
                
                $(textSpan).toggleClass('check');
                $(spanTwo).toggleClass('img');

            });
            // -------------------------------------------
            
            mojLi.append(span);
            mojLi.append(spanTwo);
            input.val('');
            ul.append(mojLi);
            
      }else {
          alert('Type something!');
      }
    }
});