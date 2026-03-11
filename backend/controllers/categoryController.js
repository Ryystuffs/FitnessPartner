const Category = require("../models/categoryModel");
const { mongoose } = require("mongoose");

const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({}).sort({ name: 1 });
        res.status(200).json(categories);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const createCategory = async (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: "Please provide a category name" });
    }
    try {
        const categories = await Category.create({ name });
        res.status(200).json(categories);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }
};
const deleteCategory = async (req, res) => {
    const { id } = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "No such category" });
        }

        const workoutsUsingCategory = await Workout.find({ category: id });
        if (workoutsUsingCategory.length > 0) {
            return res.status(400).json({
                error: "Cannot delete category. It is used by workouts.",
            });
        }

        const category = await Category.findOneAndDelete({ _id: id });
        if (!category) {
            return res.status(404).json({ error: "No such category" });
        }

        res.status(200).json(category);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const updateCategory = async (req, res) => {
    const { id } = req.params;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({ error: "No such category" });
        }
        const category = await Category.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!category) {
            return res.status(404).json({ error: "No such category" });
        }
        res.status(200).json(category);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCategories,
    createCategory,
    deleteCategory,
    updateCategory,
};
