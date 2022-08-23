$('.todo__new__btn').on('click', function () {
    $('.todo__new').show()
    $(this).hide()
})

$('.todo button[type="reset"]').on('click', function() {
    $('.todo__new').hide()
    $('.todo__new__btn').show()
})