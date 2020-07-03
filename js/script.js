//var a = 8;
//var b = 'Hello ';
//var db = 'world';
//var c = true;
//var d = 5;
//a = 10;
//a = prompt('Введите значение а')
//if (a == 8) {
//    alert('All right')
//} else {
//    alert('something went wrong')
//}


// Цыкл 
//for (
//    var i = 0; i < 5; i++) {
//    alert(i);
//}


//Обьекты
//var obj {
//    'key': 'value',
//    'key': 'value',
//    'key': 'value'
//}


//var user = {
//    'name': 'Pavel',
//    'surname': 'Dzhus',
//    'age': '17'
//}
//alert(user.surname)

//Массивы
//var mas = ['Pavel', 'Dzhus', '17']
//alert(mas[1]);



//Функции

//function magic(a, b) {
//    alert(a + b);
//}
//magic(6, 7);


//var btn = document.getElementById('btn');
//btn.onclick = function (e) {
//    e.preventDefault();
//    var text = document.querySelector('p.offer__text');
//    text.classList.add('red');
//    var img = document.querySelector('img.offer__img');
//    img.style.display = 'none';
//    document.querySelector('.ticket__item').style.marginLeft = '100px'
//    var brg = document.querySelector('.logo');
//    brg.classList.toggle('active');
//}


$(function () {
    $(window).scroll(function () {
        $('.ticket__items').each(function () {
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topОfWindow + 650) {
                $(this).addClass('animate__fadeInLeft');
            }
        });
    });
    $(window).scroll(function () {
        $('.title').each(function () {
            var imagePos = $(this).offset().top;

            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow + 650) {
                $(this).addClass("animate__fadeInUp");
            }
        });
    });
});
