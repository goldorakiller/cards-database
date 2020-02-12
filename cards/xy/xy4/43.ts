import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-43",
	localId: 43,

	// Card informations
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 609,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/43/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/43/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/43/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/43/high.png",
		},
	},

	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 116,
		name: "PLANETA"
	},

	abilities: [{
		id: 336,
		type: AbilityType.TALENT,
		name: {
			en: "Fainting Spell",
			fr: "Sort d'Évanouissement",
		},
		text: {
			en: "If this Pokémon is Knocked Out by damage from an opponent's attack, flip a coin. If heads, the Attacking Pokémon is Knocked Out.",
			fr: "Si ce Pokémon est mis K.O. par les dégâts d'une attaque de votre adversaire, lancez une pièce. Si c'est face, le Pokémon Attaquant est mis K.O.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cursed Drop",
			fr: "Chute Maudite",
		},
		text: {
			en: "Put 6 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Placez 6 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
