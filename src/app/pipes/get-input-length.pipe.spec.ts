import { GetInputLengthPipe } from './get-input-length.pipe';

describe('getInputLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new GetInputLengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should calculate with 0 deciaml places', () => {
    const controlAttr = {
      mask: 'separator.0',
      maskSeparator: ',',
      minLength: 1,
      maxLength: 8,
    };
    const pipe = new GetInputLengthPipe();
    const res = pipe.transform(controlAttr, 'maxLength');
    expect(res).toBe(10);
  });

  it('should calculate with 2 deciaml places', () => {
    const controlAttr = {
      mask: 'separator.2',
      maskSeparator: ',',
      minLength: 1,
      maxLength: 8,
    };
    const pipe = new GetInputLengthPipe();
    const res = pipe.transform(controlAttr, 'maxLength');
    expect(res).toBe(13);
  });

  it('should calculate with 2 deciaml places and not maskSeparator', () => {
    const controlAttr = {
      mask: 'separator.2',
      minLength: 1,
      maxLength: 8,
    };
    const pipe = new GetInputLengthPipe();
    const res = pipe.transform(controlAttr, 'maxLength');
    expect(res).toBe(11);
  });

  it('should not return length if mask is not a separator mask', () => {
    const controlAttr = {
      mask: '0000 0000',
      minLength: 8,
      maxLength: 8,
    };
    const pipe = new GetInputLengthPipe();
    const res = pipe.transform(controlAttr, 'maxLength');
    expect(res).toBeNull();
  });

  it('should return length if no mask', () => {
    const controlAttr = {
      minLength: 8,
      maxLength: 8,
    };
    const pipe = new GetInputLengthPipe();
    const res = pipe.transform(controlAttr, 'maxLength');
    expect(res).toBe(controlAttr.maxLength);
  });

  it('should calculate with no deciaml places or maskSeparator', () => {
    const controlAttr = {
      mask: 'separator.0',
      minLength: 1,
      maxLength: 8,
    };
    const pipe = new GetInputLengthPipe();
    const res = pipe.transform(controlAttr, 'maxLength');
    expect(res).toBe(8);
  });
});
