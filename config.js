const mongoose = requires('mongoose');

const uri = 'mongodb+srv://Mridul:Mridul2431@cluster0.lz1q6ul.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect("mongodb://localhost:27017/collectionName", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});