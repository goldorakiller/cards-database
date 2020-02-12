import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp5-84",
	localId: 84,

	// Card informations
	name: {
		en: "Old Amber",
		fr: "Vieil Ambre",
	},

	hp: 50,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp5/84/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/84/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp5/84/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp5/84/high.png",
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
			fr: "Jouez Vieil Ambre comme si c'était un Pokémon de base Colorless. ( Vieil Ambre compte aussi comme une carte Dresseur mais si  Vieil Ambre est mise K.O, elle compte comme un Pokémon K.O.)  Vieil Ambre ne peut pas être affectée par des États Spéciaux et ne peut pas battre en retraite. N'importe quand lors de votre tour, avant votre attaque, vous pouvez défausser  Vieil Ambre. (Cela ne compte pas comme un Pokémon K.O).",
		},
	},{
		name: {
			fr: "Ambre solide:",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Majestic Dawn",
		code: "dp5"
	}
}

export default card
