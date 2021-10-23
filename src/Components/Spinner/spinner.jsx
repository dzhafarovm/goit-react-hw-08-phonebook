import Loader from 'react-loader-spinner';

export const LoaderSpinner = () => {
  return <Loader type="Oval" color="#0ab38e" height={20} width={20} />;
};

export const LoaderSpinnerDots = () => {
  return <Loader type="ThreeDots" color="#0ab38e" height={10} width={20} />;
};
