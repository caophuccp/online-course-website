const express = require('express');
const debug = require('debug')('app:home');

const router = express.Router();


//guest
router.get('/', function (req, res) {
  debug("listing in home");
  res.render('guest/home.hbs', {
    layout: 'guest_layout'
  })
})


router.get('/home', function(req, res) {
  res.render('guest/home',{
      layout: 'guest_layout'
  });
});

router.get('/course_details', function (req, res) {
  res.render('guest/course_details.hbs', {
    layout: 'guest_layout'
  })
})


router.get('/course_list', function (req, res) {
  res.render('guest/course_list.hbs', {
    layout: 'guest_layout'
  })
})

router.get('/sign_up', function (req, res) {
  res.render('guest/sign_up.hbs', {
    layout: 'guest_layout'
  })
})

router.get('/search_results', function (req, res) {
  res.render('guest/search_results.hbs', {
    layout: 'guest_layout'
  })
})

router.get('/log_in', function (req, res) {
  res.render('guest/log_in.hbs', {
    layout: 'guest_layout'
  })
})


//user
router.get('/watch_list', function (req, res) {
  res.render('user/watch_list.hbs', {
    layout: 'user_layout'
  })
})

router.get('/user_profile', function (req, res) {
  res.render('user/profile.hbs', {
    layout: 'user_layout'
  })
})

router.get('/registered_list', function (req, res) {
  res.render('user/registered_list.hbs', {
    layout: 'user_layout'
  })
})

router.get('/feedback', function (req, res) {
  res.render('user/feedback.hbs', {
    layout: 'rating_layout'
  })
})

router.get('/studying', function (req, res) {
  res.render('user/studying.hbs', {
    layout: 'user_layout'
  })
})

//teacher
router.get('/teacher_profile', function (req, res) {
  res.render('teacher/profile.hbs', {
    layout: 'teacher_layout'
  })
})

router.get('/update_course', function (req, res) {
  res.render('teacher/update_course.hbs', {
    layout: 'teacher_layout'
  })
})

router.get('/upload_course', function (req, res) {
  res.render('teacher/upload_course.hbs', {
    layout: 'teacher_layout'
  })
})


module.exports = router;