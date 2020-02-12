import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-133",
	localId: 133,

	// Card informations
	name: {
		en: "Maxie's Hidden Ball Trick",
		fr: "Ruse de Max",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/133/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/133/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/133/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/133/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Vous pouvez jouer cette carte seulement lorsque c'est la dernière carte dans votre main.\n\nPlacez un Pokémon Fighting de votre pile de défausse sur votre Banc. Ensuite, piochez 5 cartes.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
