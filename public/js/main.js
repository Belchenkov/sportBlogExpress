
// AJAX Delete Category
$(function () {
    $('.category-delete').on('click', (e) => {
       
        $target = $(e.target);

        $.ajax({
            type: 'DELETE',
            url: '/categories/delete/' + $target.attr('data-cat-id'),
            success: (respopnse) => {
                window.location.href='/manage/categories';
              
                Materialize.toast('Category Removed!', 4000) 
              
            },
            error: (error) => {
                console.log('error');
            }
        });
    }); // end on()
});