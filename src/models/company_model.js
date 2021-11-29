const mongoose = require('mongoose');


const companySchema = new mongoose.Schema(
    {
      company: { type: String, required: true },
      Detail:{ type:String , required: false },
      open_job:{type:Number,required:false},
    },
    {
      versionKey: false,
      timestamps: true,
    }
  );
module.exports = mongoose.model("company", companySchema);
  