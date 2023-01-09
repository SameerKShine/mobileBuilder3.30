import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    shop: String,
    session_id: String,
    domain_id: String,
    accessToken: String,
    state: String,
    isOnline: Boolean,
    scope: String,
    onlineAccessInfo: Object,
    expires: String,
  },
  {
    timestamps: true,
  }
);
const SessionStorage = mongoose.model("SessionStorage", sessionSchema);
export default SessionStorage