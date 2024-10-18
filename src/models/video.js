import mongoose, { mongo, Schema } from "mongoose";
import mongooseaggregatePaginate from 'mongoose-aggregate-paginate-v2';


const videoSchema = new mongoose.Schema(
    {
      videoFile:{
        type: String,
        required: true
      },
      Thumbnail:{
        type: String,
        required: true
      },
      Title:{
        type: String,
        required: true
      },
      Description:{
        type: String,
        required: true
      },
      duration:{
        type: Number,
        required: true
      },
      views:{
        type:Number,
        default: 0
      },
      isPublished:{
        type: Boolean,
        default: true
      },
      owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    },{
        timestamps: true
    }
)

videoSchema.plugin(mongooseaggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);