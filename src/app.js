import GameSavingLoaderWithAsync from './GameSavingLoaderWithAsync';

const showGameSavingLoaderWithAsync = async () => {
  try {
    const result = await GameSavingLoaderWithAsync.load();
    console.log('async - result load(): user level', result.userInfo.level);
  } catch (error) {
    console.error(error);
  }
};

showGameSavingLoaderWithAsync();