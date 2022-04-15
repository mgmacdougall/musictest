import { getSong } from '../asyncindex';

const TESTSTRING = 'kiss the sky';
describe('Song Index Test', () => {

  it('Should return "4" artists when "kiss the sky" value used', async () => {
      const res = await getSong(TESTSTRING);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const num: number = res!.artists.hits!.length;
      expect(num).toEqual(4);
    });
    
    it('Should return "5" tracks when had coded value used.', async () => {
      const res = await getSong(TESTSTRING);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const num: number = res!.tracks.hits!.length;
      expect(num).toEqual(5);
  });
  
});
