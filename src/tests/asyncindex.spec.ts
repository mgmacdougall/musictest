import {getSong} from '../asyncindex';


describe('Test', ()=>{
  it('Test', async()=>{
    const res = await getSong();
    console.log(res?.artists.hits)
      expect(res?.artists.hits.length).toEqual(5)
  })
})