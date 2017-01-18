let express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        let method = req.body._method
        delete req.body._method
        return method
      }
}))

router.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

router.route('/')
    .get(function(req, res, next) {
        mongoose.model('Article').find({}, function (err, articles) {
              if (err) {
                  return console.error(err);
              } else {
                  res.format({
                    json: function(){
                        res.render('articles/index', {
                              title: 'All articles',
                              "articles" : articles
                          });
                    }
                    ,
                    json: function(){
                        res.json(articles);
                    }
                });
              }
        });
    })
    .post(function(req, res) {
        let author = req.body.author;
        let title = req.body.title;
        let description = req.body.description;
        let url = req.body.url;
        let urlToImage = req.body.urlToImage;
        let publishedAt = req.body.publishedAt;
        mongoose.model('Article').create({
            author : author,
            title : title,
            description : description,
            url : url,
            urlToImage : urlToImage,
            publishedAt : publishedAt
        }, function (err, article) {
              if (err) {
                  res.send("There was a problem adding the information to the database.");
              } else {
                  console.log('POST creating new article: ' + article);
                  res.format({
                    json: function(){
                        res.location("articles");
                        res.redirect("/articles");
                    }
                    ,
                    json: function(){
                        res.json(article);
                    }
                });
              }
        })
    });

router.get('/new', function(req, res) {
    res.render('articles/new', { title: 'Add New article' });
});

router.param('id', function(req, res, next, id) {
    mongoose.model('Article').findById(id, function (err, article) {
        if (err) {
            console.log(id + ' was not found');
            res.status(404)
            let err = new Error('Not Found');
            err.status = 404;
            res.format({
                json: function(){
                    next(err);
                 }
                 ,
                json: function(){
                       res.json({message : err.status  + ' ' + err});
                 }
            });
        } else {
            req.id = id;
            next();
        }
    });
});

router.route('/:id')
  .get(function(req, res) {
    mongoose.model('Article').findById(req.id, function (err, article) {
      if (err) {
        console.log('GET Error: There was a problem retrieving: ' + err);
      } else {
        console.log('GET Retrieving ID: ' + article._id);
        let articlePublishedAt = article.publishedAt ? article.publishedAt.toISOString(): '';
        articlePublishedAt = articlePublishedAt.substring(0, articlePublishedAt.indexOf('T'))
        res.format({
          json: function(){
              res.render('articles/show', {
                "articlePublishedAt" : articlePublishedAt,
                "article" : article
              });
          }
          ,
          json: function(){
              res.json(article);
          }
        });
      }
    });
  });

router.route('/:id/edit')
	.get(function(req, res) {
	    mongoose.model('Article').findById(req.id, function (err, article) {
	        if (err) {
	            console.log('GET Error: There was a problem retrieving: ' + err);
	        } else {
	            console.log('GET Retrieving ID: ' + article._id);
              let articlepublishedAt = article.publishedAt ? article.publishedAt.toISOString(): '';
              articlepublishedAt = articlepublishedAt.substring(0, articlepublishedAt.indexOf('T'))
	            res.format({
	                json: function(){
	                       res.render('articles/edit', {
	                          title: 'Article' + article._id,
                            "articlepublishedAt" : articlepublishedAt,
	                          "article" : article
	                      });
	                 }
	                 ,
	                json: function(){
	                       res.json(article);
	                 }
	            });
	        }
	    });
	})
	.put(function(req, res) {
            let author = req.body.author;
            let title = req.body.title;
            let description = req.body.description;
            let url = req.body.url;
            let urlToImage = req.body.urlToImage;
            let publishedAt = req.body.publishedAt;
            mongoose.model('Article').findById(req.id, function (err, article) {
	            article.update({
                author : author,
                title : title,
                description : description,
                url : url,
                urlToImage : urlToImage,
                publishedAt : publishedAt
	        }, function (err, articleID) {
	          if (err) {
	              res.send("There was a problem updating the information to the database: " + err);
	          }
	          else {
	                  res.format({
	                      json: function(){
	                           res.redirect("/articles/" + article._id);
	                     }
	                     ,
	                    json: function(){
	                           res.json(article);
	                     }
	                  });
	           }
	        })
	    });
	})
	.delete(function (req, res){
	    mongoose.model('Article').findById(req.id, function (err, article) {
	        if (err) {
	            return console.error(err);
	        } else {
	            article.remove(function (err, article) {
	                if (err) {
	                    return console.error(err);
	                } else {
	                    console.log('DELETE removing ID: ' + article._id);
	                    res.format({
	                          json: function(){
	                               res.redirect("/articles");
	                         }
	                         ,
	                        json: function(){
	                               res.json({message : 'deleted',
	                                   item : article
	                               });
	                         }
	                      });
	                }
	            });
	        }
	    });
	});

module.exports = router;