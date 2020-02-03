import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-25",
	localId: 25,

	// Card informations
	name: {
		en: "Deoxys Defense Forme",
		fr: "Deoxys Forme Défense",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 386,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/25/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/25/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/25/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/25/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 122,
		name: "Kazuaki Aihara"
	},

	abilities: [{
		id: 43,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Form Change",
			fr: "Changement de forme",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for any Deoxys and switch it with Deoxys Defense Forme. (Any cards attached to Deoxys Defense Forme, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys Defense Forme on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre deck une autre Deoxys et l'échanger avec Deoxys Forme Défense. (Toutes les cartes qui lui sont attachées, marqueurs de dégât, États Spéciaux et autres effets se trouvent maintenant sur le nouveau Pokémon.) Placez alors Deoxys Forme Défense au dessus de votre deck. Ensuite, mélangez votre deck. Vous ne pouvez pas utiliser plus d'1 Poké-Power Changement de forme par tour.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Defense",
			fr: "Défense psy",
		},
		text: {
			en: "During your opponent's next turn, prevent all effects of an attack, and any damage done to Deoxys by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, prévenez tous les effets d'une attaque et tous dégâts infligés à Deoxys par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

