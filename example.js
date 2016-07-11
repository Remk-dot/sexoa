$('p').each(function() {
    var $this = $(this);
    
    if($this.html().replace(/\s|&nbsp;|<br>|<br class="Apple-interchange-newline">/g, '').length == 0){
                $this.remove();
    }
    
    $('.ecr-blog-temp p br').remove();
});
