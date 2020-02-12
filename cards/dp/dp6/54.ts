import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-54",
	localId: 54,

	// Card informations
	name: {
		en: "Exeggutor",
		fr: "Noadkoko",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 103,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/54/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/54/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/54/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/54/high.png",
		},
	},

	evolveFrom: {
		en: "Exeggcute",
		fr: "Owei",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		name: {
			en: "Psychic Strategy",
			fr: "Stratégie psy",
		},
		text: {
			en: "Each player counts the number of cards in his or her opponent's hand. Each player shuffles his or her hand into his or her deck. Then, each player draws a number of cards equal to the number of cards his or her opponent had.",
			fr: "Chaque joueur compte le nombre de cartes dans la main de son adversaire, Chaque joueur mélange sa main avec son deck. Ensuite, chaque joueur pioche autant de cartes que son adversaire avait en main.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Super Eggsplosion",
			fr: "Super eggsplosion",
		},
		text: {
			en: "Discard as many Energy cards as you like attached to your Pokémon. For each Energy card you discarded, flip a coin. This attack does 50 damage times the number of heads.",
			fr: "Défaussez autant de cartes Énergie attachées à votre Pokémon que vous le voulez. Pour chaque carte Énergie défaussée, lancez une pièce. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
