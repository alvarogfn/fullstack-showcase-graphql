export class PersonalMasks {
  static readonly BRL = {
    mask: "R$ money",
    blocks: {
      money: {
        mask: Number,
        scale: 2,
        radix: ",",
        min: 0,
        maxLength: 2,
        placeholderChar: "0",
      },
    },
  };

  private constructor() {}
}
