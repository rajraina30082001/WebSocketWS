import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
  sport: { type: String, required: true },
  homeTeam: { type: String, required: true },
  awayTeam: { type: String, required: true },
  status: {
    type: String,
    enum: ['scheduled', 'live', 'finished'],
    default: 'scheduled',
    required: true
  },
  startTime: { type: Date },
  endTime: { type: Date },
  homeScore: { type: Number, default: 0, required: true },
  awayScore: { type: Number, default: 0, required: true },
  createdAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

const commentarySchema = new mongoose.Schema({
  matchId: { type: mongoose.Schema.Types.ObjectId, ref: 'Match', required: true },
  minute: { type: Number },
  sequence: { type: Number },
  period: { type: String },
  eventType: { type: String },
  actor: { type: String },
  team: { type: String },
  message: { type: String, required: true },
  metadata: { type: mongoose.Schema.Types.Mixed },
  tags: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});

const Match = mongoose.model('Match', matchSchema);
const Commentary = mongoose.model('Commentary', commentarySchema);

export {Match,Commentary};
