import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM146",
	localId: "SM146",

	// Card informations
	name: {
		en: "Leafeon-GX",
		fr: "Phyllali-GX",
	},

	hp: 200,

	type: [
		Type.GRASS,
	],

	dexId: 470,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM146/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM146/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM146/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM146/high.png",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.GX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 1195,
		type: AbilityType.TALENT,
		name: {
			en: "Breath of the Leaves",
			fr: "Souffle du Feuillage",
		},
		text: {
			en: "If this Pokémon is your Active Pokémon, once during your turn (before your attack), you may heal 50 damage from 1 of your Pokémon that has any Energy attached to it.",
			fr: "Si ce Pokémon est votre Pokémon Actif, une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 50 dégâts à l’un de vos Pokémon auquel de l’Énergie est attachée.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Solar Beam",
			fr: "Lance-Soleil",
		},
		damage: 110
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Grand Bloom-GX",
			fr: "Efflorescence-GX",
		},
		text: {
			en: "For each of your Benched Basic Pokémon, search your deck for a card that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)",
			fr: "Pour chacun de vos Pokémon de Banc de base, cherchez dans votre deck une carte Évolution de ce Pokémon et placez-la sur ce Pokémon pour le faire évoluer. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
