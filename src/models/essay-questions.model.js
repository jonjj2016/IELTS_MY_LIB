// essayQuestions-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
    const modelName = 'essayQuestions';
    const mongooseClient = app.get('mongooseClient');
    const {
        Schema
    } = mongooseClient;
    const schema = new Schema({
        question: {
            type: String,
            required: true
        },
        category: {
            type: String,
            enum: ['work', 'sport', "travel", "society", 'technology', 'reading', 'transport', 'general', 'media&advertising', 'language', 'health', 'food', 'family&children', "environment", "education", , "economics", "crime&punishment", "communication&personality", "business&money", "art"],
            default: "general"
        },
        comments: [],
        answers: [],
        createBy: {
            type: String,
            enum: ["student", 'tutor', 'admin'],
            default: "student"
        },
        posted: {
            type: Boolean,
            default: false
        }
    }, {
        timestamps: true
    });

    // This is necessary to avoid model compilation errors in watch mode
    // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
    if (mongooseClient.modelNames().includes(modelName)) {
        mongooseClient.deleteModel(modelName);
    }
    return mongooseClient.model(modelName, schema);

};