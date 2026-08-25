const { Association } = require("sequelize")
const {Keeper, Animal} = require("../models")

const getAllKeepers = async (req, res) => {
    const Keepers = await Keeper.findAll({
        include: {
            model: Animal,
            as: "animals"
        }
    })

    res.status(200).json({
        success: true,
        data: Keepers
    })
}

module.exports = {
    getAllKeepers
}