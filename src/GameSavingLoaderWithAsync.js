import read from './reader';
import json from './parser';

export default class GameSavingLoaderWithAsync {
  static load = async () => {
    try {
      const resolve = await read();
      const data = await json(resolve);
      return JSON.parse(data);
    } catch (e) {
      console.error('An error occurred: ', e.message);
      return null;
    }
  };
}