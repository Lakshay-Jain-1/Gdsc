import mongoose, { Schema } from "mongoose";

const TaskCompletionSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    task: { type: Schema.Types.ObjectId, ref: 'Task', required: true },
    completedAt: { type: Date, default: Date.now },
    pointsEarned: { type: Number, required: true }
});

// Prevent duplicate task completions
TaskCompletionSchema.index({ user: 1, task: 1 }, { unique: true });

export const TaskCompletion = mongoose.model('TaskCompletion', TaskCompletionSchema);