const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Payment = mongoose.model('Payment');

module.exports.paymentregister = (req, res, next) => {
    var payment = new Payment();
    payment.CName = req.body.CardOwnerName;
    payment.CNumber = req.body.CardNumber;
    payment.CVV = req.body.CVV;
    //payment.PMID = req.body.PMID;
    payment.CYear=req.body.ExpirationDate;
    payment.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate card no. found.']);
            else
                return next(err);
        }

    });
}


module.exports.userDetail = (req, res, next) =>{
    Payment.find({}, function(err, docs){
        if(err) 
           res.json(err);
        else
           res.json(docs);
	});
}   

module.exports.DeletePaymentDetail = (req, res, next) =>{
    Payment.remove({CNumber: req.params.id},function(err, doc){
        if(err) 
           res.json(err);
        else
           res.json(doc);
	});
}  