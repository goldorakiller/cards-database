import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-5",
	localId: 5,

	// Card informations
	name: {
		en: "Serperior",
		fr: "Majaspic",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 497,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/5/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/5/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/5/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/5/high.png",
		},
	},

	evolveFrom: {
		en: "Servine",
		fr: "Lianaja",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes",
		},
		damage: 40
	},{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Leaf Storm",
			fr: "Tempêteverte",
		},
		text: {
			en: "Heal 20 damage from each of your Grass Pokémon.",
			fr: "Soignez 20 dégâts à chacun de vos Pokémon Grass.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
