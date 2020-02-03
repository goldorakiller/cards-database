import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl1-119",
	localId: 119,

	// Card informations
	name: {
		en: "Armor Fossil",
		fr: "Fossile armure",
	},

	hp: 50,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl1/119/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/119/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl1/119/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl1/119/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Jouez Fossile armure comme si c'était un Pokémon de base Colorless. (Fossile armure compte aussi comme une carte Dresseur mais si Fossile armure est mise K.O, elle compte comme un Pokémon K.O). Fossile armure ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser Fossile armure. (Cela ne compte pas comme un Pokémon K.O.)",
		},
	},{
		name: {
			fr: "Armure de pierre:",
		},
	}],







	rarity: Rarity.Common,

	category: Category.TRAINER,

	set: {
		name: "Platinum",
		code: "pl1"
	}
}

export default card

