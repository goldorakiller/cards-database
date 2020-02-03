import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-16",
	localId: 16,

	// Card informations
	name: {
		en: "Torracat",
		fr: "Matoufeu",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 726,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/16/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/16/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/16/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/16/high.png",
		},
	},

	evolveFrom: {
		en: "Litten",
		fr: "Flamiaou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Swagger",
			fr: "Vantardise",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy from your opponent's Active Pokémon.",
			fr: "Lancez une pièce. Si c’est face, défaussez une Énergie du Pokémon Actif de votre adversaire.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Claws",
			fr: "Griffes Enflammées",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card

