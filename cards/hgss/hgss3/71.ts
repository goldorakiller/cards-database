import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-71",
	localId: 71,

	// Card informations
	name: {
		en: "Burned Tower",
		fr: "Tour Cendrée",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/71/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/71/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/71/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/71/high.png",
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
			fr: "Une seule fois pendant le tour de chaque joueur, ce joueur peut lancer une pièce. Si c'est face, il cherche une carte Énergie de base dans sa pile de défausse, la montre à son adversaire et l'ajoute à sa main.",
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

