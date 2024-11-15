import { StyleSheet } from 'react-native';

// color palette
export const Colors = {
  primary: 'purple',
  secondary: '#2ecc71',
  background: '#f5f5f5',
  textPrimary: '#333333',
  textSecondary: '#7f8c8d',
  placeHolder: '#aaaaaa',
  border: '#dddddd',
  error: '#ff0000',
  white: '#ffffff',
};

// font sizes values
export const FontSizes = {
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
};

// spacing values
export const Spacing = {
  small: 8,
  medium: 16,
  large: 24,
  xLarge: 32,
};

// border radius values
export const BorderRadius = {
  small: 4,
  medium: 8,
  large: 16,
};

// Global StyleSheet
const globalStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.medium,
  },
  containerCenter: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: Spacing.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitle: {
    fontSize: FontSizes.xLarge,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: Colors.textPrimary,
  },
  btnContainer: {
    width: '90%',
    padding: Spacing.medium,
    marginVertical: 10,
    borderRadius: BorderRadius.medium,
    backgroundColor: Colors.primary,
    alignSelf: 'center',
  },
  btnTitle: {
    fontSize: FontSizes.medium,
    fontWeight: 'bold',
    color: Colors.background,
    textAlign: 'center',
  },
  text: {
    fontSize: FontSizes.medium,
    color: Colors.textPrimary,
  },
  errorText: {
    color: Colors.error,
    fontSize: FontSizes.small,
    marginTop: Spacing.small,
  },
  placeholderText: {
    fontSize: FontSizes.medium,
    color: Colors.placeHolder,
  },
  heading: {
    fontSize: FontSizes.large,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  subheading: {
    fontSize: FontSizes.medium,
    color: Colors.textPrimary,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.small,
    paddingHorizontal: Spacing.medium,
    borderRadius: BorderRadius.medium,
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: FontSizes.medium,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: Colors.white,
    padding: Spacing.medium,
    borderRadius: BorderRadius.medium,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    elevation: 3,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: FontSizes.large,
    fontWeight: 'bold',
    marginBottom: Spacing.small,
  },
  cardSubtitle: {
    fontSize: FontSizes.medium,
    color: Colors.textPrimary,
    marginBottom: Spacing.small,
  },
  lightText: {
    fontSize: FontSizes.small,
    color: Colors.textSecondary,
    marginBottom: Spacing.small,
  },
});

export default globalStyles;
