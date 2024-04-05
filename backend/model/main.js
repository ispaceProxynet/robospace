import  mongoose from 'mongoose';

const newsletterSchema = new mongoose.Schema({ 

 email: { type: String, },
  },
  {
    timestamps: true
  }
) 

const Main = mongoose.model("Main", newsletterSchema)
export default Main