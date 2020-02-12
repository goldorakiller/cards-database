import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-75",
	localId: 75,

	// Card informations
	name: {
		en: "Magearna-EX",
		fr: "Magearna-EX",
	},

	hp: 160,

	type: [
		Type.METAL,
	],

	dexId: 801,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/75/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/75/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/75/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/75/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},

	abilities: [{
		id: 549,
		type: AbilityType.TALENT,
		name: {
			en: "Mystic Heart",
			fr: "Cœur Mystique",
		},
		text: {
			en: "Prevent all effects of your opponent's attacks, except damage, done to each of your Pokémon that has any Metal Energy attached to it. (Existing effects are not removed.)",
			fr: "Évitez tous les effets des attaques de votre adversaire, excepté les dégâts, infligés à chacun de vos Pokémon auquel de l’Énergie Metal est attachée. (Les effets déjà en action ne sont pas retirés.)",
		}
	}],

	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Soul Blaster",
			fr: "Déflagr’Âme",
		},
		text: {
			en: "During your next turn, this Pokémon's Soul Blaster attack's base damage is 60.",
			fr: "Pendant votre prochain tour, les dégâts de base de l’attaque Déflagr’Âme de ce Pokémon sont de 60.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
