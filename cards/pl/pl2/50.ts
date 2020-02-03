import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl2-50",
	localId: 50,

	// Card informations
	name: {
		en: "Starmie",
		fr: "Staross Niv. 44",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 121,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl2/50/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/50/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl2/50/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl2/50/high.png",
		},
	},

	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 726,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Aqua Recycle",
			fr: "Aqua recyclage",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your discard pile for a Water Energy card, show it to your opponent, and put it into your hand. This power can't be used if Starmie is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez chercher dans votre pile de défausse une carte Énergie Water. Montrez-la à votre adversaire et placez-la dans votre main. Ce pouvoir ne peut pas être utilisé si Staross est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Synchro Gain",
			fr: "Synchro-gain",
		},
		text: {
			en: "If Starmie and the Defending Pokémon have the same amount of Energy attached to them, remove 4 damage counters from Starmie.",
			fr: "Si Staross et le Pokémon Défenseur possèdent le même nombre d'Énergies, retirez à Staross 4 marqueurs de dégât.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Powerful Spin",
			fr: "Pirouette puissante",
		},
		text: {
			en: "Starmie can't attack during your next turn.",
			fr: "Staross ne peut pas attaquer lors de votre prochain tour.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Rising Rivals",
		code: "pl2"
	}
}

export default card

