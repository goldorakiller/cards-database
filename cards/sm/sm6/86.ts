import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-86",
	localId: 86,

	// Card informations
	name: {
		en: "Florges",
		fr: "Florges",
	},

	hp: 120,

	type: [
		Type.FAIRY,
	],

	dexId: 671,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/86/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/86/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/86/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/86/high.png",
		},
	},

	evolveFrom: {
		en: "Floette",
		fr: "Floette",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 77,
		name: "Satoshi Shirai"
	},

	abilities: [{
		id: 1146,
		type: AbilityType.TALENT,
		name: {
			en: "Wondrous Gift",
			fr: "Cadeau Merveilleux",
		},
		text: {
			en: "Once during your turn (before your attack), you may flip a coin. If heads, put an Item card from your discard pile on top of your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, placez une carte Objet de votre pile de défausse sur le dessus de votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Mist Guard",
			fr: "Bruine Gardienne",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by attacks from Dragon Pokémon during your opponent's next turn.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques de Pokémon Dragon pendant le prochain tour de votre adversaire.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
