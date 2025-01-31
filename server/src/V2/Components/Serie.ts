import { objectLoop } from '@dzeio/object-util'
import { Serie as SDKSerie, SerieResume, SupportedLanguages } from '@tcgdex/sdk'
import { Query } from '../../interfaces'
import { handlePagination, handleSort, handleValidation } from '../../util'
import Set from './Set'

type LocalSerie = Omit<SDKSerie, 'sets'> & {sets: () => Array<Set>}

export default class Serie implements LocalSerie {

	id!: string
	name!: string
	logo?: string | undefined

	public constructor(
		private lang: SupportedLanguages,
		private serie: SDKSerie
	) {
		objectLoop(serie, (it, key) => {
			if (key === 'sets') {
				return
			}
			this[key as 'id'] = it as string
		})
	}

	public sets(): Array<Set> {
		return this.serie.sets.map((s) => Set.findOne(this.lang, {filters: { id: s.id }}) as Set)
	}

	public static getAll(lang: SupportedLanguages): Array<SDKSerie> {
		return require(`../../../generated/${lang}/series.json`)
	}

	public static find(lang: SupportedLanguages, query: Query<SDKSerie>) {
		return handlePagination(handleSort(handleValidation(this.getAll(lang), query), query), query)
			.map((it) => new Serie(lang, it))
	}

	public static findOne(lang: SupportedLanguages, query: Query<SDKSerie>) {
		const res = handleValidation(this.getAll(lang), query)
		if (res.length === 0) {
			return undefined
		}
		return new Serie(lang, res[0])
	}

	public resume(): SerieResume {
		return {
			id: this.id,
			name: this.name,
			logo: this.logo
		}
	}

	public full(): SDKSerie {
		return this.serie
	}
}
