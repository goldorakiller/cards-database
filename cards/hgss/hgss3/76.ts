import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-76",
	localId: 76,

	// Card informations
	name: {
		en: "Ruins of Alph",
		fr: "Ruines d'Alph",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/76/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/76/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/76/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/76/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cette carte reste en jeu lorsque vous la jouez. Défaussez-la si une autre carte Stade est jouée. Si une autre carte du même nom est en jeu, vous ne pouvez pas l'utiliser.",
		},
	},{
		name: {},
		text: {
			fr: "Chaque Pokémon en jeu n'a aucune Résistance.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
