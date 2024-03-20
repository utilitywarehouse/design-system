function mapFontWeight(weight: string) {
  switch (weight) {
    case '100':
      return 'Thin';
    case '200':
      return 'ExtraLight';
    case '300':
      return 'Light';
    case '400':
      return 'Regular';
    case '500':
      return 'Medium';
    case '600':
      return 'SemiBold';
    case 'bold':
    case '700':
      return 'Bold';
    case '800':
      return 'ExtraBold';
    case '900':
      return 'Black';
    default:
      return 'Regular';
  }
}

export default mapFontWeight;
