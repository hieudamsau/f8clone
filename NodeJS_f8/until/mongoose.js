
module.exports = {
    mutipleMongooseToObject : function(mongooses){
        return mongooses.map(mongoosedb => mongoosedb.toObject());
    },
    mongooseToObject: (function(mongoosedb){
        return mongoosedb ? mongoosedb.toObject() : mongoosedb;
    })
};