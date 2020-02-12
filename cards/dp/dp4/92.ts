import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-92",
	localId: 92,

	// Card informations
	name: {
		en: "Volbeat",
		fr: "Muciole",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 313,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/92/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/92/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/92/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/92/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 900,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Light Conduct",
			fr: "Conducteur de lumière",
		},
		text: {
			en: "Once during your turn (before your attack), if you have Illumise in play, you may search your discard pile for a Supporter card, show it to your opponent, and put it on top of your deck. This power can't be used if Volbeat is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), si vous avez Lumivole en jeu, vous pouvez choisir dans votre pile de défausse une carte Supporter. Montrez-la à votre adversaire et placez-la au dessus de votre deck. Ce pouvoir ne peut pas être utilisé si Muciole est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Firefly Light",
			fr: "Lumière de luciole",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
