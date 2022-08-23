import { RequestOptions } from '@algolia/transporter';
import { SearchOptions } from '@algolia/client-search';
export type OptionsAlgolia = (RequestOptions & SearchOptions) | undefined;

export interface SafeTitle {
    value: string;
    matchLevel: string;
    fullyHighlighted: boolean;
    matchedWords: string[];
}

export interface Alt {
    value: string;
    matchLevel: string;
    matchedWords: string[];
    fullyHighlighted?: boolean;
}

export interface Title {
    value: string;
    matchLevel: string;
    fullyHighlighted: boolean;
    matchedWords: string[];
}

export interface HighlightResult {
    safe_title: SafeTitle;
    alt: Alt;
    title: Title;
}

export interface ComicSearchResponse {
    id: number;
    height: number;
    width: number;
    month: string;
    link: string;
    year: string;
    safe_title: string;
    alt: string;
    img: string;
    title: string;
    day: string;
    objectID: string;
    _highlightResult: HighlightResult;
}


