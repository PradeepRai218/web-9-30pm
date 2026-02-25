const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            match: /^[a-zA-Z ]{2,15}$/,
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            validate: {
                validator: async function (v) {
                    const email = await this.constructor.findOne({ email: v, deleted_at : null, role_type : 'user' });
                    return !email;
                },
                message: props => `The specified email is already in use.`
            }
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        mobile_number: {
            type: String,
            default : ''
        },
        address: {
            type: String,
            default : ''
        },
        gender: {
            type: String,
            default : '' // 1 - Male 2 - Female
        },
        image: {
            type: String,
            default : ''
        },
        role_type : {
            type : String,
            default : 'user',
            enum : ['admin', 'user']
        },
        status: {
            type: Boolean,
            default: 1
        },
        created_at: {
            type: Date,
            default: Date.now()
        },
        updated_at: {
            type: Date,
            default: Date.now()
        },
        deleted_at: {
            type: Date,
            default: null
        }
    }
);

const userModal = mongoose.model('users', schema);

module.exports = {userModal};