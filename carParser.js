var contentHolderElem = document.getElementById("contentHolderElem");
var contentHolder = "";
    contentHolder += '<div class="uk-section uk-section-muted">';
        contentHolder += '<div class="uk-container">';
            contentHolder += '<h3>Section</h3>';
            contentHolder += '<div class="uk-grid-match uk-child-width-1-3@m" uk-grid>';
                contentHolder += '<div>';
                    contentHolder += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>';
                contentHolder += '</div>';
                contentHolder += '<div>';
                    contentHolder += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>';
                contentHolder += '</div>';
                contentHolder += '<div>';
                    contentHolder += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>';
                contentHolder += '</div>';
            contentHolder += '</div>';
        contentHolder += '</div>';
    contentHolder += '</div>';
if(contentHolderElem.innerHTML != null){
    contentHolderElem.innerHTML = contentHolder;
}
