import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-129",
	localId: 129,

	// Card informations
	name: {
		en: "Bubble Coat",
		fr: "Manteau bulle",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/129/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/129/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/129/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/129/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: {
		id: 94,
		name: "Daisuke Ito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Attachez Manteau bulle à 1 de vos Pokémon qui ne possède pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez-la.",
		},
	},{
		name: {},
		text: {
			fr: "Tant que Manteau bulle est attachée à un Pokémon, ce Pokémon ne possède pas de Faiblesse. Si une attaque de votre adversaire lui inflige des dégâts, défaussez cette carte à la fin du tour.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
