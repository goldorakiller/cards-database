import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-97",
	localId: 97,

	// Card informations
	name: {
		en: "Double Dragon Energy",
		fr: "Double Énergie Dragon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/97/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/97/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/97/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/97/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte ne peut être attachée qu'à un Pokémon Dragon. Cette carte fournit n'importe quel type d'Énergie, mais ne fournit que 2 Énergies à la fois, uniquement pendant qu'elle est attachée à un Pokémon Dragon.\n\n(Si cette carte est attachée à autre chose qu'un Pokémon Dragon, défaussez cette carte.)",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.ENERGY,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
