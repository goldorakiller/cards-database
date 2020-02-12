import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-91",
	localId: 91,

	// Card informations
	name: {
		en: "Ultimate Zone",
		fr: "Zone ultime",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/91/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/91/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/91/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/91/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 123,
		name: "Yusuke Ishikawa"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est mise en jeu. Si une autre carte comportant le même nom est en jeu, vous ne pouvez pas jouer cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Lors du tour de chaque joueur, celui-ci peut déplacer une carte Énergie attachée à 1 de ses Pokémon de Banc sur son Arceus Actif autant de fois qu'il ou elle le veut.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
