var express = require('express');
var router = express.Router();

/*
 * GET all decorations
 */
router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('decorations');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/*
 * Post line in room
 */
router.post('/addDecoration', function(req, res) {
    var db = req.db;
    var collection = db.get('decorations');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: 'inserted' } : { msg: err }
        );
    });
});

router.delete('/deleteDecoration', function(req, res) {
    var db = req.db;
    db.decorations.remove({'_id': new ObjectID(req.body._id)}, function(err, docs) {
        res.json(docs);
    });
});

module.exports = router;