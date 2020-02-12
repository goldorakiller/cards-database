import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-131",
	localId: 131,

	// Card informations
	name: {
		en: "Order Pad",
		fr: "Terminal de Commande",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/131/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/131/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/131/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/131/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 38,
		name: "Eske Yoshinob"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lancez une pièce. Si c’est face, cherchez une carte Objet dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
