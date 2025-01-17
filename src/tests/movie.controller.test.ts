import { getMovies } from '../controllers/movie.controller';

describe('Movie Controller', () => {
    it('should have a getMovies function', () => {
        expect(typeof getMovies).toBe('function');
    });
});
