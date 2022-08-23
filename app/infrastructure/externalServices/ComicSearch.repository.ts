import { config } from '@/config';
import algoliasearch, { SearchClient, SearchIndex } from 'algoliasearch/lite';
import { ComicSearch, OptionsAlgolia } from '@/domain/ComicSearch.response';
export class ComicSearchRepository {
    client: SearchClient;
    index: SearchIndex;

    constructor() {
        this.client = algoliasearch(config.ALGOLIA.APP_ID, config.ALGOLIA.API_KEY);
        this.index = this.client.initIndex(config.ALGOLIA.INDEX_NAME);
    }

    async search(query: string, options?: OptionsAlgolia) {
        const { hits } = await this.index.search<ComicSearch>(query, options);
        return hits;
    }

}

export const comicSearchRepositoryInstance = new ComicSearchRepository();