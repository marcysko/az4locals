const router = require('express').Router();
<<<<<<< HEAD
const sequelize = require('../config/connection');
const { Post, User, Comment, Vote } = require('../models');
=======
const { Post, Comment, User } = require('../models');
>>>>>>> f18615ea2bb3c47825323a70ea401bdad1204d35

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
<<<<<<< HEAD
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
=======
    include: [User],
    
>>>>>>> f18615ea2bb3c47825323a70ea401bdad1204d35
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

<<<<<<< HEAD
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
=======
      res.render("current-posts", { posts });
>>>>>>> f18615ea2bb3c47825323a70ea401bdad1204d35
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single post
router.get('/post/:id', (req, res) => {
<<<<<<< HEAD
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'post_url',
      'title',
      'created_at',
      [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
=======
  Post.findByPk(req.params.id, {
    include: [
      User,
      {
        model: Comment,
        include: [User],
      },
    ],
  })
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });

        res.render("single-post", { post });
      } else {
        res.status(404).end();
      }
>>>>>>> f18615ea2bb3c47825323a70ea401bdad1204d35
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

<<<<<<< HEAD
module.exports = router;
=======
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
>>>>>>> f18615ea2bb3c47825323a70ea401bdad1204d35
