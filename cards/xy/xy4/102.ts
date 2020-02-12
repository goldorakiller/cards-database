import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-102",
	localId: 102,

	// Card informations
	name: {
		en: "Robo Substitute Team Flare Gear",
		fr: "Leurre Matos Team Flare",
	},

	hp: 30,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/102/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/102/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/102/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/102/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Jouez cette carte comme si c'était un Pokémon Colorless de base avec 30 PV. N'importe quand pendant votre tour (avant votre attaque), vous pouvez défausser cette carte du jeu. Cette carte ne peut pas battre en retraite. Si cette carte est mise K.O., votre adversaire ne peut pas récupérer de carte Récompense pour cette carte.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
