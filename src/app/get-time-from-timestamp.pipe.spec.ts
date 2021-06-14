import { GetTimeFromTimestampPipe } from './get-time-from-timestamp.pipe';

describe('GetTimeFromTimestampPipe', () => {
  it('create an instance', () => {
    const pipe = new GetTimeFromTimestampPipe();
    expect(pipe).toBeTruthy();
  });
});
