const mongoose = require('mongoose');


const skillSchema = new mongoose.Schema(
    {
      job_name:{type:String,required: true},
      skill_name: { type: String, required: true },
      city_name:{type:String, required:true}
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
module.exports = mongoose.model("skill", skillSchema);
  