const userModel = require("../models/userModel");

class User {

    async getSingleUser(req, res) {
        let { userId } = req.body;
        if (!userId) {
            return res.json({ error: "All filled must be required" });
        } else {
            try {
                let User = await userModel
                    .find({ userId: userId });
                if (User) {
                    return res.json({ User });
                }
            } catch (err) {
                console.log(err);
            }
        }
    }

    async getAllUser(req, res) {
        try {
            const { count, subscription } = req.body;
            let query = {};

            if (subscription) {
                query['subscription.status'] = subscription;
            }

            if (count === true) {
                const userCount = await userModel.countDocuments(query);
                return res.json({ count: userCount });
            } else {
                const users = await userModel.find(query);
                res.json(users);
            }
        } catch (error) {
            console.error('Error retrieving users:', error);
            res.status(500).json({ error: 'An error occurred while retrieving users' });
        }
    }

    async updateUserRole(req, res) {
        try {

            let { userId, userRole } = req.body;

            const user = await userModel.findOneAndUpdate(
                { userId: userId },
                { userRole: userRole },
                { new: true }
            );

            if (user) {
                return res.json({ success: "User role updated successfully" });
            } else {
                return res.json({ error: "User not found" });
            }
        } catch (error) {
            console.error('Error updating user role:', error);
            return { error: 'An error occurred while updating user role' };
        }
    };

    async deleteUser(req, res) {

        const userId = req.params.userId;

        try {
            const deletedUser = await userModel.findOneAndDelete({ userId });

            if (deletedUser) {
                res.sendStatus(200);
            } else {
                res.sendStatus(404);
            }
        } catch (error) {
            res.sendStatus(500);
        }
    }

    async newUsers(req, res) {
        const weeks = parseInt(req.params.weeks);

        const startDate = new Date();
        startDate.setDate(startDate.getDate() - weeks * 7);

        try {
            const users = await userModel.find({
                createdAt: { $gte: startDate },
            });

            res.json(users);
        } catch (error) {
            res.sendStatus(500);
        }
    }

}

const usersController = new User();
module.exports = usersController;
