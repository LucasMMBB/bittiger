var express = require('express');
var router = express.Router();

/*Get news listing. */
router.get('/', function(req, res, next){
	news = [
					{
						'url':'https://www.nytimes.com/2017/03/28/business/energy-environment/trump-coal-executive-order-impact.html?hp&action=click&pgtype=Homepage&clickSource=story-heading&module=a-lede-package-region&region=top-news&WT.nav=top-news',
						'title': "Inside andrew puzder's failed nomination",
						'description': "In the end, Andrew Puzder had too much baggage -- both persionaland profesionlasjlfjsdfj",
						'source':'cnn',
						'urlToImage':"https://static01.nyt.com/images/2017/03/29/business/29IMPACT/29IMPACT-master768.jpg",
						'digest':"3RjuEomJo2601syZbU70HA==\n",
						'reason': "Recommend"
					},{
						'url':'https://www.nytimes.com/2017/03/29/world/europe/brexit-uk-eu-article-50.html?hp&action=click&pgtype=Homepage&clickSource=image&module=b-lede-package-region&region=top-news&WT.nav=top-news&_r=0',
						'title': "andrew puzder's failed nomination",
						'description': "Andrew Puzder had too much baggage -- both persionaland profesionlasjlfjsdfj",
						'source':'NYTIMES',
						'urlToImage':'https://static01.nyt.com/images/2017/03/29/world/30Britain1/30Britain1-master768.jpg',
						'digest':"33RjuEomJo2601syZbU70HA==\n",
						'reason': "Recommend"
					}
	];

	res.json(news);
});

module.exports = router;