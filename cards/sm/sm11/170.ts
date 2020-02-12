import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-170",
	localId: 170,

	// Card informations
	name: {
		en: "Slaking",
		fr: "Monaflèmit",
	},

	hp: 180,

	type: [
		Type.COLORLESS,
	],

	dexId: 289,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/170/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/170/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/170/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/170/high.png",
		},
	},

	evolveFrom: {
		en: "Vigoroth",
		fr: "Vigoroth",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},

	abilities: [{
		id: 622,
		type: AbilityType.TALENT,
		name: {
			en: "Counterattack",
			fr: "Contre-Attaque",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon and is damaged by an opponent's attack (even if this Pokémon is Knocked Out), put 4 damage counters on the Attacking Pokémon.",
			fr: "Si ce Pokémon est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si ce Pokémon est mis K.O.), placez 4 marqueurs de dégâts sur le Pokémon Attaquant.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dynamic Swing",
			fr: "Retour Dynamique",
		},
		text: {
			en: "You may do 100 more damage. If you do, during your opponent's next turn, this Pokémon takes 100 more damage from attacks (after applying Weakness and Resistance).",
			fr: "Vous pouvez infliger 100 dégâts supplémentaires. Dans ce cas, pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts supplémentaires provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
