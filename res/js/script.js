// todo action toggler
$('.todo__item__wrapper').on('click', function() {
    let isExpand = $(this).hasClass('expand')
    
    $(this).next('.todo__item__actions').slideDown()
    $(this).addClass('expand')

    if(isExpand) {
        $(this).removeClass('expand')
        $(this).next('.todo__item__actions').slideUp()
    }
})

$('.todo__item__wrapper').next('.todo__item__actions').children().find('input').on('click', function() {
    let parentEl = $(this).closest('.todo__item__actions')
    console.log(parentEl);
    $(parentEl).prev().removeClass('expand')
    $(parentEl).slideUp()
})


// todo new button
$('.todo__new__btn').on('click', function () {
    $('.todo__new').show()
    $(this).hide()
})

$('.todo button[type="reset"]').on('click', function() {
    $('.todo__new').hide()
    $('.todo__new__btn').show()
})


// popup
$('.popup-btn').on('click', function() {
    let key = $(this).data().for;
    $(`.${key}`).addClass('show')
})
$(document).on("click", function (e) {
    if ($(e.target).closest(".popup-btn").length === 0 ) {
        $(".popup").removeClass("show");
    }
});

// Assign user select 
$('.assignUserSubmit').on('click', function() {
    let newUser = $('.assignUserNew').val();
    $('#assignUser').val(newUser)
    if(newUser.trim().length > 3) {
        $('[data-for="assignUserpopup"]').children('.content').text(newUser)
    }
})
$('.popup__user').click(function(){
    let user = $(this).children('.name').text();
    $('#assignUser').val(user)
    $('[data-for="assignUserpopup"]').children('.content').text(user)
})


// Fatpickrr
flatpickr("#dueDate", {
    dateFormat: "d-m-Y",
    onChange: function(selectedDates, dateStr, instance) {
        $('#dueDate').next('label').children('.content').text(dateStr)
    },
});


$('#todoNewForm').on('submit', function(e){
    e.preventDefault()
    let newTask = {
        title: e.target.todoTitle.value,
        desc: e.target.todoDesc.value,
        dueDate: e.target.dueDate.value,
        assignTo: e.target.assignUser.value
    }
    if(e.target.todoTitle.value) {
        console.log(newTask);
    } else {
        console.log('ERROOR');
    }
})