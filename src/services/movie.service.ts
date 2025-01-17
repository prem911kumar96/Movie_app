import { httpClient } from '../utils/httpClient';

export const getMoviesByYear = async (year: string, page: number = 1) => {
    try {
        const response = await httpClient.get('/discover/movie', {
            params: {
                language: 'en-US',
                page,
                primary_release_year: year,
                sort_by: 'popularity.desc'
            }
        });

        return response.data.results.map((movie: any) => ({
            id: movie.id,
            title: movie.title,
            release_date: movie.release_date,
            vote_average: movie.vote_average
        }));
    } catch (error) {
        console.error('Error fetching movies:', (error as Error).message);
        return [];
    }
};
