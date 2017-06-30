
// AJAX Delete Category
$(function () {

    // Initialization Select
    $('select').material_select();

    // Initialize Dropdown
    $(".dropdown-button").dropdown();

    $('.category-delete').on('click', (e) => {
       
        $target = $(e.target);

        $.ajax({
            type: 'DELETE',
            url: '/categories/delete/' + $target.attr('data-cat-id'),
            success: (respopnse) => {
                window.location.href='/manage/categories';
              
                Materialize.toast('Category Removed!', 4000); 
              
            },
            error: (error) => {
                console.log('error');
            }
        });
    }); // end on()

    // AJAX Delete Article
    $('a.article-delete.btn.red.darken-3.hoverable').on('click', (e) => {

        $target = $(e.target);

        $.ajax({
            type: 'DELETE',
            url: '/articles/delete/' + $target.attr('data-art-id'),
            success: (respopnse) => {
                window.location.href='/manage/articles';
              
                Materialize.toast('Article Removed!', 4000); 
              
            },
            error: (error) => {
                console.log('error');
            }
        });
    });
});

