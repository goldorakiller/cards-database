import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-70",
	localId: 70,

	// Card informations
	name: {
		en: "Unown O",
		fr: "Zarbi O",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/70/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/70/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/70/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/70/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 94,
		name: "Daisuke Ito"
	},

	abilities: [{
		id: 1061,
		type: AbilityType.POKEPOWER,
		name: {
			en: "ONE",
			fr: "One",
		},
		text: {
			en: "Once during your turn (before your attack), if you have Unown O, Unown N, and Unown E on your Bench and you have 1 card left in your hand, you may draw cards until you have 7 cards in your hand.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si Zarbi O, Zarbi N et Zarbi E sont sur votre Banc et qu'il vous reste 1 carte en main, vous pouvez piocher des cartes jusqu'à ce que vous ayez 7 cartes en main.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
