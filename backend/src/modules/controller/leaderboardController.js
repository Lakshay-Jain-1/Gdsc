import { User } from "../models/User";

export const getLeaderboard = async (req, res) => {
    try {
        const users = await User.find()
            .sort({ totalPoints: -1 })
            .limit(10)
            .select("username totalPoints");

        res.json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
