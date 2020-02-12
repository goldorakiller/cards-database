import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-124",
	localId: 124,

	// Card informations
	name: {
		en: "Apricorn Maker",
		fr: "Artisan de Noigrumes",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/124/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/124/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/124/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/124/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez dans votre deck jusqu’à 2 cartes Objet contenant le mot « Ball » dans leur nom, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
