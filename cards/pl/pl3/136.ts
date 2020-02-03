import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-136",
	localId: 136,

	// Card informations
	name: {
		en: "Cynthia's Guidance",
		fr: "Les conseils de Cynthia",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/136/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/136/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/136/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/136/high.png",
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
			fr: "Vous ne pouvez jouer qu'une seule carte Supporter par tour. Lorsque vous la jouez, placez-la à côté de votre Pokémon Actif. À la fin du tour, défaussez-la.",
		},
	},{
		name: {},
		text: {
			fr: "Regardez les 7 cartes du dessus de votre deck, choisissez-en 1 et placez-la dans votre main. Replacez les autres cartes au-dessus du deck. Ensuite, mélangez votre deck.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card

