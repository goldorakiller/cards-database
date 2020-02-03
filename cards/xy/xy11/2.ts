import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-2",
	localId: 2,

	// Card informations
	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 465,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/2/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/2/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/2/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/2/high.png",
		},
	},

	evolveFrom: {
		en: "Tangela",
		fr: "Saquedeneu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 95,
		name: "kirisAki"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leaf Storm",
			fr: "Tempête Verte",
		},
		text: {
			en: "Heal 40 damage from each of your Grass Pokémon.",
			fr: "Soignez 40 dégâts à chacun de vos Pokémon Grass.",
		},
		damage: 80
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Flog",
			fr: "Martinet",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card

