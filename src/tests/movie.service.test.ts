import { getMoviesByYear } from '../services/movie.service';

jest.mock('../utils/httpClient', () => ({
    httpClient: {
        get: jest.fn().mockResolvedValue({
            data: { results: [{ id: 123, title: 'Joker', release_date: '2019-10-04', vote_average: 8.19 }] }
        })
    }
}));

describe('Movie Service', () => {
    it('should return movies sorted by popularity', async () => {
        const movies = await getMoviesByYear('2019');
        expect(movies).toEqual([
            { id: 123, title: 'Joker', release_date: '2019-10-04', vote_average: 8.19 }
        ]);
    });
});
