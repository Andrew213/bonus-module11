const element = document.querySelector('.select');
const choices = new Choices(element, {
   searchEnabled: false,
});

//#################################################################

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [48.872197, 2.354224],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14
    });
    // Создание геообъекта с типом точка (метка).
// var myGeoObject = new ymaps.GeoObject({
//    geometry: {
//        type: "Point", // тип геометрии - точка
//        coordinates: [48.872197, 2.354224] // координаты точки
//    }
// });

myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
   hintContent: 'Собственный значок метки',
   balloonContent: 'Это красивая метка'
}, {
   // Опции.
   // Необходимо указать данный тип макета.
   iconLayout: 'default#image',
   // Своё изображение иконки метки.
   iconImageHref: '../img/gps.svg',
   // Размеры метки.
   iconImageSize: [30, 42],
   // Смещение левого верхнего угла иконки относительно
   // её "ножки" (точки привязки).
   iconImageOffset: [-5, -38]
}),

// Размещение геообъекта на карте.
myMap.geoObjects.add(myPlacemark)

//#################################################################

// const telInputEl = document.querySelector('input[type="tel"]');
// let mask = new Inputmask('+7 ( )- - -');

// mask.mask(telInputEl)
}


Inputmask({"mask": "+7 (999) 999-9999"}).mask(document.querySelector('input[type="tel"]'));

//#################################################################

new window.JustValidate('.feedback', {
   colorWrong: '#FF5C00',
   rules: {
name:{
   required: true,
   minLength: 2,
   maxLength: 10
},
tel: {
   required: true,
   function: (name,value) => {
      const phone = selector.inputmask.unmakedvalue()
      return Number(phone) && phone.length === 10
   }
      },
      mail: {
         required: true,
         email: true,
            },
   },

   messages: {
      name: {
        minLength: 'Минимум 2 символа'
      },
      name:'Как вас зовут?',
      mail: 'Укажите ваш телефон',
      tel: 'Укажите ваш email'
    },

});

