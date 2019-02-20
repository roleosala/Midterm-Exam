var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/place/',
        url: 'place.html',
      },
      {
        path: '/members/',
        url: 'members.html',
      },
    ],
    // ... other parameters
  });
  
  var mainView = app.views.create('.view-main');
  var $$ = Dom7;

var myPhotoBrowserPopup = app.photoBrowser.create({
    photos : [
        '../images/pic1.jpg',
          '../images/pic2.jpg',
          '../images/pic3.jpg',
          '../images/pic4.jpg',
          '../images/pic5.jpg',
          '../images/pic6.jpg',
          '../images/pic7.jpg',
          '../images/pic8.jpg',
    ],
    type: 'page',
    backLinkText: 'Back'
});
$$('.pb-paged12').on('click', function () {
    myPhotoBrowserPopup.open();
});

var myPhotoBrowserPage = app.photoBrowser.create({
    photos : [
        '../images/rec1.jpeg',
          '../images/rec2.jpeg',
          '../images/rec3.jpeg',
          '../images/rec4.jpeg',
    ],
    type: 'page',
    backLinkText: 'Back'
});
$$('.pb-page').on('click', function () {
    myPhotoBrowserPage.open();
});
