import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-161",
	localId: 161,

	// Card informations
	name: {
		en: "Bodybuilding Dumbbells",
		fr: "Haltères de Culturisme",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/161/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/161/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/161/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/161/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte ajoute 40 PV au Pokémon de Niveau 1 auquel elle est attachée.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
