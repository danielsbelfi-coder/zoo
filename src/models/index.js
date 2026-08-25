const { Animal } = require("./animals.models.js");
const { Keeper } = require("./keepers.models.js");
const { Animals_keepers } = require("./animals_keepers.models.js");


Animal.belongsToMany(Keeper, {
    through: Animals_keepers,
    foreignKey: "animal_id",
    otherKey: "keeper_id",
    as: "keepers"
})

Keeper.belongsToMany(Animal, {
    through: Animals_keepers,
    foreignKey: "keeper_id",
    otherKey: "animal_id",
    as: "animals"
})

module.exports = {
    Animal,
    Keeper,
    Animals_keepers
}