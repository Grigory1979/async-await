import GameSavingLoaderWithAsync from '../GameSavingLoaderWithAsync';

jest.setTimeout(15000);

test('should return promise for load()', async () => {
  const result = await GameSavingLoaderWithAsync.load();
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: 'Hitman',
      level: 10,
      points: 2000,
    },
  };
  expect(result).toEqual(expected);
}, 10000);

test('should catch an error for load()', async () => {
  GameSavingLoaderWithAsync.load = jest
    .fn()
    .mockRejectedValue(new Error('Test error'));

  try {
    await GameSavingLoaderWithAsync.load();
  } catch (error) {
    expect(error.message).toBe('Test error');
  }
}, 10000);