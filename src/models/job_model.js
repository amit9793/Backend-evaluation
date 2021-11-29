const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema(
    {
      job_name: { type: String, required: true },
      work_from_home:{type: String,required: false},
      notice:{type:Number,required:false},
      rating:{type:Number,required:false} 
    },
    {
      versionKey: false,
      timestamps: true,
    }
);

module.exports = mongoose.model("job", jobSchema);
  