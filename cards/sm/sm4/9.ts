import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-9",
	localId: 9,

	// Card informations
	name: {
		en: "Accelgor",
		fr: "Limaspeed",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 617,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/9/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/9/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/9/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/9/high.png",
		},
	},

	evolveFrom: {
		en: "Shelmet",
		fr: "Escargaume",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 61,
		name: "tetsuya koizumi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Recover",
			fr: "Soin",
		},
		text: {
			en: "Discard an Energy from this Pokémon and heal all damage from it.",
			fr: "Défaussez une Énergie attachée à ce Pokémon et soignez tous les dégâts de ce Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Speed Attack",
			fr: "Attaque Rapide",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
