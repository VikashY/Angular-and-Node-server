const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var paymentSchema = new mongoose.Schema({
    // PMID: {
    //     type: String,
    //     //required: 'Full name can\'t be empty'
    // },
    CName: {
        type: String,
        //required: 'Full name can\'t be empty'
    },
    CNumber: {
        type: String,
        //required: 'Email can\'t be empty',
        unique: true
    },
    CVV: {
        type: String,
        //required: 'Password can\'t be empty',
       // maxlength: [3, 'Password must be atleast 3 character long']
    },
    CYear: {
        type: String,
        //required: 'Full name can\'t be empty'
    },
    //saltSecret: String
});

// Custom validation for email
// userSchema.path('email').validate((val) => {
//     emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid e-mail.');

// Events
// userSchema.pre('save', function (next) {
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(this.password, salt, (err, hash) => {
//             this.password = hash;
//             this.saltSecret = salt;
//             next();
//         });
//     });
// });


// Methods
// userSchema.methods.verifyPassword = function (password) {
//     return bcrypt.compareSync(password, this.password);
// };

// userSchema.methods.generateJwt = function () {
//     return jwt.sign({ _id: this._id},
//         process.env.JWT_SECRET,
//     {
//         expiresIn: process.env.JWT_EXP
//     });
// }



mongoose.model('Payment', paymentSchema);